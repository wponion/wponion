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
			return wpo_field( 'number', 'h-shadow', __( 'Horizontal Offset' ), array( 'surfix' => 'px' ) )
				->horizontal( true )
				->wrap_class( 'col-xs-12 col-md-2' );
		}

		protected function v_shadow() {
			return wpo_field( 'number', 'v-shadow', __( 'Vertical Offset' ), array( 'surfix' => 'px' ) )
				->horizontal( true )
				->wrap_class( 'col-xs-12 col-md-2' );
		}

		/**
		 * @return false|\WPO\Field
		 */
		protected function blur() {
			return wpo_field( 'number', 'blur', __( 'Blur' ), array( 'surfix' => 'px' ) )
				->horizontal( true )
				->wrap_class( 'col-xs-12 col-md-2' );
		}

		/**
		 * @return false|\WPO\Field
		 */
		protected function spread() {
			return wpo_field( 'number', 'spread', __( 'Spread' ), array( 'surfix' => 'px' ) )
				->horizontal( true )
				->wrap_class( 'col-xs-12 col-md-2' );
		}

		/**
		 * @return false|\WPO\Field
		 */
		protected function color() {
			return wpo_field( 'color_picker', 'color', __( 'Shadow Color' ) )
				->horizontal( true )
				->wrap_class( 'col-xs-12 col-md-2' );
		}

		/**
		 * @return false|\WPO\Field
		 */
		protected function shadow_type() {
			return wpo_field( 'switcher', 'inset', __( 'Inset ?' ) )
				->horizontal( true )
				->wrap_class( 'col-xs-12 col-md-1' );
		}

		/**
		 * @return mixed|void
		 */
		protected function output() {
			echo $this->before();

			echo '<div class="row">';

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

			if ( $this->data( 'hover' ) ) {
				$val       = ( ! is_array( $this->value( 'hover' ) ) ) ? array() : $this->value( 'hover' );
				$i_checked = ( ! empty( array_filter( $val ) ) ) ? true : false;
				echo '<div class="row">';
				echo $this->sub_field( $this->handle_args( 'label', $this->data( 'hover' ), array(
					'label'      => __( 'Enable Hover' ),
					'horizontal' => true,
					'id'         => $this->js_field_id() . 'enableHover',
					'name'       => '',
					'type'       => 'switcher',
				), array( 'wrap_id' => 'enable_hover' ) ), $i_checked, null );
				echo '</div>';
				echo '<div class="row">';

				$hover = wpo_field( 'fieldset', 'hover' )->only_field( true );
				$hover->field( $this->h_shadow() );
				$hover->field( $this->v_shadow() );
				$hover->field( $this->blur() );

				if ( 'box' === $this->data( 'shadow_type' ) ) {
					$hover->field( $this->spread() );
				}

				$hover->field( $this->color() );

				if ( 'box' === $this->data( 'shadow_type' ) ) {
					$hover->field( $this->shadow_type() );
				}
				$is_show = ( false === $i_checked ) ? 'display:none;' : '';
				echo '<div class="hover-effect" style="' . $is_show . '">';
				echo $this->sub_field( $hover, $this->value( 'hover' ), $this->name() );
				echo '</div>';
				echo '</div>';
			}

			echo $this->after();
		}

		/**
		 * @return array|mixed
		 */
		protected function field_default() {
			return array(
				'shadow_type' => 'text',
				'hover'       => __( 'Enable Hover' ),
			);
		}

		/**
		 * @return mixed|void
		 */
		public function field_assets() {
		}
	}
}
