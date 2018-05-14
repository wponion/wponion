<?php
/**
 *
 * Initial version created 13-05-2018 / 12:10 PM
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

if ( ! class_exists( 'WPOnion_Field_textarea' ) ) {
	/**
	 * Class WPOnion_Field_text
	 *
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class WPOnion_Field_textarea extends WPOnion_Field_text {

		protected function output() {
			echo $this->before();
			echo '<textarea ' . $this->_input_attributes() . '></textarea>';
			echo $this->after();
		}

		public function handle_field_args( $field_data = array() ) {
			$field_data = parent::handle_field_args( $field_data );
			if ( isset( $field_data['rows'] ) ) {
				$field_data['attributes']['rows'] = $field_data['rows'];
			}
			if ( isset( $field_data['col'] ) ) {
				$field_data['attributes']['col'] = $field_data['col'];
			}

			return $field_data;
		}

		protected function field_default() {
			return array_merge( parent::field_default(), array(
				'rows' => 5,
				'col'  => 5,
			) );
		}
	}
}
