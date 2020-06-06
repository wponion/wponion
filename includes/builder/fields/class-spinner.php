<?php

namespace WPO\Fields;

defined( 'ABSPATH' ) || exit;

/**
 * Class Spinner
 *
 * @package WPO\Fields
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Spinner extends Text {
	/**
	 * Spinner constructor.
	 *
	 * @param bool  $id
	 * @param bool  $title
	 * @param array $args
	 */
	public function __construct( $id = false, $title = false, $args = array() ) {
		parent::__construct( $id, $title, $args );
		$this->__set( 'type', 'spinner' );
	}

	/**
	 * @param int $min
	 *
	 * @return $this
	 */
	public function min( $min = 0 ) {
		return $this->__set( 'min', $min );
	}

	/**
	 * @param int $max
	 *
	 * @return $this
	 */
	public function max( $max = 100 ) {
		return $this->__set( 'max', $max );

	}

	/**
	 * @param int $step
	 *
	 * @return $this
	 */
	public function step( $step = 1 ) {
		return $this->__set( 'step', $step );
	}

	/**
	 * @param array $args
	 *
	 * @return $this
	 */
	public function spinner( $args = array() ) {
		return $this->__set( 'spinner', $args );
	}
}
