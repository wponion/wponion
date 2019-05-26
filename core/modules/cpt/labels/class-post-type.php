<?php

namespace WPOnion\Modules\CPT\Labels;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Modules\CPT\Labels\Post_Type' ) ) {
	/**
	 * Class Post_Type
	 *
	 * @package WPOnion\Modules\CPT\Labels
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 *
	 * @method $this  name_admin_bar( $label );
	 * @method $this  archives( $label );
	 * @method $this  attributes( $label );
	 * @method $this  add_new( $label );
	 * @method $this  new_item( $label );
	 * @method $this  view_items( $label );
	 * @method $this  not_found_in_trash( $label );
	 * @method $this  featured_image( $label );
	 * @method $this  set_featured_image( $label );
	 * @method $this  remove_featured_image( $label );
	 * @method $this  use_featured_image( $label );
	 * @method $this  insert_into_item( $label );
	 * @method $this  uploaded_to_this_item( $label );
	 * @method $this  filter_items_list( $label );
	 */
	class Post_Type extends Common {
		/**
		 * Stores Common Post Type Labels.
		 *
		 * @var array
		 * @access
		 * @static
		 */
		protected static $post_type_labels = array();

		/**
		 * Returns Common Labels.
		 *
		 * @return array
		 */
		private function post_type_labels() {
			if ( empty( self::$post_type_labels ) ) {
				self::$post_type_labels = array(
					'name_admin_bar',
					'archives',
					'attributes',
					'add_new',
					'new_item',
					'view_items',
					'not_found_in_trash',
					'featured_image',
					'set_featured_image',
					'remove_featured_image',
					'use_featured_image',
					'insert_into_item',
					'uploaded_to_this_item',
					'filter_items_list',
				);
			}
			return self::$post_type_labels;
		}

		/**
		 * @param $name
		 * @param $arguments
		 *
		 * @return bool|$this|\WPOnion\Modules\CPT\Labels\Taxonomy
		 */
		public function __call( $name, $arguments ) {
			if ( in_array( $name, $this->post_type_labels(), true ) && ! is_array( $arguments ) ) {
				return $this->set_label( $name, $arguments[0] );
			}
			return parent::__call( $name, $arguments );
		}
	}
}
