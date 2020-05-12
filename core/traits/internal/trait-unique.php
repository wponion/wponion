<?php

namespace WPOnion\Traits\Internal;

defined( 'ABSPATH' ) || exit;

if ( ! trait_exists( '\WPOnion\Traits\Internal\Unique' ) ) {
	/**
	 * Trait Unique
	 *
	 * @package WPOnion\Traits\Internal
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since {NEWVERSION}
	 */
	trait Unique {
		/**
		 * unique for database.
		 *
		 * @var string
		 */
		protected $unique = '';

		/**
		 * Returns DB Slug.
		 *
		 * @return string
		 */
		public function unique() {
			return $this->unique;
		}

		/**
		 * Returns Base Unique.
		 *
		 * @return string
		 */
		protected function base_unique() {
			return ( isset( $this->base_unique ) ) ? $this->base_unique : $this->unique;
		}
	}
}
