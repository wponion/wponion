<?php
defined( 'ABSPATH' ) || exit;

if ( ! function_exists( 'wponion_is_email' ) ) {
	/**
	 * Checks if given value is a email.
	 *
	 * @param $value
	 *
	 * @return bool|string
	 */
	function wponion_is_email( $value ) {
		return ( ! sanitize_email( $value ) ) ? __( 'Please Enter A Valid Email', 'wponion' ) : true;
	}
}

if ( ! function_exists( 'wponion_is_url' ) ) {
	/**
	 * Checks if given value is a url.
	 *
	 * @param $value
	 *
	 * @return mixed
	 */
	function wponion_is_url( $value ) {
		return ( false === filter_var( $value, FILTER_VALIDATE_URL ) ) ? __( 'Please Enter A Valid URL', 'wponion' ) : true;
	}
}

if ( ! function_exists( 'wponion_is_numeric' ) ) {
	/**
	 * Checks if given value is a numeric.
	 *
	 * @param $value
	 *
	 * @return bool|string
	 */
	function wponion_is_numeric( $value ) {
		return ( ! is_numeric( $value ) ) ? __( 'Please Enter A Valid Numeric Value', 'wponion' ) : true;
	}
}

if ( ! function_exists( 'wponion_is_required' ) ) {
	/**
	 * Checks if given value is a empty.
	 *
	 * @param $value
	 *
	 * @return bool|string
	 */
	function wponion_is_required( $value ) {
		return ( empty( $value ) ) ? __( 'This Field Is Required', 'wponion' ) : true;
	}
}

if ( ! function_exists( 'wponion_is_ip' ) ) {
	/**
	 * Checks if given value is a ip address.
	 *
	 * @param $value
	 *
	 * @return bool|string
	 */
	function wponion_is_ip( $value ) {
		return ( false === filter_var( $value, FILTER_VALIDATE_IP ) ) ? __( 'Enter A Valid IP Address', 'wponion' ) : true;
	}
}

if ( ! function_exists( 'wponion_is_regex' ) ) {
	/**
	 * Checks if given value is a ip address.
	 *
	 * @param $value
	 *
	 * @return bool|string
	 */
	function wponion_is_regex( $value ) {
		return ( false === filter_var( $value, FILTER_VALIDATE_REGEXP ) ) ? __( 'Enter A Valid Regex', 'wponion' ) : true;
	}
}

if ( ! function_exists( 'wponion_is_mac_id' ) ) {
	/**
	 * Checks if given value is a ip address.
	 *
	 * @param $value
	 *
	 * @return bool|string
	 */
	function wponion_is_mac_id( $value ) {
		return ( false === filter_var( $value, FILTER_VALIDATE_MAC ) ) ? __( 'Enter A Valid MAC ID', 'wponion' ) : true;
	}
}

if ( ! function_exists( 'wponion_is_valid_html' ) ) {
	/**
	 * Checks if given string is valid html or not.
	 *
	 * @param $string
	 *
	 * @return bool
	 */
	function wponion_is_valid_html( $string ) {
		return ( strip_tags( $string ) !== $string );
	}
}
