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

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( 'WPOnion_Field_switch' ) ) {
	class WPOnion_Field_switch extends WPOnion_Field_checkbox_radio {

		protected function _element_html( $label_attr, $field_attr, $value, $attr, $options ) {
			return '<div class=" form-group form-check wponion-fancy-checkbox">
				<label ' . wponion_array_to_html_attributes( $label_attr ) . '>
					<input ' . $field_attr . ' ' . $this->checked( $value, $attr['value'], 'checked' ) . '  />
					<span class="wponion-fancy-checkbox-wrap wp-ui-highlight"> <span class="wponion-fancy-checkbox-button"></span> </span>
					' .

				$options['label'] . '
				</label>
			</div>';
		}
	}
}
