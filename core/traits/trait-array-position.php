<?php

namespace WPOnion\Traits;

if ( ! trait_exists( '\WPOnion\Traits\Array_Position' ) ) {
	/**
	 * Trait Serializable
	 *
	 * @package WPOnion\Traits
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	trait Array_Position {
		/**
		 * Store Array Position.
		 *
		 * @var null
		 * @access
		 */
		protected $position = 0;

		/**
		 * Sets Position to 0
		 */
		public function rewind() {
			$this->position = 0;
		}

		/**
		 * Changes To Next Position.
		 */
		public function next() {
			++$this->position;
		}
	}
}
