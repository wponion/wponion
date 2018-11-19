<?php
/**
 *
 * Initial version created 27-05-2018 / 07:25 AM
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @package
 * @link
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

namespace WPOnion\Value;

if ( ! class_exists( '\WPOnion\Value\Checkbox' ) ) {
	class Checkbox extends \WPOnion\Bridge\Value {
		/**
		 * Calls After Basesetup is done.
		 */
		protected function init_class() {
			if ( is_array( $this->value ) ) {
				foreach ( $this->value as $key => $val ) {
					$this->value[ $key ] = new static( $this->field, $val, array(
						'unique'    => $this->unique,
						'plugin_id' => $this->plugin_id(),
						'module'    => $this->module(),
					) );
				}
			}
		}
	}
}
