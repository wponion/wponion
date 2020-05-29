<?php

namespace WPOnion\Field;

use WPOnion\Field;

defined( 'ABSPATH' ) || exit;

/**
 * Class Heading
 *
 * @package WPOnion\Field
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Heading extends Field {
	/**
	 * Generates Final HTML Output.
	 *
	 * @return mixed|void
	 */
	protected function output() {
		echo $this->before();
		echo $this->option( 'content' );
		echo $this->after();
	}

	/**
	 * Handles Fields Assets.
	 */
	public function assets() {
	}

	/**
	 * Returns Field's Default Value.
	 *
	 * @return array
	 */
	protected function defaults() {
		return array( 'content' => false );
	}
}
