<?php

namespace WPO\Helper\Field;

defined( 'ABSPATH' ) || exit;

/**
 * Class Nested_Fields
 *
 * @package WPO\Helper\Field
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Nested_Fields extends Nested_Base {
	use Types;

	/**
	 * @param $heading
	 *
	 * @return $this
	 */
	public function heading( $heading ) {
		return $this->__set( 'heading', $heading );
	}
}
