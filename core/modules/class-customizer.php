<?php

namespace WPOnion\Modules;

use WPOnion\Bridge\Module;

defined( 'ABSPATH' ) || exit;

/**
 * Class customizer
 *
 * @package WPOnion\Modules
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Customizer extends Module {
	/**
	 * module
	 *
	 * @var string
	 */
	protected $module = 'customizer';

	/**
	 * priority
	 *
	 * @var int
	 */
	protected $priority = 0;

	/**
	 * wp
	 *
	 * @var \WP_Customize_Manager
	 */
	protected $wp = null;

	/**
	 * Stores ALL Outersection ids.
	 *
	 * @var array
	 */
	protected $outers = array();

	/**
	 * Inits Module.
	 */
	public function on_init() {
		if ( is_customize_preview() ) {
			$this->init_fields();
		}
		$this->add_action( 'customize_register', 'customize_register' );
		$this->add_action( 'customize_controls_enqueue_scripts', 'load_styles' );
	}

	/**
	 * Renders / Creates An First Instance based on the $is_init_field variable value.
	 *
	 * @param array|\WPO\Field    $field
	 * @param bool|\WPO\Container $parent_section
	 * @param bool|\WPO\Container $section
	 *
	 * @return mixed
	 */
	public function render_field( $field = array(), $parent_section = false, $section = false ) {
		$hash = implode( '/', array_filter( array(
			( wpo_is_container( $parent_section ) ) ? $parent_section->name() : '',
			( wpo_is_container( $section ) ) ? $section->name() : '',
		) ) );
		return wponion_field( $field, wponion_get_field_value( $field, $this->get_db_values() ), array(
			'module' => $this->module(),
			'unique' => $this->unique(),
			'hash'   => $hash,
		) );
	}

	/**
	 * Inits All Base Fields.
	 */
	public function init_fields() {
		/**
		 * @var \WPO\Container $options
		 * @var \WPO\Container $section
		 */
		foreach ( $this->fields()->get() as $options ) {
			if ( $options->has_callback() ) {
				continue;
			}

			if ( $options->has_containers() ) {
				foreach ( $options->containers() as $section ) {
					if ( ! $section->has_callback() && $section->has_fields() ) {
						foreach ( $section->fields() as $field ) {
							$this->render_field( $field, $options, $section );
						}
					}
				}
			} elseif ( $options->has_fields() ) {
				foreach ( $options->fields() as $field ) {
					$this->render_field( $field, $options, false );
				}
			}
		}
	}

	/**
	 * Loads Required Styles.
	 */
	public function load_styles() {
		wponion_load_core_assets();
		wponion_load_asset( $this->option( 'assets' ) );
		$this->outer_sections_css();
	}

	/**
	 * @param $wp_customize \WP_Customize_Manager
	 */
	public function customize_register( $wp_customize = null ) {
		if ( empty( $this->wp ) ) {
			$this->wp = $wp_customize;
		}

		/**
		 * @var \WPO\Container $page
		 */
		foreach ( $this->fields()->get() as $page ) {
			if ( $page->has_containers() ) {
				$this->register_section( $page->containers(), $this->panels( $page, true ) );
			} elseif ( $page->has_fields() ) {
				$this->register_section( array( $page ) );
			}
		}
	}

	/**
	 * Registers With WordPress
	 *
	 * @param \WPO\Container $section
	 * @param bool           $is_parent
	 *
	 * @return \WP_Customize_Panel|\WP_Customize_Section|\WPOnion\Modules\Customizer\Panel|\WPOnion\Modules\Customizer\Section
	 */
	protected function panels( $section, $is_parent = false ) {
		$args = array(
			'title'       => $section->title(),
			'priority'    => ( isset( $section->priority ) ) ? $section->priority : null,
			'description' => ( isset( $section->description ) ) ? $section->description : null,
			'panel'       => ( isset( $section->panel ) ) ? $section->panel : null,
			'type'        => 'wponion',
		);

		if ( isset( $section->outer ) && true === $section->outer ) {
			$args['type']                     = 'outer';
			$this->outers[ $section->name() ] = $section->name();
		}

		if ( false !== $is_parent ) {
			return $this->wp->add_panel( new Customizer\Panel( $this->wp, $section->slug(), $args ) );
		}
		return $this->wp->add_section( new Customizer\Section( $this->wp, $section->slug(), $args ) );
	}

	/**
	 * Registers Sections and fields.
	 *
	 * @param mixed                                                                         $page
	 * @param \WPOnion\Modules\Customizer\Panel|\WPOnion\Modules\Customizer\Section|boolean $parent
	 */
	protected function register_section( $page, $parent = false ) {
		/**
		 * @var \WPO\Container $section
		 */
		foreach ( $page as $section ) {
			if ( false !== $parent ) {
				$section->panel = $parent->id;
			}

			$panel = $this->panels( $section );
			foreach ( $section->fields() as $field ) {
				$field['id']  = ( false === $field['id'] ) ? wponion_hash_array( $field ) . 'wpocustomid' : $field['id'];
				$class        = '\WPOnion\Modules\Customizer\control';
				$control_args = array(
					'unique'   => array(
						'module' => $this->module(),
						'unique' => $this->unique(),
					),
					'section'  => $panel->id,
					'settings' => $this->unique() . '[' . $field['id'] . ']',
					'priority' => ( isset( $field['priority'] ) ) ? $field['priority'] : null,
					'options'  => $field,
					'type'     => $field['type'],
				);

				$this->wp->add_setting( $control_args['settings'], wp_parse_args( $field, array( 'capability' => 'edit_theme_options' ) ) );
				$customizer_class = wponion_get_field_class( $field, 'customizer', true );
				if ( false !== $customizer_class ) {
					$class = $customizer_class;
				}
				$this->wp->add_control( new $class( $this->wp, $field['id'], $control_args, $this->default_wrap_class() ) );
			}
		}
	}

	/**
	 * Generate CSS for the outer sections.
	 * These are by default hidden, we need to expose them.
	 */
	public function outer_sections_css() {
		$css = '';
		if ( ! empty( $this->outers ) ) {
			foreach ( $this->outers as $sec_id ) {
				$css .= '#customize-theme-controls li#accordion-section-' . $sec_id . '{display:list-item!important;}';
			}
		}
		if ( ! empty( $css ) ) {
			echo '<style>' . esc_attr( $css ) . '</style>';
		}
	}
}
