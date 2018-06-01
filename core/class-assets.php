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

namespace WPOnion;

if ( ! class_exists( '\WPOnion\Assets' ) ) {
	/**
	 * Class Assets
	 *
	 * @package WPOnion
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	final class Assets {
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
			add_action( 'load-customize.php', array( __CLASS__, 'register_assets' ), 1 );
			if ( defined( 'WPONION_FRONTEND' ) && true === WPONION_FRONTEND ) {
				add_action( 'wp_enqueue_scripts', array( __CLASS__, 'register_assets' ), 1 );
			}
			return true;
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
		 * Registers Assets With WordPress.
		 *
		 * @static
		 */
		public static function register_assets() {
			$version = ( true === wponion_is_debug() ) ? time() : WPONION_VERSION;
			foreach ( self::$style as $id => $file ) {
				$file[2] = isset( $file[2] ) ? $file[2] : $version;
				$file[1] = isset( $file[1] ) ? $file[1] : array();
				wp_register_style( $id, WPONION_URL . $file[0], $file[1], $file[2], 'all' );
			}
			foreach ( self::$scripts as $iid => $ffile ) {
				$ffile[2] = isset( $ffile[2] ) ? $ffile[2] : $version;
				$ffile[1] = isset( $ffile[1] ) ? $ffile[1] : array();
				wp_register_script( $iid, WPONION_URL . $ffile[0], $ffile[1], $ffile[2], true );
			}
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
return Assets::init();
