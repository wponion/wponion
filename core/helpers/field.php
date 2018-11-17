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
	 * @param string|array $field
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
	 * @param array        $field
	 * @param string|array $value
	 * @param array|string $unique
	 *
	 * @return bool
	 */
	function wponion_field( $field = array(), $value = '', $unique = array() ) {
		$class       = wponion_get_field_class( $field );
		$base_unique = $unique;

		if ( isset( $field['__no_instance'] ) && true === $field['__no_instance'] ) {
			return new $class( $field, $value, $base_unique );
		}

		if ( false !== $class ) {
			$plugin_id = '';
			$module    = 'user_fields';
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
				$uid = $field['id'] . '_' . $field['type'] . '_' . $unique . '_' . $hash;
			}
			$registry_key = implode( '_', array_filter( array( $module, $plugin_id, $unique ) ) );
			$registry     = wponion_registry( $registry_key, '\WPOnion\Registry\Fields' );

			if ( false !== $registry->get( $uid ) ) {
				return $registry->get( $uid );
			}

			$instance = new $class( $field, $value, $base_unique );
			if ( method_exists( $registry, 'add' ) ) {
				$registry->add( $uid, $instance );
			}

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
			$args = '';
			if ( wponion_is_debug() ) {
				ob_start();
				echo '<pre>' . print_r( debug_backtrace(), true ) . '</pre>';
				var_dump( $field );
				$args .= ob_get_clean();
			} else {
				$args = '<pre>' . print_r( $field, true ) . '</pre>';
			}
			/* translators: Added Var Dump Data */
			$output .= '<p>' . sprintf( esc_html__( 'This field class is not available! %s' ), '<br/>  ' . $args ) . ' </p> ';
		}
		return $output;
	}
}

if ( ! function_exists( 'wponion_valid_field' ) ) {
	/**
	 * Checks if field is db saveable.
	 *
	 * @param $field
	 *
	 * @return bool
	 */
	function wponion_valid_field( $field ) {
		return ( wponion_field_id( $field ) || is_string( $field ) ) ? true : false;
	}
}

