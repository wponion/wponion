<?php

namespace WPOnion\Modules\Admin\Edits;

defined( 'ABSPATH' ) || exit;

if ( ! class_exists( '\WPOnion\Modules\Admin\Edits\Bulk' ) ) {
	/**
	 * Class Bulk
	 *
	 * @package WPOnion\Modules\Admin\Edits
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 */
	class Bulk extends Quick {
		/**
		 * module
		 *
		 * @var string
		 */
		protected $module = 'bulk_edit';
	}
}
