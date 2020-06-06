<?php

namespace WPOnion\Traits;

use WPOnion\Helper;

defined( 'ABSPATH' ) || exit;

/**
 * Trait Access
 *
 * @package WPOnion\Traits
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
trait Array_Access {
	/**
	 * @param mixed $offset
	 *
	 * @return bool
	 */
	public function offsetExists( $offset ) {
		return Helper::array_key_isset( $offset, $this->{$this->array_var} );
	}

	/**
	 * @param mixed $offset
	 *
	 * @return mixed
	 */
	public function offsetGet( $offset ) {
		$return   = false;
		$defaults = $this->defaults();
		if ( $this->offsetExists( $offset ) ) {
			$return = Helper::array_key_get( $offset, $this->{$this->array_var} );
		} elseif ( Helper::array_key_isset( $offset, $defaults ) ) {
			$return = Helper::array_key_get( $offset, $defaults );
		}
		return $return;
	}

	/**
	 * @param mixed $offset
	 * @param mixed $value
	 */
	public function offsetSet( $offset, $value ) {
		Helper::array_key_set( $offset, $value, $this->{$this->array_var} );
	}

	/**
	 * @param mixed $offset
	 */
	public function offsetUnset( $offset ) {
		Helper::array_key_unset( $offset, $this->{$this->array_var} );
	}
}
