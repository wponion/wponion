<?php

namespace WPO\Helper\Field;

defined( 'ABSPATH' ) || exit;

/**
 * Class Array_Args
 *
 * @package WPO\Helper\Field
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
abstract class Array_Args extends Helper {
	/**
	 * @param bool $key
	 * @param null $data
	 * @param bool $merge
	 *
	 * @return $this
	 */
	protected function _set_array_handler( $key = false, $data = null, $merge = true ) {
		return $this->__set( $key, wponion_handle_array_merge( $data, $this->__get( $key ), $merge ) );
	}

	/**
	 * Field Sanitize Functions.
	 * It can be either a single function or multiple.
	 * if you want to override all and have only 1 function then add like below
	 * $field->sanitize('yourcallbac',false);
	 *
	 * @param null $sanitize
	 * @param bool $merge
	 *
	 * @return $this
	 */
	public function sanitize( $sanitize = null, $merge = true ) {
		return $this->_set_array_handler( 'sanitize', $sanitize, $merge );
	}

	/**
	 * Field Validate Functions.
	 * It can be either a single function or multiple.
	 * if you want to override all and have only 1 function then add like below
	 * $field->validate('yourcallbac',false);
	 *
	 * @param null $validate
	 * @param bool $merge
	 *
	 * @return $this
	 */
	public function validate( $validate = null, $merge = true ) {
		return $this->_set_array_handler( 'validate', $validate, $merge );
	}

	/**
	 * Adds Field Attributes.
	 *
	 * @param null $attributes
	 * @param bool $merge
	 *
	 * @return $this
	 */
	public function attributes( $attributes = null, $merge = true ) {
		return $this->_set_array_handler( 'attributes', $attributes, $merge );
	}

	/**
	 * Adds A Single Attribute To Field.
	 *
	 * @param null $key
	 * @param null $value
	 *
	 * @return $this
	 */
	public function attribute( $key = null, $value = null ) {
		return $this->attributes( array( $key => $value ) );
	}

	/**
	 * Field Wrap Attribute.
	 *
	 * @param null $attributes
	 * @param bool $merge
	 *
	 * @return $this
	 */
	public function wrap_attributes( $attributes = null, $merge = true ) {
		return $this->_set_array_handler( 'wrap_attributes', $attributes, $merge );
	}

	/**
	 * Adds A Single Attribute To Field.
	 *
	 * @param null $key
	 * @param null $value
	 *
	 * @return $this
	 */
	public function wrap_attribute( $key = null, $value = null ) {
		return $this->wrap_attributes( array( $key => $value ) );
	}

	/**
	 * @param array $options
	 * @param bool  $merge
	 *
	 * @return $this
	 */
	public function options( $options = array(), $merge = true ) {
		if ( is_string( $options ) ) {
			return $this->__set( 'options', $options );
		}
		return $this->_set_array_handler( 'options', $options, $merge );
	}

	/**
	 * @param string $key
	 * @param mixed  $value
	 *
	 * @return $this
	 */
	public function option( $key = null, $value = null ) {
		$value = ( null === $value && null !== $key ) ? $key : $value;
		return $this->options( array( $key => $value ) );
	}
}
