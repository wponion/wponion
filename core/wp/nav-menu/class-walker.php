<?php

namespace WPOnion\WP\Nav_Menu;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\WP\Nav_Menu\Walker' ) ) {
	/**
	 * Class Walker
	 *
	 * @package WPOnion\WP\Nav_Menu
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Walker extends \Walker_Nav_Menu_Edit {
		/**
		 * @param string $output
		 * @param object $item
		 * @param int    $depth
		 * @param array  $args
		 * @param int    $id
		 *
		 * @see Walker_Nav_Menu::start_el()
		 *
		 * @todo NOTE: Check this regex from time to time!
		 */
		function start_el( &$output, $item, $depth = 0, $args = array(), $id = 0 ) {
			$item_output = '';
			parent::start_el( $item_output, $item, $depth, $args, $id );
			$output .= preg_replace( '/(?=<(fieldset|p)[^>]+class="[^"]*field-move)/', $this->get_fields( $item, $depth, $args ), $item_output );
		}

		/**
		 * @param       $item
		 * @param       $depth
		 * @param array $args
		 * @param int   $id
		 *
		 * @return string Form fields
		 * @uses add_action() Calls 'menu_item_custom_fields' hook
		 */
		protected function get_fields( $item, $depth, $args = array(), $id = 0 ) {
			ob_start();
			do_action( 'wp_nav_menu_item_custom_fields', $item->ID, $item, $depth, $args, $id );
			return ob_get_clean();
		}
	}
}
