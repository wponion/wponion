<?php

namespace WPOnion\Field;

use WPOnion\Field;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Field\Typography' ) ) {
	/**
	 * Class WPOnion_Field_heading
	 *
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Typography extends Field {
		protected function output() {
			echo $this->before();

			echo '<div id="fontfields" class="row"><div class="col-xs-12 col-sm-8">';

			echo '<div class="row">';

			// Font Family.
			if ( false !== $this->data( 'font_family' ) ) {
				$field = $this->handle_args( 'title', $this->data( 'font_family' ), array( 'title' => __( 'Font Family & Weight' ) ), array(
					'id'         => 'font_family',
					'wrap_class' => 'col-xs-12 col-sm-12 col-md-6',
					'type'       => 'font_picker',
					'horizontal' => true,
				) );
				echo $this->sub_field( $field, $this->value( 'font_family' ), $this->name() );
			}

			// Backup Font Family.
			if ( false !== $this->data( 'backup_font' ) ) {
				$field = $this->handle_args( 'title', $this->data( 'backup_font' ), array( 'title' => __( 'Backup Font Family' ) ), array(
					'id'         => 'backup_font',
					'wrap_class' => 'col-xs-12 col-sm-12 col-md-3',
					'type'       => 'select',
					'options'    => wponion_internal_options_data( 'backup_font_family' ),
					'horizontal' => true,
				) );
				echo $this->sub_field( $field, $this->value( 'backup_font' ), $this->name() );
			}

			//echo '</div>';
			//echo '<div class="row">';

			// Font Style
			if ( false !== $this->data( 'font_style' ) ) {
				$field = $this->handle_args( 'title', $this->data( 'font_style' ), array(
					'title'   => __( 'Font Style' ),
					'options' => wponion_internal_options_data( 'font_style' ),
				), array(
					'id'         => 'font_style',
					'wrap_class' => 'col-xs-12 col-sm-12 col-md-3',
					'type'       => 'select',
					'horizontal' => true,
				) );
				echo $this->sub_field( $field, $this->value( 'font_style' ), $this->name() );
			}

			// Text Align
			if ( false !== $this->data( 'text_align' ) ) {
				$field = $this->handle_args( 'title', $this->data( 'text_align' ), array(
					'title'   => __( 'Text Align' ),
					'options' => wponion_internal_options_data( 'text-align' ),
				), array(
					'id'         => 'text_align',
					'type'       => 'select',
					'wrap_class' => 'col-xs-12 col-sm-12 col-md-3',
					'horizontal' => true,
				) );
				echo $this->sub_field( $field, $this->value( 'text_align' ), $this->name() );
			}

			// Writing Mode
			if ( false !== $this->data( 'writing_mode' ) ) {
				$field = $this->handle_args( 'title', $this->data( 'writing_mode' ), array(
					'title'   => __( 'Writing Mode' ),
					'options' => wponion_internal_options_data( 'writing_mode' ),
				), array(
					'id'         => 'writing_mode',
					'type'       => 'select',
					'wrap_class' => 'col-xs-12 col-sm-12 col-md-3',
					'horizontal' => true,
				) );
				echo $this->sub_field( $field, $this->value( 'writing_mode' ), $this->name() );
			}

			// Text Orientation
			if ( false !== $this->data( 'text_orientation' ) ) {
				$field = $this->handle_args( 'title', $this->data( 'text_orientation' ), array(
					'title'   => __( 'Text Orientation' ),
					'options' => wponion_internal_options_data( 'text_orientation' ),
				), array(
					'id'         => 'text_orientation',
					'type'       => 'select',
					'horizontal' => true,
					'wrap_class' => 'col-xs-12 col-sm-12 col-md-3',
				) );
				echo $this->sub_field( $field, $this->value( 'text_orientation' ), $this->name() );
			}

			//echo '</div>';
			//echo '<div class="row">';

			// Text Direction
			if ( false !== $this->data( 'text_direction' ) ) {
				$field = $this->handle_args( 'title', $this->data( 'text_direction' ), array(
					'title'   => __( 'Text Direction' ),
					'options' => wponion_internal_options_data( 'text_direction' ),
				), array(
					'id'         => 'text_direction',
					'type'       => 'select',
					'wrap_class' => 'col-xs-12 col-sm-12 col-md-3',
					'horizontal' => true,
				) );
				echo $this->sub_field( $field, $this->value( 'text_direction' ), $this->name() );
			}

			// Text Transform
			if ( false !== $this->data( 'text_transform' ) ) {
				$field = $this->handle_args( 'title', $this->data( 'text_transform' ), array(
					'title'   => __( 'Text Transform' ),
					'options' => wponion_internal_options_data( 'text_transform' ),
				), array(
					'id'         => 'text_transform',
					'type'       => 'select',
					'wrap_class' => 'col-xs-12 col-sm-12 col-md-3',
					'horizontal' => true,
				) );
				echo $this->sub_field( $field, $this->value( 'text_transform' ), $this->name() );
			}

			// Text Decoration Line
			if ( false !== $this->data( 'text_decoration_line' ) ) {
				$field = $this->handle_args( 'title', $this->data( 'text_decoration_line' ), array(
					'title'   => __( 'Text Decoration Line' ),
					'options' => wponion_internal_options_data( 'text_decoration_line' ),
				), array(
					'id'         => 'text_decoration_line',
					'type'       => 'select',
					'wrap_class' => 'col-xs-12 col-sm-12 col-md-3',
					'horizontal' => true,
				) );
				echo $this->sub_field( $field, $this->value( 'text_decoration_line' ), $this->name() );
			}

			// Text Decoration Style
			if ( false !== $this->data( 'text_decoration_style' ) ) {
				$field = $this->handle_args( 'title', $this->data( 'text_decoration_style' ), array(
					'title'   => __( 'Text Decoration Style' ),
					'options' => wponion_internal_options_data( 'text_decoration_style' ),
				), array(
					'id'         => 'text_decoration_style',
					'type'       => 'select',
					'wrap_class' => 'col-xs-12 col-sm-12 col-md-3',
					'horizontal' => true,
				) );
				echo $this->sub_field( $field, $this->value( 'text_decoration_style' ), $this->name() );
			}

			// Text Decoration Color
			if ( false !== $this->data( 'text_decoration_color' ) ) {
				$field = $this->handle_args( 'title', $this->data( 'text_decoration_color' ), array( 'title' => __( 'Text Decoration Color' ) ), array(
					'id'         => 'text_decoration_color',
					'type'       => 'color_picker',
					'wrap_class' => 'col-xs-12 col-sm-12 col-md-3',
					'horizontal' => true,
				) );
				echo $this->sub_field( $field, $this->value( 'text_decoration_color' ), $this->name() );
			}

			echo '</div>';
			echo '<div class="row" id="fontsize-and-color">';

			// Font Size
			if ( false !== $this->data( 'font_size' ) ) {
				$field = $this->handle_args( 'title', $this->data( 'font_size' ), array( 'title' => __( 'Font Size' ) ), array(
					'id'         => 'font_size',
					'type'       => 'css_unit',
					'wrap_class' => 'col-xs-12 col-sm-12 col-md-3',
					'horizontal' => true,
				) );
				echo $this->sub_field( $field, $this->value( 'font_size' ), $this->name() );
			}

			// Line Height
			if ( false !== $this->data( 'line_height' ) ) {
				$field = $this->handle_args( 'title', $this->data( 'line_height' ), array( 'title' => __( 'Line Height' ) ), array(
					'id'         => 'line_height',
					'type'       => 'css_unit',
					'wrap_class' => 'col-xs-12 col-sm-12 col-md-3',
					'horizontal' => true,
				) );
				echo $this->sub_field( $field, $this->value( 'line_height' ), $this->name() );
			}

			// Letter Spacing
			if ( false !== $this->data( 'letter_spacing' ) ) {
				$field = $this->handle_args( 'title', $this->data( 'letter_spacing' ), array( 'title' => __( 'Letter Spacing' ) ), array(
					'id'         => 'letter_spacing',
					'type'       => 'css_unit',
					'wrap_class' => 'col-xs-12 col-sm-12 col-md-3',
					'horizontal' => true,
				) );
				echo $this->sub_field( $field, $this->value( 'letter_spacing' ), $this->name() );
			}

			// Color
			if ( false !== $this->data( 'color' ) ) {
				$field = $this->handle_args( 'title', $this->data( 'color' ), array( 'title' => __( 'Text Color' ) ), array(
					'id'         => 'color',
					'type'       => 'color_picker',
					'wrap_class' => 'col-xs-12 col-sm-12 col-md-3',
					'horizontal' => true,
				) );
				echo $this->sub_field( $field, $this->value( 'color' ), $this->name() );
			}
			echo '</div>';
			echo '</div>';
			echo '</div>';

			if ( false !== $this->data( 'preview' ) ) {
				$txt = $this->data( 'preview' );

				echo <<<HTML
<div class="row previewtxt-wrap">
<div class="col-xs-12"><div class="previewtxt">$txt</div></div>
</div>
HTML;

			}

			echo $this->after();
		}

		protected function field_default() {
			return array(
				'preview'               => 'Then came the night of the first falling star.<br />0123456789',
				'font_family'           => __( 'Font Family & Weight', 'wponion' ),
				'backup_font'           => __( 'Backup Font Family', 'wponion' ),
				'text_align'            => __( 'Text align' ),
				'writing_mode'          => __( 'Writing Mode' ),
				'text_orientation'      => __( 'Text Orientation' ),
				'text_direction'        => __( 'Text Direction' ),
				'text_transform'        => __( 'Text Transform' ),
				'text_decoration_line'  => __( 'Text Decoration Line' ),
				'text_decoration_style' => __( 'Text Decoration Style' ),
				'text_decoration_color' => __( 'Text Decoration Color' ),
				'font_size'             => __( 'Font Size' ),
				'font_style'            => __( 'Font Style' ),
				'line_height'           => __( 'Line Height' ),
				'letter_spacing'        => __( 'Letter Spacing' ),
				'color'                 => __( 'Text Color' ),
			);
		}

		public function field_assets() {
		}

	}
}
