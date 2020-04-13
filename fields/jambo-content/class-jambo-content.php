<?php

namespace WPOnion\Field;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Field\Jambo_Content' ) ) {
	/**
	 * Class jambo_content
	 *
	 * @package WPOnion\Field
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Jambo_Content extends Heading {

		/**
		 * Generates Final HTML Output.
		 *
		 * @return mixed|void
		 */
		protected function output() {
			echo $this->before();
			echo '<div class="jumbotron">' . $this->data( 'content' ) . '</div>';
			echo $this->after();
		}
	}
}
