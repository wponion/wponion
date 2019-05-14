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

namespace WPO\Helper\Interfaces;

if ( ! interface_exists( 'WPO\Helper\Interfaces\Field' ) ) {
	/**
	 * Interface Field
	 *
	 * @package WPO\Helper\Interface
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	interface Field {
		/**
		 * Checks If Field Exists
		 * and if exists then returns the Field instance.
		 *
		 * @param $field_id
		 *
		 * @return bool|array|\WPO\Field
		 */
		public function field_exists( $field_id );

		/**
		 * Checks If Current Instance Has Fields.
		 *
		 * @return bool
		 */
		public function has_fields();

		/**
		 * Returns All Containers.
		 *
		 * @return array
		 */
		public function fields();

		/**
		 * Creates A New Field Instance.
		 * or
		 * save an existing instance to builder
		 * or
		 * return an existing instance.
		 *
		 * @param string|\WPO\Field $field_type_or_instance
		 * @param mixed             $field_id
		 * @param mixed             $title
		 * @param array|bool        $args
		 *
		 * @return bool|\WPO\Field
		 */
		public function field( $field_type_or_instance, $field_id = false, $title = false, $args = array() );
	}
}
