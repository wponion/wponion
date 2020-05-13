<?php

namespace WPOnion;

use WPOnion\Traits\Class_Options;
use WPOnion\Traits\Hooks;

defined( 'ABSPATH' ) || exit;

if ( ! class_exists( '\WPOnion\Bridge' ) ) {
	/**
	 * Class Bridge
	 *
	 * @package WPOnion
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 */
	abstract class Bridge {
		use Class_Options;
		use Hooks;
	}
}
