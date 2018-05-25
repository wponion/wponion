<?php
/**
 *
 * Initial version created 23-05-2018 / 04:54 PM
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

if ( ! class_exists( '\WPOnion\Field\Gallery' ) ) {
	class gallery extends \WPOnion\Field\image {

		protected function output() {
			echo $this->before();
			$add_show = ( ! empty( $this->value() ) ) ? 'style="display:none;"' : false;

			echo '<input type="hidden" id="image_id" value="' . $this->value() . '" name="' . $this->name() . '"/>';
			echo '<div class="wponion-image-preview">';
			if ( ! empty( $this->value() ) ) {
				$ids = explode( ',', $this->value() );
				if ( ! empty( $ids ) ) {
					foreach ( $ids as $image ) {
						$this->show_image( $image );
					}
				}
			}

			echo '</div>';
			echo '<div class="wponion-gallery-actions">';
			echo $this->button( 'add' );
			echo $this->button( 'edit' );
			echo $this->button( 'clear' );
			echo '</div>';
			echo $this->after();
		}

		protected function button( $type ) {
			$button = array();
			if ( 'add' === $type ) {
				$button = $this->handle_args( 'label', $this->data( 'add_button' ), array(
					'button_type' => 'button',
					'type'        => 'button',
					'label'       => __( 'Add Gallery' ),
					'class'       => 'button button-primary',
				), array(
					'only_field' => true,
					'attributes' => array(
						'data-wponion-gallery-add' => 'yes',
					),
				) );
			} elseif ( 'edit' === $type ) {
				$button = $this->handle_args( 'label', $this->data( 'edit_button' ), array(
					'button_type' => 'button',
					'type'        => 'button',
					'label'       => __( 'Edit Gallery' ),
					'class'       => 'button button-secondary',
				), array(
					'only_field' => true,
					'attributes' => array(
						'data-wponion-gallery-edit' => 'yes',
					),
				) );
			} elseif ( 'clear' === $type ) {
				$button = $this->handle_args( 'label', $this->data( 'clear_button' ), array(
					'button_type' => 'button',
					'type'        => 'button',
					'label'       => __( 'Edit Gallery' ),
					'class'       => 'button button-secondary',
				), array(
					'only_field' => true,
					'attributes' => array(
						'data-wponion-gallery-clear' => 'yes',
					),
				) );
			}

			return $this->sub_field( $button, null, null, false );
		}

		protected function field_default() {
			return array(
				'add_button'   => __( 'Create Gallery' ),
				'edit_button'  => __( 'Edit Gallery' ),
				'clear_button' => __( 'Clear Gallery' ),
			);
		}

		protected function js_field_args() {
			$this->catch_output( 'start' );
			$this->show_image( false, null );
			$html = $this->catch_output( 'stop' );
			return array(
				'html_template' => $html,
			);
		}

		public function field_assets() {
			wp_enqueue_media();
		}
	}
}