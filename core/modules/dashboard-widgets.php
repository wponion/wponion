<?php
/**
 *
 * Initial version created 22-05-2018 / 04:07 PM
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @package
 * @link
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( 'WPOnion_Dashboard_Widgets' ) ) {
	/**
	 * Class WPOnion_Dashboard_Widgets
	 *
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 *
	 * @todo work on widget save handler.
	 */
	class WPOnion_Dashboard_Widgets extends WPOnion_Feature_Abstract {
		protected $module         = 'dashboard_widgets';
		protected $is_widget_edit = false;
		protected $current_widget = false;


		/**
		 * WPOnion_Dashboard_Widgets constructor.
		 *
		 * @param array $settings
		 * @param array $fields
		 */
		public function __construct( $settings = array(), $fields = array() ) {
			parent::__construct( $fields, $settings );
			$this->add_action( 'wp_dashboard_setup', 'register_dashboard_widgets' );
			$this->add_action( 'load-index.php', '_init_theme' );
			$this->add_action( 'admin_print_scripts-index.php', 'load_assets' );

			$this->plugin_id = $this->settings['plugin_id'];
			wponion_dashboard_registry( $this );
		}

		/**
		 * Load The Required Assets.
		 */
		public function load_assets() {
			wponion_load_asset( 'wponion-core' );
		}

		/**
		 * Loads Required Assets.
		 */
		public function _init_theme() {
			$this->init_theme( '-init.php', '-dashboard-html.php' );
		}

		/**
		 * Registers Widgets With WP.
		 */
		public function register_dashboard_widgets() {
			$widget_render = array( &$this, 'render_widget' );
			if ( isset( $this->fields['name'] ) ) {
				$control_callback = isset( $this->fields['form_fields'] ) ? array( &$this, 'save_widget' ) : null;
				wp_add_dashboard_widget( $this->fields['name'], $this->fields['title'], $widget_render, $control_callback );
			} else {
				foreach ( $this->fields as $widget ) {
					if ( isset( $widget['name'] ) ) {
						$control_callback = isset( $widget['form_fields'] ) ? array( &$this, 'save_widget' ) : null;
						wp_add_dashboard_widget( $widget['name'], $widget['title'], $widget_render, $control_callback );
					}
				}
			}
		}

		/**
		 * Returns The Correct Widget Based On Widget ID.
		 *
		 * @param string $widget_id
		 *
		 * @return array|bool
		 */
		protected function get_widget_data( $widget_id = '' ) {
			if ( isset( $this->fields['name'] ) && $widget_id === $this->fields['name'] ) {
				return $this->fields;
			} else {
				foreach ( $this->fields as $widget ) {
					if ( isset( $widget['name'] ) && $widget_id === $widget['name'] ) {
						return $widget;
					}
				}
			}
			return false;
		}

		/**
		 * Loads The Selected Theme.
		 *
		 * @param $content
		 * @param $widget_data
		 *
		 * @return mixed
		 */
		public function render_widget( $content, $widget_data ) {
			if ( ! isset( $widget_data['id'] ) ) {
				return $content;
			}
			$this->current_widget = $this->get_widget_data( $widget_data['id'] );
			echo $this->init_theme( '-init.php', '-dashboard-html.php' );
		}

		/**
		 * @param string $extra_class
		 * @param bool   $bootstrap
		 *
		 * @return string
		 */
		public function wrap_class( $extra_class = '', $bootstrap = false ) {
			$default_class = $this->default_wrap_class( $bootstrap );

			$class = array( ' wponion-' . $this->option( 'theme' ) . '-theme ' );
			$class = wponion_html_class( $class, $default_class );
			$class = wponion_html_class( $extra_class, $class );
			return esc_attr( $class );
		}

		/**
		 * Renders Widgets Save Able Data.
		 */
		public function save_widget( $content, $widget_data ) {
			$this->is_widget_edit = true;
			if ( ! isset( $widget_data['id'] ) ) {
				return $content;
			}
			$this->current_widget = $this->get_widget_data( $widget_data['id'] );
			echo $this->init_theme( '-init.php', '-dashboard-html.php' );
		}

		protected function get_unique( $data ) {
			return ( isset( $data['option_name'] ) ) ? $data['option_name'] : $data['name'];
		}

		public function render() {
			if ( $this->is_widget_edit ) {
				foreach ( $this->current_widget['form_fields'] as $fields ) {
					echo wponion_add_element( $fields, null, $this->get_unique( $this->current_widget ) );
				}
			} else {
				foreach ( $this->current_widget['fields'] as $fields ) {
					echo wponion_add_element( $fields, null, $this->get_unique( $this->current_widget ) );
				}
			}
		}

		/**
		 * @return array
		 */
		protected function defaults() {
			return array(
				'plugin_id'     => '',
				'theme'         => 'wp',
				'template_path' => false,
			);
		}
	}
}
