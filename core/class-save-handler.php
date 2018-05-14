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
if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( 'WPOnion_Save_Handler' ) ) {
	/**
	 * Class WPOnion_Save_Handler
	 *
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class WPOnion_Save_Handler extends WPOnion_Abstract {
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
		 * fields
		 *
		 * @var array
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
		 * WPOnion_Save_Handler constructor.
		 */
		public function __construct() {
		}

		/**
		 * inits class.
		 *
		 * @param array $args
		 */
		public function init_class( $args = array() ) {
			$args = $this->parse_args( $args, array(
				'module'      => false,
				'plugin_id'   => false,
				'unique'      => false,
				'fields'      => false,
				'db_values'   => false,
				'user_values' => false,
				'args'        => array(),
			) );

			$this->module       = $args['module'];
			$this->plugin_id    = $args['plugin_id'];
			$this->unique       = $args['unique'];
			$this->fields       = $args['fields'];
			$this->db_values    = $args['db_values'];
			$this->user_options = $args['user_values'];
			$this->args         = $args['args'];
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
					if ( is_callable( $function ) ) {
						$value = call_user_func_array( $function, array(
							'value'     => $value,
							'plugin_id' => $this->plugin_id(),
							'field'     => $field,
						) );
					} elseif ( is_string( $value ) && has_filter( $functions ) ) {
						$value = apply_filters( $functions, $value, $this->plugin_id(), $this->module, $field );
					}
				}
			} elseif ( is_callable( $functions ) ) {
				$value = call_user_func_array( $functions, array(
					'value'     => $value,
					'plugin_id' => $this->plugin_id(),
					'field'     => $field,
				) );
			} elseif ( has_filter( $functions ) ) {
				$value = apply_filters( $functions, $value, $this->plugin_id(), $this->module, $field );
			}

			return $value;
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
			$field     = ( is_array( $field ) && isset( $field['id'] ) ) ? $field['id'] : $field;
			if ( ! $field ) {
				return false;
			}

			if ( isset( $value_arr[ $field ] ) ) {
				return $value_arr[ $field ];
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
			$field     = ( is_array( $field ) && isset( $field['id'] ) ) ? $field['id'] : $field;
			if ( ! $field ) {
				return false;
			}

			if ( isset( $value_arr[ $field ] ) ) {
				return $value_arr[ $field ];
			}

			return $default;
		}

		/**
		 * Saves A Value.
		 *
		 * @param $value
		 * @param $field
		 *
		 * @return bool|void
		 */
		protected function save_value( $value, $field ) {
			if ( ! isset( $field['id'] ) ) {
				return;
			}

			$this->return_values[ $field['id'] ] = $value;
			return true;
		}

		/**
		 * Returns Final Value.
		 *
		 * @return array
		 */
		public function get_values() {
			return $this->return_values;
		}

		/**
		 * Runs A Field.Inner Loop.
		 *
		 * @param $section
		 */
		protected function field_loop( $section ) {
			foreach ( $section['fields'] as $field ) {
				$this->save_value( $this->handle_field( $field, $this->user_options( $field ), $this->db_options( $field ) ), $field );
			}
		}

	}
}
