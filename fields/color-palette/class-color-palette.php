<?php
/**
 *
 * Initial version created 28-05-2018 / 09:29 AM
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

if ( ! class_exists( '\WPOnion\Field\Color_Palette' ) ) {
	/**
	 * Class Color_Palette
	 *
	 * @package WPOnion\Field
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Color_Palette extends checkbox_radio {

		/**
		 * Final HTML Output
		 */
		protected function output() {
			echo $this->before();
			echo '<div class=" colors-wrapper ' . $this->data( 'style' ) . ' ">';
			$this->field['type'] = $this->field['palette_type'];
			parent::output();
			echo '</div>';
			echo $this->after();
		}

		/**
		 * @return array|mixed
		 */
		protected function field_default() {
			return $this->parse_args( array(
				'style'        => 'round with-margin',
				'palette_type' => 'radio',
				'size'         => 25,
			), parent::field_default() );
		}

		/**
		 * @param $options
		 *
		 * @return mixed
		 */
		protected function element_value( $options ) {
			return is_numeric( $options['key'] ) ? $options['label'] : $options['key'];
		}

		/**
		 * Renders Single Option as html.
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
			$attr['value'] = ( is_numeric( $options['key'] ) ) ? $options['label'] : $options['key'];
			return '
			<label ' . wponion_array_to_html_attributes( $label_attr ) . ' style="width:' . absint( $this->data( 'size' ) ) . 'px; height:' . absint( $this->data( 'size' ) ) . 'px;"> 
				<input ' . $field_attr . ' ' . $this->checked( $value, $attr['value'], 'checked' ) . '   /><span class="color-palette-color" style="background:' . $attr['value'] . '">' . $attr['value'] . '</span>
			</label>';
		}
	}
}
