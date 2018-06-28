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
		 * Module Type.
		 *
		 * @var string
		 */
		protected $module = 'settings';

		/**
		 * Stores WP Admin Menu Page Slug / Hook which returns from any of these functions
		 *
		 * @uses \add_submenu_page()
		 * @uses \add_menu_page()
		 * @uses \add_management_page()
		 * @uses \add_dashboard_page()
		 * @uses \add_options_page()
		 * @uses \add_plugins_page()
		 * @uses \add_theme_page()
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
		 * WPOnion_Settings constructor.
		 *
		 * @param array $settings array of WPOnion Settings Configuration.
		 * @param array $fields Array of settings fields.
		 */
		public function __construct( $settings = array(), $fields = array() ) {
			parent::__construct( $fields, $settings );
			$this->raw_options = $settings;
			$this->init();
		}

		/**
		 * Inits The Class.
		 */
		public function init() {
			if ( ! empty( $this->settings ) && ! empty( $this->fields ) && false === wponion_is_ajax() ) {
				$this->add_action( 'admin_init', 'wp_admin_init' );
				$this->add_action( 'admin_menu', 'register_admin_menu' );
				wponion_settings_registry( $this );
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

			$this->options_cache['parent_id']    = isset( $_POST['wponion-parent-id'] ) ? $_POST['wponion-parent-id'] : null;
			$this->options_cache['section_id']   = isset( $_POST['wponion-section-id'] ) ? $_POST['wponion-section-id'] : null;
			$this->options_cache['field_errors'] = $instance->get_errors();
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
				if ( false === $force ) {
					wponion_async()
						->data( array(
							'type'        => 'settings_default_save',
							'plugin_id'   => $this->plugin_id(),
							'option_name' => $this->unique,
						) )
						->dispatch();
				} elseif ( true === $force ) {
					$this->set_defaults();
				}
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

			foreach ( $this->fields as $options ) {
				if ( false !== $this->valid_option( $options, false, false ) ) {
					if ( isset( $options['fields'] ) ) {
						foreach ( $options['fields'] as $field ) {
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
					} elseif ( isset( $options['sections'] ) ) {
						foreach ( $options['sections'] as $section ) {
							if ( false !== $this->valid_option( $section, true, false ) ) {
								foreach ( $section['fields'] as $field ) {
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
				update_option( $this->unique, $this->db_values );
			}
			$this->set_cache( $this->options_cache );
		}

		/**
		 * Set Admin Page Url.
		 *
		 * @param string $page_url
		 *
		 */
		protected function set_page_url( $page_url = '' ) {
			$this->page_url = array(
				'full_url' => $page_url,
				'part'     => str_replace( admin_url(), '', $page_url ),
			);
		}

		/**
		 * Returns Settings Page Url.
		 *
		 * @param bool $part_url
		 *
		 * @return mixed
		 */
		public function page_url( $part_url = false ) {
			if ( false === $part_url ) {
				return $this->page_url['full_url'];
			}
			return $this->page_url['part'];
		}

		/**
		 * Adds Admin Menu.
		 */
		public function register_admin_menu() {
			if ( isset( $this->settings['menu'] ) ) {
				$user_menu = $this->option( 'menu' );
				$menu      = $this->parse_args( $user_menu, $this->defaults( 'menu' ) );
				$page_hook = '';
				$callback  = array( &$this, 'render_page' );
				switch ( $menu['type'] ) {
					case 'submenu':
						$page_hook = add_submenu_page( $menu['parent'], $menu['title'], $menu['title'], $menu['capability'], $menu['slug'], $callback );
						break;
					case 'management':
					case 'dashboard':
					case 'options':
					case 'plugins':
					case 'theme':
						$function = 'add_' . $menu['type'] . '_page';
						if ( function_exists( $function ) ) {
							$page_hook = $function( $menu['title'], $menu['title'], $menu['capability'], $menu['slug'], $callback );
						}
						break;
					default:
						$page_hook = add_menu_page( $menu['title'], $menu['title'], $menu['capability'], $menu['slug'], $callback, $menu['icon'], $menu['position'] );
						break;
				}

				$this->page_hook = $page_hook;
				$this->set_page_url( menu_page_url( $menu['slug'], false ) );

				if ( isset( $user_menu['submenus'] ) && true === $user_menu['submenus'] ) {
					$this->find_active_menu();
					$menus = $this->settings_menus();
					foreach ( $menus as $id => $_menu ) {
						if ( isset( $_menu['is_seperator'] ) && true == $_menu['is_seperator'] ) {
							continue;
						}
						add_submenu_page( $menu['slug'], $_menu['title'], $_menu['title'], $menu['capability'], $id, $callback );
					}

					global $submenu;
					if ( isset( $submenu[ $menu['slug'] ] ) && ! empty( $submenu[ $menu['slug'] ] ) ) {
						foreach ( $submenu[ $menu['slug'] ] as $id => $smenu ) {
							if ( $menu['slug'] !== $submenu[ $menu['slug'] ][ $id ][2] ) {
								$submenu[ $menu['slug'] ][ $id ][2] = isset( $menus[ $smenu[2] ]['part_href'] ) ? $menus[ $smenu[2] ]['part_href'] : false;
							} elseif ( $menu['slug'] === $submenu[ $menu['slug'] ][ $id ][2] ) {
								unset( $submenu[ $menu['slug'] ][ $id ] );
							}
						}
					}

					$this->_action( 'register_submenu', $menu['slug'], $this );
				}

				$this->add_action( 'load-' . $this->page_hook, 'on_settings_page_load' );
			}
		}

		/**
		 * Renders Settings Page HTML.
		 */
		public function render_page() {
			echo '<form method="post" action="options.php" enctype="multipart/form-data" class="wponion-form">';
			echo '<div class="hidden" style="display:none;" id="wponion-hidden-fields">';
			settings_fields( $this->unique );
			echo '<input type="hidden" name="wponion-parent-id" value="' . $this->active( true ) . '"/>';
			echo '<input type="hidden" name="wponion-section-id" value="' . $this->active( false ) . '"/>';
			echo '</div>';
			$instance = $this->init_theme();
			$instance->render_settings_html();
			echo '</form>';
			echo $this->debug_bar();
		}

		/**
		 * Triggers Only When Current Instance's Settings Page Loads.
		 */
		public function on_settings_page_load() {
			$this->find_active_menu();
			$this->settings_menus();
			$this->add_action( 'admin_enqueue_scripts', 'load_admin_styles' );
			$user_menu = $this->option( 'menu' );
			if ( isset( $user_menu['submenus'] ) && true === $user_menu['submenus'] ) {
				global $submenu_file;
				$menus        = $this->settings_menus();
				$submenu_file = isset( $menus[ $this->active( true ) ] ) ? $menus[ $this->active( true ) ]['part_href'] : add_query_arg( array(
					'parent-id' => $this->active( true ),
				), $this->page_url( true ) );
			}

			$this->init_theme();
			$this->_action( 'page_onload' );
			$this->init_fields();
		}

		/**************************************************************************************************************
		 * Below Functions Are Related Only To find the current active menu and submenu in settings.
		 *************************************************************************************************************/

		/**
		 * Returns Default Active Menu of current settings Page.
		 *
		 * @return array
		 */
		protected function get_default_actives() {
			$first_fields = current( $this->fields );
			if ( isset( $first_fields['sections'] ) ) {
				$first_section = current( $first_fields['sections'] );
				return array(
					'parent_id'  => ( isset( $first_fields['name'] ) ) ? $first_fields['name'] : false,
					'section_id' => ( isset( $first_section['name'] ) ) ? $first_section['name'] : false,
				);
			} elseif ( isset( $first_fields['fields'] ) || isset( $first_fields['callback'] ) ) {
				return array(
					'section_id' => false,
					'parent_id'  => ( isset( $first_fields['name'] ) ) ? $first_fields['name'] : false,
				);
			}
			return array(
				'section_id' => false,
				'parent_id'  => false,
			);
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
				'parent_id'  => ( ! empty( $cache['parent_id'] ) ) ? $cache['parent_id'] : false,
				'section_id' => ( ! empty( $cache['section_id'] ) ) ? $cache['section_id'] : false,
			);
			$_url     = array(
				'parent_id'  => wponion_get_var( 'parent-id', false ),
				'section_id' => wponion_get_var( 'section-id', false ),
			);
			$_cache_v = wponion_validate_parent_section_ids( $_cache );
			$_url_v   = wponion_validate_parent_section_ids( $_url );

			if ( false !== $_cache_v ) {
				$default                           = $this->validate_sections( $_cache_v['parent_id'], $_cache_v['section_id'] );
				$this->options_cache['section_id'] = false;
				$this->options_cache['parent_id']  = false;
				$this->set_cache( $this->options_cache );
			} elseif ( false !== $_url_v ) {
				$default = $this->validate_sections( $_url_v['parent_id'], $_url_v['section_id'] );
			} else {
				$default = $this->validate_sections( false, false );
			}

			if ( ( null === $default['section_id'] || false === $default['section_id'] ) && $default['parent_id'] ) {
				$default['section_id'] = $default['parent_id'];
			}
			$this->active_menu = $default;
			return $this->active_menu;
		}

		/**
		 * Validates given parent id & section id.
		 *
		 * @param string $parent_id
		 * @param string $section_id
		 *
		 * @return array
		 */
		public function validate_sections( $parent_id = '', $section_id = '' ) {
			$parent_id  = $this->is_page_section_exists( $parent_id, $section_id );
			$section_id = $this->is_page_section_exists( $parent_id, $section_id, true );
			return array(
				'section_id' => $section_id,
				'parent_id'  => $parent_id,
			);
		}

		/**
		 * checks if page & section id exists in given fields array.
		 *
		 * @param string $page_id
		 * @param string $section_id
		 * @param bool   $is_section
		 *
		 * @return bool|string
		 */
		public function is_page_section_exists( $page_id = '', $section_id = '', $is_section = false ) {
			foreach ( $this->fields as $option ) {
				if ( $option['name'] === $page_id && false === $is_section ) {
					return $page_id;
				} elseif ( $option['name'] === $page_id && isset( $option['sections'] ) ) {
					foreach ( $option['sections'] as $section ) {
						if ( $section['name'] === $section_id ) {
							return $section_id;
						}
					}
				}
			}
			$page_id = ( true === $is_section ) ? $page_id : null;
			return $this->get_page_section_id( $is_section, $page_id );
		}

		/**
		 * returns a active & isset page / section id.
		 *
		 * @param bool $is_section
		 * @param null $page
		 *
		 * @return bool
		 */
		private function get_page_section_id( $is_section = true, $page = null ) {
			if ( null !== $page ) {
				foreach ( $this->fields as $option ) {
					if ( $option['name'] === $page && false === $is_section ) {
						return $option['name'];
					} elseif ( $option['name'] === $page && true === $is_section && isset( $option['sections'] ) ) {
						$cs = current( $option['sections'] );
						return $cs['name'];
					}
				}
			} else {
				$cs = current( $this->fields );
				if ( true === $is_section && isset( $cs['sections'] ) ) {
					$cs = current( $cs['sections'] );
					return $cs['name'];
				}
				return isset( $cs['name'] ) ? $cs['name'] : false;
			}
			return false;
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
				return isset( $this->active_menu['parent_id'] ) ? $this->active_menu['parent_id'] : false;
			}
			return isset( $this->active_menu['section_id'] ) ? $this->active_menu['section_id'] : false;
		}

		/**************************************************************************************************************
		 * Above Functions Are Related Only To find the current active menu and submenu in settings.
		 *************************************************************************************************************/

		/**
		 * Loads Required Style for the current settings page.
		 */
		public function load_admin_styles() {
			wponion_load_core_assets();
			$this->_action( 'page_assets' );
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
			$this->menus = $this->extract_fields_menus();
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
				'type'       => 'themes.php', # submenu | management | dashboard | options | plugins | theme
				'parent'     => '',
				'title'      => WPONION_NAME,
				'slug'       => 'wponion',
				'capability' => 'manage_options',
				'icon'       => null,
				'position'   => null,
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
				'buttons'       => array(
					'save'    => __( 'Save Settings' ),
					'restore' => __( 'Restore' ),
					'reset'   => __( 'Reset All Options' ),
				),
			);
		}

		/**
		 * @param string $template_name
		 * @param array  $args
		 *
		 * @return string
		 */
		public function load_template( $template_name = '', $args = array() ) {
			$template_path = $this->option( 'template_path' );
			return wponion_get_template_html( $template_name, $args, $template_path );
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

		/**************************************************************************************************************
		 * Below Functions are Related To Settings Page Themes.
		 *************************************************************************************************************/

		/**
		 * Returns all common HTML wrap class.
		 *
		 * @param string $extra_class
		 * @param bool   $bootstrap
		 *
		 * @return string
		 */
		public function wrap_class( $extra_class = '', $bootstrap = false ) {
			$default_class = $this->default_wrap_class( $bootstrap );
			$class         = array();
			$class[]       = ' wponion-' . $this->option( 'theme' ) . '-theme ';
			$class[]       = ( 'only_submenu' === $this->is_single_page() ) ? 'wponion-submenu-single-page' : '';
			$class[]       = ( true === $this->is_single_page() ) ? 'wponion-single-page' : '';

			if ( 1 === count( $this->fields ) ) {
				$class[] = 'wponion-hide-nav';
				$current = current( $this->fields );
				if ( isset( $current['fields'] ) || ( isset( $current['sections'] ) && 1 === count( $current['sections'] ) ) ) {
					$class[] = 'wponion-no-subnav';
				}
			}

			return esc_attr( wponion_html_class( $extra_class, wponion_html_class( array_filter( $class ), $default_class ) ) );
		}

		/**
		 * Checks if Option Loop Is Valid
		 *
		 * @param array $option
		 * @param bool  $section
		 * @param bool  $check_current_page
		 *
		 * @return bool
		 */
		public function valid_option( $option = array(), $section = false, $check_current_page = true ) {
			if ( ! isset( $option['fields'] ) && ! isset( $option['callback'] ) && ! isset( $option['sections'] ) ) {
				return false;
			}

			if ( true === $check_current_page ) {
				if ( false === $section && ( false === $this->is_single_page() || 'only_submenu' === $this->is_single_page() ) && $option['name'] !== $this->active( true ) ) {
					return false;
				}

				if ( true === $section && false === $this->is_single_page() && $option['name'] !== $this->active( false ) ) {
					return false;
				}
			}
			return true;
		}

		/**
		 * checks if given (PAGE/SECTION) is active [CALLED AS TAB]
		 *
		 * @param bool $parent
		 * @param bool $child
		 *
		 * @return bool
		 */
		public function is_tab_active( $parent = false, $child = false ) {
			if ( false !== $parent && false === $child ) {
				return ( $parent === $this->active( true ) ) ? true : false;
			} else {
				return ( $parent === $this->active( true ) && $child === $this->active( false ) ) ? true : false;
			}
		}

		/**
		 * This function should be used in each loop when parent loop is runnig.
		 *
		 * @param $options
		 *
		 * @return array|bool|mixed
		 */
		public function get_first_section( $options ) {
			$first_sec = current( $options['sections'] );
			return ( is_array( $first_sec ) && isset( $first_sec['name'] ) ) ? $first_sec : false;
		}

		/**************************************************************************************************************
		 * Above Functions are Related To Settings Page Themes.
		 *************************************************************************************************************/

		/**
		 * Renders / Creates An First Instance based on the $is_init_field variable value.
		 *
		 * @param array $field
		 * @param bool  $parent_section
		 * @param bool  $section
		 * @param bool  $is_init_field
		 *
		 * @return mixed
		 */
		public function render_field( $field = array(), $parent_section = false, $section = false, $is_init_field = false ) {
			return parent::render_field( $field, sanitize_title( $parent_section . '-' . $section ), $is_init_field );
		}

		/**
		 * Inits All Base Fields.
		 */
		public function init_fields() {
			$i = '__instance';
			foreach ( $this->fields as $o => $options ) {
				if ( false === $this->valid_option( $options ) ) {
					continue;
				}

				if ( isset( $options['callback'] ) && false !== $options['callback'] ) {
					continue;
				}

				if ( isset( $options['sections'] ) ) {
					foreach ( $options['sections'] as $s => $section ) {
						if ( false === $this->valid_option( $options, true ) ) {
							continue;
						}

						if ( isset( $section['callback'] ) && false !== $section['callback'] || false === isset( $section['fields'] ) ) {
							continue;
						}

						foreach ( $section['fields'] as $f => $field ) {
							$this->fields[ $o ]['sections'][ $s ]['fields'][ $f ][ $i ] = $this->render_field( $field, $options['name'], $section['name'], true );
						}
					}
				} elseif ( isset( $options['fields'] ) ) {
					foreach ( $options['fields'] as $f => $field ) {
						$this->fields[ $o ]['fields'][ $f ][ $i ] = $this->render_field( $field, $options['name'], false, true );
					}
				}
			}
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
			$user_attr = ( is_array( $user ) && isset( $user['attributes'] ) ) ? $user['attributes'] : array();
			$text      = ( is_array( $user ) && isset( $user['label'] ) ) ? $user['label'] : false;
			$text      = ( false === $text && is_string( $user ) ) ? $user : $label;
			return '<button ' . wponion_array_to_html_attributes( $this->parse_args( $user_attr, $default_attr ) ) . ' >' . $text . '</button>';
		}

		/**
		 * Returns Settings Button
		 *
		 * @return string
		 */
		public function settings_button() {
			$options = $this->option( 'buttons' );
			$html    = '';
			if ( false !== $options ) {
				if ( false !== $options['save'] ) {
					$html .= $this->_button( $options['save'], array(
						'class' => 'btn btn-success btn-sm wponion-save',
						'type'  => 'submit',
					), __( 'Save Settings' ) );
				}

				if ( false !== $options['restore'] ) {
					$html .= $this->_button( $options['restore'], array(
						'class' => 'btn btn-secondary btn-sm wponion-restore',
						'type'  => 'submit',
					), __( 'Restore' ) );
				}

				if ( false !== $options['reset'] ) {
					$html .= $this->_button( $options['reset'], array(
						'class' => 'btn btn-danger btn-sm wponion-reset',
						'type'  => 'submit',
					), __( 'Reset All' ) );
				}
			}
			return $html;
		}
	}
}
