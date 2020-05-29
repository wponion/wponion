<?php

namespace WPO\Fields;

defined( 'ABSPATH' ) || exit;

/**
 * Class Image_Select
 *
 * @package WPO\Fields
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Image_Select extends Checkbox_Radio {
	/**
	 * @var string
	 */
	protected $checkbox_type = 'image_select';
}
