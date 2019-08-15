<?php

namespace WPOnion\Field;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Field\Number' ) ) {
	/**
	 * Class Text
	 *
	 * @package WPOnion\Field
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Number extends Text {
		/**
		 * checks and updated fields args based on field config.
		 *
		 * @param array $field_data
		 *
		 * @return array
		 */
		public function handle_field_args( $field_data = array() ) {
			$field_data['text_type'] = 'number';
			$field_data['type']      = 'text';
			return parent::handle_field_args( $field_data );
		}

		/**
		 * Returns all fields default.
		 *
		 * @return array|mixed
		 */
		protected function field_default() {
			return $this->parse_args( array(
				'min'  => null,
				'max'  => null,
				'step' => null,
			), parent::field_default() );
		}
	}
}
