<?php
/**
 *
 * Initial version created 17-07-2018 / 03:50 PM
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @package
 * @link
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

namespace WPOnion;

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
		 * icons
		 *
		 * @var array
		 */
		protected static $icons = array();

		/**
		 * icon_names
		 *
		 * @var array
		 */
		protected static $icon_names = array();

		/**
		 * @param string $icon_name
		 * @param string $icon_slug
		 * @param string $icons
		 *
		 * @static
		 */
		public static function add( $icon_name = '', $icon_slug = '', $icons = '' ) {
			if ( ! isset( self::$icons[ $icon_slug ] ) && ! isset( self::$icon_names[ $icon_slug ] ) ) {
				$is_json = ( is_string( $icons ) ) ? true : false;
				if ( $is_json ) {
					$icons = wponion_read_json_files( $icons );
				}

				self::$icons[ $icon_slug ]      = $icons;
				self::$icon_names[ $icon_slug ] = $icon_name;
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
			if ( isset( self::$icons[ $icon_name ] ) ) {
				return self::$icons[ $icon_name ];
			}
			return array();
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
			if ( isset( self::$icon_names[ $slug ] ) ) {
				return self::$icon_names[ $slug ];
			}
			return false;
		}

		/**
		 * Returns List of icons.
		 *
		 * @return array
		 * @static
		 */
		public static function icon_list() {
			return self::$icon_names;
		}

		/**
		 * Basic Setup.
		 *
		 * @static
		 */
		public static function setup() {
			$icons = Helper::get_data( 'icons' );
			foreach ( $icons as $slug => $key ) {
				self::add( $key['name'], $slug, $key['icons'] );
			}
		}
	}
}

Icons::setup();