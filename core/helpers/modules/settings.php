<?php

use WPOnion\Modules\Settings\Network;
use WPOnion\Modules\Settings\Settings;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! function_exists( 'wponion_settings_registry' ) ) {
	/**
	 * Creates & Returns an static instance for settings module.
	 *
	 * @param $instance
	 *
	 * @return bool|mixed|\WPOnion\Modules\Settings\Settings
	 */
	function wponion_settings_registry( &$instance ) {
		return wponion_get_registry_instance( 'settings', $instance, 'module' );
	}
}

if ( ! function_exists( 'wponion_network_settings_registry' ) ) {
	/**
	 * Creates & Returns an static instance for settings module.
	 *
	 * @param $instance
	 *
	 * @return bool|mixed|\WPOnion\Modules\Settings\Settings
	 */
	function wponion_network_settings_registry( &$instance ) {
		return wponion_get_registry_instance( 'network_settings', $instance, 'module' );
	}
}

if ( ! function_exists( 'wponion_settings' ) ) {
	/**
	 * Returns a new instance for settings page.
	 *
	 * @param array              $instance_id_or_args
	 * @param array|\WPO\Builder $fields
	 *
	 * @return \WPOnion\Modules\Settings\Settings
	 */
	function wponion_settings( $instance_id_or_args = array(), $fields = array() ) {
		if ( is_string( $instance_id_or_args ) && empty( $fields ) ) {
			return wponion_settings_registry( $instance_id_or_args );
		}
		return new Settings( $instance_id_or_args, $fields );
	}
}

if ( ! function_exists( 'wponion_network_settings' ) ) {
	/**
	 * Returns a new instance for network settings page.
	 *
	 * @param array              $instance_id_or_args
	 * @param array|\WPO\Builder $fields
	 *
	 * @return \WPOnion\Modules\Settings\Network
	 */
	function wponion_network_settings( $instance_id_or_args = array(), $fields = array() ) {
		if ( is_string( $instance_id_or_args ) && empty( $fields ) ) {
			return wponion_settings_registry( $instance_id_or_args );
		}
		return new Network( $instance_id_or_args, $fields );
	}
}
