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

if ( ! class_exists( '\WPOnion\Modules\Customizer' ) ) {
	/**
	 * Class customizer
	 *
	 * @package WPOnion\Modules
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Customizer extends \WPOnion\Bridge\Module {
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
		 * Renders / Creates An First Instance based on the $is_init_field variable value.
		 *
		 * @param array $field
		 * @param bool  $parent_section
		 * @param bool  $section
		 *
		 * @return mixed
		 */
		public function render_field( $field = array(), $parent_section = false, $section = false ) {
			$callback = 'wponion_field';
			return $callback( $field, wponion_get_field_value( $field, $this->get_db_values() ), array(
				'plugin_id' => $this->plugin_id(),
				'module'    => $this->module(),
				'unique'    => $this->unique,
				'hash'      => sanitize_title( $parent_section . '-' . $section ),
			) );
		}

		/**
		 * Inits All Base Fields.
		 */
		public function init_fields() {
			foreach ( $this->fields as $o => $options ) {
				if ( isset( $options['callback'] ) && false !== $options['callback'] ) {
					continue;
				}

				if ( isset( $options['sections'] ) ) {
					foreach ( $options['sections'] as $s => $section ) {
						if ( isset( $section['callback'] ) && false !== $section['callback'] || false === isset( $section['fields'] ) ) {
							continue;
						}

						foreach ( $section['fields'] as $f => $field ) {
							$this->render_field( $field, $options['name'], $section['name'] );
						}
					}
				} elseif ( isset( $options['fields'] ) ) {
					foreach ( $options['fields'] as $f => $field ) {
						$this->render_field( $field, $options['name'], false );
					}
				}
			}
		}

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
				if ( is_customize_preview() ) {
					$this->init_fields();
				}
				$this->add_action( 'customize_register', 'customize_register' );
				$this->add_action( 'customize_controls_enqueue_scripts', 'outer_sections_css' );
				$this->add_action( 'customize_controls_enqueue_scripts', 'load_styles' );
			}
		}

		/**
		 * Loads Required Styles.
		 */
		public function load_styles() {
			wponion_load_core_assets( array( 'wponion-customizer', 'wponion-postmessags' ) );
		}

		/**
		 * @param $wp_customize \WP_Customize_Manager
		 */
		public function customize_register( $wp_customize = null ) {
			if ( empty( $this->wp ) ) {
				$this->wp = $wp_customize;
			}

			foreach ( $this->fields as $page ) {
				if ( isset( $page['sections'] ) ) {
					$this->panels( $page, true );
					$this->register_section( $page['sections'], $page['name'] );
				} elseif ( isset( $page['fields'] ) ) {
					$this->register_section( array( $page ) );
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
					$field_db            = $this->unique() . '[' . $field['id'] . ']';
					$_fdbs               = wp_parse_args( $field, array(
						'type'       => 'option',
						'capability' => 'edit_theme_options',
					) );
					$_fdbs['field_type'] = $_fdbs['type'];
					$_fdbs['type']       = 'option';
					$this->wp->add_setting( $field_db, $_fdbs );

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

					if ( class_exists( '\WPOnion\Modules\Customize\Control\\' . $field['type'] ) ) {
						$class = '\WPOnion\Modules\Customize\Control\\' . $field['type'];
					} else {
						$class = '\WPOnion\Modules\Customize\control';
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

		/**
		 * Parses all fields and searches for the "partial_refresh" argument inside them.
		 * If that argument is found, then it starts parsing the array of arguments.
		 * Registers a selective_refresh in the customizer for each one of them.
		 *
		 * @param $field
		 */
		public function register_partials( $field ) {
			if ( ! isset( $this->wp->selective_refresh ) ) {
				return;
			}

			if ( isset( $field['partial_refresh'] ) && ! empty( $field['partial_refresh'] ) ) {
				foreach ( $field['partial_refresh'] as $partial_refresh => $partial_refresh_args ) {
					if ( isset( $partial_refresh_args['render_callback'] ) && isset( $partial_refresh_args['selector'] ) ) {
						$partial_refresh_args = wp_parse_args( $partial_refresh_args, array( 'settings' => $field['settings'] ) );
						$this->wp->selective_refresh->add_partial( $partial_refresh, $partial_refresh_args );
					}
				}
			}
		}

		public function on_init() {
		}
	}
}
