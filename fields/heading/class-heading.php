<?php

namespace WPOnion\Field;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Field\Heading' ) ) {
	/**
	 * Class Heading
	 *
	 * @package WPOnion\Field
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Heading extends \WPOnion\Field {
		/**
		 * Final HTML Output
		 */
		public function output() {
			echo $this->before();
			echo $this->data( 'content' );
			echo $this->after();
		}

		/**
		 * Loads the required plugins assets.
		 *
		 * @return mixed|void
		 */
		public function field_assets() {
			// TODO: Implement field_assets() method.
		}

		/**
		 * Returns all fields default.
		 *
		 * @return array|mixed
		 */
		protected function field_default() {
			return array( 'content' => false );
		}
	}
}
