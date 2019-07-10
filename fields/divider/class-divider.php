<?php

namespace WPOnion\Field;

use WPOnion\Field;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Field\Divider' ) ) {
	/**
	 * Class Divider
	 *
	 * @package WPOnion\Field
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Divider extends Field {
		/**
		 * Final HTML Output
		 */
		public function output() {
			$text = ( false !== $this->data( 'text' ) ) ? ' data-content="' . $this->data( 'text' ) . '" ' : '';
			echo '<hr class="hr-text" ' . $text . '/>';
		}

		public function field_assets() {
		}

		/**
		 * Final HTML Output;
		 *
		 * @return mixed;
		 */
		protected function field_default() {
			return array( 'text' => false );
		}
	}
}
