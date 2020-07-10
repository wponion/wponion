<?php

namespace WPOnion\Modules\Settings;

use WPO\Container;
use WPOnion\Bridge\Module;
use WPOnion\DB\Save_Handler\Settings as Settings_Save;
use WPOnion\Modules\Admin\Page;

defined( 'ABSPATH' ) || exit;

/**
 * Class Settings
 *
 * @package WPOnion\Modules\Settings
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Settings extends Module {
	/**
	 * menu_instance
	 *
	 * @var \WPOnion\Modules\Admin\Page
	 */
	protected $menu_instance = '';

	/**
	 * Stores Module DB Type.
	 *
	 * @var string
	 */
	protected $module_db = 'settings';

	/**
	 * Module Type.
	 *
	 * @var string
	 */
	protected $module = 'settings';

	/**
	 * Active Menu Info.
	 *
	 * @var array
	 */
	protected $active_menu = array();

	/**
	 * Stores Current Instances Settings Page URL.
	 *
	 * @var null
	 */
	protected $page_url = array();

	/**
	 * Inits The Class.
	 *
	 * @uses load_assets
	 * @uses register_admin_menu
	 */
	protected function on_init() {
		$this->add_action( 'admin_init', 'wp_admin_init' );
		$arg              = $this->parse_args( $this->option( 'menu' ), $this->defaults( 'menu' ) );
		$arg['on_load']   = wponion_cast_array( $arg['on_load'] );
		$arg['assets']    = wponion_cast_array( $arg['assets'] );
		$arg['on_load'][] = array( &$this, 'on_settings_page_load' );
		$arg['assets'][]  = 'wponion_load_core_assets';
		$arg['render']    = array( &$this, 'render' );
		$user_asset       = $this->option( 'assets' );

		if ( ! empty( $user_asset ) && ( is_string( $user_asset ) || wponion_is_callable( $user_asset ) ) ) {
			$arg['assets'][] = $user_asset;
		} elseif ( ! empty( $user_asset ) && wponion_is_array( $user_asset ) ) {
			$arg['assets'] = $this->parse_args( $user_asset, $arg['assets'] );
		}

		$arg['assets'][] = array( $this, 'load_assets' );

		if ( false !== $arg['submenu'] ) {
			$arg['submenu'] = ( true === $arg['submenu'] ) ? array() : $arg['submenu'];

			if ( ! is_string( $arg['submenu'] ) ) {
				if ( wponion_is_array( $arg['submenu'] ) && ! isset( $arg['submenu'][0] ) || ! wponion_is_array( $arg['submenu'] ) ) {
					$arg['submenu'] = array( $arg['submenu'] );
				}
				$arg['submenu'] = wponion_parse_args( array(
					array( &$this, 'register_admin_menu' ),
				), $arg['submenu'] );
			}
		}
		$this->set_option( 'menu', $arg );
		$this->menu_instance = wponion_admin_page( $arg );
	}

	/**
	 * Loads Required Style for the current settings page.
	 */
	public function load_assets() {
		do_action( 'wponion/settings/page/assets', $this->unique() );
	}

	/**
	 * Registers Admin Menu.
	 */
	public function register_admin_menu() {
		$submenu   = $this->option( 'menu/submenu' );
		$menu_slug = $this->option( 'menu/menu_slug' );
		if ( $submenu && $menu_slug ) {
			$callback = array( &$this, 'render' );

			if ( true === $submenu || wponion_is_array( $submenu ) ) {
				$this->find_active_menu();
				$menus = $this->settings_menus();
				foreach ( $menus as $id => $_menu ) {
					if ( isset( $_menu['is_separator'] ) && false !== $_menu['is_separator'] ) {
						continue;
					}
					add_submenu_page( $menu_slug, $_menu['title'], $_menu['title'], $this->option( 'menu/capability' ), $id, $callback );
				}

				global $submenu;

				if ( isset( $submenu[ $menu_slug ] ) && ! empty( $submenu[ $menu_slug ] ) ) {
					foreach ( $submenu[ $menu_slug ] as $id => $smenu ) {
						if ( $menu_slug !== $submenu[ $menu_slug ][ $id ][2] ) {
							$submenu[ $menu_slug ][ $id ][2] = isset( $menus[ $smenu[2] ]['part_href'] ) ? $menus[ $smenu[2] ]['part_href'] : false;
						} elseif ( $menu_slug === $submenu[ $menu_slug ][ $id ][2] ) {
							unset( $submenu[ $menu_slug ][ $id ] );
						}
					}
				}

				do_action( 'wponion/settings/register/submenu', $menu_slug, $this->unique(), $this );
			}
		}
	}

	/**
	 * On WP_Admin_Ini.
	 */
	public function wp_admin_init() {
		register_setting( $this->unique, $this->unique, array(
			'sanitize_callback' => array( &$this, 'save_validate' ),
		) );
	}

	/**
	 * Handles WP Settings Save.
	 *
	 * @param $request
	 *
	 * @return mixed
	 */
	public function save_validate( $request ) {
		$this->get_cache();
		$this->find_active_menu();
		$instance = new Settings_Save( array(
			'module'        => &$this,
			'unique'        => $this->unique(),
			'fields'        => $this->fields(),
			'posted_values' => $request,
			'db_values'     => $this->get_db_values(),
		) );
		$instance->run();

		$this->options_cache['container_id']     = isset( $_POST['container-id'] ) ? sanitize_text_field( $_POST['container-id'] ) : null;
		$this->options_cache['sub_container_id'] = isset( $_POST['sub-container-id'] ) ? sanitize_text_field( $_POST['sub-container-id'] ) : null;
		$this->options_cache['field_errors']     = $instance->get_errors();
		$this->set_db_cache( $this->options_cache );
		$values = $instance->get_values();
		$this->set_db_values( $values );
		return $values;
	}

	/**
	 * Set Admin Page Url.
	 */
	protected function set_page_url() {
		if ( empty( $this->page_url ) ) {
			$page_url = false;
			if ( wponion_is_ajax() ) {
				$page_url = wp_get_raw_referer();
			} elseif ( $this->menu_instance instanceof Page ) {
				$page_url = $this->menu_instance->menu_url();
			}
			if ( ! empty( $page_url ) ) {
				$this->page_url = array(
					'full_url' => $page_url,
					'part'     => str_replace( admin_url(), '', $page_url ),
				);
			}
		}
	}

	/**
	 * Returns Settings Page Url.
	 *
	 * @param bool $part_url
	 *
	 * @return mixed
	 */
	protected function page_url( $part_url = false ) {
		$this->set_page_url();
		return ( false === $part_url ) ? $this->page_url['full_url'] : $this->page_url['part'];
	}

	/**
	 * @return string
	 */
	protected function form_post_page() {
		return 'options.php';
	}

	/**
	 * Renders Settings Page HTML.
	 */
	public function render() {
		echo '<form method="post" action="' . $this->form_post_page() . '" enctype="multipart/form-data" class="wponion-form">';
		echo '<div class="hidden" style="display:none;" id="wponion-hidden-fields">';
		settings_fields( $this->unique );
		echo '<input type="hidden" name="container-id" value="' . $this->active( true ) . '"/>';
		echo '<input type="hidden" name="sub-container-id" value="' . $this->active( false ) . '"/>';
		echo '</div>';
		$this->init_theme()->render();
		echo '</form>';

		if ( false !== $this->option( 'ajax' ) ) {
			$ajax = ( true === $this->option( 'ajax' ) ) ? __( 'Settings Updated', 'wponion' ) : $this->option( 'ajax' );
			if ( is_array( $ajax ) && ! isset( $ajax['title'] ) ) {
				$ajax['title'] = __( 'Settings Updated', 'wponion' );
			}
			wponion_localize()->add( 'wponion_core', array( 'settings_ajax' => $ajax ) );
		}
	}

	/**
	 * Triggers Only When Current Instance's Settings Page Loads.
	 */
	public function on_settings_page_load() {
		$this->find_active_menu();
		$this->settings_menus();
		$user_menu = $this->option( 'menu' );
		if ( isset( $user_menu['submenu'] ) && ( true === $user_menu['submenu'] || wponion_is_array( $user_menu['submenu'] ) ) ) {
			global $submenu_file;
			$menus        = $this->settings_menus();
			$submenu_file = isset( $menus[ $this->active( true ) ] ) ? $menus[ $this->active( true ) ]['part_href'] : add_query_arg( array(
				'parent-id' => $this->active( true ),
			), $this->page_url( true ) );
		}

		$this->init_theme();
		do_action( 'wponion/settings/page/on_load', $this->unique() );
	}

	/**
	 * Finds Which Parent And SubMenu is Active.
	 */
	protected function find_active_menu() {
		if ( ! empty( $this->active_menu ) ) {
			return $this->active_menu;
		}

		if ( $this->fields()->has_fields() ) {
			$this->active_menu = array(
				'container_id'     => false,
				'sub_container_id' => false,
			);
		} else {
			$cache    = $this->get_cache();
			$_cache   = array(
				'container_id'     => ( ! empty( $cache['container_id'] ) ) ? $cache['container_id'] : false,
				'sub_container_id' => ( ! empty( $cache['sub_container_id'] ) ) ? $cache['sub_container_id'] : false,
			);
			$_url     = array(
				'container_id'     => wponion_get_var( 'container-id', false ),
				'sub_container_id' => wponion_get_var( 'sub-container-id', false ),
			);
			$_cache_v = wponion_validate_parent_container_ids( $_cache );
			$_url_v   = wponion_validate_parent_container_ids( $_url );
			if ( false !== $_cache_v ) {
				$default                                 = $this->validate_container_sub_container( $_cache_v['container_id'], $_cache_v['sub_container_id'] );
				$this->options_cache['sub_container_id'] = false;
				$this->options_cache['container_id']     = false;
				$this->set_db_cache( $this->options_cache );
			} elseif ( false !== $_url_v ) {
				$default = $this->validate_container_sub_container( $_url_v['container_id'], $_url_v['sub_container_id'] );
			} else {
				$default = $this->validate_container_sub_container( false, false );
			}

			if ( ( null === $default['sub_container_id'] || false === $default['sub_container_id'] ) && $default['container_id'] ) {
				$default['sub_container_id'] = $default['container_id'];
			}
			$this->active_menu = $default;
		}
		return $this->active_menu;
	}

	/**
	 * Returns Active Menu Slug Based on is_parent
	 *
	 * @param $is_parent
	 *
	 * @return bool|string
	 */
	protected function active( $is_parent ) {
		if ( true === $is_parent ) {
			return isset( $this->active_menu['container_id'] ) ? $this->active_menu['container_id'] : false;
		}
		return isset( $this->active_menu['sub_container_id'] ) ? $this->active_menu['sub_container_id'] : false;
	}

	/**
	 * Reloads Active Cache.
	 *
	 * @return void|\WPOnion\Bridge\Module
	 */
	public function reload_cache() {
		$this->active_menu = false;
		parent::reload_cache();
		return $this;
	}

	/**
	 * Generates A Array of Settings Menu.
	 *
	 * @return array
	 */
	public function settings_menus() {
		if ( empty( $this->menus ) && false === $this->fields()->has_fields() ) {
			$this->menus = $this->extract_fields_menus( $this->fields()->get() );
		}

		return $this->menus;
	}

	/**
	 * Returns Default Args.
	 *
	 * @param bool $type
	 *
	 * @return array
	 */
	protected function defaults( $type = true ) {
		$menu = array(
			'submenu'       => 'themes.php',
			'menu_title'    => WPONION_NAME,
			'page_title'    => false,
			'capability'    => 'manage_options',
			'menu_slug'     => 'wponion',
			'icon'          => false,
			'position'      => null,
			'help_tab'      => array(),
			'help_sidebar'  => '',
			'on_load'       => array(),
			'assets'        => array(),
			'hook_priority' => 10,
			'tabs'          => false,
			'render'        => false,
		);

		return ( 'menu' === $type ) ? $menu : array(
			'menu'        => $menu,
			'ajax'        => false,
			'option_name' => '_wponion',
			'theme'       => 'wp_modern',
			'save_button' => __( 'Save Settings', 'wponion' ),
		);
	}

	/**
	 * Checks if current settings instance page load type.
	 *
	 * @return bool|string
	 */
	public function is_single_page() {
		$key = strtolower( $this->option( 'is_single_page' ) );
		if ( in_array( $key, array( 'submenu', 'submenus', 'section', 'sections' ), true ) ) {
			return 'only_submenu';
		} elseif ( true === $this->option( 'is_single_page' ) ) {
			return true;
		}
		return false;
	}

	/**
	 * Returns all common HTML wrap class.
	 *
	 * @param string $extra_class
	 *
	 * @return string
	 */
	protected function wrap_class( $extra_class = '' ) {
		$class   = array();
		$class[] = ( 'only_submenu' === $this->is_single_page() ) ? 'wponion-submenu-single-page' : '';
		$class[] = ( true === $this->is_single_page() ) ? 'wponion-single-page' : '';
		$class[] = ( false !== $this->option( 'ajax' ) ) ? 'wponion-ajax-save' : '';
		if ( 1 === count( $this->fields()->get() ) ) {
			$class[] = 'wponion-hide-nav';
			if ( $this->fields()->has_fields() || ( $this->fields()->has_containers() && 1 === count( $this->fields()
						->containers() ) ) ) {
				$class[] = 'wponion-no-subnav';
			}
		}
		return parent::wrap_class( wponion_html_class( $extra_class, array_filter( $class ) ) );
	}

	/**
	 * Checks if Option Loop Is Valid
	 *
	 * @param array|\WPO\Container $container
	 * @param bool|\WPO\Container  $sub_container
	 * @param bool                 $check_current_page
	 *
	 * @return bool
	 */
	public function valid_container( $container = array(), $sub_container = false, $check_current_page = true ) {
		if ( ! $container->has_fields() && ! $container->has_containers() && ! $container->has_callback() || true === $container->is_disabled() ) {
			return false;
		}

		if ( true === $check_current_page ) {
			if ( false === $sub_container && ( false === $this->is_single_page() || 'only_submenu' === $this->is_single_page() ) && $container->name() !== $this->active( true ) ) {
				return false;
			}

			if ( true === $sub_container && false === $this->is_single_page() && $container->name() !== $this->active( false ) ) {
				return false;
			}

			if ( $sub_container instanceof Container && false === $this->is_single_page() && $sub_container->name() !== $this->active( false ) ) {
				return false;
			}
		}
		return true;
	}

	/**
	 * checks if given (PAGE/SECTION) is active [CALLED AS TAB]
	 *
	 * @param bool $container
	 * @param bool $sub_container
	 * @param bool $first_container
	 *
	 * @return bool
	 */
	protected function is_tab_active( $container = false, $sub_container = false, $first_container = false ) {
		if ( false !== $container && false === $sub_container ) {
			return ( $container === $this->active( true ) );
		} else {
			if ( $container === $this->active( true ) && $sub_container === $this->active( false ) ) {
				return true;
			} elseif ( $container !== $this->active( true ) && $sub_container !== $this->active( false ) && $first_container === $sub_container ) {
				return true;
			}
			return false;
		}
	}

	/**
	 * Renders / Creates An First Instance based on the $is_init_field variable value.
	 *
	 * @param array|\WPO\Field    $field
	 * @param bool|\WPO\Container $parent_container
	 * @param bool|\WPO\Container $sub_container
	 * @param bool                $is_init_field
	 *
	 * @return mixed
	 */
	public function render_field( $field = array(), $parent_container = false, $sub_container = false, $is_init_field = false ) {
		$hash = implode( '/', array_filter( array(
			( wpo_is_container( $parent_container ) ) ? $parent_container->name() : '',
			( wpo_is_container( $sub_container ) ) ? $sub_container->name() : '',
		) ) );

		return parent::render_field( $field, $hash, $is_init_field );
	}

	/**
	 * Generates HTML Button to print in settings page.
	 *
	 * @param        $user
	 * @param array  $default_attr
	 * @param string $label
	 *
	 * @return string
	 */
	protected function _button( $user, $default_attr = array(), $label = '' ) {
		$user_attr = ( wponion_is_array( $user ) && isset( $user['attributes'] ) ) ? $user['attributes'] : array();
		$text      = ( wponion_is_array( $user ) && isset( $user['label'] ) ) ? $user['label'] : false;
		$text      = ( false === $text && is_string( $user ) ) ? $user : $label;
		return '<button ' . wponion_array_to_html_attributes( $this->parse_args( $user_attr, $default_attr ) ) . ' >' . $text . '</button>';
	}

	/**
	 * Returns Settings Button
	 *
	 * @return string
	 */
	public function settings_button() {
		if ( false === $this->option( 'save_button_html' ) ) {
			$options = $this->option( 'save_button' );
			$html    = '';
			if ( false !== $options ) {
				$html .= $this->_button( $options, array(
					'class' => 'button button-primary wponion-save',
					'type'  => 'submit',
				), __( 'Save Settings', 'wponion' ) );
			}
			$this->set_option( 'save_button_html', $html );
			return $html;
		}
		return $this->option( 'save_button_html' );
	}

	/**
	 * @return string
	 */
	public function search_no_result() {
		return '<div class="search-no-result"><h3>' . __( 'No Result Found', 'wponion' ) . '</h3></div>';
	}
}
