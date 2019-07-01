<?php

namespace WPOnion\Field;


if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Field\Range_Slider' ) ) {
	/**
	 * Class Range_Slider
	 *
	 * @package WPOnion\Field
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Range_Slider extends Spinner {

		protected function field_default() {
			return $this->parse_args( array(
				'slider_width' => '90%',
			), parent::field_default() );
		}

		protected function js_field_args() {
			return $this->parse_args( array(
				'slider' => ( ! is_array( $this->data( 'slider' ) ) ) ? array() : $this->data( 'slider' ),
			), parent::js_field_args() );
		}

		protected function before() {
			return parent::before() . '<div class="wponion-range-slider-container"><div class="wponion-range-slider" style="width:' . $this->data( 'slider_width' ) . '"></div>';
		}


		protected function after() {
			return '</div>' . parent::after();
		}

		public function field_assets() {
			wp_enqueue_script( 'jquery-ui-slider' );
		}
	}
}
