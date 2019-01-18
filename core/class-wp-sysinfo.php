<?php
/**
 *
 * Project : wponion
 * Date : 26-11-2018
 * Time : 10:06 AM
 * File : class-wp-sysinfo.php
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @package wponion
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

namespace WPOnion;
if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\WP_Sysinfo' ) ) {
	/**
	 * Class WP_Sysinfo
	 *
	 * @package WPOnion
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class WP_Sysinfo {
		public static $status = array();

		/**
		 * @return array
		 * @static
		 */
		public static function get() {
			if ( empty( self::$status ) ) {
				self::server_information();
				self::wordpress_information();
				self::php_information();
				self::active_theme();
				self::$status[ __( 'Plugins' ) ] = array();
				self::plugins();
				self::must_use_plugins();
				self::self_info_data();
			}
			return apply_filters( 'wponion_sysinfo_final', self::$status );
		}

		/**
		 * @param $key
		 *
		 * @return bool
		 * @static
		 */
		public static function is_defined( $key ) {
			return ( true === defined( $key ) && true === constant( $key ) );
		}

		/**
		 * @return bool|string
		 * @static
		 */
		public static function is_debug() {
			if ( self::is_defined( 'WP_DEBUG' ) && self::is_defined( 'WP_DEBUG_LOG' ) && self::is_defined( 'WP_DEBUG_DISPLAY' ) ) {
				return true;
			} elseif ( self::is_defined( 'WP_DEBUG' ) && self::is_defined( 'WP_DEBUG_LOG' ) ) {
				return 'WP_DEBUG && WP_DEBUG_LOG';
			} elseif ( self::is_defined( 'WP_DEBUG' ) && self::is_defined( 'WP_DEBUG_DISPLAY' ) ) {
				return 'WP_DEBUG && WP_DEBUG_DISPLAY';
			} elseif ( self::is_defined( 'WP_DEBUG' ) ) {
				return 'WP_DEBUG';
			} else {
				return false;
			}
		}

		/**
		 * Gets Current Host Info
		 *
		 * @return bool|string
		 */
		private static function get_host() {
			$host = null;
			if ( defined( 'WPE_APIKEY' ) ) {
				$host = __( 'WP Engine' );
			} elseif ( defined( 'PAGELYBIN' ) ) {
				$host = __( 'Pagely' );
			} elseif ( DB_HOST === 'localhost:/tmp/mysql5.sock' ) {
				$host = __( 'ICDSoft' );
			} elseif ( DB_HOST === 'mysqlv5' ) {
				$host = __( 'NetworkSolutions' );
			} elseif ( strpos( DB_HOST, 'ipagemysql.com' ) !== false ) {
				$host = __( 'iPage' );
			} elseif ( strpos( DB_HOST, 'ipowermysql.com' ) !== false ) {
				$host = __( 'IPower' );
			} elseif ( strpos( DB_HOST, '.gridserver.com' ) !== false ) {
				$host = __( 'MediaTemple Grid' );
			} elseif ( strpos( DB_HOST, '.pair.com' ) !== false ) {
				$host = __( 'Pair Networks' );
			} elseif ( strpos( DB_HOST, '.stabletransit.com' ) !== false ) {
				$host = __( 'Rackspace Cloud' );
			} elseif ( strpos( DB_HOST, '.sysfix.eu' ) !== false ) {
				$host = __( 'SysFix.eu Power Hosting' );
			} elseif ( false !== strpos( $_SERVER['SERVER_NAME'], 'Flywheel' ) ) {
				$host = __( 'Flywheel' );
			} else {
				$host = 'DBH: ' . DB_HOST . ', SRV: ' . $_SERVER['SERVER_NAME'];
			}
			return $host;
		}

		/**
		 * Triggers a Filter Request Based on The needs.
		 *
		 * @param $data
		 * @param $key
		 *
		 * @return mixed
		 * @static
		 */
		private static function filter( $data, $key ) {
			return apply_filters( 'wponion_sysinfo', $data, $key );
		}

		/**
		 * Stores Basic Version Information.
		 *
		 * @static
		 */
		public static function server_information() {
			global $wpdb;
			$data                                       = array(
				__( 'Host' )             => self::get_host(),
				__( 'PHP Version' )      => PHP_VERSION,
				__( 'MySQL Version' )    => ( $wpdb->use_mysqli ) ? @mysqli_get_server_info( $wpdb->dbh ) : @mysql_get_server_info(),
				__( 'Server Info' )      => isset( $_SERVER['SERVER_SOFTWARE'] ) ? $_SERVER['SERVER_SOFTWARE'] : '',
				__( 'Default Timezone' ) => date_default_timezone_get(),
			);
			self::$status[ __( 'Server Information' ) ] = self::filter( $data, 'server_info' );
		}

		/**
		 * Stores Basic WordPress Information.
		 *
		 * @static
		 */
		public static function wordpress_information() {
			global $wpdb;
			$data                              = array(
				__( 'Home URL' )              => home_url(),
				__( 'Site URL' )              => site_url(),
				__( 'WP Version' )            => get_bloginfo( 'version' ),
				__( 'WP Debug' )              => self::is_debug(),
				__( 'WP Language' )           => ( defined( 'WPLANG' ) && WPLANG ? WPLANG : 'en_US' ),
				__( 'WP Multisite' )          => is_multisite(),
				__( 'WP Memory Limit' )       => WP_MEMORY_LIMIT . 'MB',
				__( 'WP Table Prefix' )       => $wpdb->prefix,
				__( 'WP Timezone' )           => get_option( 'timezone_string' ) . ', GMT : ' . get_option( 'gmt_offset' ),
				__( 'Permalink Structure' )   => get_option( 'permalink_structure' ),
				__( 'Registered Post Stati' ) => array_keys( get_post_stati() ),
			);
			self::$status[ __( 'WordPress' ) ] = self::filter( $data, 'wordpress' );
		}

		/**
		 * Stores PHP Information.
		 *
		 * @static
		 */
		public static function php_information() {
			$data = array(
				__( 'PHP Post Max Size' )       => ini_get( 'post_max_size' ),
				__( 'PHP Time Limit' )          => ini_get( 'max_execution_time' ),
				__( 'PHP Max Input Vars' )      => ini_get( 'max_input_vars' ),
				__( 'PHP Safe Mode' )           => ini_get( 'safe_mode' ),
				__( 'PHP Memory Limit' )        => ini_get( 'memory_limit' ),
				__( 'PHP Upload Max Size' )     => ini_get( 'upload_max_filesize' ),
				__( 'PHP Upload Max Filesize' ) => ini_get( 'upload_max_filesize' ),
				__( 'PHP Arg Separator' )       => ini_get( 'arg_separator.output' ),
				__( 'PHP Allow URL File Open' ) => ini_get( 'allow_url_fopen' ),
				__( 'DISPLAY ERRORS' )          => ini_get( 'display_errors' ),
				__( 'FSOCKOPEN' )               => ( function_exists( 'fsockopen' ) ),
				__( 'cURL' )                    => ( function_exists( 'curl_init' ) ),
				__( 'SOAP Client' )             => ( class_exists( 'SoapClient' ) ),
				__( 'SUHOSIN' )                 => ( extension_loaded( 'suhosin' ) ),
				__( 'Session' )                 => isset( $_SESSION ),
				__( 'Session Name' )            => esc_html( ini_get( 'session.name' ) ),
				__( 'Cookie Path' )             => esc_html( ini_get( 'session.cookie_path' ) ),
				__( 'Save Path' )               => esc_html( ini_get( 'session.save_path' ) ),
				__( 'Use Cookies' )             => ini_get( 'session.use_cookies' ),
				__( 'Use Only Cookies' )        => ini_get( 'session.use_only_cookies' ),
			);

			self::$status[ __( 'PHP Information' ) ] = self::filter( $data, 'php_info' );
		}

		/**
		 * Stores Active Theme Information.
		 *
		 * @static
		 */
		public static function active_theme() {
			$active_theme                         = wp_get_theme();
			$data                                 = array(
				__( 'Theme Name' )       => $active_theme->{'Name'},
				__( 'Theme Version' )    => $active_theme->{'Version'},
				__( 'Theme Author' )     => $active_theme->get( 'Author' ),
				__( 'Theme Author URI' ) => $active_theme->get( 'AuthorURI' ),
				__( 'Child Theme' )      => is_child_theme(),
			);
			self::$status[ __( 'Active Theme' ) ] = self::filter( $data, 'active_theme' );

			if ( is_child_theme() ) {
				$parent_theme                         = wp_get_theme( $active_theme->{'Template'} );
				$data                                 = array();
				$data[ __( 'Parent Theme' ) ]         = $parent_theme->{'Name'};
				$data[ __( 'Parent Theme Version' ) ] = $parent_theme->{'Version'};
				$data[ __( 'Parent URI' ) ]           = $parent_theme->get( 'ThemeURI' );
				$data[ __( 'Parent Author URI' ) ]    = $parent_theme->{'Author URI'};
				self::$status[ __( 'Active Theme' ) ] = array_merge( self::$status[ __( 'Active Theme' ) ], self::filter( $data, 'active_parent_theme' ) );
			}
		}

		/**
		 * Stores Information About MustUsePlugins.
		 *
		 * @static
		 */
		public static function must_use_plugins() {
			$muplugins = wp_get_mu_plugins();
			if ( wponion_is_array( $muplugins ) && ! empty( $muplugins ) ) {
				$data = array();
				foreach ( $muplugins as $file ) {
					$plugin = get_plugin_data( $file );
					$data[] = self::get_plugin_info( $plugin );

				}
				self::$status[ __( 'Plugins' ) ][ __( 'Must Use Plugins' ) ] = self::filter( $data, 'must_use_plugins' );
			}
		}

		/**
		 * Stores Active,Installed & Multisite Active plugin informations.
		 *
		 * @static
		 */
		public static function plugins() {
			$plugins        = get_plugins();
			$active_plugins = get_option( 'active_plugins', array() );

			if ( wponion_is_array( $plugins ) && ! empty( $plugins ) ) {
				$_plugins = array();
				$_active  = array();
				foreach ( $plugins as $plugin_path => $plugin ) {
					$txt = self::get_plugin_info( $plugin );

					if ( ! in_array( $plugin_path, $active_plugins ) ) {
						$_plugins[] = $txt;
					} else {
						$_active[] = $txt;
					}
				}

				self::$status[ __( 'Plugins' ) ][ __( 'Active' ) ]    = self::filter( $_active, 'active_plugins' );
				self::$status[ __( 'Plugins' ) ][ __( 'Installed' ) ] = self::filter( $_active, 'installed_plugins' );
			}

			if ( is_multisite() ) {
				$_plugins       = array();
				$plugins        = wp_get_active_network_plugins();
				$active_plugins = get_site_option( 'active_sitewide_plugins', array() );
				foreach ( $plugins as $plugin_path ) {
					$plugin_base = plugin_basename( $plugin_path );
					if ( ! array_key_exists( $plugin_base, $active_plugins ) ) {
						continue;
					}

					$plugin     = get_plugin_data( $plugin_path );
					$_plugins[] = self::get_plugin_info( $plugin );
				}
				self::$status[ __( 'Plugins' ) ][ __( 'Active Multisite' ) ] = self::filter( $_plugins, 'active_multisite_plugins' );
			}
		}

		/**
		 * @param $plugin
		 *
		 * @return string
		 * @static
		 */
		public static function get_plugin_info( $plugin ) {
			$r = '';

			if ( ! empty( $plugin['Title'] ) ) {
				$r .= $plugin['Title'];
			}

			if ( ! empty( $plugin['Author'] ) ) {
				$r .= ' | By : ' . $plugin['Author'];
			}
			if ( ! empty( $plugin['Version'] ) ) {
				$r .= ' | V : ' . $plugin['Version'];
			}
			return $r;
		}

		public static function self_info_data() {
			self::$status[ __( 'WPOnion' ) ] = array(
				__( 'Version ' )    => WPONION_VERSION,
				__( 'DB Version ' ) => WPONION_DB_VERSION,
				__( 'Loaded Path' ) => WPONION_PATH,
				__( 'Used By' )     => \WPOnion_Loader::$data,
			);
		}
	}
}
