<?php
/**
 *
 * Project : wponion
 * Date : 17-11-2018
 * Time : 06:49 PM
 * File : class-quick-edit-save-handler.php
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @package wponion
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

namespace WPOnion\DB;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\DB\Quick_Edit_Save_Handler' ) ) {
	/**
	 * Class Save_Handler
	 *
	 * @package WPOnion\DB\Settings
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Quick_Edit_Save_Handler extends \WPOnion\DB\Save_Handler {
		/**
		 * Runs custom loop to work with Settings fields array.
		 */
		public function run() {
			$fields = $this->fields->get();
			$this->fields->set( 'fields', $fields );
			$this->field_loop( $this->fields );
			unset( $this->fields['fields'] );
		}
	}
}
