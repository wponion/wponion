<?php

namespace WPOnion\Field;

use WPOnion\Field;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Field\Input_Group' ) ) {
	/**
	 * Class Color_Picker
	 *
	 * @package WPOnion\Field
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Input_Group extends Field {

		/**
		 * Generates Final HTML Output.
		 *
		 * @return mixed|void
		 */
		protected function output() {
			echo $this->before();
			if ( wponion_is_array( $this->data( 'fields' ) ) ) {
				echo '<div class=" row">';
				foreach ( $this->data( 'fields' ) as $id => $data ) {
					$field_id   = ( wpo_is_field( $data ) ) ? wponion_field_id( $data ) : false;
					$field_id   = ( true === is_numeric( $id ) && false === $field_id ) ? wponion_hash_array( $data ) : $id;
					$field_args = $this->handle_args( 'title', $data, array(
						'type'       => 'text',
						'horizontal' => true,
						'wrap_class' => 'col-xs-12 col-sm-12 col-md-3',
						'id'         => $field_id,
					) );

					if ( empty( $field_args['id'] ) ) {
						$field_args['id'] = $field_id;
					}

					echo $this->sub_field( $field_args, $this->value( $field_args['id'] ), $this->name() );
				}
				echo '</div>';
			}
			echo $this->after();
		}

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
				'fields' => array(),
			);
		}
	}
}
