<?php

namespace WPOnion;

use WPOnion\Traits\Class_Options;
use WPOnion\Traits\Hooks;

defined( 'ABSPATH' ) || exit;

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
