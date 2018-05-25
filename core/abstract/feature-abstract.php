<?php
/**
 *
 * Initial version created 07-05-2018 / 10:11 AM
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @package wponion
 * @link http://github.com/wponion
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( 'WPOnion_Feature_Abstract' ) ) {
	/**
	 * Class WPOnion_Feature_Abstract
	 *
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	abstract class WPOnion_Feature_Abstract extends WPOnion_Module_Field_Handler {
		/**
		 * Stores Current template information.
		 * current_theme
		 *
		 * @var bool
		 */
		protected $current_theme = false;

		/**
		 * Stores Fields MD5.
		 *
		 * @var bool
		 */
		protected $fields_md5 = false;

		/**
		 * Store All Settings Menu.
		 *
		 * @var array
		 */
		protected $menus = array();

		/**
		 * Fields
		 *
		 * @var array
		 */
		protected $fields = array();

		/**
		 * Raw options
		 *
		 * @var array
		 */
		protected $raw_options = array();

		/**
		 * unique for database.
		 *
		 * @var string
		 */
		protected $unique = '';

		/**
		 * Stores Database Values.
		 *
		 * @var array
		 */
		protected $db_values = array();

		/**
		 * @param $name
		 * @param $arguments
		 *
		 * @return bool
		 */
		public function __call( $name, $arguments ) {
			if ( isset( $this->{$name} ) ) {
				return $this->{$name};
			}
			return false;
		}

		/**
		 * WPOnion_Settings constructor.
		 *
		 * @param array $fields Array of settings fields.
		 * @param array $settings array of WPOnion Settings Configuration.
		 */
		public function __construct( $fields = array(), $settings = array() ) {
			$this->fields   = $fields;
			$this->settings = $this->set_args( $settings );
		}

		/**
		 * Generated A Unique ID For each Options Array And stores it.
		 *
		 * @param array $fields
		 *
		 * @return bool|string
		 */
		protected function fields_md5( $fields = array() ) {
			if ( false === $this->fields_md5 ) {
				$fields           = empty( $fields ) ? $this->fields : $fields;
				$this->fields_md5 = wponion_hash_array( wponion_get_all_fields_ids_and_defaults( $fields ) );
			}
			return $this->fields_md5;
		}

		/**
		 * Generates Few Default Wrap Class.
		 *
		 * @param bool $bootstrap
		 *
		 * @return array|string
		 */
		protected function default_wrap_class( $bootstrap = false ) {
			$class   = array( 'wponion-framework' );
			$class[] = 'wponion-module-' . $this->module() . '-framework';
			$class[] = 'wponion-module-' . $this->module();
			$class[] = 'wponion-' . $this->plugin_id() . '-' . $this->module();
			$class[] = 'wponion-' . $this->module();


			if ( 'grid' === $bootstrap || 'all' === $bootstrap || true === $bootstrap ) {
				$class[] = 'wponion-framework-bootstrap-grid';
			}

			if ( 'base' === $bootstrap || 'all' === $bootstrap || true === $bootstrap ) {
				$class[] = 'wponion-framework-bootstrap';
			}

			return wponion_html_class( $class );
		}

		/**
		 * Returns Fields.
		 *
		 * @return array
		 */
		protected function fields() {
			return $this->fields;
		}

		/**
		 * Adds Debug Bar.
		 */
		protected function debug_bar() {
			if ( wponion_is_debug() ) {
				return '<div id="wponiondebuginfopopup" style="display:none;"> <div id="wponion-global-debug-content"></div></div>
<a  title="' . __( 'WPOnion Debug POPUP' ) . '" href="?loaddebug=true" class="wponion-global-debug-handle thickbox">' . wponion_icon( 'fas fa-info-circle' ) . '</a>	';
			}
			return '';
		}

		/**
		 * inits selected theme.
		 *
		 * @param string $theme_init
		 * @param string $theme_html
		 */
		protected function init_theme( $theme_init = '-init.php', $theme_html = '-settings-html.php' ) {
			if ( false === $this->current_theme ) {
				$theme          = $this->option( 'theme' );
				$template_path  = $this->option( 'template_path' );
				$file           = wponion_locate_template( $theme . '/' . $theme . $theme_init, $template_path );
				$html_file      = wponion_locate_template( $theme . '/' . $theme . $theme_html, $template_path );
				$callback_class = 'WPOnion_' . strtolower( $theme ) . '_Theme';

				if ( file_exists( $file ) && file_exists( $html_file ) ) {
					$this->current_theme = array(
						'class'     => $callback_class,
						'success'   => true,
						'file'      => $file,
						'html_file' => wponion_locate_template( $theme . '/' . $theme . $theme_html, $template_path ),
					);
					wponion_get_template( $theme . '/' . $theme . $theme_init, array( 'plugin_id' => $this->plugin_id() ) );
				} else {
					$this->current_theme = array(
						'success' => false,
						'html'    => '<h3>' . __( 'Theme Not Found :-( ' ) . '</h3>',
					);
				}
			} else {
				if ( false === $this->current_theme['success'] ) {
					echo $this->current_theme['html'];
				} else {
					include $this->current_theme['html_file'];
				}
			}
		}

		/**
		 * Returns Current Theme's instance.
		 *
		 * @return bool
		 */
		protected function theme_instance() {
			return wponion_core_registry( $this->current_theme['class'] );
		}
	}
}
