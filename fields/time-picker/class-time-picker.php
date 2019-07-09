<?php

namespace WPOnion\Field;
if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Field\Time_Picker' ) ) {
	/**
	 * Class Time_Picker
	 *
	 * @package WPOnion\Field
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Time_Picker extends Date_Picker {

		protected function output() {
			echo $this->before();

			echo $this->sub_field( $this->handle_args( 'placeholder', $this->data( 'time' ), array(
				'id'         => $this->field_id(),
				'type'       => 'text',
				'prefix'     => '<i class="dashicons dashicons-clock"></i>',
				'only_field' => true,
			) ), $this->value(), $this->unique() );

			echo $this->after();
		}

		/**
		 * Returns all fields default.
		 *
		 * @return array|mixed
		 */
		protected function field_default() {
			return array(
				'time'     => __( 'Time' ),
				'settings' => array(),
				'theme'    => 'default',
			);
		}
	}
}
