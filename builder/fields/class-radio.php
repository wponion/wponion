<?php
namespace WPO\Fields;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( 'WPO\Fields\Radio' ) ) {
	/**
	 * Class Radio
	 *
	 * @package WPO\Fields
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Radio extends Checkbox_Radio {
		/**
		 * @var string
		 * @access
		 */
		protected $type = 'radio';
	}
}
