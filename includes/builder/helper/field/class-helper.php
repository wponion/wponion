<?php

namespace WPO\Helper\Field;

defined( 'ABSPATH' ) || exit;

use WPO\Helper\Array_Helper;

/**
 * Class Helper
 *
 * @package WPO\Helper\Field
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
abstract class Helper extends Array_Helper {
	/**
	 * Checks & Returns Field Args.
	 *
	 * @param $name
	 * @param $arguments
	 *
	 * @return $this|bool|\WPO\Field
	 */
	public function __call( $name, $arguments ) {
		if ( empty( $arguments ) && false !== strpos( strtolower( $name ), 'get_' ) ) {
			$name = str_replace( 'get_', '', $name );
			return $this->{$name};
		}
		return false;
	}
}
