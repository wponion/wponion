<?php

namespace WPOnion\Traits\Internal;

defined( 'ABSPATH' ) || exit;

/**
 * Trait Fields
 *
 * @package WPOnion\Traits\Internal
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @since {NEWVERSION}
 */
trait Fields_Handler {
	/**
	 * Fields
	 *
	 * @var string|array|\WPO\Builder
	 */
	protected $fields = array();

	/**
	 * @var bool
	 * @since {NEWVERSION}
	 */
	protected $fields_called = false;

	/**
	 * Returns Fields.
	 *
	 * @return array|\WPO\Builder
	 */
	public function fields() {
		if ( ! wponion_is_array( $this->fields ) && wponion_is_callable( $this->fields ) && false === $this->fields_called ) {
			$this->fields        = wponion_callback( $this->fields );
			$this->fields_called = true;
		}
		return $this->fields;
	}

	/**
	 * Renders / Creates An First Instance based on the $is_init_field variable value.
	 *
	 * @param array $field
	 * @param bool  $hash
	 * @param bool  $is_init_field
	 *
	 * @return mixed
	 * @uses \wponion_field()
	 *
	 * @uses \wponion_add_element()
	 */
	public function render_field( $field = array(), $hash = false, $is_init_field = false ) {
		$callback = ( false === $is_init_field ) ? 'wponion_add_element' : 'wponion_field';
		return $callback( $field, wponion_get_field_value( $field, $this->get_db_values() ), array(
			'module' => $this->module(),
			'unique' => $this->field_unique(),
			'base'   => $this->field_base_unique(),
			'hash'   => $hash,
		) );
	}

	/**
	 * Creates A Error Registry
	 *
	 * @used in Widgets Module.
	 *
	 * @param $errors
	 */
	protected function init_error_registry( $errors ) {
		$instance = wponion_field_error_registry( sanitize_title( $this->module() . '_' . $this->unique() . '_errors' ) );
		$instance->set( $errors );
	}
}
