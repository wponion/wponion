<?php
/**
 * Functions that are used internally
 */

use WPOnion\Helper;

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
