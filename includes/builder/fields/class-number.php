<?php

namespace WPO\Fields;

defined( 'ABSPATH' ) || exit;

/**
 * Class Number
 *
 * @package WPO\Fields
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Number extends Text {
	/**
	 * Text constructor.
	 *
	 * @param bool  $id
	 * @param bool  $title
	 * @param array $args
	 */
	public function __construct( $id = false, $title = false, $args = array() ) {
		parent::__construct( $id, $title, $args );
		$this->__set( 'type', 'number' );
	}

	/**
	 * @param $min
	 *
	 * @return $this
	 */
	public function min( $min ) {
		return $this->__set( 'min', $min );
	}

	/**
	 * @param $min
	 *
	 * @return $this
	 */
	public function max( $max ) {
		return $this->__set( 'max', $max );
	}

	/**
	 * @param $min
	 *
	 * @return $this
	 */
	public function step( $step ) {
		return $this->__set( 'step', $step );
	}
}
