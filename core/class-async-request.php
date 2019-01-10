<?php
/**
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

namespace WPOnion;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Async_Request' ) ) {

	if ( ! class_exists( '\WP_Async_Request' ) ) {
		include_once WPONION_PATH . 'core/vendors/A5hleyRich/wp-async-request.php';
	}

	/**
	 * Class Async_Request
	 *
	 * @package WPOnion
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Async_Request extends \WP_Async_Request {
		protected $action = 'wponion_async';

		/**
		 * Handles ASync Request.
		 */
		protected function handle() {
			if ( isset( $_POST['type'] ) ) {
				if ( 'settings_default_save' === sanitize_text_field( $_POST['type'] ) ) {
					$this->handle_default_settings_save();
				}
			}
		}

		/**
		 * Handles Saving Settings Default Values.
		 */
		protected function handle_default_settings_save() {
			$plugin_id = ( isset( $_REQUEST['plugin_id'] ) ) ? sanitize_text_field( $_REQUEST['plugin_id'] ) : false;
			if ( false !== $plugin_id ) {
				$instance = wponion_settings( $plugin_id );
				if ( false !== $instance ) {
					$instance->force_set_defaults( true );
				}
			}
		}
	}
}

return wponion_async();
