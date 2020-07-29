<?php

namespace WPOnion\DB\Multi_Save;

use WPOnion\Bridge\Custom_DB_Storage_Handler;

defined( 'ABSPATH' ) || exit;

/**
 * Class Base
 *
 * @package WPOnion\DB\Multi_Save
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Base {
	/**
	 * Save Type
	 * ('combine','container','subcontainer','fields')
	 *
	 * @var string|\WPOnion\Bridge\Custom_DB_Storage_Handler
	 */
	protected $type = '';

	/**
	 * Module Instance
	 *
	 * @var \WPOnion\Bridge\Module
	 */
	protected $instance = false;

	/**
	 * @var array|bool
	 */
	protected $save_types = false;

	/**
	 * Base constructor.
	 *
	 * @param $save_type
	 * @param $instance
	 */
	public function __construct( $save_type, $instance ) {
		$this->type       = $save_type;
		$this->instance   = $instance;
		$this->save_types = array( 'container', 'subcontainer', 'field' );
	}

	/**
	 * Checks if its a valid save type.
	 *
	 * @return bool
	 */
	public function is_valid_save_type() {
		return in_array( $this->type, $this->save_types, true );
	}

	/**
	 * Checks if its to save all.
	 *
	 * @return bool
	 */
	public function is_save_single() {
		return ( ! $this->is_valid_save_type() && in_array( $this->type, array( 'all', 'combined' ) ) );
	}

	/**
	 * Validates if Its A Custom Handler.
	 *
	 * @return bool
	 * @since {NEWVERSION}
	 */
	public function is_custom_save_handler() {
		return ( $this->type instanceof Custom_DB_Storage_Handler || ! $this->is_valid_save_type() && ! $this->is_save_single() && class_exists( $this->type ) );
	}

	/**
	 * Creates Instance.
	 *
	 * @return bool|\WPOnion\Bridge\Custom_DB_Storage_Handler
	 * @since {NEWVERSION}
	 */
	public function custom_handler() {
		if ( $this->is_custom_save_handler() ) {
			if ( ! $this->type instanceof Custom_DB_Storage_Handler ) {
				$this->type = new $this->type( $this->instance->unique(), $this->instance->module(), $this->instance->get_id() );
			}
			return $this->type;
		}
		return false;
	}
}
