<?php

namespace WPOnion\Field;

defined( 'ABSPATH' ) || exit;

/**
 * Class OEmbed
 *
 * @package WPOnion\Field
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class OEmbed extends Text {
	/**
	 * @return string
	 */
	protected function after() {
		$return = '<div class="wponion-oembed-preview" data-wponion-jsid="' . $this->js_field_id() . '"></div>';
		return $return . ' ' . parent::after();
	}

	/**
	 * Checks & Updat fields args based on field config.
	 */
	protected function handle_arguments() {
		parent::handle_arguments();
		$this->set_option( 'text_type', 'text' );
	}

	/**
	 * @return array
	 */
	protected function js_field_args() {
		return array( 'nopreview' => wponion()->url( 'assets/img/no-preview.jpg' ) );
	}

	/**
	 * Returns Field's Default Value.
	 *
	 * @return array
	 */
	protected function defaults() {
		return $this->parse_args( array(
			'oembed_width'  => '500px',
			'oembed_height' => '500px',
		), parent::defaults() );
	}
}
