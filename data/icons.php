<?php
/* Last Updated : 29/07/2020 - 07:11:25:am */

defined( 'ABSPATH' ) || exit;

use WPOnion\Helper as Helper;

wponion_add_icon_library( array(
	'name'       => __( 'Dashicons', 'wponion' ),
	'slug'       => 'dashicons',
	'assets'     => 'dashicons',
	'css_prefix' => 'dashicons',
	'icons'      => 'wponion_icon_dashicons',
) )->register();

wponion_add_icon_library( array(
	'name'       => __( 'Icofont', 'wponion' ),
	'slug'       => 'icofont',
	'assets'     => 'icofont',
	'css_prefix' => 'icofont',
	'icons'      => 'wponion_icon_icofont',
) )->register();

wponion_add_icon_library( array(
	'name'       => __( 'FontAwesome 4', 'wponion' ),
	'slug'       => 'fontawesome4',
	'assets'     => 'fontawesome4',
	'css_prefix' => 'fa',
	'icons'      => 'wponion_icon_fontawesome4',
) )->register();

wponion_add_icon_library( array(
	'name'       => __( 'Material Design Icons', 'wponion' ),
	'slug'       => 'materialdesignicons',
	'assets'     => 'materialdesignicons',
	'css_prefix' => 'mdi',
	'icons'      => 'wponion_icon_materialdesignicons',
) )->register();

wponion_add_icon_library( array(
	'name'       => __( 'Foundation', 'wponion' ),
	'slug'       => 'foundation',
	'assets'     => 'foundation',
	'css_prefix' => 'fi',
	'icons'      => 'wponion_icon_foundation',
) )->register();

wponion_add_icon_library( array(
	'name'       => __( 'Box Icons', 'wponion' ),
	'slug'       => 'boxicons',
	'assets'     => 'boxicons',
	'css_prefix' => 'bx',
	'icons'      => 'wponion_icon_boxicons',
) )->register();

wponion_add_icon_library( array(
	'name'       => __( 'FontAwesome 5', 'wponion' ),
	'slug'       => 'fontawesome5',
	'assets'     => 'fontawesome5',
	'css_prefix' => array (
   'fas',
   'fab',
),
	'icons'      => 'wponion_icon_fontawesome5',
) )->register();

wponion_add_icon_library( array(
	'name'       => __( 'FontAwesome 5 Pro', 'wponion' ),
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

if ( ! function_exists( 'wponion_icon_dashicons' ) ) {
	/**
	 * Returns Icons List For Dashicons Library
	 *
	 * @return array
	 */
	function wponion_icon_dashicons() {
		return Helper::read_json_file( WPONION_PATH . 'data/json/icons/dashicons.json', true );
	}
}

if ( ! function_exists( 'wponion_icon_icofont' ) ) {
	/**
	 * Returns Icons List For Icofont Library
	 *
	 * @return array
	 */
	function wponion_icon_icofont() {
		return Helper::read_json_file( WPONION_PATH . 'data/json/icons/icofont.json', true );
	}
}

if ( ! function_exists( 'wponion_icon_fontawesome4' ) ) {
	/**
	 * Returns Icons List For FontAwesome 4 Library
	 *
	 * @return array
	 */
	function wponion_icon_fontawesome4() {
		return Helper::read_json_file( WPONION_PATH . 'data/json/icons/fontawesome4.json', true );
	}
}

if ( ! function_exists( 'wponion_icon_materialdesignicons' ) ) {
	/**
	 * Returns Icons List For Material Design Icons Library
	 *
	 * @return array
	 */
	function wponion_icon_materialdesignicons() {
		return Helper::read_json_file( WPONION_PATH . 'data/json/icons/materialdesignicons.json', true );
	}
}

if ( ! function_exists( 'wponion_icon_foundation' ) ) {
	/**
	 * Returns Icons List For Foundation Library
	 *
	 * @return array
	 */
	function wponion_icon_foundation() {
		return Helper::read_json_file( WPONION_PATH . 'data/json/icons/foundation.json', true );
	}
}

if ( ! function_exists( 'wponion_icon_boxicons' ) ) {
	/**
	 * Returns Icons List For Box Icons Library
	 *
	 * @return array
	 */
	function wponion_icon_boxicons() {
		return Helper::read_json_file( WPONION_PATH . 'data/json/icons/boxicons.json', true );
	}
}

if ( ! function_exists( 'wponion_icon_fontawesome5' ) ) {
	/**
	 * Returns Icons List For FontAwesome 5 Library
	 *
	 * @return array
	 */
	function wponion_icon_fontawesome5() {
		return Helper::read_json_file( WPONION_PATH . 'data/json/icons/fontawesome5.json', true );
	}
}

if ( ! function_exists( 'wponion_icon_fontawesome5pro' ) ) {
	/**
	 * Returns Icons List For FontAwesome 5 Pro Library
	 *
	 * @return array
	 */
	function wponion_icon_fontawesome5pro() {
		$free_fonts = ( function_exists( 'wponion_icon_fontawesome5' ) ) ? wponion_icon_fontawesome5() : array();
		$paid_fonts = Helper::read_json_file( WPONION_PATH . 'data/json/icons/fontawesome5pro.json', true );

		if ( ! empty( $free_fonts ) ) {
			foreach ( $free_fonts as $group => $icons ) {
				if ( isset( $paid_fonts[ $group ] ) ) {
					$paid_fonts[ $group ] = wp_parse_args( $paid_fonts[ $group ], $icons );
				} else {
					$paid_fonts[ $group ] = $icons;
				}
			}
		}
		return $paid_fonts;
	}
}
