<?php
defined( 'ABSPATH' ) || exit;

if ( ! function_exists( 'wponion_field_cloneable_sanitize' ) ) {
	/**
	 * A Helper function to handle cloneable fields value.
	 *
	 * @param string|array $value
	 * @param string       $callback
	 *
	 * @return array|string
	 */
	function wponion_field_cloneable_sanitize( $value = '', $callback = '' ) {
		if ( wponion_is_array( $value ) ) {
			foreach ( $value as $i => $v ) {
				$value[ $i ] = wponion_callback( $callback, array( $v ) );
			}
		}
		return $value;
	}
}

if ( ! function_exists( 'wponion_field_text_sanitize' ) ) {
	/**
	 * Text Sanatize.
	 *
	 * @param $value
	 * @param $field
	 *
	 * @return array|string
	 */
	function wponion_field_text_sanitize( $value, $field ) {
		return ( wponion_is_cloneable( $field ) ) ? wponion_field_cloneable_sanitize( $value, 'sanitize_text_field' ) : sanitize_text_field( $value );
	}
}

if ( ! function_exists( 'wponion_field_textarea_sanitize' ) ) {
	/**
	 * Textarea sanitize
	 *
	 * @param $value
	 * @param $field
	 *
	 * @return array|string
	 */
	function wponion_field_textarea_sanitize( $value, $field ) {
		return ( wponion_is_cloneable( $field ) ) ? wponion_field_cloneable_sanitize( $value, 'sanitize_textarea_field' ) : sanitize_textarea_field( $value );
	}
}

if ( ! function_exists( 'wponion_field_checkbox_sanitize' ) ) {
	/**
	 * Checkbox sanitize
	 *
	 * @param $value
	 *
	 * @return bool
	 */
	function wponion_field_checkbox_sanitize( $value ) {
		if ( ! empty( $value ) && 1 === $value ) {
			$value = true;
		}
		return ( empty( $value ) ) ? false : $value;
	}
}

if ( ! function_exists( 'wponion_field_image_select_sanitize' ) ) {
	/**
	 * Image select sanitize
	 * Do not touch, or think twice.
	 *
	 * @param $value
	 *
	 * @return mixed
	 */
	function wponion_field_image_select_sanitize( $value ) {
		if ( isset( $value ) && wponion_is_array( $value ) && ! count( $value ) ) {
			$value = $value[0];
		}
		return empty( $value ) ? '' : $value;
	}
}

if ( ! function_exists( 'wponion_field_group_sanitize' ) ) {
	/**
	 * Group sanitize
	 *
	 * @param $value
	 *
	 * @return string
	 */
	function wponion_field_group_sanitize( $value ) {
		return ( empty( $value ) ) ? '' : $value;
	}
}

if ( ! function_exists( 'wponion_field_title' ) ) {
	/**
	 * Title Sanitize
	 *
	 * @param $value
	 *
	 * @return string
	 */
	function wponion_field_title( $value ) {
		return sanitize_title( $value );
	}
}

if ( ! function_exists( 'wponion_field_code_editor_sanitize' ) ) {
	/**
	 * @param $value
	 *
	 * @return string
	 */
	function wponion_field_code_editor_sanitize( $value ) {
		return stripslashes( $value );
	}
}
