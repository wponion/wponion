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
			echo '<button ' . $this->attributes() . ' >' . $this->value() . '</button>';
			echo $this->after();
		}

		protected function field_default() {
			// TODO: Implement field_default() method.
		}

		public function field_assets() {
			return array(
				'button_type' => 'button',
			);
		}
	}
}