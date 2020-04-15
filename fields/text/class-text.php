<?php

namespace WPOnion\Field;

use WPOnion\Field;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Field\Text' ) ) {
	/**
	 * Class Text
	 *
	 * @package WPOnion\Field
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
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

			return $this->attributes( array(
				'type'              => $this->element_type(),
				'class'             => $this->element_class( $field_class ),
				'value'             => $this->value(),
				'name'              => $this->name(),
				'data-wponion-jsid' => $this->js_field_id(),
				'list'              => $this->js_field_id() . 'inputLists',
			) );
		}

		/**
		 * Renders Element HTML.
		 */
		public function element_html() {
			return '<input ' . $this->_input_attributes() . '/>';
		}

		/**
		 * Generates Final HTML Output.
		 *
		 * @return mixed|void
		 */
		protected function output() {
			echo $this->before();
			echo wponion_input_group_html( $this->data( 'prefix' ), $this->data( 'surfix' ), $this->element_html() );
			echo $this->datalist();
			echo $this->after();
		}

		/**
		 * Renders Textfield Data List.
		 */
		public function datalist() {
			if ( false !== $this->data( 'options' ) ) {
				echo '<datalist id="' . $this->js_field_id() . 'inputLists">';
				$options = ( ! wponion_is_array( $this->data( 'options' ) ) ) ? $this->element_data( $this->data( 'options' ) ) : $this->data( 'options' );

				foreach ( $options as $key => $option ) {
					if ( wponion_is_array( $option ) && isset( $option['label'] ) ) {
						echo $this->sel_option( $this->handle_options( $key, $option ) );
					} elseif ( wponion_is_array( $option ) && ! isset( $option['label'] ) ) {
						echo '<optgroup label="' . $key . '">';
						foreach ( $option as $k => $v ) {
							echo $this->sel_option( $this->handle_options( $k, $v ) );
						}
						echo '</optgroup>';
					} else {
						echo $this->sel_option( $this->handle_options( $key, $option ) );
					}
				}
				echo '</datalist>';
			}
		}


		/**
		 * Handles Option array.
		 *
		 * @param $data
		 *
		 * @return string
		 */
		protected function sel_option( $data ) {
			$elem_id = sanitize_title( $this->name() . '_' . $data['key'] );
			if ( isset( $data['tooltip'] ) && wponion_is_array( $data['tooltip'] ) ) {
				$data['attributes']['title']             = $data['tooltip']['attr']['title'];
				$data['attributes']['data-wponion-jsid'] = $this->js_field_id();
				$data['attributes']['data-field-jsid']   = $elem_id;
				$data['attributes']['class']             = ' wponion-field-tooltip ';
				wponion_localize()->add( $this->js_field_id(), array( $elem_id . 'tooltip' => $data['tooltip']['data'] ) );
			}

			$data['attributes']['value'] = $data['key'];
			return '<option ' . wponion_array_to_html_attributes( $data['attributes'] ) . $this->checked( $this->value(), $data['key'], 'selected' ) . ' > ' . $data['label'] . ' </option > ';
		}

		/**
		 * @return bool
		 */
		protected function has_prefix_surfix() {
			return ( false !== $this->has( 'prefix' ) || false !== $this->has( 'surfix' ) );
		}

		/**
		 * Checks & Updat fields args based on field config.
		 *
		 * @param array $data
		 *
		 * @return array
		 */
		protected function handle_field_args( $data = array() ) {
			if ( false !== $data['inputmask'] ) {
				$data['wrap_class']                           = ( false !== $data['wrap_class'] ) ? $data['wrap_class'] : '';
				$data['wrap_class']                           = $data['wrap_class'] . ' ' . ' wponion-inputmask ';
				$data['attributes']['data-wponion-inputmask'] = 'yes';
			}

			if ( false !== $data['placeholder'] ) {
				$data['attributes']['placeholder'] = $data['placeholder'];
			}

			return $data;
		}

		/**
		 * Handles Fields Assets.
		 *
		 * @return mixed|void
		 */
		public function field_assets() {
			if ( false !== $this->has( 'inputmask' ) ) {
				wponion_load_asset( 'wponion-inputmask' );
			}
		}

		/**
		 * Returns Field's Default Value.
		 *
		 * @return array|mixed
		 */
		protected function field_default() {
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
		protected function js_field_args() {
			$args = array();
			if ( false !== $this->has( 'inputmask' ) ) {
				$args['inputmask'] = $this->data( 'inputmask' );
			}
			return $args;
		}
	}
}
