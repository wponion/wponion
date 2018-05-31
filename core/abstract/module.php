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

namespace WPOnion\Bridge;
if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Bridge\Module' ) ) {
	/**
	 * Class Module
	 *
	 * @package WPOnion\Bridge
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	abstract class Module extends \WPOnion\Bridge\Field_Builder {
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
		 * options_cache
		 *
		 * @var array
		 */
		protected $options_cache = false;

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

			if ( false === $this->settings['plugin_id'] ) {
				$this->plugin_id = $this->settings['option_name'];
			} else {
				$this->plugin_id = $this->settings['plugin_id'];
			}

			$this->unique = $this->settings['option_name'];
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

		/**
		 * Returns DB Slug.
		 *
		 * @return string
		 */
		public function unique() {
			return $this->unique;
		}

		/**
		 * Returns Unique Cache ID For each instance but only once.
		 *
		 * @return string
		 */
		protected function get_cache_id() {
			return 'wponion_' . wponion_hash_string( $this->unique() . '_' . $this->module() ) . '_cache';
		}

		/**
		 * Returns Options Cache.
		 */
		protected function get_cache() {
			if ( false === $this->options_cache ) {
				$values              = get_option( $this->get_cache_id(), array() );
				$this->options_cache = ( is_array( $values ) ) ? $values : array();
				if ( false === isset( $this->options_cache['wponion_version'] ) || ! version_compare( $this->options_cache['wponion_version'], WPONION_DB_VERSION, '=' ) ) {
					$this->options_cache = array();
				} else {
					if ( isset( $this->options_cache['field_errors'] ) ) {
						$instance = wponion_registry( $this->module() . '_' . $this->plugin_id(), '\WPOnion\Registry\Field_Error' );
						$instance->set( $this->options_cache['field_errors'] );
						if ( wponion_is_debug() ) {
							wponion_localize()->add( 'wponion_errors', $this->options_cache['field_errors'] );
						}
						unset( $this->options_cache['field_errors'] );
						$this->set_cache( $this->options_cache );
					}
				}
			}
			return $this->options_cache;
		}

		/**
		 * Saves Cache.
		 *
		 * @param array $data .
		 */
		protected function set_cache( $data = array() ) {
			update_option( $this->get_cache_id(), $data );
			$this->options_cache = $data;
		}

		/**
		 * Returns Database Values of the settings.
		 *
		 * @return array|mixed
		 */
		protected function get_db_values() {
			if ( empty( $this->db_values ) ) {
				$this->db_values = get_option( $this->unique );
				if ( ! is_array( $this->db_values ) ) {
					$this->db_values = array();
				}
			}
			return $this->db_values;
		}

		/**
		 * @return bool|\WPOnion\Value_API
		 */
		public function values() {
			$plugin_id = $this->plugin_id();
			if ( wponion_value_registry( $plugin_id ) ) {
				return wponion_value_registry( $plugin_id );
			}
			$instance = new \WPOnion\Value_API( $this->get_db_values(), $this->fields(), array(
				'module'    => $this->module(),
				'plugin_id' => $plugin_id,
				'unique'    => $this->unique(),
			) );
			wponion_value_registry( $instance );
			return $instance;
		}

		/**
		 * Returns a default array.
		 *
		 * @return array
		 */
		protected function defaults() {
			return array(
				'option_name' => false,
				'plugin_id'   => false,
			);
		}

	}
}
