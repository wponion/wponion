<?php

namespace WPOnion\Bridge\Field;

defined( 'ABSPATH' ) || exit;

/**
 * Class Value
 *
 * @package WPOnion\Bridge\Field
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
abstract class Value extends Utilites {
	/**
	 * Returns Current Elements Value.
	 *
	 * @param string|bool $key
	 *
	 * @return mixed
	 */
	protected function value( $key = true ) {
		if ( true === $key ) {
			return $this->value;
		}
		return ( ! empty( $key ) && isset( $this->value[ $key ] ) ) ? $this->value[ $key ] : false;
	}
}
