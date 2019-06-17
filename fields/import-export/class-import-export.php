<?php

namespace WPOnion\Field;

use WPOnion\Field;
use WPOnion\Field\Import_Export\Backup_Handler;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Field\Import_Export' ) ) {
	class Import_Export extends Field {
		public function field_assets() {
		}

		protected function get_db_values() {
			$data = wponion_wp_db()->get( $this->module, $this->base_unique, false );
			if ( ! empty( $data ) ) {
				return wp_json_encode( $data );
			}
			return false;
		}

		protected function output() {
			$values = $this->get_db_values();

			if ( false === $values ) {
				echo $this->sub_field( array(
					'alt'     => true,
					'large'   => true,
					'debug'   => false,
					'type'    => 'wp_notice_error',
					'content' => sprintf( __( '%s Module Is Not Yet Supported In Import / Export Field' ), $this->module() ),
				), false, false );
				return;
			}

			$backup_import_id = $this->js_field_id() . '_backup_import';
			$backup_export_id = $this->js_field_id() . '_backup_export';
			$download_label   = __( 'Download Backup' );
			$import_label     = __( 'Import Backup' );
			$backups          = __( 'Saved Backups' );
			$create_backup    = __( 'Create Backup' );
			$ptag             = __( 'You options have been backed up. You can always restore your options by clicking the **Restore** button below:' );
			$list             = Backup_Handler::get_backup_lists( $this->base_unique(), $this->module(), false );

			echo <<<HTML
<div class="import-export-base-wrap">
	<div class="left">
		<div class="backup-importer-container">
			<div class="importer-field-container">
				<textarea id="$backup_import_id" class="$backup_import_id"></textarea>
			</div>
			<div class="import-actions">
				<button type="button"  class="button button-primary import-backup">$import_label</button>
			</div>
		</div>

		<div class="backup-export-container">
			<div class="exporter-field-container">
				<textarea id="$backup_export_id"  readonly class="backupexportfield $backup_export_id">$values</textarea>
			</div>
			<div class="export-actions">
				<button type="button" class="button button-primary download" >$download_label</button>
			</div>
		</div>
	</div>
	
	<div class="right">
		<div class="saved-backup-headers">
			<h2>$backups</h2>
			<p>$ptag</p>
			$list
			<button type="button" class="wpo-btn wpo-btn-success wpo-btn-sm backup-now wpo-btn-block">$create_backup</button>
		</div>
	</div>
</div>

HTML;

		}

		protected function js_field_args() {
			return array(
				'export_textarea' => $this->js_field_id() . '_backup_export',
				'import_textarea' => $this->js_field_id() . '_backup_import',
			);
		}

		protected function field_default() {
			return array();
		}
	}
}
