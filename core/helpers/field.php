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

if ( ! function_exists( 'wponion_hash_string' ) ) {
	/**
	 * Returns A MD5 Hash.
	 *
	 * @param $string
	 *
	 * @return string
	 */
	function wponion_hash_string( $string = '' ) {
		return md5( $string );
	}
}

if ( ! function_exists( 'wponion_hash_array' ) ) {
	/**
	 * Returns A MD Encoded Value of a array.
	 *
	 * @param $array
	 *
	 * @return string
	 */
	function wponion_hash_array( $array ) {
		$encode = wp_json_encode( $array );
		return wponion_hash_string( $encode );
	}
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
		$class = wponion_get_field_class( $field );
		if ( false !== $class ) {
			$plugin_id = '';
			$module    = 'core';

			if ( is_array( $unique ) ) {
				$plugin_id = isset( $unique['plugin_id'] ) ? $unique['plugin_id'] : '';
				$unique    = isset( $unique['unique'] ) ? $unique['unique'] : '';
				$module    = isset( $unique['module'] ) ? $unique['module'] : '';
			}

			if ( ! isset( $field['id'] ) ) {
				$uid = wponion_hash_array( $field );
				$uid = wponion_hash_array( $module . '_' . $plugin_id . '_' . $uid . '_' . $unique );
			} else {
				$uid = wponion_hash_array( $module . '_' . $plugin_id . '_' . $field['id'] . '_' . $unique );
			}

			$registry = wponion_registry( $module . '_' . $plugin_id . '_' . $unique, 'WPOnion_Field_Registry' );

			if ( false !== $registry->get( $uid ) ) {
				return $registry->get();
			}
			$instance = new $class( $field, $value, $unique );
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

if ( ! function_exists( 'wponion_js_vars' ) ) {
	/**
	 * Converts PHP Array into JS JSON String with script tag and returns it.
	 *
	 * @param      $object_name
	 * @param      $l10n
	 * @param bool $with_script_tag
	 *
	 * @return string
	 */
	function wponion_js_vars( $object_name = '', $l10n, $with_script_tag = true ) {
		foreach ( (array) $l10n as $key => $value ) {
			if ( ! is_scalar( $value ) ) {
				continue;
			}
			$l10n[ $key ] = html_entity_decode( (string) $value, ENT_QUOTES, 'UTF-8' );
		}
		$script = null;
		if ( ! empty( $object_name ) ) {
			$script = "var $object_name = " . wp_json_encode( $l10n ) . ';';
		} else {
			$script = wp_json_encode( $l10n );
		}
		if ( ! empty( $after ) ) {
			$script .= "\n$after;";
		}
		if ( $with_script_tag ) {
			return '<script type="text/javascript" >' . $script . '</script>';
		}
		return $script;
	}
}