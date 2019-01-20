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

if ( ! trait_exists( '\WPO\Helper\Field\Functions' ) ) {
	trait Functions {
		/**
		 * Checks If Current Instance Has Fields.
		 *
		 * @return bool
		 */
		public function has_fields() {
			return ( false !== $this->fields && wponion_is_array( $this->fields ) );
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
					if ( $field->id() === $field_id ) {
						return $field;
					}
				}
			}
			return false;
		}

		/**
		 * @param string|\WPO\Field $field_type_or_instance
		 * @param string            $field_id
		 * @param bool              $title
		 * @param array             $args
		 *
		 * @return $this|bool|mixed|\WPO\Field
		 * @throws \Exception
		 */
		public function field( $field_type_or_instance, $field_id = '', $title = false, $args = array() ) {
			if ( $this->has_containers() ) {
				throw new \Exception( 'A Container Cannot Have Both Field & Containers' );
			}

			if ( $field_type_or_instance instanceof \WPO\Field ) {
				$this->fields[] = $field_type_or_instance;
				return $this;
			}

			$return = false;

			if ( is_string( $field_type_or_instance ) && false === $field_id && false === $title ) {
				$return = $this->field_exists( $field_type_or_instance );
			}

			if ( false === $return ) {
				$return = \WPO\Field::create( $field_type_or_instance, $field_id, $title, $args );
				if ( $return ) {
					$this->fields[] = $return;
				} else {
					$return = false;
				}
			}
			return $return;
		}

	}
}
