<?php

namespace WPOnion\Field;

use WPOnion\Field;

defined( 'ABSPATH' ) || exit;

/**
 * Class Button
 *
 * @package WPOnion\Field
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Button extends Field {
	/**
	 * Generates Final HTML Output.
	 */
	protected function output() {
		$label = ( false !== $this->has( 'label' ) ) ? $this->option( 'label' ) : $this->value();
		return $this->before() . "<button {$this->attributes()}>${label}</button>" . $this->after();
	}

	/**
	 * Checks & Updat fields args based on field config.
	 */
	protected function handle_arguments() {
		if ( $this->has( 'button_type' ) ) {
			$this->set_option( 'attributes/type', $this->option( 'button_type' ) );
		}
	}

	/**
	 * Returns Field's Default Value.
	 *
	 * @return array
	 */
	protected function defaults() {
		return array(
			'button_type' => 'button',
			'label'       => false,
		);
	}

	/**
	 * Handles Fields Assets.
	 */
	public function assets() {
	}
}
