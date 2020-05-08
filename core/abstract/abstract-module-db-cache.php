<?php

namespace WPOnion\Bridge;

use WPOnion\Bridge;

defined( 'ABSPATH' ) || exit;

if ( ! class_exists( '\WPOnion\Bridge\Module_DB_Cache' ) ) {
	/**
	 * Class Module_DB
	 *
	 * @package WPOnion\Bridge
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 */
	abstract class Module_DB_Cache extends Bridge {
		/**
		 * Stores All Cache Information.
		 *
		 * @var array
		 * @static
		 */
		protected static $cache = false;

		/**
		 * Database DB Cache Key.
		 *
		 * @var string
		 * @static
		 */
		protected static $db_key = '_wponion_db_cache';

		/**
		 * Module_DB_Cache constructor.
		 */
		public function __construct() {
			self::retrive_db_cache();
			add_action( 'shutdown', array( __CLASS__, 'update_db_cache' ) );
		}

		/**
		 * Updates Database Cache.
		 *
		 * @static
		 */
		public static function update_db_cache() {
			self::$cache = array_map( 'array_filter', self::$cache );
			update_option( self::$db_key, array_filter( self::$cache ), false );
		}

		/**
		 * Retrives Cache From Database.
		 *
		 * @static
		 */
		public static function retrive_db_cache() {
			if ( false === self::$cache ) {
				self::$cache = get_option( self::$db_key, true );
				self::$cache = ( ! is_array( self::$cache ) ) ? array() : self::$cache;
			}
		}
	}
}
