<?php

namespace WPOnion\DB;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\DB\Options' ) ) {
	/**
	 * Class Options
	 *
	 * @package WPOnion\DB
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Options {
		/**
		 * Stores All Network Options.
		 *
		 * @var array
		 * @access
		 * @static
		 */
		protected static $network_options = array();

		/**
		 * Stores All Options
		 *
		 * @var array
		 * @access
		 * @static
		 */
		protected static $settings = array();

		/**
		 * Stores All Post Meta
		 *
		 * @var array
		 * @access
		 * @static
		 */
		protected static $post = array();

		/**
		 * Stores All Taxonomy Meta.
		 *
		 * @var array
		 * @access
		 * @static
		 */
		protected static $term = array();

		/**
		 * Stores All User Meta.
		 *
		 * @var array
		 * @access
		 * @static
		 */
		protected static $user_meta = array();

		/**
		 * @param        $option
		 * @param string $key
		 * @param bool   $default
		 *
		 * @static
		 * @return bool|\WPOnion\DB\Option|array
		 */
		protected static function get( $option, $key = '', $default = false ) {
			if ( $option instanceof Option && ! empty( $key ) ) {
				return $option->get( $key, $default );
			}
			return $option;
		}

		/**
		 * @param string $db_key
		 * @param string $option_key
		 * @param bool   $default
		 *
		 * @static
		 * @return bool|\WPOnion\DB\Option|array
		 */
		public static function settings( $db_key, $option_key = '', $default = false ) {
			if ( ! isset( self::$settings[ $db_key ] ) ) {
				self::$settings[ $db_key ] = new Option( 'settings', $db_key );
			}
			return self::get( self::$settings[ $db_key ], $option_key, $default );
		}

		/**
		 * @param string $db_key
		 * @param string $option_key
		 * @param bool   $default
		 *
		 * @static
		 * @return bool|\WPOnion\DB\Option|array
		 */
		public static function network_settings( $db_key, $option_key = '', $default = false ) {
			if ( ! isset( self::$network_options[ $db_key ] ) ) {
				self::$network_options[ $db_key ] = new Option( 'network_settings', $db_key );
			}
			return self::get( self::$network_options[ $db_key ], $option_key, $default );
		}

		/**
		 * @param        $id
		 * @param        $db_key
		 * @param string $option_key
		 * @param bool   $default
		 *
		 * @static
		 * @return array|bool|\WPOnion\DB\Option
		 */
		public static function post_meta( $id, $db_key, $option_key = '', $default = false ) {
			if ( ! isset( self::$post[ $id ] ) ) {
				self::$post[ $id ] = array();
			}

			if ( ! isset( self::$post[ $id ][ $db_key ] ) ) {
				self::$post[ $id ][ $db_key ] = new Option( 'post_meta', $db_key, $id );
			}

			return self::get( self::$post[ $id ][ $db_key ], $option_key, $default );
		}

		/**
		 * @param        $id
		 * @param        $db_key
		 * @param string $option_key
		 * @param bool   $default
		 *
		 * @static
		 * @return array|bool|\WPOnion\DB\Option
		 */
		public static function term_meta( $id, $db_key, $option_key = '', $default = false ) {
			if ( ! isset( self::$term[ $id ] ) ) {
				self::$term[ $id ] = array();
			}

			if ( ! isset( self::$term[ $id ][ $db_key ] ) ) {
				self::$term[ $id ][ $db_key ] = new Option( 'taxonomy', $db_key, $id );
			}

			return self::get( self::$term[ $id ][ $db_key ], $option_key, $default );
		}

		/**
		 * @param        $id
		 * @param        $db_key
		 * @param string $option_key
		 * @param bool   $default
		 *
		 * @static
		 * @return array|bool|\WPOnion\DB\Option
		 */
		public static function user_meta( $id, $db_key, $option_key = '', $default = false ) {
			if ( ! isset( self::$user_meta[ $id ] ) ) {
				self::$user_meta[ $id ] = array();
			}

			if ( ! isset( self::$user_meta[ $id ][ $db_key ] ) || empty( self::$user_meta[ $id ][ $db_key ] ) ) {
				self::$user_meta[ $id ][ $db_key ] = new Option( 'user_profile', $db_key, $id );
			}
			return self::get( self::$user_meta[ $id ][ $db_key ], $option_key, $default );
		}
	}
}
