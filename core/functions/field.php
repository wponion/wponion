<?php

use WPO\Container;
use WPO\Helper\Base;
use WPOnion\Exception\Cache_Not_Found;
use WPOnion\Helper;
use WPOnion\Registry\Field_Types;
use WPOnion\Setup;

defined( 'ABSPATH' ) || exit;

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
			'name'            => false, # Custom Name attribute value.
			/// DB Save Handler Related.
			'sanitize'        => null,    #sanitize of field. can be enabled or disabled
			'validate'        => null,    #validate of field. can be enabled or disabled
			'js_validate'     => null,    #JS validate of field. can be enabled or disabled
			//Field Related.
			'type'            => false, # Type of the field,
			'style'           => false,
			'css'             => false,
			'placeholder'     => false,
			'disabled'        => false,
			'attributes'      => array(), # attributes of field. supporting only html standard attributes
			'class'           => false, # Extra Element Class,
			//UI Related.
			'before'          => null,
			'after'           => null,
			'horizontal'      => false,
			'only_field'      => false,
			'badge'           => false,
			'dependency'      => array(), # dependency for showing and hiding fields
			//Cloner Related.
			'clone'           => false,
			'clone_settings'  => array(),
			'debug'           => wponion_is_field_debug(),
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
			//Custom Callbacks
			'before_render'   => false,
			'after_render'    => false,
			// Internal
			'builder_path'    => false,
			'field_path'      => false,
		);
	}
}

