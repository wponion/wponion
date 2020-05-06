<?php

namespace WPOnion\Traits;

defined( 'ABSPATH' ) || exit;

if ( ! trait_exists( '\WPOnion\Traits\Array_Access' ) ) {
	/**
	 * Trait Access
	 *
	 * @package WPOnion\Traits
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	trait Array_Access {
		/**
		 * @param mixed $offset
		 *
		 * @return bool
		 */
		public function offsetExists( $offset ) {
			return ( isset( $this->{$this->array_var}[ $offset ] ) );
		}

		/**
		 * @param mixed $offset
		 *
		 * @return mixed
		 */
		public function offsetGet( $offset ) {
			$defaults = $this->defaults();
			if ( $this->offsetExists( $offset ) ) {
				return $this->{$this->array_var}[ $offset ];
			} elseif ( isset( $defaults[ $offset ] ) ) {
				return $defaults[ $offset ];
			}
			return false;
		}

		/**
		 * @param mixed $offset
		 * @param mixed $value
		 */
		public function offsetSet( $offset, $value ) {
			$this->{$this->array_var}[ $offset ] = $value;
		}

		/**
		 * @param mixed $offset
		 */
		public function offsetUnset( $offset ) {
			unset( $this->{$this->array_var}[ $offset ] );
		}
	}
}
