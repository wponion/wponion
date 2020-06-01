<?php

namespace WPOnion\Field;

use WPOnion\Field;
use WPOnion\Field\Import_Export\Backup_Handler;

defined( 'ABSPATH' ) || exit;

/**
 * Class Import_Export
 *
 * @package WPOnion\Field
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Import_Export extends Field {

	/**
	 * Handles Fields Assets.
	 */
	public function assets() {
	}

	/**
	 * @return bool|false|string
	 */
	protected function get_db_values() {
		$data = wponion_wp_db()->get( $this->module, $this->base_unique, false );
		if ( ! empty( $data ) ) {
			return wp_json_encode( $data );
		}
		return false;
	}

	/**
	 * Generates Final HTML Output.
	 *
	 * @return mixed|void
	 */
	protected function output() {
		$values = $this->get_db_values();

		if ( false === $values ) {
			return $this->sub_field( array(
				'alt'     => true,
				'large'   => true,
				'debug'   => false,
				'type'    => 'wp_notice_error',
				// translators: Added Module Name.
				'content' => sprintf( __( '%s Module Is Not Yet Supported In Import / Export Field', 'wponion' ), $this->module() ),
			), false, false );
		}

		$backup_import_id = $this->js_field_id() . '_backup_import';
		$backup_export_id = $this->js_field_id() . '_backup_export';
		$download_label   = wpo_icon( 'wpoic-download' ) . ' ' . __( 'Download Backup', 'wponion' );
		$import_label     = wpo_icon( 'wpoic-upload' ) . ' ' . __( 'Import Backup', 'wponion' );
		$backups          = __( 'Saved Backups', 'wponion' );
		$create_backup    = wpo_icon( 'wpoic-database' ) . ' ' . __( 'Create Backup', 'wponion' );
		$ptag             = __( 'You options have been backed up. You can always restore your options by clicking the <strong>Restore</strong> button below:', 'wponion' );
		$list             = Backup_Handler::get_backup_lists( $this->base_unique(), $this->module(), false );
		$html             = <<<HTML
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
		return $this->before() . $html . $this->after();
	}

	/**
	 * @return array
	 */
	protected function js_args() {
		return array(
			'export_textarea' => $this->js_field_id() . '_backup_export',
			'import_textarea' => $this->js_field_id() . '_backup_import',
		);
	}

	/**
	 * Returns Field's Default Value.
	 *
	 * @return array
	 */
	protected function defaults() {
		return array();
	}
}
