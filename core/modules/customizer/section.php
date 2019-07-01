<?php

namespace WPOnion\Modules\Customizer;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Modules\Customizer\Section' ) ) {
	/**
	 * Class Section
	 *
	 * @package WPOnion\Modules\Customizer
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Section extends \WP_Customize_Section {
		/**
		 * @var string
		 * @access
		 */
		public $type = 'wponion';

	}
}
