<?php
/**
 *
 * Initial version created 07-05-2018 / 06:13 PM
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @package
 * @link
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */
global $wponion_wp_theme;
$wponion_wp_theme = null;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( 'WPOnion_wp_Theme' ) ) {
	/**
	 * Class WPOnion_Theme_WP
	 *
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class WPOnion_wp_Theme extends WPOnion_Theme_Abstract {
		/**
		 * WPOnion_wp_Theme constructor.
		 *
		 * @param $plugin_id
		 */
		public function __construct( $plugin_id ) {
			parent::__construct( $plugin_id, __FILE__ );
		}

		public function register_assets() {
			wp_enqueue_style( 'wponion-wp-theme', $this->asset( 'assets/wponion-wp-theme' ), array( 'wponion-core' ) );
			wp_enqueue_script( 'wponion-wp-theme', $this->asset( 'assets/wponion-wp-theme', 'js' ), array( 'wponion-plugins' ) );
		}

		/**
		 * Generates Main Menu HTML.
		 *
		 * @return bool|string
		 */
		public function get_main_menu_html() {
			$return = '<nav class="nav-tab-wrapper">';
			$menus  = $this->settings()
				->settings_menus();

			if ( is_array( $menus ) ) {
				foreach ( $menus as $slug => $menu ) {
					if ( isset( $menu['is_seperator'] ) && true === $menu['is_seperator'] ) {
						continue;
					}
					$attr          = isset( $menu['attributes'] ) ? $menu['attributes'] : array();
					$attr['class'] = isset( $attr['class'] ) ? $attr['class'] . ' nav-tab ' : ' nav-tab ';
					$attr['title'] = isset( $attr['title'] ) ? $attr['title'] : $menu['title'];
					$page_title    = $menu['title'];

					$attr['class'] .= ( ! empty( $menu['icon'] ) ) ? ' nav-with-icon ' : '';
					$attr['class'] .= ( isset( $menu['is_internal_href'] ) && true === $menu['is_internal_href'] ) ? ' nav-internal-href ' : '';

					if ( true === $menu['is_active'] ) {
						$attr['class'] .= ' nav-tab-active ';
					}
					$attr['href'] = $menu['href'];
					$attr         = wponion_array_to_html_attributes( $attr );

					$return .= '<a ' . $attr . '>' . wponion_icon( $menu['icon'] ) . $page_title . '</a>';
				}
			} else {
				return false;
			}

			$return .= '</nav>';
			return $return;
		}

		/**
		 * @param string $menu_slug
		 *
		 * @return string
		 */
		public function submenu_html( $menu_slug = '' ) {
			$menus = $this->settings()
				->settings_menus();

			if ( isset( $menus[ $menu_slug ]['submenu'] ) && ! empty( $menus[ $menu_slug ]['submenu'] ) && is_array( $menus[ $menu_slug ]['submenu'] ) ) {
				if ( count( $menus[ $menu_slug ]['submenu'] ) <= 1 ) {
					return '';
				}
				$return = array();
				foreach ( $menus[ $menu_slug ]['submenu'] as $slug => $menu ) {
					if ( isset( $menu['is_seperator'] ) && true === $menu['is_seperator'] ) {
						continue;
					}

					$attr          = isset( $menu['attributes'] ) ? $menu['attributes'] : array();
					$attr['class'] = isset( $attr['class'] ) ? $attr['class'] : '';
					$attr['title'] = isset( $attr['title'] ) ? $attr['title'] : $menu['title'];
					$page_title    = $menu['title'];

					$attr['class'] .= ( ! empty( $menu['icon'] ) ) ? ' nav-with-icon ' : '';
					$attr['class'] .= ( isset( $menu['is_internal_href'] ) && true === $menu['is_internal_href'] ) ? ' nav-internal-href ' : '';

					if ( true === $menu['is_active'] ) {
						$attr['class'] .= ' current ';
					}

					$attr['href'] = $menu['href'];
					$attr         = wponion_array_to_html_attributes( $attr );
					$return[]     = '<li> <a ' . $attr . '>' . wponion_icon( $menu['icon'] ) . $page_title . '</a>';
				}
				$return = implode( '  </li>', $return );
				$return = '<ul class="wponion-submenus subsubsub"  id="wponion-tab-' . $menus[ $menu_slug ]['name'] . '" >' . $return . '</ul>';
				return '<h2 class="wponion-subnav-container hndle">' . $return . '</h2>';
			} else {
				return '';
			}
		}

		public function settings_tab_level1_wrap( $return = '', $place = 'start', $options = array(), $is_parent_active = false ) {
			if ( 'start' === $place ) {
				return $return . '<div class="postbox">' . $this->submenu_html( $options['name'] );
			} else {
				return '</div>' . $return;
			}
		}

		/**
		 * @param $tab_wrap
		 * @param $options
		 * @param $is_parent_hidden
		 *
		 * @return string
		 */
		public function settings_tab_wrap_start( $tab_wrap, $options = array(), $is_parent_active ) {
			return $tab_wrap . '<div class="postbox">' . $this->submenu_html( $options['name'] );
		}

		/**
		 * @param $tab_wrap
		 * @param $options
		 * @param $is_parent_hidden
		 *
		 * @return string
		 */
		public function settings_tab_wrap_end( $tab_wrap, $options = array(), $is_parent_active ) {
			return $tab_wrap . '</div>';
		}

		/**
		 * @param $content
		 * @param $options
		 * @param $is_parent_active
		 *
		 * @return mixed|string
		 */
		public function settings_section_start( $content, $options, $is_parent_active ) {
			return '<div class="inside">' . $content;
		}

		/**
		 * @param $content
		 * @param $options
		 * @param $is_parent_active
		 *
		 * @return mixed|string
		 */
		public function settings_section_end( $content, $options, $is_parent_active ) {
			return '</div>';
		}
	}
}

$wponion_wp_theme = new WPOnion_wp_Theme( $plugin_id );
return $wponion_wp_theme;
