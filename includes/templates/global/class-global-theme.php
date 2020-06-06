<?php

namespace WPOnion\Theme;

use WPOnion\Theme_API;

defined( 'ABSPATH' ) || exit;

/**
 * Class WP
 *
 * @package WPOnion\Theme
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
abstract class Global_Theme extends Theme_API {
	/**
	 * @param $menus
	 *
	 * @return string
	 */
	public function main_menu( $menus ) {
		if ( ! empty( $menus ) ) {
			$return = '<nav class="nav-tab-wrapper">';
			foreach ( $menus as $slug => $menu ) {
				if ( isset( $menu['is_separator'] ) && true === $menu['is_separator'] ) {
					continue;
				}

				$attr          = isset( $menu['attributes'] ) ? $menu['attributes'] : array();
				$attr['title'] = isset( $attr['title'] ) ? $attr['title'] : $menu['title'];
				$attr['href']  = $menu['href'];
				$attr['class'] = isset( $attr['class'] ) ? $attr['class'] : array();
				$attr['class'] = wponion_html_class( $attr['class'], array(
					wponion_html_class( $menu['class'] ),
					'nav-tab',
					( ! empty( $men['icon'] ) ) ? 'nav-with-icon' : '',
					( isset( $menu['is_internal_href'] ) && true === $menu['is_internal_href'] ) ? 'wpo-internal-href' : '',
					( true === $menu['is_active'] ) ? 'nav-tab-active' : '',
					( true === $menu['is_disabled'] ) ? ' disabled ' : '',
				) );
				$return        .= '<a ' . wponion_array_to_html_attributes( $attr ) . '>' . wponion_icon( $menu['icon'] ) . $menu['title'] . '</a>';
			}
			return $return . '</nav>';
		}
		return '';
	}

	/**
	 * @param $parent_slug
	 * @param $menus
	 *
	 * @return string
	 */
	public function settings_submenu( $parent_slug, $menus ) {
		$return = '';
		if ( isset( $menus[ $parent_slug ]['submenu'] ) && is_array( $menus[ $parent_slug ]['submenu'] ) && ! empty( $menus[ $parent_slug ]['submenu'] ) ) {
			$is_pdisabled = ( true === $menus[ $parent_slug ]['is_disabled'] ) ? ' disabled ' : '';
			$return       = '<div class="wponion-subnav-container"> <ul class="wponion-submenus subsubsub ' . $is_pdisabled . '"  id="wponion-tab-' . $parent_slug . '" >';
			foreach ( $menus[ $parent_slug ]['submenu'] as $slug => $menu ) {
				if ( isset( $menu['is_separator'] ) && true === $menu['is_separator'] ) {
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
					( isset( $menu['is_internal_href'] ) && true === $menu['is_internal_href'] ) ? 'wpo-internal-href' : '',
					( true === $menu['is_active'] ) ? 'current' : '',
					( true === $menu['is_disabled'] || true === $menus[ $parent_slug ]['is_disabled'] ) ? 'disabled ' : '',
				) );
				$attr          = wponion_array_to_html_attributes( $attr );
				$return        .= '<li><a ' . $attr . '>' . wponion_icon( $menu['icon'] ) . $page_title . '</a> | </li>';
			}
			$return .= '</ul></div>';
		}
		return $return;
	}

	/**
	 * Registers Assets With WP.
	 */
	public function register_assets() {
	}
}
