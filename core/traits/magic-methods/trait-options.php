<?php

namespace WPOnion\Traits\Magic_Methods;

/**
 * Trait Options Enables Magic Methods For Class_Option Trait.
 *
 * @package WPOnion\Traits\Magic_Methods
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
trait Options {
	/**
	 * @param $name
	 * @param $value
	 */
	public function __set( $name, $value ) {
		$this->set_option( $name, $value );
	}

	/**
	 * @param $name
	 *
	 * @return bool
	 */
	public function __isset( $name ) {
		return $this->has_option( $name );
	}

	/**
	 * @param $name
	 *
	 * @return mixed
	 */
	public function __get( $name ) {
		return $this->option( $name );
	}

	/**
	 * @param $name
	 */
	public function __unset( $name ) {
		$this->remove_option( $name );
	}
}
