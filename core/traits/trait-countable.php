<?php

namespace WPOnion\Traits;

defined( 'ABSPATH' ) || exit;

if ( ! trait_exists( '\WPOnion\Traits\Countable' ) ) {
	/**
	 * Trait Countable
	 *
	 * @package WPOnion\Traits
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
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
