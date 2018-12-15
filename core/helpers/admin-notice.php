<?php
/**
 * Created by PhpStorm.
 * User: varun
 * Date: 28-11-2018
 * Time: 05:57 PM
 */

if ( ! function_exists( 'wponion_admin_notice' ) ) {
	/**
	 * Creates a new Instance of WPOnion Admin Notice.
	 *
	 * @param       $type
	 * @param       $content
	 * @param       $title
	 * @param array $args
	 *
	 * @return \WPOnion\Modules\Admin_Notice
	 */
	function wponion_admin_notice( $type, $content, $title, $args = array() ) {
		$args = wp_parse_args( $args, array(
			'title'   => $title,
			'content' => $content,
			'type'    => $type,
		) );
		return new \WPOnion\Modules\Admin_Notice( $args );
	}
}

if ( ! function_exists( 'wponion_success_admin_notice' ) ) {
	/**
	 * @param string $content
	 * @param string $title
	 * @param array  $args
	 *
	 * @return \WPOnion\Modules\Admin_Notice
	 */
	function wponion_success_admin_notice( $content = '', $title = '', $args = array() ) {
		return wponion_admin_notice( 'success', $content, $title, $args );
	}
}

if ( ! function_exists( 'wponion_info_admin_notice' ) ) {
	/**
	 * @param string $content
	 * @param string $title
	 * @param array  $args
	 *
	 * @return \WPOnion\Modules\Admin_Notice
	 */
	function wponion_info_admin_notice( $content = '', $title = '', $args = array() ) {
		return wponion_admin_notice( 'info', $content, $title, $args );
	}
}

if ( ! function_exists( 'wponion_error_admin_notice' ) ) {
	/**
	 * @param string $content
	 * @param string $title
	 * @param array  $args
	 *
	 * @return \WPOnion\Modules\Admin_Notice
	 */
	function wponion_error_admin_notice( $content = '', $title = '', $args = array() ) {
		return wponion_admin_notice( 'error', $content, $title, $args );
	}
}

if ( ! function_exists( 'wponion_warning_admin_notice' ) ) {
	/**
	 * @param string $content
	 * @param string $title
	 * @param array  $args
	 *
	 * @return \WPOnion\Modules\Admin_Notice
	 */
	function wponion_warning_admin_notice( $content = '', $title = '', $args = array() ) {
		return wponion_admin_notice( 'warning', $content, $title, $args );
	}
}

if ( ! function_exists( 'wponion_upgrade_admin_notice' ) ) {

	function wponion_upgrade_admin_notice( $content = '', $title = '', $args = array() ) {
		return wponion_admin_notice( 'update-nag', $content, $title, $args );
	}
}
