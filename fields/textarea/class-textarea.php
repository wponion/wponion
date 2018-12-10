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

namespace WPOnion\Field;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Field\Textarea' ) ) {
	/**
	 * Class WPOnion_Field_text
	 *
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Textarea extends text {
		/**
		 * Final HTML Output
		 */
		protected function output() {
			echo $this->before();
			echo '<textarea ' . $this->_input_attributes() . '>' . $this->value() . '</textarea>';
			echo $this->after();
		}

		/**
		 * Handles fields args based on config.
		 *
		 * @param array $field_data
		 *
		 * @return array
		 */
		public function handle_field_args( $field_data = array() ) {
			$field_data = parent::handle_field_args( $field_data );
			if ( isset( $field_data['rows'] ) ) {
				$field_data['attributes']['rows'] = $field_data['rows'];
			}
			if ( isset( $field_data['cols'] ) ) {
				$field_data['attributes']['cols'] = $field_data['cols'];
			}

			return $field_data;
		}

		/**
		 * Returns all fields default.
		 *
		 * @return array|mixed
		 */
		protected function field_default() {
			return array_merge( parent::field_default(), array(
				'rows' => 5,
				'cols' => 5,
			) );
		}
	}
}
