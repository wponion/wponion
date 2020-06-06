<?php

namespace WPOnion\WP\Nav_Menu;

use Walker_Nav_Menu_Edit;

defined( 'ABSPATH' ) || exit;

/**
 * Class Walker
 *
 * @package WPOnion\WP\Nav_Menu
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Walker extends Walker_Nav_Menu_Edit {
	/**
	 * @param string   $output
	 * @param \WP_Post $item
	 * @param int      $depth
	 * @param array    $args
	 * @param int      $id
	 */
	public function start_el( &$output, $item, $depth = 0, $args = array(), $id = 0 ) {
		$item_output = '';
		parent::start_el( $item_output, $item, $depth, $args, $id );
		$output .= preg_replace( '/(?=<(fieldset|p)[^>]+class="[^"]*field-move)/', $this->get_fields( $item, $depth, $args ), $item_output );
	}

	/**
	 * @param \WP_Post $item
	 * @param int      $depth
	 * @param array    $args
	 * @param int      $id
	 *
	 * @return string
	 */
	protected function get_fields( $item, $depth, $args = array(), $id = 0 ) {
		wponion_catch_output();
		do_action( 'wp_nav_menu_item_custom_fields', $item->ID, $item, $depth, $args, $id );
		return wponion_catch_output( false );
	}
}
