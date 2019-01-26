<?php

namespace WPOnion\Theme;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Theme\WP_Modern' ) ) {
	/**
	 * Class WP_Modern
	 *
	 * @package WPOnion\Theme
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class WP_Modern extends \WPOnion\Theme_API {
		/**
		 * WP_Modern constructor.
		 *
		 * @param $data
		 */
		public function __construct( $data ) {
			parent::__construct( $data, __FILE__, 'wp-modern' );
		}

		/**
		 * Registers Script With WP.
		 *
		 * @return mixed|void
		 */
		public function register_assets() {
			wp_enqueue_style( 'wponion-wp-modern', $this->url( 'assets/style.css' ), array( 'wponion-core' ) );
			wp_enqueue_script( 'wponion-wp-modern', $this->url( 'assets/script.js' ), array( 'wponion-core' ) );
		}

		/**
		 * @param string $menu_slug
		 * @param array  $menus
		 *
		 * @return string
		 */
		public function submenu_html( $menu_slug, $menus ) {
			if ( isset( $menus[ $menu_slug ]['submenu'] ) && ! empty( $menus[ $menu_slug ]['submenu'] ) && wponion_is_array( $menus[ $menu_slug ]['submenu'] ) ) {
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
						( ! empty( $men['icon'] ) ) ? 'menu-with-icon' : '',
						( isset( $menu['is_internal_href'] ) && true === $menu['is_internal_href'] ) ? 'menu-internal-href' : '',
						( true === $menu['is_active'] ) ? 'active' : '',
					) );

					$attr     = wponion_array_to_html_attributes( $attr );
					$return[] = '<li> <a ' . $attr . '>' . wponion_icon( $menu['icon'] ) . ' ' . $page_title . '</a> ';
				}
				$return = implode( '  </li>', $return );
				$return = '<ul class="submenus"  id="wponion-tab-' . $menus[ $menu_slug ]['name'] . '" >' . $return . '</ul>';
				return $return;
			} else {
				return '';
			}
		}

		/**
		 * Renders Side Menu.
		 *
		 * @param bool $menus
		 *
		 * @return bool|string
		 */
		public function get_main_menu_html( $menus = false ) {
			if ( false === $menus ) {
				$menus = $this->settings()
					->settings_menus();
			}

			if ( wponion_is_array( $menus ) ) {
				$return = '<ul class="wponion-wp-modern-menu">';

				foreach ( $menus as $slug => $menu ) {
					if ( isset( $menu['is_seperator'] ) && true === $menu['is_seperator'] ) {
						continue;
					}
					$sub_menu      = $this->submenu_html( $slug, $menus );
					$attr          = isset( $menu['attributes'] ) ? $menu['attributes'] : array();
					$attr['title'] = isset( $attr['title'] ) ? $attr['title'] : $menu['title'];
					$page_title    = $menu['title'];
					$attr['href']  = $menu['href'];
					$attr['class'] = isset( $attr['class'] ) ? $attr['class'] : array();
					$attr['class'] = wponion_html_class( $attr['class'], array(
						( empty( $sub_menu ) ) ? '' : 'dropdown',
						wponion_html_class( $menu['class'] ),
						'menu-tab',
						( ! empty( $men['icon'] ) ) ? 'menu-with-icon' : '',
						( isset( $menu['is_internal_href'] ) && true === $menu['is_internal_href'] ) ? 'menu-internal-href' : '',
						( true === $menu['is_active'] ) ? 'active menu-show-child' : '',
					) );
					$attr          = wponion_array_to_html_attributes( $attr );

					$dropdown = '';
					if ( ! empty( $sub_menu ) ) {
						$dropdown = $this->get_submenu_indicator( ( isset( $menu['is_active'] ) && true === $menu['is_active'] ) );
					}

					$return .= '<li><a ' . $attr . '>' . wponion_icon( $menu['icon'] ) . ' ' . $page_title . ' ' . $dropdown . '</a>' . $sub_menu . '</li>';
				}

				$return .= '</ul>';
			} else {
				$return = false;
			}
			return $return;
		}
	}
}
