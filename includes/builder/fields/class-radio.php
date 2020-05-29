<?php
namespace WPO\Fields;

defined( 'ABSPATH' ) || exit;

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
		protected $checkbox_type = 'radio';
	}
}
