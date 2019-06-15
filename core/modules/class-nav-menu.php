<?php

namespace WPOnion\Modules;

use WPO\Builder;
use WPOnion\Bridge\Module;
use WPOnion\DB\Data_Validator_Sanitizer;

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
	class Nav_Menu extends Module {
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
		 * @param array             $settings
		 * @param \WPO\Builder|null $fields
		 */
		public function __construct( $settings = array(), Builder $fields = null ) {
			parent::__construct( $fields, $settings );
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

		/**
		 * Returns Unique Cache ID For each instance but only once.
		 *
		 * @return string
		 */
		protected function get_cache_id() {
			return wponion_hash_string( $this->get_id() . '_' . $this->module() . '_' . $this->unique() );
		}

		/**
		 * Save Menu Custom Fields.
		 *
		 * @param $menu_id
		 * @param $menu_item_db_id
		 */
		public function save( $menu_id, $menu_item_db_id ) {
			if ( defined( 'DOING_AJAX' ) && DOING_AJAX ) {
				return;
			}

			if ( isset( $_POST[ $this->unique ] ) ) {
				$this->set_id( $menu_item_db_id );
				$instance = new Data_Validator_Sanitizer( array(
					'module'    => &$this,
					'unique'    => $this->unique(),
					'fields'    => $this->fields,
					'db_values' => $this->get_db_values(),
				) );

				$instance->run();
				$this->options_cache['field_errors'] = $instance->get_errors();
				$this->set_db_cache( $this->options_cache );
				$this->set_db_values( $instance->get_values() );
				$this->options_cache = false;
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
		 */
		public function render( $item_id ) {
			$this->set_id( $item_id );
			$this->get_cache();
			$this->init_theme()
				->render_nav_menu();
		}

		/**
		 * Changes Nav Menu Walker.
		 *
		 * @return string
		 * @static
		 */
		public static function change_nav_walker() {
			return '\WPOnion\WP\Nav_Menu\Walker';
		}

		/**
		 * Returns Default Args.
		 *
		 * @return array
		 */
		protected function defaults() {
			return $this->parse_args( array(
				'theme' => 'wp_modern',
				parent::defaults(),
			) );
		}
	}
}
