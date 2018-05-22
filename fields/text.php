<?php
/**
 *
 * Initial version created 09-05-2018 / 12:15 PM
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @package
 * @link
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( 'WPOnion_Field_text' ) ) {
	/**
	 * Class WPOnion_Field_text
	 *
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class WPOnion_Field_text extends WPOnion_Field {

		protected function _input_attributes() {
			$field_class = 'form-control';
			$field_class = ( $this->has_errors() ) ? $field_class . ' is-invalid ' : $field_class;

			return $this->attributes( array(
				'type'              => $this->element_type(),
				'class'             => $this->element_class( $field_class ),
				'value'             => $this->value(),
				'name'              => $this->name(),
				'data-wponion-jsid' => $this->js_field_id(),
			) );
		}

		protected function output() {
			echo $this->before();
			echo '<input ' . $this->_input_attributes() . '/>';
			echo $this->after();
		}

		public function handle_field_args( $field_data = array() ) {
			if ( false !== $field_data['inputmask'] ) {
				$field_data['wrap_class']                           = ( false !== $field_data['wrap_class'] ) ? '' : $field_data['wrap_class'];
				$field_data['wrap_class']                           = $field_data['wrap_class'] . ' ' . ' wponion-inputmask ';
				$field_data['attributes']['data-wponion-inputmask'] = 'yes';
			}

			if ( false !== $field_data['maxlength'] || is_array( $field_data['max_length'] ) ) {
				if ( is_array( $field_data['maxlength'] ) ) {
					$field_data['max_length'] = $field_data['maxlength'];
					$field_data['maxlength']  = isset( $field_data['max_length']['limit'] ) ? $field_data['max_length']['limit'] : false;
				} elseif ( is_array( $field_data['max_length'] ) ) {
					$field_data['maxlength'] = isset( $field_data['max_length']['limit'] ) ? $field_data['max_length']['limit'] : $field_data['maxlength'];
				}

				$data              = $field_data['attributes'];
				$data['maxlength'] = ( ! isset( $data['maxlength'] ) ) ? $field_data['maxlength'] : $data['maxlength'];
				unset( $field_data['maxlength'] );
				$field_data['attributes']                           = $data;
				$field_data['attributes']['data-wponion-maxlength'] = 'yes';
			}

			if ( false !== $field_data['placeholder'] ) {
				$field_data['attributes']['placeholder'] = $field_data['placeholder'];
			}

			return $field_data;
		}

		/**
		 * @return mixed|void
		 */
		public function field_assets() {
			if ( false !== $this->has( 'inputmask' ) ) {
				wponion_load_asset( 'wponion-inputmask' );
			}
		}

		/**
		 * @return array|mixed
		 */
		protected function field_default() {
			return array(
				'inputmask'   => false,
				'max_length'  => false,
				'maxlength'   => false,
				'placeholder' => false,
			);
		}

		protected function js_field_args() {
			$args = array();
			if ( false !== $this->has( 'inputmask' ) ) {
				$args['inputmask'] = $this->data( 'inputmask' );
			}

			if ( false !== $this->has( 'max_length' ) ) {
				$args['max_length'] = $this->data( 'max_length' );
			}
			return $args;
		}
	}
}
