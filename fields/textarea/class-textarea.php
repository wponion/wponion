<?php

namespace WPOnion\Field;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Field\Textarea' ) ) {
	/**
	 * Class WPOnion_Field_text
	 *
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Textarea extends text {
		/**
		 * Renders Element Html.
		 */
		public function element_html() {
			return '<textarea ' . $this->_input_attributes() . '>' . $this->value() . '</textarea>';
		}

		/**
		 * Checks & Updat fields args based on field config.
		 *
		 * @param array $data
		 *
		 * @return array
		 */
		protected function handle_field_args( $data = array() ) {
			$data = parent::handle_field_args( $data );
			if ( isset( $data['rows'] ) ) {
				$data['attributes']['rows'] = $data['rows'];
			}
			if ( isset( $data['cols'] ) ) {
				$data['attributes']['cols'] = $data['cols'];
			}

			return $data;
		}

		/**
		 * Returns Field's Default Value.
		 *
		 * @return array|mixed
		 */
		protected function field_default() {
			return $this->parse_args( parent::field_default(), array(
				'rows' => 5,
				'cols' => 5,
			) );
		}
	}
}
