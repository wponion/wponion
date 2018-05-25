<?php
/**
 *
 * Initial version created 17-05-2018 / 06:07 AM
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
if ( ! class_exists( 'WPOnion_Field_select' ) ) {
	class WPOnion_Field_select extends \WPOnion\Field {
		protected $select_framework = null;

		protected function output() {
			$this->before();
			$options = $this->data( 'options' );
			$attr    = $this->attributes( array(
				'name'  => ( true === $this->has( 'multiple' ) ) ? $this->name( '[]' ) : $this->name(),
				'class' => array( 'form-control' ),
			) );

			echo '<select ' . $attr . '>';

			foreach ( $options as $key => $option ) {
				if ( is_array( $option ) && isset( $option['label'] ) ) {
					echo $this->sel_option( $this->handle_options( $key, $option ) );
				} elseif ( is_array( $option ) && ! isset( $option['label'] ) ) {
					echo '<optgroup label="' . $key . '">';
					foreach ( $option as $k => $v ) {
						echo $this->sel_option( $this->handle_options( $k, $v ) );
					}
					echo '</optgroup>';
				} else {
					echo $this->sel_option( $this->handle_options( $key, $option ) );
				}
			}
			echo '</select>';

			$this->after();
		}

		protected function sel_option( $data ) {
			$elem_id = sanitize_title( $this->name() . '_' . $data['key'] );
			if ( isset( $data['tooltip'] ) && is_array( $data['tooltip'] ) ) {
				$data['attributes']['title']             = $data['tooltip']['attr']['title'];
				$data['attributes']['data-wponion-jsid'] = $this->js_field_id();
				$data['attributes']['data-field-jsid']   = $elem_id;
				$data['attributes']['class']             = ' wponion-field-tooltip ';
				wponion_localize()->add( $this->js_field_id(), array( $elem_id . 'tooltip' => $data['tooltip']['data'] ) );
			}

			$data['attributes']['value'] = $data['key'];
			return '<option ' . wponion_array_to_html_attributes( $data['attributes'] ) . $this->checked( $this->value(), $data['key'], 'selected' ) . ' > ' . $data['label'] . ' </option > ';
		}

		public function handle_field_args( $data = array() ) {
			if ( true === $data['multiple'] ) {
				$data['attributes']['multiple'] = 'multiple';
			}

			if ( ! isset( $data['attributes']['class'] ) ) {
				$data['attributes']['class'] = array();
			}

			$this->select_framework      = wponion_validate_select_framework( $data );
			$select_class                = wponion_select_classes( $this->select_framework );
			$data['attributes']['class'] = wponion_html_class( $data['attributes']['class'], $select_class, false );
			wponion_localize()->add( $this->js_field_id(), array(
				$this->select_framework => ( isset( $data[ $this->select_framework ] ) && is_array( $data[ $this->select_framework ] ) ) ? $data[ $this->select_framework ] : array(),
			) );
			return $data;
		}

		protected function field_default() {
			return array(
				'options'  => array(),
				'multiple' => false,
			);
		}

		public function field_assets() {
			wponion_load_asset( $this->select_framework );
		}
	}
}
