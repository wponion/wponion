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
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'WPOnion_Settings' ) ) {
	/**
	 * Class WPOnion_Settings
	 *
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class WPOnion_Settings extends WPOnion_Feature_Abstract {
		/**
		 * type
		 *
		 * @var string
		 */
		protected $module = 'settings';

		/**
		 * options_cache
		 *
		 * @var array
		 */
		protected $options_cache = false;

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
		 * Stores Current template information.
		 * current_theme
		 *
		 * @var bool
		 */
		protected $current_theme = false;

		/**
		 * active_menu
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
			if ( ! empty( $this->settings ) && false === wponion_is_ajax() ) {
				$this->raw_options = $settings;

				if ( false === $this->settings['plugin_id'] ) {
					$this->plugin_id = $this->settings['option_name'];
				} else {
					$this->plugin_id = $this->settings['plugin_id'];
				}

				$this->unique = $this->settings['option_name'];

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
		 * @todo work on the save feature.
		 */
		public function save_validate( $request ) {
			$this->get_cache();
			$instance = new WPOnion_Settings_Save_Handler();

			$instance->init_class( array(
				'module'      => 'settings',
				'plugin_id'   => $this->plugin_id(),
				'unique'      => $this->unique,
				'fields'      => $this->fields,
				'user_values' => $request,
				'db_values'   => $this->get_db_values(),
				'args'        => array(
					'settings' => &$this,
				),
			) )
				->run();

			$this->options_cache['parent_id']    = $_POST['wponion-parent-id'];
			$this->options_cache['section_id']   = $_POST['wponion-section-id'];
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
								$this->db_values[ $field['id'] ] = $field['default'];
								$default[ $field['id'] ]         = $field['default'];
							}
						}
					} elseif ( isset( $options['sections'] ) ) {
						foreach ( $options['sections'] as $section ) {
							if ( false !== $this->valid_option( $section, true, false ) ) {
								foreach ( $options['fields'] as $field ) {
									if ( ! isset( $field['id'] ) || ! isset( $field['default'] ) ) {
										continue;
									}

									if ( ! isset( $this->db_values[ $field['id'] ] ) ) {
										$this->db_values[ $field['id'] ] = $field['default'];
										$default[ $field['id'] ]         = $field['default'];
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
		 * Saves Cache.
		 *
		 * @param array $data .
		 */
		protected function set_cache( $data = array() ) {
			update_option( $this->unique . '-setcache', $data );
			$this->options_cache = $data;
		}

		/**
		 * Returns Options Cache.
		 */
		protected function get_cache() {
			if ( false === $this->options_cache ) {
				$db_key              = $this->unique . '-setcache';
				$values              = get_option( $db_key, array() );
				$this->options_cache = ( is_array( $values ) ) ? $values : array();
				if ( false === isset( $this->options_cache['wponion_version'] ) || ! version_compare( $this->options_cache['wponion_version'], WPONION_DB_VERSION, '=' ) ) {
					$this->options_cache = array();
				} else {
					if ( isset( $this->options_cache['field_errors'] ) ) {
						$instance = wponion_registry( $this->module . '_' . $this->plugin_id(), 'WPOnion_Field_Error_Registry' );
						$instance->set( $this->options_cache['field_errors'] );
						var_dump( $instance );
					}
				}
			}
			return $this->options_cache;
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
			echo '<div class="hidden" style="display:none;" id="wponino-hidden-fields">';
			settings_fields( $this->unique );
			echo '<input type="hidden" name="wponion-parent-id" value="' . $this->active( true ) . '"/>';
			echo '<input type="hidden" name="wponion-section-id" value="' . $this->active( false ) . '"/>';
			echo '</div>';
			$this->init_theme();
			echo '</form>';
		}

		/**
		 * inits selected theme.
		 */
		protected function init_theme() {
			if ( false === $this->current_theme ) {
				$theme          = $this->option( 'theme' );
				$template_path  = $this->option( 'template_path' );
				$file           = wponion_locate_template( $theme . '/' . $theme . '-init.php', $template_path );
				$html_file      = wponion_locate_template( $theme . '/' . $theme . '-settings-html.php', $template_path );
				$callback_class = 'WPOnion_' . strtolower( $theme ) . '_Theme';

				if ( file_exists( $file ) && file_exists( $html_file ) ) {
					$this->current_theme = array(
						'class'     => $callback_class,
						'success'   => true,
						'file'      => $file,
						'html_file' => wponion_locate_template( $theme . '/' . $theme . '-settings-html.php', $template_path ),
					);
					wponion_get_template( $theme . '/' . $theme . '-init.php', array( 'plugin_id' => $this->plugin_id() ) );
				} else {
					$this->current_theme = array(
						'success' => false,
						'html'    => '<h3>' . __( 'Settings Page Theme Not Found :-( ' ) . '</h3>',
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
			wp_enqueue_script( 'wponion-core' );
			wp_enqueue_style( 'wponion-core' );
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
			$this->menus = $this->_extract_settings_menus();
			return $this->menus;
		}

		/**
		 * Extracts Settings Sections and its subsections from the $this->fields array.
		 *
		 * @param array $fields
		 * @param bool  $is_child
		 * @param bool  $parent
		 *
		 * @return array
		 */
		protected function _extract_settings_menus( $fields = array(), $is_child = false, $parent = false ) {
			$return = array();
			if ( empty( $fields ) ) {
				$fields = $this->fields;
			}

			if ( is_array( $fields ) ) {
				foreach ( $fields as $field ) {
					if ( isset( $field['sections'] ) && false === empty( $field['sections'] ) ) {
						$menu                               = $this->handle_single_menu( $field, $is_child, $parent );
						$return[ $menu['name'] ]            = $menu;
						$return[ $menu['name'] ]['submenu'] = $this->_extract_settings_menus( $field['sections'], true, $menu['name'] );
					} elseif ( ( isset( $field['fields'] ) && false === empty( $field['fields'] ) ) || isset( $field['callback'] ) || isset( $field['href'] ) ) {
						$menu                    = $this->handle_single_menu( $field, $is_child, $parent );
						$return[ $menu['name'] ] = $menu;
					} else {
						$menu                                    = $this->handle_single_menu( $field, $is_child, $parent );
						$return[ $menu['name'] ]                 = $menu;
						$return[ $menu['name'] ]['is_seperator'] = true;
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
				'query_args'       => isset( $menu['query_args'] ) ? $menu['query_args'] : false,
			);
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
				'theme'         => 'modern',
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
			if ( true === $this->option( 'is_single_page' ) ) {
				return true;
			} elseif ( 'submenu' === $this->option( 'is_single_page' ) ) {
				return 'only_submenu';
			} else {
				return false;
			}
		}

		/**************************************************************************************************************
		 * Below Functions are Related To Settings Page Themes.
		 *************************************************************************************************************/

		/**
		 * @param string $extra_class
		 * @param bool   $bootstrap
		 *
		 * @return string
		 */
		public function wrap_class( $extra_class = '', $bootstrap = false ) {
			$class = $this->default_wrap_class( $bootstrap );

			$class .= ( true === $this->is_single_page() ) ? ' wponion-single-page ' : '';
			$class .= ( 'only_submenu' === $this->is_single_page() ) ? ' wponion-submenu-single-page ' : '';
			$class .= ' wponion-' . $this->option( 'theme' ) . '-theme ';

			if ( 1 === count( $this->fields ) ) {
				$class .= ' wponion-hide-nav ';

				$current = current( $this->fields );
				if ( isset( $current['fields'] ) || ( isset( $current['sections'] ) && 1 === count( $current['sections'] ) ) ) {
					$class .= ' wponion-no-subnav ';
				}
			}

			$class .= ' ' . $extra_class;


			return esc_attr( $class );
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
		 * Renders Fields Output.
		 *
		 * @param array $field
		 *
		 * @return string
		 */
		public function render_field( $field = array() ) {
			$value = _wponion_get_field_value( $field, $this->get_db_values() );

			return wponion_add_element( $field, $value, array(
				'plugin_id' => $this->plugin_id(),
				'unique'    => $this->unique,
				'module'    => 'settings',
			) );
		}

		/**
		 * Inits All Base Fields.
		 */
		public function init_fields() {
			foreach ( $this->fields as $options ) {
				if ( false === $this->valid_option( $options ) ) {
					continue;
				}

				if ( isset( $options['callback'] ) && false !== $options['callback'] ) {
					continue;
				}

				if ( isset( $options['sections'] ) ) {
					foreach ( $options['sections'] as $section ) {
						if ( false === $this->valid_option( $options, true ) ) {
							continue;
						}

						if ( isset( $section['callback'] ) && false !== $section['callback'] || false === isset( $section['fields'] ) ) {
							continue;
						}

						foreach ( $section['fields'] as $field ) {
							wponion_field( $field, _wponion_get_field_value( $field, array() ), array(
								'plugin_id' => $this->plugin_id(),
								'unique'    => $this->unique,
								'module'    => 'setttings',
							) );
						}
					}
				} elseif ( isset( $options['fields'] ) ) {
					foreach ( $options['fields'] as $field ) {
						wponion_field( $field, _wponion_get_field_value( $field, array() ), array(
							'plugin_id' => $this->plugin_id(),
							'unique'    => $this->unique,
							'module'    => 'setttings',
						) );
					}
				}
			}
		}


		public function _button( $user, $default_attr = array(), $label = '' ) {
			$user_attr  = ( is_array( $user ) && isset( $user['attributes'] ) ) ? $user['attributes'] : array();
			$attributes = $this->parse_args( $user_attr, $default_attr );
			$text       = ( is_array( $user ) && isset( $user['label'] ) ) ? $user['label'] : false;
			$text       = ( false === $text && is_string( $user ) ) ? $user : $label;
			return '<button ' . wponion_array_to_html_attributes( $attributes ) . ' >' . $text . '</button>';
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
