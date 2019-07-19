<?php

use WPOnion\DB\Options;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! function_exists( 'wponion_wp_db' ) ) {
	/**
	 * Returns an active instance of WPOnion_Localize_API.
	 *
	 * @return \WPOnion\DB\WP_DB
	 */
	function wponion_wp_db() {
		return wponion_registry( 'wponion-global-wp-db-api', '\WPOnion\DB\WP_DB' );
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
	 *
	 * @return bool
	 */
	function wponion_update_option( $option, $value, $autoload = false, $force_local = false ) {
		if ( is_network_admin() && is_multisite() && false === $force_local ) {
			return update_site_option( $option, $value );
		} else {
			return update_option( $option, $value, $autoload );
		}
	}
}

if ( ! function_exists( 'wponion_get_option' ) ) {
	/**
	 * Custom Wrapper for get_option / get_site_option.
	 *
	 * @param string     $option_name
	 * @param bool|mixed $default
	 * @param bool       $force_local
	 *
	 * @return mixed
	 */
	function wponion_get_option( $option_name, $default = false, $force_local = false ) {
		if ( is_multisite() && is_network_admin() && false === $force_local ) {
			return get_site_option( $option_name, $default );
		}
		return get_option( $option_name, $default );
	}
}

if ( ! function_exists( 'wpo_settings' ) ) {
	/**
	 * Featches & Returns Saved WPOnion Settings.
	 *
	 * @param string      $unique
	 * @param string|bool $option_key
	 * @param bool|mixed  $default
	 *
	 * @return array|bool|\WPOnion\DB\Option
	 */
	function wpo_settings( $unique, $option_key = false, $default = false ) {
		return Options::settings( $unique, $option_key, $default );
	}
}

if ( ! function_exists( 'wpo_network_settings' ) ) {
	/**
	 * Featches & Returns Saved WPOnion Settings.
	 *
	 * @param string      $unique
	 * @param string|bool $option_key
	 * @param bool|mixed  $default
	 *
	 * @return array|bool|\WPOnion\DB\Option
	 */
	function wpo_network_settings( $unique, $option_key = false, $default = false ) {
		return Options::network_settings( $unique, $option_key, $default );
	}
}

if ( ! function_exists( 'wpo_post_meta' ) ) {
	/**
	 * Featches & Returns Saved WPOnion Settings.
	 *
	 * @param string|int  $post_id
	 * @param string      $unique
	 * @param bool|string $option_key
	 * @param bool|mixed  $default
	 *
	 * @return array|bool|\WPOnion\DB\Option
	 */
	function wpo_post_meta( $post_id, $unique, $option_key = false, $default = false ) {
		return Options::post_meta( $post_id, $unique, $option_key, $default );
	}
}

if ( ! function_exists( 'wpo_user_meta' ) ) {
	/**
	 * Featches & Returns Saved WPOnion Settings.
	 *
	 * @param string|int  $post_id
	 * @param string      $unique
	 * @param bool|string $option_key
	 * @param bool|mixed  $default
	 *
	 * @return array|bool|\WPOnion\DB\Option
	 */
	function wpo_user_meta( $post_id, $unique, $option_key = false, $default = false ) {
		return Options::user_meta( $post_id, $unique, $option_key, $default );
	}
}

if ( ! function_exists( 'wpo_term_meta' ) ) {
	/**
	 * Featches & Returns Saved WPOnion Settings.
	 *
	 * @param string|int  $post_id
	 * @param string      $unique
	 * @param bool|string $option_key
	 * @param bool|mixed  $default
	 *
	 * @return array|bool|\WPOnion\DB\Option
	 */
	function wpo_term_meta( $post_id, $unique, $option_key = false, $default = false ) {
		return Options::term_meta( $post_id, $unique, $option_key, $default );
	}
}
