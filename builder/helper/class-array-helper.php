<?php

namespace WPO\Helper;

defined( 'ABSPATH' ) || exit;

use ArrayAccess;
use Iterator;
use WPOnion\Traits\Array_Access;
use WPOnion\Traits\Array_Iterator;
use WPOnion\Traits\Array_Position;

if ( ! class_exists( 'WPO\Helper\Array_Helper' ) ) {
	/**
	 * Class Array_Helper
	 *
	 * @package WPO\Helper
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Array_Helper extends Base implements ArrayAccess, Iterator {
		use Array_Position;
		use Array_Iterator;
		use Array_Access;
	}
}
