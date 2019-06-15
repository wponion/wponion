<?php

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
				if ( isset( self::$themes[ $theme_name ]['supports'][ $module ] ) || in_array( $module, self::$themes[ $theme_name ]['supports'], true ) ) {
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
				'help_tabs',
				'nav_menu',
				'dashboard_widgets',
				'widget',
				'user_profile',
			), 'wponion_wp_modern_theme_init' );
			self::register( 'wp_lite', array(
				'settings',
				'user_profile',
				'help_tabs',
				'nav_menu',
				'dashboard_widgets',
			), 'wponion_wp_lite_theme_init' );
			self::register( 'wp', array(
				'settings',
				'metabox',
				'nav_menu',
				'help_tabs',
				'user_profile',
				'dashboard_widgets',
			), 'wponion_wp_theme_init' );
			self::register( 'wc', array(
				'metabox',
				'settings',
				'help_tabs',
				'user_profile',
				'nav_menu',
				'dashboard_widgets',
			), 'wponion_wc_theme_init' );
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
