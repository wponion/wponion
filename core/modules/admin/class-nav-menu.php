<?php

namespace WPOnion\Modules\Admin;

use WPOnion\Bridge\Module;
use WPOnion\DB\Multi_Save\Save;
use WPOnion\DB\Save_Handler\Base as Save_Handler;

defined( 'ABSPATH' ) || exit;

/**
 * Class Nav_Menu
 *
 * @package WPOnion\Modules
 * @author Varun Sridharan <varunsridharan23@gmail.com>
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
	 * On Class Init.
	 */
	public function on_init() {
		if ( wponion_is_ajax() ) {
			$this->on_page_load();
		} else {
			$this->add_action( 'load-nav-menus.php', 'on_page_load' );
		}
	}

	/**
	 * On Page Load.
	 */
	public function on_page_load() {
		$iswp_less = is_version_lt( 'wordpress', '5.4' );
		if ( $iswp_less && ! has_filter( 'wp_edit_nav_menu_walker', array( __CLASS__, 'change_nav_walker' ) ) ) {
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

		if ( isset( $_POST[ $this->unique ][ $menu_item_db_id ] ) ) {
			$this->set_id( $menu_item_db_id );
			$instance = new Save_Handler( array(
				'module'        => &$this,
				'unique'        => $this->unique(),
				'fields'        => $this->fields(),
				'db_values'     => $this->get_db_values(),
				'posted_values' => $_POST[ $this->unique ][ $menu_item_db_id ],
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
		wponion_load_asset( $this->option( 'assets' ) );
	}

	/**
	 * Renders HTML.
	 *
	 * @param $item_id
	 */
	public function render( $item_id ) {
		$this->set_id( $item_id );
		$this->flush_values();
		$this->reload_cache();
		$this->get_cache();
		$this->init_theme()->render();
	}

	/**
	 * Custom Field Unique For Rendering Values.
	 *
	 * @return string
	 * @since 1.5
	 */
	protected function field_unique() {
		return $this->unique() . '/' . $this->get_id();
	}

	/**
	 * Changes Nav Menu Walker.
	 *
	 * @return string
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
		return $this->parse_args( array( 'theme' => 'wp' ), parent::defaults() );
	}
}
