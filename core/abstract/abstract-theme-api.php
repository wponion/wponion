<?php

namespace WPOnion;

use WPOnion\Traits\Internal\Unique;

defined( 'ABSPATH' ) || exit;

if ( ! class_exists( '\WPOnion\Theme_API' ) ) {
	/**
	 * Class Theme
	 *
	 * @package WPOnion
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 */
	abstract class Theme_API extends Bridge {
		use Unique;

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
		protected $module_instance = null;

		/**
		 * Theme_API constructor.
		 *
		 * @param        $data
		 * @param string $theme_file
		 * @param bool   $theme_name
		 */
		public function __construct( $data, $theme_file = __FILE__, $theme_name = false ) {
			$data                  = $this->parse_args( $data, array(
				'unique'      => false,
				'instance_id' => false,
			) );
			$this->dir             = plugin_dir_path( $theme_file );
			$this->url             = plugin_dir_url( $theme_file );
			$this->theme           = $theme_name;
			$this->unique          = $data['unique'];
			$this->module_instance = $data['instance_id'];

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
		 * Returns Settings Instance.
		 *
		 * @return \WPOnion\Modules\Settings\Settings
		 */
		public function settings() {
			return wponion_settings_registry( $this->module_instance );
		}

		/**
		 * Returns Metabox Instance.
		 *
		 * @return \WPOnion\Modules\Metabox\metabox
		 */
		public function metabox() {
			return wponion_metabox_registry( $this->module_instance );
		}

		/**
		 * Returns Taxonomy Instance.
		 *
		 * @return mixed
		 */
		public function taxonomy() {
			return wponion_taxonomy_registry( $this->module_instance );
		}

		/**
		 * Returns Dashboard Instance.
		 *
		 * @return \WPOnion\Modules\Widgets\Dashboard
		 */
		public function dashboard_widgets() {
			return wponion_dashboard_widgets_registry( $this->module_instance );
		}

		/**
		 * Returns Dashboard Instance.
		 *
		 * @return \WPOnion\Modules\Widgets\Dashboard
		 */
		public function widgets() {
			return wponion_widget_registry( $this->module_instance );
		}

		/**
		 * Returns Help Tab Instance.
		 *
		 * @return \WPOnion\Modules\Util\Help_Tabs
		 */
		public function help_tabs() {
			return wponion_help_tabs_registry( $this->module_instance );
		}

		/**
		 * Returns User Profile Instance.
		 *
		 * @return bool|\WPOnion\Modules\User_Profile
		 */
		public function user_profile() {
			return wponion_user_profile_registry( $this->module_instance );
		}

		/**
		 * Returns Nav Menu Instance.
		 *
		 * @return bool|\WPOnion\Modules\Nav_Menu
		 */
		public function nav_menu() {
			return wponion_nav_menu_registry( $this->module_instance );
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

		/**
		 * Generates Metabox HTML Webpage.
		 */
		public function render_metabox() {
			include $this->find_html_file( 'metabox.php' );
		}

		/**
		 * Generates Settings Page HTML.
		 */
		public function render_settings() {
			include $this->find_html_file( 'settings.php' );
		}

		/**
		 * Generates Taxonomy Page HTML.
		 */
		public function render_taxonomy() {
			include $this->find_html_file( 'taxonomy.php' );
		}

		/**
		 * Generates User Profile HTML.
		 */
		public function render_user_profile() {
			include $this->find_html_file( 'user-profile.php' );
		}

		/**
		 * Generates Taxonomy Page HTML.
		 */
		public function render_dashboard_widgets() {
			include $this->find_html_file( 'dashboard-widgets.php' );
		}

		/**
		 * Generates Taxonomy Page HTML.
		 */
		public function render_widgets() {
			include $this->find_html_file( 'widgets.php' );
		}

		/**
		 * Generates Help Tabs HTML.
		 */
		public function render_help_tabs() {
			include $this->find_html_file( 'help-tabs.php' );
		}

		/**
		 * Generates Nav Menu HTML.
		 */
		public function render_nav_menu() {
			include $this->find_html_file( 'nav-menu.php' );
		}
	}
}
