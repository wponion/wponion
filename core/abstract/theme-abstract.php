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

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( 'WPOnion_Theme_Abstract' ) ) {
	abstract class WPOnion_Theme_Abstract extends WPOnion_Abstract {

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
		 * @param \WPOnion_Settings $settings_instance
		 * @param string            $theme_file
		 */
		public function __construct( $plugin_id, $theme_file = __FILE__ ) {
			add_action( 'admin_enqueue_scripts', array( &$this, 'register_assets' ), 1 );
			$this->dir       = plugin_dir_path( $theme_file );
			$this->url       = plugin_dir_url( $theme_file );
			$this->plugin_id = $plugin_id;
			wponion_core_registry( $this );
		}

		abstract function register_assets();

		/**
		 * Returns Current Theme URL.
		 *
		 * @return string
		 */
		public function url() {
			return $this->url;
		}

		/**
		 * Returns Current Theme Dir.
		 *
		 * @return string
		 */
		public function dir() {
			return $this->dir;
		}

		/**
		 * Returns Settings Instance.
		 *
		 * @return mixed
		 */
		public function settings() {
			return wponion_settings_registry( $this->plugin_id );
		}
	}
}
