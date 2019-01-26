<?php
if ( ! function_exists( 'wponion_woocommerce_registry' ) ) {
	/**
	 * Creates & Returns an static instance for User Profile. module.
	 *
	 * @param $instance
	 *
	 * @return bool|\WPOnion\Modules\woocommerce
	 */
	function wponion_woocommerce_registry( &$instance ) {
		return wponion_get_registry_instance( 'woocommerce', $instance, 'module' );
	}
}

if ( ! function_exists( 'wponion_woocommerce' ) ) {
	/**
	 * Returns A New Instance for WooCommerce Module or returns an existing instance.
	 *
	 * @param array $instance_id_or_args
	 * @param array $fields
	 *
	 * @return bool|\WPOnion\Modules\woocommerce
	 */
	function wponion_woocommerce( $instance_id_or_args = array(), $fields = array() ) {
		if ( is_string( $instance_id_or_args ) && empty( $fields ) ) {
			return wponion_woocommerce_registry( $instance_id_or_args );
		}
		return new \WPOnion\Modules\woocommerce( $instance_id_or_args, $fields );
	}
}
