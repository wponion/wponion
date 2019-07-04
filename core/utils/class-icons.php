<?php

namespace WPOnion\Utils;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Utils\Icons' ) ) {
	/**
	 * Class Icons
	 *
	 * @package WPOnion
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Icons {
		/**
		 * @var array
		 * @access
		 * @static
		 */
		protected static $instances = array();

		/**
		 * @var array
		 * @access
		 * @static
		 */
		protected static $icons = array();

		/**
		 * @param array|\WPOnion\Utils\Icon $instance_or_args
		 *
		 * @static
		 * @return \WPOnion\Utils\Icon
		 */
		public static function add( $instance_or_args ) {
			if ( ! $instance_or_args instanceof Icon ) {
				$instance_or_args = new Icon( $instance_or_args );
			}
			self::$instances[ $instance_or_args->slug() ] = $instance_or_args;
			self::$icons[ $instance_or_args->slug() ]    = $instance_or_args->name();
			return $instance_or_args;
		}

		/**
		 * Returns All Icons.
		 *
		 * @static
		 * @return array
		 */
		public static function get_all() {
			return self::$instances;
		}

		/**
		 * Returns Icons data if exists.
		 *
		 * @param $icon_name
		 *
		 * @return array|\WPOnion\Utils\Icon|bool
		 * @static
		 */
		public static function get( $icon_name ) {
			return isset( self::$instances[ $icon_name ] ) ? self::$instances[ $icon_name ] : false;
		}

		/**
		 * Checks and returns Icon's Name.
		 *
		 * @param $slug
		 *
		 * @return bool|mixed
		 * @static
		 */
		public static function name( $slug ) {
			return ( isset( self::$icons[ $slug ] ) ) ? self::$icons[ $slug ] : false;
		}

		/**
		 * Returns List of icons.
		 *
		 * @return array
		 * @static
		 */
		public static function icon_list() {
			return self::$icons;
		}

		/**
		 * Basic Setup.
		 *
		 * @static
		 */
		public static function setup() {
			do_action( 'wponion_before_icons_setup' );
			require_once WPONION_PATH . 'data/icons.php';
			do_action( 'wponion_after_icons_setup' );
		}
	}
}

Icons::setup();
