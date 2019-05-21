<?php
/**
 *
 * Initial version created 28-05-2018 / 10:02 AM
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @package
 * @link
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

namespace WPOnion;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Helper' ) ) {
	/**
	 * Class Helper
	 *
	 * @package WPOnion
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Helper {
		/**
		 * gfonts
		 *
		 * @var array
		 */
		protected static $gfonts = array();

		/**
		 * Stores Cache.
		 *
		 * @var array
		 */
		protected static $cache = array();

		/**
		 * Gets And Returns File information.
		 *
		 * @param $file
		 *
		 * @return mixed
		 * @static
		 */
		public static function get_data( $file ) {
			return include WPONION_PATH . 'data/' . $file . '.php';
		}

		/**
		 * Gets an array of material-design colors.
		 *
		 * @static
		 * @access public
		 *
		 * @param string $context Allows us to get subsets of the palette.
		 *
		 * @return array
		 */
		public static function get_material_design_colors( $context = 'primary' ) {
			$colors = self::get_data( 'material_colors' );
			switch ( $context ) {
				case '50':
				case '100':
				case '200':
				case '300':
				case '400':
				case '500':
				case '600':
				case '700':
				case '800':
				case '900':
				case 'A100':
				case 'A200':
				case 'A400':
				case 'A700':
					$key = absint( $context ) / 100;
					if ( 'A100' === $context ) {
						$key = 10;
						unset( $colors['grey'] );
					} elseif ( 'A200' === $context ) {
						$key = 11;
						unset( $colors['grey'] );
					} elseif ( 'A400' === $context ) {
						$key = 12;
						unset( $colors['grey'] );
					} elseif ( 'A700' === $context ) {
						$key = 13;
						unset( $colors['grey'] );
					}
					unset( $colors['primary'] );
					$position_colors = array();
					foreach ( $colors as $color_family ) {
						if ( isset( $color_family[ $key ] ) ) {
							$position_colors[] = $color_family[ $key ];
						}
					}
					return $position_colors;
				case 'all':
					unset( $colors['primary'] );
					$all_colors = array();
					foreach ( $colors as $color_family ) {
						foreach ( $color_family as $color ) {
							$all_colors[] = $color;
						}
					}
					return $all_colors;
				case 'primary':
					return $colors['primary'];
				default:
					if ( isset( $colors[ $context ] ) ) {
						return $colors[ $context ];
					}
					return $colors['primary'];
			}
		}

		/**
		 * Fetch And Returns Google Fonts.
		 *
		 * @return array|mixed
		 * @static
		 */
		public static function google_fonts() {
			if ( empty( self::$gfonts ) ) {
				self::$gfonts = self::get_data( 'google_fonts' );
			}
			return self::$gfonts;
		}

		/**
		 * Retrives Cache Data.
		 *
		 * @param bool $key
		 * @param bool $default
		 *
		 * @return bool|mixed
		 * @static
		 */
		public static function get_cache( $key = false, $default = false ) {
			if ( isset( self::$cache[ $key ] ) ) {
				return self::$cache[ $key ];
			}
			return $default;
		}

		/**
		 * Stores Cache.
		 *
		 * @param bool $key
		 * @param bool $data
		 *
		 * @static
		 */
		public static function set_cache( $key = false, $data = false ) {
			self::$cache[ $key ] = $data;
		}

		/**
		 * Checks If Cache Exists.
		 *
		 * @param $key
		 *
		 * @return bool
		 * @static
		 */
		public static function has_cache( $key ) {
			return ( isset( self::$cache[ $key ] ) );
		}

		/**
		 * Returns A List Of Post Types.
		 *
		 * @return array
		 * @static
		 */
		public static function get_post_types() {
			if ( false === self::has_cache( 'post_types' ) ) {
				$options    = array();
				$post_types = get_post_types( array( 'show_in_nav_menus' => true ) );
				if ( ! is_wp_error( $post_types ) && ! empty( $post_types ) ) {
					foreach ( $post_types as $post_type ) {
						$options [ $post_type ] = ucfirst( $post_type );
					}
				}
				self::set_cache( 'post_types', $options );
			}
			return self::get_cache( 'post_types', array() );
		}

		/**
		 * Returns Full Currency List.
		 *
		 * @return array
		 * @static
		 */
		public static function get_currency() {
			if ( false === self::has_cache( 'currency' ) ) {
				$data = self::get_data( 'currency' );
				if ( isset( $data['currency'] ) && ! empty( $data['currency'] ) ) {
					foreach ( $data['currency'] as $key => $val ) {
						if ( isset( $data['symbol'][ $key ] ) ) {
							$data['currency'][ $key ] = $data['currency'][ $key ] . ' ( ' . $data['symbol'][ $key ] . ' ) ';
						}
					}
					self::set_cache( 'currency', $data['currency'] );
				}
			}
			return self::get_cache( 'currency', array() );
		}

		/**
		 * Returns Currency Symbol.
		 *
		 * @return array
		 * @static
		 */
		public static function get_currency_symbol() {
			if ( false === self::has_cache( 'currency_symbol' ) ) {
				$data = self::get_data( 'currency' );
				if ( isset( $data['symbol'] ) ) {
					self::set_cache( 'currency_symbol', $data['symbol'] );
				}
			}
			return self::get_cache( 'currency_symbol', array() );
		}

		/**
		 * Recursively find a key's value in array
		 *
		 * @param string       $keys 'a/b/c'
		 * @param array|object $array_or_object
		 * @param null|mixed   $default_value
		 * @param string       $keys_delimiter
		 *
		 * @return mixed
		 */
		public static function array_key_get( $keys, $array_or_object, $default_value = null, $keys_delimiter = '/' ) {
			if ( ! is_array( $keys ) ) {
				$keys = explode( $keys_delimiter, (string) $keys );
			}
			$array_or_object = ( wponion_is_callable( $array_or_object ) ) ? wponion_callback( $array_or_object ) : $array_or_object;
			$key_or_property = array_shift( $keys );
			$is_object       = is_object( $array_or_object );

			if ( null === $key_or_property ) {
				return ( wponion_is_callable( $default_value ) ) ? wponion_callback( $default_value ) : $default_value;
			}

			if ( $is_object && ! property_exists( $array_or_object, $key_or_property ) ) {
				return ( wponion_is_callable( $default_value ) ) ? wponion_callback( $default_value ) : $default_value;
			} elseif ( ! is_array( $array_or_object ) || ! array_key_exists( $key_or_property, $array_or_object ) ) {
				return ( wponion_is_callable( $default_value ) ) ? wponion_callback( $default_value ) : $default_value;
			}

			if ( isset( $keys[0] ) ) {
				return ( $is_object ) ? self::array_key_get( $keys, $array_or_object->{$key_or_property}, $default_value ) : self::array_key_get( $keys, $array_or_object[ $key_or_property ], $default_value );
			} else {
				return ( $is_object ) ? $array_or_object->{$key_or_property} : $array_or_object[ $key_or_property ];
			}
		}

		/**
		 * Set (or create if not exists) value for specified key in some array level
		 *
		 * @param string       $keys 'a/b/c', or 'a/b/c/' equivalent to: $arr['a']['b']['c'][] = $val;
		 * @param mixed        $value
		 * @param array|object $array_or_object
		 * @param string       $keys_delimiter
		 *
		 * @return array|object
		 */
		public static function array_key_set( $keys, $value, &$array_or_object, $keys_delimiter = '/' ) {
			if ( ! is_array( $keys ) ) {
				$keys = explode( $keys_delimiter, (string) $keys );
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
						// this happens when use 'empty keys' like: abc.d.e....i.j..foo.
						$array_or_object[] = array();
						// get auto created key (last)
						end( $array_or_object );
						$key_or_property = key( $array_or_object );
					} else {
						$array_or_object[ $key_or_property ] = array();
					}
				}
			}
			if ( isset( $keys[0] ) ) { // not used count() for performance reasons
				if ( $is_object ) {
					self::array_key_set( $keys, $value, $array_or_object->{$key_or_property} );
				} else {
					self::array_key_set( $keys, $value, $array_or_object[ $key_or_property ] );
				}
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
		 * @param string       $keys_delimiter
		 *
		 * @return array|object
		 */
		public static function array_key_unset( $keys, &$array_or_object, $keys_delimiter = '/' ) {
			if ( ! is_array( $keys ) ) {
				$keys = explode( $keys_delimiter, (string) $keys );
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
				if ( $is_object ) {
					self::array_key_unset( $keys, $array_or_object->{$key_or_property} );
				} else {
					self::array_key_unset( $keys, $array_or_object[ $key_or_property ] );
				}
			} else {
				if ( $is_object ) {
					unset( $array_or_object->{$key_or_property} );
				} else {
					unset( $array_or_object[ $key_or_property ] );
				}
			}
			return $array_or_object;
		}
	}
}
