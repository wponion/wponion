<?php

namespace WPO\Helper\Field;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

use WPO\Helper\Array_Helper;

if ( ! class_exists( 'WPO\Helper\Field\Helper' ) ) {
	/**
	 * Class Helper
	 *
	 * @package WPO\Helper\Field
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
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
				$return = &$this->{$this->array_var}[ $offset ];
			} elseif ( isset( $defaults[ $offset ] ) ) {
				$return = $defaults[ $offset ];
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
