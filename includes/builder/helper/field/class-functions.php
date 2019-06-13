<?php
/**
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @link
 * @copyright 2019 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

namespace WPO\Helper\Field;

use WPO\Field;

if ( ! trait_exists( '\WPO\Helper\Field\Functions' ) ) {
	/**
	 * Trait Functions
	 *
	 * @package WPO\Helper\Field
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
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
			if ( $this->has_fields() ) {
				if ( false === $key ) {
					return $this->fields;
				}
				$key   = array_filter( explode( '/', $key ) );
				$_key  = array_shift( $key );
				$field = $this->field_exists( $_key );
				return ( method_exists( $field, 'get_field' ) ) ? $field->get_field( implode( '/', $key ) ) : $field;
			}
			return ( $this->has_fields() ) ? $this->fields : array();
		}

		/**
		 * Checks If Field Exists.
		 *
		 * @param $field_id
		 *
		 * @return bool|array|\WPO\Field
		 */
		public function field_exists( $field_id ) {
			if ( $this->has_fields() ) {
				return ( isset( $this->fields[ $field_id ] ) ) ? $this->fields[ $field_id ] : false;
			}
			return false;
		}

		/**
		 * @param bool|\WPO\Field|array $field_type_or_instance
		 * @param string                $field_id
		 * @param bool                  $title
		 * @param array                 $args
		 *
		 * @return bool|false|\WPO\Field
		 */
		public function field( $field_type_or_instance, $field_id = '', $title = false, $args = array() ) {
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
}
