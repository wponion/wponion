<?php
/**
 * Functions that are used internally
 */

if ( ! function_exists( 'wponion_internal_options_data' ) ) {
	/**
	 * Fetches & Returns Internal Options.
	 *
	 * @param $slug
	 *
	 * @return array
	 * @internal
	 *
	 */
	function wponion_internal_options_data( $slug ) {
		$data = \WPOnion\Helper::get_internal_options();
		return ( isset( $data[ $slug ] ) ) ? $data[ $slug ] : array();
	}
}
