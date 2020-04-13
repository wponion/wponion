<?php

namespace WPOnion\Field;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Field\OEmbed' ) ) {
	/**
	 * Class OEmbed
	 *
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class OEmbed extends Text {
		/**
		 * @return string
		 */
		protected function after() {
			echo '<div class="wponion-oembed-preview" data-wponion-jsid="' . $this->js_field_id() . '"></div>';
			return parent::after();
		}

		/**
		 * Checks & Updat fields args based on field config.
		 *
		 * @param array $data
		 *
		 * @return array
		 */
		protected function handle_field_args( $data = array() ) {
			$data              = parent::handle_field_args( $data );
			$data['text_type'] = 'text';
			return $data;
		}

		/**
		 * @return array
		 */
		protected function js_field_args() {
			return array( 'nopreview' => wponion()->url( 'assets/img/no-preview.jpg' ) );
		}

		/**
		 * Returns Field's Default Value.
		 *
		 * @return array|mixed
		 */
		protected function field_default() {
			return $this->parse_args( array(
				'oembed_width'  => '500px',
				'oembed_height' => '500px',
			), parent::field_default() );
		}
	}
}
