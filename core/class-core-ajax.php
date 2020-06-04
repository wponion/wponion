<?php

namespace WPOnion;

use WPOnion\Traits\Self_Instance;

defined( 'ABSPATH' ) || exit;

/**
 * Class Core_Ajax
 *
 * @package WPOnion
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Core_Ajax extends Bridge {
	use Self_Instance;

	/**
	 * Generates Ajax URL.
	 *
	 * @param bool  $action
	 * @param array $args
	 *
	 * @return string
	 */
	public static function url( $action = false, $args = array() ) {
		$args                 = ( ! is_array( $args ) ) ? array() : $args;
		$args['action']       = 'wponion-ajax';
		$args['wponion-ajax'] = $action;
		return add_query_arg( $args, admin_url( 'admin-ajax.php' ) );
	}

	/**
	 * Core_Ajax constructor.
	 */
	public function __construct() {
		/** @uses handle_ajax_request */
		add_action( 'wp_ajax_wponion-ajax', array( &$this, 'handle_ajax_request' ) );
	}

	/**
	 * Handles Ajax Request.
	 */
	public function handle_ajax_request() {
		if ( isset( $_REQUEST['wponion-ajax'] ) && ! empty( $_REQUEST['wponion-ajax'] ) ) {
			wponion_define( 'WPONION_DOING_AJAX', true );
			$action = $_REQUEST['wponion-ajax'];
			$func   = str_replace( '-', '_', sanitize_title( sanitize_text_field( $action ) ) );
			$class  = '\WPOnion\Ajax\\' . strtolower( $func );
			if ( class_exists( $class ) ) {
				new $class();
			} elseif ( method_exists( $this, $func ) ) {
				wponion_callback( array( &$this, $func ) );
			} else {
				wponion_do_deprecated_action( 'wponion_ajax_' . $action, array(), '1.5', "wponion/ajax/request/${action}" );
				do_action( "wponion/ajax/request/${action}" );
			}
		}
		wp_send_json_error();
	}

	/**
	 * Handles Saving Bulk Edit Data.
	 */
	public function save_bulk_edit() {
		if ( isset( $_POST['post_ids'] ) && wponion_is_array( $_POST['post_ids'] ) ) {
			foreach ( $_POST['post_ids'] as $id ) {
				do_action( 'wponion/bulk_edit/save', $id );
			}
		}
	}

	/**
	 * Removes Stick notice if user click remove notice button.
	 */
	public function remove_admin_notice() {
		if ( isset( $_REQUEST['notice_hander'] ) && isset( $_REQUEST['notice_id'] ) && isset( $_REQUEST['wp_nounce'] ) ) {
			$wp_nounce = $_REQUEST['wp_nounce'];
			if ( wp_verify_nonce( $wp_nounce, 'wpo-admin-notice-sticky-remove' ) ) {
				$notice    = $_REQUEST['notice_hander'];
				$notice_id = $_REQUEST['notice_id'];
				$_ins      = wponion_admin_notices( $notice );
				if ( false !== $_ins ) {
					$_ins->remove( $notice_id );
					wp_send_json_success();
				}
			}
		}
		wp_send_json_error();
	}
}

Core_Ajax::instance();
