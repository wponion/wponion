<?php
/**
 *
 * Project : wponion
 * Date : 24-11-2018
 * Time : 12:04 PM
 * File : nav-menu.php
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

if ( ! class_exists( '\WPOnion\Modules\Nav_Menu' ) ) {
	/**
	 * Class Nav_Menu
	 *
	 * @package WPOnion\Modules
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Nav_Menu extends \WPOnion\Bridge\Module {
		/**
		 * module
		 *
		 * @var string
		 */
		protected $module = 'nav_menu';
		/**
		 * post_id
		 *
		 * @var bool
		 */
		public $post_id = false;

		/**
		 * Nav_Menu constructor.
		 *
		 * @param array $settings
		 * @param array $fields
		 */
		public function __construct( $settings = array(), $fields = array() ) {
			parent::__construct( $fields, $settings );
			$this->fields = $fields;
			if ( defined( 'DOING_AJAX' ) && true === DOING_AJAX ) {
				$this->on_page_load();
			} else {
				$this->init();
			}
		}

		/**
		 * On Class Init.
		 */
		public function on_init() {
			$this->add_action( 'load-nav-menus.php', 'on_page_load' );
		}

		/**
		 * On Page Load.
		 */
		public function on_page_load() {
			if ( ! has_filter( 'wp_edit_nav_menu_walker', array( __CLASS__, 'change_nav_walker' ) ) ) {
				add_filter( 'wp_edit_nav_menu_walker', array( __CLASS__, 'change_nav_walker' ) );
			}
			$this->add_action( 'admin_enqueue_scripts', 'load_assets' );
			$this->add_action( 'wp_nav_menu_item_custom_fields', 'render', 30, 5 );
			$this->add_action( 'wp_update_nav_menu_item', 'save', 10, 3 );
		}

		public function save( $menu_id, $menu_item_db_id, $menu_item_args ) {
			if ( defined( 'DOING_AJAX' ) && DOING_AJAX ) {
				return;
			}

			if ( isset( $_POST[ $this->unique ] ) ) {
				$this->post_id = $menu_item_db_id;
				$instance      = new \WPOnion\DB\Nav_Menu_Save_Handler();
				$instance->init_class( array(
					'module'    => 'metabox',
					'plugin_id' => $this->plugin_id(),
					'unique'    => $this->unique,
					'fields'    => $this->fields,
					'db_values' => $this->get_db_values(),
					'args'      => array( 'settings' => &$this ),
				) )
					->run();
				$this->options_cache['field_errors'] = $instance->get_errors();
				$this->set_cache( $this->options_cache );
				$this->set_db_values( $instance->get_values() );
				$this->db_values = null;
			}

		}

		/**
		 * Loads Core Assets.
		 */
		public function load_assets() {
			wponion_load_core_assets();
		}

		/**
		 * Renders HTML.
		 *
		 * @param $item_id
		 * @param $post
		 * @param $depth
		 * @param $args
		 * @param $id
		 */
		public function render( $item_id, $post, $depth, $args, $id ) {
			$this->post_id = $item_id;
			echo '<div class="' . $this->wrap_class( '' ) . '">';
			foreach ( $this->fields as $field ) {
				echo $this->render_field( $field );
			}
			echo '</div>';
		}

		/**
		 * Retrives Stored DB Values.
		 *
		 * @return array|mixed
		 */
		public function get_db_values() {
			if ( empty( $this->db_values ) ) {
				$this->db_values = get_post_meta( $this->post_id, $this->unique, true );
				if ( ! is_array( $this->db_values ) ) {
					$this->db_values = array();
				}
			}
			return $this->db_values;
		}

		/**
		 * Stores Values into DB.
		 *
		 * @param $value
		 *
		 * @return $this
		 */
		protected function set_db_values( $value ) {
			$this->db_values = $value;
			update_post_meta( $this->post_id, $this->unique, $value );
			return $this;
		}

		/**
		 * Stores Cache Data.
		 *
		 * @param array $data
		 */
		public function set_cache( $data = array() ) {
			$data['wponion_version'] = WPONION_DB_VERSION;
			update_post_meta( $this->post_id, $this->get_cache_id(), $data );
			$this->options_cache = $data;
		}

		/**
		 * Retrives Stored DB Cache.
		 *
		 * @return mixed
		 */
		protected function get_db_cache() {
			return get_post_meta( $this->post_id, $this->get_cache_id(), true );
		}

		/**
		 * Changes Nav Menu Walker.
		 *
		 * @return string
		 * @static
		 */
		public static function change_nav_walker() {
			return '\WPOnion\WP_Nav_Menu_Walker';
		}
	}
}
