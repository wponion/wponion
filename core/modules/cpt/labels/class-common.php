<?php

namespace WPOnion\Modules\CPT\Labels;

use WPOnion\Traits\Class_Options;
use WPOnion\Traits\Magic_Methods\Options;

defined( 'ABSPATH' ) || exit;

/**
 * Class Common
 *
 * @package WPOnion\Modules\CPT\Labels
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 *
 * @method $this name( $label );
 * @method $this singular_name( $label );
 * @method $this menu_name( $label );
 * @method $this all_items( $label );
 * @method $this parent_item_colon( $label );
 * @method $this add_new_item( $label );
 * @method $this edit_item( $label );
 * @method $this update_item( $label );
 * @method $this view_item( $label );
 * @method $this search_items( $label );
 * @method $this not_found( $label );
 * @method $this items_list( $label );
 * @method $this items_list_navigation( $label );
 */
abstract class Common {
	use Class_Options;
	use Options;

	/**
	 * Common constructor.
	 *
	 * @param string|array $singular
	 * @param bool         $plural
	 */
	public function __construct( $singular = '', $plural = false ) {
		if ( is_array( $singular ) ) {
			$this->settings = $singular;
		} else {
			$this->set( $singular, $plural );
		}
	}

	/**
	 * @param $singular
	 * @param $plural
	 *
	 * @return $this
	 */
	public function set( $singular, $plural ) {
		if ( ! empty( $singular ) && ! empty( $plural ) ) {
			$this->set_option( 'name', $plural );
			$this->set_option( 'singular_name', $singular );
			$this->set_option( 'menu_name', $plural );
			$this->set_option( 'add_new_item', sprintf( 'Add New %s', $singular ) );
			$this->set_option( 'edit_item', sprintf( 'Edit %s', $singular ) );
			$this->set_option( 'view_item', sprintf( 'View %s', $singular ) );
			$this->set_option( 'search_items', sprintf( 'Search %s', $plural ) );
			$this->set_option( 'not_found', sprintf( 'No %s found.', strtolower( $plural ) ) );
			$this->set_option( 'parent_item_colon', sprintf( 'Parent %s:', $singular ) );
			$this->set_option( 'all_items', sprintf( 'All %s', $plural ) );
			$this->set_option( 'items_list_navigation', sprintf( '%s list navigation', $plural ) );
			$this->set_option( 'items_list', sprintf( '%s list', $plural ) );
		}
		return $this;
	}

	/**
	 * @param $name
	 * @param $arguments
	 *
	 * @return bool|$this
	 */
	public function __call( $name, $arguments ) {
		return $this->option( $name, $arguments[0] );
	}
}
