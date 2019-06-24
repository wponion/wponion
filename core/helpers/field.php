<?php
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

			// Internal
			'builder_path'    => false,
		);
	}
}

if ( ! function_exists( 'wponion_validate_bool_val' ) ) {
	/**
	 * Checks And Converts Boolean Value Into Proper Bool.
	 *
	 * @param string|mixed $value
	 * @param bool         $is_true
	 * @param bool         $is_false
	 *
	 * @return array|bool
	 */
	function wponion_validate_bool_val( $value, $is_true = true, $is_false = false ) {
		if ( wponion_is_array( $value ) ) {
			return array_map( 'wponion_validate_bool_val', $value );
		}
		if ( in_array( $value, array( true, 'true', 'TRUE', 1, '1' ), true ) ) {
			$value = $is_true;
		}
		if ( in_array( $value, array( false, 'false', 'FALSE', 0, '0' ), true ) ) {
			$value = $is_false;
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
	 * @return bool|array|\WPOnion\Field
	 */
	function wponion_field( $field = array(), $value = '', $unique = array() ) {
		$class       = wponion_get_field_class( $field );
		$base_unique = $unique;

		if ( wpo_is_field( $field ) ) {
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

			if ( ! isset( $field['builder_path'] ) ) {
				$field['builder_path'] = ( ! empty( $hash ) ) ? $hash : '';
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

		$class = ( isset( $field['__instance'] ) ) ? $field['__instance'] : false;
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
			$output = ob_get_clean();
		} else {
			ob_start();
			echo '<h2>' . __( 'Callback Arguments', 'wponion' ) . '</h2>';
			echo '<pre>' . print_r( func_get_args(), true ) . '</pre>';
			$args   = ob_get_clean();
			$output = wponion_add_element( array(
				'type'        => 'notice',
				'notice_type' => 'danger',
				// translators:
				'content'     => sprintf( __( '<code>%s</code> Field Class Not Found.', 'wponion' ), wponion_get_field_type( $field, false ) ) . $args,
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

if ( ! function_exists( 'wponion_valid_user_input_field' ) ) {
	/**
	 * Checks if field type is a valid user editable field.
	 *
	 * @param $field
	 *
	 * @return bool
	 */
	function wponion_valid_user_input_field( $field ) {
		return ( ! in_array( wponion_get_field_type( $field, false ), \WPOnion\Registry\Field_Types::get_design(), true ) );
	}
}

if ( ! function_exists( 'wponion_is_unarrayed' ) ) {
	/**
	 * Check if a field is unarrayed.
	 *
	 * @param \WPO\Field|\WPO\Container|array $field
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
		return apply_filters( 'wponion_backup_fonts', \WPOnion\Helper::fonts( 'backup' ) );
	}
}

if ( ! function_exists( 'wponion_websafe_fonts' ) ) {
	/**
	 * Returns Websafe Fonts.
	 *
	 * @return mixed
	 */
	function wponion_websafe_fonts() {
		return apply_filters( 'wponion_websafe_fonts', \WPOnion\Helper::fonts( 'websafe' ) );
	}
}

if ( ! function_exists( 'wponion_google_fonts' ) ) {
	/**
	 * Reads Google Fonts. Data.
	 *
	 * @return mixed
	 */
	function wponion_google_fonts() {
		return apply_filters( 'wponion_google_fonts', \WPOnion\Helper::fonts( 'google' ) );
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
		} catch ( \WPOnion\Cache_Not_Found $exception ) {
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
		$html     = '';
		if ( ! wponion_is_array( $selected ) ) {
			$selected = array( $selected );
		}

		try {
			$html = wponion_get_cache( $key );
		} catch ( \WPOnion\Cache_Not_Found $exception ) {
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
				if ( true === isset( $value['key'] ) && true === isset( $value['value'] ) ) {
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
		$return = $unique;
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
