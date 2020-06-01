<?php

namespace WPOnion\Field;

use WPOnion\Field;

defined( 'ABSPATH' ) || exit;

/**
 * Class Fieldset
 *
 * @package WPOnion\Field
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Fieldset extends Field {
	/**
	 * Generates Final HTML Output.
	 */
	protected function output() {
		$fields = $this->option( 'fields' );
		$this->html( ( true !== $this->option( 'only_field' ) ) ? '<div class="wponion-fieldset-wrap wpo-row">' : '' );
		if ( $fields ) {
			$heading = $this->option( 'heading' );
			if ( $heading ) {
				$this->html( $this->sub_field( wpo_field( 'subheading', $heading ), $heading, $this->unique() ) );
			}

			foreach ( $fields as $field ) {
				$this->html( $this->sub_field( $field, wponion_get_field_value( $field, $this->value() ), $this->name(), false ) );
			}
		}

		$this->html( ( true !== $this->option( 'only_field' ) ) ? '</div>' : '' );
		return $this->before() . $this->html( true ) . $this->after();
	}

	/**
	 * Returns Field's Default Value.
	 *
	 * @return array
	 */
	protected function defaults() {
		return array(
			'fields'   => array(),
			'heading'  => null,
			'un_array' => false,
		);
	}

	/**
	 * Handles Fields Assets.
	 */
	public function assets() {
	}
}

