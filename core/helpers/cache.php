<?php
if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! function_exists( 'wponion_set_cache' ) ) {
	/**
	 * @param string $key
	 * @param mixed  $value
	 *
	 * @return mixed
	 */
	function wponion_set_cache( $key, $value ) {
		return \WPOnion\Cache::set( $key, $value );
	}
}

if ( ! function_exists( 'wponion_get_cache' ) ) {
	/**
	 * @param string $key
	 * @param mixed  $default
	 *
	 * @return mixed
	 */
	function wponion_get_cache( $key, $default = false ) {
		return \WPOnion\Cache::get( $key, $default );
	}
}

if ( ! function_exists( 'wponion_has_cache' ) ) {
	/**
	 * @param string $key
	 *
	 * @return mixed
	 */
	function wponion_has_cache( $key ) {
		return \WPOnion\Cache::has( $key );
	}
}
if ( ! function_exists( 'wponion_delete_cache' ) ) {
	/**
	 * @param string $key
	 */
	function wponion_delete_cache( $key ) {
		\WPOnion\Cache::remove( $key );
	}
}

