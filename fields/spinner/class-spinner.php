<?php

namespace WPOnion\Field;
defined( 'ABSPATH' ) || exit;

if ( ! class_exists( '\WPOnion\Field\Spinner' ) ) {
	/**
	 * Class Spinner
	 *
	 * @package WPOnion\Field
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Spinner extends Text {

		/**
		 * Checks & Updat fields args based on field config.
		 *
		 * @param array $data
		 *
		 * @return array
		 */
		protected function handle_field_args( $data = array() ) {
			$data['text_type'] = 'text';
			return parent::handle_field_args( $data );
		}

		/**
		 * Handles Fields Assets.
		 *
		 * @return mixed|void
		 */
		public function field_assets() {
			wp_enqueue_script( 'jquery-ui-spinner' );
		}

		/**
		 * @return array
		 */
		protected function js_field_args() {
			return $this->parse_args( array(
				'max'     => $this->data( 'max' ),
				'min'     => $this->data( 'min' ),
				'step'    => $this->data( 'step' ),
				'spinner' => ( ! is_array( $this->data( 'spinner' ) ) ) ? array() : $this->data( 'spinner' ),
			), parent::js_field_args() );
		}

		/**
		 * Returns Field's Default Value.
		 *
		 * @return array|mixed
		 */
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