if ( ! function_exists( 'wponion_noninput_fields' ) ) {
	/**
	 * Returns a list of non editable fileds type.
	 *
	 * @return array
	 */
	function wponion_noninput_fields() {
		return apply_filters( 'wponion_non_input_fields', array( 'notice', 'subheading', 'heading', 'jambo_content' ) );
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

if ( ! function_exists( 'wponion_is_cloneable' ) ) {
	/**
	 * Checks if field type is cloneable.
	 *
	 * @param array $field
	 *
	 * @return bool
	 */
	function wponion_is_cloneable( $field = array() ) {
		return ( isset( $field['clone'] ) && false !== $field['clone'] );
	}
}

if ( ! function_exists( 'wponion_field_id' ) ) {
	/**
	 * Checks And Returns Field ID.
	 *
	 * @param $field
	 *
	 * @return bool
	 */
	function wponion_field_id( $field ) {
		return ( isset( $field['id'] ) ) ? $field['id'] : false;
	}
}

if ( ! function_exists( 'wponion_get_field_value' ) ) {
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
	function wponion_get_field_value( $field = array(), $value = array() ) {
		if ( false === wponion_valid_field( $field ) ) {
			return false;
		}

		$field_id = wponion_field_id( $field );

		if ( wponion_is_unarrayed( $field ) && isset( $field['fields'] ) && is_array( $field['fields'] ) ) {
			$return_values = array();
			foreach ( $field['fields'] as $_field ) {
				if ( false !== wponion_valid_field( $_field ) ) {
					$return_values[ wponion_field_id( $_field ) ] = wponion_get_field_value( $_field, $value );
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
		return apply_filters( 'wponion_select_input_frameworks', array( 'select2', 'chosen' ) );
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
			if ( isset( $fld[ 'is_' . $f ] ) && ( true === $fld[ 'is_' . $f ] || $f === $fld[ 'is_' . $f ] || true === is_array( $fld[ 'is_' . $f ] ) ) ) {
				return $f;
			} elseif ( isset( $fld[ $f ] ) && ( true === $fld[ $f ] || $f === $fld[ $f ] || true === is_array( $fld[ $f ] ) ) ) {
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
				case 'chosen':
					$return = ( is_rtl() ) ? 'chosen chosen-rtl' : 'chosen';
					break;
			}
		}
		return apply_filters( 'wponion_select_input_frameworks_html_class', explode( ' ', $return ), $framework );
	}
}

if ( ! function_exists( 'wponion_backup_fonts' ) ) {
	/**
	 * Returns A List of backup fonts.
	 *
	 * @return array
	 */
	function wponion_backup_fonts() {
		return apply_filters( 'wponion_backup_fonts', array(
			'Arial, Helvetica, sans-serif'                         => 'Arial, Helvetica, sans-serif',
			'"Arial Black", Gadget, sans-serif'                    => '"Arial Black", Gadget, sans-serif',
			'"Bookman Old Style", serif'                           => '"Bookman Old Style", serif',
			'"Comic Sans MS", cursive'                             => '"Comic Sans MS", cursive',
			'Courier, monospace'                                   => 'Courier, monospace',
			'Garamond, serif'                                      => 'Garamond, serif',
			'Georgia, serif'                                       => 'Georgia, serif',
			'Impact, Charcoal, sans-serif'                         => 'Impact, Charcoal, sans-serif',
			'"Lucida Console", Monaco, monospace'                  => '"Lucida Console", Monaco, monospace',
			'"Lucida Sans Unicode", "Lucida Grande", sans-serif'   => '"Lucida Sans Unicode", "Lucida Grande", sans-serif',
			'"MS Sans Serif", Geneva, sans-serif'                  => '"MS Sans Serif", Geneva, sans-serif',
			'"MS Serif", "New York", sans-serif'                   => '"MS Serif", "New York", sans-serif',
			'"Palatino Linotype", "Book Antiqua", Palatino, serif' => '"Palatino Linotype", "Book Antiqua", Palatino, serif',
			'Tahoma,Geneva, sans-serif'                            => 'Tahoma, Geneva, sans-serif',
			'"Times New Roman", Times,serif'                       => '"Times New Roman", Times, serif',
			'"Trebuchet MS", Helvetica, sans-serif'                => '"Trebuchet MS", Helvetica, sans-serif',
			'Verdana, Geneva, sans-serif'                          => 'Verdana, Geneva, sans-serif',
		) );
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
				'regular'   => __( 'Regular' ),
				'italic'    => __( 'Italic' ),
				'700'       => __( '700' ),
				'700italic' => __( '700 Italic' ),
				'inherit'   => __( 'inherit' ),
			),
			'fonts'    => array(
				'Arial'               => __( 'Arial' ),
				'Arial Black'         => __( 'Arial Black' ),
				'Comic Sans MS'       => __( 'Comic Sans MS' ),
				'Impact'              => __( 'Impact' ),
				'Lucida Sans Unicode' => __( 'Lucida Sans Unicode' ),
				'Tahoma'              => __( 'Tahoma' ),
				'Trebuchet MS'        => __( 'Trebuchet MS' ),
				'Verdana'             => __( 'Verdana' ),
				'Courier New'         => __( 'Courier New' ),
				'Lucida Console'      => __( 'Lucida Console' ),
				'Georgia, serif'      => __( 'Georgia, serif' ),
				'Palatino Linotype'   => __( 'Palatino Linotype' ),
				'Times New Roman'     => __( 'Times New Roman' ),
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
		return apply_filters( 'wponion_google_fonts', \WPOnion\Helper::google_fonts() );
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
				if ( is_array( $v ) && ! empty( $v ) ) {
					foreach ( $v as $id => $name ) {
						$vars[ $id ] = $name;
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

		if ( $fields instanceof \WPOnion\Module_Fields ) {
			if ( $fields->has_fields() ) {
				foreach ( $fields->fields() as $f ) {
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
			} elseif ( $fields->has_sections() ) {
				foreach ( $fields->sections() as $section ) {
					$return[ $section->name() ] = wponion_get_all_fields_ids_and_defaults( $section );
				}
			} elseif ( ! $fields->has_callback() && ! $fields->has_href() && ( $fields->has_fields() || $fields->has_sections() ) ) {
				foreach ( $fields as $field ) {
					$return[ $field->name() ] = wponion_get_all_fields_ids_and_defaults( $field );
				}
			} else {
				foreach ( $fields as $field ) {
					$return[] = wponion_get_all_fields_ids_and_defaults( $field );
				}
			}
		} elseif ( is_array( $fields ) ) {
			foreach ( $fields as $f ) {
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
		return ( class_exists( $class ) ) ? $class : false;
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

if ( ! function_exists( 'wponion_get_fonts_array' ) ) {
	/**
	 * Returns Premade Fonts Array.
	 *
	 * @param bool $google_fonts
	 * @param bool $websafe_fonts
	 * @param bool $group
	 *
	 * @return mixed
	 */
	function wponion_get_fonts_array( $google_fonts = true, $websafe_fonts = true, $group = true ) {
		static $fonts_array = array();

		$gfonts   = ( true === $google_fonts ) ? 'yes' : 'no';
		$webfonts = ( true === $websafe_fonts ) ? 'yes' : 'no';
		$_group   = ( true === $group ) ? 'yes' : 'no';
		$key      = $gfonts . $webfonts . $_group;

		if ( ! isset( $fonts_array[ $key ] ) ) {
			$fonts_array[ $key ] = array();
			if ( true === $websafe_fonts ) {
				$fonts = wponion_websafe_fonts();
				if ( true === $group ) {
					$fonts_array[ $key ][ __( 'Websafe Fonts' ) ] = $fonts['fonts'];
				} else {
					$fonts_array[ $key ] = array_merge( $fonts_array[ $key ], $fonts['fonts'] );
				}
			}

			if ( true === $google_fonts ) {
				$fonts = array_keys( wponion_google_fonts_data() );
				$fonts = array_combine( $fonts, $fonts );
				if ( true === $group ) {
					$fonts_array[ $key ][ __( 'Google Fonts' ) ] = $fonts;
				} else {
					$fonts_array[ $key ] = array_merge( $fonts, $fonts );
				}
			}
		}

		return $fonts_array[ $key ];
	}
}

if ( ! function_exists( 'wponion_fonts_options_html' ) ) {
	/**
	 * Returns PreMade Fonts Options HTML.
	 *
	 * @param bool  $google_fonts
	 * @param bool  $websafe_fonts
	 * @param bool  $group
	 * @param array $selected
	 *
	 * @return mixed|string
	 */
	function wponion_fonts_options_html( $google_fonts = true, $websafe_fonts = true, $group = true, $selected = array() ) {
		static $fonts_html = array();

		$gfonts   = ( true === $google_fonts ) ? 'yes' : 'no';
		$webfonts = ( true === $websafe_fonts ) ? 'yes' : 'no';
		$_group   = ( true === $group ) ? 'yes' : 'no';
		$key      = $gfonts . $webfonts . $_group;

		if ( ! is_array( $selected ) ) {
			$selected = array( $selected );
		}

		if ( ! isset( $fonts_html[ $key ] ) ) {
			$fonts = wponion_get_fonts_array( $google_fonts, $websafe_fonts, $group );
			$html  = '';
			foreach ( $fonts as $id => $value ) {
				if ( is_array( $value ) ) {
					$html .= '<optgroup label="' . $id . '">';
					foreach ( $value as $i => $v ) {
						$html .= '<option value="' . $i . '">' . $v . '</option>';
					}
					$html .= '</optgroup>';
				} else {
					$html .= '<option value="' . $id . '">' . $value . '</option>';
				}
			}
			$fonts_html[ $key ] = $html;
		}

		$html = $fonts_html[ $key ];

		foreach ( $selected as $key ) {
			$html = str_replace( '<option value="' . $key . '">', '<option value="' . $key . '" selected>', $html );
		}

		return $html;
	}
}

if ( ! function_exists( 'wponion_key_value_to_array' ) ) {
	/**
	 * Converts Key Value Field Values Into key value array
	 * From : array(array('key' => 'Some Key', 'value' => 'Some Value'))
	 * To : array( 'Some Key' => 'Some Value')
	 *
	 * @param array $data
	 *
	 * @return array
	 */
	function wponion_key_value_to_array( $data = array() ) {
		$return = array();
		if ( is_array( $data ) ) {
			foreach ( $data as $key => $value ) {
				if ( true === isset( $value['key'] ) && true === isset( $value['value'] ) ) {
					$return[ $value['key'] ] = $value['value'];
				}
			}
		}
		return $return;
	}
}
