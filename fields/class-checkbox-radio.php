<?php

namespace WPOnion\Field;

use WPOnion\Field;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Field\Checkbox_Radio' ) ) {
	/**
	 * Class Checkbox_Radio
	 *
	 * @package WPOnion\Field
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Checkbox_Radio extends Field {
		/**
		 * Handles Fields Assets.
		 *
		 * @return mixed|void
		 */
		public function field_assets() {
		}

		/**
		 * Returns Field's Default Value.
		 *
		 * @return array|mixed
		 */
		protected function field_default() {
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
			echo $this->before();
			$is_inline = ( true === $this->data( 'inline' ) ) ? 'wpo-inline-list' : '';
			$options   = $this->data( 'options' );
			$options   = ( wponion_is_array( $options ) ) ? $options : array_filter( $this->element_data( $options ) );

			if ( wponion_is_array( $options ) && ! empty( $options ) ) {
				echo '<ul class="' . $is_inline . '">';
				foreach ( $options as $option_key => $option ) {
					if ( ! wponion_is_array( $option ) || wponion_is_array( $option ) && ( isset( $option['label'] ) || isset( $option['custom_input'] ) ) ) {
						echo '<li>' . $this->render_element( $this->handle_options( $option_key, $option ) ) . '</li>';
					} elseif ( wponion_is_array( $option ) && false === isset( $option['label'] ) ) {
						echo '<li class="has-subgroup">';
						echo '<h4 class="wponion-checkbox-radio-header">' . $option_key . '</h4>';
						echo '<ul class="wponion-checkbox-group-lists">';
						foreach ( $option as $key => $value ) {
							echo '<li>';
							echo $this->render_element( $this->handle_options( $key, $value ), true, $option_key );
							echo '</li>';
						}
						echo '</ul>';
						echo '</li>';
					}
				}
				echo '</ul>';
			} elseif ( 'checkbox' === $this->element_type() && empty( $options ) && empty( $this->data( 'query_args' ) ) ) {
				echo $this->render_element( $this->handle_options( $this->field_id(), $this->data( 'label' ) ), 'single' );
			} elseif ( 'switcher' === $this->element_type() ) {
				echo $this->render_element( $this->handle_options( $this->field_id(), $this->data( 'label' ) ), 'single' );
			} else {
				echo '<p class="wpo-text-danger">' . __( 'No Options Found.', 'wponion' ) . '</p>';
			}

			echo $this->after();
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
		 * @param bool $group_title
		 *
		 * @return string
		 */
		protected function render_element( $options, $in_group = false, $group_title = false ) {
			$attr         = $options['attributes'];
			$attr['type'] = ( 'switcher' === $this->element_type() ) ? 'checkbox' : $this->element_type();

			if ( ! isset( $attr['class'] ) ) {
				$attr['class'] = array();
			}
			$attr['class'] = wponion_html_class( $attr['class'], $this->element_class( 'form-check-input' ) );
			$attr['value'] = $this->element_value( $options );
			$value         = $this->value();
			$wrap_attr     = array();
			$label_attr    = array();

			if ( 'single' === $in_group ) {
				$attr['name'] = $this->name();
				if ( 'switcher' === $this->element_type() ) {
					$attr['value'] = true;
				} elseif ( 'checkbox' === $this->element_type() && empty( $this->data( 'options' ) ) ) {
					$attr['value'] = ( $this->data( 'id' ) !== $options['key'] ) ? $options['key'] : true;
				} else {
					$attr['value'] = $options['key'];
				}
			} else {
				$is_checkbox  = ( 'radio' !== $this->element_type() ) ? '[]' : '';
				$attr['name'] = $this->name( $is_checkbox );
			}

			$elem_id    = sanitize_title( $attr['name'] . '_' . $options['key'] );
			$attr['id'] = $elem_id;

			if ( isset( $options['tooltip'] ) && wponion_is_array( $options['tooltip'] ) ) {
				$label_attr                      = array();
				$label_attr['data-wponion-jsid'] = $this->js_field_id();
				$label_attr['data-field-jsid']   = $elem_id;
				$label_attr['class']             = ( 'image_select' !== $this->element_type() ) ? ' wponion-field-tooltip ' : ' wponion-checkbox-radio-tooltip ';
				wponion_localize()->add( $this->js_field_id(), array( $elem_id . 'tooltip' => $options['tooltip']['data'] ) );
			}

			$wrap_attr['class'] = wponion_html_class( array( 'form-group', 'form-check' ) );
			$field_attr         = $this->attributes( $attr );

			if ( true === $options['custom_input'] || true === wponion_is_array( $options['custom_input'] ) ) {
				$name             = $options['key'];
				$input_value      = ( isset( $value[ $name ] ) ) ? $value[ $name ] : false;
				$options['label'] = $this->get_custom_input( $name, $input_value, $options['custom_input'] );
			}

			if ( wponion_is_array( $value ) && true === $options['custom_input'] || true === wponion_is_array( $options['custom_input'] ) ) {
				$value = isset( $value[ $options['key'] ] ) ? $options['key'] : false;
			}
			return $this->_element_html( $label_attr, $field_attr, $value, $attr, $options );
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
			$label_attr['class'] = ( isset( $label_attr['class'] ) ) ? $label_attr['class'] . ' wponion-checker ' : ' wponion-checker ';
			return '<div ' . wponion_array_to_html_attributes( $label_attr ) . '><label >
				<input ' . $field_attr . ' ' . $this->checked( $value, $attr['value'], 'checked' ) . '  />' . $options['label'] . '
			</label></div>';
		}
	}
}
