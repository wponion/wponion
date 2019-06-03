<?php
/**
 *
 * Initial version created 05-05-2018 / 04:37 PM
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @link
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! function_exists( 'wponion_is_ajax' ) ) {
	/**
	 * Checks if current request is ajax.
	 *
	 * @return bool
	 */
	function wponion_is_ajax() {
		return ( isset( $_POST ) && isset( $_POST['action'] ) && 'heartbeat' === $_POST['action'] ) ? true : false;
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

if ( ! function_exists( 'wponion_js_obj_name' ) ) {
	/**
	 * Returns a quniue js key.
	 *
	 * @param string $prefix
	 * @param string $surfix
	 * @param string $inner_content
	 *
	 * @return string
	 */
	function wponion_js_obj_name( $prefix = '', $surfix = '', $inner_content = '' ) {
		return $prefix . wponion_hash_string( $inner_content ) . $surfix;
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
	function wponion_js_vars( $object_name, $l10n, $with_script_tag = true ) {
		foreach ( (array) $l10n as $key => $value ) {
			if ( ! is_scalar( $value ) ) {
				continue;
			}
			$l10n[ $key ] = html_entity_decode( (string) $value, ENT_QUOTES, 'UTF-8' );
		}
		$script = ( ! empty( $object_name ) ) ? "var $object_name = " . wp_json_encode( $l10n ) . ';' : wp_json_encode( $l10n );

		if ( ! empty( $after ) ) {
			$script .= "\n$after;";
		}
		if ( $with_script_tag ) {
			$h = "<script type='text/javascript'>\n /* <![CDATA[ */\n";
			$h = $h . " $script\n";
			$h = $h . " /* ]]> */\n </script>\n";
			return $h;
		}
		return $script;
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
		$atts = '';
		if ( ! empty( $attributes ) ) {
			foreach ( $attributes as $key => $value ) {
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
				ob_flush();
			}
		} catch ( Exception $exception ) {
			$data = false;
		}
		return $data;
	}
}

if ( ! function_exists( 'wponion_highlight_string' ) ) {
	/**
	 * Highlights A Code.
	 *
	 * @param      $sting
	 * @param bool $append_pre
	 *
	 * @return bool|string|string
	 * @uses \highlight_string()
	 *
	 */
	function wponion_highlight_string( $sting, $append_pre = true ) {
		$sting = ( is_array( $sting ) ) ? var_export( $sting, true ) : $sting;
		$text  = highlight_string( '<?php ' . trim( $sting ), true );  // highlight_string() requires opening PHP tag or otherwise it will not colorize the text
		$text  = preg_replace( '|^\\<code\\>\\<span style\\="color\\: #[a-fA-F0-9]{0,6}"\\>|', '', trim( $text ), 1 );  // remove prefix
		$text  = preg_replace( '|\\</code\\>$|', '', $text, 1 );  // remove suffix 1
		$text  = preg_replace( '|\\</span\\>$|', '', trim( $text ), 1 );  // remove suffix 2
		$text  = preg_replace( '|^(\\<span style\\="color\\: #[a-fA-F0-9]{0,6}"\\>)(&lt;\\?php&nbsp;)(.*?)(\\</span\\>)|', '$1$3$4', trim( $text ) );  // remove custom added "<?php "
		return ( true === $append_pre ) ? '<pre class="wponion-debug-pre">' . $text . '</pre>' : $text;
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

if ( ! function_exists( 'wponion_parse_args' ) ) {
	/**
	 * @param $new
	 * @param $old
	 *
	 * @return array|object
	 */
	function wponion_parse_args( $new, $old ) {
		if ( is_array( $new ) && is_array( $old ) ) {
			return wp_parse_args( $new, $old );
		}

		$_new      = $new;
		$_defaults = $old;

		if ( wpo_is_field( $new ) ) {
			$_new = $new->get();
		}
		if ( wpo_is_field( $old ) ) {
			$_defaults = $old->get();
		}

		$final = wp_parse_args( $_new, $_defaults );

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

if ( ! function_exists( 'wponion_get_possible_column_class' ) ) {
	/**
	 * @param array $matches
	 * $matches = array(
	 *    array(
	 *        0 => 'col-xs-12', // Full Column Class
	 *        1 => 'xs', // Device Class
	 *        2 => '12' // Column Count
	 *    ),
	 *    array(
	 *        0 => 'col-xs-12', // Full Column Class
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
					$return[] = 'col-' . $class[1] . $count;
				}
			}
		}
		return join( ' ', $return );
	}
}


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
