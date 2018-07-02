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
		$field_type = null;
		if ( is_array( $field ) ) {
			$field_type = isset( $field['type'] ) ? $field['type'] : false;
		}

		if ( ! empty( $field_type ) || ! empty( $field ) ) {
			$is_in_clone = ( isset( $field['in_clone'] ) && true === $field['in_clone'] ) ? true : false;

			if ( false === $is_in_clone && isset( $field['clone'] ) && ( true === $field['clone'] || true === is_array( $field['clone'] ) ) ) {
				if ( ! class_exists( '\WPOnion\Field\Cloner', false ) ) {
					require_once WPONION_PATH . 'core/class-field-cloner.php';
				}
				return '\WPOnion\Field\Cloner';
			} else {
				$class = 'WPOnion\\Field\\' . $field_type;
				if ( class_exists( $class ) ) {
					return $class;
				}
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
			$hash      = null;

			if ( is_array( $unique ) ) {
				$plugin_id = isset( $unique['plugin_id'] ) ? $unique['plugin_id'] : '';
				$module    = isset( $unique['module'] ) ? $unique['module'] : '';
				$hash      = isset( $unique['hash'] ) ? $unique['hash'] : '';
				$unique    = isset( $unique['unique'] ) ? $unique['unique'] : '';
			}

			if ( is_string( $base_unique ) || ! isset( $field['id'] ) ) {
				$uid = wponion_hash_array( $field );
			} else {
				$uid = $field['id'] . '_' . $unique . '_' . $hash;//wponion_hash_string( $module . '_' . $plugin_id . '_' . $field['id'] . '_' . $unique . '_' . $hash );
			}

			$registry = wponion_registry( $module . '_' . $plugin_id . '_' . $unique, '\WPOnion\Registry\Fields' );

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

		if ( isset( $field['__instance'] ) ) {
			$class = $field['__instance'];
		} else {
			$class = wponion_field( $field, $value, $unique );

			if ( false === $class ) {
				$class = wponion_get_field_class( $field );
			}
		}

		if ( false !== $class ) {
			ob_start();
			$element = ( is_string( $class ) ) ? new $class( $field, $value, $unique ) : $class;
			$element->final_output();
			$output .= ob_get_clean();
		} else {
			$output .= '<p>' . sprintf( esc_html__( 'This field class is not available! %s' ), '<strong>' . print_r( $field, true ) . '</strong>' ) . ' </p> ';
		}
		return $output;
	}
}

if ( ! function_exists( '_wponion_valid_field' ) ) {
	/**
	 * Checks if field is db saveable.
	 *
	 * @param $field
	 *
	 * @return bool
	 */
	function _wponion_valid_field( $field ) {
		return ( _wponion_field_id( $field ) || is_string( $field ) ) ? true : false;
	}
}

if ( ! function_exists( 'wponion_noninput_fields' ) ) {
	/**
	 * Returns a list of non editable fileds type.
	 *
	 * @return array
	 */
	function wponion_noninput_fields() {
		return apply_filters( 'wponion_non_input_fields', array(
			'card',
			'notice',
			'subheading',
			'heading',
			'jambo_content',
		) );
	}
}

if ( ! function_exists( 'wponion_valid_user_input_field' ) ) {
	/**
	 * Checks if field type is a valid user editable field.
	 *
	 * @param $field
	 *
	 * @return bool
	 */
	function wponion_valid_user_input_field( $field ) {
		$field = ( is_array( $field ) ) ? ( isset( $field['type'] ) ) ? $field['type'] : false : $field;
		return ( ! in_array( $field, wponion_noninput_fields() ) );
	}
}

if ( ! function_exists( 'wponion_is_unarrayed' ) ) {
	/**
	 * Check if a field is unarrayed.
	 *
	 * @param $field
	 *
	 * @return bool
	 */
	function wponion_is_unarrayed( $field ) {
		return ( isset( $field['un_array'] ) && true === $field['un_array'] ) ? true : false;
	}
}

if ( ! function_exists( '_wponion_field_id' ) ) {
	/**
	 * Checks And Returns Field ID.
	 *
	 * @param $field
	 *
	 * @return bool
	 */
	function _wponion_field_id( $field ) {
		return ( isset( $field['id'] ) ) ? $field['id'] : false;
	}
}

