<?php

namespace WPOnion\Modules\Admin;

use WPOnion\Bridge\Module_Utility;

defined( 'ABSPATH' ) || exit;

/**
 * Class Admin_Bar
 *
 * @package WPOnion\Modules\Admin
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Admin_Bar extends Module_Utility {
	/**
	 * @var string
	 */
	protected $module = 'admin_bar';

	/**
	 * admin_bar_instance
	 *
	 * @var \WP_Admin_Bar
	 */
	protected $admin_bar_instance = false;

	/**
	 * Admin_Bar constructor.
	 *
	 * @param array $menus
	 */
	public function __construct( $menus = array() ) {
		parent::__construct( array(), $menus );
		$this->add_action( 'admin_bar_menu', 'register_menu', $this->option( 'hook_priority' ) );
	}

	/**
	 * @return array
	 */
	protected function defaults() {
		return $this->parse_args( array( 'hook_priority' => 20 ), parent::defaults() );
	}

	/**
	 * @param \WP_Admin_Bar $wp_admin_bar
	 */
	public function register_menu( $wp_admin_bar ) {
		$this->admin_bar_instance = $wp_admin_bar;
		$this->add_menus( $this->fields() );
	}

	/**
	 * @param array $menus
	 * @param bool  $parent_id
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
