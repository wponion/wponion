<?php

namespace WPO\Helper\Field;

defined( 'ABSPATH' ) || exit;

use WPO\Field;

/**
 * Trait Functions
 *
 * @package WPO\Helper\Field
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
trait Functions {
	/**
	 * Checks If Current Instance Has Fields.
	 *
	 * @return bool
	 */
	public function has_fields() {
		return ( false !== $this->fields && wponion_is_array( $this->fields ) && ! empty( $this->fields ) );
	}

	/**
	 * Returns All Fields.
	 *
	 * @param bool|string $key
	 *
	 * @return array|\WPO\Field
	 */
	public function fields( $key = false ) {
		if ( ! empty( $key ) && $this->has_fields() ) {
			$key   = array_filter( explode( '/', $key ) );
			$_key  = array_shift( $key );
			$field = $this->field_exists( $_key );
			return ( method_exists( $field, 'get_field' ) ) ? $field->get_field( implode( '/', $key ) ) : $field;
		}
		return ( false === $key || $this->has_fields() ) ? $this->fields : array();
	}

	/**
	 * Checks If Field Exists.
	 *
	 * @param $field_id
	 *
	 * @return bool|array|\WPO\Field
	 */
	public function field_exists( $field_id ) {
		return ( $this->has_fields() && isset( $this->fields[ $field_id ] ) ) ? $this->fields[ $field_id ] : false;
	}

	/**
	 * Removes A Field Which Has Given ID.
	 *
	 * @param $field_id
	 *
	 * @return bool
	 */
	public function remove_field( $field_id ) {
		if ( $this->field_exists( $field_id ) ) {
			unset( $this->fields[ $field_id ] );
			return true;
		}
		return false;
	}

	/**
	 * Its a simple alais for $this->field
	 *
	 * @param array|\WPO\Field $field_type_or_instance
	 * @param string           $field_id
	 * @param string|bool      $title
	 * @param array            $args
	 *
	 * @return array|bool|false|\WPO\Field
	 * @deprecated
	 */
	public function field( $field_type_or_instance, $field_id = '', $title = false, $args = array() ) {
		return $this->add_field( $field_type_or_instance, $field_id, $title, $args );
	}

	/**
	 * Its a simple alais for $this->field
	 *
	 * @param bool|array|\WPO\Field|array $field_type_or_instance
	 * @param string                      $field_id
	 * @param bool                        $title
	 * @param array                       $args
	 *
	 * @return bool|false|\WPO\Field
	 * @since 1.4.6
	 */
	public function add_field( $field_type_or_instance, $field_id = '', $title = false, $args = array() ) {
		if ( $this->has_containers() ) {
			wp_die( 'A Container Cannot Have Both Field & Containers', 'wponion' );
		}

		if ( wpo_is_field( $field_type_or_instance ) ) {
			$this->fields[ $this->get_field_id( $field_type_or_instance ) ] = $field_type_or_instance;
			return $field_type_or_instance;
		}

		$return = false;

		if ( is_string( $field_type_or_instance ) && false === $field_id && false === $title ) {
			$return = $this->field_exists( $field_type_or_instance );
		}

		if ( false === $return ) {
			$return = Field::create( $field_type_or_instance, $field_id, $title, $args );
			if ( $return ) {
				$this->fields[ $this->get_field_id( $return ) ] = $return;
			} else {
				$return = false;
			}
		}
		return $return;
	}

	/**
	 * This Can be used to add multiple fields @ once.
	 *
	 * @param array|\WPO\Builder $fields
	 *
	 * @return $this
	 * @since 1.4.6
	 */
	public function add_fields( $fields ) {
		$fields = ( wpo_is( $fields ) ) ? $fields->fields() : $fields;
		if ( ! empty( $fields ) ) {
			foreach ( $fields as $field_data ) {
				$this->add_field( $field_data );
			}
		}
		return $this;
	}

	/**
	 * @param array|\WPO\Field $field
	 *
	 * @return bool|string
	 */
	protected function get_field_id( $field ) {
		if ( isset( $field['id'] ) && ! empty( $field['id'] ) ) {
			return $field['id'];
		}
		return ( wpo_is_field( $field ) ) ? $field->unique() : false;
	}

	/**
	 * @param null       $before_field_id
	 * @param \WPO\Field $new_field
	 *
	 * @return bool
	 */
	public function field_before( $before_field_id, $new_field ) {
		if ( $this->has_fields() ) {
			$this->fields = \WPOnion\Helper::array_insert_before( $before_field_id, $this->fields, $this->get_field_id( $new_field ), $new_field );
		}
		return false;
	}

	/**
	 * @param null $after_field_id
	 * @param      $new_field
	 *
	 * @return bool
	 */
	public function field_after( $after_field_id, $new_field ) {
		if ( $this->has_fields() ) {
			$this->fields = \WPOnion\Helper::array_insert_after( $after_field_id, $this->fields, $this->get_field_id( $new_field ), $new_field );
		}
		return false;
	}
}
