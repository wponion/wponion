<?php

namespace WPOnion\Modules\Edits;

defined( 'ABSPATH' ) || exit;

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
			$this->add_action( 'wponion/bulk_edit/save', 'save_data' );
		}
	}
}
