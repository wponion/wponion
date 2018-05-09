<?php
/**
 *
 * Initial version created 09-05-2018 / 12:00 PM
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @package
 * @link
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

if ( ! function_exists( 'wponion_array_to_html_attributes' ) ) {
	/**
	 * Converts PHP Array To HTML Attributes.
	 *
	 * @param $attributes
	 *
	 * @return string
	 */
	function wponion_array_to_html_attributes( $attributes ) {
		$atts = '';
		if ( ! empty( $attributes ) ) {
			foreach ( $attributes as $key => $value ) {
				if ( 'only-key' === $value ) {
					$atts .= ' ' . esc_attr( $key );
				} else {
					$atts .= ' ' . esc_attr( $key ) . '="' . esc_attr( $value ) . '"';
				}
			}
		}
		return $atts;
	}
}

if ( ! function_exists( 'wponion_add_element' ) ) {
	/**
	 * Adds A WPOnion Field & Renders it.
	 *
	 * @param array  $field
	 * @param array  $value
	 * @param string $unique
	 *
	 * @return string
	 */
	function wponion_add_element( $field = array(), $value = array(), $unique = '' ) {
		$output = '';

		$class = 'WPOnion_Field_' . $field['type'];

		if ( class_exists( $class ) ) {
			ob_start();
			$element = new $class( $field, $value, $unique );
			$element->final_output();
			$output .= ob_get_clean();
		} else {
			$output .= '<p>' . sprintf( esc_html__( 'This field class is not available! %s' ), '<strong>' . $class . '</strong>' ) . ' </p > ';
		}
		return $output;
	}
}

if ( ! function_exists( '_wponion_get_field_value' ) ) {
	/**
	 * @param array $field
	 * @param array $value
	 *
	 * @access private
	 *
	 * @return bool
	 */
	function _wponion_get_field_value( $field = array(), $value = array() ) {
		if ( ! isset( $field['id'] ) ) {
			return false;
		}

		$field_id = $field['id'];
		if ( isset( $value[ $field_id ] ) ) {
			return $value[ $field_id ];
		}
		return false;
	}
}