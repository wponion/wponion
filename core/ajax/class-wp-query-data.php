<?php

namespace WPOnion\Ajax;

use WPOnion\Bridge\Ajax;

defined( 'ABSPATH' ) || exit;

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
		 * Runs Ajax Request.
		 */
		public function run() {
			$options    = $this->validate_post( 'option_type', __( 'Invalid Option Type', 'wponion' ) );
			$query_args = $this->post( 'query_args', array() );
			$search     = $this->post( 'q', '' );
			$search     = $this->post( 's', $search );
			$module     = $this->get_module();
			if ( wponion_is_callable( $options ) ) {
				$data = wponion_callback( $options );
			} else {
				$data = wponion_query( $module->unique(), $module->module() )->query( $options, stripslashes_deep( $query_args ), $search );
			}
			/**
			 * Provides An Option To Filter WP Query Data.
			 *
			 * @var array            $data \WP_Query Request.
			 * @var string           $search User Entered Search Query.
			 * @var array            $query_args Field's Query Args.
			 * @var \WPO\Field|array $field Field's Builder Instance.
			 * @var string           $module Module Slug.
			 */
			$field  = $this->get_field();
			$module = $this->get_module();
			$data   = apply_filters( 'wponion/ajax/query/results', $data, $search, $query_args, $field, $module );
			$this->json_success( array( 'results' => $data ) );
		}
	}
}
