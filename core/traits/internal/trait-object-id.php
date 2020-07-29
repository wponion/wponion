<?php

namespace WPOnion\Traits\Internal;

defined( 'ABSPATH' ) || exit;

/**
 * Trait Object_ID
 *
 * @package WPOnion\Traits\Internal
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @since {NEWVERSION}
 */
trait Object_ID {
	/**
	 * unique for database.
	 *
	 * @var string
	 */
	protected $object_id = '';

	/**
	 * Returns Object ID.
	 *
	 * @return string
	 */
	public function object_id() {
		return $this->object_id;
	}

	/**
	 * Sets Object ID.
	 *
	 * @param $object_id
	 *
	 * @return $this
	 */
	protected function set_object_id( $object_id ) {
		$this->object_id = $object_id;
		return $this;
	}
}
