<?php

namespace WPOnion;

use WPOnion\Traits\Self_Instance;

defined( 'ABSPATH' ) || exit;

if ( ! class_exists( '\WPOnion\Addon' ) ) {
	/**
	 * Class Addon
	 *
	 * @package WPOnion
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	abstract class Addon {
		use Self_Instance;

		/**
		 * Stores Addon File.
		 *
		 * @var null
		 * @access
		 */
		protected $file = null;

		/**
		 * Addon Name.
		 *
		 * @var null
		 * @access
		 */
		protected $name = null;

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
		 * Stores Version Information.
		 *
		 * @var null
		 * @access
		 */
		protected $version = null;

		/**
		 * Addon constructor.
		 *
		 * @param bool   $name
		 * @param string $file
		 * @param null   $version
		 */
		public function __construct( $name = false, $file = __FILE__, $version = null ) {
			$this->name    = $name;
			$this->file    = $file;
			$this->version = $version;
			$this->dir     = plugin_dir_path( $file );
			$this->url     = plugin_dir_url( $file );
			add_action( 'wponion_register_assets_after', array( &$this, 'register_assets' ) );
		}

		/**
		 * Returns Current Addon URL.
		 *
		 * @param string $extra
		 *
		 * @return string
		 */
		public function url( $extra = '' ) {
			return $this->url . $extra;
		}

		/**
		 * Returns Current Addon Dir.
		 *
		 * @param string $extra
		 *
		 * @return string
		 */
		public function dir( $extra = '' ) {
			return $this->dir . $extra;
		}

		/**
		 * Hooks with WPonion To Allow Devs To Register Their Assets.
		 *
		 * @hook wponion_register_assets_after
		 */
		public function register_assets() {
		}
	}
}
