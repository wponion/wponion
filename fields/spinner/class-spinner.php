<?php

namespace WPOnion\Field;
if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Field\Spinner' ) ) {
	class Spinner extends Text {

		public function handle_field_args( $field_data = array() ) {
			$field_data['text_type'] = 'text';
			return parent::handle_field_args( $field_data );
		}

		public function field_assets() {
			wp_enqueue_script( 'jquery-ui-spinner' );
		}

		protected function js_field_args() {
			return $this->parse_args( array(
				'max'     => $this->data( 'max' ),
				'min'     => $this->data( 'min' ),
				'step'    => $this->data( 'step' ),
				'spinner' => ( ! is_array( $this->data( 'spinner' ) ) ) ? array() : $this->data( 'spinner' ),
			), parent::js_field_args() );
		}

		protected function field_default() {
			return array(
				'max'     => 100,
				'min'     => 0,
				'step'    => 1,
				'spinner' => array(),
			);
		}
	}
}
