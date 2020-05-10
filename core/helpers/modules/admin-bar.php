<?php

use WPOnion\Modules\Admin\Admin_Bar;

if ( ! function_exists( 'wponion_admin_bar' ) ) {
	/**
	 * @param $menus
	 *
	 * @return \WPOnion\Modules\Admin\Admin_Bar
	 */
	function wponion_admin_bar( $menus ) {
		return new Admin_Bar( $menus );
	}
}
