<?php
/**
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @link
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

namespace WPOnion;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Addon' ) ) {
	/**
	 * Class Addon
	 *
	 * @package WPOnion
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	abstract class Addon {
		/**
		 * Stores Addon File.
		 *
		 * @var null
		 * @access
		 */
		protected $addon_file = null;

		/**
		 * Addon Name.
		 *
		 * @var null
		 * @access
		 */
		protected $addon_name = null;

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
		 * Stores All Instance.
		 *
		 * @var array
		 * @access
		 */
		protected static $instances = array();

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
		 * @param bool   $addon_name
		 * @param string $addon_file
		 * @param null   $version
		 */
		public function __construct( $addon_name = false, $addon_file = __FILE__, $version = null ) {
			$this->addon_name = $addon_name;
			$this->addon_file = $addon_file;
			$this->version    = $version;
			$this->dir        = plugin_dir_path( $addon_file );
			$this->url        = plugin_dir_url( $addon_file );
			add_action( 'wponion_register_assets_after', array( &$this, 'register_assets' ) );
		}

		/**
		 * Stores And Retrive An Instance.
		 *
		 * @return $this|static|\WPOnion\Addon
		 */
		public static function instance() {
			if ( ! isset( self::$instances[ static::class ] ) ) {
				self::$instances[ static::class ] = new static();
			}
			return self::$instances[ static::class ];
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
