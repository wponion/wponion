<?php

namespace WPOnion\Modules\Settings;

defined( 'ABSPATH' ) || exit;

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
			$this->module_db = 'network_settings';
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
		 * On Page Load.
		 */
		public function on_settings_page_load() {
			if ( isset( $_POST[ $this->unique ] ) ) {
				$this->set_db_values( $this->save_validate( $_POST[ $this->unique ] ) );
			}
			parent::on_settings_page_load();
		}
	}
}
