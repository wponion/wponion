<?php

namespace WPOnion;

defined( 'ABSPATH' ) || exit;

/**
 * Class Addon
 *
 * @package WPOnion
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
abstract class Addon_Field extends Addon {
	/**
	 * Field Type.
	 *
	 * @var string
	 */
	protected $type = null;

	/**
	 * An Array/string modules that this field supports.
	 *
	 * @var string
	 */
	protected $supports = null;

	/**
	 * Additional Arguments.
	 *
	 * @var array
	 */
	protected $args = array();

	/**
	 * Stores Field Class File Location.
	 *
	 * @var string
	 */
	protected $class_file = null;

	/**
	 * Addon_Field constructor.
	 *
	 * @param string $name
	 * @param string $file
	 * @param int    $version
	 */
	public function __construct( $name = false, $file = __FILE__, $version = null ) {
		parent::__construct( $name, $file, $version );
		add_action( 'wponion/core/fields/registered', array( &$this, 'register_field' ) );
		add_action( 'wponion/field_class/load', array( &$this, '_load_class' ), 10, 3 );
	}

	/**
	 * Place To Register Custom Fields.
	 */
	public function register_field() {
		if ( ! empty( $this->type ) ) {
			wponion_register_field( $this->type, $this->supports, $this->args );
		}
	}

	/**
	 * Hooks With WPOnion To Loads Its Class On The Go.
	 *
	 * @param string $class
	 * @param string $field_type
	 * @param string $module
	 */
	public function _load_class( $class, $field_type, $module ) {
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
	 * @param string $class
	 * @param string $type
	 * @param string $module
	 */
	protected function load_field_class( $class, $type, $module ) {
	}
}
