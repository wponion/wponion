<?php
/**
 *
 * Initial version created 21-05-2018 / 02:47 PM
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

if ( ! class_exists( 'WPOnion_Field_button' ) ) {
	class WPOnion_Field_button extends WPOnion_Field {

		protected function output() {
			echo $this->before();
			$label = ( false !== $this->has( 'label' ) ) ? $this->data( 'label' ) : $this->value();
			echo '<button ' . $this->attributes() . ' >' . $label . '</button>';
			echo $this->after();
		}

		public function handle_field_args( $data = array() ) {
			if ( false !== $data['button_type'] ) {
				$data['attributes']['type'] = $data['button_type'];
			}
			return $data;
		}

		protected function field_default() {
			return array(
				'button_type' => 'button',
				'label'       => false,
			);
		}

		public function field_assets() {
		}
	}
}