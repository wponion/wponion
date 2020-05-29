<?php
namespace WPO\Fields;

defined( 'ABSPATH' ) || exit;

if ( ! class_exists( 'WPO\Fields\Radio' ) ) {
	/**
	 * Class Radio
	 *
	 * @package WPO\Fields
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 */
	class Radio extends Checkbox_Radio {
		/**
		 * @var string
		 */
		protected $checkbox_type = 'radio';
	}
}
