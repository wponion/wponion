<?php

namespace WPOnion\Traits;

defined( 'ABSPATH' ) || exit;

/**
 * Trait Iterator
 *
 * @package WPOnion\Traits
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
trait Array_Iterator {
	/**
	 * @return mixed
	 */
	public function current() {
		$keys = array_keys( $this->{$this->array_var} );
		return $this->{$this->array_var}[ $keys[ $this->position ] ];
	}

	/**
	 * @return mixed
	 */
	public function key() {
		$keys = array_keys( $this->{$this->array_var} );
		return $keys[ $this->position ];
	}

	/**
	 * @return bool
	 */
	public function valid() {
		$keys = array_keys( $this->{$this->array_var} );
		return isset( $keys[ $this->position ] );
	}
}
