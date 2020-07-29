<?php

namespace WPOnion\Modules\CPT;

defined( 'ABSPATH' ) || exit;


/**
 * Class Post_Type
 *
 * @package WPOnion\Modules\CPT
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 *
 * @method $this show_tagcloud( $show_tagcloud )
 * @method $this show_in_quick_edit( $show_in_quick_edit )
 * @method $this show_admin_column( $show_admin_column )
 * @method $this update_count_callback( $update_count_callback )
 * @method $this sort( $sort )
 */
class Taxonomy extends Common {
	/**
	 * @var bool
	 */
	protected $object_type = false;

	/**
	 * @var \WPOnion\Modules\CPT\Labels\Taxonomy
	 */
	protected $labels = false;

	/**
	 * Taxonomy constructor.
	 *
	 * @param string $taxonomy
	 * @param array  $object_type
	 * @param array  $args
	 */
	public function __construct( $taxonomy = '', $object_type = array(), $args = array() ) {
		$this->unique = $taxonomy;
		if ( is_string( $taxonomy ) && is_array( $object_type ) && isset( $object_type['object_type'] ) ) {
			$this->object_type = $object_type['object_type'];
			unset( $object_type['object_type'] );
			$this->settings = $object_type;
		} else {
			$this->object_type = $object_type;
			$this->settings    = $args;
		}
		if ( ! empty( $this->unique() ) ) {
			$this->init_labels( '\WPOnion\Modules\CPT\Labels\Taxonomy' );
			add_action( 'init', array( &$this, 'init' ) );
		}
	}

	/**
	 * @param string|bool $singular
	 * @param string|bool $plural
	 *
	 * @return \WPOnion\Modules\CPT\Labels\Taxonomy
	 *
	 * @example labels('boat','boats')
	 * @example labels('river','rivers')
	 */
	public function labels( $singular = false, $plural = false ) {
		return ( empty( $plural ) && empty( $singular ) ) ? $this->labels : $this->labels->set( $singular, $plural );
	}

	/**
	 * Init
	 */
	public function init() {
		$args           = $this->option();
		$args['labels'] = $this->labels->option();
		register_taxonomy( $this->unique(), $this->object_type, $args );
	}

	/**
	 * @param $name
	 * @param $arguments
	 *
	 * @return $this
	 */
	public function __call( $name, $arguments ) {
		$array = array(
			'show_tagcloud',
			'show_in_quick_edit',
			'show_admin_column',
			'update_count_callback',
			'sort',
		);
		if ( in_array( $name, $array, true ) && isset( $arguments[0] ) ) {
			return $this->option( $name, $arguments[0] );
		}
		return parent::__call( $name, $arguments );
	}
}
