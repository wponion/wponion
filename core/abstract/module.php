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
			$this->fields    = $fields;
			$this->settings  = $this->set_args( $settings );
			$this->plugin_id = ( false === $this->settings['plugin_id'] ) ? $this->settings['option_name'] : $this->settings['plugin_id'];
			$this->unique    = $this->settings['option_name'];
			$this->save_instance();
		}

		/**
		 * Saves Current Instance in registry.
		 */
		protected function save_instance() {
			if ( function_exists( 'wponion_' . $this->module . '_registry' ) ) {
				call_user_func_array( 'wponion_' . $this->module . '_registry', array( &$this ) );
			}
		}

		/**
		 * Inits The Class.
		 */
		public function init() {
			if ( ! empty( $this->settings ) && ! empty( $this->fields ) && false === wponion_is_ajax() ) {
				$this->on_init();
			}
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
			$class = array(
				'wponion-framework',
				'wponion-module-' . $this->module() . '-framework',
				'wponion-module-' . $this->module(),
				'wponion-' . $this->plugin_id() . '-' . $this->module(),
				'wponion-' . $this->module(),
			);

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
		public function fields() {
			return $this->fields;
		}

		/**
		 * Adds Debug Bar.
		 */
		protected function debug_bar() {
			if ( wponion_is_debug() ) {
				return '<div id="wponiondebuginfopopup" style="display:none;"> <div id="wponion-global-debug-content"></div></div>
<a  title="' . __( 'WPOnion Debug POPUP' ) . '" href="javascript:void(0);" class="wponion-global-debug-handle">' . wponion_icon( 'dashicons dashicons-info' ) . '</a>	';
			}
			return '';
		}

		/**
		 * @param string $theme_init
		 *
		 * @return \WPOnion\Theme
		 */
		protected function init_theme( $theme_init = '-init.php' ) {
			$return = false;
			if ( false === $this->current_theme ) {
				$theme          = $this->option( 'theme' );
				$template_path  = $this->option( 'template_path' );
				$file           = wponion_locate_template( $theme . '/' . $theme . $theme_init, $template_path );
				$callback_class = 'WPOnion_' . strtolower( $theme ) . '_Theme';
				if ( file_exists( $file ) ) {
					$theme_args          = $this->theme_callback_args();
					$this->current_theme = array(
						'class'     => $callback_class,
						'success'   => true,
						'file'      => $file,
						'html_file' => $theme . '_' . $theme_args['data']['unique'] . '_' . $theme_args['data']['plugin_id'],
					);
					wponion_get_template( $theme . '/' . $theme . $theme_init, $theme_args );
					$return = wponion_theme_registry( $this->current_theme['html_file'] );
				} else {
					$this->current_theme = array(
						'success' => false,
						'html'    => '<h3>' . __( 'Theme Not Found :-( ' ) . '</h3>',
					);
				}
			} else {
				if ( true === $this->current_theme['success'] ) {
					$return = wponion_theme_registry( $this->current_theme['html_file'] );
				}
			}
			return $return;
		}

		/**
		 * Returns A Array of callback args for the theme.
		 *
		 * @return array
		 */
		protected function theme_callback_args() {
			return array(
				'data' => array(
					'plugin_id'   => $this->plugin_id(),
					'unique'      => $this->unique(),
					'instance_id' => $this->unique(),
				),
			);
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
		 * Retrives Stored DB Cache.
		 *
		 * @return mixed
		 */
		protected function get_db_cache() {
			return get_option( $this->get_cache_id(), array() );
		}

		/**
		 * Returns Options Cache.
		 */
		protected function get_cache() {
			if ( false === $this->options_cache ) {
				$values              = $this->get_db_cache();
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

		/**
		 * Extracts Settings Sections and its subsections from the $this->fields array.
		 *
		 * @param array $fields
		 * @param bool  $is_child
		 * @param bool  $parent
		 *
		 * @uses \WPOnion\Modules\Metabox
		 * @uses \WPOnion\Modules\Settings
		 *
		 * @return array
		 */
		protected function extract_fields_menus( $fields = array(), $is_child = false, $parent = false ) {
			$return = array();
			if ( empty( $fields ) ) {
				$fields = $this->fields;
			}

			if ( is_array( $fields ) ) {
				foreach ( $fields as $field ) {
					if ( isset( $field['sections'] ) && false === empty( $field['sections'] ) ) {
						$menu                               = $this->handle_single_menu( $field, $is_child, $parent );
						$return[ $menu['name'] ]            = $menu;
						$return[ $menu['name'] ]['submenu'] = $this->extract_fields_menus( $field['sections'], true, $menu['name'] );
					} elseif ( ( isset( $field['fields'] ) && false === empty( $field['fields'] ) ) || isset( $field['callback'] ) || isset( $field['href'] ) ) {
						$menu                    = $this->handle_single_menu( $field, $is_child, $parent );
						$return[ $menu['name'] ] = $menu;
					} else {
						if ( 'metabox' !== $this->module() ) {
							$menu                                    = $this->handle_single_menu( $field, $is_child, $parent );
							$return[ $menu['name'] ]                 = $menu;
							$return[ $menu['name'] ]['is_seperator'] = true;
						}
					}
				}
			}
			return $return;
		}

		/**
		 * Handles Single Field args and converts into a menu.
		 *
		 * @param      $menu
		 * @param bool $is_child
		 * @param bool $parent
		 *
		 * @return array
		 */
		protected function handle_single_menu( $menu, $is_child = false, $parent = false ) {
			$title         = isset( $menu['title'] ) ? $menu['title'] : false;
			$name          = isset( $menu['name'] ) ? $menu['name'] : sanitize_title( $title );
			$icon          = isset( $menu['icon'] ) ? $menu['icon'] : false;
			$attributes    = isset( $menu['attributes'] ) ? $menu['attributes'] : array();
			$internal_href = isset( $menu['href'] ) ? false : true;
			$is_active     = false;

			if ( false === $parent ) {
				if ( true === $internal_href ) {
					$menu['href']      = add_query_arg( array( 'parent-id' => $name ), $this->page_url() );
					$menu['part_href'] = add_query_arg( array( 'parent-id' => $name ), $this->page_url( true ) );
				} else {
					$menu['part_href'] = $menu['href'];
				}

				if ( $name === $this->active( true ) ) {
					$is_active = true;
				}
			} elseif ( true === $is_child && false !== $parent ) {
				if ( true === $internal_href ) {
					$menu['href'] = add_query_arg( array(
						'parent-id'  => $parent,
						'section-id' => $name,
					), $this->page_url() );

					$menu['part_href'] = add_query_arg( array(
						'parent-id'  => $parent,
						'section-id' => $name,
					), $this->page_url( true ) );
				} else {
					$menu['part_href'] = $menu['href'];
				}

				if ( $name === $this->active( false ) ) {
					$is_active = true;
				}
			}

			if ( isset( $menu['query_args'] ) && ! empty( $menu['query_args'] ) ) {
				$menu['href']      = add_query_arg( $menu['query_args'], $menu['href'] );
				$menu['part_href'] = add_query_arg( $menu['query_args'], $menu['part_href'] );
			}

			return array(
				'attributes'       => $attributes,
				'title'            => $title,
				'name'             => $name,
				'icon'             => $icon,
				'is_active'        => $is_active,
				'is_internal_href' => $internal_href,
				'href'             => ( isset( $menu['href'] ) ) ? $menu['href'] : false,
				'part_href'        => ( isset( $menu['part_href'] ) ) ? $menu['part_href'] : false,
				'query_args'       => ( isset( $menu['query_args'] ) ) ? $menu['query_args'] : false,
				'class'            => ( isset( $menu['class'] ) ) ? $menu['class'] : false,
			);
		}

		/**
		 * Check if option loop is valid.
		 *
		 * @param array $option
		 *
		 * @return bool
		 */
		public function valid_option( $option = array() ) {
			if ( ! isset( $option['fields'] ) && ! isset( $option['callback'] ) && ! isset( $option['sections'] ) ) {
				return false;
			}

			return true;
		}

		/**
		 * Checks If given array is a valid field array.
		 *
		 * @param array $option
		 *
		 * @return bool
		 */
		public function valid_field( $option = array() ) {
			if ( isset( $option['type'] ) ) {
				return true;
			}
			return false;
		}

		/**
		 * Renders / Creates An First Instance based on the $is_init_field variable value.
		 *
		 * @param array $field
		 * @param bool  $hash
		 * @param bool  $is_init_field
		 *
		 * @return mixed
		 */
		public function render_field( $field = array(), $hash = false, $is_init_field = false ) {
			$callback = ( false === $is_init_field ) ? 'wponion_add_element' : 'wponion_field';
			return $callback( $field, wponion_get_field_value( $field, $this->get_db_values() ), array(
				'plugin_id' => $this->plugin_id(),
				'module'    => $this->module(),
				'unique'    => $this->unique(),
				'hash'      => $hash,
			) );
		}

		/**
		 * Returns all common HTML wrap class.
		 *
		 * @param string $extra_class
		 */
		abstract public function wrap_class( $extra_class = '' );

		/**
		 * Required Callback On Instance Init.
		 *
		 * @return mixed
		 */
		abstract public function on_init();
	}
}
