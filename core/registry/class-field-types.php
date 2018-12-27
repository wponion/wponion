<?php
/**
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @link
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

namespace WPOnion\Registry;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Registry\Field_Types' ) ) {
	/**
	 * Class Field_Types
	 *
	 * @package WPOnion\Registry
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Field_Types {
		/**
		 * @var array
		 * @access
		 * @static
		 */
		protected static $types = array();

		/**
		 * @var array
		 * @access
		 * @static
		 */
		protected static $ui_fields = array();

		/**
		 * @var array
		 * @access
		 * @static
		 */
		protected static $input_fields = array();

		/**
		 * Adds A Field To Registry.
		 *
		 * @param string $type
		 * @param string $callback
		 * @param array  $supports
		 * @param array  $args
		 *
		 * @static
		 */
		public static function add( $type = '', $callback = '', $supports = array(), $args = array() ) {
			if ( isset( $args['ui'] ) && true === $args['ui'] ) {
				self::$ui_fields[ $type ] = true;
			} else {
				self::$input_fields[ $type ] = true;
			}

			if ( ! self::exists( $type, null ) ) {
				self::$types[ $type ] = wp_parse_args( $args, array(
					'callback' => $callback,
					'supports' => ( false !== $supports && empty( $supports ) ) ? true : $supports,
				) );
			}
		}

		/**
		 * Checks if field already exists.
		 *
		 * @param      $type
		 * @param bool $is_ui_field
		 *
		 * @static
		 * @return bool
		 */
		public static function exists( $type, $is_ui_field = false ) {
			if ( false === $is_ui_field ) {
				return ( isset( self::$types[ $type ] ) && isset( self::$input_fields[ $type ] ) );
			} elseif ( true === $is_ui_field ) {
				return ( isset( self::$types[ $type ] ) && isset( self::$ui_fields[ $type ] ) );
			}
			return ( isset( self::$types[ $type ] ) );
		}

		/**
		 * Returns Only UI Fields.
		 *
		 * @static
		 * @return array
		 */
		public static function ui_fields() {
			return self::$ui_fields;
		}

		/**
		 * Returns Only Input Fields.
		 *
		 * @static
		 * @return array
		 */
		public static function input_fields() {
			return self::$input_fields;
		}

		/**
		 * Returns All Fields.
		 *
		 * @static
		 * @return array
		 */
		public static function fields() {
			return self::$types;
		}

		/**
		 * Checks And Returns A Field Type Data.
		 *
		 * @param $type
		 *
		 * @static
		 * @return bool|mixed
		 */
		public static function get( $type ) {
			return ( isset( self::$types[ $type ] ) ) ? self::$types[ $type ] : false;
		}

		/**
		 * Checks if Field Type Is UI.
		 *
		 * @param $type
		 *
		 * @static
		 * @return bool
		 */
		public static function is_ui( $type ) {
			return ( isset( self::$ui_fields[ $type ] ) && true === self::$ui_fields[ $type ] );
		}

		/**
		 * Checks if Field Type Is User Editable.
		 *
		 * @param $type
		 *
		 * @static
		 * @return bool
		 */
		public static function is_input( $type ) {
			return ( isset( self::$input_fields[ $type ] ) && true === self::$input_fields[ $type ] );
		}

		/**
		 * Check if given module is supported.
		 *
		 * @param $field_type
		 * @param $module
		 *
		 * @static
		 * @return bool
		 */
		public static function is_support( $field_type, $module ) {
			if ( self::exists( $field_type, null ) ) {
				$data = self::get( $field_type );
				if ( isset( $data['support'] ) ) {
					if ( true === $data['support'] ) {
						return true;
					} elseif ( is_array( $data['support'] ) ) {
						$is_all    = ( isset( $data['support']['all'] ) );
						$is_core   = ( isset( $data['support']['core'] ) );
						$is_module = ( isset( $data['support'][ $module ] ) );

						return ( true === $is_all || true === $is_core || $is_module );
					}
				}
			}
			return false;
		}

		/**
		 * Returns A Module Support.
		 *
		 * @param $field_type
		 * @param $module
		 *
		 * @static
		 * @return bool|mixed
		 */
		public static function get_support( $field_type, $module ) {
			if ( self::exists( $field_type, null ) ) {
				$data = self::get( $field_type );
				if ( isset( $data['support'] ) ) {
					if ( true === $data['support'] ) {
						return true;
					} elseif ( is_array( $data['support'] ) ) {
						$is_all    = ( isset( $data['support']['all'] ) );
						$is_core   = ( isset( $data['support']['core'] ) );
						$is_module = ( isset( $data['support'][ $module ] ) );

						if ( true === $is_all || true === $is_core ) {
							return true;
						} elseif ( true === $is_module ) {
							return $data['support'][ $module ];
						}
					}
				}
			}
			return false;
		}

		/**
		 * @param      $field_type
		 * @param      $module
		 * @param bool $callback
		 *
		 * @static
		 */
		public static function add_support( $field_type, $module, $callback = false ) {
			if ( self::exists( $field_type, null ) ) {
				$data = self::get( $field_type );
				if ( isset( $data['support'] ) ) {
					if ( true === $data || 'core' === $data || 'all' === $data ) {
						$data['support'] = array( 'all' => null );
					}
				} else {
					$data['support'] = array();
				}
				if ( ! isset( $data['support'][ $module ] ) ) {
					$data['support'][ $module ] = ( false === $callback ) ? null : $callback;
				}
			}
		}

		/**
		 * Returns Field Type Callback.
		 *
		 * @param $type
		 *
		 * @static
		 * @return bool
		 */
		public static function callback( $type ) {
			return ( isset( self::$types[ $type ] ) && isset( self::$types[ $type ]['calllback'] ) ) ? self::$types[ $type ]['calllback'] : false;
		}

		/**
		 * Checks And Returns A Valid Callback.
		 *
		 * @param      $field_type
		 * @param null $support
		 * @param bool $default
		 *
		 * @static
		 * @return bool|mixed
		 */
		public static function support_callback( $field_type, $support = null, $default = false ) {
			if ( self::exists( $field_type ) ) {
				if ( self::is_support( $field_type, $support ) ) {
					$callback = self::get_support( $field_type, $support );
					return ( true === $callback || false === $callback ) ? $default : $callback;
				}
			}
			return $default;
		}
	}
}

