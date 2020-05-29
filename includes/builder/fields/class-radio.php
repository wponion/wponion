<?php

namespace WPO\Fields;

defined( 'ABSPATH' ) || exit;

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
