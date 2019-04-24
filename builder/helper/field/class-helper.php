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
		 * @return bool|mixed
		 */
		public function __call( $name, $arguments ) {
			if ( empty( $arguments ) && isset( $this[ $name ] ) ) {
				return $this[ $name ];
			}
			return false;
		}
	}
}
