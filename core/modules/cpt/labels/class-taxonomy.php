<?php

namespace WPOnion\Modules\CPT\Labels;

defined( 'ABSPATH' ) || exit;

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
		 * @param $singular
		 * @param $plural
		 *
		 * @return $this|\WPOnion\Modules\CPT\Labels\Common
		 */
		public function set( $singular, $plural ) {
			if ( ! empty( $singular ) && ! empty( $plural ) ) {
				$this->labels['popular_items']              = sprintf( 'Popular %s', $plural );
				$this->labels['parent_item']                = sprintf( 'Parent %s', $singular );
				$this->labels['update_item']                = sprintf( 'Update %s', $singular );
				$this->labels['new_item_name']              = sprintf( 'New %s Name', $singular );
				$this->labels['separate_items_with_commas'] = sprintf( 'Separate %s with commas', strtolower( $plural ) );
				$this->labels['add_or_remove_items']        = sprintf( 'Add or remove %s', strtolower( $plural ) );
				$this->labels['choose_from_most_used']      = sprintf( 'Choose from most used %s', strtolower( $plural ) );
				$this->labels['no_terms']                   = sprintf( 'No %s', strtolower( $plural ) );
				$this->labels['most_used']                  = 'Most Used';
				$this->labels['back_to_items']              = sprintf( '&larr; Back to %s', $plural );
				$this->labels['no_item']                    = sprintf( 'No %s', strtolower( $singular ) );
			}
			return parent::set( $singular, $plural );
		}
	}
}
