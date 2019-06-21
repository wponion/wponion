<?php

namespace WPO\Fields;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

use WPO\Field;
use WPO\Helper\Field\Types;

if ( ! class_exists( 'WPO\Fields\Nested_Fields' ) ) {
	/**
	 * Class Nested_Fields
	 *
	 * @package WPO\Fields
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Nested_Fields extends Field implements \WPO\Helper\Interfaces\Field {
		use Types;

		/**
		 * @param $heading
		 *
		 * @return $this
		 */
		public function heading( $heading ) {
			return $this->_set( 'heading', $heading );
		}

		/**
		 * @param bool $un_array
		 *
		 * @return $this
		 */
		public function un_array( $un_array = false ) {
			return $this->_set( 'un_array', $un_array );
		}

		/**
		 * Check if Fields Exists.
		 *
		 * @return bool
		 */
		public function has_fields() {
			return ( isset( $this['fields'] ) && wponion_is_array( $this['fields'] ) && ! empty( $this['fields'] ) );
		}

		/**
		 * Returns All Sub Fields.
		 *
		 * @return bool|mixed
		 */
		public function fields() {
			return ( $this->has_fields() ) ? $this['fields'] : false;
		}

		/**
		 * @param $field_id
		 *
		 * @return false|\WPO\Field
		 */
		public function field_exists( $field_id ) {
			if ( $this->has_fields() ) {
				return ( isset( $this['fields'][ $field_id ] ) ) ? $this['fields'][ $field_id ] : false;
			}
			return false;
		}

		/**
		 * @param string|\WPO\Field $field_type_or_instance
		 * @param bool|\WPO\Field   $field_id
		 * @param bool              $title
		 * @param array             $args
		 *
		 * @return false|bool|\WPO\Field
		 */
		public function field( $field_type_or_instance, $field_id = false, $title = false, $args = array() ) {
			if ( ! wponion_is_array( $this['fields'] ) ) {
				$this['fields'] = array();
			}

			if ( wpo_is_field( $field_type_or_instance ) ) {
				$this['fields'][ $this->get_field_id( $field_type_or_instance ) ] = $field_type_or_instance;
				return $field_type_or_instance;
			} elseif ( wpo_is_field( $field_id ) ) {
				$this['fields'][ $this->get_field_id( $field_id ) ] = $field_id;
				return $field_id;
			}

			$return = false;

			if ( is_string( $field_type_or_instance ) && false === $field_id && false === $title ) {
				$return = $this->field_exists( $field_type_or_instance );
			}

			if ( false === $return ) {
				$return = Field::create( $field_type_or_instance, $field_id, $title, $args );
				if ( $return ) {
					$this['fields'][ $this->get_field_id( $return ) ] = $return;
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
			return $this->field( $field_instance );
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

				if ( method_exists( $this, 'has_containers' ) && $this->has_containers() ) {
					$field = $this->container_exists( $_key );
					return ( method_exists( $field, 'get' ) ) ? $field->get( implode( '/', $key ) ) : $field;
				}
			}

			return parent::get_field( $key );
		}
	}
}
