<?php
/**
 *
 * Project : wponion
 * Date : 20-11-2018
 * Time : 02:15 PM
 * File : backup.php
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @package wponion
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

namespace WPOnion\Field;

if ( ! class_exists( '\WPOnion\Field\Backup' ) ) {
	/**
	 * Class Backup
	 *
	 * @package WPOnion\Field
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Backup extends \WPOnion\Field {
		protected function backup_extra() {
		}

		protected function output() {
			echo $this->before();
			$this->backup_extra();
			$upload_title = __( 'Upload / Drag & Drop To Restore' );
			$backup       = \WPOnion\Backup_Handler::get_from_db( $this->base_unique(), $this->module() );
			$backup_list  = \WPOnion\Backup_Handler::get_backup_lists( $this->base_unique(), $this->module(), false );
			echo '<div class="wponion-backup-restore-container">';
			if ( true === $this->data( 'backup' ) ) {
				echo '<div class="backup_textarea"><textarea readonly>' . wp_json_encode( $backup ) . '</textarea></div>';

				if ( true === $this->data( 'backups' ) ) {
					echo '<div class="backups">
<div class="backup_lists">' . $backup_list . '</div>
<a class="new_backup button button-primary">' . __( 'Create A Backup' ) . '</a> | 
<a class="download_backup button button-secondary">' . __( 'Download Backup' ) . '</a>
</div>';
				}
			}

			if ( true === $this->data( 'restore' ) ) {
				echo '<div class="restore_textarea">';
				echo '<div class="upload_area">';
				echo '<input type="file"/><textarea></textarea><h2>' . $upload_title . '</h2>';
				echo '</div>';
				echo '</div>';

			}
			echo '</div>';
			echo $this->after();
		}

		protected function js_field_args() {
			return array(
				'invalid_format' => __( 'Invalid Backup File / Content' ),
				'base_unique'    => $this->base_unique(),
			);
		}

		public function field_assets() {
			// TODO: Implement field_assets() method.
		}

		protected function field_default() {
			return array(
				'restore' => true,
				'backup'  => true,
				'backups' => true,
			);
		}
	}
}
