<?php

namespace WPOnion\Helpers;

defined( 'ABSPATH' ) || exit;

/**
 * Class Array_Access
 *
 * @package WPOnion\Helpers
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @since 1.5
 */
class Array_Access {
	/**
	 * @param $keys
	 *
	 * @return bool
	 * @since 1.5
	 */
	public static function is_array_access_keys( $keys ) {
		return ( is_string( $keys ) && false !== strpos( $keys, '/' ) );
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
	protected static function _array_key_get( $keys, $array_or_object, $default = null, $delimiter = '/' ) {
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
			return ( $is_object ) ? self::_array_key_get( $keys, $array_or_object->{$key_or_property}, $default ) : self::_array_key_get( $keys, $array_or_object[ $key_or_property ], $default );
		} else {
			return ( $is_object ) ? $array_or_object->{$key_or_property} : $array_or_object[ $key_or_property ];
		}
	}

	/**
	 * Recursively find a key's value in array
	 *
	 * @param string       $keys 'a/b/c'
	 * @param array|object $array_or_object
	 * @param null|mixed   $default
	 * @param string       $delimiter
	 *
	 * @return mixed|null
	 * @since 1.5
	 */
	public static function array_key_get( $keys, $array_or_object, $default = null, $delimiter = '/' ) {
		if ( ! self::is_array_access_keys( $keys ) ) {
			if ( is_object( $array_or_object ) && property_exists( $array_or_object, $keys ) ) {
				return $array_or_object->{$keys};
			}

			if ( is_array( $array_or_object ) && array_key_exists( $keys, $array_or_object ) ) {
				return $array_or_object[ $keys ];
			}
			return $default;
		}
		return self::_array_key_get( $keys, $array_or_object, $default, $delimiter );
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
	protected static function _array_key_set( $keys, $value, &$array_or_object, $delimiter = '/' ) {
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
			return ( $is_object ) ? self::_array_key_set( $keys, $value, $array_or_object->{$key_or_property}, $delimiter ) : self::_array_key_set( $keys, $value, $array_or_object[ $key_or_property ], $delimiter );
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
	 * Set (or create if not exists) value for specified key in some array level
	 *
	 * @param string       $keys
	 * @param mixed        $value
	 * @param array|object $array_or_object
	 * @param string       $delimiter
	 *
	 * @return array|object
	 */
	public static function array_key_set( $keys, $value, &$array_or_object, $delimiter = '/' ) {
		if ( ! self::is_array_access_keys( $keys ) ) {
			if ( is_object( $array_or_object ) ) {
				$array_or_object->{$keys} = $value;
			}

			if ( is_array( $array_or_object ) ) {
				$array_or_object[ $keys ] = $value;
			}
			return $array_or_object;
		}
		return self::_array_key_set( $keys, $value, $array_or_object, $delimiter );
	}

	/**
	 * Recursively Checks if a key's isset in array
	 *
	 * @param               $keys
	 * @param               $array_or_object
	 * @param string        $delimiter
	 *
	 * @return bool
	 */
	public static function _array_key_isset( $keys, $array_or_object, $delimiter = '/' ) {
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
			return ( $is_object ) ? self::_array_key_isset( $keys, $array_or_object->{$key_or_property}, $delimiter ) : self::_array_key_isset( $keys, $array_or_object[ $key_or_property ], $delimiter );
		} else {
			return ( $is_object ) ? isset( $array_or_object->{$key_or_property} ) : isset( $array_or_object[ $key_or_property ] );
		}
	}

	/**
	 * Recursively Checks if a key's isset in array
	 *
	 * @param               $keys
	 * @param               $array_or_object
	 * @param string        $delimiter
	 *
	 * @return bool
	 */
	public static function array_key_isset( $keys, $array_or_object, $delimiter = '/' ) {
		if ( ! self::is_array_access_keys( $keys ) ) {
			if ( is_object( $array_or_object ) && property_exists( $array_or_object, $keys ) ) {
				return true;
			}
			return ( is_array( $array_or_object ) && array_key_exists( $keys, $array_or_object ) );
		}
		return self::_array_key_isset( $keys, $array_or_object, $delimiter );
	}

	/**
	 * Unset specified key in some array level
	 *
	 * @param string       $keys
	 * @param array|object $array_or_object
	 * @param string       $delimiter
	 *
	 * @return array|object
	 */
	public static function _array_key_unset( $keys, &$array_or_object, $delimiter = '/' ) {
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
			return ( $is_object ) ? self::_array_key_unset( $keys, $array_or_object->{$key_or_property}, $delimiter ) : self::_array_key_unset( $keys, $array_or_object[ $key_or_property ], $delimiter );
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
	 * Unset specified key in some array level
	 *
	 * @param string       $keys
	 * @param array|object $array_or_object
	 * @param string       $delimiter
	 *
	 * @return array|object
	 */
	public static function array_key_unset( $keys, &$array_or_object, $delimiter = '/' ) {
		if ( ! self::is_array_access_keys( $keys ) ) {
			if ( is_object( $array_or_object ) && property_exists( $array_or_object, $keys ) ) {
				unset( $array_or_object->{$keys} );
			}
			if ( is_array( $array_or_object ) && array_key_exists( $keys, $array_or_object ) ) {
				unset( $array_or_object[ $keys ] );
			}
			return $array_or_object;
		}
		return self::_array_key_unset( $keys, $array_or_object, $delimiter );
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

}
