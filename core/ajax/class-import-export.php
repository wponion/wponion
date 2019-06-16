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
			$action  = $this->validate_post( 'import_export_action', __( 'Unknown Import / Export Action' ) );
			$content = $this->validate_post( 'import_content', __( 'Invalid Backup To Restore.' ) );

			if ( 'import' === $action ) {
				$this->import( $content );
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
			$status = wponion_update_db( $module->module_db(), $module->unique(), $content, $module->get_id() );

			if ( $status ) {
				$this->success( __( 'Backup Imported' ) );
			}
			$this->error( __( 'Error !' ), __( 'Unable To Import Backup. Please Try Again' ) );
		}
	}
}
