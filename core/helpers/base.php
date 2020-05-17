<?php

use WPO\Builder;
use WPO\Container;
use WPO\Field;
use WPOnion\DB\Option;
use WPOnion\Theme_API;

defined( 'ABSPATH' ) || exit;

if ( ! function_exists( 'wponion_is_defined' ) ) {
	/**
	 * Validates if a constant if defined ?
	 *
	 * @param string $key
	 * @param bool   $is_strict
	 *
	 * @return bool
	 * @since {NEWVERSION}
	 */
	function wponion_is_defined( $key, $is_strict = false ) {
		return ( $is_strict ) ? ( defined( $key ) && true === constant( $key ) ) : ( defined( $key ) );
	}
}

if ( ! function_exists( 'wponion_define' ) ) {
	/**
	 * Defines A Constant if not exists.
	 *
	 * @param string $key
	 * @param mixed  $value
	 * @param mixed  $case_insensitive If set to true, the constant will be defined case-insensitive.
	 *
	 * @return bool
	 * @since {NEWVERSION}
	 */
	function wponion_define( $key, $value, $case_insensitive = false ) {
		$is_strict = ( true === $value );
		if ( ! wponion_is_defined( $key, $is_strict ) ) {
			define( $key, $value, $case_insensitive );
			return true;
		}
		return false;
	}
}

if ( ! function_exists( 'wponion_ajax_action' ) ) {
	/**
	 * @param bool $action
	 *
	 * @return bool|mixed
	 */
	function wponion_ajax_action( $action = false ) {
		if ( false === $action ) {
			return ( isset( $_REQUEST['wponion-ajax'] ) ) ? $_REQUEST['wponion-ajax'] : false;
		}
		return ( isset( $_REQUEST['wponion-ajax'] ) && $action === $_REQUEST['wponion-ajax'] );
	}
}

if ( ! function_exists( 'wponion_is_ajax' ) ) {
	/**
	 * Checks if current request is ajax.
	 *
	 * @param bool|string $action
	 *
	 * @return bool|mixed
	 */
	function wponion_is_ajax( $action = false ) {
		if ( defined( 'DOING_AJAX' ) && true === DOING_AJAX ) {
			if ( false === $action ) {
				return ( isset( $_REQUEST['action'] ) ) ? $_REQUEST['action'] : false;
			}
			return ( isset( $_REQUEST['action'] ) && $action === $_REQUEST['action'] );
		}
		return false;
	}
}

if ( ! function_exists( 'wponion_get_var' ) ) {
	/**
	 * Getting POST Var
	 *
	 * @param        $var
	 * @param string $default
	 *
	 * @return string
	 */
	function wponion_get_var( $var, $default = '' ) {
		if ( isset( $_POST[ $var ] ) ) {
			return ( wponion_is_array( $_POST[ $var ] ) ) ? $_POST[ $var ] : sanitize_text_field( $_POST[ $var ] );
		}
		if ( isset( $_GET[ $var ] ) ) {
			return ( wponion_is_array( $_GET[ $var ] ) ) ? $_GET[ $var ] : sanitize_text_field( $_GET[ $var ] );
		}
		return $default;
	}
}

if ( ! function_exists( 'wponion_validate_parent_container_ids' ) ) {
	/**
	 * Checks if given section and parent id are valid and none of them has empty values.
	 *
	 * @param array $ids
	 *
	 * @return array|bool
	 */
	function wponion_validate_parent_container_ids( $ids = array() ) {
		if ( ! empty( $ids['sub_container_id'] ) && empty( $ids['container_id'] ) ) {
			return array(
				'sub_container_id' => false,
				'container_id'     => $ids['sub_container_id'],
			);
		}
		return ( empty( array_filter( $ids ) ) ) ? false : $ids;
	}
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
		$atts = ( is_string( $attributes ) ) ? $attributes : '';
		if ( ! empty( $attributes ) && is_array( $attributes ) ) {
			foreach ( $attributes as $key => $value ) {
				if ( 'class' === $key && is_array( $value ) ) {
					$value = wponion_html_class( $value );
				}

				$value = ( wponion_is_array( $value ) ) ? wp_json_encode( $value ) : $value;
				$atts  .= ( 'only-key' === $value ) ? ' ' . esc_attr( $key ) : ' ' . esc_attr( $key ) . '="' . esc_attr( $value ) . '"';
			}
		}
		return $atts;
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
		return wponion_hash_string( wp_json_encode( $array ) );
	}
}

if ( ! function_exists( 'wponion_is_debug' ) ) {
	/**
	 * Checks if WP_Debug Is enabled.
	 * WP_DEBUG
	 * WPONION_DEV_MODE
	 *
	 * @return bool
	 */
	function wponion_is_debug() {
		if ( defined( 'WPONION_DEV_MODE' ) && false === WPONION_DEV_MODE ) {
			return false;
		}
		return ( defined( 'WPONION_DEV_MODE' ) && true === WPONION_DEV_MODE || defined( 'WP_DEBUG' ) && true === WP_DEBUG );
	}
}

