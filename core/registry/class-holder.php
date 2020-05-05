<?php

namespace WPOnion\Registry;

defined( 'ABSPATH' ) || exit;

if ( ! class_exists( '\WPOnion\Registry\Holder' ) ) {
	/**
	 * Class Holder
	 *
	 * @package WPOnion\Registry
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Holder {
		/**
		 * Stores all instance data.
		 *
		 * @var array
		 */
		public static $registry = array();

		/**
		 * Checks if registry already exists.
		 *
		 * @param $type
		 *
		 * @static
		 * @return bool
		 */
		public static function has( $type ) {
			return ( isset( self::$registry[ $type ] ) );
		}

		/**
		 * @param $type
		 *
		 * @static
		 * @return bool|mixed
		 */
		public static function get( $type ) {
			return ( self::has( $type ) ) ? self::$registry[ $type ] : false;
		}

		/**
		 * Adds A Instance To Holder
		 *
		 * @param $type
		 * @param $instance
		 *
		 * @static
		 */
		public static function add( $type, &$instance ) {
			if ( ! self::has( $type ) ) {
				self::$registry[ $type ] =& $instance;
			}
		}

		/**
		 * Returns An Exists instance.
		 *
		 * @param $type
		 * @param $class
		 *
		 * @static
		 * @return bool|object
		 */
		public static function registry( $type, $class ) {
			if ( self::has( $type ) ) {
				return self::get( $type );
			} else {
				$instance = new $class;
				self::add( $type, $instance );
				return self::get( $type );
			}
		}
	}
}