if ( ! function_exists( 'wponion_field_class_remaps' ) ) {
	/**
	 * Checks & Returns Default Class.
	 *
	 * @param      $class
	 * @param bool $default
	 *
	 * @return bool|mixed
	 */
	function wponion_field_class_remaps( $class, $default = false ) {
		return Setup::remap( $class, $default );
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
		$module_s = str_replace( '-', '_', $module );
		$in_clone = ( isset( $field['in_clone'] ) || isset( $field['in_clone'] ) && false === $field['in_clone'] );
		$return   = false;

		if ( false !== $type ) {
			if ( true === wponion_is_cloneable( $field ) && false === $in_clone ) {
				if ( 'core' !== $module ) {
					$_class = '\WPOnion\Module_Fields\\' . $module . '\\Cloner';
					$return = wponion_field_class_remaps( $_class, $_class );
				}

				$return = ( false === $return && false === $strict ) ? '\WPOnion\Field\Cloner' : $return;
			} else {
				if ( 'core' !== $module ) {
					$_class = '\WPOnion\Module_Fields\\' . $module_s . '\\' . $type;
					$return = wponion_field_class_remaps( $_class, $_class );
				}

				if ( false === $return && false === $strict ) {
					$return = wponion_field_class_remaps( '\WPOnion\Field\\' . $type, '\WPOnion\Field\\' . $type );
				}
			}
		}

		if ( ! class_exists( $return ) ) {
			do_action( 'wponion/field_class/load', $return, $type, $module_s );
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
	 * @return bool|array|\WPOnion\Field
	 */
	function wponion_field( $field = array(), $value = '', $unique = array() ) {
		$class = wponion_get_field_class( $field );
		if ( false !== $class ) {
			$base_unique = $unique;
			$field       = ( wpo_is_field( $field ) ) ? clone $field : $field;
			$hash        = null;
			if ( ! wponion_is_set( $field, '__no_instance', true ) ) {
				if ( wponion_is_array( $unique ) ) {
					$hash = isset( $unique['hash'] ) ? $unique['hash'] : '';
				}

				if ( ! wponion_is_set( $field, 'builder_path' ) ) {
					$field['builder_path'] = ( ! empty( $hash ) ) ? $hash : '';
				}
			}
			$instance = new $class( $field, $value, $base_unique );
			return ( $instance instanceof $class ) ? $instance : false;
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
			// translators: Creates a msg says that <p>requested field type not found</p>
			$error = sprintf( __( 'Requested Field Type %1$s  Is Not Registed With WPOnion', 'wponion' ), '<code>' . wponion_get_field_type( $field, false ) . '</code>' );
			return wponion_add_element( wpo_field( 'wp_notice_error' )
				->alt( true )
				->large( true )
				->content( "<p>${error}</p>" ) );
		}

		$class = ( isset( $field['__instance'] ) ) ? $field['__instance'] : false;
		if ( false === $class ) {
			$class = wponion_field( $field, $value, $unique );
			if ( false === $class ) {
				$class = wponion_get_field_class( $field );
			}
		}

		if ( false !== $class ) {
			$element = ( is_string( $class ) ) ? new $class( $field, $value, $unique ) : $class;
			return $element->final_output();
		} else {
			$title = __( 'Callback Arguments', 'wponion' );
			$data  = print_r( func_get_args(), true );
			$html  = "<h2>${title}</h2> <pre>${data}</pre>";
			return wponion_add_element( wpo_field( 'notice' )
				->notice_type( 'danger' )
				->content( sprintf( __( '<code>%s</code> Field Class Not Found.', 'wponion' ), wponion_get_field_type( $field, false ) ) . $html ) );
		}
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
			return ( Field_Types::exists( $field ) ) ? $field : false;
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
		return ( wponion_field_id( $field ) || is_string( $field ) );
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
		return ( ! in_array( wponion_get_field_type( $field, false ), Field_Types::get_design(), true ) );
	}
}

if ( ! function_exists( 'wponion_field_id' ) ) {
	/**
	 * Checks And Returns Field ID.
	 *
	 * @param array|\WPO\Field $field
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
			if ( isset( $value[ $field_id ] ) ) {
				return $value[ $field_id ];
			}
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
		return ( wponion_is_array( $field ) && isset( $field['default'] ) ) ? $field['default'] : null;
	}
}

if ( ! function_exists( 'wponion_select_frameworks' ) ) {
	/**
	 * Returns A List of select framework.
	 *
	 * @return mixed
	 */
	function wponion_select_frameworks() {
		return apply_filters( 'wponion/js/select_frameworks', array( 'selectize', 'select2', 'chosen' ) );
	}
}

if ( ! function_exists( 'wponion_validate_select_framework' ) ) {
	/**
	 * Validates And Returns The Selected Framework Name.
	 * This only used for selectbox.
	 *
	 * @param array|\WPO\Field $fld
	 *
	 * @return bool
	 */
	function wponion_validate_select_framework( $fld ) {
		foreach ( wponion_select_frameworks() as $f ) {
			if ( isset( $fld[ $f ] ) && ( true === $fld[ $f ] || $f === $fld[ $f ] || true === wponion_is_array( $fld[ $f ] ) ) ) {
				return $f;
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
					$return = ( is_rtl() ) ? 'wpo-select2 select2-rtl' : 'wpo-select2';
					break;
				case 'chosen':
					$return = ( is_rtl() ) ? 'wpo-chosen chosen-rtl' : 'wpo-chosen';
					break;
				case 'selectize':
					$return = 'wpo-selectize';
					break;
			}
		}
		return apply_filters( 'wponion/js/select_frameworks/html_class', explode( ' ', $return ), $framework );
	}
}

if ( ! function_exists( 'wponion_extract_all_fields_ids_defaults' ) ) {
	/**
	 * Extracts all fileds ids and returns it.
	 *
	 * @param array|\WPO\Container|\WPO\Field $fields
	 * @param bool                            $parent_id
	 *
	 * @return array
	 */
	function wponion_extract_all_fields_ids_defaults( $fields = array(), $parent_id = null ) {
		$return    = array();
		$parent_id = ( ! empty( $parent_id ) ) ? $parent_id . '_' : '';

		if ( $fields instanceof Base && $fields->has_containers() && ! $fields->has_callback() ) {
			foreach ( $fields->containers() as $container ) {
				/* @var $container WPO\Container */
				if ( $container->has_fields() && ! $container->has_callback() ) {
					$return = wponion_parse_args( $return, wponion_extract_all_fields_ids_defaults( $container, $parent_id . $container->name() ) );
				}
			}
		} elseif ( $fields instanceof Base && $fields->has_fields() && ! $fields->has_callback() ) {
			foreach ( $fields->fields() as $field ) {
				/* @var $field WPO\Field */
				if ( ! empty( $field['id'] ) ) {
					$nested = array();
					if ( ! empty( $field['fields'] ) && wponion_is_array( $field['fields'] ) ) {
						$nested = wponion_extract_all_fields_ids_defaults( $field, $parent_id . $field['id'] );
					}

					$return[ $parent_id . $field['id'] ] = isset( $field['default'] ) ? $field['default'] : null;

					if ( ! empty( $nested ) ) {
						$return = wponion_parse_args( $return, $nested );
					}
				}
			}
		} elseif ( wponion_is_array( $fields ) ) {
			foreach ( $fields as $data ) {
				if ( $data instanceof Container ) {
					$return = wponion_parse_args( $return, wponion_extract_all_fields_ids_defaults( $data, $parent_id . $data->name() ) );
				} elseif ( $data instanceof WPO\Field || isset( $data['id'] ) && isset( $data['type'] ) ) {
					$return[ $data['id'] ] = isset( $data['default'] ) ? $data['default'] : null;
					if ( ! empty( $data['fields'] ) && wponion_is_array( $data['fields'] ) ) {
						$return = wponion_extract_all_fields_ids_defaults( $data, $parent_id . $data['id'] );
					}
				}
			}
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
		$gfonts   = ( true === $google_fonts ) ? 'yes' : 'no';
		$webfonts = ( true === $websafe_fonts ) ? 'yes' : 'no';
		$_group   = ( true === $group ) ? 'yes' : 'no';
		$key      = 'web_fonts/' . $gfonts . $webfonts . $_group;

		try {
			return wponion_get_cache( $key );
		} catch ( Cache_Not_Found $exception ) {
			$_fonts = array();
			if ( true === $websafe_fonts ) {
				$fonts = wponion_websafe_fonts();
				if ( true === $group ) {
					$_fonts[ __( 'Websafe Fonts', 'wponion' ) ] = $fonts['fonts'];
				} else {
					$_fonts = wponion_parse_args( $_fonts, $fonts['fonts'] );
				}
			}

			if ( true === $google_fonts ) {
				$fonts = array_keys( wponion_google_fonts_data() );
				$fonts = array_combine( $fonts, $fonts );
				if ( true === $group ) {
					$_fonts[ __( 'Google Fonts', 'wponion' ) ] = $fonts;
				} else {
					$_fonts = $fonts;
				}
			}
			wponion_set_cache( $key, $_fonts );
			return $_fonts;
		}
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
		$gfonts   = ( true === $google_fonts ) ? 'yes' : 'no';
		$webfonts = ( true === $websafe_fonts ) ? 'yes' : 'no';
		$_group   = ( true === $group ) ? 'yes' : 'no';
		$key      = 'web_fonts_html/' . $gfonts . $webfonts . $_group;
		if ( ! wponion_is_array( $selected ) ) {
			$selected = array( $selected );
		}

		try {
			$html = wponion_get_cache( $key );
		} catch ( Cache_Not_Found $exception ) {
			$fonts = wponion_get_fonts_array( $google_fonts, $websafe_fonts, $group );
			$html  = '';
			foreach ( $fonts as $id => $val ) {
				if ( wponion_is_array( $val ) ) {
					$html .= '<optgroup label="' . $id . '">';
					foreach ( $val as $i => $v ) {
						$html .= '<option value="' . $i . '">' . $v . '</option>';
					}
					$html .= '</optgroup>';
				} else {
					$html .= '<option value="' . $id . '">' . $val . '</option>';
				}
			}
			wponion_set_cache( $key, $html );
		}

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
				if ( isset( $value['key'] ) && isset( $value['value'] ) ) {
					$return[ $value['key'] ] = $value['value'];
				}
			}
		}
		return $return;
	}
}

if ( ! function_exists( 'wponion_get_field_unique_html' ) ) {
	/**
	 * Converts PHP Array Into HTML Array
	 *
	 * @param $unique
	 *
	 * @return mixed|string
	 * @example PHP : array('base','firstpart','secondpart') To HTML : base[firstpart][secondpart]
	 */
	function wponion_get_field_unique_html( $unique ) {
		$unique = ( ! is_array( $unique ) ) ? explode( '/', $unique ) : $unique;
		$return = '';
		if ( is_array( $unique ) && ! empty( array_filter( $unique ) ) ) {
			$unique  = array_filter( $unique );
			$current = current( $unique );
			$return  = $current;
			foreach ( $unique as $id ) {
				if ( '[]' === $id ) {
					$return .= $id;
				} elseif ( $id !== $current ) {
					$return .= '[' . $id . ']';
				}
			}
		}
		return $return;
	}
}

if ( ! function_exists( 'wponion_get_field_unique' ) ) {
	/**
	 * @param bool                $base_unique
	 * @param bool|\WPO\Container $container
	 * @param bool|\WPO\Container $sub_container
	 * @param array               $extra
	 * @param bool                $is_array
	 *
	 * @return array|bool
	 */
	function wponion_get_field_unique( $base_unique = false, $container = false, $sub_container = false, $extra = array(), $is_array = false ) {
		$extra         = ( ! is_array( $extra ) ) ? array_filter( array( $extra ) ) : array_filter( $extra );
		$base_unique   = array( $base_unique );
		$base_unique[] = ( wpo_is_container( $container ) ) ? $container->name() : '';
		$base_unique[] = ( wpo_is_container( $sub_container ) ) ? $sub_container->name() : '';
		$base_unique   = array_filter( $base_unique );
		$base_unique   = array_merge( $base_unique, $extra );
		return ( false === $is_array ) ? implode( '/', $base_unique ) : $base_unique;
	}
}

if ( ! function_exists( 'wponion_input_group_html' ) ) {
	/**
	 * Generates WPOnion Prefix / Surfix HTMl.
	 *
	 * @param string|bool|array $prepend
	 * @param string|bool|array $append
	 * @param string|bool       $element
	 * @param string            $size - Options [input-group-sm | input-group-default | input-group-lg ]
	 *
	 * @return string
	 */
	function wponion_input_group_html( $prepend = false, $append = false, $element = false, $size = 'input-group-sm' ) {
		$prepend            = ( ! wponion_is_array( $prepend ) ) ? array( $prepend ) : $prepend;
		$append             = ( ! wponion_is_array( $append ) ) ? array( $append ) : $append;
		$prepend            = array_filter( $prepend );
		$append             = array_filter( $append );
		$is_empty           = ( ! empty( $prepend ) || ! empty( $append ) );
		$wrap_prepend_class = ( ! empty( $prepend ) ) ? ' input-group-has-prepend ' : '';
		$wrap_append_class  = ( ! empty( $append ) ) ? ' input-group-has-append ' : '';
		$base_start         = ( $is_empty ) ? '<div class="wponion-input-group-wrap ' . $wrap_append_class . ' ' . $wrap_prepend_class . '"><div class="input-group ' . $size . '">' : '';
		$base_end           = ( $is_empty ) ? '</div></div>' : '';
		$prepend_html       = '';
		$append_html        = '';

		if ( ! empty( $prepend ) ) {
			$prepend_html = ' <div class="input-group-prepend">';
			foreach ( $prepend as $value ) {
				$prepend_html .= '<span class="input-group-text">' . $value . '</span>';
			}
			$prepend_html .= '</div>';
		}

		if ( ! empty( $append ) ) {
			$append_html .= ' <div class="input-group-append">';
			foreach ( $append as $value ) {
				$append_html .= '<span class="input-group-text">' . $value . '</span>';
			}
			$append_html .= '</div>';
		}

		return $base_start . $prepend_html . $element . $append_html . $base_end;
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
		Field_Types::add( $field_type, $supports, $args );
	}
}

if ( ! function_exists( 'wponion_deregister_field' ) ) {
	/**
	 * Removes A Registered Field.
	 *
	 * @param string $field_type
	 */
	function wponion_deregister_field( $field_type = '' ) {
		Field_Types::remove( $field_type );
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
		Field_Types::add_support( $type, $support );
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
		Field_Types::remove_support( $type, $support );
	}
}
