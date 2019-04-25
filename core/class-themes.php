<?php
/**
 *
 * Project : bullet-wp
 * Date : 08-08-2018
 * Time : 08:46 AM
 * File : class-theme-api.php
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @package bullet-wp
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

namespace WPOnion;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Themes' ) ) {
	/**
	 * Class \WPOnion\Themes
	 *
	 * @package WPOnion
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Themes {
		/**
		 * themes
		 *
		 * @var array
		 */
		protected static $themes = array();

		/**
		 * Registers A New Theme.
		 *
		 * @param string $theme_name
		 * @param array  $supports
		 * @param string $callback
		 *
		 * @return bool
		 * @static
		 */
		public static function register( $theme_name = '', $supports = array(), $callback = '' ) {
			if ( ! isset( self::$themes[ $theme_name ] ) ) {
				self::$themes[ $theme_name ] = array(
					'name'     => $theme_name,
					'supports' => $supports,
					'callback' => $callback,
				);
				return true;
			}
			return false;
		}

		/**
		 * Checks if a module is supported in a theme.
		 *
		 * @param string $theme_name
		 * @param string $module
		 *
		 * @return bool
		 * @static
		 */
		public static function is_support( $theme_name = '', $module = '' ) {
			if ( isset( self::$themes[ $theme_name ] ) ) {
				if ( isset( self::$themes[ $theme_name ]['supports'][ $module ] ) || in_array( $module, self::$themes[ $theme_name ]['supports'] ) ) {
					return true;
				}
			}
			return false;
		}

		/**
		 * Basic Setup
		 *
		 * @static
		 */
		public static function setup() {
			self::register( 'wp_modern', array(
				'settings',
				'metabox',
				'taxonomy',
				'nav_menu',
				'dashboard_widgets',
				'widget',
				'user_profile',
			), 'wponion_wp_modern_theme_init' );
			self::register( 'wp_lite', array( 'settings' ), 'wponion_wp_lite_theme_init' );
			self::register( 'wp', array( 'settings' ), 'wponion_wp_theme_init' );
		}

		/**
		 * Handles Theme Callback.
		 *
		 * @param string $theme_name
		 * @param array  $callback_args
		 *
		 * @return bool|string|\WPOnion\Theme_API
		 * @static
		 */
		public static function callback( $theme_name = '', $callback_args = array() ) {
			if ( isset( self::$themes[ $theme_name ] ) ) {
				$callback = self::$themes[ $theme_name ]['callback'];
				return wponion_callback( $callback, $callback_args );
			}
			return false;
		}
	}
}

Themes::setup();
