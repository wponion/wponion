<?php

use WPOnion\Modules\taxonomy;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! function_exists( 'wponion_taxonomy_registry' ) ) {
	/**
	 * Creates & Returns an static instance for metabox module.
	 *
	 * @param $instance
	 *
	 * @return bool
	 */
	function wponion_taxonomy_registry( &$instance ) {
		return wponion_get_registry_instance( 'taxonomy', $instance, 'module' );
	}
}

if ( ! function_exists( 'wponion_taxonomy' ) ) {
	/**
	 * Returns A New Instance for taxonomy Module or returns an existing instance.
	 *
	 * @param array              $instance_id_or_args
	 * @param array|\WPO\Builder $fields
	 *
	 * @return bool|\WPOnion\Modules\taxonomy
	 */
	function wponion_taxonomy( $instance_id_or_args = array(), $fields = array() ) {
		if ( is_string( $instance_id_or_args ) && empty( $fields ) ) {
			return wponion_taxonomy_registry( $instance_id_or_args );
		}
		return new taxonomy( $instance_id_or_args, $fields );
	}
}

if ( ! function_exists( 'wponion_get_term_meta' ) ) {
	/**
	 * Returns Terms Meta Info.
	 *
	 * @param string $term_id
	 * @param string $unique
	 *
	 * @return mixed
	 */
	function wponion_get_term_meta( $term_id = '', $unique = '' ) {
		if ( function_exists( 'get_term_meta' ) ) {
			return get_term_meta( $term_id, $unique, true );
		}
		$key = 'wponion_' . wponion_hash_string( $term_id . '_' . $unique );
		return get_option( $key, true );
	}
}

if ( ! function_exists( 'wponion_update_term_meta' ) ) {
	/**
	 * Updates Term Meta.
	 *
	 * @param string $term_id
	 * @param string $unique
	 * @param array  $values
	 *
	 * @return bool|int|\WP_Error
	 */
	function wponion_update_term_meta( $term_id = '', $unique = '', $values = array() ) {
		if ( function_exists( 'update_term_meta' ) ) {
			return update_term_meta( $term_id, $unique, $values );
		}

		$key = 'wponion_' . wponion_hash_string( $term_id . '_' . $unique );
		return update_option( $key, $values );
	}
}

if ( ! function_exists( 'wponion_delete_term_meta' ) ) {
	/**
	 * Deletes a Term Meta.
	 *
	 * @param string $term_id
	 * @param string $unique
	 *
	 * @return bool
	 */
	function wponion_delete_term_meta( $term_id = '', $unique = '' ) {
		if ( function_exists( 'delete_term_meta' ) ) {
			return delete_term_meta( $term_id, $unique );
		}
		return delete_option( 'wponion_' . wponion_hash_string( $term_id . '_' . $unique ) );
	}
}
