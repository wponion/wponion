<?php

namespace WPOnion\Field;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Field\Hidden' ) ) {
	/**
	 * Class Hidden
	 *
	 * @package WPOnion\Field
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Hidden extends \WPOnion\Field {
		/**
		 * @param array $data
		 *
		 * @return array
		 */
		public function handle_field_args( $data = array() ) {
			$data['only_field'] = true;
			return $data;
		}

		public function output() {
			if ( ! empty( $this->data( 'fields' ) ) ) {
				foreach ( $this->data( 'fields' ) as $field ) {
					$field['type'] = 'hidden';
					echo $this->sub_field( $field, wponion_get_field_value( $field, $this->value() ), $this->name() );
				}
			} else {
				$attr = $this->attributes( array(
					'type'              => 'hidden',
					'class'             => $this->element_class(),
					'value'             => $this->value(),
					'name'              => $this->name(),
					'data-wponion-jsid' => $this->js_field_id(),
				) );
				echo '<input type="hidden" name="' . $this->name() . '"  ' . $attr . '/>';
			}
		}

		public function field_assets() {
		}

		protected function field_default() {
			return array( 'fields' => array() );
		}
	}
}
