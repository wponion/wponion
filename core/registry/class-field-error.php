<?php
/**
 *
 * Initial version created 14-05-2018 / 06:33 PM
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @package
 * @link
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

namespace WPOnion\Registry;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Registry\Field_Error' ) ) {
	/**
	 * Class Field_Error
	 *
	 * @package WPOnion\Registry
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Field_Error {
		/**
		 * Stores ALL Erros Instance.
		 *
		 * @var array
		 */
		private $errors = array();

		/**
		 * @param string $error_id
		 *
		 * @return bool|string|array
		 */
		public function get( $error_id = 'settings' ) {
			if ( isset( $this->errors[ $error_id ] ) ) {
				return $this->errors[ $error_id ];
			}
			return false;
		}

		/**
		 * Stores an given data to array.
		 *
		 * @param array $errors
		 */
		public function set( $errors = array() ) {
			$this->errors = $errors;
		}
	}
}
