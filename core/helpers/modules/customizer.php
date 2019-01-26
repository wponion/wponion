<?php

if ( ! function_exists( 'wponion_customizer_registry' ) ) {
	/**
	 * Returns Active customizer instance.
	 *
	 * @param $instance
	 *
	 * @return bool|\WPOnion\Modules\customizer
	 */
	function wponion_customizer_registry( &$instance ) {
		return wponion_get_registry_instance( 'customizer', $instance, 'module' );
	}
}

if ( ! function_exists( 'wponion_customizer' ) ) {
	/**
	 * @param string|array       $instance_id_or_args
	 * @param array|\WPO\Builder $fields
	 *
	 * @return \WPOnion\Modules\customizer
	 */
	function wponion_customizer( $instance_id_or_args, $fields ) {
		if ( is_string( $instance_id_or_args ) && empty( $fields ) ) {
			return wponion_customizer_registry( $instance_id_or_args );
		}
		return new \WPOnion\Modules\customizer( $instance_id_or_args, $fields );
	}
}


