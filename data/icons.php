<?php
/* Last Updated : 08/07/2019 - 07:25:07:pm */

use WPOnion\Helper as h;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

wponion_add_icon_library( array(
	'name'       => __( 'Dashicons' ),
	'slug'       => 'dashicons',
	'assets'     => 'dashicons',
	'css_prefix' => array (
   'dashicons',
),
	'icons'      => 'wponion_icon_dashicons',
) )->register();

wponion_add_icon_library( array(
	'name'       => __( 'Icofont' ),
	'slug'       => 'icofont',
	'assets'     => 'icofont',
	'css_prefix' => array (
   'icofont',
),
	'icons'      => 'wponion_icon_icofont',
) )->register();

wponion_add_icon_library( array(
	'name'       => __( 'FontAwesome 4' ),
	'slug'       => 'fontawesome4',
	'assets'     => 'fontawesome4',
	'css_prefix' => array (
   'fa',
),
	'icons'      => 'wponion_icon_fontawesome4',
) )->register();

wponion_add_icon_library( array(
	'name'       => __( 'Foundation' ),
	'slug'       => 'foundation',
	'assets'     => 'foundation',
	'css_prefix' => array (
   'fi',
),
	'icons'      => 'wponion_icon_foundation',
) )->register();

wponion_add_icon_library( array(
	'name'       => __( 'Box Icons' ),
	'slug'       => 'boxicons',
	'assets'     => 'boxicons',
	'css_prefix' => array (
   'bx',
),
	'icons'      => 'wponion_icon_boxicons',
) )->register();

wponion_add_icon_library( array(
	'name'       => __( 'FontAwesome 5 Pro' ),
	'slug'       => 'fontawesome5pro',
	'assets'     => 'fontawesome5pro',
	'css_prefix' => array (
   'fas',
   'far',
   'fal',
   'fab',
),
	'icons'      => 'wponion_icon_fontawesome5pro',
) )->register();

wponion_add_icon_library( array(
	'name'       => __( 'FontAwesome 5' ),
	'slug'       => 'fontawesome5',
	'assets'     => 'fontawesome5',
	'css_prefix' => array (
   'fas',
   'fab',
),
	'icons'      => 'wponion_icon_fontawesome5',
) )->register();

if ( ! function_exists( 'wponion_icon_dashicons' ) ) {
	/**
	 * Returns Icons List For Dashicons Library
	 *
	 * @return array
	 */
	function wponion_icon_dashicons() {
		return h::read_json_file( WPONION_PATH . 'data/json/icons/dashicons.json', true );
	}
}

if ( ! function_exists( 'wponion_icon_icofont' ) ) {
	/**
	 * Returns Icons List For Icofont Library
	 *
	 * @return array
	 */
	function wponion_icon_icofont() {
		return h::read_json_file( WPONION_PATH . 'data/json/icons/icofont.json', true );
	}
}

if ( ! function_exists( 'wponion_icon_fontawesome4' ) ) {
	/**
	 * Returns Icons List For FontAwesome 4 Library
	 *
	 * @return array
	 */
	function wponion_icon_fontawesome4() {
		return h::read_json_file( WPONION_PATH . 'data/json/icons/fontawesome4.json', true );
	}
}

if ( ! function_exists( 'wponion_icon_foundation' ) ) {
	/**
	 * Returns Icons List For Foundation Library
	 *
	 * @return array
	 */
	function wponion_icon_foundation() {
		return h::read_json_file( WPONION_PATH . 'data/json/icons/foundation.json', true );
	}
}

if ( ! function_exists( 'wponion_icon_boxicons' ) ) {
	/**
	 * Returns Icons List For Box Icons Library
	 *
	 * @return array
	 */
	function wponion_icon_boxicons() {
		return h::read_json_file( WPONION_PATH . 'data/json/icons/boxicons.json', true );
	}
}

if ( ! function_exists( 'wponion_icon_fontawesome5pro' ) ) {
	/**
	 * Returns Icons List For FontAwesome 5 Pro Library
	 *
	 * @return array
	 */
	function wponion_icon_fontawesome5pro() {
		return h::read_json_file( WPONION_PATH . 'data/json/icons/fontawesome5pro.json', true );
	}
}

if ( ! function_exists( 'wponion_icon_fontawesome5' ) ) {
	/**
	 * Returns Icons List For FontAwesome 5 Library
	 *
	 * @return array
	 */
	function wponion_icon_fontawesome5() {
		return h::read_json_file( WPONION_PATH . 'data/json/icons/fontawesome5.json', true );
	}
}
