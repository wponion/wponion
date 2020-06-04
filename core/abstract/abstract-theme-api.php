<?php

namespace WPOnion;

use WPOnion\Traits\Internal\Module;
use WPOnion\Traits\Internal\Unique;

defined( 'ABSPATH' ) || exit;

/**
 * Class Theme
 *
 * @package WPOnion
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
abstract class Theme_API extends Bridge {
	use Unique;
	use Module;

	/**
	 * dir
	 *
	 * @var bool
	 */
	protected $dir = false;

	/**
	 * url
	 *
	 * @var bool
	 */
	protected $url = false;

	/**
	 * Stores Theme Slug / Name.
	 *
	 * @var null
	 */
	protected $theme = null;

	/**
	 * module_instance
	 *
	 * @var null
	 */
	protected $instance = null;

	/**
	 * Theme_API constructor.
	 *
	 * @param        $data
	 * @param string $theme_file
	 * @param bool   $theme_name
	 */
	public function __construct( $data, $theme_file = __FILE__, $theme_name = false ) {
		$this->dir      = plugin_dir_path( $theme_file );
		$this->url      = plugin_dir_url( $theme_file );
		$this->theme    = $theme_name;
		$this->unique   = wponion_is_set( $data, 'unique' ) ? $data['unique'] : false;
		$this->instance = wponion_is_set( $data, 'instance_id' ) ? $data['instance_id'] : false;
		$this->module   = wponion_is_set( $data, 'module' ) ? $data['module'] : false;
		wponion_theme_registry( $this );
		add_action( 'admin_enqueue_scripts', array( &$this, 'register_assets' ), 1 );
	}

	/**
	 * @param bool $is_active
	 *
	 * @return string
	 */
	public function get_submenu_indicator( $is_active = false ) {
		return '<i class="wponion-submenu-i dashicons"></i>';
	}

	/**
	 * Creates Custom Unique Code.
	 *
	 * @return string
	 */
	public function uid() {
		return $this->theme . '_' . $this->unique;
	}

	/**
	 * Registers / Load Theme's Assets With WP.
	 *
	 * @return mixed
	 */
	abstract function register_assets();

	/**
	 * Returns Current Theme URL.
	 *
	 * @param string $extra
	 *
	 * @return string
	 */
	public function url( $extra = '' ) {
		return $this->url . $extra;
	}

	/**
	 * Returns Current Theme Dir.
	 *
	 * @param string $extra
	 *
	 * @return string
	 */
	public function dir( $extra = '' ) {
		return $this->dir . $extra;
	}

	/**
	 * Fetches Module's Instance.
	 *
	 * @return \WPOnion\Bridge\Module_Utility|\WPOnion\Bridge\Module|bool
	 * @since 1.5
	 */
	public function module_instance() {
		if ( is_string( $this->instance ) ) {
			$this->instance = wponion_callback( 'wponion_' . $this->module() . '_registry', array( $this->instance ) );
		}
		return $this->instance;
	}

	/**
	 * Renders HTML for current module.
	 *
	 * @since 1.5
	 */
	public function render() {
		if ( false !== $this->find_html_file( $this->module() . '.php' ) ) {
			include $this->find_html_file( $this->module() . '.php' );
		}
	}

	/**
	 * Loads A Given File From Theme.
	 *
	 * @param      $file
	 * @param bool $is_require
	 */
	public function load_file( $file, $is_require = false ) {
		if ( file_exists( $this->dir( $file ) ) ) {
			if ( $is_require ) {
				require $this->dir( $file );
			} else {
				include $this->dir( $file );
			}
		}
	}

	/**
	 * Searches And returns files path
	 *
	 * @param $file
	 *
	 * @return string
	 */
	protected function find_html_file( $file ) {
		return file_exists( $this->dir . $file ) ? $this->dir . $file : false;
	}
}
