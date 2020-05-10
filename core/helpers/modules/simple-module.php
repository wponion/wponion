<?php

use WPOnion\Modules\Util\Endpoint;
use WPOnion\Modules\Admin\Page_Actions;
use WPOnion\Modules\Admin\Plugin_Links;

defined( 'ABSPATH' ) || exit;

if ( ! function_exists( 'wponion_plugin_links' ) ) {
	/**
	 * @param $plugin_file
	 *
	 * @return \WPOnion\Modules\Admin\Plugin_Links
	 */
	function wponion_plugin_links( $plugin_file ) {
		return new Plugin_Links( $plugin_file );
	}
}

if ( ! function_exists( 'wponion_endpoint' ) ) {
	/**
	 * @param $slug
	 *
	 * @return \WPOnion\Modules\Util\Endpoint
	 */
	function wponion_endpoint( $slug ) {
		return new Endpoint( $slug );
	}
}

if ( ! function_exists( 'wponion_page_actions' ) ) {
	/**
	 * @param       $post_type
	 * @param array $buttons
	 */
	function wponion_page_actions( $post_type, $buttons = array() ) {
		Page_Actions::add( $post_type, $buttons );
	}
}
