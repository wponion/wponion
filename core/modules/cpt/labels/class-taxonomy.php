<?php

namespace WPOnion\Modules\CPT\Labels;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Modules\CPT\Labels\Taxonomy' ) ) {
	/**
	 * Class Post_Type
	 *
	 * @package WPOnion\Modules\CPT\Labels
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 *
	 * @method $this parent_item( $label )
	 * @method $this new_item_name( $label )
	 * @method $this separate_items_with_commas( $label )
	 * @method $this add_or_remove_items( $label )
	 * @method $this choose_from_most_used( $label )
	 * @method $this popular_items( $label )
	 * @method $this no_terms( $label )
	 */
	class Taxonomy extends Common {
		/**
		 * Stores Common Post Type Labels.
		 *
		 * @var array
		 * @access
		 * @static
		 */
		protected static $taxonomy_labels = array();

		/**
		 * Returns Common Labels.
		 *
		 * @return array
		 */
		private function taxonomy_labels() {
			if ( empty( self::$taxonomy_labels ) ) {
				self::$taxonomy_labels = array(
					'parent_item',
					'new_item_name',
					'separate_items_with_commas',
					'add_or_remove_items',
					'choose_from_most_used',
					'popular_items',
					'no_terms',
				);
			}
			return self::$taxonomy_labels;
		}

		/**
		 * @param $name
		 * @param $arguments
		 *
		 * @return bool|$this|\WPOnion\Modules\CPT\Labels\Taxonomy
		 */
		public function __call( $name, $arguments ) {
			if ( in_array( $name, $this->taxonomy_labels(), true ) && ! is_array( $arguments ) ) {
				return $this->set_label( $name, $arguments[0] );
			}
			return parent::__call( $name, $arguments );
		}
	}
}
