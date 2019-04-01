<?php
if ( ! function_exists( 'wponion_woocommerce_product_registry' ) ) {
	/**
	 * Creates & Returns an static instance for User Profile. module.
	 *
	 * @param $instance
	 *
	 * @return bool|\WPOnion\Modules\WooCommerce\Product
	 */
	function wponion_woocommerce_product_registry( &$instance ) {
		return wponion_get_registry_instance( 'woocommerce_product', $instance, 'module' );
	}
}

if ( ! function_exists( 'wponion_wc_product' ) ) {
	/**
	 * Returns A New Instance for WooCommerce Product Module or returns an existing instance.
	 *
	 * @param array             $instance_id_or_args
	 * @param \WPO\Builder|null $fields
	 *
	 * @return bool|\WPOnion\Modules\WooCommerce\Product
	 */
	function wponion_wc_product( $instance_id_or_args = array(), $fields = null ) {
		if ( is_string( $instance_id_or_args ) && empty( $fields ) ) {
			return wponion_woocommerce_product_registry( $instance_id_or_args );
		}
		return new \WPOnion\Modules\WooCommerce\Product( $instance_id_or_args, $fields );
	}
}

