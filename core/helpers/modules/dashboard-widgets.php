<?php

use WPOnion\Modules\Widgets\Dashboard;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! function_exists( 'wponion_dashboard_widgets_registry' ) ) {
	/**
	 * Creates & Returns an static instance for dashboard widgets module.
	 *
	 * @param $instance
	 *
	 * @return bool|\WPOnion\Modules\Widgets\Dashboard
	 */
	function wponion_dashboard_widgets_registry( &$instance ) {
		return wponion_get_registry_instance( 'dashboard_widgets', $instance, 'module' );
	}
}

if ( ! function_exists( 'wponion_dashboard_widgets' ) ) {
	/**
	 * Returns a new instance for Dashboard_Widgets page.
	 *
	 * @param array|string       $instance_id_or_args
	 * @param array|\WPO\Builder $fields
	 *
	 * @return bool|\WPOnion\Modules\Widgets\Dashboard
	 */
	function wponion_dashboard_widgets( $instance_id_or_args = array(), $fields = array() ) {
		if ( is_string( $instance_id_or_args ) && empty( $fields ) ) {
			return wponion_dashboard_widgets_registry( $instance_id_or_args );
		}
		return new Dashboard( $instance_id_or_args, $fields );
	}
}
