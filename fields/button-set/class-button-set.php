<?php

namespace WPOnion\Field;

if ( ! class_exists( '\WPOnion\Field\Button_Set' ) ) {
	/**
	 * Class Button_Set
	 *
	 * @package WPOnion\Field
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Button_Set extends Checkbox_Radio {
		/**
		 * Renders HTML.
		 */
		protected function output() {
			$this->field['type'] = ( true === $this->data( 'multiple' ) ) ? 'checkbox' : 'radio';
			echo '<div class="wponion-button-group-container">';
			parent::output();
			echo '</div>';
		}

		/**
		 * @param $label_attr
		 * @param $field_attr
		 * @param $value
		 * @param $attr
		 * @param $options
		 *
		 * @return string
		 */
		protected function _element_html( $label_attr, $field_attr, $value, $attr, $options ) {
			return '<div class="wponion-checker wponion-button-group ' . $this->data( 'inactive' ) . ' ' . $this->data( 'size' ) . '"><label ' . wponion_array_to_html_attributes( $label_attr ) . '>
				<input ' . $field_attr . ' ' . $this->checked( $value, $attr['value'], 'checked' ) . '  />' . $options['label'] . '
			</label></div>';
		}

		/**
		 * @return array
		 */
		protected function js_field_args() {
			return array(
				'active'   => $this->data( 'active' ),
				'inactive' => $this->data( 'inactive' ),
			);
		}

		/**
		 * @return array
		 */
		protected function field_default() {
			return $this->parse_args( array(
				'multiple' => false,
				'size'     => false,
				'active'   => 'button button-primary',
				'inactive' => 'button button-secondary',
			), parent::field_default() );
		}
	}
}
