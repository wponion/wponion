<?php

namespace WPOnion\Ajax;

use WPOnion\Bridge\Ajax;

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

			if ( ! empty( $field ) ) {
				echo $field->render( $values, $unique );
			}

			$data = wponion_catch_output( false ) . ' ' . $this->localizer();
			$this->json_success( $data );
		}
	}
}
