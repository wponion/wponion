<?php

namespace WPOnion\Field;

use WPOnion\Field;

defined( 'ABSPATH' ) || exit;

if ( ! class_exists( '\WPOnion\Field\Accordion' ) ) {
	/**
	 * Class accordion
	 *
	 * @package WPOnion\Field
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Accordion extends Field {
		/**
		 * Renders Fields HTML.
		 *
		 * @return string
		 */
		protected function render_fields() {
			$is_open = ( true === $this->data( 'is_open' ) ) ? 'is_open' : '';
			$return  = '<div class="wponion-accordion-wrap ' . $is_open . '">';
			$return  .= '<h4 class="wponion-accordion-title"> <span class="heading">' . $this->data( 'heading' ) . '</span><a title="' . __( 'Delete', 'wponion' ) . '" class="wponion-remove wponion-group-remove wpoic wpoic-delete"></a></h4>';
			$return  .= '<div class="wponion-accordion-content">';
			$return  .= '<div class="wponion-row wpo-row">';
			foreach ( $this->data( 'fields' ) as $field_id => $field ) {
				$return .= $this->render_single_field( $field );
			}
			$return .= $this->after_accordion();
			$return .= '</div>';
			$return .= '</div>';
			$return .= '</div>';
			return $return;
		}

		/**
		 * After Accordion Callback
		 */
		protected function after_accordion() {
			return '';
		}

		/**
		 * Renders Single Sub Field.
		 *
		 * @param $field
		 *
		 * @return string
		 */
		protected function render_single_field( $field ) {
			return $this->sub_field( $field, wponion_get_field_value( $field, $this->value() ), $this->name(), false );
		}

		/**
		 * Generates Final HTML Output.
		 *
		 * @return mixed|void
		 */
		protected function output() {
			echo $this->before();
			echo $this->render_fields();
			echo $this->after();
		}

		/**
		 * Returns Field's Default Value.
		 *
		 * @return array|mixed
		 */
		protected function field_default() {
			return array(
				'fields'   => array(),
				'heading'  => __( 'Accordion', 'wponion' ),
				'un_array' => false,
				'is_open'  => false,
			);
		}

		/**
		 * Handles Fields Assets.
		 *
		 * @return mixed|void
		 */
		public function field_assets() {
			wp_enqueue_script( 'jquery-ui-accordion' );
		}
	}
}
