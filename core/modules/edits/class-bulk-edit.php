<?php
/**
 *
 * Project : wponion
 * Date : 18-11-2018
 * Time : 06:19 AM
 * File : bulk-edit.php
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @package wponion
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

namespace WPOnion\Modules\Edits;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Modules\Edits\Bulk' ) ) {
	/**
	 * Class Bulk
	 *
	 * @package WPOnion\Modules\Edits
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Bulk extends Quick {
		/**
		 * module
		 *
		 * @var string
		 */
		protected $module = 'bulk_edit';

		public function on_init() {
			$this->add_action( 'bulk_edit_custom_box', 'render_quick_edit' );
			$this->add_action( 'wponion_save_bulk_edit', 'save_data' );
		}
	}
}
