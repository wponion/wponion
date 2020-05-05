<?php

use WPOnion\Modules\Util\Help_Tabs;

defined( 'ABSPATH' ) || exit;

if ( ! function_exists( 'wponion_help_tabs_registry' ) ) {
	/**
	 * Creates & Returns an static instance for User Profile. module.
	 *
	 * @param $instance
	 *
	 * @return bool|\WPOnion\Modules\Util\Help_Tabs
	 */
	function wponion_help_tabs_registry( &$instance ) {
		return wponion_get_registry_instance( 'help_tabs', $instance, 'module' );
	}
}

if ( ! function_exists( 'wponion_help_tabs' ) ) {
	/**
	 * Returns a new instance of Help Tabs.
	 *
	 * @param        $page
	 * @param array  $help_tabs
	 * @param string $help_sidebar
	 *
	 * @return \WPOnion\Modules\Util\Help_Tabs
	 */
	function wponion_help_tabs( $page, $help_tabs = array(), $help_sidebar = '' ) {
		return new Help_Tabs( $page, $help_tabs, $help_sidebar );
	}
}
