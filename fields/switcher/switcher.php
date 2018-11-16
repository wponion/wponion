<?php
/**
 *
 * Initial version created 22-05-2018 / 12:02 PM
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

if ( ! class_exists( '\WPOnion\Field\switcher' ) ) {
	/**
	 * Class switcher
	 *
	 * @package WPOnion\Field
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class switcher extends \WPOnion\Field\checkbox_radio {
		/**
		 * Returns all fields default.
		 *
		 * @return array|mixed
		 */
		protected function field_default() {
			return array(
				'switch_style' => 'style-8',
				'switch_size'  => '',
				'label'        => false,
				'on'           => __( 'ON' ),
				'off'          => __( 'OFF' ),
			);
		}

		/**
		 * Renders Elements HTML.
		 *
		 * @param $label_attr
		 * @param $field_attr
		 * @param $value
		 * @param $attr
		 * @param $options
		 *
		 * @return string
		 */
		protected function _element_html( $label_attr, $field_attr, $value, $attr, $options ) {
			$size = ( ! empty( $this->data( 'switch_size' ) ) ) ? 'ckbx-' . $this->data( 'switch_size' ) : '';
			return '<div data-on="' . $this->data( 'on' ) . '" data-off="' . $this->data( 'off' ) . '" class="ckbx-' . $this->data( 'switch_style' ) . ' ' . $size . '">
				<input ' . $field_attr . ' ' . $this->checked( $value, $attr['value'], 'checked' ) . '  />
				<label data-on="' . $this->data( 'on' ) . '" data-off="' . $this->data( 'off' ) . '"  for="' . $attr['id'] . '"></label>
			</div>
			';
		}
	}
}
