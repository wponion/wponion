<?php

defined( 'ABSPATH' ) || exit;

defined( 'WPONION_VERSION' ) or define( 'WPONION_VERSION', '1.5.3.7' );
defined( 'WPONION_CDN_VERSION' ) or define( 'WPONION_CDN_VERSION', '1.5' );
defined( 'WPONION_CDN_URL' ) or define( 'WPONION_CDN_URL', 'https://cdn.jsdelivr.net/gh/wponion/vendor-support' );
defined( 'WPONION_NAME' ) or define( 'WPONION_NAME', 'WPOnion' );
defined( 'WPONION_PATH' ) or define( 'WPONION_PATH', plugin_dir_path( __FILE__ ) );
defined( 'WPONION_FILE' ) or define( 'WPONION_FILE', WPONION_PATH . 'index.php' );
defined( 'WPONION_URL' ) or define( 'WPONION_URL', plugin_dir_url( __FILE__ ) );

if ( ! function_exists( 'wponion' ) ) {
	/**
	 * Returns An WPOnion Instance.
	 *
	 * @return \WPOnion
	 */
	function wponion() {
		if ( ! class_exists( '\WPOnion', false ) ) {
			require_once WPONION_PATH . 'core/traits/trait-self-instance.php';
			require_once WPONION_PATH . 'setup/class-wponion.php';
		}
		return WPOnion::instance();
	}

	wponion();
}

if ( ! function_exists( 'wponion_setup' ) ) {
	/**
	 * Setup's Basic WPOnion.
	 */
	function wponion_setup() {
		require_once wponion()->path( 'setup/class-addons.php' );
		require_once wponion()->path( 'setup/class-setup.php' );
	}

	add_action( 'after_setup_theme', 'wponion_setup' );
}
