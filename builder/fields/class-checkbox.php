<?php

namespace WPO\Fields;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( 'WPO\Fields\Checkbox' ) ) {
	/**
	 * Class Checkbox
	 *
	 * @package WPO\Fields
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Checkbox extends Checkbox_Radio {
		/**
		 * @var string
		 * @access
		 */
		protected $type = 'checkbox';
	}
}
