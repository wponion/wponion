<?php
if ( ! function_exists( 'wponion_nav_menu_registry' ) ) {
	/**
	 * @param $instance
	 *
	 * @return bool|\WPOnion\Modules\Nav_Menu
	 */
	function wponion_nav_menu_registry( &$instance ) {
		return wponion_get_registry_instance( 'nav_menu', $instance, 'module' );
	}
}

if ( ! function_exists( 'wponion_nav_menu' ) ) {
	/**
	 * @param array              $settings
	 * @param array|\WPO\Builder $fields
	 *
	 * @return \WPOnion\Modules\Nav_Menu
	 */
	function wponion_nav_menu( $settings = array(), $fields = array() ) {
		if ( is_string( $settings ) && empty( $fields ) ) {
			return wponion_nav_menu_registry( $settings );
		}
		return new \WPOnion\Modules\Nav_Menu( $settings, $fields );
	}
}
