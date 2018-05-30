<?php
/**
 *
 * Initial version created 28-05-2018 / 02:00 PM
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @package
 * @link
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

namespace WPOnion\Modules;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Modules\customizer' ) ) {
	/**
	 * Class customizer
	 *
	 * @package WPOnion\Modules
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class customizer extends \WPOnion\Bridge\Module {
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
		 * customizer constructor.
		 *
		 * @param array $settings
		 * @param array $fields
		 */
		public function __construct( $settings = array(), $fields = array() ) {
			parent::__construct( $fields, $settings );
			$this->init();
		}

		/**
		 * Inits the current instance.
		 */
		public function init() {
			if ( ! empty( $this->fields ) ) {
				$this->add_action( 'customize_register', 'customize_register' );
				$this->add_action( 'customize_controls_print_footer_scripts', 'outer_sections_css' );
				$this->add_action( 'customize_controls_enqueue_scripts', 'load_styles' );
			}
		}

		public function load_styles() {
			wponion_load_asset( 'wponion-plugins' );
			wponion_load_asset( 'wponion-core' );
		}

		/**
		 * @param $wp_customize \WP_Customize_Manager
		 */
		public function customize_register( $wp_customize = null, $fields = array() ) {
			if ( empty( $fields ) ) {
				$this->wp = $wp_customize;
				$fields   = $this->fields;
			}

			foreach ( $fields as $page ) {
				if ( isset( $page['sections'] ) ) {
					$this->panels( $page, true );
					$this->register_section( $page['sections'], $page['name'] );
				} elseif ( isset( $page['fields'] ) ) {
					$this->register_section( array( $page ), '' );
				}
			}
		}

		/**
		 * Registers A Panel With WP.
		 *
		 * @param      $section
		 * @param bool $is_parent
		 */
		protected function panels( $section, $is_parent = false ) {
			$callback = ( true === $is_parent ) ? 'add_panel' : 'add_section';
			$args     = array(
				'title'       => $section['title'],
				'priority'    => ( isset( $section['priority'] ) ) ? $section['priority'] : null,
				'description' => ( isset( $section['description'] ) ) ? $section['description'] : '',
				'panel'       => ( isset( $section['panel'] ) ) ? $section['panel'] : '',
				'type'        => 'default',
			);

			if ( isset( $section['outer'] ) && true === $section['outer'] ) {
				$args['type'] = 'outer';
				if ( ! isset( $this->outers[ $section['name'] ] ) ) {
					$this->outers[ $section['name'] ] = $section['name'];
				}
				$this->wp->$callback( new \WP_Customize_Section( $this->wp, $section['name'], $args ) );
			} else {
				$this->wp->$callback( $section['name'], $args );
			}
		}

		/**
		 * Registers Sections and fields.
		 *
		 * @param      $page
		 * @param bool $parent
		 */
		protected function register_section( $page, $parent = false ) {
			foreach ( $page as $section ) {
				$this->panels( $this->parse_args( $section, array(
					'panel' => $parent,
				) ) );
				foreach ( $section['fields'] as $field ) {
					$field_db = $this->unique() . '[' . $field['id'] . ']';
					$this->wp->add_setting( $field_db, wp_parse_args( $field, array(
						'type'              => 'option',
						'capability'        => 'edit_theme_options',
						'sanitize_callback' => null,
					) ) );

					$control_args = array(
						'unique'   => array(
							'module'    => $this->module(),
							'plugin_id' => $this->plugin_id(),
							'unique'    => $this->unique(),
						),
						'section'  => $section['name'],
						'settings' => $field_db,
						'priority' => ( isset( $field['priority'] ) ) ? $field['priority'] : null,
						'options'  => $field,
					);

					$call_class = '\WPOnion\Modules\customize_control';
					$this->wp->add_control( new $call_class( $this->wp, $field['id'], $control_args ) );
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
}
