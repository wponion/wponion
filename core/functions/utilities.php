<?php

use WPOnion\Helper;
use WPOnion\Icon;
use WPOnion\Util;
use WPOnion\Setup;

defined( 'ABSPATH' ) || exit;

if ( ! function_exists( 'wponion_define' ) ) {
	/**
	 * Defines A Constant if not exists.
	 *
	 * @param string $key
	 * @param mixed  $value
	 * @param mixed  $case_insensitive If set to true, the constant will be defined case-insensitive.
	 *
	 * @return bool
	 * @since 1.5
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

if ( ! function_exists( 'wponion_has_column_class' ) ) {
	/**
	 * Validates Provided string & check if CSS Grid class exists.
	 *
	 * @param $class
	 *
	 * @return bool
	 * @since 1.5
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

if ( ! function_exists( 'wponion_catch_output' ) ) {
	/**
	 * @param bool|string $type
	 *
	 * @return false|string
	 */
	function wponion_catch_output( $type = true ) {
		$data = false;

		if ( wponion_is_callable( $type ) ) {
			wponion_catch_output( true );
			echo wponion_callback( $type );
			$data = wponion_catch_output( false );
		} else {
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

if ( ! function_exists( 'wponion_timer' ) ) {
	/**
	 * @param string $key Unique Timer Key.
	 * @param bool   $stop true / false
	 * @param int    $precision
	 *
	 * @return bool|string
	 */
	function wponion_timer( $key = '', $stop = false, $precision = 3 ) {
		return ( ! $stop ) ? Helper::timer_start( $key ) : Helper::timer_stop( $key, $precision );
	}
}

if ( ! function_exists( 'wponion_icon' ) ) {
	/**
	 * Checks and returns icon html + load the required icon font.
	 *
	 * @param        $icon
	 * @param string $xtra_attrs
	 *
	 * @return string
	 */
	function wponion_icon( $icon, $xtra_attrs = '' ) {
		if ( ! empty( $icon ) ) {
			$attr = wponion_array_to_html_attributes( $xtra_attrs );
			if ( filter_var( $icon, FILTER_VALIDATE_URL ) ) {
				return "<img src=\"${icon}\" ${attr} />";
			} else {
				return "<i class='${icon} wponion-icon' ${attr}> </i>";
			}
		}
		return '';
	}
}

if ( ! function_exists( 'wponion_tooltip' ) ) {
	/**
	 * @param bool  $content
	 * @param array $args
	 * @param bool  $element
	 * @param bool  $localize
	 *
	 * @return array|string|\WPOnion\Util
	 */
	function wponion_tooltip( $content = false, $args = array(), $element = false, $localize = true ) {
		if ( is_array( $content ) && ! empty( $args ) && is_string( $args ) ) {
			$element = $args;
			$args    = $content;
			$content = ( isset( $args['content'] ) ) ? $args['content'] : null;
		} elseif ( is_array( $content ) && empty( $args ) ) {
			$args    = $content;
			$content = ( isset( $args['content'] ) ) ? $args['content'] : null;
			$element = ( isset( $args['element'] ) ) ? $args['element'] : null;
		} elseif ( is_string( $content ) && is_array( $args ) ) {
			if ( isset( $args['element'] ) ) {
				$element = $args['element'];
			}
		} elseif ( is_string( $content ) && is_string( $args ) ) {
			$element = $args;
			$args    = array();
		}
		unset( $args['content'] );
		unset( $args['element'] );
		$instance = new Util( $element, false );
		return $instance->tooltip( $content, $args, $localize );
	}
}

if ( ! function_exists( 'wponion_tooltip_faq' ) ) {
	/**
	 * Creates FAQ View in Tooltip.
	 *
	 * @param bool  $content
	 * @param array $args
	 * @param bool  $element
	 * @param bool  $localize
	 *
	 * @return array|string
	 */
	function wponion_tooltip_faq( $content = false, $args = array(), $element = false, $localize = true ) {
		$args = ( ! is_array( $args ) ) ? array() : $args;

		$args['interactive'] = true;
		$args['theme']       = 'light-border dropdown';
		$args['trigger']     = 'click';
		return wponion_tooltip( $content, $args, $element, $localize );
	}
}

if ( ! function_exists( 'wponion_inline_ajax' ) ) {
	/**
	 * @param array  $args
	 * @param string $element
	 *
	 * @return string|\WPOnion\Util
	 */
	function wponion_inline_ajax( $args = array(), $element = '' ) {
		$instance = new Util( $element, false );
		return $instance->inline_ajax( $args );
	}
}

if ( ! function_exists( 'wponion_image_popup' ) ) {
	/**
	 * @param string      $image_src
	 * @param bool|string $full_size
	 * @param bool|string $element
	 *
	 * @return string|bool|\WPOnion\Util
	 */
	function wponion_image_popup( $image_src = '', $full_size = false, $element = false ) {
		$instance = new Util( $element );
		return $instance->image_popup( $image_src, $full_size, $element );
	}
}

if ( ! function_exists( 'wponion_add_icon_library' ) ) {
	/**
	 * @param $args
	 *
	 * @return \WPOnion\Icon
	 */
	function wponion_add_icon_library( $args ) {
		return new Icon( $args );
	}
}

if ( ! function_exists( 'wponion_register_addon' ) ) {
	/**
	 * Registers Addon Wtih WPOnion.
	 *
	 * @param $addon_name
	 * @param $version
	 * @param $callback_or_file
	 *
	 * @return bool
	 */
	function wponion_register_addon( $addon_name, $version, $callback_or_file ) {
		return Setup::register_addon( $addon_name, $version, $callback_or_file );
	}
}

if ( ! function_exists( 'wponion_backup_fonts' ) ) {
	/**
	 * Returns A List of backup fonts.
	 *
	 * @return array
	 */
	function wponion_backup_fonts() {
		return apply_filters( 'wponion/fonts/backup', Helper::fonts( 'backup' ) );
	}
}

if ( ! function_exists( 'wponion_websafe_fonts' ) ) {
	/**
	 * Returns Websafe Fonts.
	 *
	 * @return mixed
	 */
	function wponion_websafe_fonts() {
		return apply_filters( 'wponion/fonts/websafe', Helper::fonts( 'websafe' ) );
	}
}

if ( ! function_exists( 'wponion_google_fonts' ) ) {
	/**
	 * Reads Google Fonts. Data.
	 *
	 * @return mixed
	 */
	function wponion_google_fonts() {
		return apply_filters( 'wponion/fonts/google', Helper::fonts( 'google' ) );
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

if ( ! function_exists( 'wponion_extract_template_tags' ) ) {
	/**
	 * this function extracts all possible template tags in a string
	 *
	 * @example #[id] -  [post_title] Created By [author] will be given as array
	 *
	 * @param $string
	 *
	 * @return array
	 * @since 1.5
	 */
	function wponion_extract_template_tags( $string ) {
		$matches = array();
		/** Below Regex Matches All Contents That Are Enclosed With [] | @example #[id] [post_title] - [post_date] */
		preg_match_all( '@\[([^<>&/\[\]\x00-\x20=]++)]@', $string, $matches, PREG_SET_ORDER, 0 );
		return $matches;
	}
}
