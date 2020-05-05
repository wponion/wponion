<?php

namespace WPOnion\Modules\Customizer;

use WP_Customize_Panel;

defined( 'ABSPATH' ) || exit;

if ( ! class_exists( '\WPOnion\Modules\Customizer\Panel' ) ) {
	/**
	 * Class Panel
	 *
	 * @package WPOnion\Modules\Customizer
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Panel extends WP_Customize_Panel {
		/**
		 * @var string
		 * @access
		 */
		public $type = 'wponion';
	}
}
