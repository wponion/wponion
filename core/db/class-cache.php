<?php

namespace WPOnion\DB;

use WPOnion\Exception\DB_Cache_Not_Found;
use WPOnion\Helper;

/**
 * Class Cache
 *
 * @package WPOnion\DB
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Cache {
	/**
	 * Stores Cache Not Found Value.
	 */
	protected static $not_found_value;

	/**
	 * Stores Cache Database Key.
	 *
	 * @var string
	 */
	protected static $db_key = '_wponion_db_cache';

	/**
	 * Stores Current Database Cache.
	 *
	 * @var array
	 */
	protected static $cache = false;

	/**
	 * Retrives DB Cache.
	 */
	private static function get_db_cache() {
		if ( false === self::$cache ) {
			self::$cache = get_option( self::$db_key, true );
			self::$cache = ( ! is_array( self::$cache ) ) ? array() : self::$cache;
		}
	}

	/**
	 * Inits Cache System.
	 */
	public static function init() {
		self::$not_found_value = new DB_Cache_Not_Found();
		self::get_db_cache();
		add_action( 'shutdown', array( __CLASS__, 'update_db_cache' ) );
	}

	/**
	 * Updates Database Cache.
	 */
	public static function update_db_cache() {
		self::$cache = array_map( array( __CLASS__, 'filter_save' ), self::$cache );
		update_option( self::$db_key, array_filter( self::$cache ), false );
	}

	/**
	 * Runs array_filter & return it if its array.
	 *
	 * @param $data
	 *
	 * @return array
	 */
	public static function filter_save( $data ) {
		return ( is_array( $data ) ) ? array_filter( $data ) : $data;
	}

	/**
	 * Fetches Cached Data.
	 *
	 * @param string $key cache_id.
	 *
	 * @return mixed
	 * @throws \WPOnion\Exception\DB_Cache_Not_Found
	 */
	public static function get( $key ) {
		$values = Helper::array_key_get( $key, self::$cache, self::$not_found_value );

		if ( $values === self::$not_found_value ) {
			$not_found = new DB_Cache_Not_Found();
			$not_found->set_cache_id( $key );
			throw $not_found;
		}

		return $values;
	}

	/**
	 * Set A New Cache Data.
	 *
	 * @param string $key cache_id.
	 * @param mixed  $value catch_data.
	 *
	 * @return array|object
	 */
	public static function set( $key, $value = false ) {
		return Helper::array_key_set( $key, $value, self::$cache );
	}

	/**
	 * Removes A Cached Data.
	 *
	 * @param string $key
	 */
	public static function remove( $key ) {
		Helper::array_key_unset( $key, self::$cache );
	}
}

Cache::init();
