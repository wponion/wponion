<?php

namespace WPOnion\Field;

defined( 'ABSPATH' ) || exit;

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
		return $this->before() . '<div class="wpo-jumbotron">' . $this->option( 'content' ) . '</div>' . $this->after();
	}
}
