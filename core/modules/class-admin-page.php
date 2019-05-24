<?php
/**
 * Admin Page Class to handle custom admin page creation in wp-admin.
 * Project : wponion
 * Date : 03-11-2018
 * Time : 09:10 AM
 * File : admin-page.php
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @package wponion
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */


namespace WPOnion\Modules;

use WPOnion\Bridge\Module;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Modules\Admin_Page' ) ) {
	/**
	 * Admin Page Class to handle custom admin page creation in wp-admin.
	 *
	 * @package WPOnion\Modules
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Admin_Page extends Module {
		/**
		 * option
		 *
		 * @var array
		 */
		protected $option = array();

		/**
		 * active_tab
		 *
		 * @var bool
		 */
		protected $active_tab = false;
		/**
		 * active_tab
		 *
		 * @var bool
		 */
		protected $menu_url = false;

		/**
		 * module
		 *
		 * @var string
		 */
		protected $module = 'admin_page';

		/**
		 * page_slug
		 *
		 * @var null
		 */
		protected $page_slug = null;

		/**
		 * Admin_Page constructor.
		 *
		 * @param array $options
		 */
		public function __construct( $options = array() ) {
			if ( false === $this->is_multiple( $options ) ) {
				foreach ( $options as $option ) {
					new Admin_Page( $option );
				}
			} else {
				$this->settings = $this->parse_args( $options, $this->defaults() );
				$this->init();
			}

			$this->save_instance();
		}

		/**
		 * Checks if given menu args is multiple or not.
		 *
		 * @param $args
		 *
		 * @return bool
		 */
		protected function is_multiple( $args ) {
			foreach ( $this->defaults() as $key => $val ) {
				if ( isset( $args[ $key ] ) ) {
					return true;
				}
			}
			return false;
		}

		/**
		 * @return array
		 */
		protected function defaults() {
			return array(
				'network'           => false,
				'submenu'           => false,
				'menu_title'        => false,
				'page_title'        => false,
				'capability'        => 'manage_options',
				'menu_slug'         => false,
				'icon'              => false,
				'position'          => null,
				'help_tab'          => array(),
				'help_sidebar'      => '',
				'on_load'           => false,
				'footer_text'       => '',
				'footer_right_text' => '',
				'assets'            => false,
				'hook_priority'     => 10,
				'tabs'              => false,
				'render'            => false,
			);
		}

		/**
		 * @param null $submenu
		 *
		 * @return bool|mixed|\WPOnion\Modules\Admin_Page
		 */
		public function submenu( $submenu = null ) {
			if ( ! is_null( $submenu ) ) {
				return $this->set_option( 'submenu', $submenu );
			}

			if ( is_object( $this->option( 'submenu', false ) ) ) {
				if ( $this->option( 'submenu', false ) instanceof Admin_Page ) {
					return $this->option( 'submenu', false )
						->menu_slug();
				}
			}

			return $this->option( 'submenu' );
		}

		/**
		 * @param array $help_tab
		 *
		 * @return bool|mixed|\WPOnion\Modules\Admin_Page
		 */
		public function help_tab( $help_tab = null ) {
			return ( ! is_null( $help_tab ) ) ? $this->set_option( 'help_tab', $help_tab ) : $this->option( 'help_tab', $help_tab );
		}

		/**
		 * @param array $help_sidebar
		 *
		 * @return bool|mixed|\WPOnion\Modules\Admin_Page
		 */
		public function help_sidebar( $help_sidebar = null ) {
			return ( ! is_null( $help_sidebar ) ) ? $this->set_option( 'help_sidebar', $help_sidebar ) : $this->option( 'help_sidebar', $help_sidebar );
		}

		/**
		 * Returns A Valid Menu URL.
		 *
		 * @return mixed
		 */
		public function menu_url() {
			return $this->menu_url;
		}

		/**
		 * @param null $menu_title
		 *
		 * @return bool|mixed|\WPOnion\Modules\Admin_Page
		 */
		public function menu_title( $menu_title = null ) {
			return ( ! is_null( $menu_title ) ) ? $this->set_option( 'menu_title', $menu_title ) : $this->option( 'menu_title', false );
		}

		/**
		 * @param null $page_title
		 *
		 * @return bool|mixed|\WPOnion\Modules\Admin_Page
		 */
		public function page_title( $page_title = null ) {
			return ( ! is_null( $page_title ) ) ? $this->set_option( 'page_title', $page_title ) : $this->option( 'page_title', false );
		}

		/**
		 * @param null $capability
		 *
		 * @return bool|mixed|\WPOnion\Modules\Admin_Page
		 */
		public function capability( $capability = null ) {
			return ( ! is_null( $capability ) ) ? $this->set_option( 'capability', $capability ) : $this->option( 'capability', false );
		}

		/**
		 * @param null $menu_slug
		 *
		 * @return bool|mixed|\WPOnion\Modules\Admin_Page
		 */
		public function menu_slug( $menu_slug = null ) {
			return ( ! is_null( $menu_slug ) ) ? $this->set_option( 'menu_slug', $menu_slug ) : $this->option( 'menu_slug', false );
		}

		/**
		 * @param null $icon
		 *
		 * @return bool|mixed|\WPOnion\Modules\Admin_Page
		 */
		public function icon( $icon = null ) {
			return ( ! is_null( $icon ) ) ? $this->set_option( 'icon', $icon ) : $this->option( 'icon', false );
		}

		/**
		 * @param null $position
		 *
		 * @return bool|mixed|\WPOnion\Modules\Admin_Page
		 */
		public function position( $position = null ) {
			return ( ! is_null( $position ) ) ? $this->set_option( 'position', $position ) : $this->option( 'position', null );
		}

		/**
		 * @param null $hook_priority
		 *
		 * @return bool|mixed|\WPOnion\Modules\Admin_Page
		 */
		public function hook_priority( $hook_priority = null ) {
			return ( ! is_null( $hook_priority ) ) ? $this->set_option( 'hook_priority', $hook_priority ) : $this->option( 'hook_priority', false );
		}

		/**
		 * @param null $on_load
		 *
		 * @return bool|mixed
		 */
		public function on_load( $on_load = null ) {
			if ( ! is_null( $on_load ) ) {
				if ( ! wponion_is_array( $this->option( 'on_load' ) ) && false !== $this->option( 'on_load' ) ) {
					$this->set_option( 'on_load', array( $this->option( 'on_load' ), $on_load ) );
				} elseif ( wponion_is_array( $this->option( 'on_load' ) ) ) {
					$_on_load   = $this->option( 'on_load' );
					$_on_load[] = $on_load;
					$this->set_option( 'on_load', $_on_load );
				} else {
					$this->set_option( 'on_load', array( $on_load ) );
				}
			}
			return $this->option( 'on_load' );
		}

		/**
		 * @param null $assets
		 *
		 * @return bool|mixed
		 */
		public function assets( $assets = null ) {
			if ( ! is_null( $assets ) ) {
				if ( ! wponion_is_array( $this->option( 'assets' ) ) && false !== $this->option( 'assets' ) ) {
					$this->set_option( 'assets', array( $this->option( 'assets' ), $assets ) );
				} elseif ( wponion_is_array( $this->option( 'assets' ) ) ) {
					$_assets   = $this->option( 'assets' );
					$_assets[] = $assets;
					$this->set_option( 'on_load', $_assets );
				} else {
					$this->set_option( 'assets', array( $assets ) );
				}
			}
			return $this->option( 'assets' );
		}

		/**
		 * Inits Works.
		 */
		public function init() {
			if ( ! empty( $this->option( 'menu_title' ) ) ) {

				if ( false !== $this->option( 'network' ) ) {
					if ( ! did_action( 'network_admin_menu' ) ) {
						$this->add_action( 'network_admin_menu', 'add_menu', $this->hook_priority() );
					} else {
						$this->add_menu();
					}
				}

				if ( 'only' !== $this->option( 'network' ) ) {
					if ( ! did_action( 'admin_menu' ) ) {
						$this->add_action( 'admin_menu', 'add_menu', $this->hook_priority() );
					} else {
						$this->add_menu();
					}
				}
			}
		}

		/**
		 * Checks and returns a valid title.
		 *
		 * @return bool|mixed|\WPOnion\Modules\Admin_Page
		 */
		public function get_menu_title() {
			return $this->menu_title();
		}

		/**
		 * Checks and returns a valid title
		 *
		 * @return bool|mixed|\WPOnion\Modules\Admin_Page
		 */
		public function get_page_title() {
			return $this->page_title();
		}

		/**
		 * Returns A Valid Slug.
		 *
		 * @return bool|mixed|string|\WPOnion\Modules\Admin_Page
		 */
		public function get_slug() {
			if ( empty( $this->menu_slug() ) ) {
				$title = sanitize_title( $this->get_page_title() );
				if ( empty( $title ) ) {
					return 'wponion-' . md5( json_encode( $this->settings ) );
				}
				return $title;
			}
			return $this->menu_slug();
		}

		/**
		 * Retuns Proper Page Slug.
		 *
		 * @return null
		 */
		public function get_page_slug() {
			return $this->page_slug;
		}

		/**
		 * Registers Menu With WP.
		 */
		public function add_menu() {
			$_slug = $this->get_slug();
			$this->menu_slug( $_slug );
			$menu_title = $this->get_menu_title();
			$page_title = $this->get_page_title();

			if ( false === $this->submenu() || wponion_is_array( $this->submenu() ) ) {
				$this->page_slug = add_menu_page( $page_title, $menu_title, $this->capability(), $_slug, array(
					&$this,
					'render',
				), $this->icon(), $this->position() );
			} else {
				switch ( $this->submenu() ) {
					case 'management':
					case 'dashboard':
					case 'options':
					case 'plugins':
					case 'theme':
						if ( function_exists( 'add_' . $this->submenu() . '_page' ) ) {
							$this->page_slug = wponion_callback( 'add_' . $this->submenu() . '_page', array(
								$page_title,
								$menu_title,
								$this->capability(),
								$_slug,
								array(
									&$this,
									'render',
								),
							) );
						}
						break;
					default:
						$this->page_slug = add_submenu_page( $this->submenu(), $page_title, $menu_title, $this->capability(), $_slug, array(
							&$this,
							'render',
						) );
						break;
				}
			}
			$this->add_action( 'load-' . $this->page_slug, 'on_page_load', 1 );
			$this->menu_url = menu_page_url( $_slug, false );
			if ( wponion_is_array( $this->submenu() ) && wponion_is_callable( $this->submenu() ) ) {
				wponion_callback( $this->submenu(), $this );
			} elseif ( wponion_is_array( $this->submenu() ) ) {
				$subemnus = array();
				if ( true === $this->is_multiple( $this->submenu() ) ) {
					$subemnus[] = $this->submenu();
				} else {
					$subemnus = $this->submenu();
				}

				foreach ( $subemnus as $sub_menu ) {
					if ( wponion_is_callable( $sub_menu ) ) {
						wponion_callback( $sub_menu, $this );
					} elseif ( ! is_scalar( $sub_menu ) ) {
						if ( ! isset( $sub_menu['submenu'] ) ) {
							$sub_menu['submenu'] = $this;
						}
						new self( $sub_menu );
					}
				}
			}

			if ( ! empty( $this->help_tab() ) || ! empty( $this->help_sidebar() ) ) {
				wponion_help_tabs( $this, $this->help_tab(), $this->help_sidebar() );
			}
		}

		/**
		 * Renders.
		 */
		public function render() {
			if ( wponion_is_debug() ) {
				wponion_timer( 'wpo-admin-page' );
			}
			echo '<div class="wrap">';
			echo '<h1>' . get_admin_page_title() . '</h1>';

			$_callback = $this->option( 'render' );

			if ( false !== $this->option( 'tabs' ) ) {
				echo '<nav class="nav-tab-wrapper">';
				foreach ( $this->option( 'tabs' ) as $slug => $tab ) {
					$icon      = ( false !== $tab['icon'] ) ? '<i class="' . $tab['icon'] . '"></i>' : '';
					$is_active = ( $this->active_tab === $slug ) ? ' nav-tab-active ' : '';
					$url       = add_query_arg( 'tab', $slug );
					echo '<a href="' . $url . '" class="nav-tab ' . $is_active . '">' . $icon . ' ' . $tab['title'] . '</a>';
					if ( $is_active && ! empty( $tab['render'] ) ) {
						$_callback = $tab['render'];
					}
				}
				echo '</nav>';
			}

			if ( false !== $_callback ) {
				echo wponion_callback( $_callback, $this );
			}

			if ( wponion_is_debug() ) {
				$fields = \WPOnion\Field::$total_fields;
				$timer  = get_num_queries() . ' queries in ' . wponion_timer( 'wpo-admin-page', true ) . ' seconds';
				$timer  .= ( ! empty( $fields ) ) ? ' for ' . $fields . ' fields' : '';
				$timer  .= '<br/> WPOnion is currently set to developer mode';
				echo '<div class="wponion-developer-timer">' . $timer . '</div>';
			}
			echo '</div>';
		}

		/**
		 * Triggers Given Callbacks.
		 *
		 * @param $callback
		 */
		protected function handle_on_load_callbacks( $callback ) {
			if ( wponion_is_array( $callback ) ) {
				$is_called = wponion_callback( $callback, $this );
				if ( false === $is_called ) {
					foreach ( $callback as $call ) {
						echo wponion_callback( $call, $this );
					}
				} else {
					echo $is_called;
				}
			} elseif ( false !== $callback ) {
				wponion_callback( $callback, $this );
			}
		}

		/**
		 * Triggers On Page Load.
		 */
		public function on_page_load() {
			$this->add_action( 'admin_enqueue_scripts', 'handle_assets' );
			if ( false !== $this->option( 'footer_text' ) ) {
				$this->add_filter( 'admin_footer_text', 'admin_footer_text', 10 );
			}

			if ( false !== $this->option( 'footer_right_text' ) ) {
				$this->add_filter( 'update_footer', 'admin_footer_right_text', 11 );
			}
			if ( wponion_is_array( $this->option( 'tabs' ) ) ) {
				$new_tabs = array();
				foreach ( $this->option( 'tabs' ) as $id => $_tab ) {
					$_tab = $this->parse_args( $_tab, array(
						'title'   => false,
						'name'    => false,
						'icon'    => false,
						'on_load' => false,
						'render'  => false,
					) );

					if ( false === $_tab['name'] ) {
						$_tab['name'] = sanitize_title( $_tab['title'] );
					}
					$new_tabs[ $_tab['name'] ] = $_tab;
				}
				$this->set_option( 'tabs', $new_tabs );
			}
			if ( isset( $_GET['tab'] ) ) {
				$this->active_tab = sanitize_title( $_GET['tab'] );
			} elseif ( false !== $this->option( 'tabs' ) ) {
				$this->active_tab = $this->option( 'tabs' );
				$this->active_tab = array_keys( $this->active_tab );
				$this->active_tab = $this->active_tab[0];
			}

			$this->handle_on_load_callbacks( $this->on_load() );
			if ( false !== $this->active_tab && isset( $this->settings['tabs'][ $this->active_tab ] ) && isset( $this->settings['tabs'][ $this->active_tab ]['on_load'] ) ) {
				$this->handle_on_load_callbacks( $this->settings['tabs'][ $this->active_tab ]['on_load'] );
			}
		}

		/**
		 * Adds Footer Text.
		 *
		 * @return string
		 */
		public function admin_footer_text() {
			if ( empty( $this->option( 'footer_text' ) ) ) {
				/* translators: Added WPOnion */
				return sprintf( __( 'Proudly Powered By %1$s %2$s %3$s ', 'wponion' ), '<a href="http://wponion.com"><strong>', __( 'WPOnion', 'wponion' ), '</strong></a>' );
			}
			return ( wponion_is_callable( $this->option( 'footer_text' ) ) ) ? wponion_callback( $this->option( 'footer_text' ) ) : $this->option( 'footer_text' );
		}

		/**
		 * Adds Footer Text.
		 *
		 * @return string
		 */
		public function admin_footer_right_text() {
			if ( empty( $this->option( 'footer_right_text' ) ) ) {
				/* translators: Added WPOnionVersion  */
				return sprintf( __( 'WPOnion Version : %s', 'wponion' ), WPONION_VERSION ) . ' | ' . core_update_footer();
			}
			return ( wponion_is_callable( $this->option( 'footer_right_text' ) ) ) ? wponion_callback( $this->option( 'footer_right_text' ) ) : $this->option( 'footer_right_text' );
		}

		/**
		 * Handles Callback.
		 *
		 * @param $callback
		 */
		public function handle_assets_callback( $callback ) {
			if ( wponion_is_array( $callback ) ) {
				foreach ( $callback as $call ) {
					if ( is_string( $call ) ) {
						if ( wp_script_is( $call, 'registered' ) || wp_style_is( $call, 'registered' ) ) {
							wp_enqueue_script( $call );
							wp_enqueue_style( $call );
						} else {
							wponion_callback( $call, $this );
						}
					} else {
						echo wponion_callback( $call, $this );
					}
				}
			} elseif ( false !== $callback ) {
				$status = wponion_callback( $callback, $this );
				if ( false === $status ) {
					if ( wp_script_is( $callback, 'registered' ) || wp_style_is( $callback, 'registered' ) ) {
						wp_enqueue_script( $callback );
						wp_enqueue_style( $callback );
					}
				}
			}
		}

		/**
		 * Handles Page Assets Callback.
		 */
		public function handle_assets() {
			$this->handle_assets_callback( $this->assets() );
			if ( false !== $this->active_tab && isset( $this->settings['tabs'][ $this->active_tab ] ) && isset( $this->settings['tabs'][ $this->active_tab ]['assets'] ) ) {
				$this->handle_assets_callback( $this->settings['tabs'][ $this->active_tab ]['assets'] );
			}
		}

		public function on_init() {
		}

		/**
		 * Returns Unique Page Slug.
		 *
		 * @return string
		 */
		public function uid() {
			return $this->get_slug();
		}

		/**
		 * Returns A Unique Name.
		 *
		 * @return string
		 */
		public function unique() {
			if ( empty( $this->unique ) ) {
				$this->unique = md5( wp_json_encode( $this->settings ) );
			}
			return $this->unique;
		}

		/**
		 * @return bool
		 */
		public function active_tab() {
			return $this->active_tab;
		}

		/**
		 * @return bool
		 */
		public function has_tab() {
			return ( false !== $this->option( 'tabs' ) );
		}
	}
}
