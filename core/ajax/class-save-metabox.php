<?php

namespace WPOnion\Ajax;

use WPOnion\Bridge\Ajax;
use WPOnion\Modules\Metabox\Metabox;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Ajax\Save_Metabox' ) ) {
	/**
	 * Class Save_Metabox
	 *
	 * @package WPOnion\Ajax
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Save_Metabox extends Ajax {
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
			$unique  = sanitize_text_field( $this->validate_post( 'unique', __( 'Invalid Metabox' ) ) );
			$post_id = sanitize_text_field( $this->validate_post( 'wponion_postid', __( 'Invalid Post ID' ) ) );
			$metabox = wponion_metabox_registry( $unique );

			if ( $metabox instanceof Metabox ) {
				wponion_catch_output( true );
				wponion_localize();
				$metabox->set_id( $post_id );
				$metabox->save_metabox( $post_id );
				do_action( 'wponion_metabox_ajax_before_render', $unique );
				$metabox->on_page_load();
				$metabox->render( $post_id );
				do_action( 'wponion_metabox_ajax_render', $unique );
				$this->json_success( wponion_catch_output( false ) . ' ' . $this->localizer() );
			}

			$this->error( __( 'Metabox Not Found' ), __( 'Unable To Find The Metabox' ) );
		}
	}
}