if ( ! function_exists( 'wponion_field_debug' ) ) {
	/**
	 * Checks if field debug is enabled.
	 *
	 * @return bool
	 */
	function wponion_field_debug() {
		if ( defined( 'WPONION_FIELD_DEBUG' ) && false === WPONION_FIELD_DEBUG ) {
			return false;
		}
		return ( defined( 'WPONION_FIELD_DEBUG' ) && true === WPONION_FIELD_DEBUG || wponion_is_debug() );
	}
}

if ( ! function_exists( 'wponion_is_callable' ) ) {
	/**
	 * Checks if given value is a callback.
	 *
	 * @param $callback
	 *
	 * @return bool
	 */
	function wponion_is_callable( $callback ) {
		if ( is_callable( $callback ) ) {
			return true;
		}

		if ( is_string( $callback ) && has_action( $callback ) ) {
			return true;
		}

		if ( is_string( $callback ) && has_filter( $callback ) ) {
			return true;
		}
		return false;
	}
}

if ( ! function_exists( 'wponion_callback' ) ) {
	/**
	 * Custom function to handle multiple callback options
	 * 1. Function
	 * 2. Inline Function
	 * 3. Class instance
	 * 4. Class Static Method
	 * 5. do_action
	 * 6. apply_filters.
	 *
	 * @param       $callback
	 * @param array $args
	 *
	 * @return bool|false|mixed|string
	 */
	function wponion_callback( $callback, $args = array() ) {
		$data = false;
		try {
			if ( is_callable( $callback ) ) {
				$args = ( ! wponion_is_array( $args ) ) ? array( $args ) : $args;
				$data = call_user_func_array( $callback, $args );
			} elseif ( is_string( $callback ) && has_filter( $callback ) ) {
				$data = call_user_func_array( 'apply_filters', wponion_parse_args( array( $callback ), $args ) );
			} elseif ( is_string( $callback ) && has_action( $callback ) ) {
				ob_start();
				$args = ( ! wponion_is_array( $args ) ) ? array( $args ) : $args;
				echo call_user_func_array( 'do_action', wponion_parse_args( array( $callback ), $args ) );
				$data = ob_get_clean();
				//ob_flush();
			}
		} catch ( Exception $exception ) {
			$data = false;
		}
		return $data;
	}
}

