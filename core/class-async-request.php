<?php
/**
 *
 * Initial version created 07-05-2018 / 07:32 PM
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @package
 * @link
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( 'WPOnion_Async_Request' ) ) {

	if ( ! class_exists( 'WP_Async_Request' ) ) {
		$dir = WPONION_PATH . 'core/vendors/A5hleyRich/';
		include_once $dir . 'wp-async-request.php';
	}

	/**
	 * Class WPOnion_Async_Request
	 *
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class WPOnion_Async_Request extends WP_Async_Request {
		protected $action = 'wponion_async';

		/**
		 * Handles ASync Request.
		 */
		protected function handle() {
			if ( isset( $_POST['type'] ) ) {
				if ( 'settings_default_save' === $_POST['type'] ) {
					$this->handle_default_settings_save();
				}
			}
		}

		/**
		 * Handles Saving Settings Default Values.
		 */
		protected function handle_default_settings_save() {
			$plugin_id = ( isset( $_REQUEST['plugin_id'] ) ) ? $_REQUEST['plugin_id'] : false;
			if ( false !== $plugin_id ) {
				$instance = wponion_settings_registry( $plugin_id );
				if ( false !== $instance ) {
					$instance->force_set_defaults( true );
				}
			}
		}
	}
}

return wponion_async();
