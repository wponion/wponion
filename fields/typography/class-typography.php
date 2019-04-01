<?php
/**
 *
 * Initial version created 12-05-2018 / 06:55 PM
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @package
 * @link
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

namespace WPOnion\Field;
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
	class Typography extends \WPOnion\Field {
		protected function output() {
			echo $this->before();

			echo '<div class="wponion-typography-config-panel">';
			echo '<div class="wponion-typography-font_picker">';
			if ( false !== $this->data( 'font_family' ) ) {
				echo $this->sub_field( $this->handle_args( 'wrap_tooltip', $this->data( 'font_family' ), array(
					'horizontal' => true,
				), array(
					'id'   => 'font_family',
					'type' => 'font_picker',
				) ), $this->value( 'font_family' ), $this->unique() );
			}

			if ( false !== $this->data( 'backup_font_family' ) ) {
				echo $this->sub_field( $this->handle_args( 'wrap_tooltip', $this->data( 'backup_font_family' ), array(
					'horizontal' => true,
					'options'    => wponion_backup_fonts(),
				), array(
					'id'         => 'backup_font_family',
					'type'       => 'select',
					'wrap_class' => 'wponion-element-backup-font',
				) ), $this->value( 'backup_font_family' ), $this->unique() );
			}
			echo '</div>';

			echo '<div class="wponion-typography-font_alignments">';
			if ( false !== $this->data( 'element_tag' ) ) {
				echo $this->sub_field( $this->handle_args( 'wrap_tooltip', $this->data( 'element_tag' ), array(
					'horizontal' => true,
					'options'    => array(
						'h1'   => 'h1',
						'h2'   => 'h2',
						'h3'   => 'h3',
						'h4'   => 'h4',
						'h5'   => 'h5',
						'h6'   => 'h6',
						'div'  => 'div',
						'span' => 'span',
						'p'    => 'p',
					),
				), array(
					'id'         => 'element_tag',
					'type'       => 'select',
					'wrap_class' => 'wponion-element-tag',
				) ), $this->value( 'element_tag' ), $this->unique() );
			}

			if ( false !== $this->data( 'text_align' ) ) {
				echo $this->sub_field( $this->handle_args( 'wrap_tooltip', $this->data( 'text_align' ), array(
					'horizontal' => true,
					'options'    => array(
						'left'    => __( 'Left', 'wponion' ),
						'center'  => __( 'Center', 'wponion' ),
						'right'   => __( 'Right', 'wponion' ),
						'justify' => __( 'Justify', 'wponion' ),
					),
				), array(
					'id'         => 'text_align',
					'type'       => 'select',
					'wrap_class' => 'wponion-element-align',
				) ), $this->value( 'text_align' ), $this->unique() );
			}

			if ( false !== $this->data( 'direction' ) ) {
				echo $this->sub_field( $this->handle_args( 'wrap_tooltip', $this->data( 'direction' ), array(
					'horizontal' => true,
					'options'    => array(
						'ltr' => __( 'left to right', 'wponion' ),
						'rtl' => __( 'right to left', 'wponion' ),
					),
				), array(
					'id'         => 'direction',
					'wrap_class' => 'wponion-element-direction',
					'type'       => 'select',
				) ), $this->value( 'direction' ), $this->unique() );
			}

			if ( false !== $this->data( 'font_style' ) ) {
				echo $this->sub_field( $this->handle_args( 'wrap_tooltip', $this->data( 'font_style' ), array(
					'horizontal' => true,
					'options'    => array(
						'normal'  => __( 'normal', 'wponion' ),
						'italic'  => __( 'italic', 'wponion' ),
						'oblique' => __( 'oblique', 'wponion' ),
					),
				), array(
					'id'         => 'font_style',
					'wrap_class' => 'wponion-element-style',
					'type'       => 'select',
				) ), $this->value( 'font_style' ), $this->unique() );
			}
			echo '</div>';

			echo '<div class="wponion-typography-font_sizes">';
			if ( false !== $this->data( 'font_size' ) ) {
				echo $this->sub_field( $this->handle_args( 'wrap_tooltip', $this->data( 'font_size' ), array( 'horizontal' => true ), array(
					'id'         => 'font_size',
					'type'       => 'text',
					'wrap_class' => 'wponion-element-size',
				) ), $this->value( 'font_size' ), $this->unique() );
			}

			if ( false !== $this->data( 'letter_spacing' ) ) {
				echo $this->sub_field( $this->handle_args( 'wrap_tooltip', $this->data( 'letter_spacing' ), array( 'horizontal' => true ), array(
					'id'         => 'letter_spacing',
					'type'       => 'text',
					'wrap_class' => 'wponion-element-letter-spacing',
				) ), $this->value( 'letter_spacing' ), $this->unique() );
			}

			if ( false !== $this->data( 'line_height' ) ) {
				echo $this->sub_field( $this->handle_args( 'wrap_tooltip', $this->data( 'line_height' ), array( 'horizontal' => true ), array(
					'id'         => 'line_height',
					'type'       => 'text',
					'wrap_class' => 'wponion-element-line-height',
				) ), $this->value( 'line_height' ), $this->unique() );
			}
			echo '</div>';

			if ( false !== $this->data( 'color' ) ) {
				echo $this->sub_field( $this->handle_args( 'wrap_tooltip', $this->data( 'color' ), array( 'horizontal' => true ), array(
					'id'         => 'color',
					'type'       => 'color_picker',
					'wrap_class' => 'wponion-element-text-color',
				) ), $this->value( 'color' ), $this->unique() );
			}

			echo '</div>';

			/**
			 * Font Preview
			 */
			if ( false !== $this->data( 'preview' ) ) {
				echo '<div id="preview-' . $this->js_field_id() . '" style="font-family:;" class="wponion-font-preview" contenteditable="true">' . $this->data( 'preview_text' ) . '</div>';
			}

			echo $this->after();
		}

		protected function field_default() {
			return array(
				'font_family'        => __( 'Font Family & Weight', 'wponion' ),
				'backup_font_family' => __( 'Backup Font Family', 'wponion' ),
				'text_align'         => __( 'Text Align', 'wponion' ),
				'direction'          => __( 'Text Direction', 'wponion' ),
				'element_tag'        => __( 'Element Tag', 'wponion' ),
				'font_style'         => __( 'Font Style', 'wponion' ),
				'font_size'          => __( 'Font Size', 'wponion' ),
				'line_height'        => __( 'Line Height', 'wponion' ),
				'letter_spacing'     => __( 'Letter Spacing', 'wponion' ),
				'color'              => __( 'Text Color', 'wponion' ),
				'preview'            => true,
				'preview_text'       => 'Lorem ipsum dolor sit amet, pro ad sanctus admodum, vim at insolens appellantur. Eum veri adipiscing an, probo nonumy an vis.',
			);
		}

		public function field_assets() {
		}

	}
}
