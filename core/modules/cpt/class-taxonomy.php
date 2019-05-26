<?php

namespace WPOnion\Modules\CPT;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}


if ( ! class_exists( '\WPOnion\Modules\CPT\Taxonomy' ) ) {
	/**
	 * Class Post_Type
	 *
	 * @package WPOnion\Modules\CPT
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 *
	 * @method \WPOnion\Modules\CPT\Taxonomy show_tagcloud( $show_tagcloud )
	 * @method \WPOnion\Modules\CPT\Taxonomy show_in_quick_edit( $show_in_quick_edit )
	 * @method \WPOnion\Modules\CPT\Taxonomy show_admin_column( $show_admin_column )
	 * @method \WPOnion\Modules\CPT\Taxonomy update_count_callback( $update_count_callback )
	 * @method \WPOnion\Modules\CPT\Taxonomy sort( $sort )
	 */
	class Taxonomy extends Common {
		/**
		 * @var bool
		 * @access
		 */
		protected $taxonomy = false;

		/**
		 * @var bool
		 * @access
		 */
		protected $object_type = false;

		/**
		 * @var \WPOnion\Modules\CPT\Labels\Taxonomy
		 * @access
		 */
		protected $labels = false;

		/**
		 * Taxonomy constructor.
		 *
		 * @param bool|string $taxonomy
		 * @param array       $object_type
		 * @param array       $args
		 */
		public function __construct( $taxonomy = false, $object_type = array(), $args = array() ) {
			$this->taxonomy = $taxonomy;
			$labels         = array();
			if ( is_string( $taxonomy ) && is_array( $object_type ) && isset( $object_type['object_type'] ) ) {
				$this->object_type = $object_type['object_type'];
				$labels            = isset( $object_type['labels'] ) ? $object_type['labels'] : array();
				unset( $object_type['object_type'] );
				unset( $object_type['labels'] );
				$this->arguments = $object_type;

			} else {
				$this->object_type = $object_type;
				$this->arguments   = $args;
				$labels            = isset( $object_type['labels'] ) ? $object_type['labels'] : array();
				unset( $object_type['labels'] );
			}
			if ( ! empty( $this->taxonomy ) ) {
				add_action( 'init', array( &$this, 'on_init' ) );
				$this->labels = new \WPOnion\Modules\CPT\Labels\Post_Type( $labels );
			}
		}

		/**
		 * @return \WPOnion\Modules\CPT\Labels\Taxonomy
		 */
		public function labels() {
			return $this->labels;
		}

		/**
		 * On Init.
		 */
		public function on_init() {
			$this->arguments['labels'] = $this->labels()
				->get_labels();
			register_taxonomy( $this->taxonomy, $this->object_type, $this->arguments );
		}

		/**
		 * @param $name
		 * @param $arguments
		 *
		 * @return null|\WPOnion\Modules\CPT\Taxonomy|\WPOnion\Modules\CPT\Common
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
				return $this->set_arg( $name, $arguments[0] );
			}
			return parent::__call( $name, $arguments );
		}
	}
}
