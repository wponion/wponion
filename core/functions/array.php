<?php

use WPOnion\Helper;

defined( 'ABSPATH' ) || exit;

if ( ! function_exists( 'wponion_array_to_html_attributes' ) ) {
	/**
	 * Converts PHP Array To HTML Attributes.
	 *
	 * @param $attributes
	 *
	 * @return string
	 */
	function wponion_array_to_html_attributes( $attributes ) {
		if ( ! empty( $attributes ) && is_array( $attributes ) ) {
			$atts = array_map( function ( $key, $value ) {
				if ( wponion_is_array( $value ) ) {
					$value = ( 'class' === $key ) ? wponion_html_class( $value ) : wp_json_encode( $value );
				}

				if ( 'only-key' === $value || is_numeric( $key ) ) {
					return esc_attr( $key );
				}
				return sprintf( '%1$s="%2$s"', esc_attr( $key ), esc_attr( $value ) );
			}, array_keys( $attributes ), array_values( $attributes ) );
			return implode( ' ', $atts );
		}
		return ( is_string( $attributes ) ) ? $attributes : '';
	}
}

if ( ! function_exists( 'wponion_html_class' ) ) {
	/**
	 * Handles HTML Class and returns only unique and usable html clss.
	 *
	 * @param array|string $user_class
	 * @param array|string $default_class
	 * @param bool         $return_string
	 *
	 * @return string|array
	 */
	function wponion_html_class( $user_class = array(), $default_class = array(), $return_string = true ) {
		if ( ! wponion_is_array( $user_class ) ) {
			$user_class = explode( ' ', $user_class );
		}

		if ( ! wponion_is_array( $default_class ) ) {
			$default_class = explode( ' ', $default_class );
		}

		$user_class = wponion_parse_args( $default_class, $user_class );
		$user_class = array_filter( array_unique( $user_class ) );
		if ( true === $return_string ) {
			return implode( ' ', $user_class );
		}
		return $user_class;

	}
}

if ( ! function_exists( 'wponion_cast_array' ) ) {
	/**
	 * Casts As array.
	 *
	 * @param mixed  $array
	 * @param string $array_key
	 *
	 * @return array
	 * @example wponion_cast_array('mystring') --> array('mystring')
	 * @example wponion_cast_array('mystring','custom_key') --> array('custom_key' => 'mystring')
	 * @since 1.5
	 */
	function wponion_cast_array( $array, $array_key = null ) {
		if ( ! wponion_is_array( $array ) && ! empty( $array ) ) {
			return ( ! empty( $array_key ) ) ? array( $array_key => $array ) : array( $array );
		}
		return ( ! wponion_is_array( $array ) ) ? array() : $array;
	}
}

if ( ! function_exists( 'wponion_parse_args' ) ) {
	/**
	 * @param array|string|\WPO\Field $new
	 * @param array|string|\WPO\Field $old
	 *
	 * @return array|object
	 */
	function wponion_parse_args( $new, $old = '' ) {
		if ( is_scalar( $new ) && ! is_scalar( $old ) ) {
			return $old;
		}

		if ( ! is_scalar( $new ) && is_scalar( $old ) ) {
			return $new;
		}

		if ( ( is_array( $new ) && is_array( $old ) ) || ( is_string( $new ) && ! wpo_is_field( $old ) ) ) {
			return wp_parse_args( $new, $old );
		}

		$_new      = ( wpo_is_field( $new ) ) ? $new->get() : $new;
		$_defaults = ( wpo_is_field( $old ) ) ? $old->get() : $old;
		$final     = wponion_parse_args( $_new, $_defaults );

		if ( wpo_is_field( $new ) ) {
			$new->set( $final );
			return $new;
		}
		if ( wpo_is_field( $old ) ) {
			$old->set( $final );
			return $old;
		}

		return $new;
	}
}

if ( ! function_exists( 'wponion_parse_args_mixed' ) ) {
	/**
	 * Parses Args Even if $user_values is a not a array. it just appends with $defaults and returns it.
	 *
	 * @param string $save_with
	 * @param array  $user_values
	 * @param array  $defaults
	 *
	 * @return array|object|\WPO\Field
	 * @example
	 *    wponion_parse_args_mixed('content','some string', array('content' => false,'title' => 'Some Value'));
	 *        --> array('content' => 'some string','title' =>'Some Value');
	 * @since 1.5
	 */
	function wponion_parse_args_mixed( $save_with = '', $user_values = array(), $defaults = array() ) {
		if ( true === $user_values ) {
			return $user_values;
		} elseif ( wponion_is_array( $user_values ) ) {
			return wponion_parse_args( wponion_cast_array( $user_values ), wponion_cast_array( $defaults ) );
		} elseif ( false !== $user_values ) {
			$defaults[ $save_with ] = $user_values;
		}
		return $defaults;
	}
}

