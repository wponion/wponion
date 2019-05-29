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

if ( ! function_exists( 'wponion_field_defaults' ) ) {
	/**
	 * Returns Global WPOnion Field Default Args.
	 *
	 * @return array
	 */
	function wponion_field_defaults() {
		return array(
			// Common Args.
			'id'              => false, # Unique Database ID For Each And Every Field
			'title'           => false, # Title For Each Field,
			'hide_title'      => false, # Title For Each Field,
			'help'            => false, # Used for field tooltip
			'default'         => null, # Stores Default Value,
			'desc'            => false, # Field Description to print after title,
			'desc_field'      => false, # Field description to print after field output.
			'name'            => false,
			/// DB Save Handler Related.
			'sanitize'        => null,    #sanitize of field. can be enabled or disabled
			'validate'        => null,    #validate of field. can be enabled or disabled
			'js_validate'     => null,    #JS validate of field. can be enabled or disabled
			//Field Related.
			'type'            => false, # Type of the field,
			'style'           => false,
			'placeholder'     => false,
			'disabled'        => false,
			'attributes'      => array(), # attributes of field. supporting only html standard attributes
			'class'           => false, # Extra Element Class,
			//UI Related.
			'before'          => null,
			'after'           => null,
			'horizontal'      => false,
			'only_field'      => false,
			'dependency'      => array(), # dependency for showing and hiding fields
			//Cloner Related.
			'clone'           => false,
			'clone_settings'  => array(),
			'debug'           => wponion_field_debug(),
			//WordPress Releated.
			'query_args'      => array(),
			'wp_pointer'      => false,
			//Wrap Releated
			'wrap_tooltip'    => false,
			'wrap_class'      => null, # custom class for the field wrapper,
			'wrap_id'         => null, # custom ID for the field wrapper,
			'wrap_attributes' => array(),
			//Custom Column Handler.
			'title_column'    => false,
			'fieldset_column' => false,
		);
	}
}

if ( ! function_exists( 'wponion_validate_bool_val' ) ) {
	/**
	 * Checks And Converts Boolean Value Into Proper Bool.
	 *
	 * @param $value
	 *
	 * @return array|bool
	 */
	function wponion_validate_bool_val( $value ) {
		if ( wponion_is_array( $value ) ) {
			return array_map( 'wponion_validate_bool_val', $value );
		}
		switch ( strtolower( $value ) ) {
			case 'true':
			case 'TRUE':
			case '1':
				$value = true;
				break;

			case 'false':
			case 'FALSE':
			case '0':
				$value = false;
				break;
		}
		return $value;
	}
}

if ( ! function_exists( 'wponion_get_field_class_remap' ) ) {
	/**
	 * Checks & Returns Default Class.
	 *
	 * @param      $class
	 * @param bool $default
	 *
	 * @return bool|mixed
	 */
	function wponion_get_field_class_remap( $class, $default = false ) {
		return \WPOnion\Setup::remap( $class, $default );
	}
}

if ( ! function_exists( 'wponion_get_field_class' ) ) {
	/**
	 * @param        $field
	 * @param string $module
	 * @param bool   $strict
	 *
	 * @return bool|mixed|string
	 */
	function wponion_get_field_class( $field, $module = 'core', $strict = false ) {
		$type     = wponion_get_field_type( $field, false );
		$clone    = wponion_is_cloneable( $field );
		$module_s = str_replace( '-', '_', $module );
		$in_clone = ( isset( $field['in_clone'] ) || isset( $field['in_clone'] ) && false === $field['in_clone'] );
		$return   = false;

		if ( false !== $type ) {
			if ( true === $clone && false === $in_clone ) {
				if ( 'core' !== $module ) {
					$_class = '\WPOnion\Module_Fields\\' . $module . '\\Cloner';
					$return = wponion_get_field_class_remap( $_class, $_class );
				}

				$return = ( false === $return && false === $strict ) ? '\WPOnion\Field\Cloner' : $return;
			} else {
				if ( 'core' !== $module ) {
					$_class = '\WPOnion\Module_Fields\\' . $module_s . '\\' . $type;
					$return = wponion_get_field_class_remap( $_class, $_class );
				}

				if ( false === $return && false === $strict ) {
					$return = wponion_get_field_class_remap( '\WPOnion\Field\\' . $type, '\WPOnion\Field\\' . $type );
				}
			}
		}

		if ( ! class_exists( $return ) ) {
			do_action( 'wponion_load_field_class', $return, $type, $module_s );
		}

		return ( class_exists( $return ) ) ? $return : false;
	}
}

