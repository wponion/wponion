<?php

namespace WPO\Fields;

defined( 'ABSPATH' ) || exit;

if ( ! class_exists( 'WPO\Fields\Image_Select' ) ) {
	/**
	 * Class Image_Select
	 *
	 * @package WPO\Fields
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Image_Select extends Checkbox_Radio {
		/**
		 * @var string
		 * @access
		 */
		protected $checkbox_type = 'image_select';
	}
}
