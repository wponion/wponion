<?php

namespace WPOnion\Ajax;

use WPOnion\Bridge\Ajax;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Ajax\Sysinfo_Emailer' ) ) {
	/**
	 * Class Sysinfo_Emailer
	 *
	 * @package WPOnion\Ajax
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Sysinfo_Emailer extends Ajax {
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
			$data = $this->validate_post( 'wponion_sysinfo', __( 'Unknown Error!', 'wponion' ) );

			if ( isset( $data['developer'] ) && ( empty( $data['developer'] ) || true !== wponion_is_email( $data['developer'] ) ) ) {
				$this->error( __( 'Developer Email Not Found', 'wponion' ), __( 'Unable To Find Plugin\'s Developer Contact.', 'wponion' ) );
			}

			$headers = array(
				'From: ' . sanitize_text_field( $data['from_name'] ) . ' <' . sanitize_text_field( $data['from_email'] ) . '>',
				'Reply-To: ' . sanitize_text_field( $data['from_email'] ),
			);

			$message = html_entity_decode( $data['message'] );
			$message .= "\r\n\r\n---------------\r\n\r\n";
			$message .= $_POST['sysinfo'];

			$sent = wp_mail( $data['developer'], sanitize_text_field( $data['subject'] ), stripslashes( $message ), $headers );

			if ( $sent ) {
				$this->json_success();
			}
			$this->json_error();
		}
	}
}