if ( ! function_exists( '_wponion_get_field_value' ) ) {
	/**
	 * Checks and returns the fields values based on the field config.
	 *
	 * @param array $field
	 * @param array $value
	 *
	 * @access private
	 *
	 * @return bool|mixed
	 */
	function _wponion_get_field_value( $field = array(), $value = array() ) {
		if ( false === _wponion_valid_field( $field ) ) {
			return false;
		}

		$field_id = _wponion_field_id( $field );

		if ( wponion_is_unarrayed( $field ) && isset( $field['fields'] ) && is_array( $field['fields'] ) ) {
			$return_values = array();
			foreach ( $field['fields'] as $_field ) {
				if ( false !== _wponion_valid_field( $_field ) ) {
					$return_values[ _wponion_field_id( $_field ) ] = _wponion_get_field_value( $_field, $value );
				}
			}
			return $return_values;
		}
		if ( isset( $value[ $field_id ] ) ) {
			return $value[ $field_id ];
		}
		return false;
	}
}

if ( ! function_exists( 'wponion_select_frameworks' ) ) {
	/**
	 * Returns A List of select framework.
	 *
	 * @return mixed
	 */
	function wponion_select_frameworks() {
		return apply_filters( 'wponion_select_input_frameworks', array( 'select2', 'chosen', 'selectize' ) );
	}
}

if ( ! function_exists( 'wponion_validate_select_framework' ) ) {
	/**
	 * Validates And Returns The Selected Framework Name.
	 * This only used for selectbox.
	 *
	 * @param $fld
	 *
	 * @return bool
	 */
	function wponion_validate_select_framework( $fld ) {
		$frameworks = wponion_select_frameworks();

		foreach ( $frameworks as $f ) {
			if ( isset( $fld[ 'is_' . $f ] ) && ( true === $fld[ 'is_' . $f ] || true === is_array( $fld[ 'is_' . $f ] ) ) || isset( $fld[ $f ] ) && ( true === $fld[ $f ] || true === is_array( $fld[ $f ] ) ) ) {
				return $f;
			}
		}

		if ( isset( $field['attributes']['class'] ) ) {
			$class = is_string( $fld['attributes']['class'] ) ? explode( ' ', $fld['attributes']['class'] ) : $fld['attributes']['class'];
			foreach ( $frameworks as $f ) {
				if ( in_array( $f, $class ) ) {
					return $f;
				}
			}
		}
		return false;
	}
}

if ( ! function_exists( 'wponion_select_classes' ) ) {
	/**
	 * Checks and returns select framework html class.
	 *
	 * @param bool $framework
	 *
	 * @return array
	 */
	function wponion_select_classes( $framework = false ) {
		$return = '';
		if ( false !== $framework ) {
			switch ( $framework ) {
				case 'select2':
					$return = ( is_rtl() ) ? 'select2 select2-rtl' : 'select2';
					break;
				case 'chosen' :
					$return = ( is_rtl() ) ? 'chosen chosen-rtl' : 'chosen';
					break;
				case'selectize':
					$return = 'selectize';
					break;
			}
		}
		return apply_filters( 'wponion_select_input_frameworks_html_class', explode( ' ', $return ), $framework );
	}
}

if ( ! function_exists( 'wponion_websafe_fonts' ) ) {
	/**
	 * Returns Websafe Fonts.
	 *
	 * @return mixed
	 */
	function wponion_websafe_fonts() {
		return apply_filters( 'wponion_websafe_fonts', array(
			'variants' => array(
				'regular'   => 'Regular',
				'italic'    => 'Italic',
				'700'       => '700',
				'700italic' => '700 Italic',
				'inherit'   => 'inherit',
			),
			'fonts'    => array(
				'Arial'               => 'Arial',
				'Arial Black'         => 'Arial Black',
				'Comic Sans MS'       => 'Comic Sans MS',
				'Impact'              => 'Impact',
				'Lucida Sans Unicode' => 'Lucida Sans Unicode',
				'Tahoma'              => 'Tahoma',
				'Trebuchet MS'        => 'Trebuchet MS',
				'Verdana'             => 'Verdana',
				'Courier New'         => 'Courier New',
				'Lucida Console'      => 'Lucida Console',
				'Georgia, serif'      => 'Georgia, serif',
				'Palatino Linotype'   => 'Palatino Linotype',
				'Times New Roman'     => 'Times New Roman',
			),

		) );
	}
}

