<?php

use WPOnion\Theme\WC;
use WPOnion\Theme\WP_Lite;
use WPOnion\Theme\WP_Modern;
use WPOnion\Theme\WP;
use WPOnion\Themes;

defined( 'ABSPATH' ) || exit;

if ( ! function_exists( 'wponion_default_theme' ) ) {
	/**
	 * Returns Default Theme.
	 *
	 * @return mixed
	 */
	function wponion_default_theme() {
		return apply_filters( 'wponion/default/theme', 'wp' );
	}
}

if ( ! function_exists( 'wponion_add_theme' ) ) {
	/**
	 * Registers A Theme With WPOnion
	 *
	 * @param string $name
	 * @param array  $modules
	 * @param null   $callback
	 *
	 * @return bool
	 */
	function wponion_add_theme( $name = '', $modules = array(), $callback = null ) {
		return Themes::register( $name, $modules, $callback );
	}
}

if ( ! function_exists( 'wponion_wp_modern_theme_init' ) ) {
	/**
	 * @param $data
	 *
	 * @return \WPOnion\Theme\WP_Modern
	 */
	function wponion_wp_modern_theme_init( $data ) {
		return new WP_Modern( $data );
	}
}

if ( ! function_exists( 'wponion_wp_lite_theme_init' ) ) {
	/**
	 * @param $data
	 *
	 * @return \WPOnion\Theme\WP_Lite
	 */
	function wponion_wp_lite_theme_init( $data ) {
		return new WP_Lite( $data );
	}
}

if ( ! function_exists( 'wponion_wp_theme_init' ) ) {
	/**
	 * @param $data
	 *
	 * @return \WPOnion\Theme\WP
	 */
	function wponion_wp_theme_init( $data ) {
		return new WP( $data );
	}
}

if ( ! function_exists( 'wponion_wc_theme_init' ) ) {
	/**
	 * @param $data
	 *
	 * @return \WPOnion\Theme\WC
	 */
	function wponion_wc_theme_init( $data ) {
		return new WC( $data );
	}
}
