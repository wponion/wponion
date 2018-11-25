<?php
/**
 *
 * Project : wponion
 * Date : 21-11-2018
 * Time : 07:16 PM
 * File : class-admin-bar.php
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @package wponion
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

namespace WPOnion\Modules;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Modules\Admin_Bar' ) ) {
	/**
	 * Class Admin_Bar
	 *
	 * @package WPOnion\Modules
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Admin_Bar extends \WPOnion\Bridge\Module {
		/**
		 * hook_priority
		 *
		 * @var null
		 */
		protected $hook_priority = null;

		/**
		 * admin_bar_instance
		 *
		 * @var \WP_Admin_Bar
		 */
		protected $admin_bar_instance = false;

		/**
		 * Admin_Bar constructor.
		 *
		 * @param array $settings
		 * @param array $fields
		 */
		public function __construct( $settings = array(), $fields = array() ) {
			if ( ! empty( $settings ) && empty( $fields ) ) {
				$fields   = $settings;
				$settings = array();
			}
			parent::__construct( $fields, $settings );
			$this->on_init();
		}

		/**
		 * @return array
		 */
		protected function defaults() {
			return $this->parse_args( array(
				'hook_priority' => 999,
			), parent::defaults() );
		}

		/**
		 * @return mixed|void
		 */
		public function on_init() {
			$this->add_action( 'admin_bar_menu', 'add_menu', $this->option( 'hook_priority' ) );
		}

		/**
		 * @param \WP_Admin_Bar $wp_admin_bar
		 *
		 * @return mixed
		 */
		public function add_menu( $wp_admin_bar ) {
			$this->admin_bar_instance = $wp_admin_bar;
			$this->add_menus( $this->fields );
		}

		/**
		 * @param      $menus
		 * @param bool $parent_id
		 */
		protected function add_menus( $menus, $parent_id = false ) {
			foreach ( $menus as $menu ) {
				$submenus = array();
				if ( ! isset( $menu['id'] ) ) {
					$menu['id'] = sanitize_title( $menu['title'] );
				}

				if ( isset( $menu['submenus'] ) ) {
					$submenus = $menu['submenus'];
					unset( $menu['submenus'] );
				}

				if ( false !== $parent_id ) {
					$menu['parent'] = $parent_id;
				}

				$this->admin_bar_instance->add_menu( $menu );

				if ( ! empty( $submenus ) ) {
					$this->add_menus( $submenus, $menu['id'] );
				}
			}
		}
	}
}
