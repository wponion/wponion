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
		 * @var bool
		 * @access
		 * @static
		 */
		protected static $cache_updated = false;

		/**
		 * Checks if error msg is added.
		 *
		 * @var bool
		 * @access
		 * @static
		 */
		protected static $error_msg = false;

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
		 * @var array
		 * @access
		 * @static
		 */
		protected static $cache = array();

		/**
		 * Inits WPOnion_Assets Class.
		 *
		 * @static
		 */
		public static function init() {
			self::$cache = get_transient( '_wponion_cdn_cache' );
			self::$cache = ( ! is_array( self::$cache ) ) ? array() : self::$cache;
			add_action( 'admin_enqueue_scripts', array( __CLASS__, 'register_assets' ), 1 );
			add_action( 'load-customize.php', array( __CLASS__, 'register_assets' ), 1 );
			add_action( 'wp_enqueue_scripts', array( __CLASS__, 'register_assets' ), 1 );
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
			return ( 'script' === $type ) ? array_keys( self::$scripts ) : array_keys( self::$style );
		}

		/**
		 * Registers Assets With WordPress.
		 *
		 * @static
		 */
		public static function register_assets() {
			$v = ( true === wponion_is_debug() ) ? time() : wponion()->version();
			do_action( 'wponion_register_assets_before' );
			wponion_localize();

			if ( is_version_lte( 'wordpress', '5.0' ) ) {
				wp_register_script( 'lodash', 'https://cdn.jsdelivr.net/npm/lodash@4.17.11/lodash.min.js', array(), '4.17.11', true );
			}

			/**
			 * Registers CDN Assets For The Following
			 * 1. Select2
			 * 2. Chosen
			 * 3. Selectize
			 * 4. InputMask
			 * 5. FlatPickr
			 */
			self::cdn( 'wponion-inputmask', 'https://cdn.jsdelivr.net/gh/wponion/vendor-support@1.0/vendors/inputmask/jquery.inputmask.bundle.min.js', array( 'jquery' ), $v, true );
			self::cdn( 'select2', 'https://cdn.jsdelivr.net/gh/wponion/vendor-support@1.0/vendors/select2/select2.full.min.js', array( 'jquery' ), $v, true );
			self::cdn( 'select2', 'https://cdn.jsdelivr.net/gh/wponion/vendor-support@1.0/vendors/select2/select2.min.css', array(), $v, 'all', false );
			self::cdn( 'chosen', 'https://cdn.jsdelivr.net/gh/wponion/vendor-support@1.0/vendors/chosen/chosen.jquery.min.js', array( 'jquery' ), $v, true );
			self::cdn( 'chosen', 'https://cdn.jsdelivr.net/gh/wponion/vendor-support@1.0/vendors/chosen/chosen.min.css', array(), $v, 'all', false );
			self::cdn( 'selectize', 'https://cdn.jsdelivr.net/gh/wponion/vendor-support@1.0/vendors/selectize/selectize.js', array( 'jquery' ), $v, true );
			self::cdn( 'selectize', 'https://cdn.jsdelivr.net/gh/wponion/vendor-support@1.0/vendors/selectize/selectize.css', array(), $v, 'all', false );
			self::cdn( 'wponion-datepicker', 'https://cdn.jsdelivr.net/gh/wponion/vendor-support@1.0/vendors/flatpickr/script.js', array( 'jquery' ), $v, true );
			self::cdn( 'wponion-datepicker', 'https://cdn.jsdelivr.net/gh/wponion/vendor-support@1.0/vendors/flatpickr/style.css', array(), $v, 'all', false );

			/**
			 * Registers Local Style.
			 */
			self::register( 'style', 'wponion-utility', wponion()->assets( 'css/wponion-utility.css' ), array(), $v, 'all' );
			self::register( 'style', 'wponion-plugins', wponion()->assets( 'css/wponion-plugins.css' ), array( 'wponion-utility' ), $v, 'all' );
			self::register( 'style', 'wponion-core', wponion()->assets( 'css/wponion-base.css' ), array( 'wponion-plugins' ), $v, 'all' );
			self::register( 'style', 'wponion-colorpicker', wponion()->assets( 'plugins/colorpicker/cs-colorpicker.css' ), array( 'wp-color-picker' ), $v, 'all' );

			/**
			 * Registers Local Scripts.
			 */
			self::register( 'script', 'wponion-plugins', wponion()->assets( 'js/wponion-plugins.js' ), array(
				'lodash',
				'wp-util',
			), $v, true );
			self::register( 'script', 'wponion-customizer', wponion()->assets( 'js/wponion-customizer.js' ), array( 'wponion-core' ), $v, true );
			self::register( 'script', 'wponion-postmessage', wponion()->assets( 'js/wponion-postmessage.js' ), array( 'wponion-customizer' ), $v, true );
			self::register( 'script', 'wponion-cloner', wponion()->assets( 'js/wponion-cloner.js' ), array( 'wponion-plugins' ), $v, true );
			self::register( 'script', 'wponion-core', wponion()->assets( 'js/wponion-core.js' ), array( 'wponion-plugins' ), $v, true );
			self::register( 'script', 'wponion-colorpicker', wponion()->assets( 'plugins/colorpicker/wp-color-picker-alpha.js' ), array( 'wp-color-picker' ), $v, true );

			do_action( 'wponion_register_assets_after' );

			if ( self::$cache_updated ) {
				set_transient( '_wponion_cdn_cache', self::$cache, DAY_IN_SECONDS * 5 );
			}

			if ( is_admin() ) {
				wp_enqueue_style( 'wponion-utility' );
			}
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
		 * @uses \wp_register_style()
		 *
		 * @uses \wp_register_script()
		 */
		public static function register( $type, $key, $src, $dep, $version, $footer ) {
			if ( 'script' === $type ) {
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
			$script    = ( true === $script ) ? 'script' : 'style';
			$cdn_is_up = isset( self::$cache[ $key . '_' . $script ] ) ? self::$cache[ $key . '_' . $script ] : false;

			if ( defined( 'WPONION_OFF_CDN' ) && true === WPONION_OFF_CDN && class_exists( 'WPOnion_Vendor_Support' ) ) {
				if ( 'script' === $script ) {
					$url = \WPOnion_Vendor_Support::script( $key );
				} else {
					$url = \WPOnion_Vendor_Support::style( $key );
				}
				self::register( $script, $key, $url, $dep, $v, $footer_or_media );
			} elseif ( $cdn_is_up ) {
				self::register( $script, $key, $url, $dep, $v, $footer_or_media );
			} else {
				$cdn_response = @wp_remote_get( $url );
				if ( is_wp_error( $cdn_response ) || 200 !== wp_remote_retrieve_response_code( $cdn_response ) ) {
					if ( class_exists( 'WPOnion_Vendor_Support' ) ) {
						if ( 'script' === $script ) {
							$url = \WPOnion_Vendor_Support::script( $key );
						} else {
							$url = \WPOnion_Vendor_Support::style( $key );
						}
						self::register( $script, $key, $url, $dep, $v, $footer_or_media );
					} else {
						$msg = __( 'Please wait a few minutes, then try refreshing the page. Unable to load some remotely hosted scripts.', 'redux-framework', 'wponion' );
						if ( wponion_is_debug() ) {
							/* translators: */
							$msg = __( 'If you are developing offline, please download and install the <a href="%s" target="_blank">WPOnion Vendor Support</a> plugin/extension to bypass the CDN and avoid this warning', 'wponion' );
							$msg = sprintf( $msg, 'https://github.com/wponion/vendor-support' );
						}
						if ( false === self::$error_msg && is_admin() ) {
							wponion_warning_admin_notice( $msg, __( 'WPOnion Framework Warning', 'wponion' ) );
							self::$error_msg = true;
						}
					}
				} else {
					self::$cache[ $key . '_' . $script ] = true;
					self::$cache_updated                 = true;
					self::register( $script, $key, $url, $dep, $v, $footer_or_media );
				}
			}

		}
	}
}
Assets::init();
