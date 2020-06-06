<?php

namespace WPOnion\Modules\CPT\Labels;

defined( 'ABSPATH' ) || exit;

/**
 * Class Post_Type
 *
 * @package WPOnion\Modules\CPT\Labels
 * @author Varun Sridharan <varunsridharan23@gmail.com>
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
	 * @return $this
	 */
	public function set( $singular, $plural ) {
		if ( ! empty( $singular ) && ! empty( $plural ) ) {
			$this->set_option( 'popular_items', sprintf( 'Popular %s', $plural ) );
			$this->set_option( 'parent_item', sprintf( 'Parent %s', $singular ) );
			$this->set_option( 'update_item', sprintf( 'Update %s', $singular ) );
			$this->set_option( 'new_item_name', sprintf( 'New %s Name', $singular ) );
			$this->set_option( 'separate_items_with_commas', sprintf( 'Separate %s with commas', strtolower( $plural ) ) );
			$this->set_option( 'add_or_remove_items', sprintf( 'Add or remove %s', strtolower( $plural ) ) );
			$this->set_option( 'choose_from_most_used', sprintf( 'Choose from most used %s', strtolower( $plural ) ) );
			$this->set_option( 'no_terms', sprintf( 'No %s', strtolower( $plural ) ) );
			$this->set_option( 'most_used', 'Most Used' );
			$this->set_option( 'back_to_items', sprintf( '&larr; Back to %s', $plural ) );
			$this->set_option( 'no_item', sprintf( 'No %s', strtolower( $singular ) ) );
		}
		return parent::set( $singular, $plural );
	}
}
