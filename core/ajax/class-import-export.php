<?php

namespace WPOnion\Ajax;

use WPOnion\Bridge\Ajax;
use WPOnion\Field\Import_Export\Backup_Handler;

defined( 'ABSPATH' ) || exit;

/**
 * Class Import_Export
 *
 * @package WPOnion\Ajax
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Import_Export extends Ajax {
	/**
	 * Runs Ajax Request.
	 */
	public function run() {
		$this->get_module();
		$action = $this->validate_post( 'import_export_action', __( 'Unknown Import / Export Action', 'wponion' ) );

		switch ( $action ) {
			case 'import':
				$content = $this->validate_post( 'import_content', __( 'Invalid Backup To Restore.', 'wponion' ) );
				$this->import( $content );
				break;
			case 'backup':
				$this->backup();
				break;
			case 'download':
				$this->download();
				break;
			case 'delete':
				$this->delete();
				break;
			case 'restore':
				$this->restore();
				break;
		}
	}

	/**
	 * Imports Backup Content.
	 *
	 * @param $content
	 */
	protected function import( $content ) {
		$content = json_decode( stripslashes( $content ), true );

		if ( ! empty( json_last_error() ) ) {
			$this->error( __( 'Invalid Backup Content', 'wponion' ), __( 'Unable To Decode Provided Backup Content', 'wponion' ) );
		}

		$module = $this->get_module();
		$status = wponion_wp_db()->set( $module->module_db(), $module->unique(), $module->get_id(), $content );

		if ( $status ) {
			$this->success( __( 'Backup Imported', 'wponion' ) );
		}
		$this->error( __( 'Error !', 'wponion' ), __( 'Unable To Import Backup. Please Try Again', 'wponion' ) );
	}

	/**
	 * Handles Backup Creation.
	 */
	protected function backup() {
		$module = $this->get_module();
		$status = Backup_Handler::new_backup( $module->unique(), $module->module_db(), false );
		if ( $status ) {
			$this->success( __( 'Backup Created', 'wponion' ), false, array(
				'html' => Backup_Handler::backup_html( $status ),
			) );
		}
		$this->error( __( 'Backup Creation Failed', 'wponion' ), __( 'Unknown Error Occured While Creating Backup', 'wponion' ) );
	}

	/**
	 * Handles Backup Download.
	 */
	protected function download() {
		$module    = $this->get_module();
		$backup_id = $this->validate_post( 'backup_id', __( 'Backup Not Found', 'wponion' ) );
		$status    = Backup_Handler::get_backup( $backup_id, $module->unique(), $module->module_db(), $module->get_id() );
		if ( ! empty( $status ) ) {
			$this->json_success( array(
				'backup'    => $status,
				'file_name' => strtolower( sanitize_file_name( $module->unique() . '-' . Backup_Handler::backup_name( $backup_id ) . '.json' ) ),
			) );
		}
		$this->error( __( 'Backup Not Found', 'wponion' ) );
	}

	/**
	 * Handles Backup Deletion.
	 */
	protected function delete() {
		$module    = $this->get_module();
		$backup_id = $this->validate_post( 'backup_id', __( 'Backup Not Found', 'wponion' ) );
		$status    = Backup_Handler::delete_backup( $backup_id, $module->unique(), $module->module_db(), $module->get_id() );
		if ( $status ) {
			$this->json_success();
		}
		$this->error( __( 'Deletion Failed', 'wponion' ), __( 'Backup Not Found', 'wponion' ) );
	}

	/**
	 * Handles Backup Restore.
	 */
	protected function restore() {
		$module    = $this->get_module();
		$backup_id = $this->validate_post( 'backup_id', __( 'Backup Not Found', 'wponion' ) );
		$status    = Backup_Handler::restore_backup( $backup_id, $module->unique(), $module->module_db(), $module->get_id() );

		if ( 'not_found' === $status ) {
			$this->error( __( 'Backup Not Found', 'wponion' ) );
		}

		if ( $status ) {
			$this->success( __( 'Backup Restored ', 'wponion' ), __( 'Please Reload The Page.', 'wponion' ), array(
				'backup' => Backup_Handler::get_backup( $backup_id, $module->unique(), $module->module_db(), $module->get_id() ),
			) );
		}
		$this->error( __( 'Restore Failed', 'wponion' ), __( 'Restore Will Fail If both database & backup values are same', 'wponion' ) );
	}
}
