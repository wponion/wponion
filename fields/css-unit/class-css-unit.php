<?php

namespace WPOnion\Field;

use WPOnion\Field;

defined( 'ABSPATH' ) || exit;

if ( ! class_exists( '\WPOnion\Field\CSS_Unit' ) ) {
	/**
	 * Class CSS_Unit
	 *
	 * @package WPOnion\Field
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class CSS_Unit extends Field {

		/**
		 * Generates Final HTML Output.
		 *
		 * @return mixed|void
		 */
		protected function output() {
			echo $this->before();

			$number_field = $this->sub_field( $this->handle_args( 'prefix', $this->data( 'css_value' ), array(), array(
				'type'       => 'number',
				'id'         => 'css_value',
				'only_field' => true,
			) ), $this->value( 'css_value' ), $this->name() );

			$units_field = $this->sub_field( $this->handle_args( 'prefix', $this->data( 'unit' ), array(
				'options' => wponion_internal_options_data( 'css-units' ),
			), array(
				'type'       => 'select',
				'id'         => 'unit',
				'only_field' => true,
			) ), $this->value( 'unit' ), $this->name() );

			echo $number_field . $units_field;

			echo $this->after();
		}

		/**
		 * Returns all required values to use in js.
		 *
		 * @return array
		 */
		protected function js_field_args() {
			return array();
		}

		/**
		 * Returns Field's Default Value.
		 *
		 * @return array|mixed
		 */
		protected function field_default() {
			return array(
				'css_value' => '',
				'unit'      => '',
			);
		}

		/**
		 * Handles Fields Assets.
		 *
		 * @return mixed|void
		 */
		public function field_assets() {
		}
	}
}
