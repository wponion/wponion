<?php
/**
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
			global $wponion_js, $wponion_css;
			self::$scripts = $wponion_js;
			self::$style   = $wponion_css;

			add_action( 'admin_enqueue_scripts', array( __CLASS__, 'register_assets' ), 1 );
			add_action( 'load-customize.php', array( __CLASS__, 'register_assets' ), 1 );
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
			do_action( 'wponion_register_assets_before' );
			self::loop_assets( self::$style, 'wp_register_style', 'all' );
			self::loop_assets( self::$scripts, 'wp_register_script', 'all' );
			do_action( 'wponion_register_assets_after' );
		}

		/**
		 * Runs a loop with array of assets lists.
		 *
		 * @param array           $data Array Of Assets.
		 * @param string|callable $callback fixed value (wp_register_script | wp_register_style).
		 * @param mixed           $last_arg true / false.
		 *
		 * @static
		 */
		protected static function loop_assets( $data, $callback, $last_arg ) {
			$version = ( true === wponion_is_debug() ) ? time() : WPONION_VERSION;
			foreach ( $data as $id => $file ) {
				$file[2] = ( isset( $file[2] ) ) ? $file[2] : $version;
				$file[1] = ( isset( $file[1] ) ) ? $file[1] : array();
				$callback( $id, WPONION_URL . $file[0], $file[1], $file[2], $last_arg );
			}
		}
	}
}
Assets::init();
