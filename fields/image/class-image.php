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

namespace WPOnion\Field;

use WPOnion\Field;

defined( 'ABSPATH' ) || exit;

if ( ! class_exists( '\WPOnion\Field\Image' ) ) {
	/**
	 * Class Image
	 *
	 * @package WPOnion\Field
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Image extends Field {

		/**
		 * Generates Final HTML Output.
		 *
		 * @return mixed|void
		 */
		protected function output() {
			echo $this->before();
			$add_show     = ( ! empty( $this->value() ) ) ? 'style="display:none;"' : false;
			$preview_show = ( empty( $this->value() ) ) ? 'style="display:none;"' : false;

			echo '<input type="hidden" id="image_id" value="' . $this->value() . '" name="' . $this->name() . '"/>';
			echo '<div class="wponion-image-preview" id="wponion-image-preview-' . $this->js_field_id() . '">';

			echo '<div class="wponion-preview-add" ' . $add_show . '>';
			echo wponion_icon( 'wpoic-plus wponion-add' );
			echo '</div>';

			echo $this->show_image( $this->value(), $preview_show );

			echo '</div>';
			echo $this->style();
			echo $this->after();
		}

		/**
		 * @return string
		 */
		protected function style() {
			return '<style>
#wponion-image-preview' . $this->js_field_id() . ' .wponion-preview,
#wponion-image-preview' . $this->js_field_id() . ' .wponion-preview img {width:' . $this->data( 'size' ) . 'px;}
</style>';
		}

		/**
		 * Renders Value HTML.
		 *
		 * @param string $value
		 * @param string $preview_show
		 *
		 * @return string
		 */
		protected function show_image( $value = '', $preview_show = '' ) {
			$return    = '<div class="wponion-preview" ' . $preview_show . '>';
			$return    .= wponion_tooltip( __( 'Remove', 'wponion' ), array(
				'arrow'       => true,
				'js_field_id' => $this->js_field_id(),
			), wponion_icon( 'wpoic-no wponion-image-remove wponion-help' ) );
			$thumbnail = wp_get_attachment_image_src( $value, 'thumbnail' );
			$fullsize  = wp_get_attachment_image_src( $value, 'full' );
			$thumbnail = isset( $thumbnail[0] ) ? $thumbnail[0] : false;
			$fullsize  = isset( $fullsize[0] ) ? $fullsize[0] : false;
			$return    .= wponion_image_popup( '<img src="' . $thumbnail . '" class="hidden">', $fullsize );
			$return    .= '</div>';
			return $return;
		}

		protected function js_field_args() {
			return array(
				'frame_title' => $this->data( 'frame_title' ),
			);
		}

		/**
		 * Returns Field's Default Value.
		 *
		 * @return array|mixed
		 */
		protected function field_default() {
			return array(
				'frame_title' => __( 'Select A Image', 'wponion' ),
				'remove'      => __( 'Remove', 'wponion' ),
				'size'        => 100,
			);
		}

		/**
		 * Handles Fields Assets.
		 *
		 * @return mixed|void
		 */
		public function field_assets() {
			wp_enqueue_media();
		}
	}
}
