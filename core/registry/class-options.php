<?php

namespace WPOnion\Registry;

use WPOnion\DB\Option;
use WPOnion\Exception\Cache_Not_Found;

defined( 'ABSPATH' ) || exit;

/**
 * Class Options
 *
 * @package WPOnion\Registry
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Options {
	/**
	 * @param      $module
	 * @param      $db_key
	 * @param bool $wp_id
	 * @param bool $option_key
	 * @param bool $option_default
	 *
	 * @return bool|\WPOnion\DB\Option|array
	 * @since 1.5
	 */
	protected static function get_db_instance( $module, $db_key, $wp_id = false, $option_key = false, $option_default = false ) {
		try {
			$key    = ( false === $wp_id ) ? "db_values/${module}/${db_key}" : "db_values/${module}/${db_key}/${wp_id}";
			$option = wponion_get_cache( $key );
		} catch ( Cache_Not_Found $exception ) {
			$option = new Option( $module, $db_key, $wp_id );
			$exception->set( $option );
		}

		return ( wpo_is_option( $option ) && ! empty( $option_key ) ) ? $option->get( $option_key, $option_default ) : $option;
	}

	/**
	 * @param string $db_key
	 * @param string $option_key
	 * @param bool   $default
	 *
	 * @return bool|\WPOnion\DB\Option|array
	 */
	public static function settings( $db_key, $option_key = '', $default = false ) {
		return self::get_db_instance( 'settings', $db_key, false, $option_key, $default );
	}

	/**
	 * @param string $db_key
	 * @param string $option_key
	 * @param bool   $default
	 *
	 * @return bool|\WPOnion\DB\Option|array
	 */
	public static function network_settings( $db_key, $option_key = '', $default = false ) {
		return self::get_db_instance( 'network_settings', $db_key, false, $option_key, $default );
	}

	/**
	 * @param string      $db_key
	 * @param string|bool $id
	 * @param string      $option_key
	 * @param bool        $default
	 *
	 * @return array|bool|\WPOnion\DB\Option
	 */
	public static function post_meta( $db_key = '', $id = false, $option_key = '', $default = false ) {
		$id = ( empty( $id ) ) ? get_the_ID() : $id;
		return self::get_db_instance( 'post_meta', $db_key, $id, $option_key, $default );
	}

	/**
	 * @param string      $db_key
	 * @param string|bool $id
	 * @param string      $option_key
	 * @param bool        $default
	 *
	 * @return array|bool|\WPOnion\DB\Option
	 */
	public static function term_meta( $db_key = '', $id = false, $option_key = '', $default = false ) {
		return self::get_db_instance( 'taxonomy', $db_key, $id, $option_key, $default );
	}

	/**
	 * @param string      $db_key
	 * @param string|bool $id
	 * @param string      $option_key
	 * @param bool        $default
	 *
	 * @return array|bool|\WPOnion\DB\Option
	 */
	public static function user_meta( $db_key = '', $id = false, $option_key = '', $default = false ) {
		$id = ( empty( $id ) ) ? get_current_user_id() : $id;
		return self::get_db_instance( 'user_profile', $db_key, $id, $option_key, $default );
	}
}
