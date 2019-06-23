<?php

namespace WPO\Helper\Field;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

use WPO\Field;

if ( ! class_exists( '\WPO\Helper\Field\Nested_Fields' ) ) {
	/**
	 * Class Nested_Fields
	 *
	 * @package WPO\Helper\Field
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Nested_Fields extends Nested_Base {
		use Types;

		/**
		 * @param $heading
		 *
		 * @return $this
		 */
		public function heading( $heading ) {
			return $this->_set( 'heading', $heading );
		}
	}
}
