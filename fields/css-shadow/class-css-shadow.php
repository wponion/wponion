<?php

namespace WPOnion\Field;

use WPOnion\Field;

if ( ! class_exists( '\WPOnion\Fields\CSS_Shadow' ) ) {
	/**
	 * Class CSS_Shadow
	 *
	 * @package WPOnion\Field
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 */
	class CSS_Shadow extends Field {

		protected function field_wrap_class() {
			return 'wponion-has-nested-fields';
		}

		protected function output() {
			echo $this->before();

			/**
			 * H Shadow
			 */
			$field = wpo_field( 'spinner', 'h-shadow', __( 'Horizontal Offset' ), array( 'surfix' => 'px' ) );
			$field->horizontal( true )
				->wrap_class( 'col-xs-12 col-md-2' );
			echo $this->sub_field( $field, $this->value( 'h-shadow' ), $this->name() );

			/**
			 * H Shadow
			 */
			$field = wpo_field( 'spinner', 'v-shadow', __( 'Vertical Offset' ), array( 'surfix' => 'px' ) );
			$field->horizontal( true )
				->wrap_class( 'col-xs-12 col-md-2' );
			echo $this->sub_field( $field, $this->value( 'v-shadow' ), $this->name() );

			/**
			 * Blue
			 */
			$field = wpo_field( 'spinner', 'blur', __( 'Blur' ), array( 'surfix' => 'px' ) );
			$field->horizontal( true )
				->wrap_class( 'col-xs-12 col-md-2' );
			echo $this->sub_field( $field, $this->value( 'blur' ), $this->name() );

			if ( 'box' === $this->data( 'shadow_type' ) ) {
				/**
				 * Shadow Color
				 */
				$field = wpo_field( 'spinner', 'spread', __( 'Spread' ) )
					->horizontal( true )
					->wrap_class( 'col-xs-12 col-md-2' );
				echo $this->sub_field( $field, $this->value( 'spread' ), $this->name() );
			}

			/**
			 * Shadow Color
			 */
			$field = wpo_field( 'color_picker', 'color', __( 'Shadow Color' ) )
				->horizontal( true )
				->wrap_class( 'col-xs-12 col-md-2' );
			echo $this->sub_field( $field, $this->value( 'color' ), $this->name() );

			if ( 'box' === $this->data( 'shadow_type' ) ) {
				/**
				 * Shadow Color
				 */
				$field = wpo_field( 'switcher', 'inset', __( 'Inset ?' ) )
					->horizontal( true )
					->wrap_class( 'col-xs-12 col-md-1' );
				echo $this->sub_field( $field, $this->value( 'inset' ), $this->name() );
			}
			echo $this->after();
		}

		protected function field_default() {
			return array(
				'shadow_type' => 'text',
			);
		}

		public function field_assets() {
		}
	}
}
