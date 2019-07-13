<?php

namespace WPOnion\Bridge;

use WPO\Builder;
use WPO\Container;
use WPOnion\Themes;

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
	abstract class Module extends Module_DB {
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
		public function __construct( Builder $fields = null, $settings = array() ) {
			if ( $fields instanceof Builder ) {
				$this->fields = $fields;
			}

			$this->raw_fields = $fields;
			$this->settings   = $this->set_args( $settings );
			$this->unique     = ( isset( $this->settings['option_name'] ) ) ? $this->settings['option_name'] : false;
			$this->save_instance();
		}

		/**
		 * Stores Instance In Registry.
		 */
		public function save_instance() {
			if ( function_exists( 'wponion_' . $this->module . '_registry' ) ) {
				wponion_callback( 'wponion_' . $this->module . '_registry', array( &$this ) );
			}
		}

		/**
		 * Inits The Class.
		 */
		public function init() {
			if ( ! empty( $this->settings ) && ! empty( $this->fields ) && false === wponion_is_ajax( 'heartbeat' ) ) {
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
			return wponion_module_html_class( $this->module(), $this->option( 'theme' ) );
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
				if ( Themes::is_support( $theme, $this->module() ) ) {
					$return = Themes::callback( $theme, $theme_args );
					if ( $return ) {
						$this->current_theme = $return->uid();
					}
				} else {
					$return = Themes::callback( wponion_default_theme(), $theme_args );
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
		 * Reloads System Cache
		 *
		 * @return $this
		 */
		public function reload_cache() {
			$this->options_cache = false;
			$this->get_cache();
			return $this;
		}

		/**
		 * Reloads System values.
		 *
		 * @return $this
		 */
		public function reload_values() {
			if ( wpo_is_option( $this->db_values ) ) {
				$this->db_values->reload();
			}
			return $this;
		}

		/**
		 * Returns Options Cache.
		 */
		protected function get_cache() {
			if ( false === $this->options_cache ) {
				$values              = $this->get_db_cache();
				$this->options_cache = ( wponion_is_array( $values ) ) ? $values : array();

				if ( isset( $this->options_cache['field_errors'] ) && ! empty( $this->options_cache['field_errors'] ) ) {
					$this->init_error_registry( $this->options_cache['field_errors'] );
					if ( wponion_is_debug() ) {
						wponion_localize()->add( 'wponion_errors', $this->options_cache['field_errors'], true, false );
					}
					unset( $this->options_cache['field_errors'] );
					$this->set_db_cache( $this->options_cache );
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
			$instance = wponion_registry( sanitize_title( $this->module() . '_' . $this->unique() . '_errors' ), '\WPOnion\Registry\Field_Error' );
			$instance->set( $errors );
		}

		/**
		 * Returns a default array.
		 *
		 * @return array
		 */
		protected function defaults() {
			return array( 'option_name' => false );
		}

		/**
		 * Extracts Settings Sections and its sub containers from the $this->fields array.
		 *
		 * @param \WPO\Builder|array $fields
		 * @param bool               $is_child
		 * @param bool               $container
		 * @param bool               $first_container
		 *
		 * @return array
		 * @uses \WPOnion\Modules\Settings\Settings
		 *
		 * @uses \WPOnion\Modules\Metabox\Metabox
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

				$is_main_active = ( $name === $this->active( false ) && $container === $this->active( true ) );
				$is_sub_active  = ( $container !== $this->active( true ) && ( 'submeu' === $this->option( 'is_single_page' ) && $name === $first_container ) );

				if ( 'metabox' === $this->module() && $is_main_active || $is_sub_active ) {
					$is_active = true;
				} elseif ( $is_main_active || $is_sub_active ) {
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
				'is_disabled'      => $menu->is_disabled(),
				'href'             => $href,
				'part_href'        => $part_href,
				'query_args'       => $menu->query_args(),
				'class'            => $menu->container_class(),
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
			return ( false === $option->is_disabled() && ( $option->has_callback() || $option->has_fields() || $option->has_containers() ) ) ? true : false;
		}

		/**
		 * Checks If given array is a valid field array.
		 *
		 * @param array|object|\WPO\Field $option
		 *
		 * @return bool
		 */
		public function valid_field( $option ) {
			if ( wpo_is_field( $option ) ) {
				return true;
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
						if ( $sub_container instanceof Container && false === $sub_container->is_disabled() ) {
							$sub_container_id = $sub_container->name();
						}
					}
				}
			} elseif ( false !== $container_id && false === $sub_container_id ) {
				/* @var $container \WPO\Container */
				$container = $this->fields->container_exists( $container_id );
				if ( $container instanceof Container && false === $container->is_disabled() ) {
					if ( $container->has_containers() ) {
						$current = $container->first_container();
						if ( $current instanceof Container && false === $current->is_disabled() ) {
							$sub_container_id = $current->name();
						}
					}
				} else {
					return $this->validate_container_sub_container( false, false );
				}
			} elseif ( false !== $container_id && false !== $sub_container_id ) {
				$container = $this->fields->container_exists( $container_id );
				if ( $container instanceof Container && false === $container->is_disabled() ) {
					$sub_container = $container->container_exists( $sub_container_id );
					if ( $sub_container instanceof Container && true === $sub_container->is_disabled() ) {
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
		 * @return mixed
		 * @uses \wponion_field()
		 *
		 * @uses \wponion_add_element()
		 */
		public function render_field( $field = array(), $hash = false, $is_init_field = false ) {
			$callback = ( false === $is_init_field ) ? 'wponion_add_element' : 'wponion_field';
			return $callback( $field, wponion_get_field_value( $field, $this->get_db_values() ), array(
				'module' => $this->module(),
				'unique' => $this->unique(),
				'base'   => $this->base_unique(),
				'hash'   => $hash,
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
		 * @param bool|\WPO\Container $container
		 * @param bool|\WPO\Container $sub_container
		 * @param bool|\WPO\Container $first_container
		 *
		 * @return array|string
		 */
		public function container_wrap_class( $container = false, $sub_container = false, $first_container = false ) {
			$_class   = array( $this->container_wrap_id( $container ), 'row' );
			$_class[] = ( ( wpo_is_container( $sub_container ) && $sub_container->has_callback() ) || ( wpo_is_container( $container ) && $container->has_callback() ) ) ? 'wponion-has-callback' : '';
			$_class[] = ( ( wpo_is_container( $sub_container ) && $sub_container->has_fields() ) || ( wpo_is_container( $container ) && $container->has_fields() ) ) ? 'wponion-has-fields' : '';
			$_class[] = ( wpo_is_container( $container ) && $container->has_containers() ) ? 'wponion-has-containers' : '';

			if ( ! $sub_container && wpo_is_container( $container ) ) {
				$_class[] = ( true === $this->is_tab_active( $container->name(), false ) ) ? ' wponion-container-wraps ' : ' wponion-container-wraps hidden';
			} elseif ( wpo_is_container( $sub_container ) ) {
				$_class[] = ( true === $this->is_tab_active( $container->name(), $sub_container->name(), $first_container ) ) ? 'wponion-sub-container-wraps' : 'wponion-sub-container-wraps hidden';
			} elseif ( ! $sub_container && ! $container ) {
				$_class[] = 'wponion-container-wraps';
			}
			return wponion_html_class( array_filter( $_class ) );
		}

		/**
		 * @param bool|\WPO\Container $container
		 * @param bool|\WPO\Container $sub_container
		 *
		 * @return string
		 */
		public function container_wrap_id( $container, $sub_container = false ) {
			if ( wpo_is_container( $container ) && wpo_is_container( $sub_container ) ) {
				return 'wponion-tab-' . $container->name() . '-' . $sub_container->name();
			} elseif ( wpo_is_container( $container ) ) {
				return 'wponion-tab-' . $container->name();
			}
			return '';
		}

		protected function get_defaults() {
			/**
			 * @var $options \WPO\Container
			 */
			foreach ( $this->fields->get() as $options ) {
				if ( $this->valid_field( $options ) ) {
					$this->get_fields_defaults_value( $options );
				} elseif ( false !== $this->valid_option( $options ) ) {
					if ( $options->has_fields() ) {
						foreach ( $options->fields() as $field ) {
							$this->get_fields_defaults_value( $field );
						}
					} elseif ( $options->has_containers() ) {
						foreach ( $options->containers() as $containers ) {
							/* @var $containers \WPO\Container */
							if ( ! $containers->has_fields() ) {
								continue;
							}
							if ( false !== $this->valid_option( $containers ) ) {
								foreach ( $containers->fields() as $field ) {
									$this->get_fields_defaults_value( $field );
								}
							}
						}
					}
				}
			}
		}

		/**
		 * Extracts Field Default Values.
		 *
		 * @param $field
		 */
		protected function get_fields_defaults_value( $field ) {
			if ( ! isset( $field['id'] ) || ! isset( $field['default'] ) ) {
				return;
			}

			if ( ! isset( $this->db_values[ $field['id'] ] ) ) {
				$default[ $field['id'] ] = $field['default'];
				if ( wponion_is_unarrayed( $field ) ) {
					$this->db_values = $this->parse_args( $this->db_values, $field['default'] );
				} else {
					$this->db_values[ $field['id'] ] = $field['default'];
				}
			}
		}

		/**
		 * Returns Unique Instance ID.
		 *
		 * @return string
		 */
		public function instance_id() {
			return sanitize_title( implode( '_', array_filter( array(
				$this->module(),
				$this->unique(),
				$this->get_id(),
			) ) ) );
		}

		/**
		 * @param string $extra_class
		 * @param array  $extra_attributes
		 *
		 * @return array
		 */
		public function wrap_attributes( $extra_class = '', $extra_attributes = array() ) {
			wponion_localize()->add( 'wponion_module_args', array(
				$this->instance_id() => array(
					'theme'     => $this->option( 'theme' ),
					'unique'    => $this->unique(),
					'module'    => $this->module(),
					'module-id' => $this->get_id(),
				),
			), true, false );
			return wponion_array_to_html_attributes( $this->parse_args( $extra_attributes, array(
				'id'                => $this->instance_id(),
				'class'             => $this->wrap_class( $extra_class ),
				'data-wponion-jsid' => $this->instance_id(),
			) ) );
		}

		/**
		 * Unsets Global Args.
		 */
		protected function _unset_globals() {
			unset( $this->current_theme );
			unset( $this->fields_md5 );
			unset( $this->menus );
			unset( $this->fields );
			unset( $this->raw_options );
			unset( $this->raw_fields );
			unset( $this->unique );
			unset( $this->db_values );
			unset( $this->options_cache );
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
