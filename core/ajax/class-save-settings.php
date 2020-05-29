<?php

namespace WPOnion\Ajax;

use WPOnion\Bridge\Ajax;
use WPOnion\Modules\Settings\Network;
use WPOnion\Modules\Settings\Settings;

defined( 'ABSPATH' ) || exit;

/**
 * Class Save_Settings
 *
 * @package WPOnion\Ajax
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Save_Settings extends Ajax {
	protected $validate_module     = false;
	protected $validate_field_path = false;

	/**
	 * Runs Ajax Request.
	 */
	public function run() {
		$this->add_assets = true;
		$cheating         = __( 'Cheatin&#8217; uh?', 'wponion' );
		$option_page      = $_REQUEST['option_page'];
		$settings         = wponion_settings( $option_page );

		if ( ! $settings instanceof Settings && ! $settings instanceof Network ) {
			$this->json_error();
		}

		$saved = $this->post( $option_page, false );

		if ( ! empty( $saved ) && is_array( $saved ) ) {
			$saved   = stripslashes_deep( $_REQUEST[ $option_page ] );
			$network = isset( $_REQUEST['network_wide'] ) && $_REQUEST['network_wide'];
			$cap     = apply_filters( "option_page_capability_{$option_page}", 'manage_options' );

			if ( ! wp_verify_nonce( $_REQUEST['_wpnonce'], $option_page . '-options' ) || ( $network && ! is_super_admin() ) || ! current_user_can( $cap ) ) {
				$this->json_error( $cheating );
			}

			$whitelist_options = apply_filters( 'whitelist_options', array() );
			$options           = $whitelist_options[ $option_page ];

			if ( empty( $options[0] ) || $options[0] !== $option_page ) {
				$this->json_error( __( 'You can\'t do that!', 'wponion' ) );
			}

			if ( $network ) {
				update_site_option( $option_page, $saved );
			} else {
				update_option( $option_page, $saved );
			}
		}

		wponion_catch_output( true );
		$settings->reload_cache()->reload_values();
		$settings->on_settings_page_load();
		$settings->render();
		$form = wponion_catch_output( false );
		$this->json_success( array( 'form' => '<div>' . $form . '</div>' ) );
	}
}
