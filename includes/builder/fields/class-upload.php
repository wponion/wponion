<?php

namespace WPO\Fields;

use WPO\Field;

defined( 'ABSPATH' ) || exit;

/**
 * Class Upload
 *
 * @package WPO\Fields
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Upload extends Field {
	/**
	 * Upload constructor.
	 *
	 * @param bool  $id
	 * @param bool  $title
	 * @param array $args
	 */
	public function __construct( $id = false, $title = false, $args = array() ) {
		parent::__construct( 'upload', $id, $title, $args );
	}

	/**
	 * @param $args
	 *
	 * @return $this
	 */
	public function settings( $args ) {
		$this->_set_array_handler( 'settings', $args, true );
		return $this;
	}

	/**
	 * @param string $library
	 *
	 * @return $this
	 */
	public function library( $library = 'all' ) {
		return $this->settings( array( 'upload_type' => $library ) );
	}

	/**
	 * @param string $frame_title
	 *
	 * @return \WPO\Fields\Upload
	 */
	public function frame_title( $frame_title = 'Upload' ) {
		return $this->settings( array( 'frame_title' => $frame_title ) );
	}

	/**
	 * @param string $insert_title
	 *
	 * @return \WPO\Fields\Upload
	 */
	public function insert_title( $insert_title = 'Insert' ) {
		return $this->settings( array( 'insert_title' => $insert_title ) );
	}

	/**
	 * @param string|mixed $button
	 *
	 * @return $this
	 */
	public function button( $button ) {
		return $this->__set( 'button', $button );
	}
}
