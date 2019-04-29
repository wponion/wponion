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
			self::$scripts = array(
				'wponion-plugins'     => array(
					'assets/js/wponion-plugins.js',
					array( 'lodash', 'wp-util', 'backbone' ),
				),
				'wponion-customizer'  => array( 'assets/js/wponion-customizer.js', array( 'wponion-core' ) ),
				'wponion-postmessage' => array( 'assets/js/wponion-postmessage.js', array( 'wponion-customizer' ) ),
				'wponion-cloner'      => array( 'assets/js/wponion-cloner.js', array( 'wponion-plugins' ) ),
				'wponion-core'        => array(
					self::is_debug( 'assets/js/wponion-core.js' ),
					array( 'wponion-plugins' ),
				),
				'wponion-inputmask'   => array(
					'assets/plugins/inputmask/jquery.inputmask.bundle.min.js',
					array( 'jquery' ),
				),
				'wponion-colorpicker' => array(
					'assets/plugins/colorpicker/wp-color-picker-alpha.js',
					array( 'wp-color-picker' ),
				),
				'wponion-datepicker'  => array( 'assets/plugins/flatpickr/script.js', array( 'jquery' ) ),
				'select2'             => array( 'assets/plugins/select2/select2.full.min.js', array( 'jquery' ) ),
				'chosen'              => array( 'assets/plugins/chosen/chosen.jquery.min.js', array( 'jquery' ) ),
			);
			self::$style   = array(
				'chosen'              => array( 'assets/plugins/chosen/chosen.min.css' ),
				'select2'             => array( 'assets/plugins/select2/select2.min.css' ),
				'animate.css'         => array( 'assets/plugins/animate.css/animate.min.css' ),
				'wponion-plugins'     => array( 'assets/css/wponion-plugins.css' ),
				'wponion-core'        => array( 'assets/css/wponion-base.css', array( 'wponion-plugins' ) ),
				'wponion-colorpicker' => array(
					'assets/plugins/colorpicker/cs-colorpicker.css',
					array( 'wp-color-picker' ),
				),
				'wponion-datepicker'  => array( 'assets/plugins/flatpickr/style.css' ),
			);

			add_action( 'admin_enqueue_scripts', array( __CLASS__, 'register_assets' ), 1 );
			add_action( 'load-customize.php', array( __CLASS__, 'register_assets' ), 1 );

			if ( defined( 'WPONION_FRONTEND' ) && true === WPONION_FRONTEND ) {
				add_action( 'wp_enqueue_scripts', array( __CLASS__, 'register_assets' ), 1 );
			}
		}

		/**
		 * Returns All Script / Styles Keys.
		 *
		 * @param string $type
		 *
		 * @static
		 * @return array
		 */
		public static function get( $type = 'script' ) {
			if ( 'script' === $type ) {
				return array_keys( self::$scripts );
			}
			return array_keys( self::$style );
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
			wponion_localize();
			self::register_styles( $version, $url );
			self::register_scripts( $version, $url );
			self::loop_assets( self::$style, 'wp_register_style', 'all' );
			self::loop_assets( self::$scripts, 'wp_register_script', true );
			do_action( 'wponion_register_assets_after' );
		}

		/**
		 * @param $string
		 *
		 * @static
		 * @return mixed
		 */
		public static function is_debug( $string ) {
			if ( false === wponion_is_debug() && ( ! defined( 'SCRIPT_DEBUG' ) || defined( 'SCRIPT_DEBUG' ) && false === SCRIPT_DEBUG ) ) {
				return str_replace( array( '.js', '.css' ), array( '.min.js', '.min.css' ), $string );
			}
			return $string;
		}

		/**
		 * @param $data
		 * @param $callback
		 * @param $last_arg
		 *
		 * @uses \wp_register_style()
		 * @uses \wp_register_script()
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

		/**
		 * Registers WPOnion Assets.
		 *
		 * @param $version
		 * @param $url
		 *
		 * @static
		 */
		public static function register_styles( $version, $url ) {
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
		}
	}
}
Assets::init();
