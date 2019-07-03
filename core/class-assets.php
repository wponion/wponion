<?php

namespace WPOnion;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

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
			add_action( 'admin_enqueue_scripts', array( __CLASS__, 'register_assets' ), 1 );
			add_action( 'load-customize.php', array( __CLASS__, 'register_assets' ), 1 );
			add_action( 'wp_enqueue_scripts', array( __CLASS__, 'register_assets' ), 1 );
			add_action( 'wponion_ajax_enqueue_scripts', array( __CLASS__, 'register_assets' ), 1 );
		}

		/**
		 * Registers Assets With WordPress.
		 *
		 * @static
		 */
		public static function register_assets() {
			$v = ( true === wponion_is_debug() ) ? time() : WPONION_VERSION;
			do_action( 'wponion_register_assets_before' );
			wponion_localize();

			if ( is_version_lte( 'wordpress', '5.0' ) ) {
				wp_register_script( 'lodash', 'https://cdn.jsdelivr.net/npm/lodash@4.17.11/lodash.min.js', array(), '4.17.11', true );
			}

			// Input Mask.
			self::cdn( 'wponion-inputmask', '/vendors/inputmask/jquery.inputmask.bundle.min.js', array( 'jquery' ), $v, true );

			// Select2
			self::cdn( 'select2', '/vendors/select2/select2.full.min.js', array( 'jquery' ), $v, true );
			self::cdn( 'select2', '/vendors/select2/select2.min.css', array(), $v, 'all', false );

			// Chosen
			self::cdn( 'chosen', '/vendors/chosen/chosen.jquery.min.js', array( 'jquery' ), $v, true );
			self::cdn( 'chosen', '/vendors/chosen/chosen.min.css', array(), $v, 'all', false );

			// Selectize
			self::cdn( 'selectize', '/vendors/selectize/selectize.js', array( 'jquery' ), $v, true );
			self::cdn( 'selectize', '/vendors/selectize/selectize.css', array(), $v, 'all', false );

			// Date Picker
			self::cdn( 'wponion-datepicker', '/vendors/flatpickr/script.js', array( 'jquery' ), $v, true );
			self::cdn( 'wponion-datepicker', '/vendors/flatpickr/style.css', array(), $v, 'all', false );

			// Registers Local Style.
			self::register( 'css', 'wponion-utility', wponion()->assets( 'css/wponion-utility.css' ), array(), $v, 'all' );
			self::register( 'css', 'wponion-plugins', wponion()->assets( 'css/wponion-plugins.css' ), array( 'wponion-utility' ), $v, 'all' );
			self::register( 'css', 'wponion-core', wponion()->assets( 'css/wponion-base.css' ), array( 'wponion-plugins' ), $v, 'all' );
			self::register( 'css', 'wponion-colorpicker', wponion()->assets( 'plugins/colorpicker/cs-colorpicker.css' ), array( 'wp-color-picker' ), $v, 'all' );

			// Registers Local Scripts.
			self::register( 'js', 'wponion-plugins', wponion()->assets( 'js/wponion-plugins.js' ), array(
				'lodash',
				'wp-util',
			), $v, true );
			self::register( 'js', 'wponion-core', wponion()->assets( 'js/wponion-core.js' ), array( 'wponion-plugins' ), $v, true );
			self::register( 'js', 'wponion-cloner', wponion()->assets( 'js/wponion-cloner.js' ), array( 'wponion-plugins' ), $v, true );
			self::register( 'js', 'wponion-customizer', wponion()->assets( 'js/wponion-customizer.js' ), array( 'wponion-core' ), $v, true );
			self::register( 'js', 'wponion-colorpicker', wponion()->assets( 'plugins/colorpicker/wp-color-picker-alpha.js' ), array( 'wp-color-picker' ), $v, true );

			do_action( 'wponion_register_assets_after' );
		}

		/**
		 * Registers Assets With WordPress.
		 *
		 * @param $type
		 * @param $key
		 * @param $src
		 * @param $dep
		 * @param $version
		 * @param $footer
		 *
		 * @static
		 * @return bool
		 */
		public static function register( $type, $key, $src, $dep, $version, $footer ) {
			if ( 'js' === $type ) {
				self::$scripts[ $key ] = $key;
				wp_register_script( $key, $src, $dep, $version, $footer );
				return true;
			}

			self::$style[ $key ] = $key;
			wp_register_style( $key, $src, $dep, $version, $footer );
			return true;
		}

		/**
		 * @param      $key
		 * @param      $url
		 * @param      $dep
		 * @param      $v
		 * @param      $footer_or_media
		 * @param bool $script
		 *
		 * @static
		 */
		public static function cdn( $key, $url, $dep, $v, $footer_or_media, $script = true ) {
			$script = ( true === $script ) ? 'js' : 'css';
			self::register( $script, $key, WPONION_CDN_URL . '@' . WPONION_CDN_VERSION . $url, $dep, $v, $footer_or_media );
		}
	}
}
Assets::init();
