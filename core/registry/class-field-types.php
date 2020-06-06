<?php

namespace WPOnion\Registry;

defined( 'ABSPATH' ) || exit;

/**
 * Class Field_Types
 *
 * @package WPOnion\Registry
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Field_Types {
	/**
	 * Stores All Field Types.
	 *
	 * @var array
	 */
	public static $all_fields = array();

	/**
	 * Stores All Module Supported Fields. as
	 * array('all' => array('text','textarea'));
	 *
	 * @var array
	 */
	public static $module_fields = array();

	/**
	 * Stores Field Types That Are Used To Just For UI Related.
	 *
	 * @var array
	 */
	public static $design_fields = array();

	/**
	 * Adds A Field To Registry.
	 *
	 * @param        $type
	 * @param string $supports
	 * @param array  $extra_args
	 */
	public static function add( $type, $supports = 'all', $extra_args = array() ) {
		self::$all_fields[ $type ] = ( self::exists( $type ) ) ? wp_parse_args( self::$all_fields[ $type ], $extra_args ) : $extra_args;
		self::add_support( $type, $supports );
		self::remove_design_field( $type );

		if ( isset( self::$all_fields[ $type ]['design'] ) && true === self::$all_fields[ $type ]['design'] ) {
			if ( ! self::design_exists( $type ) ) {
				self::$design_fields[ $type ] = $type;
			}
		}
	}

	/**
	 * Removes A Field.
	 *
	 * @param $type
	 */
	public static function remove( $type ) {
		if ( self::exists( $type ) ) {
			self::remove_design_field( $type );
			self::remove_support( $type, array_keys( self::$module_fields ) );
			unset( self::$all_fields[ $type ] );
		}
	}

	/**
	 * Removes a Field From Design.
	 *
	 * @param $type
	 */
	public static function remove_design_field( $type ) {
		if ( self::design_exists( $type ) ) {
			foreach ( self::$design_fields as $key => $val ) {
				if ( $val === $type ) {
					unset( self::$design_fields[ $key ] );
				}
			}
		}
	}

	/**
	 * Returns Modules Fields.
	 *
	 * @param string $module
	 * @param bool   $global
	 *
	 * @return array
	 */
	public static function get( $module = '', $global = true ) {
		if ( isset( self::$module_fields[ $module ] ) ) {
			$fields = self::$module_fields[ $module ];
			if ( true === $global ) {
				$fields = wp_parse_args( $fields, self::$module_fields['all'] );
			}
			return $fields;
		}
		return self::$module_fields['all'];
	}

	/**
	 * Returns Only Design Fields
	 *
	 * @return array
	 */
	public static function get_design() {
		return self::$design_fields;
	}

	/**
	 * Returns A Fields Data.
	 *
	 * @param $type
	 *
	 * @return bool|array
	 */
	public static function get_field( $type ) {
		return ( self::exists( $type ) ) ? self::$all_fields[ $type ] : false;
	}

	/**
	 * Checks if Field Exists.
	 *
	 * @param $type
	 *
	 * @return bool
	 */
	public static function exists( $type ) {
		return ( isset( self::$all_fields[ $type ] ) );
	}

	/**
	 * Checks If Field Eixsts in Design Fields Array.
	 *
	 * @param $type
	 *
	 * @return bool
	 */
	public static function design_exists( $type ) {
		return ( self::exists( $type ) && in_array( $type, self::$design_fields, true ) );
	}

	/**
	 * Checks And Adds Support For A Field.
	 *
	 * @param $type
	 * @param $supports
	 */
	public static function add_support( $type, $supports ) {
		$supports = ( ! wponion_is_array( $supports ) ) ? array( $supports ) : $supports;

		foreach ( $supports as $support ) {
			if ( ! isset( self::$module_fields[ $support ] ) ) {
				self::$module_fields[ $support ] = array();
			}
			if ( ! self::is_supported( $type, $support ) ) {
				self::$module_fields[ $support ][ $type ] = $type;
			}
		}
	}

	/**
	 * Checks if a field is supported in a module.
	 *
	 * @param $type
	 * @param $module
	 *
	 * @return bool
	 */
	public static function is_supported( $type, $module ) {
		return ( isset( self::$module_fields[ $module ] ) && in_array( $type, self::$module_fields[ $module ], true ) );
	}

	/**
	 * Removes A Field Support.
	 *
	 * @param $type
	 * @param $supports
	 */
	public static function remove_support( $type, $supports ) {
		$supports = ( ! wponion_is_array( $supports ) ) ? array( $supports ) : $supports;
		foreach ( $supports as $support ) {
			if ( self::is_supported( $type, $support ) ) {
				unset( self::$module_fields[ $support ][ $type ] );
			}
		}
	}
}
