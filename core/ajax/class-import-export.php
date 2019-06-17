<?php

namespace WPOnion\Ajax;

use WPOnion\Bridge\Ajax;
use WPOnion\Icons;

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

			if ( 'import' === $action ) {
				$content = $this->validate_post( 'import_content', __( 'Invalid Backup To Restore.' ) );
				$this->import( $content );
			}

			if ( 'backup' === $action ) {
				$this->backup();
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
			\WPOnion\Field\Import_Export\Backup_Handler::new_backup( $module->unique(), $module->module_db(), false );
			$this->json_success();
		}
	}
}
