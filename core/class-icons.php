<?php

namespace WPOnion;

use WPOnion\Utils\Icon;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Icons' ) ) {
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
		protected static $icons_instance = array();

		/**
		 * @var array
		 * @access
		 * @static
		 */
		protected static $icons = array();

		/**
		 * @param $args
		 *
		 * @static
		 * @return \WPOnion\Utils\Icon
		 */
		public static function add( $args ) {
			$instance                                  = new Icon( $args );
			self::$icons_instance[ $instance->slug() ] = $instance;
			self::$icons[ $instance->slug() ]          = $instance->name();
			return $instance;
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
			return isset( self::$icons_instance[ $icon_name ] ) ? self::$icons_instance[ $icon_name ] : false;
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
			foreach ( Helper::get_data( 'icons' ) as $key ) {
				self::add( $key );
			}
			do_action( 'wponion_after_icons_setup' );
		}
	}
}

Icons::setup();
