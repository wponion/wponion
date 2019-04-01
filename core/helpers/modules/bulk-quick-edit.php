<?php
if ( ! function_exists( 'wponion_bulk_edit_registry' ) ) {
	/**
	 * Creates & Returns an static instance for widgets module.
	 *
	 * @param $instance
	 *
	 * @return bool|\WPOnion\Modules\Bulk_Edit
	 */
	function wponion_bulk_edit_registry( &$instance ) {
		return wponion_get_registry_instance( 'bulk_edit', $instance, 'module' );
	}
}

if ( ! function_exists( 'wponion_quick_edit_registry' ) ) {
	/**
	 * Creates & Returns an static instance for widgets module.
	 *
	 * @param $instance
	 *
	 * @return bool|\WPOnion\Modules\Quick_Edit
	 */
	function wponion_quick_edit_registry( &$instance ) {
		return wponion_get_registry_instance( 'quick_edit', $instance, 'module' );
	}
}

if ( ! function_exists( 'wponion_quick_edit' ) ) {
	/**
	 * @param array|string       $settings
	 * @param array|\WPO\Builder $fields
	 *
	 * @return \WPOnion\Modules\Quick_Edit
	 */
	function wponion_quick_edit( $settings = array(), $fields = null ) {
		if ( is_string( $settings ) && empty( $fields ) ) {
			return wponion_quick_edit_registry( $settings );
		}
		return new \WPOnion\Modules\Quick_Edit( $settings, $fields );
	}
}

if ( ! function_exists( 'wponion_bulk_edit' ) ) {
	/**
	 * @param array|string       $settings
	 * @param array|\WPO\Builder $fields
	 *
	 * @return \WPOnion\Modules\Quick_Edit
	 */
	function wponion_bulk_edit( $settings = array(), $fields = null ) {
		if ( is_string( $settings ) && empty( $fields ) ) {
			return wponion_bulk_edit_registry( $settings );
		}
		return new \WPOnion\Modules\Bulk_Edit( $settings, $fields );
	}
}

