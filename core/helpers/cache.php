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

if ( ! function_exists( 'wponion_get_cache_defaults' ) ) {
	/**
	 * @param string     $key
	 * @param bool|mixed $defaults
	 *
	 * @return bool|mixed
	 */
	function wponion_get_cache_defaults( $key, $defaults = false ) {
		try {
			return wponion_get_cache( $key );
		} catch ( \WPOnion\Exception\Cache_Not_Found $exception ) {
			return $defaults;
		}
	}
}

if ( ! function_exists( 'wponion_get_cache' ) ) {
	/**
	 * @param string $key
	 *
	 * @return mixed
	 * @throws \WPOnion\Exception\Cache_Not_Found
	 */
	function wponion_get_cache( $key ) {
		return \WPOnion\Cache::get( $key );
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

