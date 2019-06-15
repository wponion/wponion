<?php

namespace WPOnion\Ajax;

use WPOnion\Bridge\Ajax;
use WPOnion\Field\Modal;
use WPOnion\Helper;

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
			$unique = $this->validate_post( 'unique', __( 'Unique Key Not Found' ) );
			$module = $this->get_module();
			$field  = $this->get_field();
			$values = $this->post( 'modal_values', false );
			$field->only_field( true );

			if ( empty( $values ) ) {
				$values = $module->get_db_values()
					->get( $unique . '/' . $field->get_id() );
			} else {
				$values = ( ! wponion_is_array( $values ) ) ? array() : $values;
				$values = Helper::array_key_get( $unique . '/' . $field->get_id(), $values );
			}

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
