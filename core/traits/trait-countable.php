<?php

namespace WPOnion\Traits;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! trait_exists( '\WPOnion\Traits\Countable' ) ) {
	/**
	 * Trait Countable
	 *
	 * @package WPOnion\Traits
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	trait Countable {
		/**
		 * @return int
		 * @uses \Countable
		 */
		public function count() {
			return count( $this->get() );
		}
	}
}