if ( ! function_exists( 'wponion_is_array' ) ) {
	/**
	 * @param $data
	 *
	 * @return bool
	 */
	function wponion_is_array( $data ) {
		return ( wpo_is_field( $data ) || is_array( $data ) );
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
	 * @since {NEWVERSION}
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
	 * @param array|\WPO\Field $new
	 * @param array|\WPO\Field $old
	 *
	 * @return array|object
	 */
	function wponion_parse_args( $new, $old ) {
		if ( is_array( $new ) && is_array( $old ) ) {
			return wp_parse_args( $new, $old );
		}

		$_new      = ( wpo_is_field( $new ) ) ? $new->get() : $new;
		$_defaults = ( wpo_is_field( $old ) ) ? $old->get() : $old;
		$final     = wp_parse_args( $_new, $_defaults );

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
	 * @since {NEWVERSION}
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

if ( ! function_exists( 'wponion_has_column_class' ) ) {
	/**
	 * Validates Provided string & check if CSS Grid class exists.
	 *
	 * @param $class
	 *
	 * @return bool
	 * @since {NEWVERSION}
	 */
	function wponion_has_column_class( $class ) {
		preg_match_all( '/col\b-(xs|sm|md|lg|xl)?\b-?\b(1[0-2]|[1-9])/', $class, $matches, PREG_SET_ORDER, 0 );
		return ( empty( $matches ) ) ? false : $matches;
	}
}

if ( ! function_exists( 'wponion_get_possible_column_class' ) ) {
	/**
	 * @param array $matches
	 * $matches = array(
	 *    array(
	 *        0 => 'wpo-col-xs-12', // Full Column Class
	 *        1 => 'xs', // Device Class
	 *        2 => '12' // Column Count
	 *    ),
	 *    array(
	 *        0 => 'wpo-col-xs-12', // Full Column Class
	 *        1 => 'xs', // Device Class
	 *        2 => '12' // Column Count
	 *    ),
	 * );
	 *
	 * @return bool
	 */
	function wponion_get_possible_column_class( $matches = array() ) {
		$return = array();
		if ( wponion_is_array( $matches ) ) {
			foreach ( $matches as $class ) {
				if ( ! empty( array_filter( $class ) ) ) {
					$count    = ( isset( $class[2] ) && '12' !== $class[2] ) ? '-' . ( 12 - $class[2] ) : null;
					$return[] = 'wpo-col-' . $class[1] . $count;
				}
			}
		}
		return join( ' ', $return );
	}
}

if ( ! function_exists( 'wponion_ajax_args' ) ) {
	/**
	 * Generates Default WPOnion Ajax Args.
	 *
	 * @param bool $with_scripts
	 *
	 * @return array
	 */
	function wponion_ajax_args( $with_scripts = false ) {
		$return = array();

		if ( false !== $with_scripts ) {
			do_action( 'wponion/ajax/enqueue_assets' );

			if ( is_array( $with_scripts ) ) {
				foreach ( $with_scripts as $asset ) {
					wponion_load_asset( $asset );
				}
			} elseif ( true !== $with_scripts ) {
				wponion_load_asset( $with_scripts );
			}

			$styles_data  = array();
			$scripts_data = array();

			if ( ! empty( wp_styles()->queue ) && is_array( wp_styles()->queue ) ) {
				foreach ( wp_styles()->queue as $handle ) {
					wponion_catch_output( true );
					wp_styles()->do_item( $handle );
					$styles_data[ $handle ] = wponion_catch_output( false );
				}
			}

			if ( ! empty( wp_scripts()->queue ) && is_array( wp_scripts()->queue ) ) {
				foreach ( wp_scripts()->queue as $handle ) {
					wponion_catch_output( true );
					wp_scripts()->do_item( $handle );
					$scripts_data[ $handle ] = wponion_catch_output( false );
				}
			}

			$return['scripts']      = $scripts_data;
			$return['styles']       = $styles_data;
			$return['scripts_html'] = implode( ' ', $scripts_data );
			$return['styles_html']  = implode( ' ', $styles_data );
		}
		$return['localizer'] = wponion_localize()->as_array();
		return array( 'wpo_core' => $return );
	}
}

if ( ! function_exists( 'wponion_catch_output' ) ) {
	/**
	 * @param bool|string $type
	 *
	 * @return false|string
	 */
	function wponion_catch_output( $type = true ) {
		$data = false;
		if ( true === $type ) {
			ob_start();
		}

		if ( false === $type ) {
			$data = ob_get_clean();
			/**
			 * @internal
			 * ob_fulush commneted because of wp_list_table layout issue when using 2 tables next to each other
			 */
			//ob_flush();
		}

		if ( wponion_is_callable( $type ) ) {
			wponion_catch_output( true );
			echo wponion_callback( $type );
			$data = wponion_catch_output( false );
		}
		return $data;
	}
}

if ( ! function_exists( 'wponion_wp_editor_api' ) ) {
	/**
	 * Checks if editor api exists.
	 *
	 * @return bool
	 */
	function wponion_wp_editor_api() {
		return is_version_gte( 'wordpress', '>=' );
	}
}

if ( ! function_exists( 'wponion_fix_json_string' ) ) {
	/**
	 * Validates & Fixes JSON String that dose not have quotes in the KEY.
	 *
	 * @param $string
	 *
	 * @return string|string[]|null
	 */
	function wponion_fix_json_string( $string ) {
		return preg_replace( '/(?<!")([a-zA-Z0-9_]+)(?!")(?=:)/i', '"$1"', $string );
	}
}

if ( ! function_exists( 'wponion_is' ) ) {
	/**
	 * Checks if given builder is a instance of any in below
	 *
	 * @param bool|\WPO\Container|\WPO\Builder|\WPO\Field|\WPOnion\DB\Option $builder
	 * @param string                                                         $type
	 *
	 * @return bool
	 */
	function wponion_is( $builder, $type = 'builder' ) {
		switch ( strtolower( $type ) ) {
			case 'builder':
				return ( $builder instanceof Builder );
				break;
			case 'dependency_builder':
				return ( $builder instanceof \WPO\Helper\Dependency\Builder );
			case 'container':
			case 'page':
			case 'section':
				return ( $builder instanceof Container );
				break;
			case 'field':
				return ( $builder instanceof Field );
				break;
			case 'option':
				return ( $builder instanceof Option );
				break;
			case 'theme':
				return ( $builder instanceof Theme_API );
				break;
		}
		return false;
	}
}


// WPOnion Cache Related Functions
require_once wponion()->path( 'core/helpers/cache.php' );

// WPOnion Database Related Functions.
require_once wponion()->path( 'core/helpers/db.php' );

// WPOnion Assets Related Functions.
require_once wponion()->path( 'core/helpers/addons.php' );

// WPOnion Assets Related Functions.
require_once wponion()->path( 'core/helpers/util.php' );

// WPOnion Assets Related Functions.
require_once wponion()->path( 'core/helpers/builder.php' );

// WPOnion Assets Related Functions.
require_once wponion()->path( 'core/helpers/assets.php' );

// WPOnion Fields Related Functions.
require_once wponion()->path( 'core/helpers/field.php' );

// WPOnion Registry Related Functions.
require_once wponion()->path( 'core/helpers/registry.php' );

// WPOnion Field Sanitize Related Functions.
require_once wponion()->path( 'core/helpers/sanitize.php' );

// WPOnion Module Related Functions
require_once wponion()->path( 'core/helpers/module.php' );

// WPOnion Module Related Functions
require_once wponion()->path( 'core/helpers/validator.php' );

// WPOnion Theme Related Functions
require_once wponion()->path( 'core/helpers/theme.php' );

// WPOnion Alias Functions.
require_once wponion()->path( 'core/helpers/alias.php' );

// WPOnion Internal Functions.
require_once wponion()->path( 'core/helpers/internal.php' );
