<?php

namespace WPOnion\Field;

use WPOnion\Field;

defined( 'ABSPATH' ) || exit;

/**
 * Class Text
 *
 * @package WPOnion\Field
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Text extends Field {
	/**
	 * Handles Input Attributes.
	 *
	 * @return string
	 */
	protected function _input_attributes() {
		$field_class = 'wponion-form-control';
		$field_class = ( $this->has_errors() ) ? $field_class . ' is-invalid ' : $field_class;
		$attr        = array(
			'class'             => $this->element_class( $field_class ),
			'name'              => $this->name(),
			'data-wponion-jsid' => $this->js_field_id(),
		);

		if ( 'textarea' !== $this->element_type() ) {
			$attr['value'] = $this->value();
			$attr['type']  = $this->element_type();
			$attr['list']  = ( ! empty( $this->option( 'datalist/html' ) ) ) ? $this->js_field_id() . '_inputlists' : '';

		}
		return $this->attributes( $attr );
	}

	/**
	 * Renders Element HTML.
	 */
	protected function element_html() {
		return '<input ' . $this->_input_attributes() . '/>';
	}

	/**
	 * Generates Final HTML Output.
	 *
	 * @return string
	 */
	protected function output() {
		//echo $this->before();
		//echo $this->datalist();
		$html = wponion_input_group_html( $this->option( 'prefix' ), $this->option( 'surfix' ), $this->element_html() );
		//echo $this->after();
		return $this->before() . $this->datalist() . $html . $this->after();
	}

	/**
	 * Renders Textfield Data List.
	 */
	protected function datalist() {
		$options = $this->option( 'options' );
		if ( ! empty( $options ) ) {
			$options      = ( ! wponion_is_array( $options ) ) ? $this->element_data( $options ) : $options;
			$options_html = array();
			foreach ( $options as $key => $option ) {
				if ( wponion_is_array( $option ) && isset( $option['label'] ) ) {
					echo $this->sel_option( $this->handle_options( $key, $option, array(), false ) );
				} elseif ( wponion_is_array( $option ) && ! isset( $option['label'] ) ) {
					$options_html[] = '<optgroup label="' . $key . '">';
					foreach ( $option as $k => $v ) {
						$options_html[] = $this->sel_option( $this->handle_options( $k, $v, array(), false ) );
					}
					$options_html[] = '</optgroup>';
				} else {
					$options_html[] = $this->sel_option( $this->handle_options( $key, $option, array(), false ) );
				}
			}
			$options_html = implode( ' ', $options_html );
			$this->set_option( 'datalist/html', "<datalist id=\"{$this->js_field_id()}_inputlists\"> ${options_html} </datalist>" );
			return $this->option( 'datalist/html' );
		}
		return '';
	}

	/**
	 * Handles Option array.
	 *
	 * @param $data
	 *
	 * @return string
	 */
	protected function sel_option( $data ) {
		$data['attributes']['value'] = $data['key'];
		$data['attributes']          = wponion_array_to_html_attributes( $data['attributes'] );
		$selected                    = $this->checked( $this->value(), $data['key'], 'selected' );
		return "<option ${data['attributes']} ${selected}>${data['label']}</option>";
	}

	/**
	 * Checks & Updat fields args based on field config.
	 */
	protected function handle_arguments() {
		if ( $this->has_option( 'inputmask' ) ) {
			$this->set_option_default( 'wrap_class', '' );
			$this->set_option( 'wrap_class', wponion_html_class( $this->option( 'wrap_class' ), 'wponion-inputmask' ) );
			$this->set_option( 'attributes/data-wponion-inputmask', 'yes' );
		}

		if ( $this->has_option( 'placeholder' ) ) {
			$this->set_option( 'attributes/placeholder', $this->option( 'placeholder' ) );
		}
	}

	/**
	 * Handles Fields Assets.
	 */
	public function assets() {
		if ( false !== $this->has( 'inputmask' ) ) {
			wponion_load_asset( 'wponion-inputmask' );
		}
	}

	/**
	 * Returns Field's Default Value.
	 *
	 * @return array|mixed
	 */
	protected function defaults() {
		return array(
			'inputmask'   => false,
			'placeholder' => false,
			'prefix'      => false,
			'options'     => false,
			'surfix'      => false,
		);
	}

	/**
	 * Returns required Datas to use in Javascript.
	 *
	 * @return array
	 */
	protected function js_args() {
		return array(
			'inputmask' => ( $this->has( 'inputmask' ) ) ? $this->option( 'inputmask' ) : false,
		);
	}
}
