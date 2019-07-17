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

		/**
		 * Runs Ajax.
		 */
		public function run() {
			$options    = $this->validate_post( 'option_type', __( 'Invalid Option Type', 'wponion' ) );
			$query_args = $this->post( 'query_args', array() );
			$search     = $this->post( 'q', '' );
			$search     = $this->post( 's', $search );
			$data       = ( wponion_is_callable( $options ) ) ? wponion_callback( $options ) : wponion_query()->query( $options, $query_args, $search );
			$this->json_success( array( 'results' => $data ) );
		}
	}
}
