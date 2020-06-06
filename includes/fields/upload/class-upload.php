<?php

namespace WPOnion\Field;

use WPOnion\Field;

defined( 'ABSPATH' ) || exit;

/**
 * Class upload
 *
 * @package WPOnion\Field
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Upload extends Field {
	/**
	 * Generates Final HTML Output.
	 *
	 * @return mixed|void
	 */
	protected function output() {
		$this->html( "<input type=\"text\" name=\"{$this->name()}\" value=\"{$this->value()}\"/>" );
		$this->html( $this->sub_field( $this->handle_args( 'label', $this->option( 'button' ), array(
			'type'       => 'button',
			'label'      => __( 'Upload', 'wponion' ),
			'only_field' => true,
			'class'      => 'button button-secondary',
		) ), false, $this->unique() ) );
		return $this->before() . $this->html( true ) . $this->after();
	}

	/**
	 * Returns Field's Default Value.
	 *
	 * @return array
	 */
	protected function defaults() {
		return array(
			'settings' => array(),
			'button'   => __( 'Upload', 'wponion' ),
		);
	}

	/**
	 * @return array
	 */
	protected function js_args() {
		return array(
			'settings' => $this->parse_args( $this->option( 'settings' ), array(
				'upload_type'  => 'image',
				'frame_title'  => __( 'Upload', 'wponion' ),
				'insert_title' => __( 'Use', 'wponion' ),
			) ),
		);
	}

	/**
	 * Handles Fields Assets.
	 */
	public function assets() {
		wp_enqueue_media();
	}
}
