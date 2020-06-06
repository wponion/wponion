<?php

namespace WPOnion\Field;

use WPOnion\Field;

defined( 'ABSPATH' ) || exit;

/**
 * Class CSS_Unit
 *
 * @package WPOnion\Field
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class CSS_Unit extends Field {

	/**
	 * Generates Final HTML Output.
	 */
	protected function output() {
		$number_field = $this->sub_field( $this->handle_args( 'prefix', $this->option( 'css_value' ), array(), array(
			'type'       => 'number',
			'id'         => 'css_value',
			'only_field' => true,
		) ), $this->value( 'css_value' ), $this->name() );

		$units_field = $this->sub_field( $this->handle_args( 'prefix', $this->option( 'unit' ), array(
			'options' => wponion_internal_options_data( 'css-units' ),
		), array(
			'type'       => 'select',
			'id'         => 'unit',
			'only_field' => true,
		) ), $this->value( 'unit' ), $this->name() );

		return $this->before() . $number_field . $units_field . $this->after();
	}

	/**
	 * Returns all required values to use in js.
	 *
	 * @return array
	 */
	protected function js_args() {
		return array();
	}

	/**
	 * Returns Field's Default Value.
	 *
	 * @return array|mixed
	 */
	protected function defaults() {
		return array(
			'css_value' => '',
			'unit'      => '',
		);
	}

	/**
	 * Handles Fields Assets.
	 */
	public function assets() {
	}
}
