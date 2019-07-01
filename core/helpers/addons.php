<?php
if ( ! defined( 'ABSPATH' ) ) {
	die;
}

use WPOnion\Setup;

if ( ! function_exists( 'wponion_register_addon' ) ) {
	/**
	 * Registers Addon Wtih WPOnion.
	 *
	 * @param $addon_name
	 * @param $version
	 * @param $callback_or_file
	 *
	 * @return bool
	 */
	function wponion_register_addon( $addon_name, $version, $callback_or_file ) {
		return Setup::register_addon( $addon_name, $version, $callback_or_file );
	}
}
