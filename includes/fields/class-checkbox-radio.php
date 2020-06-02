<?php

namespace WPOnion\Field;

use WPOnion\Field;

defined( 'ABSPATH' ) || exit;

/**
 * Class Checkbox_Radio
 *
 * @package WPOnion\Field
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Checkbox_Radio extends Field {
	/**
	 * Handles Fields Assets.
	 */
	public function assets() {
	}

	/**
	 * Returns Field's Default Value.
	 *
	 * @return array|mixed
	 */
	protected function defaults() {
		return array(
			'options' => array(),
			'label'   => false,
			'inline'  => false,
		);
	}

	/**
	 * Generates Final HTML Output.
	 *
	 * @return mixed|void
	 */
	protected function output() {
		$is_inline = ( true === $this->option( 'inline' ) ) ? 'wpo-inline-list' : '';
		$options   = $this->option( 'options' );
		$options   = ( wponion_is_array( $options ) ) ? $options : array_filter( $this->element_data( $options ) );

		if ( wponion_is_array( $options, true ) ) {
			$this->html( "<ul class=\"${is_inline}\" >" );
			foreach ( $options as $option_key => $option ) {
				if ( ! wponion_is_array( $option ) || ( wponion_is_array( $option ) && wponion_is_set( $option, 'label' ) || wponion_is_set( $option, 'custom_input' ) ) ) {
					$this->html( '<li>' )
						->html( $this->render_element( $this->handle_options( $option_key, $option ) ) )
						->html( '</li>' );
				} elseif ( wponion_is_array( $option ) && false === isset( $option['label'] ) ) {
					$this->html( "<li class=\"has-subgroup\"><h4 class=\"wponion-checkbox-radio-header\">${option_key}</h4><ul class=\"wponion-checkbox-group-lists\">" );
					foreach ( $option as $key => $value ) {
						$this->html( '<li>' )
							->html( $this->render_element( $this->handle_options( $key, $value ), true ) )
							->html( '</li>' );
					}
					$this->html( '</ul></li>' );
				}
			}
			$this->html( '</ul>' );
		} elseif ( 'checkbox' === $this->element_type() && empty( $options ) && empty( $this->option( 'query_args' ) ) ) {
			$this->html( $this->render_element( $this->handle_options( $this->field_id(), $this->option( 'label' ) ), 'single' ) );
		} elseif ( 'switcher' === $this->element_type() ) {
			$this->html( $this->render_element( $this->handle_options( $this->field_id(), $this->option( 'label' ) ), 'single' ) );
		} else {
			$this->html( '<p class="wpo-text-danger">' . __( 'No Options Found.', 'wponion' ) . '</p>' );
		}
		return $this->before() . $this->html( true ) . $this->after();
	}

	/**
	 * @param $id
	 * @param $value
	 * @param $field_args
	 *
	 * @return mixed
	 */
	protected function get_custom_input( $id, $value, $field_args ) {
		$field_args = ( true === $field_args ) ? 'text' : $field_args;
		return $this->sub_field( $this->handle_args( 'type', $field_args, array(
			'id'    => $id,
			'type'  => 'text',
			'class' => array( 'wponion-custom-value-input' ),
		), array( 'only_field' => true ) ), $value, $this->name() );
	}

	/**
	 * Returns Elements Value.
	 *
	 * @param $options
	 *
	 * @return mixed
	 */
	protected function element_value( $options ) {
		return $options['key'];
	}

	/**
	 * Renders Elements Options as html.
	 *
	 * @param      $options
	 * @param bool $in_group
	 *
	 * @return string
	 */
	protected function render_element( $options, $in_group = false ) {
		$elm_type     = $this->element_type();
		$attr         = $options['attributes'];
		$attr['type'] = ( 'switcher' === $elm_type ) ? 'checkbox' : $elm_type;

		if ( ! isset( $attr['class'] ) ) {
			$attr['class'] = array();
		}
		$attr['class'] = wponion_html_class( $attr['class'], $this->element_class( 'form-check-input' ) );
		$attr['value'] = $this->element_value( $options );
		$attr['name']  = ( 'single' === $in_group ) ? $this->name() : $this->name( ( 'radio' !== $elm_type ) ? '[]' : '' );
		$attr['id']    = sanitize_title( $attr['name'] . '_' . $options['key'] );
		$value         = $this->value();
		$label_attr    = array();

		if ( 'single' === $in_group ) {
			if ( 'switcher' === $elm_type ) {
				$attr['value'] = true;
			} elseif ( 'checkbox' === $elm_type && empty( $this->option( 'options' ) ) ) {
				$attr['value'] = ( $this->option( 'id' ) !== $options['key'] ) ? $options['key'] : true;
			} else {
				$attr['value'] = $options['key'];
			}
		}

		if ( wponion_is_set( $options, 'tooltip' ) && wponion_is_array( $options['tooltip'] ) ) {
			$label_attr                      = array();
			$label_attr['data-wponion-jsid'] = $this->js_field_id();
			$label_attr['data-field-jsid']   = $attr['id'];
			$label_attr['class']             = ( 'image_select' !== $elm_type ) ? ' wponion-field-tooltip ' : ' wponion-checkbox-radio-tooltip ';
			wponion_localize()->add( $this->js_field_id(), array( $attr['id'] . 'tooltip' => $options['tooltip']['data'] ) );
		}

		if ( true === $options['custom_input'] || true === wponion_is_array( $options['custom_input'] ) ) {
			$name             = $options['key'];
			$input_value      = ( isset( $value[ $name ] ) ) ? $value[ $name ] : false;
			$options['label'] = $this->get_custom_input( $name, $input_value, $options['custom_input'] );
		}

		if ( wponion_is_array( $value ) && true === $options['custom_input'] || true === wponion_is_array( $options['custom_input'] ) ) {
			$value = isset( $value[ $options['key'] ] ) ? $options['key'] : false;
		}
		return $this->_element_html( $label_attr, $this->attributes( $attr ), $value, $attr, $options );
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
		$label_attr['class'] = ( isset( $label_attr['class'] ) ) ? $label_attr['class'] . ' wponion-checker ' : 'wponion-checker';
		$label_attr          = wponion_array_to_html_attributes( $label_attr );
		return "<div ${label_attr}> <label> <input ${field_attr} {$this->checked( $value, $attr['value'], 'checked' )}/> {$options['label']} </label> </div>";
	}
}
