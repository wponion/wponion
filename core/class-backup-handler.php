<?php
/**
 *
 * Project : wponion
 * Date : 20-11-2018
 * Time : 04:42 PM
 * File : class-backup-handler.php
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @package wponion
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

namespace WPOnion;

if ( ! class_exists( '\WPOnion\Backup_Handler' ) ) {
	/**
	 * Class Backup_Handler
	 *
	 * @package WPOnion
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
			$return = array();
			switch ( $module ) {
				case 'settings':
					$return = get_option( $unique, true );
					break;
				case 'metabox':
					$return = get_post_meta( $extra, $unique, true );
					break;
			}
			$return = ( ! is_array( $return ) ) ? array() : $return;
			return $return;
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
			$return = self::get_from_db( $unique . '_backups', $module, $extra );
			return $return;
		}

		/**
		 * @param      $backup
		 * @param      $unique
		 * @param      $module
		 * @param bool $extra
		 *
		 * @static
		 */
		public static function save_backup( $backup, $unique, $module, $extra = false ) {
			switch ( $module ) {
				case 'settings':
					update_option( $unique . '_backups', $backup, false );
					break;
				case 'metabox':
					update_post_meta( $extra, $unique . '_backups', $backup );
					break;
			}
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
			$existing              = self::get_from_db( $unique, $module );
			$backup_id             = current_time( 'timestamp' );
			$backups               = self::get_backups( $unique, $module, $extra );
			$backups[ $backup_id ] = $existing;
			self::save_backup( $backups, $unique, $module, $existing );
			return true;
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
			if ( ! empty( $backups ) ) {
				foreach ( $backups as $time => $data ) {
					$date_format = get_option( 'date_format' );
					$time_format = get_option( 'time_format' );
					$show_date   = date_i18n( $date_format . ' - ' . $time_format, $time );
					$url         = admin_url( 'admin-ajax.php?action=wponion-ajax&wponion-ajax=download-backup&backupid=' . $time . '&unique=' . $unique . '&module=' . $module . '&extra=' . $extra );

					$return .= '<li><a href="' . $url . '" target="_self" data-backupid="' . $time . '">' . $show_date . '</a></li>';
				}
			} else {
				return '<span>' . __( 'No Backups Found' ) . '</span>';
			}

			$return .= '</ul>';
			return $return;
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

			if ( is_array( $backup_id ) ) {
				$backup = $backup_id;
			} else {
				$backup = self::get_backup( $backup_id, $unique, $module, $extra );
			}

			switch ( $module ) {
				case 'settings':
					remove_all_filters( 'sanitize_option_' . $unique );
					update_option( $unique, $backup, false );
					break;
				case 'metabox':
					update_post_meta( $extra, $unique, $backup );
					break;
			}
		}
	}
}
