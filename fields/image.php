<?php
/**
 *
 * Initial version created 23-05-2018 / 04:13 PM
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @package
 * @link
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( 'WPOnion_Field_image' ) ) {
	class WPOnion_Field_image extends WPOnion_Field {
		protected function output() {
			echo $this->before();
			$add_show     = ( ! empty( $this->value() ) ) ? 'style="display:none;"' : false;
			$preview_show = ( empty( $this->value() ) ) ? 'style="display:none;"' : false;

			echo '<input type="hidden" id="image_id" name="' . $this->name() . '"/>';
			echo '<div class="wponion-image-preview">';

			echo '<div class="wponion-preview-add" ' . $add_show . '>';
			echo wponion_icon( 'fas fa-plus wponion-add' );
			echo '</div>';

			$this->show_image( $this->value(), $preview_show );
			echo '</div>';
			echo $this->after();
		}

		protected function show_image( $value = '', $preview_show = '' ) {
			echo '<div class="wponion-preview" ' . $preview_show . '>';
			echo wponion_icon( 'fas fa-times wponion-remove' );
			$thumbnail = wp_get_attachment_image_src( $value, 'thumbnail' );
			$fullsize  = wp_get_attachment_image_src( $value, 'full' );
			$thumbnail = isset( $thumbnail[0] ) ? $thumbnail[0] : false;
			$fullsize  = isset( $fullsize[0] ) ? $fullsize[0] : false;
			echo '<img src="' . $thumbnail . '" data-fullsize="' . $fullsize . '" class="hidden"/>';
			echo '</div>';
		}

		protected function field_default() {
			return array();
		}

		public function field_assets() {
			wp_enqueue_media();
		}
	}
}