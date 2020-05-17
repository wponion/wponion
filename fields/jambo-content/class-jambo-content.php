<?php

namespace WPOnion\Field;

defined( 'ABSPATH' ) || exit;

if ( ! class_exists( '\WPOnion\Field\Jambo_Content' ) ) {
	/**
	 * Class jambo_content
	 *
	 * @package WPOnion\Field
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 */
	class Jambo_Content extends Heading {

		/**
		 * Generates Final HTML Output.
		 */
		protected function output() {
			echo $this->before();
			echo '<div class="wpo-jumbotron">' . $this->option( 'content' ) . '</div>';
			echo $this->after();
		}
	}
}
