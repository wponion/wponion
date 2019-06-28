<?php

namespace WPOnion\Exception;

use WPOnion\DB_Cache;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Exception\DB_Cache_Not_Found' ) ) {
	/**
	 * Class DB_Cache_Not_Found
	 *
	 * @package WPOnion\Exception
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class DB_Cache_Not_Found extends Cache_Not_Found {

		/**
		 * Set Cache Value.
		 *
		 * @param $values
		 *
		 * @return mixed
		 */
		public function set( $values ) {
			return ( false !== $this->cache_id ) ? DB_Cache::set( $this->cache_id, $values ) : false;
		}
	}
}
