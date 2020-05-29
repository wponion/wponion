<?php

namespace WPOnion\Ajax;

use WPOnion\Bridge\Ajax;

defined( 'ABSPATH' ) || exit;

/**
 * Class Sysinfo_Emailer
 *
 * @package WPOnion\Ajax
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Sysinfo_Emailer extends Ajax {
	protected $validate_module     = false;
	protected $validate_field_path = false;

	/**
	 * Runs Ajax Request.
	 */
	public function run() {
		$data = $this->validate_post( 'wponion_sysinfo', __( 'Unknown Error!', 'wponion' ) );

		if ( isset( $data['developer'] ) && ( empty( $data['developer'] ) || true !== wponion_is_email( $data['developer'] ) ) ) {
			$this->error( __( 'Developer Email Not Found', 'wponion' ), __( 'Unable To Find Plugin\'s Developer Contact.', 'wponion' ) );
		}

		$headers = apply_filters( 'wponion/ajax/sysinfo/emailer', array(
			'From: ' . sanitize_text_field( $data['from_name'] ) . ' <' . sanitize_text_field( $data['from_email'] ) . '>',
			'Reply-To: ' . sanitize_text_field( $data['from_email'] ),
		), $data['developer'] );

		$message = html_entity_decode( $data['message'] );
		$message .= "\r\n\r\n---------------\r\n\r\n";
		$message .= $this->post( 'sysinfo' );
		$sent    = wp_mail( $data['developer'], sanitize_text_field( $data['subject'] ), stripslashes( $message ), $headers );

		if ( $sent ) {
			$this->json_success();
		}
		$this->json_error();
	}
}
