<?php
/**
 *
 * Project : wponion
 * Date : 24-11-2018
 * Time : 11:56 AM
 * File : class-wp-nav-menu-walker.php
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @package wponion
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

namespace WPOnion;
if ( ! class_exists( '\WPOnion\WP_Nav_Menu_Walker' ) ) {
	/**
	 * Class WP_Nav_Menu_Walker
	 *
	 * @package WPOnion
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class WP_Nav_Menu_Walker extends \Walker_Nav_Menu_Edit {
		/**
		 * Start the element output.
		 *
		 * We're injecting our custom fields after the div.submitbox
		 *
		 * @see Walker_Nav_Menu::start_el()
		 * @since 0.1.0
		 * @since 0.2.0 Update regex pattern to support WordPress 4.7's markup.
		 *
		 * @param string $output Passed by reference. Used to append additional content.
		 * @param object $item Menu item data object.
		 * @param int    $depth Depth of menu item. Used for padding.
		 * @param array  $args Menu item args.
		 * @param int    $id Nav menu ID.
		 *
		 * //@todo NOTE: Check this regex from time to time!
		 * @
		 */
		function start_el( &$output, $item, $depth = 0, $args = array(), $id = 0 ) {
			$item_output = '';
			parent::start_el( $item_output, $item, $depth, $args, $id );
			$output .= preg_replace( '/(?=<(fieldset|p)[^>]+class="[^"]*field-move)/', $this->get_fields( $item, $depth, $args ), $item_output );
		}

		/**
		 * Get custom fields
		 *
		 * @access protected
		 * @since 0.1.0
		 * @uses add_action() Calls 'menu_item_custom_fields' hook
		 *
		 * @param object $item Menu item data object.
		 * @param int    $depth Depth of menu item. Used for padding.
		 * @param array  $args Menu item args.
		 * @param int    $id Nav menu ID.
		 *
		 * @return string Form fields
		 */
		protected function get_fields( $item, $depth, $args = array(), $id = 0 ) {
			ob_start();
			/**
			 * Get menu item custom fields from plugins/themes
			 *
			 * @since 0.1.0
			 * @since 1.0.0 Pass correct parameters.
			 *
			 * @param int    $item_id Menu item ID.
			 * @param object $item Menu item data object.
			 * @param int    $depth Depth of menu item. Used for padding.
			 * @param array  $args Menu item args.
			 * @param int    $id Nav menu ID.
			 *
			 * @return string Custom fields HTML.
			 */
			do_action( 'wp_nav_menu_item_custom_fields', $item->ID, $item, $depth, $args, $id );
			return ob_get_clean();
		}
	}
}
