<?php

namespace WPOnion\Field;

use WPOnion\Field;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Field\Visual_Editor' ) ) {
	/**
	 * Class Visual_Editor
	 *
	 * @package WPOnion\Field
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Visual_Editor extends Field {

		/**
		 * Generates Final HTML Output.
		 *
		 * @return mixed|void
		 */
		protected function output() {
			echo $this->before();
			echo '<div class="css-builder-main-wrap">';
			echo '<div class="css-editor-left">';

			$margin_title         = __( 'Margin', 'wponion' );
			$border_title         = __( 'Border', 'wponion' );
			$padding_title        = __( 'Padding', 'wponion' );
			$border_radius_title  = __( 'Radius', 'wponion' );
			$margin_fields        = $this->css_fields();
			$padding_fields       = $this->css_fields( 'padding' );
			$border_fields        = $this->css_fields( 'border' );
			$border_radius_fields = $this->css_border_radius_fields();
			echo <<<HTML
<div class="css-builder-wrap">
	<div class="css-builder-container">
		<div class="css-builder-layer-margin"> <span class="css-builder-heading">$margin_title</span> $margin_fields	</div>
		<div class="css-builder-layer-padding"> <span class="css-builder-heading">$padding_title</span> $padding_fields	</div>
		<div class="css-builder-layer-border"> <span class="css-builder-heading">$border_title</span> $border_fields	</div>
		<div class="css-builder-layer-border-radius"> <span class="css-builder-heading">$border_radius_title</span> $border_radius_fields	</div>

	</div>
</div>
HTML;
			echo '</div>';

			echo '<div class="css-editor-right">';
			echo $this->right_side_fields();
			echo '</div>';
			echo '</div>';
			echo $this->after();
		}

		/**
		 * Generates CSS Realted Fields
		 *
		 * @param string $field_id
		 *
		 * @return mixed|string
		 */
		public function css_fields( $field_id = 'margin' ) {
			$html = $this->sub_field( array(
				'type'        => 'text',
				'id'          => $field_id . '-top',
				'only_field'  => true,
				'placeholder' => '-',
				'class'       => sprintf( 'wpo-css-builder-field-%1$s-top wpo-css-builder-field-top wpo-%1$s', $field_id ),
			), $this->value( $field_id . '-top' ), $this->name() );

			$html .= $this->sub_field( array(
				'type'        => 'text',
				'id'          => $field_id . '-right',
				'only_field'  => true,
				'placeholder' => '-',
				'class'       => sprintf( 'wpo-css-builder-field-%1$s-right wpo-css-builder-field-right wpo-%1$s', $field_id ),
			), $this->value( $field_id . '-right' ), $this->name() );

			$html .= $this->sub_field( array(
				'type'        => 'text',
				'id'          => $field_id . '-bottom',
				'only_field'  => true,
				'placeholder' => '-',
				'class'       => sprintf( 'wpo-css-builder-field-%1$s-bottom wpo-css-builder-field-bottom wpo-%1$s', $field_id ),
			), $this->value( $field_id . '-bottom' ), $this->name() );

			$html .= $this->sub_field( array(
				'type'        => 'text',
				'id'          => $field_id . '-left',
				'only_field'  => true,
				'placeholder' => '-',
				'class'       => sprintf( 'wpo-css-builder-field-%1$s-left wpo-css-builder-field-left wpo-%1$s', $field_id ),
			), $this->value( $field_id . '-left' ), $this->name() );
			return $html;
		}

		/**
		 * Generates Border Radius Fields.
		 *
		 * @param string $field_id
		 *
		 * @return mixed|string
		 */
		public function css_border_radius_fields( $field_id = 'border' ) {
			$html = $this->sub_field( array(
				'type'        => 'text',
				'id'          => $field_id . '-top-left-radius',
				'only_field'  => true,
				'placeholder' => '-',
				'class'       => 'wpo-css-builder-field-border-top-left-radius wpo-css-builder-field-top-left wpo-border-radius',
			), $this->value( $field_id . '-top-left-radius' ), $this->name() );

			$html .= $this->sub_field( array(
				'type'        => 'text',
				'id'          => $field_id . '-top-right-radius',
				'only_field'  => true,
				'placeholder' => '-',
				'class'       => 'wpo-css-builder-field-border-top-right-radius wpo-css-builder-field-top-right wpo-border-radius',
			), $this->value( $field_id . '-top-right-radius' ), $this->name() );

			$html .= $this->sub_field( array(
				'type'        => 'text',
				'id'          => $field_id . '-bottom-right-radius',
				'only_field'  => true,
				'placeholder' => '-',
				'class'       => 'wpo-css-builder-field-border-bottom-right-radius wpo-css-builder-field-bottom-right wpo-border-radius',
			), $this->value( $field_id . '-bottom-right-radius' ), $this->name() );

			$html .= $this->sub_field( array(
				'type'        => 'text',
				'id'          => $field_id . '-bottom-left-radius',
				'only_field'  => true,
				'placeholder' => '-',
				'class'       => 'wpo-css-builder-field-border-bottom-left-radius wpo-css-builder-field-bottom-left wpo-border-radius',
			), $this->value( $field_id . '-bottom-left-radius' ), $this->name() );
			return $html;
		}

		protected function right_side_fields() {
			$html = '<div class="row">';

			/**
			 * Border Color
			 */
			if ( false !== $this->data( 'border-color' ) ) {
				$args = $this->handle_args( 'title', $this->data( 'border-color' ), array(
					'title'    => __( 'Border Color', 'wponion' ),
					'settings' => array( 'theme' => 'nano' ),
				), array(
					'type' => 'color_picker',
					'id'   => 'border-color',
				) );
				$html .= $this->sub_field( $args, $this->value( 'border-color' ), $this->name() );
			}

			/**
			 * Background Color
			 */
			if ( false !== $this->data( 'background-color' ) ) {
				$args = $this->handle_args( 'title', $this->data( 'background-color' ), array(
					'title'    => __( 'Border Color', 'wponion' ),
					'settings' => array( 'theme' => 'nano' ),
				), array(
					'type' => 'color_picker',
					'id'   => 'background-color',
				) );
				$html .= $this->sub_field( $args, $this->value( 'background-color' ), $this->name() );
			}

			/**
			 * Border Style
			 */
			if ( false !== $this->data( 'border-style' ) ) {
				$args = $this->handle_args( 'title', $this->data( 'border-style' ), array(
					'title'                 => __( 'Border Style', 'wponion' ),
					'type'                  => 'select',
					'style'                 => 'width:250px;',
					$this->select_framework => $this->data( $this->select_framework ),
					'options'               => array(
						''        => __( 'Theme Defaults', 'wponion' ),
						'solid'   => __( 'Solid', 'wponion' ),
						'dotted'  => __( 'Dotted', 'wponion' ),
						'dashed'  => __( 'Dashed', 'wponion' ),
						'none'    => __( 'None', 'wponion' ),
						'hidden'  => __( 'Hidden', 'wponion' ),
						'double'  => __( 'Double', 'wponion' ),
						'groove'  => __( 'Groove', 'wponion' ),
						'ridge'   => __( 'Ridge', 'wponion' ),
						'inset'   => __( 'Inset', 'wponion' ),
						'outset'  => __( 'Outset', 'wponion' ),
						'initial' => __( 'Initial', 'wponion' ),
						'inherit' => __( 'Inherit', 'wponion' ),
					),
				), array( 'id' => 'border-style' ) );
				$html .= $this->sub_field( $args, $this->value( 'border-style' ), $this->name() );
			}

			/**
			 * Background Image
			 */
			if ( false !== $this->data( 'background-image' ) ) {
				$args = $this->handle_args( 'title', $this->data( 'background-image' ), array(
					'title' => __( 'Background Image', 'wponion' ),
					'type'  => 'image',
				), array( 'id' => 'background-image' ) );
				$html .= $this->sub_field( $args, $this->value( 'background-image' ), $this->name() );
			}

			/**
			 * Background Style
			 */
			if ( false !== $this->data( 'background-style' ) ) {
				$args = $this->handle_args( 'title', $this->data( 'background-style' ), array(
					'title'                 => __( 'Background Style', 'wponion' ),
					'type'                  => 'select',
					'style'                 => 'width:250px;',
					$this->select_framework => $this->data( $this->select_framework ),
					'options'               => array(
						''          => __( 'Theme Defaults', 'wponion' ),
						'cover'     => __( 'Cover', 'wponion' ),
						'contain'   => __( 'Contain', 'wponion' ),
						'no-repeat' => __( 'No Repeat', 'wponion' ),
						'repeat'    => __( 'Repeat', 'wponion' ),
					),
				), array( 'id' => 'background-style' ) );
				$html .= $this->sub_field( $args, $this->value( 'background-style' ), $this->name() );
			}

			if ( false !== $this->data( 'box-controls' ) ) {
				$args = $this->handle_args( 'title', $this->data( 'box-controls' ), array(
					'title'   => __( 'Box Controls', 'wponion' ),
					'label'   => __( 'Simplify controls', 'wponion' ),
					'type'    => 'switcher',
					'name'    => '/',
					'wrap_id' => 'box-controls',
				) );
				$html .= $this->sub_field( $args, false, false );
			}

			return $html . '</div>';
		}

		/**
		 * Checks & Updat fields args based on field config.
		 *
		 * @param array $data
		 *
		 * @return array
		 */
		protected function handle_field_args( $data = array() ) {
			$this->select_framework = wponion_validate_select_framework( $data );
			return $data;
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
				'background-color' => __( 'Background Color', 'wponion' ),
				'border-style'     => __( 'Border Style', 'wponion' ),
				'border-color'     => __( 'Border Color', 'wponion' ),
				'background-image' => __( 'Background Image', 'wponion' ),
				'background-style' => __( 'Background Style', 'wponion' ),
				'box-controls'     => __( 'Box Controls', 'wponion' ),
			);
		}
	}
}
