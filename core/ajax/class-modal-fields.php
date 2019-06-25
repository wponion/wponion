<?php

namespace WPOnion\Ajax;

use WPOnion\Bridge\Ajax;
use WPOnion\Field\Modal;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Ajax\Modal_Fields' ) ) {
	/**
	 * Class Modal_Fields
	 *
	 * @package WPOnion\Ajax
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Modal_Fields extends Ajax {
		/**
		 * Runs.
		 */
		public function run() {
			/* @var \WPO\Field $field */
			$unique       = $this->validate_post( 'unique', __( 'Unique Key Not Found' ) );
			$modal_action = $this->validate_post( 'modal_action', __( 'Modal Action Not Found' ) );
			$module       = $this->get_module();

			switch ( $modal_action ) {
				case 'featch_fields':
					$this->fetch_fields();
					break;
				case 'save_fields':
					$this->save_fields();
					break;
			}

		}

		public function save_fields() {
			$field     = $this->get_field();
			$module    = $this->get_module();
			$field_key = ( wponion_is_unarrayed( $field ) ) ? $this->post( 'unique' ) : $this->post( 'unique' ) . '/' . $field['id'];
			$values    = $this->post( $field_key );
			$db_values = $module->get_db_values();
			if ( wpo_is_option( $db_values ) ) {
				$db_values->set( $field_key, $values );
				$db_values->save();
				$this->json_success();
			}
			$this->json_error();
		}

		public function fetch_fields() {
			$unique    = $this->post( 'unique' );
			$field     = $this->get_field();
			$module    = $this->get_module();
			$field_key = ( wponion_is_unarrayed( $field ) ) ? $unique : $unique . '/' . $field['id'];
			$values    = $module->get_db_values()
				->get( $field_key );
			$field->only_field( true );

			$data = $field->init_field( $values, array(
				'unique' => $unique,
				'module' => $this->post( 'module' ),
			) );
			if ( $data instanceof Modal ) {
				$this->json_success( array(
					'html'   => ( isset( $field['modal_type'] ) && 'wp' === $field['modal_type'] ) ? $data->wp() : $data->swal(),
					'script' => $this->localizer(),
				) );
			} else {
				$this->json_error( __( 'Modal Field Not Found' ) );
			}
		}
	}
}