if ( ! function_exists( 'wponion_parse_args_forced_values' ) ) {
	/**
	 * Parses Args & Force Set Values Provided in $forced_values
	 *
	 * @param string|array $save_with
	 * @param mixed        $user_values
	 * @param array        $defaults
	 * @param array        $forced_values
	 *
	 * @return array|object
	 * @uses wponion_parse_args_mixed
	 * @example  {
	 *    wponion_parse_args_forced_values('title','yourtitle',array(
	 *        'arg2'=>false,
	 *        'title'=>false,
	 *    ),array( 'force_arg'=>false ) );
	 *    return: array(
	 *            'title' => 'yourtitle',
	 *            'arg2' =>false,
	 *            'force_arg'=>false
	 *        );
	 * }
	 *
	 */
	function wponion_parse_args_forced_values( $save_with, $user_values, $defaults = array(), $forced_values = array() ) {
		if ( wponion_is_array( $user_values ) || wponion_is_array( $defaults ) ) {
			$_defaults = wponion_parse_args_mixed( $save_with, $user_values, $defaults );
			$defaults  = ( true === $_defaults ) ? $defaults : $_defaults;
			foreach ( $forced_values as $_key => $val ) {
				$defaults[ $_key ] = ( ! isset( $defaults[ $_key ] ) ) ? '' : $defaults[ $_key ];
				$defaults[ $_key ] = wponion_parse_args_forced_values( $_key, $val, $defaults[ $_key ] );
			}
			return $defaults;
		}
		return $user_values;
	}
}

if ( ! function_exists( 'wponion_handle_array_merge' ) ) {
	/**
	 * @param array|mixed $new_values
	 * @param array|mixed $old_values
	 * @param bool        $merge
	 *
	 * @return array|object
	 */
	function wponion_handle_array_merge( $new_values, $old_values, $merge = false ) {
		if ( false === $merge ) {
			return $new_values;
		}
		$old_values = ( ! wponion_is_array( $old_values ) ) ? array() : $old_values;
		return wponion_parse_args( $new_values, $old_values );
	}
}

if ( ! function_exists( 'wponion_internal_options_data' ) ) {
	/**
	 * Fetches & Returns Internal Options.
	 *
	 * @param       $slug
	 * @param array $default
	 *
	 * @return array
	 * @internal
	 */
	function wponion_internal_options_data( $slug, $default = array() ) {
		$data = Helper::get_internal_options();
		return ( isset( $data[ $slug ] ) ) ? $data[ $slug ] : $default;
	}
}

if ( ! function_exists( 'wponion_extract_data_from_array_object' ) ) {
	/**
	 * This function can be used to extract values from an object / array or a callable methods in runtime.
	 *
	 * @param $array_or_object
	 * @param $key_to_call
	 *
	 * @return bool|false|mixed|string
	 * @since 1.5
	 */
	function wponion_extract_data_from_array_object( $array_or_object, $key_to_call ) {
		$result = false;
		if ( ! empty( $key_to_call ) && is_string( $key_to_call ) ) {
			if ( wponion_is_array( $array_or_object ) ) {
				if ( isset( $array_or_object[ $key_to_call ] ) ) {
					$result = $array_or_object[ $key_to_call ];
				}
			} elseif ( is_object( $array_or_object ) ) {
				if ( isset( $array_or_object->{$key_to_call} ) ) {
					$result = $array_or_object->{$key_to_call};
				} elseif ( wponion_is_callable( array( $array_or_object, $key_to_call ) ) ) {
					$result = wponion_callback( array( $array_or_object, $key_to_call ) );
				}
			}
		}
		return $result;
	}
}

if ( ! function_exists( 'wponion_array_merge' ) ) {
	/**
	 * This function merges array with before,after&center option.
	 *
	 * @param       $source
	 * @param array $before
	 * @param array $middle
	 * @param array $after
	 *
	 * @return array|object|\WPO\Field
	 * @since 1.5
	 */
	function wponion_array_merge( $source, $before = array(), $middle = array(), $after = array() ) {
		if ( ! empty( $source ) && wponion_is_array( $source ) ) {
			$before = wponion_cast_array( $before );
			$middle = wponion_cast_array( $middle );
			$after  = wponion_cast_array( $after );

			if ( ! empty( $before ) ) {
				$source = array_merge( $before, $source );
			}

			if ( ! empty( $middle ) ) {
				$source = array_merge( $source, $middle );
			}

			if ( ! empty( $after ) ) {
				$source = array_merge( $source, $after );
			}
		}
		return $source;
	}
}
