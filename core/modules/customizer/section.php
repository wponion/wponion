<?php

namespace WPOnion\Modules\Customizer;

use WP_Customize_Section;

defined( 'ABSPATH' ) || exit;

/**
 * Class Section
 *
 * @package WPOnion\Modules\Customizer
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Section extends WP_Customize_Section {
	/**
	 * @var string
	 */
	public $type = 'wponion';

}
