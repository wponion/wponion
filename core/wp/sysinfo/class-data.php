<?php

namespace WPOnion\WP\Sysinfo;

use Exception;
use ReflectionClass;
use WPOnion_Loader;

defined( 'ABSPATH' ) || exit;

/**
 * Class Data
 *
 * @package WPOnion\WP\Sysinfo
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Data {
	/**
	 * @var array
	 */
	public static $status = array();

	/**
	 * @return array
	 */
	public static function get() {
		if ( empty( self::$status ) ) {
			self::server_information();
			self::wordpress_information();
			self::php_information();
			self::active_theme();
			self::$status[ __( 'Plugins', 'wponion' ) ] = array();
			self::plugins();
			self::must_use_plugins();
			self::self_info_data();
		}
		return apply_filters( 'wponion/sysinfo/datas', self::$status );
	}

	/**
	 * @param $key
	 *
	 * @return bool
	 */
	public static function is_defined( $key ) {
		return ( true === defined( $key ) && true === constant( $key ) );
	}

	/**
	 * @return bool|string
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
			$host = __( 'WP Engine', 'wponion' );
		} elseif ( defined( 'PAGELYBIN' ) ) {
			$host = __( 'Pagely', 'wponion' );
		} elseif ( DB_HOST === 'localhost:/tmp/mysql5.sock' ) {
			$host = __( 'ICDSoft', 'wponion' );
		} elseif ( DB_HOST === 'mysqlv5' ) {
			$host = __( 'NetworkSolutions', 'wponion' );
		} elseif ( strpos( DB_HOST, 'ipagemysql.com' ) !== false ) {
			$host = __( 'iPage', 'wponion' );
		} elseif ( strpos( DB_HOST, 'ipowermysql.com' ) !== false ) {
			$host = __( 'IPower', 'wponion' );
		} elseif ( strpos( DB_HOST, '.gridserver.com' ) !== false ) {
			$host = __( 'MediaTemple Grid', 'wponion' );
		} elseif ( strpos( DB_HOST, '.pair.com' ) !== false ) {
			$host = __( 'Pair Networks', 'wponion' );
		} elseif ( strpos( DB_HOST, '.stabletransit.com' ) !== false ) {
			$host = __( 'Rackspace Cloud', 'wponion' );
		} elseif ( strpos( DB_HOST, '.sysfix.eu' ) !== false ) {
			$host = __( 'SysFix.eu Power Hosting', 'wponion' );
		} elseif ( false !== strpos( $_SERVER['SERVER_NAME'], 'Flywheel' ) ) {
			$host = __( 'Flywheel', 'wponion' );
		} else {
			$host = 'DBH - ' . DB_HOST . ', SRV - ' . $_SERVER['SERVER_NAME'];
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
	 */
	private static function filter( $data, $key ) {
		return apply_filters( 'wponion/sysinfo/data', $data, $key );
	}

	/**
	 * Stores Basic Version Information.
	 */
	public static function server_information() {
		global $wpdb;
		self::$status[ __( 'Server Information', 'wponion' ) ] = self::filter( array(
			__( 'Host', 'wponion' )             => self::get_host(),
			__( 'PHP Version', 'wponion' )      => PHP_VERSION,
			__( 'MySQL Version', 'wponion' )    => $wpdb->db_version(),
			__( 'Server Info', 'wponion' )      => isset( $_SERVER['SERVER_SOFTWARE'] ) ? $_SERVER['SERVER_SOFTWARE'] : '',
			__( 'Default Timezone', 'wponion' ) => date_default_timezone_get(),
		), 'server_info' );
	}

	/**
	 * Stores Basic WordPress Information.
	 */
	public static function wordpress_information() {
		global $wpdb;
		self::$status[ __( 'WordPress', 'wponion' ) ] = self::filter( array(
			__( 'Home URL', 'wponion' )              => home_url(),
			__( 'Site URL', 'wponion' )              => site_url(),
			__( 'WP Version', 'wponion' )            => get_bloginfo( 'version' ),
			__( 'WP Debug', 'wponion' )              => self::is_debug(),
			__( 'WP Language', 'wponion' )           => ( defined( 'WPLANG' ) && WPLANG ? WPLANG : 'en_US' ),
			__( 'WP Multisite', 'wponion' )          => is_multisite(),
			__( 'WP Memory Limit', 'wponion' )       => WP_MEMORY_LIMIT . 'MB',
			__( 'WP Table Prefix', 'wponion' )       => $wpdb->prefix,
			__( 'WP Timezone', 'wponion' )           => get_option( 'timezone_string' ) . ', GMT : ' . get_option( 'gmt_offset' ),
			__( 'Permalink Structure', 'wponion' )   => get_option( 'permalink_structure' ),
			__( 'Registered Post Stati', 'wponion' ) => array_keys( get_post_stati() ),
		), 'wordpress' );
	}

	/**
	 * Stores PHP Information.
	 */
	public static function php_information() {
		self::$status[ __( 'PHP Information', 'wponion' ) ] = self::filter( array(
			__( 'PHP Post Max Size', 'wponion' )       => ini_get( 'post_max_size' ),
			__( 'PHP Time Limit', 'wponion' )          => ini_get( 'max_execution_time' ),
			__( 'PHP Max Input Vars', 'wponion' )      => ini_get( 'max_input_vars' ),
			__( 'PHP Memory Limit', 'wponion' )        => ini_get( 'memory_limit' ),
			__( 'PHP Upload Max Size', 'wponion' )     => ini_get( 'upload_max_filesize' ),
			__( 'PHP Upload Max Filesize', 'wponion' ) => ini_get( 'upload_max_filesize' ),
			__( 'PHP Arg Separator', 'wponion' )       => ini_get( 'arg_separator.output' ),
			__( 'PHP Allow URL File Open', 'wponion' ) => ini_get( 'allow_url_fopen' ),
			__( 'DISPLAY ERRORS', 'wponion' )          => ini_get( 'display_errors' ),
			__( 'FSOCKOPEN', 'wponion' )               => ( function_exists( 'fsockopen' ) ),
			__( 'cURL', 'wponion' )                    => ( function_exists( 'curl_init' ) ),
			__( 'SOAP Client', 'wponion' )             => ( class_exists( 'SoapClient' ) ),
			__( 'SUHOSIN', 'wponion' )                 => ( extension_loaded( 'suhosin' ) ),
			__( 'Session', 'wponion' )                 => isset( $_SESSION ),
			__( 'Session Name', 'wponion' )            => esc_html( ini_get( 'session.name' ) ),
			__( 'Cookie Path', 'wponion' )             => esc_html( ini_get( 'session.cookie_path' ) ),
			__( 'Save Path', 'wponion' )               => esc_html( ini_get( 'session.save_path' ) ),
			__( 'Use Cookies', 'wponion' )             => ini_get( 'session.use_cookies' ),
			__( 'Use Only Cookies', 'wponion' )        => ini_get( 'session.use_only_cookies' ),
		), 'php_info' );
	}

	/**
	 * Stores Active Theme Information.
	 */
	public static function active_theme() {
		$active_theme                                    = wp_get_theme();
		self::$status[ __( 'Active Theme', 'wponion' ) ] = self::filter( array(
			__( 'Theme Name', 'wponion' )       => $active_theme->{'Name'},
			__( 'Theme Version', 'wponion' )    => $active_theme->{'Version'},
			__( 'Theme Author', 'wponion' )     => $active_theme->get( 'Author' ),
			__( 'Theme Author URI', 'wponion' ) => $active_theme->get( 'AuthorURI' ),
			__( 'Child Theme', 'wponion' )      => is_child_theme(),
		), 'active_theme' );

		if ( is_child_theme() ) {
			$parent_theme                                    = wp_get_theme( $active_theme->{'Template'} );
			$data                                            = array();
			$data[ __( 'Parent Theme', 'wponion' ) ]         = $parent_theme->{'Name'};
			$data[ __( 'Parent Theme Version', 'wponion' ) ] = $parent_theme->{'Version'};
			$data[ __( 'Parent URI', 'wponion' ) ]           = $parent_theme->get( 'ThemeURI' );
			$data[ __( 'Parent Author URI', 'wponion' ) ]    = $parent_theme->{'Author URI'};
			self::$status[ __( 'Active Theme', 'wponion' ) ] = wponion_parse_args( self::$status[ __( 'Active Theme', 'wponion' ) ], self::filter( $data, 'active_parent_theme' ) );
		}
	}

	/**
	 * Stores Information About MustUsePlugins.
	 */
	public static function must_use_plugins() {
		$muplugins = wp_get_mu_plugins();
		if ( wponion_is_array( $muplugins ) && ! empty( $muplugins ) ) {
			$data = array();
			foreach ( $muplugins as $file ) {
				$plugin = get_plugin_data( $file );
				$data[] = self::get_plugin_info( $plugin );

			}
			self::$status[ __( 'Plugins', 'wponion' ) ][ __( 'Must Use Plugins', 'wponion' ) ] = self::filter( $data, 'must_use_plugins' );
		}
	}

	/**
	 * Stores Active,Installed & Multisite Active plugin informations.
	 */
	public static function plugins() {
		$plugins        = get_plugins();
		$active_plugins = get_option( 'active_plugins', array() );

		if ( wponion_is_array( $plugins ) && ! empty( $plugins ) ) {
			$_plugins = array();
			$_active  = array();
			foreach ( $plugins as $plugin_path => $plugin ) {
				$txt = self::get_plugin_info( $plugin, $plugin_path );

				if ( ! in_array( $plugin_path, $active_plugins, true ) ) {
					$_plugins[] = $txt;
				} else {
					$_active[] = $txt;
				}
			}

			self::$status[ __( 'Plugins', 'wponion' ) ][ __( 'Active', 'wponion' ) ]    = self::filter( $_active, 'active_plugins' );
			self::$status[ __( 'Plugins', 'wponion' ) ][ __( 'Installed', 'wponion' ) ] = self::filter( $_plugins, 'installed_plugins' );
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
				$_plugins[] = self::get_plugin_info( $plugin, $plugin_base );
			}
			self::$status[ __( 'Plugins', 'wponion' ) ][ __( 'Active Multisite', 'wponion' ) ] = self::filter( $_plugins, 'active_multisite_plugins' );
		}
	}

	/**
	 * @param        $plugin
	 * @param string $base_file
	 *
	 * @return array
	 */
	public static function get_plugin_info( $plugin, $base_file = '' ) {
		return array( $base_file => $plugin );
	}

	/**
	 * WPOnion Information.
	 */
	public static function self_info_data() {
		$main_file = null;

		try {
			$reflector = new ReflectionClass( 'WPOnion_Loader' );
			$main_file = $reflector->getFileName();
		} catch ( Exception $exception ) {
			$main_file = '<span class="wpoic-no"></span> Unable To Find The Main File Path';
		}

		$version = array();

		if ( is_array( WPOnion_Loader::$data ) && ! empty( WPOnion_Loader::$data ) ) {
			foreach ( WPOnion_Loader::$data as $v => $file ) {
				$version[] = $v . ' : ' . $file;
			}
		}

		self::$status[ __( 'WPOnion', 'wponion' ) ] = array(
			__( 'Loader File', 'wponion' )      => $main_file,
			__( 'Loaded Version', 'wponion' )   => WPONION_VERSION,
			__( 'Loaded Path', 'wponion' )      => wponion()->path(),
			__( 'Avaiable Version', 'wponion' ) => $version,
		);

		$data      = 'all';
		$instances = wponion_settings_registry( $data );

		if ( is_array( $instances ) && ! empty( $instances ) ) {
			self::$status[ __( 'Site Settings', 'wponion' ) ] = array();
			/* @var \WPOnion\Modules\Settings\Settings $instance */
			foreach ( $instances as $instance ) {
				$options = get_option( $instance->unique(), array() );
				if ( ! empty( $options ) ) {
					self::$status[ __( 'Site Settings', 'wponion' ) ][ $instance->unique() ] = wp_json_encode( $options );
				}
			}
		}

		$instances = wponion_network_settings_registry( $data );

		if ( is_array( $instances ) && ! empty( $instances ) ) {
			self::$status[ __( 'Network Settings', 'wponion' ) ] = array();
			/* @var \WPOnion\Modules\Settings\Network $instance */
			foreach ( $instances as $instance ) {
				$options = get_site_option( $instance->unique(), array() );
				if ( ! empty( $options ) ) {
					self::$status[ __( 'Network Settings', 'wponion' ) ][ $instance->unique() ] = wp_json_encode( $options );
				}
			}
		}
	}
}
