<?php
if ( ! function_exists( 'wponion_help_tabs_registry' ) ) {
	/**
	 * Creates & Returns an static instance for User Profile. module.
	 *
	 * @param $instance
	 *
	 * @return bool|\WPOnion\Modules\Help_Tabs
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
	 * @return \WPOnion\Modules\Help_Tabs
	 */
	function wponion_help_tabs( $page, $help_tabs = array(), $help_sidebar = '' ) {
		return new \WPOnion\Modules\Help_Tabs( $page, $help_tabs, $help_sidebar );
	}
}
