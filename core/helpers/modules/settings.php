<?php
if ( ! function_exists( 'wponion_settings_registry' ) ) {
	/**
	 * Creates & Returns an static instance for settings module.
	 *
	 * @param $instance
	 *
	 * @return bool|mixed|\WPOnion\Modules\Settings
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
	 * @return bool|mixed|\WPOnion\Modules\Settings
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
	 * @return \WPOnion\Modules\Settings
	 */
	function wponion_settings( $instance_id_or_args = array(), $fields = array() ) {
		if ( is_string( $instance_id_or_args ) && empty( $fields ) ) {
			return wponion_settings_registry( $instance_id_or_args );
		}
		return new \WPOnion\Modules\Settings( $instance_id_or_args, $fields );
	}
}

if ( ! function_exists( 'wponion_network_settings' ) ) {
	/**
	 * Returns a new instance for network settings page.
	 *
	 * @param array              $instance_id_or_args
	 * @param array|\WPO\Builder $fields
	 *
	 * @return \WPOnion\Modules\Network_Settings
	 */
	function wponion_network_settings( $instance_id_or_args = array(), $fields = array() ) {
		if ( is_string( $instance_id_or_args ) && empty( $fields ) ) {
			return wponion_settings_registry( $instance_id_or_args );
		}
		return new \WPOnion\Modules\Network_Settings( $instance_id_or_args, $fields );
	}
}

if ( ! function_exists( 'wponion_update_option' ) ) {
	/**
	 * Custom Wrapper For update_option & update_site_option.
	 *
	 * @param string $option
	 * @param mixed  $value
	 * @param bool   $autoload
	 * @param bool   $force_local
	 */
	function wponion_update_option( $option, $value, $autoload = false, $force_local = false ) {
		if ( is_network_admin() && is_multisite() && false === $force_local ) {
			update_site_option( $option, $value );
		} else {
			update_option( $option, $value, $autoload );
		}
	}
}

if ( ! function_exists( 'wponion_get_option' ) ) {
	/**
	 * Custom Wrapper for get_option / get_site_option.
	 *
	 * @param      $option_name
	 * @param      $default
	 * @param bool $force_local
	 *
	 * @return mixed
	 */
	function wponion_get_option( $option_name, $default, $force_local = false ) {
		if ( is_multisite() && is_network_admin() && false === $force_local ) {
			return get_site_option( $option_name, $default );
		}
		return get_option( $option_name, $default );
	}
}
