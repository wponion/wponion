<?php

namespace WPOnion\Exception;

use Exception;

defined( 'ABSPATH' ) || exit;

/**
 * Class Cache_Not_Found
 *
 * @package WPOnion
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Cache_Not_Found extends Exception {
	/**
	 * Cache ID.
	 *
	 * @var bool
	 */
	protected $id = false;

	/**
	 * Returns Cache ID.
	 *
	 * @return bool
	 */
	public function get_cache_id() {
		return $this->id;
	}

	/**
	 * Stores Cache ID.
	 *
	 * @param bool $cache_id
	 */
	public function set_cache_id( $cache_id = false ) {
		$this->id = $cache_id;
	}

	/**
	 * Set Cache Value.
	 *
	 * @param $values
	 *
	 * @return mixed
	 */
	public function set( $values ) {
		return ( false !== $this->id ) ? wponion_set_cache( $this->id, $values ) : false;
	}
}
