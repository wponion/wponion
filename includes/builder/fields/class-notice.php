<?php

namespace WPO\Fields;

defined( 'ABSPATH' ) || exit;

/**
 * Class Notice
 *
 * @package WPO\Fields
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Notice extends Heading {
	/**
	 * Notice constructor.
	 *
	 * @param bool  $content
	 * @param bool  $id
	 * @param array $args
	 */
	public function __construct( $content = false, $id = false, $args = array() ) {
		parent::__construct( $content, $id, $args );
		$this->__set( 'type', 'notice' );
	}

	/**
	 * @param $notice_type
	 *
	 * @return $this
	 */
	public function notice_type( $notice_type ) {
		return $this->__set( 'notice_type', $notice_type );
	}

	/**
	 * @param $autoclose
	 *
	 * @return $this
	 */
	public function autoclose( $autoclose ) {
		return $this->__set( 'autoclose', $autoclose );
	}

	/**
	 * @param $close
	 *
	 * @return $this
	 */
	public function close( $close ) {
		return $this->__set( 'close', $close );
	}
}
