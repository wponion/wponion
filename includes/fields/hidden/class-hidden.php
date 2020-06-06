<?php

namespace WPOnion\Field;

use WPOnion\Field;

defined( 'ABSPATH' ) || exit;

/**
 * Class Hidden
 *
 * @package WPOnion\Field
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Hidden extends Field {
	/**
	 * Checks & Updat fields args based on field config.
	 */
	protected function handle_arguments() {
		$this->set_option( 'only_field', true );
	}

	/**
	 * Generates Final HTML Output.
	 *
	 * @return mixed|void
	 */
	protected function output() {
		if ( ! empty( $this->option( 'fields' ) ) ) {
			foreach ( $this->option( 'fields' ) as $field ) {
				$field['type'] = 'hidden';
				$this->html( $this->sub_field( $field, wponion_get_field_value( $field, $this->value() ), $this->name() ) );
			}
		} else {
			$attr = $this->attributes( array(
				'type'              => 'hidden',
				'class'             => $this->element_class(),
				'value'             => $this->value(),
				'name'              => $this->name(),
				'data-wponion-jsid' => $this->js_field_id(),
			) );
			$this->html( '<input ' . $attr . '/>' );
		}
		return $this->html( true );
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
		return array( 'fields' => array() );
	}
}
