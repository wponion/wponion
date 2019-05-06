<?php

if ( ! function_exists( 'wponion_plugin_links' ) ) {
	/**
	 * @param $plugin_file
	 *
	 * @return \WPOnion\Modules\Plugin_Links
	 */
	function wponion_plugin_links( $plugin_file ) {
		return new \WPOnion\Modules\Plugin_Links( $plugin_file );
	}
}
