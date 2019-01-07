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
		 * Inits WPOnion_Assets Class.
		 *
		 * @static
		 */
		public static function init() {
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
			$version = ( true === wponion_is_debug() ) ? time() : WPONION_VERSION;
			$url     = WPONION_URL;
			self::register_styles( $version, $url );
			self::register_scripts( $version, $url );
			do_action( 'wponion_register_assets_after' );
		}

		/**
		 * Registers WPOnion Assets.
		 *
		 * @param $version
		 * @param $url
		 *
		 * @static
		 */
		public static function register_styles( $version, $url ) {
			wp_register_style( 'chosen', $url . 'assets/plugins/chosen/chosen.min.css', array(), $version );
			wp_register_style( 'select2', $url . 'assets/plugins/select2/select2.min.css', array(), $version );
			wp_register_style( 'wponion-plugins', $url . 'assets/css/wponion-plugins.css', array(), $version );
			wp_register_style( 'wponion-core', $url . 'assets/css/wponion-base.css', array(), $version );
			wp_register_style( 'wponion-colorpicker', $url . 'assets/plugins/wp-color-picker-alpha/cs-colorpicker.css', array( 'wp-color-picker' ), $version );
			wp_register_style( 'wponion-datepicker', $url . 'assets/plugins/flatpickr/style.css', array(), $version );

		}

		/**
		 * Registers WPOnion Assets.
		 *
		 * @param $version
		 * @param $url
		 *
		 * @static
		 */
		public static function register_scripts( $version, $url ) {
			if ( is_version_lte( 'wordpress', '5.0' ) ) {
				wp_register_script( 'lodash', 'https://cdn.jsdelivr.net/npm/lodash@4.17.11/lodash.min.js', array(), '4.17.11', true );
			}

			wp_register_script( 'wponion-plugins', $url . 'assets/js/wponion-plugins.js', array(
				'wp-util',
				'lodash',
				'backbone',
			), $version, true );
			wp_register_script( 'wponion-core', $url . 'assets/js/wponion-core.js', array( 'wponion-plugins' ), $version, true );
			wp_register_script( 'wponion-cloner', $url . 'assets/js/wponion-cloner.js', array( 'wponion-plugins' ), $version, true );
			wp_register_script( 'wponion-customizer', $url . 'assets/js/wponion-customizer.js', array( 'wponion-core' ), $version, true );
			wp_register_script( 'wponion-postmessags', $url . 'assets/js/wponion-postmessags.js', array( 'wponion-customizer' ), $version, true );
			wp_register_script( 'wponion-woocommerce', $url . 'assets/js/wponion-woocommerce.js', array( 'wponion-core' ), $version, true );
			wp_register_script( 'wponion-colorpicker', $url . 'assets/plugins/colorpicker/wp-color-picker-alpha.js', array( 'wp-color-picker' ), $version, true );
			wp_register_script( 'wponion-datepicker', $url . 'assets/plugins/flatpickr/script.js', array( 'jquery' ), $version, true );
			wp_register_script( 'wponion-inputmask', $url . 'assets/plugins/inputmask/jquery.inputmask.bundle.min.js', array( 'jquery' ), $version, true );
			wp_register_script( 'select2', $url . 'assets/plugins/select2/select2.full.min.js', array( 'jquery' ), $version, true );
			wp_register_script( 'chosen', $url . 'assets/plugins/chosen/chosen.jquery.min.js', array( 'jquery' ), $version, true );
		}
	}
}
Assets::init();
