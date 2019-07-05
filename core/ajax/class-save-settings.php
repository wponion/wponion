<?php

namespace WPOnion\Ajax;

use WPOnion\Bridge\Ajax;
use WPOnion\Modules\Metabox\Metabox;
use WPOnion\Modules\Settings\Network;
use WPOnion\Modules\Settings\Settings;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Ajax\Save_Settings' ) ) {
	/**
	 * Class Save_Settings
	 *
	 * @package WPOnion\Ajax
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Save_Settings extends Ajax {
		/**
		 * @var bool
		 * @access
		 */
		protected $validate_module = false;

		/**
		 * @var bool
		 * @access
		 */
		protected $validate_field_path = false;

		public function run() {
			$option_page = $_REQUEST['option_page'];
			$settings    = wponion_settings( $option_page );

			if ( ! $settings instanceof Settings && ! $settings instanceof Network ) {
				$this->json_error();
			}

			$to_be_saved = $this->post( $option_page, false );

			if ( ! empty( $to_be_saved ) && is_array( $to_be_saved ) ) {
				$to_be_saved     = stripslashes_deep( $_REQUEST[ $option_page ] );
				$is_network_wide = isset( $_REQUEST['network_wide'] ) && $_REQUEST['network_wide'];

				if ( ! wp_verify_nonce( $_REQUEST['_wpnonce'], $option_page . '-options' ) ) {
					$this->json_error( __( 'Cheatin&#8217; uh?', 'wponion' ) );
				}

				if ( $is_network_wide && ! is_super_admin() ) {
					$this->json_error( __( 'Cheatin&#8217; uh?', 'wponion' ) );
				}

				$capability = apply_filters( "option_page_capability_{$option_page}", 'manage_options' );
				if ( ! current_user_can( $capability ) ) {
					$this->json_error( __( 'Cheatin&#8217; uh?', 'wponion' ) );
				}

				$whitelist_options = apply_filters( 'whitelist_options', array() );
				$options           = $whitelist_options[ $option_page ];
				if ( empty( $options[0] ) || $options[0] !== $option_page ) {
					$this->json_error( __( 'You can\'t do that!', 'wponion' ) );
				}

				if ( $is_network_wide ) {
					update_site_option( $option_page, $to_be_saved );
				} else {
					update_option( $option_page, $to_be_saved );
				}
			}

			wponion_catch_output( true );
			$settings->reload_cache()
				->reload_values();
			$settings->on_settings_page_load();
			$settings->render();
			$form = wponion_catch_output( false );
			$this->json_success( array( 'form' => '<div>' . $form . '</div>' ) );
		}
	}
}
