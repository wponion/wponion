<?php

use WPOnion\Modules\Admin\Columns;

defined( 'ABSPATH' ) || exit;

if ( ! function_exists( 'wponion_admin_columns_registry' ) ) {
	/**
	 * Creates & Returns an static instance for widgets module.
	 *
	 * @param $instance
	 *
	 * @return bool|\WPOnion\Modules\Admin\Columns
	 */
	function wponion_admin_columns_registry( &$instance ) {
		return wponion_get_registry_instance( 'admin_columns', $instance, 'module' );
	}
}

if ( ! function_exists( 'wponion_admin_columns' ) ) {
	/**
	 * Returns a new instance of Admin Columns.
	 *
	 * @param array $post_types
	 * @param array $title_or_arguments
	 * @param array $render_callback
	 *
	 * @return \WPOnion\Modules\Admin\Columns
	 */
	function wponion_admin_columns( $post_types = array(), $title_or_arguments = array(), $render_callback = array() ) {
		if ( is_string( $post_types ) && empty( $title_or_arguments ) && empty( $render_callback ) ) {
			return wponion_admin_columns_registry( $post_types );
		}
		return new Columns( $post_types, $title_or_arguments, $render_callback );
	}
}
