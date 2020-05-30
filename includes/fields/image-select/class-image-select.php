<?php

namespace WPOnion\Field;

defined( 'ABSPATH' ) || exit;

/**
 * Class Image_Select
 *
 * @package WPOnion\Field
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Image_Select extends checkbox_radio {

	/**
	 * Generates Final HTML Output.
	 */
	protected function output() {
		$type = ( true === $this->option( 'multiple' ) ) ? 'checkbox' : 'radio';
		$this->set_option( 'type', $type );
		return parent::output();
	}

	/**
	 * Renders elementHTML.
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
		$url        = ( isset( $options['image'] ) && true === wponion_is_url( $options['image'] ) ) ? $options['image'] : $options['label'];
		$label_attr = wponion_array_to_html_attributes( $label_attr );
		$checked    = $this->checked( $value, $attr['value'], 'checked' );
		return "<div class=\"wponion-checker\"> <label ${label_attr}> <input ${field_attr} ${checked}/> <div class=\"wponion-image-select-thumbnail wponion-checker-content\"> <img src=\"${url}\"/> </div> </label></div>";
	}


	/**
	 * Returns Field's Default Value.
	 *
	 * @return array
	 */
	protected function defaults() {
		return $this->parse_args( parent::defaults(), array( 'multiple' => false ) );
	}
}
