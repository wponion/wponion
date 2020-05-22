<?php

namespace WPOnion\Modules\Admin;

use WPOnion\Bridge\Module_Utility;
use WPOnion\Field;

defined( 'ABSPATH' ) || exit;

if ( ! class_exists( '\WPOnion\Modules\Admin\Page' ) ) {
	/**
	 * Admin Page Class to handle custom admin page creation in wp-admin.
	 *
	 * @package WPOnion\Modules\Admin
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 */
	class Page extends Module_Utility {
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
		 * Page constructor.
		 *
		 * @param array $options
		 */
		public function __construct( $options = array() ) {
			if ( false === $this->is_multiple( $options ) ) {
				foreach ( $options as $option ) {
					new self( $option );
				}
			} else {
				parent::__construct( $options );
			}
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
				'href'              => false,
			);
		}

		/**
		 * @param null $submenu
		 *
		 * @return bool|mixed|\WPOnion\Modules\Admin\Page
		 */
		public function submenu( $submenu = null ) {
			if ( ! is_null( $submenu ) ) {
				return $this->set_option( 'submenu', $submenu );
			}

			if ( is_object( $this->option( 'submenu', false ) ) ) {
				if ( $this->option( 'submenu', false ) instanceof Page ) {
					return $this->option( 'submenu', false )->menu_slug();
				}
			}

			return $this->option( 'submenu' );
		}

		/**
		 * @param array $help_tab
		 *
		 * @return bool|mixed|\WPOnion\Modules\Admin\Page
		 */
		public function help_tab( $help_tab = null ) {
			return ( ! is_null( $help_tab ) ) ? $this->set_option( 'help_tab', $help_tab ) : $this->option( 'help_tab', $help_tab );
		}

		/**
		 * @param array $help_sidebar
		 *
		 * @return bool|mixed|\WPOnion\Modules\Admin\Page
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
		 * @return bool|mixed|\WPOnion\Modules\Admin\Page
		 */
		public function menu_title( $menu_title = null ) {
			return ( ! is_null( $menu_title ) ) ? $this->set_option( 'menu_title', $menu_title ) : $this->option( 'menu_title', false );
		}

		/**
		 * @param null $page_title
		 *
		 * @return bool|mixed|\WPOnion\Modules\Admin\Page
		 */
		public function page_title( $page_title = null ) {
			return ( ! is_null( $page_title ) ) ? $this->set_option( 'page_title', $page_title ) : $this->option( 'page_title', false );
		}

		/**
		 * @param null $capability
		 *
		 * @return bool|mixed|\WPOnion\Modules\Admin\Page
		 */
		public function capability( $capability = null ) {
			return ( ! is_null( $capability ) ) ? $this->set_option( 'capability', $capability ) : $this->option( 'capability', false );
		}

		/**
		 * @param null $menu_slug
		 *
		 * @return bool|mixed|\WPOnion\Modules\Admin\Page
		 */
		public function menu_slug( $menu_slug = null ) {
			return ( ! is_null( $menu_slug ) ) ? $this->set_option( 'menu_slug', $menu_slug ) : $this->option( 'menu_slug', false );
		}

		/**
		 * Returns Default WPOnion Menu Icon.
		 *
		 * @return string
		 */
		private function default_icon() {
			return 'data:image/svg+xml;base64,IDxzdmcgdmVyc2lvbj0iMS4wIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3MDAuMDAwMDAwcHQiIGhlaWdodD0iMjkxLjAwMDAwMHB0IiB2aWV3Qm94PSIwIDAgNzAwLjAwMDAwMCAyOTEuMDAwMDAwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0Ij4NCjxtZXRhZGF0YT4NCkNyZWF0ZWQgYnkgcG90cmFjZSAxLjEyLCB3cml0dGVuIGJ5IFBldGVyIFNlbGluZ2VyIDIwMDEtMjAxNQ0KPC9tZXRhZGF0YT4NCjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLDI5MS4wMDAwMDApIHNjYWxlKDAuMTAwMDAwLC0wLjEwMDAwMCkiIGZpbGw9IiMwMDAwMDAiIHN0cm9rZT0ibm9uZSI+DQo8cGF0aCBkPSJNNjI1NSAyNjg3IGMtMTc1IC0yMzEgLTI1MSAtMzMwIC0zMTEgLTQwNyAtMjQwIC0zMTAgLTU3NSAtNzUyIC01NzINCi03NTUgMiAtMyA3MyAxNCAxNTggMzUgODUgMjIgMTU4IDQwIDE2MyA0MCA0IDAgLTEwIC0zMyAtMzEgLTcyIC0yMiAtNDAgLTgyDQotMTUyIC0xMzQgLTI0OCAtNTMgLTk2IC0xMTcgLTIxNSAtMTQzIC0yNjUgLTI2IC00OSAtNTIgLTk2IC01OCAtMTAyIC0xMyAtMTcNCi0yMSAtMTggMTU4IDIzIDg2IDIwIDE1OSAzMyAxNjIgMzEgMiAtMyAtMTAwIC0yMTEgLTIyNyAtNDY0IC0xMjcgLTI1MiAtMjI1DQotNDUxIC0yMTggLTQ0MyAxNiAxOSA0MDYgNTA2IDczMSA5MTUgMTMyIDE2NSAyNDYgMzA4IDI1NCAzMTcgMTMgMTUgMTMgMTYgLTQNCjEyIC03OCAtMTcgLTI5NyAtNTUgLTMwOCAtNTIgLTEwIDIgNiAzNCA1MCAxMDMgMzUgNTUgOTggMTU0IDE0MCAyMjAgNDIgNjYNCjExOCAxODYgMTcwIDI2NiBsOTMgMTQ2IC0xODIgLTY5IGMtOTkgLTM4IC0xOTEgLTc0IC0yMDMgLTc5IC0yOSAtMTEgLTI5IC0xMQ0KNiA2NCAxNiAzNCA0NSA5NiA2NCAxMzcgMTkgNDEgNjcgMTQ1IDEwNyAyMzAgMTY3IDM1NyAyNzAgNTgzIDI2NyA1ODYgLTEgMQ0KLTYwIC03NSAtMTMyIC0xNjl6Ij48L3BhdGg+DQo8cGF0aCBkPSJNNTU2MyAyNjM1IGMtNDMzIC03OCAtNzM3IC00MDQgLTgxNyAtODc0IC0yMSAtMTI0IC0yMSAtMzQ5IDAgLTQ3MQ0KMzIgLTE4NCAxMDIgLTM1MyAyMDMgLTQ4NyA2OCAtOTAgMTQ5IC0xNjkgMTYwIC0xNTcgNyA4IDYzIDE1NyAxMjggMzM5IDEzIDM5DQoyOCA4MCAzMyA5MSA2IDE2IDEgMzkgLTE2IDgyIC03MSAxNzYgLTgyIDQ0MSAtMjggNjU3IDI4IDExMCA4OSAyMjEgMTYyIDI5NA0KNzYgNzUgMTQ2IDExNCAyNDggMTM4IGw3MCAxNiA3MSAxOTQgNzAgMTkzIC0xMDYgLTEgYy01OCAwIC0xMzggLTcgLTE3OCAtMTR6Ij48L3BhdGg+DQo8cGF0aCBkPSJNMTMgMjQ3OCBjMyAtMTMgMTIwIC00NTYgMjU5IC05ODUgbDI1MyAtOTYzIDIxNyAwIDIxNiAwIDEwMCA0MDgNCmM1NSAyMjQgMTI4IDUyNCAxNjMgNjY3IDM1IDE0MyA2NCAyNjIgNjYgMjY0IDIgMiA1IDIgOCAtMSAzIC0yIDgwIC0zMDUgMTcxDQotNjcxIGwxNjYgLTY2NyAyMTMgMCBjMjEyIDAgMjEzIDAgMjE3IDIyIDMgMTMgNTEgMTk0IDEwOCA0MDMgMjE2IDgwNSA0MTANCjE1MzAgNDEwIDE1MzcgMCA1IC05MyA3IC0yMDcgNiBsLTIwNyAtMyAtMTIyIC01MTUgYy02OCAtMjgzIC0xNDAgLTU4OCAtMTYxDQotNjc3IC0yMSAtOTAgLTQxIC0xNjMgLTQ0IC0xNjMgLTQgMCAtODMgMzA2IC0xNzUgNjgwIGwtMTY4IDY4MCAtMjAwIC0yIC0yMDANCi0zIC0xNjkgLTY2NSBjLTkzIC0zNjYgLTE3MSAtNjY3IC0xNzMgLTY2OSAtMTAgLTExIC0zIC0zOCAtMjU0IDEwNDQgbC02Nw0KMjkwIC0yMTMgMyAtMjEyIDIgNSAtMjJ6Ij48L3BhdGg+DQo8cGF0aCBkPSJNMjc5MCAxNTE2IGwwIC05ODYgMjE1IDAgMjE1IDAgMCAzNTQgMCAzNTQgMzEzIDUgYzI1NiAzIDMyMyA3IDM3Mg0KMjEgMjI1IDY1IDM3MSAyMTAgNDI1IDQyMiAyNCA5NCAyNiAyNDcgNSAzNDggLTM2IDE2OSAtMTQ0IDMwOSAtMjk3IDM4NCAtMTUwDQo3NCAtMTUwIDc0IC03MzAgNzkgbC01MTggNSAwIC05ODZ6IG05NDMgNjM0IGM2NyAtMTYgMTM2IC02NiAxNzIgLTEyNCAyOCAtNDcNCjMwIC01NSAzMCAtMTU1IDAgLTEyMiAtMTUgLTE2MSAtODQgLTIyNCAtNjggLTYxIC0xMTMgLTcwIC0zODggLTc1IGwtMjQzIC00DQowIDMwMiAwIDMwMyAyMzMgLTYgYzEyNyAtMyAyNTMgLTExIDI4MCAtMTd6Ij48L3BhdGg+DQo8cGF0aCBkPSJNNjQ2NSAyMTM4IGMtMTQ2IC00MDAgLTEzNCAtMzYyIC0xMjIgLTQxMCA2IC0yNCAxMSAtMTE1IDExIC0yMDMgMA0KLTEzMiAtNCAtMTc1IC0yMiAtMjUwIC00NyAtMTg3IC0xNTIgLTM0MSAtMjgyIC00MDkgLTMwIC0xNiAtNTYgLTMwIC01OCAtMzINCi03IC01IC0xNTIgLTM5OSAtMTUyIC00MTIgMCAtMTEgMTQ5IDcgMjMwIDI4IDMxOCA4MSA1NjcgMzEyIDY3OCA2MzAgNTkgMTY4DQo2NyAyMjUgNjYgNDU1IDAgMjAyIC0yIDIxNSAtMzIgMzI4IC0xNyA2NyAtNTIgMTYxIC04MCAyMjAgLTQ3IDk3IC0xNDQgMjQ3DQotMTYwIDI0NyAtNCAwIC0zOCAtODcgLTc3IC0xOTJ6Ij48L3BhdGg+DQo8L2c+DQo8L3N2Zz4=';
		}

		/**
		 * Checks if user has set any icon.
		 *
		 * @return bool
		 */
		public function has_icon() {
			return ( ! empty( $this->option( 'icon' ) ) );
		}

		/**
		 * @param null $icon
		 *
		 * @return bool|mixed|\WPOnion\Modules\Admin\Page
		 */
		public function icon( $icon = null ) {
			if ( ! is_null( $icon ) ) {
				return $this->set_option( 'icon', $icon );
			}

			return ( $this->has_icon() ) ? $this->option( 'icon' ) : $this->default_icon();
		}

		/**
		 * @param null $position
		 *
		 * @return bool|mixed|\WPOnion\Modules\Admin\Page
		 */
		public function position( $position = null ) {
			return ( ! is_null( $position ) ) ? $this->set_option( 'position', $position ) : $this->option( 'position', null );
		}

		/**
		 * @param null $hook_priority
		 *
		 * @return bool|mixed|\WPOnion\Modules\Admin\Page
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
					$this->set_option( 'assets', $_assets );
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
		 * Returns A Valid Slug.
		 *
		 * @return bool|mixed|string|\WPOnion\Modules\Admin\Page
		 */
		public function get_slug() {
			if ( empty( $this->menu_slug() ) ) {
				return ( empty( $this->page_title() ) ) ? 'wponion-' . md5( json_encode( $this->settings ) ) : sanitize_title( $this->page_title() );
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
			$this->menu_slug( $this->get_slug() );
			$slug       = $this->menu_slug();
			$menu_title = $this->menu_title();
			$page_title = $this->page_title();
			$render     = array( &$this, 'render' );

			if ( false === $this->submenu() || wponion_is_array( $this->submenu() ) ) {
				$this->page_slug = add_menu_page( $page_title, $menu_title, $this->capability(), $slug, $render, $this->icon(), $this->position() );
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
								$slug,
								$render,
							) );
						}
						break;
					default:
						$this->page_slug = add_submenu_page( $this->submenu(), $page_title, $menu_title, $this->capability(), $slug, $render );
						break;
				}
			}

			if ( ! empty( $this->option( 'href' ) ) ) {
				global $submenu, $_parent_pages, $menu;
				$menu_slug = $this->menu_slug();
				if ( isset( $_parent_pages[ $menu_slug ] ) ) {
					$menu_pos = $_parent_pages[ $menu_slug ];
					if ( ! empty( $menu_pos ) && ! empty( $submenu[ $menu_pos ] ) && wponion_is_array( $submenu[ $menu_pos ] ) ) {
						foreach ( $submenu[ $menu_pos ] as $id => $smenu ) {
							if ( $menu_slug === $submenu[ $menu_pos ][ $id ][2] ) {
								$submenu[ $menu_pos ][ $id ][2] = $this->option( 'href' );
							}
						}
					} else {
						foreach ( $menu as $id => $smenu ) {
							if ( $menu_slug === $menu[ $id ][2] ) {
								$menu[ $id ][2] = $this->option( 'href' );
							}
						}
					}
				}
			} else {
				$this->add_action( 'load-' . $this->page_slug, 'on_page_load', 1 );
				/**
				 * WordPres `esc_url` changes & to &#038 in url even if single & exists so to over come it.
				 * added a manuall str_replace.
				 * Check Github Issue @ https://github.com/wponion/wponion/issues/161
				 */
				$this->menu_url = menu_page_url( $slug, false );
				$this->menu_url = str_replace( array( '&#038;' ), array( '&' ), $this->menu_url );

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
				$fields = Field::$total_fields;
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
		 *
		 * @uses admin_footer_text
		 * @uses admin_footer_right_text
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
		 * Handles Page Assets Callback.
		 */
		public function handle_assets() {
			wponion_load_core_assets();
			wponion_load_asset( $this->assets(), $this );
			if ( false !== $this->active_tab && isset( $this->settings['tabs'][ $this->active_tab ] ) && isset( $this->settings['tabs'][ $this->active_tab ]['assets'] ) ) {
				wponion_load_asset( $this->settings['tabs'][ $this->active_tab ]['assets'], $this );
			}
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
