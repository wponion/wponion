<?php

use WPOnion\Modules\Admin\Media_Fields;

defined( 'ABSPATH' ) || exit;

if ( ! function_exists( 'wponion_media_fields_registry' ) ) {
	/**
	 * Creates & Returns an static instance for widgets module.
	 *
	 * @param $instance
	 *
	 * @return bool|\WPOnion\Modules\Admin\Media_Fields
	 */
	function wponion_media_fields_registry( &$instance ) {
		return wponion_get_registry_instance( 'media_fields', $instance, 'module' );
	}
}

if ( ! function_exists( 'wponion_media_fields' ) ) {
	/**
	 * @param array $instance_id_or_args
	 * @param array $fields
	 *
	 * @return \WPOnion\Modules\Admin\Media_Fields
	 */
	function wponion_media_fields( $instance_id_or_args = array(), $fields = array() ) {
		if ( is_string( $instance_id_or_args ) && empty( $fields ) ) {
			return wponion_media_fields_registry( $instance_id_or_args );
		}
		return new Media_Fields( $instance_id_or_args, $fields );
	}
}
