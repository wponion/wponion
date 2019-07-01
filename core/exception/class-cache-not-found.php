<?php

namespace WPOnion\Exception;

if ( ! class_exists( '\WPOnion\Exception\Cache_Not_Found' ) ) {
	/**
	 * Class Cache_Not_Found
	 *
	 * @package WPOnion
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Cache_Not_Found extends \Exception {
		/**
		 * Stores Cache ID.
		 *
		 * @var bool
		 * @access
		 */
		protected $cache_id = false;

		/**
		 * Returns Cache ID.
		 *
		 * @return bool
		 */
		public function get_cache_id() {
			return $this->cache_id;
		}

		/**
		 * Stores Cache ID.
		 *
		 * @param bool $cache_id
		 */
		public function set_cache_id( $cache_id = false ) {
			$this->cache_id = $cache_id;
		}

		/**
		 * Set Cache Value.
		 *
		 * @param $values
		 *
		 * @return mixed
		 */
		public function set( $values ) {
			if ( false !== $this->cache_id ) {
				return wponion_set_cache( $this->cache_id, $values );
			}
			return false;
		}
	}
}
