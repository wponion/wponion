<?php

namespace WPOnion;

use WPOnion\Exception\DB_Cache_Not_Found;

if ( ! class_exists( '\WPOnion\DB_Cache' ) ) {
	/**
	 * Class DB_Cache
	 *
	 * @package WPOnion
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class DB_Cache {
		/**
		 * @var
		 * @access
		 * @static
		 */
		protected static $not_found_value;

		/**
		 * @var string
		 * @access
		 * @static
		 */
		protected static $db_key = '_wponion_db_cache';

		/**
		 * @var array
		 * @access
		 * @static
		 */
		protected static $cache = false;

		/**
		 * @var bool
		 * @access
		 * @static
		 */
		protected static $cache_unique_key = false;

		/**
		 * @var bool
		 * @access
		 * @static
		 */
		protected static $cache_not_found = false;

		/**
		 * Retrives DB Cache.
		 *
		 * @static
		 */
		private static function get_db_cache() {
			if ( false === self::$cache ) {
				self::$cache = get_option( self::$db_key, true );
				self::$cache = ( ! is_array( self::$cache ) ) ? array() : self::$cache;
			}
		}

		/**
		 * @return void
		 */
		public static function init() {
			self::$not_found_value = new DB_Cache_Not_Found();
			self::get_db_cache();
			add_action( 'shutdown', array( __CLASS__, 'update_db_cache' ) );
		}

		/**
		 * Updates Database Cache.
		 *
		 * @static
		 */
		public static function update_db_cache() {
			self::$cache = array_map( array( __CLASS__, 'filter_save' ), self::$cache );
			update_option( self::$db_key, array_filter( self::$cache ), false );
		}

		/**
		 * @param $data
		 *
		 * @static
		 * @return array
		 */
		public static function filter_save( $data ) {
			return ( is_array( $data ) ) ? array_filter( $data ) : $data;
		}

		/**
		 * @param string $key
		 *
		 * @static
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
		 * @param string $key
		 * @param mixed  $value
		 *
		 * @static
		 * @return array|object
		 */
		public static function set( $key, $value = false ) {
			$return = Helper::array_key_set( $key, $value, self::$cache );
			return $return;
		}

		/**
		 * @param string $key
		 *
		 * @static
		 */
		public static function remove( $key ) {
			Helper::array_key_unset( $key, self::$cache );
		}
	}
}

DB_Cache::init();
