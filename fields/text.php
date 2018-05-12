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

		protected function output() {
			echo $this->before();
			$attributes = $this->attributes( array(
				'type'              => $this->element_type(),
				'class'             => $this->element_class( 'form-control' ),
				'value'             => $this->value(),
				'name'              => $this->name(),
				'data-wponion-jsid' => $this->js_field_id(),
			) );
			echo '<input ' . $attributes . '/>';
			echo $this->after();

		}

		public function handle_field_args( $field_data = array() ) {
			if ( false !== $field_data['maxlength'] ) {
				$data              = $field_data( 'attributes' );
				$data['maxlength'] = ( ! isset( $data['maxlength'] ) ) ? $field_data['maxlength'] : $data['maxlength'];
				unset( $field_data['maxlength'] );
				$field_data['attributes'] = $data;
			}

			if ( false !== $field_data['inputmask'] ) {
				$field_data['wrap_class']                           = ( false !== $field_data['wrap_class'] ) ? '' : $field_data['wrap_class'];
				$field_data['wrap_class']                           = $field_data['wrap_class'] . ' ' . ' wponion-inputmask ';
				$field_data['attributes']['data-wponion-inputmask'] = 'yes';
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
				'inputmask' => false,
				'maxlength' => false,
			);
		}

		protected function js_field_args() {
			$args = array();
			if ( false !== $this->has( 'inputmask' ) ) {
				$args['inputmask'] = $this->data( 'inputmask' );
			}
			var_dump($this->data( 'inputmask' ));
			return $args;
		}
	}
}
