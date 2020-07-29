<?php

namespace WPOnion\DB\Multi_Save;

defined( 'ABSPATH' ) || exit;

/**
 * Class Save
 *
 * @package WPOnion\DB\Multi_Save
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Save extends Base {
	/**
	 * Values To Save IN DB.
	 *
	 * @var array|object|\WPOnion\DB\Option
	 */
	protected $values = false;

	/**
	 * Stores Data that needs to be saved in DB.
	 *
	 * @var array
	 */
	protected $final_save_values = array();

	/**
	 * Save constructor.
	 *
	 * @param string                                           $save_type How To Save Values In DB ('combine','container','subcontainer','fields')
	 * @param array                                            $values
	 * @param \WPOnion\Bridge\Module|\WPOnion\Bridge\Module_DB $instance
	 */
	public function __construct( $save_type, $values, $instance ) {
		$this->values = $values;
		parent::__construct( $save_type, $instance );
	}

	/**
	 * @param $db_key
	 * @param $values
	 */
	protected function final_save( $db_key, $values ) {
		if ( ! isset( $this->final_save_values[ $db_key ] ) ) {
			$this->final_save_values[ $db_key ] = $values;
		} else {
			$this->final_save_values[ $db_key ] = wponion_parse_args( $values, $this->final_save_values[ $db_key ] );
		}
	}

	/**
	 * Runs Custom Code To Save Values.
	 */
	public function run() {
		if ( $this->is_custom_save_handler() ) {
			$this->custom_handler()->save( $this->values );
		} elseif ( $this->is_save_single() ) {
			wponion_wp_db()->set( $this->instance->module_db(), $this->instance->unique(), $this->instance->get_id(), $this->values );
		} else {
			$instance = $this->instance;
			$fileds   = $instance->fields();
			$unique   = $instance->unique();

			if ( $fileds->has_fields() && $this->is_valid_save_type() ) {
				$this->extract_or_save_fields_in_db( $fileds->fields(), $this->instance->unique() );
			} elseif ( $fileds->has_containers() ) {
				/**
				 * @var \WPO\Container $container
				 * @var \WPO\Container $sub_container
				 */
				foreach ( $fileds->containers() as $container ) {
					if ( $container->has_fields() ) {
						if ( in_array( $this->type, array( 'container', 'subcontainer' ), true ) ) {
							$this->final_save( $unique . '_' . $container->name(), $this->extract_or_save_fields_in_db( $container->fields(), false ) );
						} elseif ( 'field' === $this->type ) {
							$this->extract_or_save_fields_in_db( $container->fields(), $unique );
						}
					}

					if ( $container->has_containers() ) {
						foreach ( $container->containers() as $sub_container ) {
							if ( 'container' === $this->type && $sub_container->has_fields() ) {
								$this->final_save( $unique . '_' . $container->name(), $this->extract_or_save_fields_in_db( $sub_container->fields(), false ) );
							} elseif ( 'subcontainer' === $this->type && $sub_container->has_fields() ) {
								$this->final_save( $unique . '_' . $sub_container->name(), $this->extract_or_save_fields_in_db( $sub_container->fields(), false ) );
							} elseif ( 'field' === $this->type ) {
								$this->extract_or_save_fields_in_db( $sub_container->fields(), $unique );
							}
						}
					}
				}
			}

			if ( ! empty( $this->final_save_values ) ) {
				foreach ( $this->final_save_values as $db_key => $values ) {
					wponion_wp_db()->set( $instance->module_db(), $db_key, $instance->get_id(), $values );
				}
			}
		}
	}

	/**
	 * Below Function Extracts Each Field's Value and either save it in db or returns it.
	 *
	 * @param      $fields
	 * @param bool $save_each_in_db
	 *
	 * @return array
	 */
	protected function extract_or_save_fields_in_db( $fields, $save_each_in_db = false ) {
		$return = array();
		foreach ( $fields as $field ) {
			if ( ! empty( wponion_field_id( $field ) ) ) {
				$field_id = wponion_field_id( $field );
				$value    = isset( $this->values[ $field_id ] ) ? $this->values[ $field_id ] : false;

				if ( false !== $save_each_in_db ) {
					$this->final_save( $save_each_in_db . '_' . $field_id, $value );
				} else {
					$return[ $field_id ] = $value;
				}
			}
		}
		return $return;
	}
}