if ( ! function_exists( 'wponion_google_fonts' ) ) {
	/**
	 * Reads Google Fonts. Data.
	 *
	 * @return mixed
	 */
	function wponion_google_fonts() {
		return apply_filters( 'wponion_google_fonts', wponion_read_json_files( WPONION_PATH . 'assets/json/google_fonts.json' ) );
	}
}

if ( ! function_exists( 'wponion_google_fonts_data' ) ) {
	/**
	 * Converts GoogleFonts Array into usable fontarray
	 *
	 * @return array
	 */
	function wponion_google_fonts_data() {
		$data   = wponion_google_fonts();
		$return = array();

		if ( is_array( $data ) ) {
			foreach ( $data as $d => $v ) {
				$vars = array();
				if ( isset( $v['variants'] ) ) {
					foreach ( $v['variants'] as $_d ) {
						$vars[ $_d['id'] ] = $_d['name'];
					}
					$return[ $d ] = $vars;
				} else {
					$return[ $d ] = $d;
				}
			}
		}
		return $return;
	}
}

if ( ! function_exists( 'wponion_get_all_fields_ids_and_defaults' ) ) {
	/**
	 * Extracts all fileds ids and returns it.
	 *
	 * @param array $fields
	 *
	 * @return array
	 */
	function wponion_get_all_fields_ids_and_defaults( $fields = array() ) {
		$return = array();
		if ( isset( $fields['fields'] ) ) {
			foreach ( $fields['fields'] as $f ) {
				if ( isset( $f['id'] ) && true === wponion_valid_user_input_field( $f ) ) {
					$_fields            = isset( $f['fields'] ) ? wponion_get_all_fields_ids_and_defaults( $f['fields'] ) : array();
					$default            = isset( $f['default'] ) ? $f['default'] : false;
					$return[ $f['id'] ] = array(
						'default' => $default,
						'fields'  => $_fields,
						'id'      => $f['id'],
					);
				}
			}
		} elseif ( isset( $fields['sections'] ) ) {
			foreach ( $fields['sections'] as $section ) {
				$return[ $section['name'] ] = wponion_get_all_fields_ids_and_defaults( $section );
			}
		} elseif ( is_array( $fields ) ) {
			foreach ( $fields as $page ) {
				if ( isset( $page['fields'] ) || isset( $page['sections'] ) ) {
					$id            = isset( $page['name'] ) ? $page['name'] : '';
					$return[ $id ] = wponion_get_all_fields_ids_and_defaults( $page );
				} else {
					$return[ _wponion_field_id( $page ) ] = _wponion_field_id( $page );
				}
			}
		}
		return $return;
	}
}

if ( ! function_exists( 'wponion_field_value_class' ) ) {
	/**
	 * Generates Field Value Class Name.
	 *
	 * @param $field_type
	 *
	 * @return bool|string
	 */
	function wponion_field_value_class( $field_type ) {
		$field_type = ( is_array( $field_type ) ) ? $field_type['type'] : $field_type;
		$class      = '\WPOnion\Value\\' . $field_type;
		if ( class_exists( $class ) ) {
			return $class;
		}
		return false;
	}
}

if ( ! function_exists( 'wponion_extract_font_variant' ) ) {
	/**
	 * Checks and extracts font details.
	 *
	 * @param $value
	 *
	 * @return mixed
	 */
	function wponion_extract_font_variant( $value ) {
		preg_match( '/(\d+)([a-z]+)/', $value, $matches );
		$return = array();
		if ( isset( $matches[1] ) ) {
			$return['weight'] = $matches[1];
		}
		if ( isset( $matches[2] ) ) {
			$return['style'] = $matches[2];
		}
		return $return;
	}
}
