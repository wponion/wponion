<?php

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! function_exists( 'wponion_register_post_type' ) ) {
	/**
	 * @param string            $post_type
	 * @param array|string|bool $post_type_args_or_label
	 *
	 * @return \WPOnion\Modules\CPT\Post_Type
	 */
	function wponion_register_post_type( $post_type, $post_type_args_or_label = null ) {
		return new \WPOnion\Modules\CPT\Post_Type( $post_type, $post_type_args_or_label );
	}
}

if ( ! function_exists( 'wponion_register_taxonomy' ) ) {
	/**
	 * @param       $taxonomy
	 * @param array $object_types
	 * @param array $args
	 *
	 * @return \WPOnion\Modules\CPT\Taxonomy
	 */
	function wponion_register_taxonomy( $taxonomy, $object_types = array(), $args = array() ) {
		return new \WPOnion\Modules\CPT\Taxonomy( $taxonomy, $object_types, $args );
	}
}
