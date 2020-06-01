<?php

namespace WPOnion\Field;

/**
 * Class Button_Set
 *
 * @package WPOnion\Field
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Button_Set extends Checkbox_Radio {

	/**
	 * Generates Final HTML Output.
	 */
	protected function output() {
		$type = ( true === $this->option( 'multiple' ) ) ? 'checkbox' : 'radio';
		$this->set_option( 'type', $type );
		$html = '<div class="wponion-button-group-container">';
		$html .= parent::output();
		$html .= '</div>';
		return $html;
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
		$label_attr = wponion_array_to_html_attributes( $label_attr );
		$checked    = $this->checked( $value, $attr['value'], 'checked' );
		return <<<HTML
<div class="wponion-checker wponion-button-group {$this->option( 'inactive' )} {$this->option( 'size' )}">
	<label ${label_attr}> <input ${field_attr} ${checked}/> {$options['label']} </label>
</div>
HTML;
	}

	/**
	 * @return array
	 */
	protected function js_args() {
		return array(
			'active'   => $this->option( 'active' ),
			'inactive' => $this->option( 'inactive' ),
		);
	}

	/**
	 * Returns Field's Default Value.
	 *
	 * @return array|mixed
	 */
	protected function defaults() {
		return $this->parse_args( array(
			'multiple' => false,
			'size'     => false,
			'active'   => 'button button-primary',
			'inactive' => 'button button-secondary',
		), parent::defaults() );
	}
}
