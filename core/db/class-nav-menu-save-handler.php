<?php
/**
 *
 * Project : wponion
 * Date : 24-11-2018
 * Time : 12:36 PM
 * File : class-nav-menu-save-handler.php
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

if ( ! class_exists( '\WPOnion\DB\Nav_Menu_Save_Handler' ) ) {
	/**
	 * Class Save_Handler
	 *
	 * @package WPOnion\DB\Settings
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Nav_Menu_Save_Handler extends Save_Handler {
		/**
		 * Runs custom loop to work with Settings fields array.
		 */
		public function run() {
			$this->field_loop( $this->fields );
		}
	}
}
