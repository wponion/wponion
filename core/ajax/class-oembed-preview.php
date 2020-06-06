<?php

namespace WPOnion\Ajax;

use WPOnion\Bridge\Ajax;

defined( 'ABSPATH' ) || exit;

/**
 * Class oembed_preview
 *
 * @package WPOnion\Ajax
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class OEmbed_Preview extends Ajax {
	/**
	 * Runs Ajax Request.
	 */
	public function run() {
		/* @var \WP_Embed $wp_embed */
		$field = $this->get_field();
		$args  = array(
			'width'  => ( isset( $field['oembed_width'] ) && ! empty( $field['oembed_width'] ) ) ? $field['oembed_width'] : '500',
			'height' => ( isset( $field['oembed_height'] ) && ! empty( $field['oembed_height'] ) ) ? $field['oembed_height'] : '500',
		);
		$embed = wp_oembed_get( $_REQUEST['value'], $args );

		if ( ! $embed ) {
			global $wp_embed;
			$wp_embed->return_false_on_fail = true;
			$embed                          = $wp_embed->shortcode( $args, $_REQUEST['value'] );
		}
		if ( $embed ) {
			$this->json_success( $embed );
		}
		$this->json_error();
	}
}
