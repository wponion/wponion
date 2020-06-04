<?php
defined( 'ABSPATH' ) || exit;

use WPO\Builder;
use WPO\Container;
use WPO\Field;
use WPO\Helper\Dependency\Builder as Dependency_Builder;
use WPOnion\DB\Option;
use WPOnion\DB\WP_DB;
use WPOnion\Localize_API;
use WPOnion\Registry\Field_Error;
use WPOnion\Theme_API;

if ( ! function_exists( 'wponion_is_version' ) ) {
	/**
	 * Adds Option to compare WPOnion Version.
	 *
	 * @param bool   $version_to_check
	 * @param string $compare
	 *
	 * @return bool|int|string
	 * @since 1.5
	 */
	function wponion_is_version( $version_to_check = false, $compare = '>=' ) {
		return version_compare( wponion()->version(), $version_to_check, $compare );
	}
}

if ( ! function_exists( 'wponion_is_instance' ) ) {
	/**
	 * Checks if given builder is a instance of any in below
	 *
	 * @param mixed  $builder
	 * @param string $type
	 *
	 * @return bool
	 */
	function wponion_is_instance( $builder, $type = 'builder' ) {
		switch ( strtolower( $type ) ) {
			case 'builder':
				return ( $builder instanceof Builder );
				break;
			case 'dependency_builder':
				return ( $builder instanceof Dependency_Builder );
			case 'container':
			case 'page':
			case 'section':
				return ( $builder instanceof Container );
				break;
			case 'field':
				return ( $builder instanceof Field );
				break;
			case 'field_error':
				return ( $builder instanceof Field_Error );
				break;
			case 'option':
				return ( $builder instanceof Option );
				break;
			case 'theme':
				return ( $builder instanceof Theme_API );
				break;
			case 'localizer':
				return ( $builder instanceof Localize_API );
				break;
			case 'wpdb':
				return ( $builder instanceof WP_DB );
				break;
		}
		return false;
	}
}

if ( ! function_exists( 'wponion_is_set' ) ) {
	/**
	 * Checks if a given key isset and if force check.
	 *
	 * @param array|object $array_or_object
	 * @param string       $key
	 * @param mixed        $is_strict
	 *
	 * @return bool
	 * @since 1.5
	 */
	function wponion_is_set( $array_or_object, $key, $is_strict = null ) {
		if ( wponion_is_array( $array_or_object ) ) {
			return ( ! is_null( $is_strict ) ) ? ( isset( $array_or_object[ $key ] ) && $is_strict === $array_or_object[ $key ] ) : isset( $array_or_object[ $key ] );
		}
		return ( ! is_null( $is_strict ) ) ? ( isset( $array_or_object->{$key} ) && $is_strict === $array_or_object->{$key} ) : isset( $array_or_object->{$key} );
	}
}

