<?php
/**
 *
 * Initial version created 07-05-2018 / 10:11 AM
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @package wponion
 * @link http://github.com/wponion
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

namespace WPOnion\Bridge;

use WPO\Builder;
use WPO\Container;
use WPO\Field;
use WPOnion\Bridge;
use WPOnion\Themes;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Bridge\Module_DB_Cache' ) ) {
	/**
	 * Class Module_DB
	 *
	 * @package WPOnion\Bridge
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	abstract class Module_DB_Cache extends Bridge {
		/**
		 * Stores All Cache Information.
		 *
		 * @var array
		 * @access
		 * @static
		 */
		protected static $cache = false;

		/**
		 * Database DB Cache Key.
		 *
		 * @var string
		 * @access
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
