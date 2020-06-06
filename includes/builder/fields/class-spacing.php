<?php

namespace WPO\Fields;

use WPO\Field;

defined( 'ABSPATH' ) || exit;

/**
 * Class Spacing
 *
 * @package WPO\Fields
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Spacing extends Field {
	/**
	 * Spacing constructor.
	 *
	 * @param bool  $id
	 * @param bool  $title
	 * @param array $args
	 */
	public function __construct( $id = false, $title = false, $args = array() ) {
		parent::__construct( 'spacing', $id, $title, $args );
	}

	/**
	 * @param $top
	 *
	 * @return $this
	 */
	public function top( $top ) {
		return $this->__set( 'top', $top );
	}

	/**
	 * @param $bottom
	 *
	 * @return $this
	 */
	public function bottom( $bottom ) {
		return $this->__set( 'bottom', $bottom );
	}

	/**
	 * @param $left
	 *
	 * @return $this
	 */
	public function left( $left ) {
		return $this->__set( 'left', $left );
	}

	/**
	 * @param $right
	 *
	 * @return $this
	 */
	public function right( $right ) {
		return $this->__set( 'right', $right );
	}

	/**
	 * @param bool $all
	 *
	 * @return $this
	 */
	public function all( $all = true ) {
		return $this->__set( 'all', $all );
	}

	/**
	 * @param $unit
	 *
	 * @return $this
	 */
	public function unit( $unit ) {
		return $this->__set( 'unit', $unit );
	}

	/**
	 * Default Options Are :
	 * array(
	 *    'px' => 'px',
	 *    '%'  => '%',
	 *    'em' => 'em',
	 * )
	 *
	 * @param $options
	 *
	 * @return $this
	 */
	public function unit_options( $options ) {
		return $this->__set( 'unit_options', $options );
	}


	/**
	 * Default Icons Are :
	 * array(
	 *    'top'    => '<i class="wpoic-arrow-up"></i>',
	 *    'bottom' => '<i class="wpoic-arrow-down"></i>',
	 *    'left'   => '<i class="wpoic-arrow-left"></i>',
	 *    'right'  => '<i class="wpoic-arrow-right"></i>',
	 *    'all'    => '<i class="wpoic-arrow-all"></i>',
	 * )
	 *
	 * @param $icons
	 *
	 * @return $this
	 */
	public function icons( $icons ) {
		return $this->__set( 'icons', $icons );
	}
}