if ( ! function_exists( 'wponion_field' ) ) {
	/**
	 * Creates A New instance for a field or returns an existing field instance.
	 *
	 * @param array|\WPO\Field $field
	 * @param string|array     $value
	 * @param array|string     $unique
	 *
	 * @return bool
	 */
	function wponion_field( $field = array(), $value = '', $unique = array() ) {
		$class       = wponion_get_field_class( $field );
		$base_unique = $unique;

		if ( wponion_is_builder( $field, 'field' ) ) {
			$field = clone $field;
		}

		if ( isset( $field['__no_instance'] ) && true === $field['__no_instance'] ) {
			return new $class( $field, $value, $base_unique );
		}

		if ( false !== $class ) {
			$module = 'user_fields';
			$hash   = null;

			if ( wponion_is_array( $unique ) ) {
				$module = isset( $unique['module'] ) ? $unique['module'] : '';
				$hash   = isset( $unique['hash'] ) ? $unique['hash'] : '';
				$unique = isset( $unique['unique'] ) ? $unique['unique'] : '';
			}

			if ( is_string( $base_unique ) || ! isset( $field['id'] ) || isset( $field['id'] ) && empty( $field['id'] ) ) {
				$uid = wponion_hash_array( $field );
			} else {
				$uid = $field['id'] . '_' . $field['type'] . '_' . $unique . '_' . $hash;
			}
			$registry_key = implode( '_', array_filter( array( $module, $unique ) ) );
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
		if ( false === wponion_get_field_type( $field ) ) {
			return wponion_add_element( array(
				'type'    => 'wp_notice_error',
				'alt'     => true,
				'large'   => true,
				// translators: Creates a msg says that <p>requested field type not found</p>
				'content' => sprintf( __( '%1$s Requested Field Type %2$s  Is Not Registed With WPOnion %3$s', 'wponion' ), '<p>', '<code>' . wponion_get_field_type( $field, false ) . '</code>', '</p>' ),
			) );
		}

		$output = '';
		$class  = ( isset( $field['__instance'] ) ) ? $field['__instance'] : false;
		if ( false === $class ) {
			$class = wponion_field( $field, $value, $unique );
			if ( false === $class ) {
				$class = wponion_get_field_class( $field );
			}
		}

		if ( false !== $class ) {
			ob_start();
			$element = ( is_string( $class ) ) ? new $class( $field, $value, $unique ) : $class;
			echo $element->final_output();
			$output .= ob_get_clean();
		} else {
			$args = '';
			ob_start();
			echo '<h2>' . __( 'Callback Arguments', 'wponion' ) . '</h2>';
			var_dump( func_get_args() );
			$args .= ob_get_clean();

			$type   = ( isset( $field['type'] ) ) ? $field['type'] : false;
			$output = wponion_add_element( array(
				'type'        => 'notice',
				'notice_type' => 'danger',
				// translators:
				'content'     => sprintf( __( '<code>%s</code> Field Class Not Found.', 'wponion' ), $type ) . $args,
			) );
		}
		return $output;
	}
}

if ( ! function_exists( 'wponion_get_field_type' ) ) {
	/**
	 * Check If Field Type Attribute Exists And If so Then it checks if field exists. WPOnion.
	 *
	 * @param array $field
	 * @param bool  $check
	 *
	 * @return bool|string
	 */
	function wponion_get_field_type( $field, $check = true ) {
		if ( is_string( $field ) && $check ) {
			return ( \WPOnion\Registry\Field_Types::exists( $field ) ) ? $field : false;
		} elseif ( wponion_is_array( $field ) ) {
			$type = isset( $field['type'] ) ? $field['type'] : false;
			return wponion_get_field_type( $type, $check );
		}
		return $field;
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
	 *
	 */
	function wponion_noninput_fields() {
		return apply_filters( 'wponion_non_input_fields', \WPOnion\Registry\Field_Types::get_design() );
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
		$field = ( wponion_is_array( $field ) ) ? ( isset( $field['type'] ) ) ? $field['type'] : false : $field;
		return ( ! in_array( $field, wponion_noninput_fields(), true ) );
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

		if ( wponion_is_unarrayed( $field ) && isset( $field['fields'] ) && wponion_is_array( $field['fields'] ) ) {
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
		return apply_filters( 'wponion_select_input_frameworks', array( 'selectize', 'select2', 'chosen' ) );
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
			if ( isset( $fld[ 'is_' . $f ] ) && ( true === $fld[ 'is_' . $f ] || $f === $fld[ 'is_' . $f ] || true === wponion_is_array( $fld[ 'is_' . $f ] ) ) ) {
				return $f;
			} elseif ( isset( $fld[ $f ] ) && ( true === $fld[ $f ] || $f === $fld[ $f ] || true === wponion_is_array( $fld[ $f ] ) ) ) {
				return $f;
			}
		}

		if ( isset( $field['attributes']['class'] ) ) {
			$class = is_string( $fld['attributes']['class'] ) ? explode( ' ', $fld['attributes']['class'] ) : $fld['attributes']['class'];
			foreach ( $frameworks as $f ) {
				if ( in_array( $f, $class, true ) ) {
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
				case 'selectize':
					$return = 'selectize';
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
		$fonts                                                         = array();
		$fonts['Arial, Helvetica, sans-serif']                         = 'Arial, Helvetica, sans-serif';
		$fonts['"Arial Black", Gadget, sans-serif']                    = '"Arial Black", Gadget, sans-serif';
		$fonts['"Bookman Old Style", serif']                           = '"Bookman Old Style", serif';
		$fonts['"Comic Sans MS", cursive']                             = '"Comic Sans MS", cursive';
		$fonts['Courier, monospace']                                   = 'Courier, monospace';
		$fonts['Garamond, serif']                                      = 'Garamond, serif';
		$fonts['Georgia, serif']                                       = 'Georgia, serif';
		$fonts['Impact, Charcoal, sans-serif']                         = 'Impact, Charcoal, sans-serif';
		$fonts['"MS Serif", "New York", sans-serif']                   = '"MS Serif", "New York", sans-serif';
		$fonts['Tahoma,Geneva, sans-serif']                            = 'Tahoma, Geneva, sans-serif';
		$fonts['"Times New Roman", Times,serif']                       = '"Times New Roman", Times, serif';
		$fonts['"Lucida Console", Monaco, monospace']                  = '"Lucida Console", Monaco, monospace';
		$fonts['"MS Sans Serif", Geneva, sans-serif']                  = '"MS Sans Serif", Geneva, sans-serif';
		$fonts['Verdana, Geneva, sans-serif']                          = 'Verdana, Geneva, sans-serif';
		$fonts['"Trebuchet MS", Helvetica, sans-serif']                = '"Trebuchet MS", Helvetica, sans-serif';
		$fonts['"Lucida Sans Unicode", "Lucida Grande", sans-serif']   = '"Lucida Sans Unicode", "Lucida Grande", sans-serif';
		$fonts['"Palatino Linotype", "Book Antiqua", Palatino, serif'] = '"Palatino Linotype", "Book Antiqua", Palatino, serif';

		return apply_filters( 'wponion_backup_fonts', $fonts );
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
				'regular'   => __( 'Regular', 'wponion' ),
				'italic'    => __( 'Italic', 'wponion' ),
				'700'       => __( '700', 'wponion' ),
				'700italic' => __( '700 Italic', 'wponion' ),
				'inherit'   => __( 'inherit', 'wponion' ),
			),
			'fonts'    => array(
				'Arial'               => __( 'Arial', 'wponion' ),
				'Arial Black'         => __( 'Arial Black', 'wponion' ),
				'Comic Sans MS'       => __( 'Comic Sans MS', 'wponion' ),
				'Impact'              => __( 'Impact', 'wponion' ),
				'Lucida Sans Unicode' => __( 'Lucida Sans Unicode', 'wponion' ),
				'Tahoma'              => __( 'Tahoma', 'wponion' ),
				'Trebuchet MS'        => __( 'Trebuchet MS', 'wponion' ),
				'Verdana'             => __( 'Verdana', 'wponion' ),
				'Courier New'         => __( 'Courier New', 'wponion' ),
				'Lucida Console'      => __( 'Lucida Console', 'wponion' ),
				'Georgia, serif'      => __( 'Georgia, serif', 'wponion' ),
				'Palatino Linotype'   => __( 'Palatino Linotype', 'wponion' ),
				'Times New Roman'     => __( 'Times New Roman', 'wponion' ),
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

		if ( wponion_is_array( $data ) ) {
			foreach ( $data as $d => $v ) {
				$vars = array();
				if ( wponion_is_array( $v ) && ! empty( $v ) ) {
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

if ( ! function_exists( 'wponion_fields_all_ids_defaults' ) ) {
	/**
	 * Extracts all fileds ids and returns it.
	 *
	 * @param array|\WPO\Container|\WPO\Field $fields
	 * @param bool                            $parent_id
	 *
	 * @return array
	 */
	function wponion_fields_all_ids_defaults( $fields = array(), $parent_id = true ) {
		$return = array();

		if ( $fields instanceof \WPO\Helper\Base && $fields->has_containers() && ! $fields->has_callback() ) {
			foreach ( $fields->containers() as $container ) {
				/* @var $container WPO\Container */
				if ( $container->has_fields() && ! $container->has_callback() ) {
					$return = wponion_parse_args( $return, wponion_fields_all_ids_defaults( $container, $parent_id . '_' . $container->name() ) );
				}
			}
		} elseif ( $fields instanceof \WPO\Helper\Base && $fields->has_fields() && ! $fields->has_callback() ) {
			foreach ( $fields->fields() as $field ) {
				/* @var $field WPO\Field */
				if ( ! empty( $field['id'] ) ) {
					$nested = array();
					if ( ! empty( $field['fields'] ) && wponion_is_array( $field['fields'] ) ) {
						$nested = wponion_fields_all_ids_defaults( $field, $parent_id . '_' . $field['id'] );
					}

					$return[ $parent_id . '_' . $field['id'] ] = isset( $field['default'] ) ? $field['default'] : null;

					if ( ! empty( $nested ) ) {
						$return = wponion_parse_args( $return, $nested );
					}
				}
			}
		} elseif ( wponion_is_array( $fields ) ) {
			foreach ( $fields as $data ) {
				if ( $data instanceof \WPO\Container ) {
					$return = wponion_parse_args( $return, wponion_fields_all_ids_defaults( $data, $parent_id . '_' . $data->name() ) );
				} elseif ( $data instanceof WPO\Field || isset( $data['id'] ) && isset( $data['type'] ) ) {
					$return[ $data['id'] ] = isset( $data['default'] ) ? $data['default'] : null;
				}
			}
		}

		return $return;
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
					$fonts_array[ $key ][ __( 'Websafe Fonts', 'wponion' ) ] = $fonts['fonts'];
				} else {
					$fonts_array[ $key ] = wponion_parse_args( $fonts_array[ $key ], $fonts['fonts'] );
				}
			}

			if ( true === $google_fonts ) {
				$fonts = array_keys( wponion_google_fonts_data() );
				$fonts = array_combine( $fonts, $fonts );
				if ( true === $group ) {
					$fonts_array[ $key ][ __( 'Google Fonts', 'wponion' ) ] = $fonts;
				} else {
					$fonts_array[ $key ] = wponion_parse_args( $fonts, $fonts );
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

		if ( ! wponion_is_array( $selected ) ) {
			$selected = array( $selected );
		}

		if ( ! isset( $fonts_html[ $key ] ) ) {
			$fonts = wponion_get_fonts_array( $google_fonts, $websafe_fonts, $group );
			$html  = '';
			foreach ( $fonts as $id => $value ) {
				if ( wponion_is_array( $value ) ) {
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
		if ( wponion_is_array( $data ) ) {
			foreach ( $data as $key => $value ) {
				if ( true === isset( $value['key'] ) && true === isset( $value['value'] ) ) {
					$return[ $value['key'] ] = $value['value'];
				}
			}
		}
		return $return;
	}
}

if ( ! function_exists( 'wponion_sysinfo' ) ) {
	/**
	 * Generates HTML Output for loading SysInfo.
	 *
	 * @param $args
	 */
	function wponion_sysinfo( $args ) {
		\WPOnion\WP\Sysinfo\Sysinfo::get( $args );
	}
}

/**
 * Field Registry Related Functions.
 */

if ( ! function_exists( 'wponion_register_field' ) ) {
	/**
	 * Registers a field with field type Registry Class.
	 *
	 * @param string $field_type
	 * @param array  $supports
	 * @param array  $args
	 *
	 * @uses \WPOnion\Registry\Field_Types
	 */
	function wponion_register_field( $field_type = '', $supports = array(), $args = array() ) {
		\WPOnion\Registry\Field_Types::add( $field_type, $supports, $args );
	}
}

if ( ! function_exists( 'wponion_deregister_field' ) ) {
	/**
	 * Removes A Registered Field.
	 *
	 * @param string $field_type
	 */
	function wponion_deregister_field( $field_type = '' ) {
		\WPOnion\Registry\Field_Types::remove( $field_type );
	}
}

if ( ! function_exists( 'wponion_register_ui_field' ) ) {
	/**
	 * Registers A Field With Field Type Registry Class.
	 *
	 * @param string $field_type
	 * @param array  $supports
	 * @param array  $args
	 *
	 * @uses \wponion_register_field()
	 */
	function wponion_register_ui_field( $field_type = '', $supports = array(), $args = array() ) {
		$args = wp_parse_args( $args, array( 'design' => true ) );
		wponion_register_field( $field_type, $supports, $args );
	}
}

if ( ! function_exists( 'wponion_field_add_support' ) ) {
	/**
	 * Adds A Field Support.
	 *
	 * @param $type
	 * @param $support
	 */
	function wponion_field_add_support( $type, $support ) {
		\WPOnion\Registry\Field_Types::add_support( $type, $support );
	}
}

if ( ! function_exists( 'wponion_field_remove_support' ) ) {
	/**
	 * Adds A Field Support.
	 *
	 * @param $type
	 * @param $support
	 */
	function wponion_field_remove_support( $type, $support ) {
		\WPOnion\Registry\Field_Types::remove_support( $type, $support );
	}
}
