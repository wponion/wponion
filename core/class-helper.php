<?php

namespace WPOnion;

use stdClass;
use WPOnion\Exception\Cache_Not_Found;
use WPOnion\Helpers\Array_Access;

defined( 'ABSPATH' ) || exit;

/**
 * Class Helper
 *
 * @package WPOnion
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Helper extends Array_Access {
	/**
	 * Stores Timer Information.
	 *
	 * @var array
	 */
	protected static $timer = array();

	/**
	 * Gets And Returns File information.
	 *
	 * @param $file
	 *
	 * @return mixed
	 */
	public static function get_data( $file ) {
		return include wponion()->data( $file . '.php' );
	}

	/**
	 * Returns Internal Array Data.
	 *
	 * @return array
	 */
	public static function get_internal_options() {
		try {
			return wponion_get_cache( 'internal-options' );
		} catch ( Cache_Not_Found $exception ) {
			$options = self::get_data( 'internal-options' );
			$exception->set( $options );
			return $options;
		}
	}

	/**
	 * Reads JSON file and returns its content
	 *
	 * @param string $file File Path
	 * @param bool   $as_array
	 *
	 * @return array|object
	 */
	public static function read_json_file( $file, $as_array = false ) {
		if ( file_exists( $file ) ) {
			$content = file_get_contents( $file );
			if ( ! empty( $content ) ) {
				$content = json_decode( $content, $as_array );
				if ( $as_array ) {
					return ( is_array( $content ) ) ? $content : array();
				}
				return ( is_object( $content ) ) ? $content : new stdClass();
			}
		}
		return ( $as_array ) ? array() : new stdClass();
	}

	/**
	 * Fetches Bundled Font Info.
	 *
	 * @param string $type [google/websafe/backup]
	 *
	 * @return mixed
	 */
	public static function fonts( $type ) {
		try {
			return wponion_get_cache( 'fonts/' . $type );
		} catch ( Cache_Not_Found $exception ) {
			$fonts = array();
			switch ( $type ) {
				case 'google':
					$fonts = self::get_data( 'fonts/google' );
					break;
				case 'websafe':
					$fonts = self::get_data( 'fonts/websafe' );
					break;
				case 'backup':
					$fonts = self::get_data( 'fonts/backups' );
					break;
			}
			$exception->set( $fonts );
			return $fonts;
		}
	}

	/**
	 * Returns A List Of Post Types.
	 *
	 * @return array
	 */
	public static function get_post_types() {
		try {
			return wponion_get_cache( 'post_types' );
		} catch ( Cache_Not_Found $exception ) {
			$post_types = get_post_types( array( 'show_in_nav_menus' => true ) );
			if ( ! is_wp_error( $post_types ) && ! empty( $post_types ) ) {
				$post_types = array_map( 'ucfirst', $post_types );
			}
			$exception->set( $post_types );
			return $post_types;
		}
	}

	/**
	 * Fetches All Currencies List.
	 *
	 * @param string $type [list,symbol]
	 *
	 * @return mixed
	 */
	public static function get_currencies( $type ) {
		try {
			return wponion_get_cache( 'currency/' . $type );
		} catch ( Cache_Not_Found $exception ) {
			$data = wp_parse_args( self::get_data( 'currency' ), array(
				'currency'        => array(),
				'currency_symbol' => array(),
			) );
			foreach ( $data['currency'] as $key => $val ) {
				if ( isset( $data['symbol'][ $key ] ) ) {
					$data['currency'][ $key ] = $data['currency'][ $key ] . ' ( ' . $data['symbol'][ $key ] . ' ) ';
				}
			}
			wponion_set_cache( 'currency/list', $data['currency'] );
			wponion_set_cache( 'currency/symbol', $data['symbol'] );
			$type = ( 'list' === $type ) ? 'currency' : $type;
			return isset( $data[ $type ] ) ? $data[ $type ] : false;
		}
	}

	/**
	 * Returns Full Currency List.
	 *
	 * @return array
	 */
	public static function get_currency() {
		return self::get_currencies( 'list' );
	}

	/**
	 * Returns Currency Symbol.
	 *
	 * @return array
	 */
	public static function get_currency_symbol() {
		return self::get_currencies( 'symbol' );
	}

	/**
	 * Start the WordPress micro-timer.
	 *
	 * @param string $key Unique Timer Key.
	 *
	 * @return mixed
	 */
	public static function timer_start( $key ) {
		self::$timer[ $key ] = microtime( true );
		return self::$timer[ $key ];
	}

	/**
	 * Retrieve or display the time from the page start to when function is called.
	 *
	 * @param string $key Unqiue Timer Key.
	 * @param int    $precision
	 *
	 * @return bool|string
	 */
	public static function timer_stop( $key = '', $precision = 3 ) {
		if ( isset( self::$timer[ $key ] ) ) {
			$timetotal = microtime( true ) - self::$timer[ $key ];
			return ( function_exists( 'number_format_i18n' ) ) ? number_format_i18n( $timetotal, $precision ) : number_format( $timetotal, $precision );
		}
		return false;
	}
}
