<?php
/**
 *
 * Initial version created 06-05-2018 / 07:10 AM
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @package bullet-wp
 * @link http://github.com/bullet-wp
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
		protected $type = 'settings';

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
		 * WPOnion_Settings constructor.
		 *
		 * @param array $fields Array of settings fields.
		 * @param array $settings array of WPOnion Settings Configuration.
		 */
		public function __construct( $fields = array(), $settings = array() ) {
			parent::__construct( $fields, $settings );
			if ( ! empty( $this->fields ) && ! empty( $this->settings ) && false === wponion_is_ajax() ) {
				$this->raw_options = $settings;

				if ( false === $this->settings['plugin_id'] ) {
					$this->plugin_id = $this->settings['option_name'];
				} else {
					$this->plugin_id = $this->settings['plugin_id'];
				}

				$this->add_action( 'admin_menu', 'register_admin_menu' );
			}
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
				$this->add_action( 'load-' . $this->page_hook, 'on_settings_page_load' );
			}
		}

		/**
		 * Renders Settings Page HTML.
		 */
		public function render_page() {
			$this->init_theme();
		}

		protected function init_theme() {
			if ( false === $this->current_theme ) {
				$theme         = $this->option( 'theme' );
				$template_path = $this->option( 'template_path' );
				$file          = wponion_locate_template( $theme . '/' . $theme . '-init.php', $template_path );
				$html_file     = wponion_locate_template( $theme . '/' . $theme . '-html.php', $template_path );

				if ( file_exists( $file ) && file_exists( $html_file ) ) {
					$this->current_theme = array(
						'success'   => true,
						'file'      => $file,
						'html_file' => wponion_locate_template( $theme . '/' . $theme . '-html.php', $template_path ),
					);
					wponion_get_template( $theme . '/' . $theme . '-init.php', array( 'class' => &$this ) );
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
		 * Triggers Only When Current Instance's Settings Page Loads.
		 */
		public function on_settings_page_load() {
			$this->menus = $this->extract_settings_sections();
			$this->init_theme();
		}

		/**
		 * Extracts Settings Sections and its subsections from the $this->fields array.
		 *
		 * @param array $fields
		 *
		 * @return array
		 */
		protected function extract_settings_sections( $fields = array() ) {
			$return = array();
			if ( empty( $fields ) ) {
				$fields = $this->fields;
			}

			if ( is_array( $fields ) ) {
				foreach ( $fields as $field ) {
					if ( isset( $field['sections'] ) && false === empty( $field['sections'] ) ) {
						$menu                               = $this->handle_single_menu( $field, true );
						$return[ $menu['name'] ]            = $menu;
						$return[ $menu['name'] ]['submenu'] = $this->extract_settings_sections( $field['sections'] );
					} elseif ( ( isset( $field['fields'] ) && false === empty( $field['fields'] ) ) || isset( $field['callback'] ) ) {
						$menu                    = $this->handle_single_menu( $field, true );
						$return[ $menu['name'] ] = $menu;
					} else {
						$menu                                    = $this->handle_single_menu( $field, true );
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
		 * @param bool $has_child
		 *
		 * @return array
		 */
		protected function handle_single_menu( $menu, $has_child = false ) {
			$title = isset( $menu['title'] ) ? $menu['title'] : false;
			$name  = isset( $menu['name'] ) ? $menu['name'] : sanitize_title( $title );
			$icon  = isset( $menu['icon'] ) ? $menu['icon'] : false;
			return array(
				'title'      => $title,
				'name'       => $name,
				'icon'       => $icon,
				'is_active'  => false,
				'href'       => ( isset( $menu['href'] ) ) ? $menu['href'] : false,
				'query_args' => isset( $menu['query_args'] ) ? $menu['query_args'] : false,
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
				'slug'       => 'bullet-wp',
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
				'style'         => 'modern',
				'option_name'   => '_bullet_wp',
				'plugin_id'     => false,
				'theme'         => 'modern',
				'template_path' => false,
			);
		}
	}
}
