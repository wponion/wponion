<?php

namespace WPOnion\Theme;

defined( 'ABSPATH' ) || exit;

/**
 * Class WP
 *
 * @package WPOnion\Theme
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class WC extends Global_Theme {
	/**
	 * WP constructor.
	 *
	 * @param $data
	 */
	public function __construct( $data ) {
		parent::__construct( $data, __FILE__, 'wc' );
	}

	public function main_menu( $menus ) {
		$return = '<nav >';
		foreach ( $menus as $slug => $menu ) {
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
				'wpo-tab',
				( ! empty( $men['icon'] ) ) ? 'wpo-tab-with-icon' : '',
				( isset( $menu['is_internal_href'] ) && true === $menu['is_internal_href'] ) ? 'wpo-internal-href' : '',
				( true === $menu['is_active'] ) ? 'wpo-tab-active' : '',
				( true === $menu['is_disabled'] ) ? ' disabled ' : '',
			) );
			$attr          = wponion_array_to_html_attributes( $attr );

			$return .= '<a ' . $attr . '>' . wponion_icon( $menu['icon'] ) . $page_title . '</a>';
		}
		return $return . '</nav>';
	}
}
