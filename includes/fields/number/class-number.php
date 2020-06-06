<?php

namespace WPOnion\Field;

defined( 'ABSPATH' ) || exit;

/**
 * Class Number
 *
 * @package WPOnion\Field
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Number extends Text {
	/**
	 * Checks & Updat fields args based on field config.
	 */
	protected function handle_arguments() {
		$this->set_option( 'text_type', 'number' );
		$this->set_option( 'type', 'text' );
		parent::handle_arguments();
	}

	/**
	 * Returns Field's Default Value.
	 *
	 * @return array|mixed
	 */
	protected function defaults() {
		return $this->parse_args( array(
			'min'  => null,
			'max'  => null,
			'step' => null,
		), parent::defaults() );
	}
}
