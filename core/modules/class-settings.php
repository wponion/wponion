<?php
/**
 *
 * Initial version created 06-05-2018 / 07:10 AM
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @package wponion
 * @link http://github.com/wponion
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

namespace WPOnion\Modules;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( '\WPOnion\Modules\Settings' ) ) {
	/**
	 * Class WPOnion_Settings
	 *
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Settings extends \WPOnion\Bridge\Module {
		/**
		 * menu_instance
		 *
		 * @var \WPOnion\Modules\Admin_Page
		 */
		public $menu_instance = '';

		/**
		 * Module Type.
		 *
		 * @var string
		 */
		protected $module = 'settings';

		/**
		 * Stores WP Admin Menu Page Slug / Hook which returns from any of these functions
		 *
		 * page_hook
		 *
		 * @var null
		 */
		protected $page_hook = null;

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
		 * Settings constructor.
		 *
		 * @param \WPO\Builder|null $fields
		 * @param array             $settings
		 */
		public function __construct( $settings = array(), \WPO\Builder $fields = null ) {
			parent::__construct( $fields, $settings );
			$this->raw_options = $settings;
			$this->init();
		}

		/**
		 * Inits The Class.
		 */
		public function on_init() {
			$this->add_action( 'admin_init', 'wp_admin_init' );
			$menu              = $this->parse_args( $this->option( 'menu' ), $this->defaults( 'menu' ) );
			$menu['on_load']   = ( ! wponion_is_array( $menu['on_load'] ) ) ? array() : $menu['on_load'];
			$menu['assets']    = ( ! wponion_is_array( $menu['assets'] ) ) ? array() : $menu['assets'];
			$menu['on_load'][] = array( &$this, 'on_settings_page_load' );
			$menu['render']    = array( &$this, 'render' );
			$menu['assets'][]  = 'wponion_load_core_assets';

			if ( wponion_is_array( $this->option( 'extra_js' ) ) ) {
				$menu['assets'] = $this->parse_args( $menu['assets'], $this->option( 'extra_js' ) );
			} else {
				$menu['assets'][] = $this->option( 'extra_js' );
			}

			if ( wponion_is_array( $this->option( 'extra_css' ) ) ) {
				$menu['assets'] = $this->parse_args( $menu['assets'], $this->option( 'extra_css' ) );
			} else {
				$menu['assets'][] = $this->option( 'extra_css' );
			}

			$menu['assets'][] = array( $this, 'load_admin_styles' );

			if ( false !== $menu['submenu'] ) {
				if ( true === $menu['submenu'] ) {
					$menu['submenu'] = array();
				}
				if ( ! is_string( $menu['submenu'] ) ) {
					if ( wponion_is_array( $menu['submenu'] ) && ! isset( $menu['submenu'][0] ) || ! wponion_is_array( $menu['submenu'] ) ) {
						$menu['submenu'] = array( $menu['submenu'] );
					}
					$menu['submenu'] = wponion_parse_args( array(
						array( &$this, 'register_admin_menu' ),
					), $menu['submenu'] );
				}
			}
			$this->set_option( 'menu', $menu );
			$this->menu_instance = wponion_admin_page( $menu );
		}

		/**
		 * Loads Required Style for the current settings page.
		 */
		public function load_admin_styles() {
			$this->_action( 'page_assets' );
		}

		/**
		 * @param $ins \WPOnion\Modules\Admin_Page
		 */
		public function register_admin_menu( $ins ) {
			if ( isset( $this->settings['menu'] ) ) {
				$menu     = $this->option( 'menu' );
				$callback = array( &$this, 'render' );

				if ( isset( $menu['submenu'] ) && ( true === $menu['submenu'] || wponion_is_array( $menu['submenu'] ) ) ) {
					$this->find_active_menu();
					$menus = $this->settings_menus();
					foreach ( $menus as $id => $_menu ) {
						if ( isset( $_menu['is_seperator'] ) && true == $_menu['is_seperator'] ) {
							continue;
						}
						add_submenu_page( $menu['menu_slug'], $_menu['title'], $_menu['title'], $menu['capability'], $id, $callback );
					}

					global $submenu;
					if ( isset( $submenu[ $menu['menu_slug'] ] ) && ! empty( $submenu[ $menu['menu_slug'] ] ) ) {
						foreach ( $submenu[ $menu['menu_slug'] ] as $id => $smenu ) {
							if ( $menu['menu_slug'] !== $submenu[ $menu['menu_slug'] ][ $id ][2] ) {
								$submenu[ $menu['menu_slug'] ][ $id ][2] = isset( $menus[ $smenu[2] ]['part_href'] ) ? $menus[ $smenu[2] ]['part_href'] : false;
							} elseif ( $menu['menu_slug'] === $submenu[ $menu['menu_slug'] ][ $id ][2] ) {
								unset( $submenu[ $menu['menu_slug'] ][ $id ] );
							}
						}
					}
					$this->_action( 'register_submenu', $menu['menu_slug'], $this );
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
			$this->force_set_defaults( false );
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
			$instance = new \WPOnion\DB\Settings_Save_Handler();

			$instance->init_class( array(
				'module'      => 'settings',
				'plugin_id'   => $this->plugin_id(),
				'unique'      => $this->unique,
				'fields'      => $this->fields,
				'user_values' => $request,
				'db_values'   => $this->get_db_values(),
				'args'        => array( 'settings' => &$this ),
			) )
				->run();

			$this->options_cache['container_id']     = isset( $_POST['container-id'] ) ? sanitize_text_field( $_POST['container-id'] ) : null;
			$this->options_cache['sub_container_id'] = isset( $_POST['sub-container-id'] ) ? sanitize_text_field( $_POST['sub-container-id'] ) : null;
			$this->options_cache['field_errors']     = $instance->get_errors();
			$this->set_cache( $this->options_cache );
			return $instance->get_values();
		}

		/**
		 * Handles SettingUP Settings Defaults.
		 *
		 * @param bool $force
		 */
		public function force_set_defaults( $force = false ) {
			$cache = $this->get_cache();
			if ( ! isset( $cache['fuid'] ) || ( isset( $cache['fuid'] ) && $cache['fuid'] !== $this->fields_md5() ) ) {
				$this->set_defaults();
			}
		}

		/**
		 * Handles To Set Defaults.
		 */
		protected function set_defaults() {
			$this->get_db_values();
			$this->options_cache['fuid']            = $this->fields_md5();
			$this->options_cache['wponion_version'] = WPONION_DB_VERSION;
			$default                                = array();

			foreach ( $this->fields->get() as $options ) {
				if ( false !== $this->valid_option( $options, false, false ) ) {
					if ( $options->has_fields() ) {
						foreach ( $options->fields() as $field ) {
							if ( ! isset( $field['id'] ) || ! isset( $field['default'] ) ) {
								continue;
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
					} elseif ( $options->has_containers() ) {
						foreach ( $options->containers() as $containers ) {
							/* @var $containers \WPO\Container */
							if ( ! $containers->has_fields() ) {
								continue;
							}
							if ( false !== $this->valid_option( $containers, true, false ) ) {
								foreach ( $containers->fields() as $field ) {
									if ( ! isset( $field['id'] ) || ! isset( $field['default'] ) ) {
										continue;
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
							}
						}
					}
				}
			}
			if ( ! empty( $default ) ) {
				$this->set_db_values();
			}
			$this->set_cache( $this->options_cache );
		}

		/**
		 * Saves Options.
		 */
		public function set_db_values() {
			update_option( $this->unique, $this->db_values );
		}

		/**
		 * Set Admin Page Url.
		 */
		protected function set_page_url() {
			if ( empty( $this->page_url ) ) {
				$page_url       = $this->menu_instance->menu_url();
				$this->page_url = array(
					'full_url' => $page_url,
					'part'     => str_replace( admin_url(), '', $page_url ),
				);
			}
		}

		/**
		 * Returns Settings Page Url.
		 *
		 * @param bool $part_url
		 *
		 * @return mixed
		 */
		public function page_url( $part_url = false ) {
			$this->set_page_url();
			return ( false === $part_url ) ? $this->page_url['full_url'] : $this->page_url['part'];
		}

		/**
		 * @return string
		 */
		public function form_post_page() {
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
			$instance = $this->init_theme();
			$instance->render_settings_html();
			echo '</form>';
		}

		/**
		 * Triggers Only When Current Instance's Settings Page Loads.
		 */
		public function on_settings_page_load() {
			$this->find_active_menu();
			$this->settings_menus();
			$this->add_action( 'admin_enqueue_scripts', 'load_admin_styles' );
			$user_menu = $this->option( 'menu' );
			if ( isset( $user_menu['submenu'] ) && ( true === $user_menu['submenu'] || wponion_is_array( $user_menu['submenu'] ) ) ) {
				global $submenu_file;
				$menus        = $this->settings_menus();
				$submenu_file = isset( $menus[ $this->active( true ) ] ) ? $menus[ $this->active( true ) ]['part_href'] : add_query_arg( array(
					'parent-id' => $this->active( true ),
				), $this->page_url( true ) );
			}

			$this->init_theme();
			$this->_action( 'page_onload' );
		}

		/**
		 * Finds Which Parent And SubMenu is Active.
		 */
		protected function find_active_menu() {
			if ( ! empty( $this->active_menu ) ) {
				return $this->active_menu;
			}

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
				$this->set_cache( $this->options_cache );
			} elseif ( false !== $_url_v ) {
				$default = $this->validate_container_sub_container( $_url_v['container_id'], $_url_v['sub_container_id'] );
			} else {
				$default = $this->validate_container_sub_container( false, false );
			}

			if ( ( null === $default['sub_container_id'] || false === $default['sub_container_id'] ) && $default['container_id'] ) {
				$default['sub_container_id'] = $default['container_id'];
			}
			$this->active_menu = $default;
			return $this->active_menu;
		}

		/**
		 * Returns Active Menu Slug Based on is_parent
		 *
		 * @param $is_parent
		 *
		 * @return bool|string
		 */
		public function active( $is_parent ) {
			if ( true === $is_parent ) {
				return isset( $this->active_menu['container_id'] ) ? $this->active_menu['container_id'] : false;
			}
			return isset( $this->active_menu['sub_container_id'] ) ? $this->active_menu['sub_container_id'] : false;
		}

		/**
		 * Generates A Array of Settings Menu.
		 *
		 * @return array
		 */
		public function settings_menus() {
			if ( ! empty( $this->menus ) ) {
				return $this->menus;
			}
			$this->menus = $this->extract_fields_menus( $this->fields->get() );
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
				'page_title'    => WPONION_NAME,
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

			if ( 'menu' === $type ) {
				return $menu;
			}

			return array(
				'menu'          => $menu,
				'extra_css'     => array(),
				'extra_js'      => array(),
				'option_name'   => '_wponion',
				'plugin_id'     => false,
				'theme'         => 'wp',
				'template_path' => false,
				'save_button'   => __( 'Save Settings' ),
			);
		}

		/**
		 * Checks if current settings instance page load type.
		 *
		 * @return bool|string
		 */
		public function is_single_page() {
			if ( 'submenu' === $this->option( 'is_single_page' ) ) {
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
		public function wrap_class( $extra_class = '' ) {
			$class   = array();
			$class[] = ( 'only_submenu' === $this->is_single_page() ) ? 'wponion-submenu-single-page' : '';
			$class[] = ( true === $this->is_single_page() ) ? 'wponion-single-page' : '';

			if ( 1 === count( $this->fields->get() ) ) {
				$class[] = 'wponion-hide-nav';
				if ( $this->fields->has_fields() || ( $this->fields->has_containers() && 1 === count( $this->fields->containers() ) ) ) {
					$class[] = 'wponion-no-subnav';
				}
			}
			return parent::wrap_class( wponion_html_class( $extra_class, array_filter( $class ) ) );
		}

		/**
		 * Checks if Option Loop Is Valid
		 *
		 * @param array|\WPonion\Module_Fields|\WPO\Container $container
		 * @param bool                                        $sub_container
		 * @param bool                                        $check_current_page
		 *
		 * @return bool
		 */
		public function valid_option( $container = array(), $sub_container = false, $check_current_page = true ) {
			if ( ! $container->has_fields() && ! $container->has_containers() && ! $container->has_callback() ) {
				return false;
			}

			if ( true === $check_current_page ) {
				if ( false === $sub_container && ( false === $this->is_single_page() || 'only_submenu' === $this->is_single_page() ) && $container->name() !== $this->active( true ) ) {
					return false;
				}

				if ( true === $sub_container && false === $this->is_single_page() && $container->name() !== $this->active( false ) ) {
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
		public function is_tab_active( $container = false, $sub_container = false, $first_container = false ) {
			if ( false !== $container && false === $sub_container ) {
				return ( $container === $this->active( true ) ) ? true : false;
			} else {
				if ( $container === $this->active( true ) && $sub_container === $this->active( false ) ) {
					return true;
				} elseif ( $container !== $this->active( true ) && $first_container === $sub_container ) {
					return true;
				}
				return false;
			}
		}

		/**
		 * Renders / Creates An First Instance based on the $is_init_field variable value.
		 *
		 * @param array $field
		 * @param bool  $parent_container
		 * @param bool  $sub_container
		 * @param bool  $is_init_field
		 *
		 * @return mixed
		 */
		public function render_field( $field = array(), $parent_container = false, $sub_container = false, $is_init_field = false ) {
			return parent::render_field( $field, sanitize_title( $parent_container . '-' . $sub_container ), $is_init_field );
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
		public function _button( $user, $default_attr = array(), $label = '' ) {
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
			$options = $this->option( 'save_button' );
			$html    = '';
			if ( false !== $options ) {
				$html .= $this->_button( $options, array(
					'class' => 'button button-primary wponion-save',
					'type'  => 'submit',
				), __( 'Save Settings' ) );
			}
			return $html;
		}

		/**
		 * @return string
		 */
		public function search_no_result() {
			return '<div class="search-no-result"><h3>' . __( 'No Result Found' ) . '</h3></div>';
		}
	}
}
