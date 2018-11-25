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
	}
}
