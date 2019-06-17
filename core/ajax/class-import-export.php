<?php

namespace WPOnion\Ajax;

use WPOnion\Bridge\Ajax;
use WPOnion\Field\Import_Export\Backup_Handler;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Ajax\Import_Export' ) ) {
	/**
	 * Class Import_Export
	 *
	 * @package WPOnion\Ajax
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Import_Export extends Ajax {
		/**
		 * Runs.
		 */
		public function run() {
			$this->get_module();
			$action = $this->validate_post( 'import_export_action', __( 'Unknown Import / Export Action' ) );

			switch ( $action ) {
				case 'import':
					$content = $this->validate_post( 'import_content', __( 'Invalid Backup To Restore.' ) );
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
				$this->error( __( 'Invalid Backup Content' ), __( 'Unable To Decode Provided Backup Content' ) );
			}

			$module = $this->get_module();
			$status = wponion_wp_db()->set( $module->module_db(), $module->unique(), $module->get_id(), $content );

			if ( $status ) {
				$this->success( __( 'Backup Imported' ) );
			}
			$this->error( __( 'Error !' ), __( 'Unable To Import Backup. Please Try Again' ) );
		}

		protected function backup() {
			$module = $this->get_module();
			$status = Backup_Handler::new_backup( $module->unique(), $module->module_db(), false );
			if ( $status ) {
				$this->success( __( 'Backup Created' ), false, array(
					'html' => Backup_Handler::backup_html( $status ),
				) );
			}
			$this->error( __( 'Backup Creation Failed' ), __( 'Unknown Error Occured While Creating Backup' ) );
		}

		protected function download() {
			$module    = $this->get_module();
			$backup_id = $this->validate_post( 'backup_id', __( 'Backup Not Found' ) );
			$status    = Backup_Handler::get_backup( $backup_id, $module->unique(), $module->module_db(), $module->get_id() );
			if ( ! empty( $status ) ) {
				$this->json_success( array(
					'backup'    => $status,
					'file_name' => strtolower( sanitize_file_name( $module->unique() . '-' . Backup_Handler::backup_name( $backup_id ) . '.json' ) ),
				) );
			}
			$this->error( __( 'Backup Not Found' ) );
		}

		protected function delete() {
			$module    = $this->get_module();
			$backup_id = $this->validate_post( 'backup_id', __( 'Backup Not Found' ) );
			$status    = Backup_Handler::delete_backup( $backup_id, $module->unique(), $module->module_db(), $module->get_id() );
			if ( $status ) {
				$this->json_success();
			}
			$this->error( __( 'Deletion Failed' ), __( 'Backup Not Found' ) );
		}

		protected function restore() {
			$module    = $this->get_module();
			$backup_id = $this->validate_post( 'backup_id', __( 'Backup Not Found' ) );
			$status    = Backup_Handler::restore_backup( $backup_id, $module->unique(), $module->module_db(), $module->get_id() );

			if ( 'not_found' === $status ) {
				$this->error( __( 'Backup Not Found' ) );
			}

			if ( $status ) {
				$this->success( __( 'Backup Restored ' ), __( 'Please Reload The Page.' ), array(
					'backup' => Backup_Handler::get_backup( $backup_id, $module->unique(), $module->module_db(), $module->get_id() ),
				) );
			}
			$this->error( __( 'Restore Failed' ), __( 'Restore Will Fail If both database & backup values are same' ) );
		}
	}
}
