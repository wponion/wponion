<?php
/**
 *
 * Project : bullet-wp
 * Date : 30-07-2018
 * Time : 12:36 PM
 * File : validator.php
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @package bullet-wp
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

if ( ! function_exists( 'wponion_is_email' ) ) {
	/**
	 * Checks if given value is a email.
	 *
	 * @param $value
	 *
	 * @return bool|string
	 */
	function wponion_is_email( $value ) {
		return ( ! sanitize_email( $value ) ) ? __( 'Please Enter A Valid Email' ) : true;
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
		return ( false === filter_var( $content, FILTER_VALIDATE_URL ) ) ? __( 'Enter A Valid URL' ) : true;
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
		return ( ! is_numeric( $value ) ) ? __( 'Please Enter A Valid Numeric Value' ) : true;
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
		return ( empty( $value ) ) ? __( 'This Field Is Required' ) : true;
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
		return ( false === filter_var( $value, FILTER_VALIDATE_IP ) ) ? __( 'Enter A Valid IP Address' ) : true;
	}
}
