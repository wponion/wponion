<?php

namespace WPOnion\Field;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Field\Switcher' ) ) {
	/**
	 * Class switcher
	 *
	 * @package WPOnion\Field
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Switcher extends Checkbox_Radio {
		/**
		 * Returns all fields default.
		 *
		 * @return array|mixed
		 */
		protected function field_default() {
			return array(
				'switch_style' => 'style-8',
				'switch_width' => false,
				'switch_size'  => '',
				'label'        => false,
				'on'           => __( 'ON', 'wponion' ),
				'off'          => __( 'OFF', 'wponion' ),
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
			$width = ( ! empty( $this->data( 'switch_width' ) ) ) ? 'width:' . $this->data( 'switch_width' ) . ';' : '';
			$size  = ( ! empty( $this->data( 'switch_size' ) ) ) ? 'ckbx-' . $this->data( 'switch_size' ) : '';
			return '<div class="wponion-switcher-labels-container"><div data-on="' . $this->data( 'on' ) . '" data-off="' . $this->data( 'off' ) . '" class="ckbx-' . $this->data( 'switch_style' ) . ' ' . $size . '">
				<input ' . $field_attr . ' ' . $this->checked( $value, $attr['value'], 'checked' ) . '  />
				<label data-on="' . $this->data( 'on' ) . '" data-off="' . $this->data( 'off' ) . '"  for="' . $attr['id'] . '" style="' . $width . '"></label>

			</div>
			<label for="' . $attr['id'] . '" >' . $options['label'] . '</label>
			</div>
			';
		}
	}
}
