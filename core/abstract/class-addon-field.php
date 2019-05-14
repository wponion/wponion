<?php
/**
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @link
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

namespace WPOnion;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Addon_Field' ) ) {
	/**
	 * Class Addon
	 *
	 * @package WPOnion
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	abstract class Addon_Field extends \WPOnion\Addon {
		/**
		 * @var null
		 * @access
		 */
		protected $field_type = null;

		/**
		 * @var null
		 * @access
		 */
		protected $field_supports = null;

		/**
		 * @var array
		 * @access
		 */
		protected $field_args = array();

		/**
		 * Stores Field Class File Location.
		 *
		 * @var null
		 * @access
		 */
		protected $field_class_file = null;

		/**
		 * Addon_Field constructor.
		 *
		 * @param bool   $addon_name
		 * @param string $addon_file
		 * @param null   $version
		 */
		public function __construct( $addon_name = false, $addon_file = __FILE__, $version = null ) {
			parent::__construct( $addon_name, $addon_file, $version );
			add_action( 'wponion_core_fields_registered', array( &$this, 'register_field' ) );
			add_action( 'wponion_load_field_class', array( &$this, '_load_field_class' ), 10, 3 );
		}

		/**
		 * Place To Register Custom Fields.
		 *
		 * @hook wponion_core_fields_registered
		 */
		public function register_field() {
			if ( ! empty( $this->field_type ) ) {
				wponion_register_field( $this->field_type, $this->field_supports, $this->field_args );
			}
		}

		/**
		 * Hooks With WPOnion To Loads Its Class On The Go.
		 *
		 * @param $class
		 * @param $field_type
		 * @param $module
		 */
		public function _load_field_class( $class, $field_type, $module ) {
			if ( strtolower( $field_type ) !== strtolower( $this->field_type ) ) {
				return;
			}

			if ( ! empty( $this->field_class_file ) ) {
				require_once $this->dir( $this->field_class_file );
			} else {
				$this->load_field_class( $class, $field_type, $module );
			}
		}

		/**
		 * This function is a internal hook function which is used by
		 *
		 * @param $class
		 * @param $type
		 * @param $module
		 *
		 * @see _load_field_class();
		 */
		protected function load_field_class( $class, $type, $module ) {
		}
	}
}
