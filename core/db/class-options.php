<?php

namespace WPOnion\DB;

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
		 * Checks if given value is array or not.
		 *
		 * @param $args
		 *
		 * @static
		 * @return array
		 */
		protected static function check_is_array( $args ) {
			return ( ! is_array( $args ) ) ? array() : $args;
		}

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
				$options                   = self::check_is_array( get_option( $db_key, true ) );
				self::$settings[ $db_key ] = new Option( $options, 'settings', $db_key );
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
				$options                          = self::check_is_array( get_option( $db_key, true ) );
				self::$network_options[ $db_key ] = new Option( $options, 'network_settings', $db_key );
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
				$options                      = self::check_is_array( get_post_meta( $id, $db_key, true ) );
				self::$post[ $id ][ $db_key ] = new Option( $options, 'postmeta', $db_key, $id );
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
				$options                      = self::check_is_array( wponion_get_term_meta( $id, $db_key ) );
				self::$term[ $id ][ $db_key ] = new Option( $options, 'taxonomy', $db_key, $id );
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
				$options                           = self::check_is_array( get_user_meta( $id, $db_key, true ) );
				self::$user_meta[ $id ][ $db_key ] = new Option( $options, 'user_profile', $db_key, $id );
			}
			return self::get( self::$user_meta[ $id ][ $db_key ], $option_key, $default );
		}
	}
}
