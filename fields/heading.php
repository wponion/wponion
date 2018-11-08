<?php
/**
 *
 * Initial version created 12-05-2018 / 06:55 PM
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @package
 * @link
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

namespace WPOnion\Field;
if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Field\heading' ) ) {
	/**
	 * Class WPOnion_Field_heading
	 *
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class heading extends \WPOnion\Field {
		/**
		 * Final HTML Output;
		 *
		 * @return mixed;
		 */
		public function output() {
			echo $this->before();
			echo $this->data( 'content' );
			echo $this->after();
		}

		/**
		 * Loads the required plugins assets.
		 *
		 * @return mixed|void
		 */
		public function field_assets() {
			// TODO: Implement field_assets() method.
		}

		/**
		 * Returns all fields default.
		 *
		 * @return array|mixed
		 */
		protected function field_default() {
			return array( 'content' => false );
		}
	}
}
