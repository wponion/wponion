<?php

use WPOnion\Modules\Admin_Page;

if ( ! function_exists( 'wponion_admin_page_registry' ) ) {
	/**
	 * Creates & Returns an static instance for User Profile. module.
	 *
	 * @param $instance
	 *
	 * @return bool|\WPOnion\Modules\Admin_Page
	 */
	function wponion_admin_page_registry( &$instance ) {
		return wponion_get_registry_instance( 'admin_page', $instance, 'module' );
	}
}

if ( ! function_exists( 'wponion_admin_page' ) ) {
	/**
	 * @param array|string $arguments
	 *
	 * @return \WPOnion\Modules\Admin_Page
	 */
	function wponion_admin_page( $arguments = array() ) {
		if ( is_string( $arguments ) ) {
			return wponion_admin_page_registry( $arguments );
		}
		return new Admin_Page( $arguments );
	}
}
