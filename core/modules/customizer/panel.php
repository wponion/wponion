<?php

namespace WPOnion\Modules\Customizer;

use WP_Customize_Panel;

defined( 'ABSPATH' ) || exit;

/**
 * Class Panel
 *
 * @package WPOnion\Modules\Customizer
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Panel extends WP_Customize_Panel {
	/**
	 * @var string
	 */
	public $type = 'wponion';
}
