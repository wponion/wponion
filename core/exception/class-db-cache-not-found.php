<?php

namespace WPOnion\Exception;

use WPOnion\DB\Cache;

defined( 'ABSPATH' ) || exit;

if ( ! class_exists( '\WPOnion\Exception\DB_Cache_Not_Found' ) ) {
	/**
	 * Class DB_Cache_Not_Found
	 *
	 * @package WPOnion\Exception
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
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
			return ( false !== $this->id ) ? Cache::set( $this->id, $values ) : false;
		}
	}
}
