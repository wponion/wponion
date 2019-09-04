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

		/**
		 * @return string
		 */
		protected function field_wrap_class() {
			return 'wponion-has-nested-fields';
		}

		/**
		 * @return false|\WPO\Field
		 */
		protected function h_shadow() {
			return wpo_field( 'number', 'h-shadow', __( 'Horizontal Length', 'wponion' ), array( 'surfix' => 'px' ) )
				->attribute( 'data-css-id', 'h-shadow' )
				->horizontal( true )
				->wrap_class( 'col-xs-12 col-md-2' );
		}

		protected function v_shadow() {
			return wpo_field( 'number', 'v-shadow', __( 'Vertical Length', 'wponion' ), array( 'surfix' => 'px' ) )
				->attribute( 'data-css-id', 'v-shadow' )
				->horizontal( true )
				->wrap_class( 'col-xs-12 col-md-2' );
		}

		/**
		 * @return false|\WPO\Field
		 */
		protected function blur() {
			return wpo_field( 'number', 'blur', __( 'Blur Radius', 'wponion' ), array( 'surfix' => 'px' ) )
				->attribute( 'data-css-id', 'blur' )
				->horizontal( true )
				->wrap_class( 'col-xs-12 col-md-2' );
		}

		/**
		 * @return false|\WPO\Field
		 */
		protected function spread() {
			return wpo_field( 'number', 'spread', __( 'Spread Radius', 'wponion' ), array( 'surfix' => 'px' ) )
				->attribute( 'data-css-id', 'spread' )
				->horizontal( true )
				->wrap_class( 'col-xs-12 col-md-2' );
		}

		/**
		 * @return false|\WPO\Field
		 */
		protected function color() {
			return wpo_field( 'color_picker', 'color', __( 'Shadow Color', 'wponion' ) )
				->attribute( 'data-css-id', 'color' )
				->horizontal( true )
				->wrap_class( 'col-xs-12 col-md-2' );
		}

		/**
		 * @return false|\WPO\Field
		 */
		protected function shadow_type() {
			return wpo_field( 'switcher', 'inset', __( 'Inset ?', 'wponion' ) )
				->attribute( 'data-css-id', 'inset' )
				->horizontal( true )
				->wrap_class( 'col-xs-12 col-md-1' );
		}

		/**
		 * @return mixed|void
		 */
		protected function output() {
			echo $this->before();

			echo '<div class="row wponion-row">';

			//H Shadow
			echo $this->sub_field( $this->h_shadow(), $this->value( 'h-shadow' ), $this->name() );

			//V Shadow
			echo $this->sub_field( $this->v_shadow(), $this->value( 'v-shadow' ), $this->name() );

			//Blur
			echo $this->sub_field( $this->blur(), $this->value( 'blur' ), $this->name() );

			if ( 'box' === $this->data( 'shadow_type' ) ) {
				// Spread
				echo $this->sub_field( $this->spread(), $this->value( 'spread' ), $this->name() );
			}

			// Shadow Color
			echo $this->sub_field( $this->color(), $this->value( 'color' ), $this->name() );

			if ( 'box' === $this->data( 'shadow_type' ) ) {
				// Shadow Type
				echo $this->sub_field( $this->shadow_type(), $this->value( 'inset' ), $this->name() );
			}

			echo '</div>';

			if ( $this->data( 'preview' ) ) {
				$type  = $this->data( 'shadow_type' );
				$class = ( 'box' === $type ) ? 'box-shadow' : '';
				echo '<div class="row wponion-row">';
				echo '<div class="col-xs-12 col-md-6 css-shadow-preview ' . $class . '">';
				$text = ( true === $this->data( 'preview' ) ) ? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' : $this->data( 'preview' );
				echo '<p>' . $text . '</p>';
				echo '</div>';
				echo '</div>';
			}

			echo $this->after();
		}

		protected function js_field_args() {
			return array( 'shadow_type' => $this->data( 'shadow_type' ) );
		}

		/**
		 * @return array|mixed
		 */
		protected function field_default() {
			return array(
				'shadow_type' => 'text',
				'preview'     => true,
			);
		}

		/**
		 * @return mixed|void
		 */
		public function field_assets() {
		}
	}
}
