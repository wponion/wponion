<?php

namespace WPOnion\Traits\Internal;

use WPO\Container;
use WPOnion\Themes;

defined( 'ABSPATH' ) || exit;

/**
 * Trait Unique
 *
 * @package WPOnion\Traits\Internal
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @since 1.5
 */
trait Theme_Handler {
	/**
	 * Stores Current template information.
	 * current_theme
	 *
	 * @var bool
	 */
	protected $current_theme = false;

	/**
	 * Store All Settings Menu.
	 *
	 * @var array
	 */
	protected $menus = array();

	/**
	 * Triggers Theme's Instance & Stores It.
	 *
	 * @return \WPOnion\Theme_API
	 */
	protected function init_theme() {
		if ( false === $this->current_theme ) {
			$theme               = $this->option( 'theme' );
			$theme               = ( Themes::is_support( $theme, $this->module() ) ) ? $theme : wponion_default_theme();
			$return              = Themes::callback( $theme, $this->theme_callback_args() );
			$this->current_theme = ( wpo_is( $return, 'theme' ) ) ? $return->uid() : false;
		}
		return $this->theme();
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
				'module'      => $this->module(),
			),
		);
	}

	/**
	 * Returns Current Theme's instance.
	 *
	 * @return bool|\WPOnion\Theme_API
	 */
	protected function theme() {
		return ( ! empty( $this->current_theme ) ) ? wponion_theme_registry( $this->current_theme ) : null;
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
				if ( $field->has_containers() ) {
					$menu = $this->handle_single_menu( $field, $is_child, $container, $first_container );
					if ( false !== $menu ) {
						$return[ $menu['name'] ]            = $menu;
						$return[ $menu['name'] ]['submenu'] = $this->extract_fields_menus( $field->containers(), true, $menu['name'], $field->first_container()
							->name() );
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
		$query_args    = $menu->query_args();

		if ( false === $container ) {
			$is_active = ( $name === $this->active( true ) ) ? true : $is_active;
			$part_href = $menu->href();
			if ( true === $internal_href ) {
				$href      = add_query_arg( array( 'container-id' => $name ), $this->page_url() );
				$part_href = add_query_arg( array( 'container-id' => $name ), $this->page_url( true ) );
			}
		} elseif ( true === $is_child && false !== $container ) {
			$part_href      = $menu->href();
			$is_main_active = ( $name === $this->active( false ) && $container === $this->active( true ) );
			$is_sub_active  = ( $container !== $this->active( true ) && ( 'submeu' === $this->option( 'is_single_page' ) && $name === $first_container ) );

			if ( true === $internal_href ) {
				$query_args = array(
					'container-id'     => $container,
					'sub-container-id' => $name,
				);
				$href       = add_query_arg( $query_args, $this->page_url() );
				$part_href  = add_query_arg( $query_args, $this->page_url( true ) );
			}

			if ( 'metabox' === $this->module() && $is_main_active || $is_sub_active ) {
				$is_active = true;
			} elseif ( $is_main_active || $is_sub_active ) {
				$is_active = true;
			}
		}

		if ( ! empty( $query_args ) ) {
			$href      = add_query_arg( $query_args, $href );
			$part_href = add_query_arg( $query_args, $part_href );
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
			'query_args'       => $query_args,
			'class'            => $menu->container_class(),
			'separator'        => $menu->is_separator(),
		);
	}

	/**
	 * Checks if container is active.
	 *
	 * @param $is_container
	 *
	 * @return null
	 */
	protected function active( $is_container ) {
		return $is_container;
	}

	/**
	 * returns current page's part url.
	 *
	 * @param bool $part_url
	 *
	 * @return null
	 */
	protected function page_url( $part_url = false ) {
		return $part_url;
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
	 * Returns All Common Wrap Class.
	 *
	 * @param string $extra_class
	 *
	 * @return string
	 */
	protected function wrap_class( $extra_class = '' ) {
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
		$_class   = array( $this->container_wrap_id( $container ), 'wpo-row' );
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

	/**
	 * @param string $extra_class
	 * @param array  $extra_attributes
	 *
	 * @return string
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
	 * Check if option loop is valid.
	 *
	 * @param array|\WPO\Container $option
	 *
	 * @return bool
	 */
	public function valid_container( $option = array() ) {
		return ( false === $option->is_disabled() && ( $option->has_callback() || $option->has_fields() || $option->has_containers() ) );
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
			return ( isset( $option['type'] ) );
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
	protected function validate_container_sub_container( $container_id = '', $sub_container_id = '' ) {
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
}
