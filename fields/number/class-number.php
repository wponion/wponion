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
		 * Checks & Updat fields args based on field config.
		 *
		 * @param array $data
		 *
		 * @return array
		 */
		protected function handle_field_args( $data = array() ) {
			$data['text_type'] = 'number';
			$data['type']      = 'text';
			return parent::handle_field_args( $data );
		}

		/**
		 * Returns Field's Default Value.
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
