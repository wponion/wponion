<?php
/**
 *
 * Initial version created 30-05-2018 / 06:55 PM
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

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Value\gallery' ) ) {
	/**
	 * Class gallery
	 *
	 * @package WPOnion\Value
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class gallery extends \WPOnion\Bridge\value_loop {

		/**
		 * Calls After its done.
		 */
		protected function init_class() {
			$this->value    = $this->explode( $this->value, ',' );
			$_field         = $this->field;
			$_field['type'] = 'image';
			foreach ( $this->value as $id => $image ) {
				$class = wponion_field_value_class( $_field );
				if ( class_exists( $class ) ) {
					$this->value[ $id ] = new $class( $_field, $image, array(
						'unique'    => $this->unique,
						'plugin_id' => $this->plugin_id(),
						'module'    => $this->module(),
					) );
				}
			}
		}


	}
}