<?php

defined( 'ABSPATH' ) || exit;

if ( ! function_exists( 'wpo_help' ) ) {
	/**
	 * @param null  $content
	 * @param array $args
	 * @param bool  $element
	 * @param bool  $localize
	 *
	 * @return array|string|\WPOnion\Util
	 * @deprecated
	 */
	function wpo_help( $content = null, $args = array(), $element = false, $localize = true ) {
		wponion_deprecated_function( __FUNCTION__, '1.5', 'wpo_tooltip' );
		return wponion_tooltip( $content, $args, $element, $localize );
	}
}

if ( ! function_exists( 'wponion_validate_bool_val' ) ) {
	/**
	 * Checks And Converts Boolean Value Into Proper Bool.
	 *
	 * @param string|mixed $value
	 * @param bool         $is_true
	 * @param bool         $is_false
	 *
	 * @return array|bool
	 * @deprecated
	 */
	function wponion_validate_bool_val( $value, $is_true = true, $is_false = false ) {
		wponion_deprecated_function( __FUNCTION__, '1.5', 'wponion_is_bool_val' );
		return wponion_is_bool_val( $value, $is_true, $is_false );
	}
}

if ( ! function_exists( 'wponion_get_field_class_remap' ) ) {
	/**
	 * Checks & Returns Default Class.
	 *
	 * @param      $class
	 * @param bool $default
	 *
	 * @return bool|mixed
	 * @deprecated
	 */
	function wponion_get_field_class_remap( $class, $default = false ) {
		wponion_deprecated_function( __FUNCTION__, '1.5', 'wponion_field_class_remaps' );
		return wponion_field_class_remaps( $class, $default );
	}
}

if ( ! function_exists( 'wponion_get_registry_instance' ) ) {
	/**
	 * Adds An Instance To / Retrives An Instance.
	 *
	 * @deprecated
	 */
	function wponion_get_registry_instance() {
		wponion_doing_it_wrong( __FUNCTION__, __( 'This function has been disabled', 'wponion' ), '1.5' );
	}
}

if ( ! function_exists( 'wponion_is' ) ) {
	/**
	 * Checks if given builder is a instance of any in below
	 *
	 * @param mixed  $builder
	 * @param string $type
	 *
	 * @return bool
	 * @deprecated Please use wponion_is_instance
	 */
	function wponion_is( $builder, $type = 'builder' ) {
		wponion_deprecated_function( __FUNCTION__, '1.5', 'wponion_is_instance' );
		return wponion_is_instance( $builder, $type );
	}
}

if ( ! function_exists( 'wponion_field_debug' ) ) {
	/**
	 * Checks if field debug is enabled.
	 *
	 * @return bool
	 * @deprecated Please use wponion_is_field_debug
	 */
	function wponion_field_debug() {
		wponion_deprecated_function( __FUNCTION__, '1.5', 'wponion_is_field_debug' );
		return wponion_is_field_debug();
	}
}
