<?php

namespace WPOnion\Ajax;

use WPOnion\Bridge\Ajax;
use WPOnion\Field\Modal;
use WPOnion\Helper;

defined( 'ABSPATH' ) || exit;

/**
 * Class Modal_Fields
 *
 * @package WPOnion\Ajax
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Modal_Fields extends Ajax {
	/**
	 * Runs Ajax Request.
	 */
	public function run() {
		/* @var \WPO\Field $field */
		$this->validate_post( 'unique', __( 'Unique Key Not Found', 'wponion' ) );
		$modal_action = $this->validate_post( 'modal_action', __( 'Modal Action Not Found', 'wponion' ) );
		$this->get_module();

		switch ( $modal_action ) {
			case 'featch_fields':
				$this->fetch_fields();
				break;
			case 'save_fields':
				$this->save_fields();
				break;
		}

	}

	/**
	 * Saves Modal Fields.
	 */
	public function save_fields() {
		$field     = $this->get_field();
		$module    = $this->get_module();
		$field_key = ( wponion_is_unarrayed( $field ) ) ? $this->post( 'unique' ) : $this->post( 'unique' ) . '/' . $field['id'];
		$values    = $this->post( $field_key );
		$db_values = $module->get_db_values();
		$field_id  = explode( '/', $this->post( 'unique' ) );

		if ( wponion_is_unarrayed( $field ) ) {
			$field['id'] = end( $field_id );
		} else {
			array_shift( $field_id );
			$field['id'] = end( $field_id );
		}

		$module->set_db_cache( array(
			'container_id'     => $this->builder_path( 'container_id' ),
			'sub_container_id' => $this->builder_path( 'sub_container_id' ),
		) );

		if ( wpo_is_option( $db_values ) ) {
			$db_values->set( $field_key, $values )->save();
			$this->json_success();
		}
		$this->json_error();
	}

	/**
	 * Fetches Fields Data For Current Modal.
	 */
	public function fetch_fields() {
		$unique    = $this->post( 'unique' );
		$field     = $this->get_field();
		$module    = $this->get_module();
		$field_key = ( wponion_is_unarrayed( $field ) ) ? $unique : $unique . '/' . $field['id'];
		$values    = $module->get_db_values()->get( $field_key );
		$field->only_field( true );
		$data = $field->init_field( $values, array(
			'unique' => $unique,
			'module' => $this->post( 'module' ),
			'hash'   => implode( '/', $this->builder_path() ),
		) );
		if ( $data instanceof Modal ) {
			$data = array(
				'html' => ( isset( $field['modal_type'] ) && 'wp' === $field['modal_type'] ) ? $data->wp() : $data->swal(),
			);
			$this->json_success( $data );
		} else {
			$this->json_error( __( 'Modal Field Not Found', 'wponion' ) );
		}
	}
}
