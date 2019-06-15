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
			$unique = $this->validate_post( 'unique', __( 'Unique Key Not Found' ) );
			$module = $this->get_module();
			$field  = $this->get_field();
			$values = $module->get_db_values()
				->get( $unique . '/' . $field->get_id() );
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
