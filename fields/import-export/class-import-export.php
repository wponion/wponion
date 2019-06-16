<?php

namespace WPOnion\Field;

use WPOnion\Field;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Field\Import_Export' ) ) {
	class Import_Export extends Field {
		public function field_assets() {
		}

		protected function get_db_values() {
			$data = wponion_get_set_db( $this->module, $this->base_unique, false );
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

			echo '<div class="backup-importer-container">';
			echo '<div class="importer-field-container">';
			echo '<textarea id="' . $this->js_field_id() . '_backup_import"></textarea>';
			echo '</div>';
			echo '</div>';

			echo '<hr/>';

			echo '<div class="backup-export-container">';
			echo '<div class="exporter-field-container">';
			echo '<textarea class="backupexportfield" id="' . $this->js_field_id() . '_backup_export" readonly>' . $values . '</textarea>';
			echo '<div class="export-actions">';
			echo '<button type="button" class="button button-secondary" id="copy_btn">' . __( 'Copy' ) . '</button>';
			echo '<button type="button" class="button button-primary" id="download">' . __( 'Download As File' ) . '</button>';
			echo '</div>';
			echo '</div>';
			echo '</div>';

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
