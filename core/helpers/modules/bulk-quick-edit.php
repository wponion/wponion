<?php

use WPOnion\Modules\Admin\Edits\Bulk;
use WPOnion\Modules\Admin\Edits\Quick;

defined( 'ABSPATH' ) || exit;

if ( ! function_exists( 'wponion_bulk_edit_registry' ) ) {
	/**
	 * Creates & Returns an static instance for widgets module.
	 *
	 * @param $instance
	 *
	 * @return bool|\WPOnion\Modules\Admin\Edits\Bulk
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
	 * @return bool|\WPOnion\Modules\Admin\Edits\Quick
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
	 * @return \WPOnion\Modules\Admin\Edits\Quick
	 */
	function wponion_quick_edit( $settings = array(), $fields = null ) {
		if ( is_string( $settings ) && empty( $fields ) ) {
			return wponion_quick_edit_registry( $settings );
		}
		return new Quick( $settings, $fields );
	}
}

if ( ! function_exists( 'wponion_bulk_edit' ) ) {
	/**
	 * @param array|string       $settings
	 * @param array|\WPO\Builder $fields
	 *
	 * @return \WPOnion\Modules\Admin\Edits\Quick
	 */
	function wponion_bulk_edit( $settings = array(), $fields = null ) {
		if ( is_string( $settings ) && empty( $fields ) ) {
			return wponion_bulk_edit_registry( $settings );
		}
		return new Bulk( $settings, $fields );
	}
}

