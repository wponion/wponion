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

namespace WPOs\Helper;

if ( ! class_exists( '\WPOnion\Helper\Dimensional_Array' ) ) {
	class Dimensional_Array extends Array_Helper {
		/**
		 * Dimensional_Array constructor.
		 *
		 * @param array $args
		 */
		public function __construct( $args = array() ) {
			unset( $this->module );
			unset( $this->fields );
			unset( $this->unique );
			unset( $this->plugin_id );
			foreach ( $args as $key => $value ) {
				$this[ $key ] = $value;
			}
		}

		/**
		 * @return string
		 */
		public function __toString() {
			if ( ! wponion_is_array( $this->{$this->variable} ) ) {
				return $this->{$this->variable};
			}
			return '';
		}

		/**
		 * @param mixed $offset
		 * @param mixed $value
		 */
		public function offsetSet( $offset, $value ) {
			if ( wponion_is_array( $value ) ) {
				$value = new Dimensional_Array( $value );
			}
			if ( null === $offset ) {
				$this->{$this->variable}[] = $value;
			} else {
				$this->{$this->variable}[ $offset ] = $value;
			}
		}
	}
}
