<?php

namespace WPOnion\Ajax;

use WPOnion\Bridge\Ajax;
use WPOnion\Modules\Metabox\Metabox;

defined( 'ABSPATH' ) || exit;

/**
 * Class Save_Metabox
 *
 * @package WPOnion\Ajax
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Save_Metabox extends Ajax {
	protected $validate_module     = false;
	protected $validate_field_path = false;

	/**
	 * Runs Ajax Request.
	 */
	public function run() {
		$this->add_assets = true;
		$unique           = sanitize_text_field( $this->validate_post( 'unique', __( 'Invalid Metabox', 'wponion' ) ) );
		$post_id          = sanitize_text_field( $this->validate_post( 'wponion_postid', __( 'Invalid Post ID', 'wponion' ) ) );
		$metabox          = wponion_metabox_registry( $unique );

		if ( $metabox instanceof Metabox ) {
			wponion_catch_output( true );
			wponion_localize();
			$metabox->set_id( $post_id );
			$metabox->save_metabox( $post_id );
			do_action( 'wponion/ajax/metabox/render/before', $unique );
			$metabox->on_page_load();
			$metabox->render( $post_id );
			do_action( 'wponion/ajax/metabox/render/after', $unique );
			$this->json_success( array( 'html' => wponion_catch_output( false ) ) );
		}
		$this->error( __( 'Metabox Not Found', 'wponion' ), __( 'Unable To Find The Metabox', 'wponion' ) );
	}
}
