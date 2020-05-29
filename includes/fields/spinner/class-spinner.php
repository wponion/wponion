<?php

namespace WPOnion\Field;
defined( 'ABSPATH' ) || exit;

/**
 * Class Spinner
 *
 * @package WPOnion\Field
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Spinner extends Text {
	/**
	 * Checks & Update fields args based on field config.
	 */
	protected function handle_arguments() {
		$this->set_option( 'text_type', 'text' );
		parent::handle_arguments();
	}

	/**
	 * Handles Fields Assets.
	 */
	public function assets() {
		wp_enqueue_script( 'jquery-ui-spinner' );
	}

	/**
	 * @return array
	 */
	protected function js_args() {
		return $this->parse_args( array(
			'max'     => $this->option( 'max' ),
			'min'     => $this->option( 'min' ),
			'step'    => $this->option( 'step' ),
			'spinner' => ( ! is_array( $this->option( 'spinner' ) ) ) ? array() : $this->option( 'spinner' ),
		), parent::js_args() );
	}

	/**
	 * Returns Field's Default Value.
	 *
	 * @return array
	 */
	protected function defaults() {
		return array(
			'max'     => 100,
			'min'     => 0,
			'step'    => 1,
			'spinner' => array(),
		);
	}
}
