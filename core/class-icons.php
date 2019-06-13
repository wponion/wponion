<?php

namespace WPOnion;

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
		 * @param string $icon_name
		 * @param string $icon_slug
		 * @param string $icons
		 *
		 * @static
		 */
		public static function add( $icon_name = '', $icon_slug = '', $icons = '' ) {
			if ( ! wponion_has_cache( 'icons/icon/' . $icon_slug ) && ! wponion_has_cache( 'icons/names/' . $icon_slug ) ) {
				wponion_set_cache( 'icons/icon/' . $icon_slug, $icons );
				wponion_set_cache( 'icons/names/' . $icon_slug, $icon_name );
			}
		}

		/**
		 * Returns Icons data if exists.
		 *
		 * @param $icon_name
		 *
		 * @return array|mixed
		 * @static
		 */
		public static function get( $icon_name ) {
			return wponion_get_cache( 'icons/icon/' . $icon_name, array() );
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
			return wponion_get_cache( 'icons/names/' . $slug, false );
		}

		/**
		 * Returns List of icons.
		 *
		 * @return array
		 * @static
		 */
		public static function icon_list() {
			return wponion_get_cache( 'icons/names', array() );
		}

		/**
		 * Basic Setup.
		 *
		 * @static
		 */
		public static function setup() {
			do_action( 'wponion_before_icons_setup' );
			foreach ( Helper::get_data( 'icons' ) as $slug => $key ) {
				self::add( $key['name'], $slug, $key['icons'] );
			}
			do_action( 'wponion_after_icons_setup' );
		}
	}
}

Icons::setup();
