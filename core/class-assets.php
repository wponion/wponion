<?php
/**
 *
 * Initial version created 06-05-2018 / 06:43 AM
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @package wponion
 * @link http://github.com/wponion
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( 'WPOnion_Assets' ) ) {
	/**
	 * Class WPOnion_Assets
	 *
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	final class WPOnion_Assets {
		/**
		 * Scripts
		 *
		 * @var array
		 */
		public static $scripts = array();

		/**
		 * Style
		 *
		 * @var array
		 */
		public static $style = array();

		/**
		 * Inits WPOnion_Assets Class.
		 *
		 * @static
		 */
		public static function init() {
			self::init_array();
			add_action( 'admin_enqueue_scripts', array( __CLASS__, 'register_assets' ), 1 );

			if ( defined( 'WPONION_FRONTEND' ) && true === WPONION_FRONTEND ) {
				add_action( 'wp_enqueue_scripts', array( __CLASS__, 'register_assets' ), 1 );
			}
		}

		/**
		 * Registers Assets With WordPress.
		 *
		 * @static
		 */
		public static function register_assets() {
			foreach ( self::$style as $id => $file ) {
				$url     = self::is_debug( WPONION_URL . $file[0] );
				$file[2] = isset( $file[2] ) ? $file[2] : WPONION_VERSION;
				$file[1] = isset( $file[1] ) ? $file[1] : array();
				wp_register_style( $id, $url, $file[1], $file[2], 'all' );
			}
			foreach ( self::$scripts as $iid => $ffile ) {
				$url      = self::is_debug( WPONION_URL . $ffile[0], 'js' );
				$ffile[2] = isset( $ffile[2] ) ? $ffile[2] : WPONION_VERSION;
				$ffile[1] = isset( $ffile[1] ) ? $ffile[1] : array();
				wp_register_script( $iid, $url, $ffile[1], $ffile[2], true );
			}
		}

		/**
		 * Use this function to add scripts & styles.
		 *
		 * @static
		 */
		public static function init_array() {
			global $wponion_js, $wponion_css;

			self::$scripts = $wponion_js;
			self::$style   = $wponion_css;
		}

		/**
		 * Directs WP to load minifed asset if debug not enabled.
		 *
		 * @param string $file_name
		 * @param string $ext
		 *
		 * @return string
		 * @static
		 */
		public static function is_debug( $file_name = '', $ext = 'css' ) {
			return wponion_debug_assets( $file_name, $ext );
		}
	}
}

WPOnion_Assets::init();