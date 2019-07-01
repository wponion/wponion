<?php

namespace WPOnion\Field\Import_Export;

use WPOnion\Core_Ajax;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Field\Import_Export\Backup_Handler' ) ) {
	/**
	 * Class Backup_Handler
	 *
	 * @package WPOnion\Field
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Backup_Handler {
		/**
		 * @param      $unique
		 * @param      $module
		 * @param bool $extra
		 *
		 * @return array|mixed
		 * @static
		 */
		public static function get_from_db( $unique, $module, $extra = false ) {
			$return = wponion_wp_db()->get( $module, $unique, $extra );
			$return = ( ! wponion_is_array( $return ) && ! wpo_is_option( $return ) ) ? array() : $return;
			return $return;
		}

		/**
		 * @param      $backup
		 * @param      $unique
		 * @param      $module
		 * @param bool $extra
		 *
		 * @static
		 * @return array|bool|\WPOnion\DB\Option
		 */
		public static function save_backup( $backup, $unique, $module, $extra = false ) {
			return wponion_wp_db()->set( $module, 'wpo_backups_' . $unique, $extra, $backup );
		}

		/**
		 * Checks and returns a backup array
		 *
		 * @param $unique
		 * @param $module
		 * @param $extra
		 *
		 * @return array|mixed
		 * @static
		 */
		public static function get_backups( $unique, $module, $extra = false ) {
			return self::get_from_db( 'wpo_backups_' . $unique, $module, $extra );
		}

		/**
		 * @param      $unique
		 * @param      $module
		 * @param bool $extra
		 *
		 * @return bool
		 * @static
		 */
		public static function new_backup( $unique, $module, $extra = false ) {
			$existing              = self::get_from_db( $unique, $module, $extra );
			$backup_id             = current_time( 'timestamp' );
			$backups               = self::get_backups( $unique, $module, $extra );
			$backups[ $backup_id ] = ( wpo_is_option( $existing ) ) ? $existing->get() : $existing;
			$status                = self::save_backup( $backups, $unique, $module, $existing );
			return ( $status ) ? $backup_id : false;
		}

		/**
		 * @param $unique
		 * @param $module
		 * @param $extra
		 *
		 * @return string
		 * @static
		 */
		public static function get_backup_lists( $unique, $module, $extra ) {
			$return  = '<ul>';
			$backups = self::get_backups( $unique, $module, $extra );

			if ( wpo_is_option( $backups ) && $backups->is_empty() || empty( $backups ) ) {
				return '<ul><li class="wpo-text-dark wpo-text-center">' . __( 'No Backups Found', 'wponion' ) . '</li></ul>';
			}

			foreach ( $backups as $time => $data ) {
				$return .= self::backup_html( $time );
			}

			$return .= '</ul>';
			return $return;
		}

		/**
		 * Returns Backup Name.
		 *
		 * @param $time
		 *
		 * @static
		 * @return string
		 */
		public static function backup_name( $time ) {
			$date_format = get_option( 'date_format' );
			$time_format = get_option( 'time_format' );
			return date_i18n( $date_format . ' - ' . $time_format, $time );
		}

		/**
		 * Returns Backup HTML.
		 *
		 * @param $time
		 *
		 * @static
		 * @return string
		 */
		public static function backup_html( $time ) {
			$download     = __( 'Download' );
			$restore      = __( 'Restore' );
			$delete       = __( 'Delete' );
			$show_date    = self::backup_name( $time );
			$download_url = Core_Ajax::url( 'import_export_action', array(
				'import_export_action' => 'download',
				'backup-id'            => $time,
			) );
			$restore_url  = Core_Ajax::url( 'import_export_action', array(
				'import_export_action' => 'restore',
				'backup-id'            => $time,
			) );
			$delete_url   = Core_Ajax::url( 'import_export_action', array(
				'import_export_action' => 'delete',
				'backup-id'            => $time,
			) );
			return <<<HTML
<li data-backup-id="$time">
	<a href="$download_url" data-backup-id="$time" class="download-backup">$show_date</a>
	<span class="actions">
		<a href="$download_url" data-backup-id="$time" class="download-backup">$download</a> |
		<a href="$restore_url" data-backup-id="$time" class="restore-backup wpo-text-primary">$restore</a> |
		<a href="$delete_url" data-backup-id="$time" class="delete-backup wpo-text-danger">$delete</a>
	</span>
</li>
HTML;
		}

		/**
		 * @param $backup_id
		 * @param $unique
		 * @param $module
		 * @param $extra
		 *
		 * @return string
		 * @static
		 */
		public static function delete_backup( $backup_id, $unique, $module, $extra ) {
			$backups = self::get_backups( $unique, $module, $extra );
			if ( isset( $backups[ $backup_id ] ) ) {
				unset( $backups[ $backup_id ] );
				self::save_backup( $backups, $unique, $module, $extra );
				return true;
			}
			return false;
		}

		/**
		 * Returns a Sepefic Backup.
		 *
		 * @param $backup_id
		 * @param $unqiue
		 * @param $module
		 * @param $extra
		 *
		 * @return array|mixed
		 * @static
		 */
		public static function get_backup( $backup_id, $unqiue, $module, $extra ) {
			$backups = self::get_backups( $unqiue, $module, $extra );
			return ( isset( $backups[ $backup_id ] ) ) ? $backups[ $backup_id ] : array();
		}

		/**
		 * @param $backup_id
		 * @param $unique
		 * @param $module
		 * @param $extra
		 *
		 * @return bool
		 * @static
		 */
		public static function restore_backup( $backup_id, $unique, $module, $extra ) {
			if ( false === $backup_id || 'false' === $backup_id ) {
				return false;
			}

			if ( wponion_is_array( $backup_id ) ) {
				$backup = $backup_id;
			} else {
				$backup = self::get_backup( $backup_id, $unique, $module, $extra );
			}

			if ( ! empty( $backup ) ) {
				return wponion_wp_db()->set( $module, $unique, $extra, $backup );
			}
			return 'not_found';
		}
	}
}
