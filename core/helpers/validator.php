<?php
if ( ! defined( 'ABSPATH' ) ) {
	die;
}

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
	 * @param $content
	 *
	 * @return mixed
	 */
	function wponion_is_url( $content ) {
		return ( false === filter_var( $content, FILTER_VALIDATE_URL ) ) ? __( 'Please Enter A Valid URL', 'wponion' ) : true;
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
