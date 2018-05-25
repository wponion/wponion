<?php
/**
 *
 * Initial version created 25-05-2018 / 09:40 AM
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @package
 * @link
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

namespace WPOnion;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}
if ( ! class_exists( 'WPOnion\Value_API' ) ) {
	/**
	 * Class WPOnion_Values
	 *
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Value_API extends \WPOnion\Core\Array_Finder {
		/**
		 * unique
		 *
		 * @var null
		 */
		protected $unique = null;

		/**
		 * fields
		 *
		 * @var array
		 */
		protected $fields = array();

		/**
		 * field_ids
		 *
		 * @var array
		 */
		protected $field_ids = array();

		/**
		 * WPOnion_Values constructor.
		 *
		 * @param array $db_values
		 * @param array $fields
		 * @param array $args
		 */
		public function __construct( $db_values = array(), $fields = array(), $args = array() ) {
			$this->contents  = $db_values;
			$this->fields    = $fields;
			$args            = $this->parse_args( $args, $this->defaults() );
			$this->plugin_id = $args['plugin_id'];
			$this->module    = $args['module'];
			$this->unique    = $args['unique'];
			$this->extract_all_field_ids_types();
			parent::__construct();
		}

		/**
		 * Returns Class Defaults.
		 *
		 * @return array
		 */
		protected function defaults() {
			return array(
				'module'    => false,
				'unique'    => false,
				'plugin_id' => false,
			);
		}

		/**
		 * @param array  $fields
		 * @param string $parent_id
		 */
		protected function extract_all_field_ids_types( $fields = array(), $parent_id = '' ) {
			if ( empty( $fields ) ) {
				$fields = $this->fields;
			}

			if ( isset( $fields['fields'] ) ) {
				foreach ( $fields['fields'] as $field ) {
					if ( isset( $field['id'] ) && true === wponion_valid_user_input_field( $field ) ) {
						$this->_extra_field_id_type( $field, $parent_id );
					}
				}
			} elseif ( isset( $fields['sections'] ) ) {
				foreach ( $fields['sections'] as $section ) {
					$this->extract_all_field_ids_types( $section, $parent_id );
				}
			} elseif ( is_array( $fields ) ) {
				foreach ( $fields as $page ) {
					if ( isset( $page['fields'] ) ) {
						if ( _wponion_valid_field( $page ) ) {
							$parent_id = $this->_extra_field_id_type( $page, $parent_id );
						}
						$this->extract_all_field_ids_types( $page, $parent_id );
					} elseif ( isset( $page['sections'] ) ) {
						$this->extract_all_field_ids_types( $page, $parent_id );
					} else {
						$this->_extra_field_id_type( $page, $parent_id );
					}
				}
			}
		}

		/**
		 * @param $field
		 * @param $parent_id
		 *
		 * @return string
		 */
		protected function _extra_field_id_type( $field, $parent_id ) {
			if ( isset( $field['id'] ) && true === wponion_valid_user_input_field( $field ) ) {
				if ( false === wponion_is_unarrayed( $field ) ) {
					$parent_id                     = $this->get_path_field_id( $parent_id, $field['id'] );
					$this->field_ids[ $parent_id ] = $field['type'];
					if ( isset( $field['fields'] ) ) {
						$this->extract_all_field_ids_types( $field['fields'], $parent_id );
					}
				} elseif ( isset( $field['fields'] ) ) {
					$this->extract_all_field_ids_types( $field['fields'], $parent_id );
				}
			}
			return $parent_id;
		}

		protected function get_path_field_id( $parent, $field_id ) {
			return ( empty( $parent ) ) ? $field_id : $parent . '' . $this->path_separator . '' . $field_id;

		}

		public function get( $path = null, $default = null ) {
			$value = parent::get( $path, $default );
			if ( isset( $this->field_ids[ $path ] ) ) {
				var_dump( $this->field_ids[ $path ] );
			}
		}
	}
}