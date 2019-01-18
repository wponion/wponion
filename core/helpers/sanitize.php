<?php
/**
 *
 * Initial version created 14-05-2018 / 03:09 PM
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @package
 * @link
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! function_exists( 'wponion_field_cloneable_sanitize' ) ) {
	/**
	 * A Helper function to handle cloneable fields value.
	 *
	 * @param string $value
	 * @param string $callback
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
	 * @param $plugin_id
	 *
	 * @return array|string
	 */
	function wponion_field_text_sanitize( $value, $field, $plugin_id ) {
		if ( wponion_is_cloneable( $field ) ) {
			return wponion_field_cloneable_sanitize( $value, 'sanitize_text_field' );
		}

		return sanitize_text_field( $value );
	}
}

if ( ! function_exists( 'wponion_field_textarea_sanitize' ) ) {
	/**
	 * Textarea sanitize
	 *
	 * @param $value
	 * @param $field
	 * @param $plugin_id
	 *
	 * @return array|string
	 */
	function wponion_field_textarea_sanitize( $value, $field, $plugin_id ) {
		if ( wponion_is_cloneable( $field ) ) {
			return wponion_field_cloneable_sanitize( $value, 'sanitize_textarea_field' );
		}
		return sanitize_textarea_field( $value );
	}
}

if ( ! function_exists( 'wponion_field_checkbox_sanitize' ) ) {
	/**
	 * Checkbox sanitize
	 * Do not touch, or think twice.
	 *
	 * @param $value
	 *
	 * @return bool
	 */
	function wponion_field_checkbox_sanitize( $value ) {
		if ( ! empty( $value ) && 1 === $value ) {
			$value = true;
		}

		if ( empty( $value ) ) {
			$value = false;
		}
		return $value;
	}
}

if ( ! function_exists( 'wponion_field_image_select_sanitize' ) ) {
	/**
	 * Image select sanitize
	 * Do not touch, or think twice.
	 *
	 * @param $value
	 *
	 * @return array|mixed|string
	 */
	function wponion_field_image_select_sanitize( $value ) {
		if ( isset( $value ) && wponion_is_array( $value ) ) {
			if ( count( $value ) ) {
				$value = $value;
			} else {
				$value = $value[0];
			}
		} elseif ( empty( $value ) ) {
			$value = '';
		}
		return $value;
	}
}

if ( ! function_exists( 'wponion_field_group_sanitize' ) ) {
	/**
	 * Group sanitize
	 * Do not touch, or think twice.
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

if ( ! function_exists( 'wponion_field_clean' ) ) {
	/**
	 * Text Clean
	 *
	 * @param $value
	 *
	 * @return mixed
	 */
	function wponion_field_clean( $value ) {
		return $value;
	}
}
