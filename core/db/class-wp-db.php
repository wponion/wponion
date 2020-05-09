<?php

namespace WPOnion\DB;
defined( 'ABSPATH' ) || exit;

if ( ! class_exists( '\WPOnion\DB\WP_DB' ) ) {
	/**
	 * Class WP_DB
	 *
	 * @package WPOnion\DB
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 */
	class WP_DB {
		/**
		 * @param $return
		 *
		 * @return bool
		 */
		protected function is_get( $return ) {
			return ( 'get' === $return );
		}

		/**
		 * @param mixed $values
		 *
		 * @return mixed
		 */
		protected function handle_values( $values ) {
			if ( wpo_is_option( $values ) ) {
				return $values->get();
			}
			return $values;
		}

		/**
		 * @param string          $module_db
		 * @param string          $unique
		 * @param bool|string|int $id
		 *
		 * @return array|bool|int|mixed|\WP_Error|\WPOnion\DB\Option
		 */
		public function get( $module_db, $unique, $id = false ) {
			return $this->get_set( $module_db, $unique, $id, false, 'get' );
		}

		/**
		 * @param string          $module_db
		 * @param string          $unique
		 * @param bool|string|int $id
		 * @param mixed           $values
		 *
		 * @return array|bool|int|mixed|\WP_Error|\WPOnion\DB\Option
		 */
		public function set( $module_db, $unique, $id = false, $values = false ) {
			return $this->get_set( $module_db, $unique, $id, $values, 'set' );
		}

		/**
		 * @param string          $module_db
		 * @param string          $unique
		 * @param bool|string|int $id
		 * @param mixed           $values
		 * @param string          $mode
		 *
		 * @return array|bool|int|mixed|\WP_Error|\WPOnion\DB\Option
		 */
		public function get_set( $module_db, $unique, $id = false, $values = false, $mode = 'get' ) {
			$return = false;
			switch ( $module_db ) {
				case 'dashboard_widgets':
					if ( $this->is_get( $mode ) ) {
						return wponion_get_option( $unique );
					}

					return wponion_update_option( $unique, $this->handle_values( $values ) );
					break;
				case 'settings':
				case 'wc_settings':
					$return = ( 'get' === $mode ) ? wpo_settings( $unique ) : update_option( $unique, $this->handle_values( $values ), false );
					break;
				case 'network_settings':
					$return = ( 'get' === $mode ) ? wpo_network_settings( $unique ) : update_site_option( $unique, $this->handle_values( $values ) );
					break;
				case 'post_meta':
				case 'wc_product':
				case 'metabox':
				case 'nav_menu':
				case 'media_fields':
					$return = ( 'get' === $mode ) ? wpo_post_meta( $unique, $id ) : update_post_meta( $id, $unique, $this->handle_values( $values ) );
					break;
				case 'taxonomy':
				case 'term':
					$return = ( 'get' === $mode ) ? wpo_term_meta( $unique, $id ) : wponion_update_term_meta( $id, $unique, $this->handle_values( $values ) );
					break;
				case 'user_profile':
					$return = ( 'get' === $mode ) ? wpo_user_meta( $unique, $id ) : update_user_meta( $id, $unique, $this->handle_values( $values ) );
					break;
			}
			return $return;
		}
	}
}
