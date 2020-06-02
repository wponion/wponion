<?php

namespace WPOnion\DB\Save_Handler;

use WPOnion\Bridge;
use WPOnion\DB\Save_Handler\Fields\Modal;
use WPOnion\Helper;
use WPOnion\Traits\Internal\Module;

defined( 'ABSPATH' ) || exit;

/**
 * Class Base
 *
 * @package WPOnion\DB\Save_Handler
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Base extends Bridge {
	/**
	 * Modal Field Handler.
	 */
	use Modal;
	use Module;

	/**
	 * Stores Unique ID.
	 */
	protected $unique;

	/**
	 * Stores Field's / Containers / Both.
	 *
	 * @var \WPO\Builder
	 */
	protected $fields;

	/**
	 * @var mixed
	 */
	protected $retain_values;

	/**
	 * Fetches & Stores values that are stored in DB.
	 *
	 * @var array|\WPOnion\DB\Option
	 */
	protected $db_values;

	/**
	 * Stores $_GET / $_POST Values.
	 */
	protected $posted_values;

	/**
	 * Stores Returnable Values.
	 */
	protected $return_values;

	/**
	 * Stores All Field Errors.
	 *
	 * @var array
	 */
	protected $errors = array();

	/**
	 * Custom Arguments On how this handler work.
	 *
	 * @var array
	 */
	protected $args = array();

	/**
	 * How array delimiter works with.
	 *
	 * @var string
	 */
	protected $delimiter = '/';

	/**
	 * Data_Validator_Sanitizer constructor.
	 *
	 * @param $args
	 */
	public function __construct( $args ) {
		$args                = $this->parse_args( $args, array(
			'module'        => false,
			'unique'        => false,
			'fields'        => false,
			'db_values'     => false,
			'retain_value'  => false,
			'args'          => false,
			'posted_values' => false,
		) );
		$this->module        = $args['module'];
		$this->unique        = $args['unique'];
		$this->fields        = $args['fields'];
		$this->retain_values = $args['retain_value'];
		$this->posted_values = $args['posted_values'];
		$this->db_values     = $args['db_values'];
		$this->args          = $args['args'];
		$this->return_values = wponion_cast_array( $this->return_values );

		if ( false === $this->posted_values ) {
			$this->posted_values = ( isset( $_POST[ $this->unique ] ) ) ? $_POST[ $this->unique ] : array();
		}
	}

	/**
	 * Handles Field Path
	 *
	 * @param $field
	 * @param $parent
	 *
	 * @return mixed
	 */
	protected function field_path( $field, $parent = array() ) {
		$parent['field_path'] = ( ! isset( $parent['field_path'] ) ) ? array() : $parent['field_path'];
		$parent['field_path'] = ( is_string( $parent['field_path'] ) ) ? explode( '/', $parent['field_path'] ) : $parent['field_path'];

		if ( ! isset( $field['field_path'] ) ) {
			$field['field_path'] = array_filter( wp_parse_args( array( ( ! wponion_is_unarrayed( $field ) ) ? $field['id'] : '' ), $parent['field_path'] ) );
		}
		return $field;
	}

	/**
	 * Checks if a field is valid or not.
	 *
	 * @param $field
	 *
	 * @return bool
	 */
	protected function is_valid_field( $field ) {
		switch ( wponion_get_field_type( $field, false ) ) {
			case 'modal':
				return ( wponion_is_ajax() && wponion_ajax_action( 'modal-fields' ) );
				break;
		}

		return true;
	}

	/**
	 * Handles Fields Custom Callback.
	 *
	 * @param bool|\WPO\Field|array $field
	 * @param bool|\WPO\Field|array $parent_field
	 *
	 * @return bool
	 */
	protected function field_callback( $field, $parent_field = false ) {
		$type = wponion_get_field_type( $field, false );
		if ( method_exists( $this, 'field_' . $type ) && is_callable( array( &$this, 'field_' . $type ) ) ) {
			$this->{'field_' . $type}( $field, $parent_field );
			return true;
		}
		return false;
	}

	/**
	 * Runs each field into a loop.
	 *
	 * @param \WPO\Container|\WPO\Builder $data
	 */
	protected function field_loop( $data ) {
		if ( $data->has_fields() ) {
			foreach ( $data->fields() as $field ) {
				if ( false === wponion_valid_user_input_field( $field ) ) {
					continue;
				}

				if ( ! wponion_valid_field( $field ) ) {
					continue;
				}

				if ( false === $this->is_valid_field( $field ) ) {
					continue;
				}

				$field = $this->field_path( $field );
				if ( false === $this->field_callback( $field ) ) {
					$this->handle_single_field( $field );
				}
			}
		}
	}

	/**
	 * Handles Single Field Loop.
	 *
	 * @param $field
	 */
	protected function handle_single_field( $field ) {
		$field['error_id'] = $this->unique . '/' . wponion_field_id( $field );
		$user_val          = $this->user_options( $field );
		$db_val            = $this->db_options( $field );
		$this->save_value( $this->handle_field( $field, $user_val, $db_val ), $field );
		$this->go_nested( $field );
	}

	/**
	 * Diggs Deep Into Nested Fields.
	 *
	 * @param $field
	 */
	protected function go_nested( $field ) {
		if ( ! in_array( $field['type'], array( 'group' ), true ) ) {
			if ( false === $this->field_callback( $field ) ) {
				if ( isset( $field['fields'] ) ) {
					$this->nested_field_loop( $this->field_path( $field ) );
				}
			}
		}
	}

	/**
	 * Fetches Value from database.
	 *
	 * @param array            $data
	 * @param array|\WPO\Field $field
	 *
	 * @return bool|mixed
	 */
	protected function get_db_user_value( $data, $field ) {
		if ( is_string( $data ) ) {
			return $data;
		} elseif ( is_array( $data ) && isset( $data[ $field['id'] ] ) ) {
			return $data[ $field['id'] ];
		}
		return false;
	}

	/**
	 * This function is used for nested field loops.
	 *
	 * @param $field
	 */
	protected function nested_field_loop( $field ) {
		$parent_field = $field;
		if ( wponion_is_array( $field['fields'] ) ) {
			foreach ( $field['fields'] as $_field ) {
				if ( false === wponion_valid_user_input_field( $field ) || false === wponion_valid_user_input_field( $_field ) ) {
					continue;
				}

				if ( ! wponion_valid_field( $field ) ) {
					continue;
				}

				if ( false === $this->is_valid_field( $_field ) ) {
					continue;
				}

				if ( true === $this->field_callback( $_field, $parent_field ) ) {
					continue;
				}

				if ( wponion_is_unarrayed( $field ) ) {
					$parent_field = $_field;
				}
				$_field             = $this->field_path( $_field, $field );
				$_field['error_id'] = $field['error_id'] . '/' . $_field['id'];
				$db_val             = $this->db_options( $parent_field );
				$user_val           = $this->user_options( $parent_field );
				$_user_val          = $this->get_db_user_value( $user_val, $_field );
				$_db_val            = $this->get_db_user_value( $db_val, $_field );
				$value              = $this->handle_field( $_field, $_user_val, $_db_val );

				if ( ! wponion_is_unarrayed( $field ) && ! wponion_is_unarrayed( $_field ) && isset( $_field['fields'] ) && isset( $field['fields'] ) ) {
					$user_val                  = ( ! is_array( $user_val ) ) ? array() : $user_val;
					$user_val[ $_field['id'] ] = $value;
					$this->save_value( $user_val, $field );
				} elseif ( ! isset( $_field['fields'] ) ) {
					$this->save_value( $value, $_field );
				}
				$this->go_nested( $_field );
			}
		}
	}

	/**
	 * Runs It.
	 */
	public function run() {
		/**
		 * @var \WPO\Container $container
		 * @var \WPO\Container $sub_container
		 */
		if ( $this->fields->has_fields() ) {
			/* Below Foreach Runs Just the main level fields. */
			$this->field_loop( $this->fields );
		} elseif ( false === $this->fields->has_fields() && $this->fields->has_containers() ) {
			foreach ( $this->fields->get() as $container ) {
				if ( $container->has_containers() ) {
					/* This if condition handles all the subcontainers inside a container. */
					foreach ( $container->containers() as $sub_container ) {
						if ( $sub_container->has_fields() && ! $sub_container->has_callback() && ! $sub_container->has_href() ) {
							$this->field_loop( $sub_container );
						}
					}
				} elseif ( $container->has_fields() && ! $container->has_callback() && ! $container->has_href() ) {
					/* This if condition handles all the fields that are directly inside a container */
					$this->field_loop( $container );
				}
			}
		}
	}

	/**
	 * Handles Single Field.
	 *
	 * @param array $field
	 * @param bool  $value
	 * @param bool  $database
	 *
	 * @return array|bool|mixed
	 */
	protected function handle_field( $field = array(), $value = false, $database = false ) {
		$value = $this->sanitize( $field, $value );
		$value = $this->validate( $field, $value, $database );
		return $value;
	}

	/**
	 * Saves Final Field Value.
	 *
	 * @param mixed $value
	 * @param array $field
	 * @param bool  $merge
	 *
	 * @return bool
	 */
	protected function save_value( $value, $field, $merge = false ) {
		$path = implode( '/', array_filter( $field['field_path'] ) );
		if ( ! empty( $path ) ) {
			if ( wponion_is_unarrayed( $field ) || true === $merge ) {
				$_values = Helper::array_key_get( $path, $this->return_values );
				$value   = array_merge( $_values, $value );
			}
			Helper::array_key_set( $path, $value, $this->return_values, '/' );
		}
		return true;
	}

	/**
	 * sanitize a field value.
	 *
	 * @param $field
	 * @param $value
	 *
	 * @return bool|false|mixed|string|void
	 */
	protected function sanitize( $field, $value ) {
		$functions = false;
		if ( isset( $field['sanitize'] ) && true === $field['sanitize'] || false === isset( $field['sanitize'] ) ) {
			$functions = 'wponion_field_' . $field['type'] . '_sanitize';
		} elseif ( isset( $field['sanitize'] ) && true !== $field['sanitize'] ) {
			$functions = $field['sanitize'];
		}
		if ( wponion_is_array( $functions ) ) {
			foreach ( $functions as $function ) {
				if ( wponion_is_callable( $function ) ) {
					$value = wponion_callback( $function, array( $value, $field, $this->module() ) );
				} elseif ( is_string( $value ) && has_filter( $functions ) ) {
					$value = apply_filters( $functions, $value, $field, $this->module() );
				}
			}
		} elseif ( wponion_is_callable( $functions ) ) {
			$value = wponion_callback( $functions, array( $value, $field, $this->module() ) );
		} elseif ( has_filter( $functions ) ) {
			$value = apply_filters( $functions, $value, $field, $this->module() );
		}
		return $value;
	}

	/**
	 * Handles Field Validate Callbacks.
	 *
	 * @param $field
	 * @param $value
	 * @param $db_value
	 *
	 * @return mixed
	 */
	protected function validate( $field, $value, $db_value ) {
		$functions = false;
		$errors    = array();
		if ( isset( $field['validate'] ) && ( ! empty( $field['validate'] ) && true !== $field['validate'] ) ) {
			$functions = $field['validate'];
		}

		if ( false === $functions ) {
			return $value;
		}

		if ( wponion_is_array( $functions ) ) {
			foreach ( $functions as $key => $function ) {
				$custom_message = ( ! is_numeric( $key ) ) ? $function : false;
				$function       = ( ! is_numeric( $key ) ) ? $key : $function;
				if ( wponion_is_callable( $function ) ) {
					$_is_valid = $this->_validate( $function, $field, $value );
					if ( ! empty( $_is_valid ) && true !== $_is_valid ) {
						$errors[] = ( ! empty( $custom_message ) ) ? $custom_message : $_is_valid;
					}
				}
			}
		} elseif ( wponion_is_callable( $functions ) ) {
			$_is_valid = $this->_validate( $functions, $field, $value );
			if ( ! empty( $_is_valid ) && true !== $_is_valid ) {
				$errors[] = $_is_valid;
			}
		}
		if ( ! empty( $errors ) ) {
			$this->error( $errors, 'error', $field['error_id'] );
			return $db_value;
		}
		return $value;
	}

	/**
	 * Triggers a Validation Function.
	 *
	 * @param $function
	 * @param $field
	 * @param $value
	 *
	 * @return mixed
	 */
	protected function _validate( $function, $field, $value ) {
		return wponion_callback( $function, array( $value, $field, $this->module() ) );
	}

	/**
	 * Returns Final Value.
	 *
	 * @return array
	 */
	public function get_values() {
		return ( true === $this->retain_values ) ? $this->parse_args( $this->return_values, $this->db_values ) : $this->return_values;
	}

	/**
	 * Returns Errors Array.
	 *
	 * @return array
	 */
	public function get_errors() {
		return $this->errors;
	}

	/**
	 * Stores Field's Error Information.
	 *
	 * @param        $message
	 * @param string $type
	 * @param string $ids
	 *
	 * @return $this
	 */
	public function error( $message, $type = 'error', $ids = 'global' ) {
		Helper::array_key_set( $ids, array(
			'setting' => 'wponion-errors',
			'message' => $message,
			'type'    => $type,
		), $this->errors, $this->delimiter );
		return $this;
	}

	/**
	 * This returns value from db array.
	 *
	 * @param array $field
	 * @param bool  $value_arr
	 * @param bool  $default
	 *
	 * @return bool|mixed
	 */
	protected function db_options( $field, $value_arr = false, $default = false ) {
		return $this->_value_options( $field, $value_arr, $default, 'db_values' );
	}

	/**
	 * This returns value from User array.
	 *
	 * @param array $field
	 * @param bool  $value_arr
	 * @param bool  $default
	 *
	 * @return bool|mixed
	 */
	protected function user_options( $field, $value_arr = false, $default = false ) {
		return $this->_value_options( $field, $value_arr, $default, 'posted_values' );
	}

	/**
	 * _value_options.
	 *
	 * @param array $field
	 * @param mixed $value_arr
	 * @param mixed $default
	 * @param mixed $variable
	 *
	 * @return bool|mixed
	 */
	protected function _value_options( $field, $value_arr, $default, $variable ) {
		$value_arr = ( false === $value_arr ) ? $this->{$variable} : $value_arr;
		return Helper::array_key_get( implode( '/', $field['field_path'] ), $value_arr, $default );
	}
}
