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
			return ( isset( $this->{$name} ) ) ? $this->{$name} : false;
		}

		/**
		 * WPOnion_Settings constructor.
		 *
		 * @param array $fields Array of settings fields.
		 * @param array $settings array of WPOnion Settings Configuration.
		 */
		public function __construct( $fields = array(), $settings = array() ) {
			$this->fields    = new \WPOnion\Module_Fields( $fields );
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
				'wponion-' . $this->option( 'theme' ) . '-theme',
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
		 * @return \WPOnion\Theme_API
		 */
		protected function init_theme( $theme_init = '-init.php' ) {
			$return = false;

			if ( false === $this->current_theme ) {
				$theme      = $this->option( 'theme' );
				$theme_args = $this->theme_callback_args();
				if ( \WPOnion\Themes::is_support( $theme, $this->module() ) ) {
					$return = \WPOnion\Themes::callback( $theme, $theme_args );
					if ( $return ) {
						$this->current_theme = $return->uid();
					}
				} else {
					$return = \WPOnion\Themes::callback( wponion_default_theme(), $theme_args );
					if ( $return ) {
						$this->current_theme = $return->uid();
					}
				}
			} else {
				$return = wponion_theme_registry( $this->current_theme );
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
			return wponion_core_registry( $this->current_theme );
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
						$this->init_error_registry( $this->options_cache['field_errors'] );
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
		 * Creates A Error Registry
		 *
		 * @used in Widgets Module.
		 *
		 * @param $errors
		 */
		protected function init_error_registry( $errors ) {
			$instance = wponion_registry( $this->module() . '_' . $this->plugin_id(), '\WPOnion\Registry\Field_Error' );
			$instance->set( $errors );
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

			if ( ! empty( $fields ) ) {
				foreach ( $fields as $field ) {
					if ( $field->has_sections() && ! empty( $field->sections() ) ) {
						$menu = $this->handle_single_menu( $field, $is_child, $parent );
						if ( false !== $menu ) {
							$_name                       = $menu['name'];
							$return[ $_name ]            = $menu;
							$return[ $_name ]['submenu'] = $this->extract_fields_menus( $field->sections(), true, $_name );
						}
					} elseif ( ( $field->has_fields() && ! empty( $field->fields() ) ) || $field->has_callback() || $field->has_href() ) {
						$menu = $this->handle_single_menu( $field, $is_child, $parent );
						if ( false !== $menu ) {
							$return[ $menu['name'] ] = $menu;
						}
					} else {
						if ( 'metabox' !== $this->module() ) {
							$menu = $this->handle_single_menu( $field, $is_child, $parent );
							if ( false !== $menu ) {
								$return[ $menu['name'] ]                 = $menu;
								$return[ $menu['name'] ]['is_seperator'] = isset( $menu['seperator'] ) ? $menu['seperator'] : false;
							}
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
			if ( null === $menu->name() && null === $menu->title() ) {
				return false;
			}

			$name          = $menu->name();
			$internal_href = ( $menu->has_href() ) ? false : true;
			$href          = $menu->href();
			$part_href     = false;
			$is_active     = false;

			if ( false === $parent ) {
				if ( true === $internal_href ) {
					$href      = add_query_arg( array( 'parent-id' => $name ), $this->page_url() );
					$part_href = add_query_arg( array( 'parent-id' => $name ), $this->page_url( true ) );
				} else {
					$part_href = $menu->href();
				}

				if ( $name === $this->active( true ) ) {
					$is_active = true;
				}
			} elseif ( true === $is_child && false !== $parent ) {
				if ( true === $internal_href ) {
					$query_args = array(
						'parent-id'  => $parent,
						'section-id' => $name,
					);
					$href       = add_query_arg( $query_args, $this->page_url() );
					$part_href  = add_query_arg( $query_args, $this->page_url( true ) );
				} else {
					$part_href = $menu->href();
				}

				if ( $name === $this->active( false ) ) {
					$is_active = true;
				}
			}

			if ( ! empty( $menu->get( 'query_args' ) ) ) {
				$href      = add_query_arg( $menu->get( 'query_args' ), $href );
				$part_href = add_query_arg( $menu->get( 'query_args' ), $part_href );
			}

			return array(
				'attributes'       => $menu->get( 'attributes', array() ),
				'title'            => $menu->title(),
				'name'             => $name,
				'icon'             => $menu->icon(),
				'is_active'        => $is_active,
				'is_internal_href' => $internal_href,
				'href'             => $href,
				'part_href'        => $part_href,
				'query_args'       => $menu->get( 'query_args', false ),
				'class'            => $menu->get( 'class', false ),
			);
		}

		/**
		 * Check if option loop is valid.
		 *
		 * @param array|\WPOnion\Module_Fields $option
		 *
		 * @return bool
		 */
		public function valid_option( $option = array() ) {
			return ( $option->has_callback() || $option->has_fields() || $option->has_sections() ) ? true : false;
		}

		/**
		 * Checks If given array is a valid field array.
		 *
		 * @param array $option
		 *
		 * @return bool
		 */
		public function valid_field( $option = array() ) {
			return ( isset( $option['type'] ) ) ? true : false;
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
