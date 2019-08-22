<?php

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
	abstract class Addon_Field extends Addon {
		/**
		 * @var null
		 * @access
		 */
		protected $type = null;

		/**
		 * @var null
		 * @access
		 */
		protected $supports = null;

		/**
		 * @var array
		 * @access
		 */
		protected $args = array();

		/**
		 * Stores Field Class File Location.
		 *
		 * @var null
		 * @access
		 */
		protected $class_file = null;

		/**
		 * Addon_Field constructor.
		 *
		 * @param bool   $name
		 * @param string $file
		 * @param null   $version
		 */
		public function __construct( $name = false, $file = __FILE__, $version = null ) {
			parent::__construct( $name, $file, $version );
			add_action( 'wponion_core_fields_registered', array( &$this, 'register_field' ) );
			add_action( 'wponion_load_field_class', array( &$this, '_load_field_class' ), 10, 3 );
		}

		/**
		 * Place To Register Custom Fields.
		 *
		 * @hook wponion_core_fields_registered
		 */
		public function register_field() {
			if ( ! empty( $this->type ) ) {
				wponion_register_field( $this->type, $this->supports, $this->args );
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
			if ( strtolower( $field_type ) !== strtolower( $this->type ) ) {
				return;
			}

			if ( ! empty( $this->class_file ) ) {
				require_once $this->dir( $this->class_file );
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
