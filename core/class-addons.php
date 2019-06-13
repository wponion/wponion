<?php
/**
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @link
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

namespace WPOnion;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Addons' ) ) {
	/**
	 * Class Addons
	 *
	 * @package WPOnion
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	abstract class Addons {
		/**
		 * Stores All Addons List as
		 * array(
		 * 'addon_name' => array(
		 *    'file' => 'version',
		 * ),
		 * );
		 *
		 * @var array
		 * @access
		 * @static
		 */
		protected static $addons = array();

		/**
		 * Stores Active Adodns Version.
		 *
		 * @var array
		 * @access
		 * @static
		 */
		protected static $loaded_addons = array();

		/**
		 * Registers A Addon.
		 *
		 * @param $addon_name
		 * @param $version
		 * @param $callback_or_file
		 *
		 * @static
		 * @return bool
		 */
		public static function register_addon( $addon_name, $version, $callback_or_file ) {
			if ( ! isset( self::$addons[ $addon_name ] ) ) {
				self::$addons[ $addon_name ] = array();
			}

			self::$addons[ $addon_name ][ $version ] = $callback_or_file;
			return true;
		}

		/**
		 * Loads Latest Addon.
		 *
		 * @static
		 */
		protected static function load_addons() {
			if ( ! empty( self::$addons ) ) {
				foreach ( self::$addons as $addon_name => $data ) {
					$version = max( array_keys( $data ) );
					if ( ! empty( $version ) && isset( $data[ $version ] ) ) {
						if ( wponion_is_callable( $data[ $version ] ) ) {
							wponion_callback( $data[ $version ] );
						} elseif ( file_exists( $data[ $version ] ) ) {
							require_once $data[ $version ];
						}
						self::$loaded_addons[ $addon_name ] = $version;
					}
				}
			}
		}
	}
}
