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
if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! function_exists( 'wponion_get_field_class' ) ) {
	/**
	 * Checks And Returns Fields Class.
	 *
	 * @param string $field
	 *
	 * @return bool|string
	 */
	function wponion_get_field_class( $field = '' ) {
		if ( is_array( $field ) ) {
			$field = isset( $field['type'] ) ? $field['type'] : false;
		}

		if ( ! empty( $field ) ) {
			$class = 'WPOnion_Field_' . $field;
			if ( class_exists( $class ) ) {
				return $class;
			}
		}

		return false;
	}
}

if ( ! function_exists( 'wponion_field' ) ) {
	/**
	 * Creates A New instance for a field or returns an existing field instance.
	 *
	 * @param array  $field
	 * @param string $value
	 * @param array  $unique
	 *
	 * @return bool
	 */
	function wponion_field( $field = array(), $value = '', $unique = array() ) {
		$class       = wponion_get_field_class( $field );
		$base_unique = $unique;
		if ( false !== $class ) {
			$plugin_id = '';
			$module    = 'core';

			if ( is_array( $unique ) ) {
				$plugin_id = isset( $unique['plugin_id'] ) ? $unique['plugin_id'] : '';
				$module    = isset( $unique['module'] ) ? $unique['module'] : '';
				$unique    = isset( $unique['unique'] ) ? $unique['unique'] : '';
			}

			if ( ! isset( $field['id'] ) ) {
				$uid = wponion_hash_array( $field );
				$uid = wponion_hash_array( $module . '_' . $plugin_id . '_' . $uid . '_' . $unique );
			} else {
				$uid = wponion_hash_array( $module . '_' . $plugin_id . '_' . $field['id'] . '_' . $unique );
			}

			$registry = wponion_registry( $module . '_' . $plugin_id . '_' . $unique, 'WPOnion_Field_Registry' );

			if ( false !== $registry->get( $uid ) ) {
				return $registry->get( $uid );
			}

			$instance = new $class( $field, $value, $base_unique );
			$registry->add( $uid, $instance );
			return $instance;
		}
		return false;
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

		$class = wponion_field( $field, $value, $unique );

		if ( false === $class ) {
			$class = wponion_get_field_class( $field );
		}

		if ( false !== $class ) {
			ob_start();
			$element = ( is_string( $class ) ) ? new $class( $field, $value, $unique ) : $class;
			$element->final_output();
			$output .= ob_get_clean();
		} else {
			$field_type = isset( $field['type'] ) ? $field['type'] : false;
			$output     .= '<p>' . sprintf( esc_html__( 'This field class is not available! %s' ), '<strong>' . print_r( $field, true ) . '</strong>' ) . ' </p> ';
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
