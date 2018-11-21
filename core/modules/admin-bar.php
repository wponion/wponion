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

		public function on_init() {
			$this->add_action( 'admin_bar_menu', 'add_menu', $this->option( 'hook_priority' ) );
		}

		/**
		 * @param \WP_Admin_Bar $admin_bar
		 */
		public function add_menu( $wp_admin_bar ) {
			$wp_admin_bar->add_node( array(
				'id'    => 'parent_node',
				'title' => 'parent node',
			) );

			$wp_admin_bar->add_node( array(
				'id'     => 'child_node',
				'title'  => 'child node',
				'parent' => 'parent_node',
			) );

			// add a group node with a class "first-toolbar-group"
			$wp_admin_bar->add_group( array(
				'id'     => 'first_group',
				'title'  => 'okok',
				'parent' => 'parent_node',
				'meta'   => array( 'class' => 'first-toolbar-group' ),
			) );

			// add an item to our group item
			$args = array(
				'id'     => 'first_grouped_node',
				'title'  => 'first group node',
				'parent' => 'first_group',
			);
			$wp_admin_bar->add_node( $args );

			// add another child item to first group
			$args = array(
				'id'     => 'another_group_child_node2',
				'title'  => 'another group child node2',
				'parent' => 'first_grouped_node',
			);
			$wp_admin_bar->add_node( $args );
		}
	}
}
