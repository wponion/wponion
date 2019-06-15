<?php
if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! function_exists( 'wponion_wp_pointers_registry' ) ) {
	/**
	 * @param $instance
	 *
	 * @return bool|\WPOnion\Modules\Util\WP_Pointers
	 */
	function wponion_wp_pointers_registry( &$instance ) {
		return wponion_get_registry_instance( 'wp_pointers', $instance, 'module' );
	}
}

if ( ! function_exists( 'wponion_wp_pointers' ) ) {
	/**
	 * @param $pointer_id_or_instance_id
	 *
	 * @return \WPOnion\Modules\Util\WP_Pointers
	 */
	function wponion_wp_pointers( $pointer_id_or_instance_id ) {
		if ( false !== wponion_wp_pointers_registry( $pointer_id_or_instance_id ) ) {
			return wponion_wp_pointers_registry( $pointer_id_or_instance_id );
		}
		return new \WPOnion\Modules\Util\WP_Pointers( $pointer_id_or_instance_id );
	}
}

if ( ! function_exists( 'wponion_wp_pointer' ) ) {
	/**
	 * @param bool  $selector
	 * @param bool  $title
	 * @param bool  $text
	 * @param array $args
	 * @param bool  $pointer_instance
	 *
	 * @return \WPOnion\WP\Pointers\Pointer
	 */
	function wponion_wp_pointer( $selector = false, $title = false, $text = false, $args = array(), $pointer_instance = false ) {
		return new \WPOnion\WP\Pointers\Pointer( $selector, $title, $text, $args, $pointer_instance );
	}
}

