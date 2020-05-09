<?php

use WPOnion\Modules\Admin_Bar;

if ( ! function_exists( 'wponion_admin_bar' ) ) {
	/**
	 * @param $admin_bar_menus
	 *
	 * @return \WPOnion\Modules\Admin_Bar
	 */
	function wponion_admin_bar( $admin_bar_menus ) {
		return new Admin_Bar( $admin_bar_menus );
	}
}
