<?php

use WPOnion\Modules\Admin\Notice\Notice;
use WPOnion\Modules\Admin\Notice\Handler;

if ( ! function_exists( 'wponion_admin_notices_registry' ) ) {
	/**
	 * @param $instance
	 *
	 * @return bool
	 */
	function wponion_admin_notices_registry( &$instance ) {
		return wponion_get_registry_instance( 'admin_notices', $instance, 'module' );
	}
}

if ( ! function_exists( 'wponion_admin_notices' ) ) {
	/**
	 * @param array $instance_id_or_args
	 *
	 * @return bool|\WPOnion\Modules\Admin\Notice\Handler
	 */
	function wponion_admin_notices( $instance_id_or_args = array() ) {
		if ( is_scalar( $instance_id_or_args ) ) {
			return wponion_admin_notices_registry( $instance_id_or_args );
		} elseif ( empty( $instance_id_or_args ) ) {
			$instance_id_or_args = '_wponion_admin_notices';
			$instance            = wponion_admin_notices_registry( $instance_id_or_args );
			if ( $instance ) {
				return $instance;
			}
		}
		return new Handler( $instance_id_or_args );
	}
}

if ( ! function_exists( 'wponion_admin_notice' ) ) {
	/**
	 * Creates a new Instance of WPOnion Admin Notice.
	 *
	 * @param       $type
	 * @param       $content
	 * @param       $title
	 * @param array $args
	 *
	 * @return \WPOnion\Modules\Admin\Notice\Notice
	 */
	function wponion_admin_notice( $type, $content, $title, $args = array() ) {
		$args = wp_parse_args( $args, array(
			'title'   => $title,
			'content' => $content,
			'type'    => $type,
		) );
		return new Notice( $args );
	}
}

if ( ! function_exists( 'wponion_success_admin_notice' ) ) {
	/**
	 * @param string $content
	 * @param string $title
	 * @param array  $args
	 *
	 * @return \WPOnion\Modules\Admin\Notice\Notice
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
	 * @return \WPOnion\Modules\Admin\Notice\Notice
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
	 * @return \WPOnion\Modules\Admin\Notice\Notice
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
	 * @return \WPOnion\Modules\Admin\Notice\Notice
	 */
	function wponion_warning_admin_notice( $content = '', $title = '', $args = array() ) {
		return wponion_admin_notice( 'warning', $content, $title, $args );
	}
}

if ( ! function_exists( 'wponion_upgrade_admin_notice' ) ) {
	/**
	 * @param string $content
	 * @param string $title
	 * @param array  $args
	 *
	 * @return \WPOnion\Modules\Admin\Notice\Notice
	 */
	function wponion_upgrade_admin_notice( $content = '', $title = '', $args = array() ) {
		return wponion_admin_notice( 'update-nag', $content, $title, $args );
	}
}
