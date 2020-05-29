<?php

namespace WPOnion\Traits;

defined( 'ABSPATH' ) || exit;

/**
 * Trait Serializable
 *
 * @package WPOnion\Traits
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
trait Array_Position {
	/**
	 * Store Array Position.
	 */
	protected $position = 0;

	/**
	 * Sets Position to 0
	 */
	public function rewind() {
		$this->position = 0;
	}

	/**
	 * Changes To Next Position.
	 */
	public function next() {
		++$this->position;
	}
}
