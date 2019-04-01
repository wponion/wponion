<?php
if ( ! function_exists( 'wponion_user_profile_registry' ) ) {
	/**
	 * Creates & Returns an static instance for User Profile. module.
	 *
	 * @param $instance
	 *
	 * @return bool|\WPOnion\Modules\User_Profile
	 */
	function wponion_user_profile_registry( &$instance ) {
		return wponion_get_registry_instance( 'user_profile', $instance, 'module' );
	}
}

if ( ! function_exists( 'wponion_user_profile' ) ) {
	/**
	 * Returns A New Instance for WooCommerce Module or returns an existing instance.
	 *
	 * @param array              $instance_id_or_args
	 * @param array|\WPO\Builder $fields
	 *
	 * @return bool|\WPOnion\Modules\User_Profile
	 */
	function wponion_user_profile( $instance_id_or_args = array(), $fields = array() ) {
		if ( is_string( $instance_id_or_args ) && empty( $fields ) ) {
			return wponion_user_profile_registry( $instance_id_or_args );
		}
		return new \WPOnion\Modules\User_Profile( $instance_id_or_args, $fields );
	}
}
