<?php
/**
 * Created by PhpStorm.
 * User: varun
 * Date: 04-12-2018
 * Time: 05:05 AM
 */

namespace WPOnion\DB;

use WPOnion\Module_Fields;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\DB\Media_Fields_Save_Handler' ) ) {
	/**
	 * Class Save_Handler
	 *
	 * @package WPOnion\DB\Settings
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Media_Fields_Save_Handler extends Save_Handler {
		/**
		 * Runs custom loop to work with Settings fields array.
		 */
		public function run() {
			$fields = new Module_Fields( array( 'fields' => $this->fields ) );
			$this->field_loop( $fields );
		}
	}
}
