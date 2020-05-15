<?php

namespace WPO\Helper\Field;

defined( 'ABSPATH' ) || exit;

use WPO\Helper\Array_Helper;

if ( ! class_exists( 'WPO\Helper\Field\Helper' ) ) {
	/**
	 * Class Helper
	 *
	 * @package WPO\Helper\Field
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 */
	class Helper extends Array_Helper {
		/**
		 * @param mixed $offset
		 *
		 * @return mixed
		 */
		public function &offsetGet( $offset ) {
			$return   = false;
			$defaults = $this->defaults();
			if ( $this->offsetExists( $offset ) ) {
				$return = \WPOnion\Helper::array_key_get( $offset, $this->{$this->array_var} );
			} elseif ( \WPOnion\Helper::array_key_isset( $offset, $defaults ) ) {
				$return = \WPOnion\Helper::array_key_get( $offset, $defaults );
			}
			return $return;
		}

		/**
		 * Checks & Returns Field Args.
		 *
		 * @param $name
		 * @param $arguments
		 *
		 * @return $this|bool|\WPO\Field
		 */
		public function __call( $name, $arguments ) {
			if ( empty( $arguments ) && false !== strpos( strtolower( $name ), 'get_' ) ) {
				$name = str_replace( 'get_', '', $name );
				return $this[ $name ];
			}
			return false;
		}
	}
}
