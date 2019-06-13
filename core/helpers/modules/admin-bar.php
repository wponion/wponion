<?php
if ( ! function_exists( 'wponion_admin_bar' ) ) {
	/**
	 * @param $admin_bar_menus
	 *
	 * @return \WPOnion\Modules\Admin_Bar
	 */
	function wponion_admin_bar( $admin_bar_menus ) {
		return new \WPOnion\Modules\Admin_Bar( $admin_bar_menus );
	}
}
