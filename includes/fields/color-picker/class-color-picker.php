<?php

namespace WPOnion\Field;

defined( 'ABSPATH' ) || exit;

/**
 * Class Color_Picker
 *
 * @package WPOnion\Field
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Color_Picker extends Checkbox_Radio {
	/**
	 * Generates Final HTML Output.
	 *
	 * @return mixed|void
	 */
	protected function output() {
		if ( empty( $this->option( 'options' ) ) ) {
			$attr    = $this->attributes( array(
				'type'  => 'text',
				'name'  => $this->name(),
				'value' => $this->value(),
				'class' => 'wponion-color-picker-element wponion-form-control',
			) );
			$input   = "<input ${attr} />";
			$args    = $this->option( 'settings' );
			$inline  = ( isset( $args['inline'] ) && true === $args['inline'] );
			$element = ( $inline ) ? $input : wponion_input_group_html( "<span class=\"cpickr-bg\" style=\"background-color:{$this->value}\"></span>", '', $input );
			return $this->before() . "<div class=\"colorpickerwrap\"> ${element} <div class=\"wponion-color-picker-element\" ></div> </div>" . $this->after();
		} else {
			$type = ( true === $this->option( 'multiple' ) ) ? 'checkbox' : 'radio';
			$this->set_option( 'type', $type );
			return "<div class=\"colors-wrapper {$this->option( 'layout' )}\">" . parent::output() . '</div>';
		}
	}

	/**
	 * @return array
	 */
	protected function js_args() {
		return array( 'settings' => $this->option( 'settings' ) );
	}

	/**
	 * Handles Fields Assets.
	 *
	 * @return mixed|void
	 */
	public function assets() {
		wponion_load_asset( 'wponion-pickr' );
	}

	/**
	 * Returns Field's Default Value.
	 *
	 * @return array|mixed
	 */
	protected function defaults() {
		return $this->parse_args( array(
			'settings' => array( 'theme' => 'nano' ),
			'layout'   => 'round with-margin',
			'multiple' => false,
			'size'     => 25,
		), parent::defaults() );
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
	 * @param array        $label_attr
	 * @param array        $field_attr
	 * @param array|string $value
	 * @param array        $attr
	 * @param array        $options
	 *
	 * @return string
	 */
	protected function _element_html( $label_attr, $field_attr, $value, $attr, $options ) {
		$attr['value'] = $this->element_value( $options );
		$label_attr    = wponion_array_to_html_attributes( $label_attr );
		$size          = absint( $this->option( 'size' ) );
		$checked       = $this->checked( $value, $attr['value'], 'checked' );
		return <<<HTML
<label ${label_attr} style="width:${size}px; height:${size}px;">
	<input ${field_attr} ${checked} />
	<span class="color-palette-color" style="background:{$attr['value']}">{$attr['value']}</span>
</label>
HTML;
	}
}
