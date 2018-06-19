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

if ( ! class_exists( '\WPOnion\Theme' ) ) {
	/**
	 * Class Theme
	 *
	 * @package WPOnion
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	abstract class Theme extends \WPOnion\Bridge {
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
		 * WPOnion_Theme_Abstract constructor.
		 *
		 * @param        $plugin_id
		 * @param string $theme_file
		 */
		public function __construct( $plugin_id, $theme_file = __FILE__ ) {
			add_action( 'admin_enqueue_scripts', array( &$this, 'register_assets' ), 1 );
			$this->dir       = plugin_dir_path( $theme_file );
			$this->url       = plugin_dir_url( $theme_file );
			$this->plugin_id = $plugin_id;
			wponion_core_registry( $this );
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
			return wponion_settings_registry( $this->plugin_id );
		}

		/**
		 * Returns Metabox Instance.
		 *
		 * @return \WPOnion\Modules\metabox
		 */
		public function metabox() {
			return wponion_metabox_registry( $this->plugin_id );
		}

		/**
		 * Returns Dashboard Instance.
		 *
		 * @return \WPOnion\Modules\Dashboard_Widgets
		 */
		public function dashboard_widgets() {
			return wponion_dashboard_registry( $this->plugin_id );
		}

		/**************************************************************************************************************
		 * Below Functions Are Related To Settings Module
		 *************************************************************************************************************/

		/**
		 * This function called twice inside a loop
		 * 1. For starting
		 * 2. For Ending.
		 *
		 * @param string $return
		 * @param string $place
		 * @param array  $options
		 * @param bool   $is_parent_active
		 *
		 * @return string
		 */
		public function settings_tab_level1_wrap( $return = '', $place = 'start', $options = array(), $is_parent_active = false ) {
			if ( 'start' === $place ) {
				return $return;
			} else {
				return $return;
			}
		}

		/**
		 * This function called twice inside a loop
		 * 1. For starting
		 * 2. For Ending.
		 *
		 * @param string $return
		 * @param string $place
		 * @param array  $options
		 * @param bool   $is_parent_active
		 *
		 * @return string
		 */
		public function settings_tab_wrap_after( $return = '', $place = 'start', $options = array(), $is_parent_active = false ) {
			if ( 'start' === $place ) {
				return $return;
			} else {
				return $return;
			}
		}

		/**************************************************************************************************************
		 * Above Functions Are Related To Settings Module
		 *************************************************************************************************************/
	}
}
