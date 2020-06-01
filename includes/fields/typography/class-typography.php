<?php

namespace WPOnion\Field;

use WPOnion\Field;

defined( 'ABSPATH' ) || exit;

/**
 * Class Typography
 *
 * @package WPOnion\Field
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Typography extends Field {

	/**
	 * Generates Final HTML Output.
	 */
	protected function output() {
		$this->html( '<div id="fontfields" class="wpo-row"><div class="wpo-col-xs-12 wpo-col-sm-10"><div class="wpo-row">' );

		// Font Family.
		if ( false !== $this->option( 'font_family' ) ) {
			$field = $this->handle_args( 'title', $this->option( 'font_family' ), array( 'title' => __( 'Font Family & Weight', 'wponion' ) ), array(
				'id'           => 'font_family',
				'wrap_class'   => 'wpo-col-xs-12 wpo-col-sm-12 wpo-col-md-4',
				'type'         => 'font_picker',
				'horizontal'   => true,
				'empty_option' => true,
				'variant'      => false,
				'attributes'   => array( 'data-css-property' => 'font-family-set' ),
			) );
			$this->html( $this->sub_field( $field, $this->value( 'font_family' ), $this->name() ) );
		}

		// Backup Font Family.
		if ( false !== $this->option( 'backup_font' ) ) {
			$field = $this->handle_args( 'title', $this->option( 'backup_font' ), array( 'title' => __( 'Backup Font Family', 'wponion' ) ), array(
				'id'           => 'backup_font',
				'wrap_class'   => 'wpo-col-xs-12 wpo-col-sm-12 wpo-col-md-3',
				'attributes'   => array( 'data-css-property' => 'backup-font' ),
				'type'         => 'select',
				'empty_option' => true,
				'options'      => wponion_internal_options_data( 'backup_font_family' ),
				'horizontal'   => true,
			) );
			$this->html( $this->sub_field( $field, $this->value( 'backup_font' ), $this->name() ) );
		}

		$this->html( '</div> <div class="wpo-row">' );

		// Font Style
		if ( false !== $this->option( 'font_weight' ) ) {
			$field = $this->handle_args( 'title', $this->option( 'font_weight' ), array(
				'title'   => __( 'Font Weight', 'wponion' ),
				'options' => wponion_internal_options_data( 'font_weight' ),
			), array(
				'id'         => 'font_weight',
				'wrap_class' => 'wpo-col-xs-12 wpo-col-sm-12 wpo-col-md-3',
				'type'       => 'select',
				'attributes' => array( 'data-css-property' => 'font-weight' ),
				'horizontal' => true,
			) );
			$this->html( $this->sub_field( $field, $this->value( 'font_weight' ), $this->name() ) );
		}

		// Font Style
		if ( false !== $this->option( 'font_style' ) ) {
			$field = $this->handle_args( 'title', $this->option( 'font_style' ), array(
				'title'   => __( 'Font Style', 'wponion' ),
				'options' => wponion_internal_options_data( 'font_style' ),
			), array(
				'id'           => 'font_style',
				'wrap_class'   => 'wpo-col-xs-12 wpo-col-sm-12 wpo-col-md-3',
				'type'         => 'select',
				'empty_option' => true,
				'attributes'   => array( 'data-css-property' => 'font-style' ),
				'horizontal'   => true,
			) );
			$this->html( $this->sub_field( $field, $this->value( 'font_style' ), $this->name() ) );
		}

		// Text Align
		if ( false !== $this->option( 'text_align' ) ) {
			$field = $this->handle_args( 'title', $this->option( 'text_align' ), array(
				'title'   => __( 'Text Align', 'wponion' ),
				'options' => wponion_internal_options_data( 'text-align' ),
			), array(
				'id'           => 'text_align',
				'type'         => 'select',
				'empty_option' => true,
				'wrap_class'   => 'wpo-col-xs-12 wpo-col-sm-12 wpo-col-md-3',
				'attributes'   => array( 'data-css-property' => 'text-align' ),
				'horizontal'   => true,
			) );
			$this->html( $this->sub_field( $field, $this->value( 'text_align' ), $this->name() ) );
		}

		// Writing Mode
		if ( false !== $this->option( 'writing_mode' ) ) {
			$field = $this->handle_args( 'title', $this->option( 'writing_mode' ), array(
				'title'   => __( 'Writing Mode', 'wponion' ),
				'options' => wponion_internal_options_data( 'writing_mode' ),
			), array(
				'id'           => 'writing_mode',
				'type'         => 'select',
				'empty_option' => true,
				'attributes'   => array( 'data-css-property' => 'writing-mode' ),
				'wrap_class'   => 'wpo-col-xs-12 wpo-col-sm-12 wpo-col-md-3',
				'horizontal'   => true,
			) );
			$this->html( $this->sub_field( $field, $this->value( 'writing_mode' ), $this->name() ) );
		}

		// Text Orientation
		if ( false !== $this->option( 'text_orientation' ) ) {
			$field = $this->handle_args( 'title', $this->option( 'text_orientation' ), array(
				'title'   => __( 'Text Orientation', 'wponion' ),
				'options' => wponion_internal_options_data( 'text_orientation' ),
			), array(
				'id'           => 'text_orientation',
				'type'         => 'select',
				'attributes'   => array( 'data-css-property' => 'text-orientation' ),
				'horizontal'   => true,
				'empty_option' => true,
				'wrap_class'   => 'wpo-col-xs-12 wpo-col-sm-12 wpo-col-md-3',
			) );
			$this->html( $this->sub_field( $field, $this->value( 'text_orientation' ), $this->name() ) );
		}

		// Text Direction
		if ( false !== $this->option( 'text_direction' ) ) {
			$field = $this->handle_args( 'title', $this->option( 'text_direction' ), array(
				'title'   => __( 'Text Direction', 'wponion' ),
				'options' => wponion_internal_options_data( 'text_direction' ),
			), array(
				'id'           => 'text_direction',
				'type'         => 'select',
				'empty_option' => true,
				'wrap_class'   => 'wpo-col-xs-12 wpo-col-sm-12 wpo-col-md-3',
				'attributes'   => array( 'data-css-property' => 'direction' ),
				'horizontal'   => true,
			) );
			$this->html( $this->sub_field( $field, $this->value( 'text_direction' ), $this->name() ) );
		}

		// Text Transform
		if ( false !== $this->option( 'text_transform' ) ) {
			$field = $this->handle_args( 'title', $this->option( 'text_transform' ), array(
				'title'   => __( 'Text Transform', 'wponion' ),
				'options' => wponion_internal_options_data( 'text_transform' ),
			), array(
				'id'           => 'text_transform',
				'type'         => 'select',
				'empty_option' => true,
				'attributes'   => array( 'data-css-property' => 'text-transform' ),
				'wrap_class'   => 'wpo-col-xs-12 wpo-col-sm-12 wpo-col-md-3',
				'horizontal'   => true,
			) );
			$this->html( $this->sub_field( $field, $this->value( 'text_transform' ), $this->name() ) );
		}

		// Text Decoration Line
		if ( false !== $this->option( 'text_decoration_line' ) ) {
			$field = $this->handle_args( 'title', $this->option( 'text_decoration_line' ), array(
				'title'   => __( 'Text Decoration Line', 'wponion' ),
				'options' => wponion_internal_options_data( 'text_decoration_line' ),
			), array(
				'id'           => 'text_decoration_line',
				'type'         => 'select',
				'empty_option' => true,
				'attributes'   => array( 'data-css-property' => 'text-decoration-line' ),
				'wrap_class'   => 'wpo-col-xs-12 wpo-col-sm-12 wpo-col-md-3',
				'horizontal'   => true,
			) );
			$this->html( $this->sub_field( $field, $this->value( 'text_decoration_line' ), $this->name() ) );
		}

		// Text Decoration Style
		if ( false !== $this->option( 'text_decoration_style' ) ) {
			$field = $this->handle_args( 'title', $this->option( 'text_decoration_style' ), array(
				'title'   => __( 'Text Decoration Style', 'wponion' ),
				'options' => wponion_internal_options_data( 'text_decoration_style' ),
			), array(
				'id'           => 'text_decoration_style',
				'attributes'   => array( 'data-css-property' => 'text-decoration-style' ),
				'type'         => 'select',
				'empty_option' => true,
				'wrap_class'   => 'wpo-col-xs-12 wpo-col-sm-12 wpo-col-md-3',
				'horizontal'   => true,
			) );
			$this->html( $this->sub_field( $field, $this->value( 'text_decoration_style' ), $this->name() ) );
		}

		// Text Decoration Color
		if ( false !== $this->option( 'text_decoration_color' ) ) {
			$field = $this->handle_args( 'title', $this->option( 'text_decoration_color' ), array( 'title' => __( 'Text Decoration Color', 'wponion' ) ), array(
				'id'         => 'text_decoration_color',
				'type'       => 'color_picker',
				'attributes' => array( 'data-css-property' => 'text-decoration-color' ),
				'wrap_class' => 'wpo-col-xs-12 wpo-col-sm-12 wpo-col-md-3',
				'horizontal' => true,
			) );
			$this->html( $this->sub_field( $field, $this->value( 'text_decoration_color' ), $this->name() ) );
		}

		$this->html( '</div> <div class="wpo-row" id="fontsize-and-color">' );

		// Font Size
		if ( false !== $this->option( 'font_size' ) ) {
			$field = $this->handle_args( 'title', $this->option( 'font_size' ), array( 'title' => __( 'Font Size', 'wponion' ) ), array(
				'id'              => 'font_size',
				'wrap_attributes' => array( 'data-css-property' => 'font-size' ),
				'type'            => 'css_unit',
				'wrap_class'      => 'wpo-col-xs-12 wpo-col-sm-12 wpo-col-md-3',
				'horizontal'      => true,
			) );
			$this->html( $this->sub_field( $field, $this->value( 'font_size' ), $this->name() ) );
		}

		// Line Height
		if ( false !== $this->option( 'line_height' ) ) {
			$field = $this->handle_args( 'title', $this->option( 'line_height' ), array( 'title' => __( 'Line Height', 'wponion' ) ), array(
				'id'              => 'line_height',
				'type'            => 'css_unit',
				'wrap_attributes' => array( 'data-css-property' => 'line-height' ),
				'wrap_class'      => 'wpo-col-xs-12 wpo-col-sm-12 wpo-col-md-3',
				'horizontal'      => true,
			) );
			$this->html( $this->sub_field( $field, $this->value( 'line_height' ), $this->name() ) );
		}

		// Letter Spacing
		if ( false !== $this->option( 'letter_spacing' ) ) {
			$field = $this->handle_args( 'title', $this->option( 'letter_spacing' ), array( 'title' => __( 'Letter Spacing', 'wponion' ) ), array(
				'id'              => 'letter_spacing',
				'type'            => 'css_unit',
				'wrap_attributes' => array( 'data-css-property' => 'letter-spacing' ),
				'wrap_class'      => 'wpo-col-xs-12 wpo-col-sm-12 wpo-col-md-3',
				'horizontal'      => true,
			) );
			$this->html( $this->sub_field( $field, $this->value( 'letter_spacing' ), $this->name() ) );
		}

		// Color
		if ( false !== $this->option( 'color' ) ) {
			$field = $this->handle_args( 'title', $this->option( 'color' ), array( 'title' => __( 'Text Color', 'wponion' ) ), array(
				'id'         => 'color',
				'type'       => 'color_picker',
				'attributes' => array( 'data-css-property' => 'color' ),
				'wrap_class' => 'wpo-col-xs-12 wpo-col-sm-12 wpo-col-md-3',
				'horizontal' => true,
			) );
			$this->html( $this->sub_field( $field, $this->value( 'color' ), $this->name() ) );
		}

		$this->html( '</div> </div> </div>' );

		if ( false !== $this->option( 'preview' ) ) {
			$txt   = $this->option( 'preview' );
			$style = $this->generate_preview_css();
			$this->html( "<div class=\"wpo-row previewtxt-wrap\"> <div class=\"wpo-col-xs-12\"><div class=\"previewtxt\" style=\"$style\">$txt</div></div> </div>" );
		}

		return $this->before() . $this->html( true ) . $this->after();
	}

	/**
	 * @return string
	 */
	protected function generate_preview_css() {
		$return = array();
		if ( is_array( $this->value ) && ! empty( $this->value ) ) {
			foreach ( $this->value as $key => $val ) {
				if ( ! empty( $val ) ) {
					$key = str_replace( '_', '-', $key );
					$key = ( 'text-direction' === $key ) ? 'direction' : $key;
					$key = ( 'backup-font' === $key ) ? 'font-family' : $key;

					if ( ! is_array( $val ) ) {
						$return[] = $key . ':' . $val . ';';
					} elseif ( in_array( $key, array( 'font-size', 'line-height', 'letter-spacing' ), true ) ) {
						$return[] = $key . ':' . $val['css_value'] . $val['unit'] . ';';
					}
				}
			}
		}
		return implode( ' ', $return );
	}

	/**
	 * Returns Field's Default Value.
	 *
	 * @return array
	 */
	protected function defaults() {
		return array(
			'preview'               => 'Then came the night of the first falling star.<br />0123456789',
			'font_family'           => __( 'Font Family & Weight', 'wponion' ),
			'backup_font'           => __( 'Backup Font Family', 'wponion' ),
			'text_align'            => __( 'Text align', 'wponion' ),
			'writing_mode'          => __( 'Writing Mode', 'wponion' ),
			'text_orientation'      => __( 'Text Orientation', 'wponion' ),
			'text_direction'        => __( 'Text Direction', 'wponion' ),
			'text_transform'        => __( 'Text Transform', 'wponion' ),
			'text_decoration_line'  => __( 'Text Decoration Line', 'wponion' ),
			'text_decoration_style' => __( 'Text Decoration Style', 'wponion' ),
			'text_decoration_color' => __( 'Text Decoration Color', 'wponion' ),
			'font_weight'           => __( 'Font Weight', 'wponion' ),
			'font_size'             => __( 'Font Size', 'wponion' ),
			'font_style'            => __( 'Font Style', 'wponion' ),
			'line_height'           => __( 'Line Height', 'wponion' ),
			'letter_spacing'        => __( 'Letter Spacing', 'wponion' ),
			'color'                 => __( 'Text Color', 'wponion' ),
		);
	}

	/**
	 * Handles Fields Assets.
	 */
	public function assets() {
	}

}