if ( ! function_exists( 'wponion_is_defined' ) ) {
	/**
	 * Validates if a constant if defined ?
	 *
	 * @param string $key
	 * @param bool   $is_strict
	 *
	 * @return bool
	 * @since 1.5
	 */
	function wponion_is_defined( $key, $is_strict = false ) {
		return ( $is_strict ) ? ( defined( $key ) && true === constant( $key ) ) : ( defined( $key ) );
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

if ( ! function_exists( 'wponion_is_field_debug' ) ) {
	/**
	 * Checks if field debug is enabled.
	 *
	 * @return bool
	 */
	function wponion_is_field_debug() {
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

if ( ! function_exists( 'wponion_is_array' ) ) {
	/**
	 * @param      $data
	 * @param bool $is_empty if set to true then it checks for empty and returns true / false
	 *
	 * @return bool
	 */
	function wponion_is_array( $data, $is_empty = false ) {
		return ( $is_empty ) ? ( wponion_is_array( $data, false ) && ! empty( $data ) ) : ( wpo_is_field( $data ) || is_array( $data ) );
	}
}

if ( ! function_exists( 'wponion_is_countable' ) ) {
	/**
	 * Counts Given values.
	 *
	 * @param      $data
	 * @param bool $strict
	 *
	 * @return bool|int
	 * @since 1.5
	 */
	function wponion_is_countable( $data, $strict = false ) {
		if ( is_countable( $data ) ) {
			return ( $strict ) ? count( $data ) == $strict : count( $data );
		}
		return false;
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
		return ( isset( $field['un_array'] ) && true === $field['un_array'] );
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

if ( ! function_exists( 'wponion_is_network' ) ) {
	/**
	 * Checks if current request is network admin. / network
	 *
	 * @param bool $is_admin
	 *
	 * @return bool
	 * @since 1.5
	 */
	function wponion_is_network( $is_admin = false ) {
		return ( $is_admin ) ? ( is_network_admin() && is_multisite() ) : is_multisite();
	}
}

/**
 * Field Validators
 */
if ( ! function_exists( 'wponion_is_email' ) ) {
	/**
	 * Checks if given value is a email.
	 *
	 * @param $value
	 *
	 * @return bool|string
	 */
	function wponion_is_email( $value ) {
		return ( ! sanitize_email( $value ) ) ? __( 'Please Enter A Valid Email', 'wponion' ) : true;
	}
}

if ( ! function_exists( 'wponion_is_url' ) ) {
	/**
	 * Checks if given value is a url.
	 *
	 * @param $value
	 *
	 * @return mixed
	 */
	function wponion_is_url( $value ) {
		return ( false === filter_var( $value, FILTER_VALIDATE_URL ) ) ? __( 'Please Enter A Valid URL', 'wponion' ) : true;
	}
}

if ( ! function_exists( 'wponion_is_numeric' ) ) {
	/**
	 * Checks if given value is a numeric.
	 *
	 * @param $value
	 *
	 * @return bool|string
	 */
	function wponion_is_numeric( $value ) {
		return ( ! is_numeric( $value ) ) ? __( 'Please Enter A Valid Numeric Value', 'wponion' ) : true;
	}
}

if ( ! function_exists( 'wponion_is_required' ) ) {
	/**
	 * Checks if given value is a empty.
	 *
	 * @param $value
	 *
	 * @return bool|string
	 */
	function wponion_is_required( $value ) {
		return ( empty( $value ) ) ? __( 'This Field Is Required', 'wponion' ) : true;
	}
}

if ( ! function_exists( 'wponion_is_ip' ) ) {
	/**
	 * Checks if given value is a ip address.
	 *
	 * @param $value
	 *
	 * @return bool|string
	 */
	function wponion_is_ip( $value ) {
		return ( false === filter_var( $value, FILTER_VALIDATE_IP ) ) ? __( 'Enter A Valid IP Address', 'wponion' ) : true;
	}
}

if ( ! function_exists( 'wponion_is_regex' ) ) {
	/**
	 * Checks if given value is a ip address.
	 *
	 * @param $value
	 *
	 * @return bool|string
	 */
	function wponion_is_regex( $value ) {
		return ( false === filter_var( $value, FILTER_VALIDATE_REGEXP ) ) ? __( 'Enter A Valid Regex', 'wponion' ) : true;
	}
}

if ( ! function_exists( 'wponion_is_mac_id' ) ) {
	/**
	 * Checks if given value is a ip address.
	 *
	 * @param $value
	 *
	 * @return bool|string
	 */
	function wponion_is_mac_id( $value ) {
		return ( false === filter_var( $value, FILTER_VALIDATE_MAC ) ) ? __( 'Enter A Valid MAC ID', 'wponion' ) : true;
	}
}

if ( ! function_exists( 'wponion_is_valid_html' ) ) {
	/**
	 * Checks if given string is valid html or not.
	 *
	 * @param $string
	 *
	 * @return bool
	 */
	function wponion_is_valid_html( $string ) {
		return ( strip_tags( $string ) !== $string );
	}
}

if ( ! function_exists( 'wponion_is_bool_val' ) ) {
	/**
	 * Checks And Converts Boolean Value Into Proper Bool.
	 *
	 * @param string|mixed $value
	 * @param bool         $is_true
	 * @param bool         $is_false
	 *
	 * @return array|bool
	 */
	function wponion_is_bool_val( $value, $is_true = true, $is_false = false ) {
		if ( wponion_is_array( $value ) ) {
			return array_map( 'wponion_is_bool_val', $value );
		} else {
			$true  = apply_filters( 'wponion/is_bool/true_values', array( true, 'true', 'TRUE', 1, '1' ) );
			$false = apply_filters( 'wponion/is_bool/false_values', array( false, 'false', 'FALSE', 0, '0' ) );
			$value = ( in_array( $value, $true, true ) ) ? $is_true : $value;
			$value = ( in_array( $value, $false, true ) ) ? $is_false : $value;
		}
		return $value;
	}
}
