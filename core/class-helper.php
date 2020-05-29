<?php

namespace WPOnion;

use stdClass;
use WPOnion\Exception\Cache_Not_Found;

defined( 'ABSPATH' ) || exit;

/**
 * Class Helper
 *
 * @package WPOnion
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Helper {
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
	 * @static
	 */
	public static function get_data( $file ) {
		return include wponion()->data( $file . '.php' );
	}

	/**
	 * Returns Internal Array Data.
	 *
	 * @static
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
	 * @static
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
	 * @static
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
	 * @static
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
	 * @static
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
	 * @static
	 */
	public static function get_currency() {
		return self::get_currencies( 'list' );
	}

	/**
	 * Returns Currency Symbol.
	 *
	 * @return array
	 * @static
	 */
	public static function get_currency_symbol() {
		return self::get_currencies( 'symbol' );
	}

	/**
	 * Recursively find a key's value in array
	 *
	 * @param string       $keys 'a/b/c'
	 * @param array|object $array_or_object
	 * @param null|mixed   $default
	 * @param string       $delimiter
	 *
	 * @return mixed
	 */
	public static function array_key_get( $keys, $array_or_object, $default = null, $delimiter = '/' ) {
		if ( ! is_array( $keys ) ) {
			$keys = explode( $delimiter, (string) $keys );
		}
		$array_or_object = ( wponion_is_callable( $array_or_object ) ) ? wponion_callback( $array_or_object ) : $array_or_object;
		$key_or_property = array_shift( $keys );
		$is_object       = is_object( $array_or_object );

		if ( null === $key_or_property ) {
			return ( wponion_is_callable( $default ) ) ? wponion_callback( $default ) : $default;
		}

		if ( $is_object && ! property_exists( $array_or_object, $key_or_property ) ) {
			return ( wponion_is_callable( $default ) ) ? wponion_callback( $default ) : $default;
		} elseif ( ! is_array( $array_or_object ) || ! array_key_exists( $key_or_property, $array_or_object ) ) {
			return ( wponion_is_callable( $default ) ) ? wponion_callback( $default ) : $default;
		}

		if ( isset( $keys[0] ) ) {
			return ( $is_object ) ? self::array_key_get( $keys, $array_or_object->{$key_or_property}, $default ) : self::array_key_get( $keys, $array_or_object[ $key_or_property ], $default );
		} else {
			return ( $is_object ) ? $array_or_object->{$key_or_property} : $array_or_object[ $key_or_property ];
		}
	}

	/**
	 * Recursively Checks if a key's isset in array
	 *
	 * @param               $keys
	 * @param               $array_or_object
	 * @param string        $delimiter
	 *
	 * @static
	 * @return bool
	 */
	public static function array_key_isset( $keys, $array_or_object, $delimiter = '/' ) {
		if ( ! is_array( $keys ) ) {
			$keys = explode( $delimiter, (string) $keys );
		}
		$array_or_object = ( wponion_is_callable( $array_or_object ) ) ? wponion_callback( $array_or_object ) : $array_or_object;
		$key_or_property = array_shift( $keys );
		$is_object       = is_object( $array_or_object );

		if ( null === $key_or_property ) {
			return false;
		}

		if ( $is_object && ! property_exists( $array_or_object, $key_or_property ) ) {
			return false;
		} elseif ( ! is_array( $array_or_object ) || ! array_key_exists( $key_or_property, $array_or_object ) ) {
			return false;
		}

		if ( isset( $keys[0] ) ) {
			return ( $is_object ) ? self::array_key_isset( $keys, $array_or_object->{$key_or_property}, $delimiter ) : self::array_key_isset( $keys, $array_or_object[ $key_or_property ], $delimiter );
		} else {
			return ( $is_object ) ? isset( $array_or_object->{$key_or_property} ) : isset( $array_or_object[ $key_or_property ] );
		}
	}

	/**
	 * Set (or create if not exists) value for specified key in some array level
	 *
	 * @param string       $keys 'a/b/c', or 'a/b/c/' equivalent to: $arr['a']['b']['c'][] = $val;
	 * @param mixed        $value
	 * @param array|object $array_or_object
	 * @param string       $delimiter
	 *
	 * @return array|object
	 */
	public static function array_key_set( $keys, $value, &$array_or_object, $delimiter = '/' ) {
		if ( ! is_array( $keys ) ) {
			$keys = explode( $delimiter, (string) $keys );
		}
		$key_or_property = array_shift( $keys );
		if ( null === $key_or_property ) {
			return $array_or_object;
		}
		$is_object = is_object( $array_or_object );
		if ( $is_object ) {
			if ( ! property_exists( $array_or_object, $key_or_property ) || ! ( is_array( $array_or_object->{$key_or_property} ) || is_object( $array_or_object->{$key_or_property} ) ) ) {
				if ( '' === $key_or_property ) {
					trigger_error( 'Cannot push value to object like in array ($arr[] = $val)', E_USER_WARNING );
				} else {
					$array_or_object->{$key_or_property} = array();
				}
			}
		} else {
			if ( ! is_array( $array_or_object ) ) {
				$array_or_object = array();
			}
			if ( ! array_key_exists( $key_or_property, $array_or_object ) || ! is_array( $array_or_object[ $key_or_property ] ) ) {
				if ( '' === $key_or_property ) {
					$array_or_object[] = array();
					end( $array_or_object );
					$key_or_property = key( $array_or_object );
				} else {
					$array_or_object[ $key_or_property ] = array();
				}
			}
		}
		if ( isset( $keys[0] ) ) { // not used count() for performance reasons
			return ( $is_object ) ? self::array_key_set( $keys, $value, $array_or_object->{$key_or_property}, $delimiter ) : self::array_key_set( $keys, $value, $array_or_object[ $key_or_property ], $delimiter );
		} else {
			if ( $is_object ) {
				$array_or_object->{$key_or_property} = $value;
			} else {
				$array_or_object[ $key_or_property ] = $value;
			}
		}
		return $array_or_object;
	}

	/**
	 * Unset specified key in some array level
	 *
	 * @param string       $keys 'a/b/c' -> unset($arr['a']['b']['c']);
	 * @param array|object $array_or_object
	 * @param string       $delimiter
	 *
	 * @return array|object
	 */
	public static function array_key_unset( $keys, &$array_or_object, $delimiter = '/' ) {
		if ( ! is_array( $keys ) ) {
			$keys = explode( $delimiter, (string) $keys );
		}
		$key_or_property = array_shift( $keys );
		if ( null === $key_or_property || '' === $key_or_property ) {
			return $array_or_object;
		}
		$is_object = is_object( $array_or_object );
		if ( $is_object ) {
			if ( ! property_exists( $array_or_object, $key_or_property ) ) {
				return $array_or_object;
			}
		} else {
			if ( ! is_array( $array_or_object ) || ! array_key_exists( $key_or_property, $array_or_object ) ) {
				return $array_or_object;
			}
		}
		if ( isset( $keys[0] ) ) { // not used count() for performance reasons
			return ( $is_object ) ? self::array_key_unset( $keys, $array_or_object->{$key_or_property}, $delimiter ) : self::array_key_unset( $keys, $array_or_object[ $key_or_property ], $delimiter );
		} else {
			if ( $is_object ) {
				unset( $array_or_object->{$key_or_property} );
			} else {
				unset( $array_or_object[ $key_or_property ] );
			}
		}
		return $array_or_object;
	}

	/**
	 * Inserts a new key/value before the key in the array.
	 *
	 * @param string $key The key to insert before.
	 * @param array  $array An array to insert in to.
	 * @param string $new_key The key to insert.
	 * @param mixed  $new_value An value to insert.
	 *
	 * @return array|boolean|bool The new array if the key exists, FALSE otherwise.
	 */
	public static function array_insert_before( $key, array &$array, $new_key, $new_value ) {
		if ( array_key_exists( $key, $array ) ) {
			$new = array();
			foreach ( $array as $k => $value ) {
				if ( $k === $key ) {
					$new[ $new_key ] = $new_value;
				}
				$new[ $k ] = $value;
			}
			return $new;
		}
		return false;
	}

	/**
	 * Inserts a new key/value after the key in the array.
	 *
	 * @param string $key The key to insert after.
	 * @param array  $array An array to insert in to.
	 * @param string $new_key The key to insert.
	 * @param mixed  $new_value An value to insert.
	 *
	 * @return array|mixed The new array if the key exists, FALSE otherwise.
	 */
	public static function array_insert_after( $key, array &$array, $new_key, $new_value ) {
		if ( array_key_exists( $key, $array ) ) {
			$new = array();
			foreach ( $array as $k => $value ) {
				$new[ $k ] = $value;
				if ( $k === $key ) {
					$new[ $new_key ] = $new_value;
				}
			}
			return $new;
		}
		return false;
	}

	/**
	 * Start the WordPress micro-timer.
	 *
	 * @param string $key Unique Timer Key.
	 *
	 * @static
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
	 * @static
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
