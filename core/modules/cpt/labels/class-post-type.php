<?php

namespace WPOnion\Modules\CPT\Labels;

defined( 'ABSPATH' ) || exit;

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
		 * @param $singular
		 * @param $plural
		 *
		 * @return $this|\WPOnion\Modules\CPT\Labels\Common
		 *
		 */
		public function set( $singular, $plural ) {
			if ( ! empty( $singular ) && ! empty( $plural ) ) {
				$this->labels['name_admin_bar']        = $singular;
				$this->labels['add_new']               = 'Add New';
				$this->labels['new_item']              = sprintf( 'New %s', $singular );
				$this->labels['view_items']            = sprintf( 'View %s', $plural );
				$this->labels['not_found_in_trash']    = sprintf( 'No %s found in trash.', strtolower( $plural ) );
				$this->labels['archives']              = sprintf( '%s Archives', $singular );
				$this->labels['attributes']            = sprintf( '%s Attributes', $singular );
				$this->labels['insert_into_item']      = sprintf( 'Insert into %s', strtolower( $singular ) );
				$this->labels['uploaded_to_this_item'] = sprintf( 'Uploaded to this %s', strtolower( $singular ) );
				$this->labels['filter_items_list']     = sprintf( 'Filter %s list', strtolower( $plural ) );
			}
			return parent::set( $singular, $plural );
		}
	}
}
