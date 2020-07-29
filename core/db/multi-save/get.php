<?php

namespace WPOnion\DB\Multi_Save;

use WPOnion\DB\Option;

defined( 'ABSPATH' ) || exit;

/**
 * Class Save
 *
 * @package WPOnion\DB\Multi_Save
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Get extends Base {
	/**
	 * Runs Custom Code To Save Values.
	 */
	public function run() {
		$db_vals = array();
		if ( $this->is_custom_save_handler() ) {
			$db_vals = $this->custom_handler()->get();
		} elseif ( $this->is_save_single() ) {
			$db_vals = new Option( $this->instance->module_db(), $this->instance->unique(), $this->instance->get_id() );
		} else {
			$instance = $this->instance;
			$fileds   = $instance->fields();
			$unique   = $instance->unique();

			if ( $fileds->has_fields() && $this->is_valid_save_type() ) {
				$db_vals = $this->extract_or_save_fields_in_db( $fileds->fields() );
			} elseif ( $fileds->has_containers() ) {
				/**
				 * @var \WPO\Container $container
				 * @var \WPO\Container $sub_container
				 */
				foreach ( $fileds->containers() as $container ) {
					if ( $container->has_fields() ) {
						if ( in_array( $this->type, array( 'container', 'subcontainer' ), true ) ) {
							$values  = new Option( $instance->module_db(), $unique . '_' . $container->name(), $instance->get_id() );
							$values  = $this->sanitize_value( $values );
							$db_vals = wponion_parse_args( $values, $db_vals );
						} elseif ( 'field' === $this->type ) {
							$db_vals = wponion_parse_args( $this->extract_or_save_fields_in_db( $container->fields() ), $db_vals );
						}
					}

					if ( $container->has_containers() ) {
						foreach ( $container->containers() as $sub_container ) {
							if ( 'container' === $this->type && $sub_container->has_fields() ) {
								$values  = new Option( $instance->module_db(), $unique . '_' . $container->name(), $instance->get_id() );
								$values  = $this->sanitize_value( $values );
								$db_vals = wponion_parse_args( $values, $db_vals );
							} elseif ( 'subcontainer' === $this->type && $sub_container->has_fields() ) {
								$values  = new Option( $instance->module_db(), $unique . '_' . $sub_container->name(), $instance->get_id() );
								$values  = $this->sanitize_value( $values );
								$db_vals = wponion_parse_args( $values, $db_vals );
							} elseif ( 'field' === $this->type && $sub_container->has_fields() ) {
								$db_vals = wponion_parse_args( $this->extract_or_save_fields_in_db( $sub_container->fields() ), $db_vals );
							}
						}
					}
				}
			}
		}

		return $db_vals;
	}

	/**
	 * Fetches Each Field's Values From DB.
	 *
	 * @param $fields
	 *
	 * @return array
	 */
	protected function extract_or_save_fields_in_db( $fields ) {
		$return = array();
		foreach ( $fields as $field ) {
			if ( ! empty( wponion_field_id( $field ) ) ) {
				$field_id            = wponion_field_id( $field );
				$value               = new Option( $this->instance->module_db(), $this->instance->unique() . '_' . $field_id, $this->instance->get_id() );
				$return[ $field_id ] = $this->sanitize_value( $value );
			}
		}
		return $return;
	}

	/**
	 * Checks if its a Option Object. and ifits then strips out it.
	 *
	 * @param array|\WPOnion\DB\Option|Object $value
	 *
	 * @return mixed
	 */
	protected function sanitize_value( $value ) {
		return ( wpo_is_option( $value ) ) ? $value->get() : $value;
	}
}
