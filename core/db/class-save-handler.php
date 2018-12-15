<?php
/**
 *
 * Initial version created 14-05-2018 / 03:10 PM
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @package
 * @link
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

namespace WPOnion\DB;

use WPOnion\Bridge;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\DB\Save_Handler' ) ) {
	/**
	 * Class Save_Handler
	 *
	 * @package WPOnion\DB
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Save_Handler extends Bridge {
		/**
		 * Stores User Posted Options
		 *
		 * @var array
		 */
		protected $user_options = array();

		/**
		 * Stores All Field Errors.
		 *
		 * @var array
		 */
		protected $errors = array();

		/**
		 * Database Key.
		 *
		 * @var string
		 */
		protected $unique = '';
		/**
		 * retain_value
		 *
		 * @var string
		 */
		protected $retain_value = false;

		/**
		 * fields
		 *
		 * @var array|\WPOnion\Module_Fields
		 */
		protected $fields = array();

		/**
		 * db_values
		 *
		 * @var array
		 */
		protected $db_values = array();

		/**
		 * Stores Extra Args.
		 *
		 * @var array
		 */
		protected $args = array();

		/**
		 * Stores Return Values
		 *
		 * @var array
		 */
		protected $return_values = array();

		/**
		 * \WPOnion\DB\Save_Handler constructor.
		 */
		public function __construct() {
		}

		/**
		 * @param array $args
		 *
		 * @return $this
		 */
		public function init_class( $args = array() ) {
			$args = $this->parse_args( $args, array(
				'module'       => false,
				'plugin_id'    => false,
				'unique'       => false,
				'fields'       => false,
				'db_values'    => false,
				'retain_value' => false,
				'user_values'  => false,
				'args'         => array(),
			) );

			$this->module       = $args['module'];
			$this->plugin_id    = $args['plugin_id'];
			$this->unique       = $args['unique'];
			$this->fields       = $args['fields'];
			$this->db_values    = $args['db_values'];
			$this->args         = $args['args'];
			$this->retain_value = $args['retain_value'];

			if ( false === $args['user_values'] ) {
				$this->user_options = ( isset( $_POST[ $this->unique ] ) ) ? $_POST[ $this->unique ] : array();
			} else {
				$this->user_options = $args['user_values'];
			}
			return $this;
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
		 * Sanitize a field and provides the below hooks
		 *
		 * wponion_{field_type}
		 * wponion_{custom_name}
		 *
		 * And also provides below args
		 *
		 * $value | Plugin ID | Module | Field Args
		 *
		 * @param array $field
		 * @param array $value
		 *
		 * @return array|mixed
		 */
		protected function sanitize( $field = array(), $value = array() ) {
			$functions = false;

			if ( isset( $field['sanitize'] ) && true === $field['sanitize'] || false === isset( $field['sanitize'] ) ) {
				$functions = 'wponion_field_' . $field['type'] . '_sanitize';
			} elseif ( isset( $field['sanitize'] ) && true !== $field['sanitize'] ) {
				$functions = $field['sanitize'];
			}

			if ( is_array( $functions ) ) {
				foreach ( $functions as $function ) {
					if ( wponion_is_callable( $function ) ) {
						$value = wponion_callback( $function, array(
							'value'     => $value,
							'field'     => $field,
							'plugin_id' => $this->plugin_id(),
							'module'    => $this->module(),
						) );
					} elseif ( is_string( $value ) && has_filter( $functions ) ) {
						$value = apply_filters( $functions, $value, $field, $this->plugin_id(), $this->module() );
					}
				}
			} elseif ( wponion_is_callable( $functions ) ) {
				$value = wponion_callback( $functions, array(
					'value'     => $value,
					'field'     => $field,
					'plugin_id' => $this->plugin_id(),
					'module'    => $this->module(),
				) );
			} elseif ( has_filter( $functions ) ) {
				$value = apply_filters( $functions, $value, $field, $this->plugin_id(), $this->module() );
			}

			return $value;
		}

		/**
		 * Runs Loop with fields array and triggers validation function.
		 *
		 * @param array $field
		 * @param array $value
		 * @param array $db_value
		 *
		 * @return array|mixed
		 */
		protected function validate( $field = array(), $value = array(), $db_value = array() ) {
			$functions = false;

			if ( isset( $field['validate'] ) && true !== $field['validate'] ) {
				$functions = $field['validate'];
			}

			if ( false === $functions ) {
				return $value;
			}

			$errors = array();
			if ( is_array( $functions ) ) {
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
			return wponion_callback( $function, array( $value, $field, $this->plugin_id(), $this->module() ) );
		}

		/**
		 * This returns value from db array.
		 *
		 * @param string $field
		 * @param bool   $value_arr
		 * @param bool   $default
		 *
		 * @return bool|mixed
		 */
		protected function db_options( $field = '', $value_arr = false, $default = false ) {
			$value_arr = ( false === $value_arr ) ? $this->db_values : $value_arr;
			$_value    = wponion_get_field_value( $field, $value_arr );
			if ( $_value ) {
				return $_value;
			}
			return $default;
		}

		/**
		 * This returns value from User array.
		 *
		 * @param string $field
		 * @param bool   $value_arr
		 * @param bool   $default
		 *
		 * @return bool|mixed
		 */
		protected function user_options( $field = '', $value_arr = false, $default = false ) {
			$value_arr = ( false === $value_arr ) ? $this->user_options : $value_arr;
			$_value    = wponion_get_field_value( $field, $value_arr );
			if ( $_value ) {
				return $_value;
			}
			return $default;
		}

		/**
		 * Saves A Value.
		 *
		 * @param $value
		 * @param $field
		 *
		 * @return bool|null|mixed
		 */
		protected function save_value( $value, $field ) {
			if ( ! isset( $field['id'] ) ) {
				return null;
			}

			if ( wponion_is_unarrayed( $field ) ) {
				$this->return_values = array_merge( $this->return_values, $value );
			} else {
				$this->return_values[ $field['id'] ] = $value;
			}

			return true;
		}

		/**
		 * Returns Final Value.
		 *
		 * @return array
		 */
		public function get_values() {
			return ( true === $this->retain_value ) ? $this->parse_args( $this->return_values, $this->db_values ) : $this->return_values;
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
		 * Runs A Field.Inner Loop.
		 *
		 * @param array|\WPOnion\Module_Fields $section
		 */
		protected function field_loop( $section ) {
			foreach ( $section->fields() as $field ) {
				if ( wponion_valid_field( $field ) && false === wponion_valid_user_input_field( $field ) ) {
					continue;
				}

				$field['error_id'] = sanitize_key( $this->unique . wponion_field_id( $field ) );
				$db_val            = $this->db_options( $field );
				//$user_val          = ( true === $this->retain_value ) ? $this->user_options( $field, false, $db_val ) : $this->user_options( $field );
				$user_val = $this->user_options( $field );

				$this->save_value( $this->handle_field( $field, $user_val, $db_val ), $field );
				if ( ! in_array( $field['type'], array( 'group' ) ) ) {
					if ( isset( $field['fields'] ) ) {
						$this->nested_field_loop( $field );
					}
				}
			}
		}

		/**
		 * This function is used for nested field loops.
		 *
		 * @param $field
		 */
		protected function nested_field_loop( $field ) {
			$parent_field = $field;

			if ( is_array( $field['fields'] ) ) {
				foreach ( $field['fields'] as $_field ) {
					if ( wponion_valid_field( $field ) && false === wponion_valid_user_input_field( $field ) ) {
						continue;
					}

					if ( wponion_is_unarrayed( $field ) ) {
						$parent_field = $_field;
					}

					$_field['error_id'] = sanitize_key( $this->unique . $field['id'] . '' . $_field['id'] );
					$db_val             = $this->db_options( $parent_field );
					$user_val           = $this->user_options( $parent_field );
					$_user_val          = ( isset( $user_val[ $_field['id'] ] ) ) ? $user_val[ $_field['id'] ] : $user_val;
					$_db_val            = ( isset( $db_val[ $_field['id'] ] ) ) ? $db_val[ $_field['id'] ] : $db_val;
					$value              = $this->handle_field( $_field, $_user_val, $_db_val );

					$user_val[ $_field['id'] ] = $value;

					$this->save_value( $user_val, $parent_field );

					if ( ! in_array( $_field['type'], array( 'group' ) ) ) {
						if ( isset( $_field['fields'] ) ) {
							$this->nested_field_loop( $_field );
						}
					}
				}
			}
		}

		/**
		 * Stores Errors in LocalDB.
		 *
		 * @param        $message
		 * @param string $type
		 * @param string $id
		 */
		public function error( $message, $type = 'error', $id = 'global' ) {
			$this->errors[ $id ] = array(
				'setting' => 'wponion-errors',
				'code'    => $id,
				'message' => $message,
				'type'    => $type,
			);
		}

		/**
		 * @param array $new_values
		 * @param array $old_values
		 *
		 * @return array
		 */
		public function array_merge( $new_values = array(), $old_values = array() ) {
			foreach ( $old_values as $key => $value ) {
				if ( ! isset( $new_values[ $key ] ) ) {
					$new_values[ $key ] = $old_values[ $key ];
				}
			}
			return $new_values;
		}
	}
}
