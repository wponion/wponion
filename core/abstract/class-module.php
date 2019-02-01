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

use WPO\Container;

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
	abstract class Module extends \WPOnion\Bridge {
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
		 * @var array|\WPO\Builder
		 */
		protected $fields = array();

		/**
		 * Raw options
		 *
		 * @var array
		 */
		protected $raw_options = array();

		/**
		 * Raw options
		 *
		 * @var array
		 */
		protected $raw_fields = array();

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
		 * @param \WPO\Builder $fields Array of settings fields.
		 * @param array        $settings array of WPOnion Settings Configuration.
		 */
		public function __construct( \WPO\Builder $fields = null, $settings = array() ) {
			if ( $fields instanceof \WPO\Builder ) {
				$this->fields = $fields;
			}

			$this->raw_fields = $fields;
			$this->settings   = $this->set_args( $settings );
			$this->unique     = ( isset( $this->settings['option_name'] ) ) ? $this->settings['option_name'] : false;
			$this->plugin_id  = $this->unique;

			if ( isset( $this->settings['plugin_id'] ) && false !== $this->settings['plugin_id'] ) {
				$this->plugin_id = $this->settings['plugin_id'];
			}

			$this->save_instance();
		}

		/**
		 * Stores Instance In Registry.
		 */
		public function save_instance() {
			wponion_callback( 'wponion_' . $this->module . '_registry', array( &$this ) );
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
		 * @return bool|string
		 */
		protected function fields_md5() {
			if ( false === $this->fields_md5 ) {
				$this->fields_md5 = wponion_hash_array( wponion_fields_all_ids_defaults( $this->fields->get() ) );
			}
			return $this->fields_md5;
		}

		/**
		 * Generates Few Default Wrap Class.
		 *
		 * @return array|string
		 */
		protected function default_wrap_class() {
			return wponion_module_html_class( $this->module(), $this->plugin_id(), $this->option( 'theme' ) );
		}

		/**
		 * Returns Fields.
		 *
		 * @return \WPO\Builder|array
		 */
		public function fields() {
			return $this->fields;
		}

		/**
		 * @return \WPOnion\Theme_API
		 */
		protected function init_theme() {
			$return = null;

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
			return wponion_get_option( $this->get_cache_id(), array() );
		}

		/**
		 * Returns Options Cache.
		 */
		protected function get_cache() {
			if ( false === $this->options_cache ) {
				$values              = $this->get_db_cache();
				$this->options_cache = ( wponion_is_array( $values ) ) ? $values : array();

				if ( false === isset( $this->options_cache['wponion_version'] ) || ! version_compare( $this->options_cache['wponion_version'], WPONION_DB_VERSION, '=' ) ) {
					$this->options_cache = array();
				} else {
					if ( isset( $this->options_cache['field_errors'] ) ) {
						$this->init_error_registry( $this->options_cache['field_errors'] );
						if ( wponion_is_debug() ) {
							wponion_localize()->add( 'wponion_errors', $this->options_cache['field_errors'], true, false );
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
			wponion_update_option( $this->get_cache_id(), $data );
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
				if ( ! wponion_is_array( $this->db_values ) ) {
					$this->db_values = array();
				}
			}
			return $this->db_values;
		}

		/**
		 * Updates Values To Database.
		 *
		 * @param array $values
		 */
		protected function set_db_values( $values ) {
			$this->db_values = $values;
			wponion_update_option( $this->unique(), $values );
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
		 * Extracts Settings Sections and its sub containers from the $this->fields array.
		 *
		 * @param \WPO\Builder|array $fields
		 * @param bool               $is_child
		 * @param bool               $container
		 * @param bool               $first_container
		 *
		 * @uses \WPOnion\Modules\Metabox
		 * @uses \WPOnion\Modules\Settings
		 *
		 * @return array
		 */
		protected function extract_fields_menus( $fields = array(), $is_child = false, $container = false, $first_container = false ) {
			$return = array();

			if ( ! empty( $fields ) ) {
				foreach ( $fields as $field ) {
					if ( $field->has_containers() && ! empty( $field->containers() ) ) {
						$menu = $this->handle_single_menu( $field, $is_child, $container, $first_container );
						if ( false !== $menu ) {
							$_name                       = $menu['name'];
							$return[ $_name ]            = $menu;
							$first_container_name        = $field->first_container()
								->name();
							$return[ $_name ]['submenu'] = $this->extract_fields_menus( $field->containers(), true, $_name, $first_container_name );
						}
					} elseif ( ( $field->has_fields() && ! empty( $field->fields() ) ) || $field->has_callback() || $field->has_href() ) {
						$menu = $this->handle_single_menu( $field, $is_child, $container, $first_container );
						if ( false !== $menu ) {
							$return[ $menu['name'] ] = $menu;
						}
					} else {
						if ( 'metabox' !== $this->module() ) {
							$menu = $this->handle_single_menu( $field, $is_child, $container, $first_container );
							if ( false !== $menu ) {
								$return[ $menu['name'] ]                 = $menu;
								$return[ $menu['name'] ]['is_separator'] = isset( $menu['separator'] ) ? $menu['separator'] : false;
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
		 * @param \WPO\Container $menu
		 * @param bool           $is_child
		 * @param bool           $container
		 * @param bool           $first_container
		 *
		 * @return array|bool
		 */
		protected function handle_single_menu( $menu, $is_child = false, $container = false, $first_container = false ) {
			if ( null === $menu->name() && null === $menu->title() ) {
				return false;
			}

			$name          = $menu->name();
			$internal_href = ( $menu->has_href() ) ? false : true;
			$href          = $menu->href();
			$part_href     = false;
			$is_active     = false;

			if ( false === $container ) {
				if ( true === $internal_href ) {
					$href      = add_query_arg( array( 'container-id' => $name ), $this->page_url() );
					$part_href = add_query_arg( array( 'container-id' => $name ), $this->page_url( true ) );
				} else {
					$part_href = $menu->href();
				}

				if ( $name === $this->active( true ) ) {
					$is_active = true;
				}
			} elseif ( true === $is_child && false !== $container ) {
				if ( true === $internal_href ) {
					$query_args = array(
						'container-id'     => $container,
						'sub-container-id' => $name,
					);
					$href       = add_query_arg( $query_args, $this->page_url() );
					$part_href  = add_query_arg( $query_args, $this->page_url( true ) );
				} else {
					$part_href = $menu->href();
				}

				if ( $name === $this->active( false ) && $container === $this->active( true ) ) {
					$is_active = true;
				} elseif ( $container !== $this->active( true ) && $name === $first_container ) {
					$is_active = true;
				}
			}

			if ( ! empty( $menu->query_args() ) ) {
				$href      = add_query_arg( $menu->query_args(), $href );
				$part_href = add_query_arg( $menu->query_args(), $part_href );
			}

			return array(
				'attributes'       => $menu->attributes(),
				'title'            => $menu->title(),
				'name'             => $name,
				'icon'             => $menu->icon(),
				'is_active'        => $is_active,
				'is_internal_href' => $internal_href,
				'href'             => $href,
				'part_href'        => $part_href,
				'query_args'       => $menu->query_args(),
				'class'            => $menu->class(),
				'separator'        => $menu->is_separator(),
			);
		}

		/**
		 * @param $is_container
		 *
		 * @return null
		 */
		public function active( $is_container ) {
			return $is_container;
		}

		/**
		 * @param bool $part_url
		 *
		 * @return null
		 */
		public function page_url( $part_url = false ) {
			return $part_url;
		}

		/**
		 * Check if option loop is valid.
		 *
		 * @param array|\WPO\Container $option
		 *
		 * @return bool
		 */
		public function valid_option( $option = array() ) {
			return ( $option->has_callback() || $option->has_fields() || $option->has_containers() ) ? true : false;
		}

		/**
		 * Checks If given array is a valid field array.
		 *
		 * @param array|object $option
		 *
		 * @return bool
		 */
		public function valid_field( $option ) {
			if ( $option instanceof \WPO\Field ) {
				return ( $option->is( 'field' ) );
			} elseif ( wponion_is_array( $option ) ) {
				return ( isset( $option['type'] ) ) ? true : false;
			}
			return false;
		}

		/**
		 * Validates given parent id & container id.
		 *
		 * @param string $container_id
		 * @param string $sub_container_id
		 *
		 * @return array
		 */
		public function validate_container_sub_container( $container_id = '', $sub_container_id = '' ) {
			if ( false === $container_id && false === $sub_container_id ) {
				$container = $this->fields->first_container();
				if ( $container ) {
					$container_id = $container->name();
					if ( $container->has_containers() ) {
						$sub_container = $container->first_container();
						if ( $sub_container ) {
							$sub_container_id = $sub_container->name();
						}
					}
				}
			} elseif ( false !== $container_id && false === $sub_container_id ) {
				/* @var $container \WPO\Container */
				$container = $this->fields->container_exists( $container_id );
				if ( false !== $container ) {
					if ( $container->has_containers() ) {
						$current = $container->first_container();
						if ( $current ) {
							$sub_container_id = $current->name();
						}
					}
				} else {
					return $this->validate_container_sub_container( false, false );
				}
			} elseif ( false !== $container_id && false !== $sub_container_id ) {
				$container = $this->fields->container_exists( $container_id );
				if ( false !== $container ) {
					$sub_container = $container->container_exists( $sub_container_id );
					if ( false === $sub_container ) {
						return $this->validate_container_sub_container( $container_id, false );
					}
				} else {
					return $this->validate_container_sub_container( false, false );
				}
			}

			return array(
				'sub_container_id' => $sub_container_id,
				'container_id'     => $container_id,
			);
		}

		/**
		 * Renders / Creates An First Instance based on the $is_init_field variable value.
		 *
		 * @param array $field
		 * @param bool  $hash
		 * @param bool  $is_init_field
		 *
		 * @uses \wponion_add_element()
		 * @uses \wponion_field()
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
		 * Returns All Common Wrap Class.
		 *
		 * @param string $extra_class
		 *
		 * @return string
		 */
		public function wrap_class( $extra_class = '' ) {
			return esc_attr( wponion_html_class( $extra_class, $this->default_wrap_class() ) );
		}

		/**
		 * @param \WPO\Container|     $container
		 * @param \WPO\Container|bool $sub_container
		 * @param bool                $first_container
		 *
		 * @return array|string
		 */
		public function container_wrap_class( $container, $sub_container = false, $first_container = false ) {
			$_class   = array( $this->container_wrap_id( $container ), 'row' );
			$_class[] = ( ( $sub_container instanceof Container && $sub_container->has_callback() ) || $container->has_callback() ) ? 'wponion-has-callback' : '';
			$_class[] = ( ( $sub_container instanceof Container && $sub_container->has_fields() ) || $container->has_fields() ) ? 'wponion-has-fields' : '';
			$_class[] = ( $container->has_containers() ) ? 'wponion-has-containers' : '';

			if ( false === $sub_container ) {
				$_class[] = ( true === $this->is_tab_active( $container->name(), false ) ) ? ' wponion-container-wraps ' : ' wponion-container-wraps hidden';
			}

			if ( $sub_container instanceof Container ) {
				$_class[] = ( true === $this->is_tab_active( $container->name(), $sub_container->name(), $first_container ) ) ? 'wponion-sub-container-wraps' : 'wponion-sub-container-wraps hidden';
			}

			return wponion_html_class( array_filter( $_class ) );
		}

		/**
		 * @param \WPO\Container      $container
		 * @param bool|\WPO\Container $sub_container
		 *
		 * @return string
		 */
		public function container_wrap_id( $container, $sub_container = false ) {
			if ( false === $sub_container ) {
				return 'wponion-tab-' . $container->name();
			}
			return 'wponion-tab-' . $container->name() . '-' . $sub_container->name();
		}

		/**
		 * Unsets Global Args.
		 */
		protected function __unset_globals() {
			unset( $this->current_theme );
			unset( $this->fields_md5 );
			unset( $this->menus );
			unset( $this->fields );
			unset( $this->raw_options );
			unset( $this->raw_fields );
			unset( $this->unique );
			unset( $this->db_values );
			unset( $this->options_cache );
			unset( $this->plugin_id );
			unset( $this->module );
		}

		/**
		 * Required Callback On Instance Init.
		 *
		 * @return mixed
		 */
		abstract public function on_init();
	}
}
