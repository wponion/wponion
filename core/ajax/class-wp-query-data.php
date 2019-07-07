<?php

namespace WPOnion\Ajax;

use WPOnion\Bridge\Ajax;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Ajax\WP_Query_Data' ) ) {
	/**
	 * Class WP_Query_Data
	 *
	 * @package WPOnion\Ajax
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class WP_Query_Data extends Ajax {
		public function run() {
			$field      = $this->get_field();
			$query_args = ( isset( $field['query_args'] ) ) ? $field['query_args'] : array();
			$options    = ( isset( $field['options'] ) ) ? $field['options'] : false;
			$search     = $this->post( 'q', '' );
			$search     = $this->post( 's', $search );
			$data       = ( wponion_is_callable( $options ) ) ? wponion_callback( $options ) : wponion_query()->query( $options, $query_args, $search );
			$this->json_success( array( 'results' => $data ) );
		}
	}
}
