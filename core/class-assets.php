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
			if ( defined( 'WPONION_FRONTEND' ) && true === WPONION_FRONTEND ) {
				add_action( 'wp_enqueue_scripts', array( __CLASS__, 'register_assets' ), 1 );
			} else {
				add_action( 'admin_enqueue_scripts', array( __CLASS__, 'register_assets' ) );
			}
		}

		/**
		 * Use this function to add scripts & styles.
		 *
		 * @static
		 */
		public static function init_array() {

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
			if ( ( defined( 'WP_DEBUG' ) && true === WP_DEBUG ) || defined( 'SCRIPT_DEBUG' ) && true === SCRIPT_DEBUG ) {
				return $file_name . '.' . $ext;
			}
			return $file_name . '.min.' . $ext;
		}
	}
}

return false;
