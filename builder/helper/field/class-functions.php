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
		 * @return array
		 */
		public function fields() {
			return ( $this->has_fields() ) ? $this->fields : array();
		}

		/**
		 * Checks If Field Exists.
		 *
		 * @param $field_id
		 *
		 * @return bool|mixed
		 */
		public function field_exists( $field_id ) {
			if ( $this->has_fields() ) {
				/* @var $field \WPO\Field */
				foreach ( $this->fields() as $field ) {
					if ( $field->get_id() === $field_id ) {
						return $field;
					}
				}
			}
			return false;
		}

		/**
		 * @param        $field_type_or_instance
		 * @param string $field_id
		 * @param bool   $title
		 * @param array  $args
		 *
		 * @return bool|false|\WPO\Field
		 */
		public function field( $field_type_or_instance, $field_id = '', $title = false, $args = array() ) {
			if ( $this->has_fields() && $this->has_containers() ) {
				wp_die( 'A Container Cannot Have Both Field & Containers', 'wponion' );
			}

			if ( $field_type_or_instance instanceof Field ) {
				$this->fields[] = $field_type_or_instance;
				return $field_type_or_instance;
			}

			$return = false;

			if ( is_string( $field_type_or_instance ) && false === $field_id && false === $title ) {
				$return = $this->field_exists( $field_type_or_instance );
			}

			if ( false === $return ) {
				$return = Field::create( $field_type_or_instance, $field_id, $title, $args );
				if ( $return ) {
					$this->fields[] = $return;
				} else {
					$return = false;
				}
			}
			return $return;
		}

		/**
		 * @param null       $before_field_id
		 * @param \WPO\Field $new_field
		 *
		 * @return bool
		 */
		public function field_before( $before_field_id, $new_field ) {
			if ( $this->has_fields() ) {
				$new_fields = array();
				/* @var $field \WPO\Field */
				foreach ( $this->fields() as $field ) {
					if ( $field->get_id() === $before_field_id ) {
						$new_fields[] = $new_field;
						$new_fields[] = $field;
					} elseif ( $field->get_id() !== $new_field->get_id() ) {
						$new_fields[] = $field;
					}
				}
				$this->fields = $new_fields;
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
				$new_fields = array();
				/* @var $field \WPO\Field */
				foreach ( $this->fields() as $field ) {
					if ( $field->get_id() === $after_field_id ) {
						$new_fields[] = $field;
						$new_fields[] = $new_field;
					} else {
						$new_fields[] = $field;
					}
				}
				$this->fields = $new_fields;
			}
			return false;
		}
	}
}
