<?php

use WPOnion\Modules\Metabox\metabox;

defined( 'ABSPATH' ) || exit;


if ( ! function_exists( 'wponion_metabox_registry' ) ) {
	/**
	 * Returns Active Metabox instance.
	 *
	 * @param $instance
	 *
	 * @return bool|\WPOnion\Modules\Metabox\Metabox
	 */
	function wponion_metabox_registry( &$instance ) {
		return wponion_get_registry_instance( 'metabox', $instance, 'module' );
	}
}


if ( ! function_exists( 'wponion_metabox' ) ) {
	/**
	 * Returns A New Instance for Metabox Module or returns an existing instance.
	 *
	 * @param array              $instance_id_or_args
	 * @param array|\WPO\Builder $fields
	 *
	 * @return bool|\WPOnion\Modules\Metabox\metabox
	 */
	function wponion_metabox( $instance_id_or_args = array(), $fields = array() ) {
		if ( is_string( $instance_id_or_args ) && empty( $fields ) ) {
			return wponion_metabox_registry( $instance_id_or_args );
		}
		return new metabox( $instance_id_or_args, $fields );
	}
}
