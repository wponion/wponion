<?php
/**
 *
 * Initial version created 08-05-2018 / 10:41 AM
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @package
 * @link
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

namespace WPOnion;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Theme_API' ) ) {
	/**
	 * Class Theme
	 *
	 * @package WPOnion
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	abstract class Theme_API extends Bridge {
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
		 * Stores Custom Unique Data.
		 *
		 * @var null
		 */
		protected $unique = null;

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
			$data = $this->parse_args( $data, array(
				'plugin_id'   => false,
				'unique'      => false,
				'instance_id' => false,
			) );
			add_action( 'admin_enqueue_scripts', array( &$this, 'register_assets' ), 1 );
			$this->dir             = plugin_dir_path( $theme_file );
			$this->url             = plugin_dir_url( $theme_file );
			$this->theme           = $theme_name;
			$this->plugin_id       = $data['plugin_id'];
			$this->unique          = $data['unique'];
			$this->module_instance = $data['instance_id'];
			wponion_theme_registry( $this );
		}

		/**
		 * @param bool $is_active
		 *
		 * @return string
		 */
		public function get_submenu_indicator( $is_active = false ) {
			$class = array(
				'active'   => 'dashicons-arrow-down-alt2',
				'inactive' => 'dashicons-arrow-right-alt2',
			);

			if ( $is_active ) {
				return '<i class="wponion-submenu-i dashicons ' . $class['active'] . '" data-toggle-class="wponion-submenu-i dashicons ' . $class['inactive'] . '"></i>';
			}
			return '<i class="wponion-submenu-i dashicons ' . $class['inactive'] . '" data-toggle-class="wponion-submenu-i dashicons ' . $class['active'] . '"></i>';

		}

		/**
		 * Creates Custom Unique Code.
		 *
		 * @return string
		 */
		public function uid() {
			return $this->theme . '_' . $this->unique . '_' . $this->plugin_id;
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
		 * Handles Assets Url.
		 *
		 * @param string $url
		 * @param string $ext
		 *
		 * @return string
		 */
		protected function asset( $url = '', $ext = 'css' ) {
			return wponion_debug_assets( $this->url( $url ), $ext );
		}

		/**
		 * Returns Settings Instance.
		 *
		 * @return \WPOnion\Modules\Settings
		 */
		public function settings() {
			return wponion_settings_registry( $this->module_instance );
		}

		/**
		 * Returns Metabox Instance.
		 *
		 * @return \WPOnion\Modules\metabox
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
		 * @return \WPOnion\Modules\Dashboard_Widgets
		 */
		public function dashboard_widgets() {
			return wponion_dashboard_widgets_registry( $this->module_instance );
		}

		/**
		 * Returns Dashboard Instance.
		 *
		 * @return \WPOnion\Modules\Dashboard_Widgets
		 */
		public function widgets() {
			return wponion_widget_registry( $this->module_instance );
		}

		/**
		 * Returns Help Tab Instance.
		 *
		 * @return \WPOnion\Modules\Help_Tabs
		 */
		public function help_tabs() {
			return wponion_help_tabs_registry( $this->module_instance );
		}


		/**
		 * Returns User Profile Instance.
		 *
		 * @return mixed
		 */
		public function user_profile() {
			return wponion_user_profile_registry( $this->module_instance );
		}

		/**
		 * Returns Screen Options Instance.
		 *
		 * @return bool
		 */
		public function screen_options() {
			return wponion_screen_options_registry( $this->module_instance );
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
			return wponion_locate_template( $this->theme . '/' . $this->theme . '-' . $file, $this->dir );
		}

		/**
		 * Generates Metabox HTML Webpage.
		 */
		public function render_metabox_html() {
			include $this->find_html_file( 'metabox-html.php' );
		}

		/**
		 * Generates Settings Page HTML.
		 */
		public function render_settings_html() {
			include $this->find_html_file( 'settings-html.php' );
		}

		/**
		 * Generates Taxonomy Page HTML.
		 */
		public function render_taxonomy_html() {
			include $this->find_html_file( 'taxonomy-html.php' );
		}

		/**
		 * Generates User Profile HTML.
		 */
		public function render_user_profile_html() {
			include $this->find_html_file( 'user-profile-html.php' );
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
		public function render_widgets_html() {
			include $this->find_html_file( 'widgets.php' );
		}

		/**
		 * Generates Screen Options HTML.
		 */
		public function render_screen_options() {
			include $this->find_html_file( 'screen-options.php' );
		}

		/**
		 * Generates Help Tabs HTML.
		 */
		public function render_help_tabs() {
			include $this->find_html_file( 'help-tabs.php' );
		}
	}
}
