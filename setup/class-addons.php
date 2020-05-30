<?php

namespace WPOnion;

defined( 'ABSPATH' ) || exit;

if ( ! class_exists( '\WPOnion\Addons' ) ) {
	/**
	 * Class Addons
	 *
	 * @package WPOnion
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 */
	abstract class Addons {
		/**
		 * Stores All Addons List as
		 *
		 * @example array( addon_name' => array( 'file' => 'version' ) );
		 *
		 * @var array
		 */
		protected static $addons = array();

		/**
		 * Stores Active Adodns Version.
		 *
		 * @var array
		 */
		protected static $loaded_addons = array();

		/**
		 * Registers A Addon.
		 *
		 * @param string     $name
		 * @param string|int $version
		 * @param string     $callback_or_file
		 *
		 * @return bool
		 */
		public static function register_addon( $name, $version, $callback_or_file ) {
			if ( ! isset( self::$addons[ $name ] ) ) {
				self::$addons[ $name ] = array();
			}
			self::$addons[ $name ][ $version ] = $callback_or_file;
			return true;
		}

		/**
		 * Loads Latest Addon.
		 */
		protected static function load_addons() {
			if ( ! empty( self::$addons ) ) {
				foreach ( self::$addons as $name => $data ) {
					$version = max( array_keys( $data ) );
					if ( ! empty( $version ) && isset( $data[ $version ] ) ) {
						if ( wponion_is_callable( $data[ $version ] ) ) {
							wponion_callback( $data[ $version ] );
						} elseif ( file_exists( $data[ $version ] ) ) {
							require_once $data[ $version ];
						}
						self::$loaded_addons[ $name ] = $version;
					}
				}
			}
		}
	}
}
