<?php
/**
 *
 * Project : wponion
 * Date : 24-11-2018
 * Time : 04:48 PM
 * File : class-network-settings.php
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @package wponion
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

namespace WPOnion\Modules\Settings;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Modules\Settings\Network' ) ) {
	/**
	 * Class Network
	 *
	 * @package WPOnion\Modules\Settings
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Network extends Settings {
		/**
		 * Inits Class Instance.
		 *
		 * @return mixed|void
		 */
		public function on_init() {
			$menu            = $this->parse_args( $this->option( 'menu' ), $this->defaults( 'menu' ) );
			$menu['network'] = 'only';
			$this->set_option( 'menu', $menu );
			parent::on_init();
		}

		/**
		 * WP Admin Init.
		 */
		public function wp_admin_init() {
			$this->force_set_defaults();
		}

		/**
		 * @return string
		 */
		public function form_post_page() {
			return '';
		}

		/**
		 * Gets DB Values.
		 *
		 * @return array
		 */
		protected function get_db_values() {
			if ( empty( $this->db_values ) ) {
				$this->db_values = get_site_option( $this->unique );
				if ( ! wponion_is_array( $this->db_values ) ) {
					$this->db_values = array();
				}
			}
			return $this->db_values;
		}

		/**
		 * Stores Values In Main Table.
		 *
		 * @param $values
		 */
		public function set_db_values( $values ) {
			update_site_option( $this->unique, $this->db_values );
		}

		/**
		 * On Page Load.
		 */
		public function on_settings_page_load() {
			if ( isset( $_POST[ $this->unique ] ) ) {
				$this->db_values = $this->save_validate( $_POST[ $this->unique ] );
				$this->set_db_values( array() );
			}
			parent::on_settings_page_load();
		}
	}
}
