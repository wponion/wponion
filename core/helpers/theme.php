<?php

if ( ! function_exists( 'wponion_wp_modern_theme_init' ) ) {
	/**
	 * @param $data
	 *
	 * @return \WPOnion\Theme\WP_Modern
	 */
	function wponion_wp_modern_theme_init( $data ) {
		if ( ! class_exists( '\WPOnion\Theme\WP_Modern' ) ) {
			require_once WPONION_PATH . 'templates/wp-modern/class-wp-modern.php';
		}
		return new WPOnion\Theme\WP_Modern( $data );
	}
}

if ( ! function_exists( 'wponion_wp_theme_init' ) ) {
	/**
	 * Inits WP Theme.
	 *
	 * @param $data
	 *
	 * @return \WPOnion_Wp_Theme
	 */
	function wponion_wp_theme_init( $data ) {
		if ( ! class_exists( '\WPOnion_Wp_Theme' ) ) {
			require_once WPONION_PATH . 'templates/wp/class-wp-init.php';
		}
		return new WPOnion_Wp_Theme( $data );
	}
}


if ( ! function_exists( 'wponion_modern_theme_init' ) ) {
	/**
	 * @param $data
	 *
	 * @return \WPOnion_Modern_Theme
	 */
	function wponion_modern_theme_init( $data ) {
		if ( ! class_exists( '\WPOnion_Modern_Theme' ) ) {
			require_once WPONION_PATH . 'templates/modern/class-modern-init.php';
		}
		return new WPOnion_Modern_Theme( $data );
	}
}

if ( ! function_exists( 'wponion_fresh_theme_init' ) ) {
	/**
	 * @param $data
	 *
	 * @return \WPOnion_Fresh_Theme
	 */
	function wponion_fresh_theme_init( $data ) {
		if ( ! class_exists( '\WPOnion_Fresh_Theme' ) ) {
			require_once WPONION_PATH . 'templates/fresh/class-fresh-init.php';
		}
		return new WPOnion_Fresh_Theme( $data );
	}
}

if ( ! function_exists( 'wponion_default_theme' ) ) {
	/**
	 * Returns Default Theme.
	 *
	 * @return mixed
	 */
	function wponion_default_theme() {
		return apply_filters( 'wponion_default_theme', 'wp' );
	}
}

if ( ! function_exists( 'wponion_add_theme' ) ) {
	/**
	 * Registers A Theme With WPOnion
	 *
	 * @param string $theme_name
	 * @param array  $supported_modules
	 * @param null   $callback
	 *
	 * @return bool
	 */
	function wponion_add_theme( $theme_name = '', $supported_modules = array(), $callback = null ) {
		return \WPOnion\Themes::register( $theme_name, $supported_modules, $callback );
	}
}
