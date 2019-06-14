<?php
/**
 *
 * Initial version created 18-05-2018 / 06:26 AM
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @package
 * @link
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

namespace WPOnion;

use WPOnion\Modules\Settings\Network;
use WPOnion\Modules\Settings\Settings;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Core_Ajax' ) ) {
	/**
	 * Class Core_Ajax
	 *
	 * @package WPOnion
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Core_Ajax extends Bridge {
		/**
		 * Core_Ajax constructor.
		 */
		public function __construct() {
			add_action( 'wp_ajax_wponion-ajax', array( &$this, 'handle_ajax_request' ) );
		}

		/**
		 * Handles Ajax Request.
		 */
		public function handle_ajax_request() {
			if ( isset( $_REQUEST['wponion-ajax'] ) && ! empty( $_REQUEST['wponion-ajax'] ) ) {
				defined( 'WPONION_DOING_AJAX' ) || define( 'WPONION_DOING_AJAX', true );
				$function = str_replace( '-', '_', sanitize_title( sanitize_text_field( $_REQUEST['wponion-ajax'] ) ) );
				if ( class_exists( '\WPOnion\Ajax\\' . strtolower( $function ) ) ) {
					$class = '\wponion\ajax\\' . strtolower( $function );
					new $class();
				} elseif ( method_exists( $this, $function ) ) {
					wponion_callback( array( &$this, $function ) );
				} else {
					do_action( 'wponion_ajax_' . $_REQUEST['wponion-ajax'] );
				}
			}
			wp_die();
		}

		/**
		 * Handles Ajax Metabox Save.
		 */
		public function save_metabox() {
			if ( isset( $_REQUEST['metabox_id'] ) ) {
				wponion_localize();
				$unique       = sanitize_text_field( $_REQUEST['unique'] );
				$this->module = 'metabox';
				$instance     = wponion_metabox_registry( $unique );
				$post_id      = sanitize_text_field( $_REQUEST['wponion_postid'] );
				if ( $instance ) {
					$instance->set_id( $post_id );
					$instance->save_metabox( $post_id );
					do_action( 'wponion_metabox_ajax_before_render', $unique );
					$instance->on_page_load();
					$instance->render( $post_id );
					do_action( 'wponion_metabox_ajax_render', $unique );
				}
			}
		}

		/**
		 * Generates Oembed Preview.
		 */
		public function oembed_preview() {
			$args  = array( 'width' => 360 );
			$embed = wp_oembed_get( $_REQUEST['value'], $args );

			if ( ! $embed ) {
				global $wp_embed;
				$wp_embed->return_false_on_fail = true; // Do not fallback to make a link.
				$embed                          = $wp_embed->shortcode( $args, $_REQUEST['value'] );
			}
			( $embed ) ? wp_send_json_success( $embed ) : wp_send_json_error();
		}

		/**
		 * Handles Saving Bulk Edit Data.
		 */
		public function save_bulk_edit() {
			if ( isset( $_POST['post_ids'] ) && wponion_is_array( $_POST['post_ids'] ) ) {
				foreach ( $_POST['post_ids'] as $id ) {
					do_action( 'wponion_save_bulk_edit', $id );
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

		/**
		 * Handles Ajax Data Query.
		 */
		public function ajax_wp_query_data() {
			$query_args    = ( isset( $_REQUEST['query_args'] ) ) ? $_REQUEST['query_args'] : array();
			$search        = ( isset( $_REQUEST['q'] ) ) ? $_REQUEST['q'] : '';
			$search        = ( isset( $_REQUEST['s'] ) ) ? $_REQUEST['s'] : $search;
			$query_options = ( isset( $_REQUEST['query_options'] ) ) ? $_REQUEST['query_options'] : false;
			$data          = ( wponion_is_callable( $query_options ) ) ? wponion_callback( $query_options ) : wponion_query()->query( $query_options, $query_args, $search );
			wp_send_json( $data );
			wp_die();
		}

		/**
		 * Ajax Save Settings Option.
		 */
		public function save_settings() {
			$option_page = $_REQUEST['option_page'];
			$settings    = wponion_settings( $option_page );

			if ( ! $settings instanceof Settings && ! $settings instanceof Network ) {
				wp_send_json_error();
			}

			$to_be_saved     = $_REQUEST[ $option_page ];
			$is_network_wide = isset( $_REQUEST['network_wide'] ) && $_REQUEST['network_wide'];

			if ( ! wp_verify_nonce( $_REQUEST['_wpnonce'], $option_page . '-options' ) ) {
				wp_send_json_error( __( 'Cheatin&#8217; uh?', 'wponion' ) );
			}

			if ( $is_network_wide && ! is_super_admin() ) {
				wp_send_json_error( __( 'Cheatin&#8217; uh?', 'wponion' ) );
			}

			$capability = apply_filters( "option_page_capability_{$option_page}", 'manage_options' );
			if ( ! current_user_can( $capability ) ) {
				wp_send_json_error( __( 'Cheatin&#8217; uh?', 'wponion' ) );
			}

			$whitelist_options = apply_filters( 'whitelist_options', array() );
			$options           = $whitelist_options[ $option_page ];
			if ( empty( $options[0] ) || $options[0] !== $option_page ) {
				wp_send_json_error( "You can't do that!" );
			}

			if ( $is_network_wide ) {
				update_site_option( $option_page, $to_be_saved );
			} else {
				update_option( $option_page, $to_be_saved );
			}

			$this->catch_output();
			$settings->reload_cache()
				->reload_values();
			$settings->on_settings_page_load();
			$settings->render();
			$form = $this->catch_output( 'stop' );
			$this->catch_output();
			wponion_localize()->render_js_args();
			$script = $this->catch_output( 'stop' );
			wp_send_json_success( array(
				'form'   => '<div>' . $form . '</div>',
				'script' => $script,
			) );
		}

		/**
		 * System Information Emailer.
		 */
		public function sysinfo_emailer() {
			if ( ! isset( $_POST['wponion_sysinfo'] ) ) {
				wp_send_json_error( __( 'Unknown Error' ) );
			}
			$data    = $_POST['wponion_sysinfo'];
			$headers = array(
				'From: ' . sanitize_text_field( $data['from_name'] ) . ' <' . sanitize_text_field( $data['from_email'] ) . '>',
				'Reply-To: ' . sanitize_text_field( $data['from_email'] ),
			);

			$message = $data['message'];
			$message .= "\r\n\r\n---------------\r\n\r\n";
			$message .= $_POST['sysinfo'];

			$sent = wp_mail( $data['developer'], sanitize_text_field( $data['subject'] ), stripslashes( $message ), $headers );

			if ( $sent ) {
				wp_send_json_success();
			}
			wp_send_json_error();
		}

		public function modal_popup_fields() {
			$field_path = ( isset( $_POST['field_path'] ) ) ? $_POST['field_path'] : false;
			$unique     = ( isset( $_POST['unique'] ) ) ? $_POST['unique'] : false;
			$module     = ( isset( $_POST['module'] ) ) ? $_POST['module'] : false;

			if ( empty( $field_path ) || empty( $unique ) || empty( $module ) ) {
				wp_send_json_error();
			}
			$field_path = explode( '/', $field_path );
			$base       = array_shift( $field_path );
			$field_path = implode( '/', $field_path );
			if ( empty( $base ) ) {
				wp_send_json_error();
			}

			$function     = 'wponion_' . $module;
			$val_function = 'wpo_' . $module;

			if ( ! function_exists( $function ) || ! function_exists( $val_function ) ) {
				wp_send_json_error();
			}

			/**
			 * @var \WPOnion\Bridge\Module $module
			 * @var \WPO\Field             $field
			 * @var \WPOnion\DB\Option     $val_function
			 */
			$module = $function( $base );
			$field  = $module->fields()
				->get( $field_path );
			$values = $val_function( $base )->get( $unique . '/' . $field->get_id() );
			$field->only_field( true );

			if ( ! empty( $field ) ) {
				echo $field->render( $values, $unique );
			}
			exit;
		}
	}
}
return new Core_Ajax;
