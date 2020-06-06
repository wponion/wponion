<?php

namespace WPOnion\Field;

use WPOnion\Field;

defined( 'ABSPATH' ) || exit;

/**
 * Class Image
 *
 * @package WPOnion\Field
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Image extends Field {

	/**
	 * Generates Final HTML Output.
	 *
	 * @return mixed|void
	 */
	protected function output() {
		$add_show     = ( ! empty( $this->value() ) ) ? 'style="display:none;"' : false;
		$preview_show = ( empty( $this->value() ) ) ? 'style="display:none;"' : false;

		$this->html( "<input type=\"hidden\" id=\"image_id\" value=\"{$this->value()}\" name=\"{$this->name()}\"/>" )
			->html( "<div class=\"wponion-image-preview\" id=\"wponion-image-preview-{$this->js_field_id()}\">" )
			->html( "<div class=\"wponion-preview-add\" ${add_show}>" )
			->html( wponion_icon( 'wpoic-plus wponion-add' ) )
			->html( '</div>' )
			->html( $this->show_image( $this->value(), $preview_show ) )
			->html( '</div>' )
			->html( $this->style() );
		return $this->before() . $this->html( true ) . $this->after();
	}

	/**
	 * @return string
	 */
	protected function style() {
		return '<style>
#wponion-image-preview' . $this->js_field_id() . ' .wponion-preview,
#wponion-image-preview' . $this->js_field_id() . ' .wponion-preview img {width:' . $this->option( 'size' ) . 'px;}
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
		$return    .= wponion_image_popup( "<img src=\"${thumbnail}\" class=\"hidden\">", $fullsize );
		$return    .= '</div>';
		return $return;
	}

	/**
	 * Returns JS Args.
	 *
	 * @return array
	 */
	protected function js_args() {
		return array( 'frame_title' => $this->option( 'frame_title' ) );
	}

	/**
	 * Returns Field's Default Value.
	 *
	 * @return array|mixed
	 */
	protected function defaults() {
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
	public function assets() {
		wp_enqueue_media();
	}
}
