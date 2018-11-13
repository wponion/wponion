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

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( 'WPOnion_Wp_Theme' ) ) {
	/**
	 * Class WPOnion_Theme_WP
	 *
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class WPOnion_Wp_Theme extends \WPOnion\Theme_API {
		/**
		 * WPOnion_wp_Theme constructor.
		 *
		 * @param $data
		 */
		public function __construct( $data ) {
			parent::__construct( $data, __FILE__, 'wp' );
		}

		/**
		 * @return mixed|void
		 */
		public function register_assets() {
			wp_enqueue_style( 'wponion-wp-theme', $this->url( 'assets/wponion-wp-theme.css' ), array( 'wponion-core' ) );
			wp_enqueue_script( 'wponion-wp-theme', $this->url( 'assets/wponion-wp-theme.js' ), array( 'wponion-plugins' ) );
		}

		/**
		 * Renders Metabox MENU HTML.
		 *
		 * @param        $menu
		 * @param string $parent_name
		 *
		 * @return string
		 */
		public function metabox_menu_html( $menu, $parent_name = '' ) {
			$attr                    = isset( $menu['attributes'] ) ? $menu['attributes'] : array();
			$attr['title']           = isset( $attr['title'] ) ? $attr['title'] : $menu['title'];
			$page_title              = $menu['title'];
			$attr['data-href']       = $menu['href'];
			$attr['href']            = 'javascript:void(0);';
			$attr['class']           = isset( $attr['class'] ) ? $attr['class'] : array();
			$attr['class']           = wponion_html_class( $attr['class'], array(
				wponion_html_class( $menu['class'] ),
				( ! empty( $men['icon'] ) ) ? 'nav-with-icon' : '',
				( isset( $menu['is_internal_href'] ) && true === $menu['is_internal_href'] ) ? 'nav-internal-href' : '',
				( isset( $menu['is_active'] ) && true === $menu['is_active'] ) ? 'active' : '',
			) );
			$attr['data-wponion-id'] = ( ! empty( $parent_name ) ) ? 'wponion_menu_' . $parent_name . '_' . $menu['name'] : 'wponion_menu_' . $menu['name'];
			$attr                    = wponion_array_to_html_attributes( $attr );
			return '<a ' . $attr . '>' . wponion_icon( $menu['icon'] ) . ' ' . $page_title . '</a>';
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
					$attr['title'] = isset( $attr['title'] ) ? $attr['title'] : $menu['title'];
					$page_title    = $menu['title'];
					$attr['href']  = $menu['href'];
					$attr['class'] = isset( $attr['class'] ) ? $attr['class'] : array();
					$attr['class'] = wponion_html_class( $attr['class'], array(
						wponion_html_class( $menu['class'] ),
						'nav-tab',
						( ! empty( $men['icon'] ) ) ? 'nav-with-icon' : '',
						( isset( $menu['is_internal_href'] ) && true === $menu['is_internal_href'] ) ? 'nav-internal-href' : '',
						( true === $menu['is_active'] ) ? 'nav-tab-active' : '',
					) );
					$attr          = wponion_array_to_html_attributes( $attr );

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
					$attr['title'] = isset( $attr['title'] ) ? $attr['title'] : $menu['title'];
					$page_title    = $menu['title'];
					$attr['href']  = $menu['href'];
					$attr['class'] = isset( $attr['class'] ) ? $attr['class'] : array();
					$attr['class'] = wponion_html_class( $attr['class'], array(
						wponion_html_class( $menu['class'] ),
						( ! empty( $men['icon'] ) ) ? 'nav-with-icon' : '',
						( isset( $menu['is_internal_href'] ) && true === $menu['is_internal_href'] ) ? 'nav-internal-href' : '',
						( true === $menu['is_active'] ) ? 'current' : '',
					) );


					$attr     = wponion_array_to_html_attributes( $attr );
					$return[] = '<li> <a ' . $attr . '>' . wponion_icon( $menu['icon'] ) . $page_title . '</a> | ';
				}
				$return = implode( '  </li>', $return );
				$return = '<ul class="wponion-submenus subsubsub"  id="wponion-tab-' . $menus[ $menu_slug ]['name'] . '" >' . $return . '</ul>';
				return '<h2 class="wponion-subnav-container hndle">' . $return . '</h2>';
			} else {
				return '';
			}
		}
	}
}
