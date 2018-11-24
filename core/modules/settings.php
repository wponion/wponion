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
		protected $menu_instance = '';

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
		public function on_init() {
			$this->add_action( 'admin_init', 'wp_admin_init' );
			$menu              = $this->parse_args( $this->option( 'menu' ), $this->defaults( 'menu' ) );
			$menu['on_load']   = ( ! is_array( $menu['on_load'] ) ) ? array() : $menu['on_load'];
			$menu['assets']    = ( ! is_array( $menu['assets'] ) ) ? array() : $menu['assets'];
			$menu['on_load'][] = array( &$this, 'on_settings_page_load' );
			$menu['render']    = array( &$this, 'render' );
			$menu['assets'][]  = 'wponion_load_core_assets';
			$menu['assets'][]  = $this->option( 'extra_js' );
			$menu['assets'][]  = $this->option( 'extra_css' );
			$menu['assets'][]  = array( $this, 'load_admin_styles' );

			if ( false !== $menu['submenu'] ) {
				if ( ! is_string( $menu['submenu'] ) ) {
					if ( is_array( $menu['submenu'] ) && ! isset( $menu['submenu'][0] ) || ! is_array( $menu['submenu'] ) ) {
						$menu['submenu'] = array( $menu['submenu'] );
					}
					$menu['submenu'] = array_merge( array(
						array(
							&$this,
							'register_admin_menu',
						),
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

				if ( isset( $menu['submenu'] ) && ( true === $menu['submenu'] || is_array( $menu['submenu'] ) ) ) {
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

			$this->options_cache['parent_id']    = isset( $_POST['parent-id'] ) ? sanitize_text_field( $_POST['parent-id'] ) : null;
			$this->options_cache['section_id']   = isset( $_POST['section-id'] ) ? sanitize_text_field( $_POST['section-id'] ) : null;
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
					$this->set_defaults();
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
					} elseif ( $options->has_sections() ) {
						foreach ( $options->sections() as $section ) {
							if ( ! $section->has_fields() ) {
								continue;
							}
							if ( false !== $this->valid_option( $section, true, false ) ) {
								foreach ( $section->fields() as $field ) {
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
		 * Renders Settings Page HTML.
		 */
		public function render() {
			echo '<form method="post" action="options.php" enctype="multipart/form-data" class="wponion-form">';
			echo '<div class="hidden" style="display:none;" id="wponion-hidden-fields">';
			settings_fields( $this->unique );
			echo '<input type="hidden" name="parent-id" value="' . $this->active( true ) . '"/>';
			echo '<input type="hidden" name="section-id" value="' . $this->active( false ) . '"/>';
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
			if ( isset( $user_menu['submenu'] ) && ( true === $user_menu['submenu'] || is_array( $user_menu['submenu'] ) ) ) {
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
			$cache  = $this->get_cache();
			$_cache = array(
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
			if ( false === $is_section && is_string( $page_id ) && true === $this->fields->offsetExists( $page_id ) ) {
				return $page_id;
			} elseif ( true === $is_section && is_string( $page_id ) && is_string( $section_id ) ) {
				if ( true === $this->fields->offsetExists( $page_id . '/sections/' . $section_id ) ) {
					return $section_id;
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
				if ( $this->fields->offsetExists( $page ) && true === $is_section && $this->fields->offsetExists( $page . '/sections' ) ) {
					$sections = $this->fields->get( $page );
					$return   = $sections->first_section();
					$return   = $return->name();
					return $return;
				} elseif ( $this->fields->offsetExists( $page ) && false === $is_section ) {
					return $this->fields->get( $page )
						->name();
				}
			} else {
				$this->fields->rewind();
				$page = $this->fields->current();
				$this->fields->rewind();
				if ( $page ) {
					if ( true === $is_section ) {
						if ( $page->offsetExists( 'sections' ) ) {
							$sections = $page->get( 'sections' );
							$return   = $sections->current();
							$return   = $return->name();
							$sections->rewind();
							return $return;
						}
					} else {
						return $page->name();
					}
				}
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

				'save_button' => __( 'Save Settings' ),/*
				'buttons'     => array(
					'save'    => __( 'Save Settings' ),
					'restore' => false, #__( 'Restore' )
					'reset'   => false, #__( 'Reset All Options' )
				),*/
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
		 * @param bool   $is_bootstrap
		 *
		 * @return string
		 */
		public function wrap_class( $extra_class = '', $is_bootstrap = false ) {
			$class   = array();
			$class[] = ( 'only_submenu' === $this->is_single_page() ) ? 'wponion-submenu-single-page' : '';
			$class[] = ( true === $this->is_single_page() ) ? 'wponion-single-page' : '';

			if ( 1 === count( $this->fields ) ) {
				$class[] = 'wponion-hide-nav';
				$c       = $this->fields;
				if ( $c->has_fields() || ( $c->has_sections() && 1 === count( $c->sections() ) ) ) {
					$class[] = 'wponion-no-subnav';
				}
			}

			return parent::wrap_class( wponion_html_class( $extra_class, array_filter( $class ) ), $is_bootstrap );
		}

		/**
		 * Checks if Option Loop Is Valid
		 *
		 * @param array|\WPonion\Module_Fields $option
		 * @param bool                         $section
		 * @param bool                         $check_current_page
		 *
		 * @return bool
		 */
		public function valid_option( $option = array(), $section = false, $check_current_page = true ) {
			if ( ! $option->has_fields() && ! $option->has_sections() && ! $option->has_callback() ) {
				return false;
			}

			if ( true === $check_current_page ) {
				if ( false === $section && ( false === $this->is_single_page() || 'only_submenu' === $this->is_single_page() ) && $option->name() !== $this->active( true ) ) {
					return false;
				}

				if ( true === $section && false === $this->is_single_page() && $option->name() !== $this->active( false ) ) {
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
		 * @param bool $first_section
		 *
		 * @return bool
		 */
		public function is_tab_active( $parent = false, $child = false, $first_section = false ) {
			if ( false !== $parent && false === $child ) {
				return ( $parent === $this->active( true ) ) ? true : false;
			} else {
				if ( $parent === $this->active( true ) && $child === $this->active( false ) ) {
					return true;
				} elseif ( $parent !== $this->active( true ) && $first_section === $child ) {
					return true;
				}
				return false;
			}
		}

		/**
		 * This function should be used in each loop when parent loop is runnig.
		 *
		 * @param $options \WPOnion\Module_Fields
		 *
		 * @return array|bool|mixed
		 */
		public function get_first_section( $options ) {
			if ( $options->has_sections() ) {
				$first_sec = $options->first_section();
				return $first_sec->name();
			}
			return false;
		}

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
			foreach ( $this->fields as $options ) {
				if ( false === $this->valid_option( $options ) ) {
					continue;
				}
				if ( $options->has_callback() ) {
					continue;
				}

				if ( $options->has_sections() ) {
					foreach ( $options->sections() as $section ) {
						if ( false === $this->valid_option( $section, true ) ) {
							continue;
						}

						if ( $options->has_callback() || ! $section->has_fields() ) {
							continue;
						}

						foreach ( $section->fields() as $field ) {
							$this->render_field( $field, $options->name(), $section->name(), true );
						}
					}
				} elseif ( $options->has_fields() ) {
					foreach ( $options->fields() as $field ) {
						$this->render_field( $field, $options->name(), false, true );
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
	}
}
