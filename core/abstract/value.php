<?php
/**
 *
 * Initial version created 25-05-2018 / 06:42 PM
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @package
 * @link
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

namespace WPOnion\Bridge;

if ( ! class_exists( '\WPOnion\Bridge\Value' ) ) {
	/**
	 * Class Value
	 *
	 * @package WPOnion\Bridge
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	abstract class Value extends \WPOnion\Core\Array_Finder {
		/**
		 * Stores Database Slug.
		 *
		 * @var null
		 */
		protected $unique = null;

		/**
		 * Stores Subfields Instances.
		 *
		 * @var array
		 */
		public $subfields = array();

		/**
		 * Stores Fields Args
		 *
		 * @var array
		 */
		protected $field = array();

		/**
		 * Stores Fields Value
		 *
		 * @var array|mixed
		 */
		protected $value = null;

		/**
		 * Value constructor.
		 *
		 * @param array $field
		 * @param array $value
		 * @param array $unique
		 */
		public function __construct( $field = array(), $value = array(), $unique = array() ) {
			$unique          = $this->parse_args( $unique );
			$this->plugin_id = ( ! empty( $unique['plugin_id'] ) ) ? $unique['plugin_id'] : null;
			$this->module    = ( ! empty( $unique['module'] ) ) ? $unique['module'] : null;
			$this->unique    = ( ! empty( $unique['unique'] ) ) ? $unique['unique'] : null;
			$this->value     = $value;
			$this->field     = $field;
			$this->init_subfields();
		}

		/**
		 * Simple Hook To Init Its SubFields.
		 */
		protected function init_subfields( $fields = array() ) {
			$fields = ( ! empty( $fields ) ) ? $fields : isset( $this->field['fields'] ) ? $this->field : array();
			if ( isset( $fields['fields'] ) ) {
				foreach ( $fields['fields'] as $field ) {
					if ( _wponion_valid_field( $field ) && wponion_valid_user_input_field( $field ) ) {
						if ( false === wponion_is_unarrayed( $field ) ) {
							$this->init_subfield( $field );
						} elseif ( true === wponion_is_unarrayed( $field ) && isset( $field['fields'] ) ) {
							foreach ( $field['fields'] as $_field ) {
								if ( _wponion_valid_field( $_field ) && wponion_valid_user_input_field( $fields ) ) {
									if ( false === wponion_is_unarrayed( $_field ) ) {
										$this->init_subfield( $_field );
									} elseif ( true === wponion_is_unarrayed( $_field ) && isset( $_field['fields'] ) ) {
										$this->init_subfields( $_field );
									}
								}
							}
						}
					}
				}
			}
		}

		/**
		 * Creates An Instance for subfield.
		 *
		 * @param $field
		 *
		 * @return bool
		 */
		protected function init_subfield( $field ) {
			$value = _wponion_get_field_value( $field, $this->value );
			$class = wponion_field_value_class( $field );
			if ( class_exists( $class ) ) {
				$value = new $class( $field, $value, array(
					'unique'    => $this->unique,
					'plugin_id' => $this->plugin_id(),
					'module'    => $this->module(),
				) );
				$this->add_sub( $field['id'], $value );
			}
			return $value;
		}

		/**
		 * Returns Default Args.
		 *
		 * @return array
		 */
		protected function defaults() {
			return array(
				'plugin_id' => false,
				'module'    => false,
				'unique'    => false,
			);
		}

		/**
		 * Magic Method to convert class into string.
		 *
		 * @return array|false|null|string
		 */
		public function __toString() {
			if ( is_array( $this->value ) ) {
				return wp_json_encode( $this->value );
			}
			return $this->value;
		}

		/**
		 * Adds Subfields Instance To Array.
		 *
		 * @param $field_id
		 * @param $instance
		 */
		protected function add_sub( $field_id, &$instance ) {
			if ( ! isset( $this->subfields[ $field_id ] ) ) {
				$this->subfields[ $field_id ] = $instance;
			}
		}

		/**
		 * Returns Sub Fields Instance if exists.
		 *
		 * @param $field_id
		 *
		 * @return bool|mixed
		 */
		public function sub( $field_id ) {
			if ( isset( $this->subfields[ $field_id ] ) ) {
				return $this->subfields[ $field_id ];
			}
			return false;
		}

		/**
		 * Returns Raw Value Output.
		 *
		 * @return array|null
		 */
		public function raw() {
			return $this->value;
		}

		/**
		 * Returns Value into a html tag.
		 *
		 * @param string $tag
		 * @param string $attributes
		 *
		 * @return string
		 */
		public function html( $tag = 'p', $attributes = '' ) {
			return '<' . $tag . ' ' . $attributes . '>' . $this->value . '</' . $tag . '>';
		}

		/**
		 * echo value into a html tag.
		 *
		 * @param string $tag
		 * @param string $attributes
		 */
		public function _html( $tag = 'p', $attributes = '' ) {
			echo $this->html( $tag, $attributes );
		}

		/**
		 * Return a value from the array corresponding to the path.
		 * If the path is not set in the array, then $default is returned.
		 *
		 * ex:
		 * $a = ['a' => ['b' => 'yeah']];
		 * echo $this->get('a.b'); // yeah
		 * echo $this->get('a.b.c', 'nope'); // nope
		 *
		 * @param string|int|null $path Path to the value. If null, return all the content.
		 * @param mixed           $default Default value to return when path is not contained in the array.
		 *
		 *
		 * @return false|\WPonion\Bridge\Value|mixed
		 */
		public function get( $path = null, $default = null ) {
			$use_var = ( empty( $this->subfields ) ) ? $this->value : $this->subfields;

			if ( null === $path || ! is_array( $use_var ) ) {
				return $use_var;
			}

			$value = $default;

			$this->call_at_path( $path, function ( &$offset ) use ( &$value ) {
				$value = $offset;
			}, false, $use_var );

			return $value;
		}

		/**
		 * Checks if field is checked or not.
		 *
		 * @param string $key
		 *
		 * @return bool
		 */
		public function active( $key = '' ) {
			if ( ! empty( $key ) ) {
				if ( is_array( $this->value ) ) {
					return in_array( $key, $this->value );
				} elseif ( $key === $this->value ) {
					return true;
				}
				return false;
			}
			return ( false !== $this->value ) ? true : false;
		}
	}
}
