<?php

namespace WPO\Helper\Field;

defined( 'ABSPATH' ) || exit;

use WPO\Field;

/**
 * Class Nested_Base
 *
 * @package WPO\Helper\Field
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Nested_Base extends Field implements \WPO\Helper\Interfaces\Field {

	/**
	 * @param bool $un_array
	 *
	 * @return $this
	 */
	public function un_array( $un_array = false ) {
		return $this->__set( 'un_array', $un_array );
	}

	/**
	 * Check if Fields Exists.
	 *
	 * @return bool
	 */
	public function has_fields() {
		return ( wponion_is_array( $this->fields ) && ! empty( $this->fields ) );
	}

	/**
	 * Returns All Sub Fields.
	 *
	 * @return bool|mixed
	 */
	public function fields() {
		return ( $this->has_fields() ) ? $this->fields : false;
	}

	/**
	 * @param $field_id
	 *
	 * @return false|\WPO\Field
	 */
	public function field_exists( $field_id ) {
		return ( $this->has_fields() && isset( $this[ 'fields/' . $field_id ] ) ) ? $this[ 'fields/' . $field_id ] : false;
	}

	/**
	 * @param       $field_type_or_instance
	 * @param bool  $field_id
	 * @param bool  $title
	 * @param array $args
	 *
	 * @return false|bool|\WPO\Field
	 * @deprecated
	 */
	public function field( $field_type_or_instance, $field_id = false, $title = false, $args = array() ) {
		return $this->add_field( $field_type_or_instance, $field_id, $title, $args );
	}

	/**
	 * @param string|array|\WPO\Field $field_type_or_instance
	 * @param bool|\WPO\Field         $field_id
	 * @param bool                    $title
	 * @param array                   $args
	 *
	 * @return false|bool|\WPO\Field
	 * @since 1.4.6
	 */
	public function add_field( $field_type_or_instance, $field_id = false, $title = false, $args = array() ) {
		if ( ! wponion_is_array( $this->fields ) ) {
			$this->fields = array();
		}

		if ( wpo_is_field( $field_type_or_instance ) ) {
			$this[ 'fields/' . $this->get_field_id( $field_type_or_instance ) ] = $field_type_or_instance;
			return $field_type_or_instance;
		} elseif ( wpo_is_field( $field_id ) ) {
			$this[ 'fields/' . $this->get_field_id( $field_id ) ] = $field_id;
			return $field_id;
		}

		$return = false;

		if ( is_string( $field_type_or_instance ) && false === $field_id && false === $title ) {
			$return = $this->field_exists( $field_type_or_instance );
		}

		if ( false === $return ) {
			$return = Field::create( $field_type_or_instance, $field_id, $title, $args );
			if ( $return ) {
				$this[ 'fields/' . $this->get_field_id( $return ) ] = $return;
			} else {
				$return = false;
			}
		}
		return $return;

	}

	/**
	 * @param \WPO\Field $field_instance
	 *
	 * @return \WPO\Field
	 */
	public function add( $field_instance ) {
		return $this->add_field( $field_instance );
	}

	/**
	 * @param bool $key
	 *
	 * @return array|\WPO\Field|\WPO\Container
	 */
	public function get_field( $key = false ) {
		if ( ! empty( $key ) ) {
			$key  = array_filter( explode( '/', $key ) );
			$_key = array_shift( $key );
			if ( $this->has_fields() ) {
				$field = $this->field_exists( $_key );
				return ( method_exists( $field, 'get_field' ) ) ? $field->get_field( implode( '/', $key ) ) : $field;
			}
		}
		return parent::get_field( $key );
	}
}
