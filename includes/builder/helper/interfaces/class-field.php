<?php

namespace WPO\Helper\Interfaces;

defined( 'ABSPATH' ) || exit;

/**
 * Interface Field
 *
 * @package WPO\Helper\Interface
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
interface Field {
	/**
	 * Checks If Field Exists
	 * and if exists then returns the Field instance.
	 *
	 * @param $field_id
	 *
	 * @return bool|array|\WPO\Field
	 */
	public function field_exists( $field_id );

	/**
	 * Checks If Current Instance Has Fields.
	 *
	 * @return bool
	 */
	public function has_fields();

	/**
	 * Returns All Containers.
	 *
	 * @return array
	 */
	public function fields();

	/**
	 * Creates A New Field Instance. or
	 * save an existing instance to builder or
	 * return an existing instance.
	 *
	 * @param string|array|\WPO\Field $field_type_or_instance
	 * @param mixed                   $field_id
	 * @param mixed                   $title
	 * @param array|bool              $args
	 *
	 * @return bool|\WPO\Field
	 */
	public function add_field( $field_type_or_instance, $field_id = false, $title = false, $args = array() );
}
