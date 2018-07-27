<?php
/**
 *
 * Project : wponion
 * Date : 26-07-2018
 * Time : 03:38 PM
 * File : wponion.php
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @package bullet-wp
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( 'WPOnion_Loader' ) ) {
	/**
	 * Class WPOnion_Loader
	 *
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	final class WPOnion_Loader {
		/**
		 * Variable to store VSP_Framework_Loader Class instance
		 *
		 * @var \WPOnion_Loader
		 */
		public static $_instance = null;

		/**
		 * Stores the loaded vsp framework information
		 *
		 * @var array
		 */
		public static $_loaded = array();

		/**
		 * data
		 *
		 * @var array
		 */
		public static $data = array();

		/**
		 * VSP_Framework_Loader constructor.
		 */
		public function __construct() {
			add_action( 'plugins_loaded', [ &$this, 'load_framework' ], 0 );
		}

		/**
		 * Loads Framework From A Plugin which has the latest version
		 */
		public function load_framework() {
			$latest_version = max( array_keys( self::$data ) );
			$info           = ( isset( self::$data[ $latest_version ] ) ) ? self::$data[ $latest_version ] : [];

			if ( empty( $info ) ) {
				$msg = base64_encode( wp_json_encode( self::$data ) );
				$ms  = __( 'Unable To Load WPOnion Framework. Please Contact The Author' );
				$ms  = $ms . '<p style="word-break: break-all;"> <strong>' . __( 'ERROR ID : ' ) . '</strong>' . $msg . '</p>';
				wp_die( $ms );
			}
			self::$_loaded = array(
				'path'    => $info,
				'version' => $latest_version,
			);
			require $info . 'wponion-init.php';
		}

		/**
		 * Creates A Static Instances
		 *
		 * @return \WPOnion_Loader
		 */
		public static function instance() {
			if ( null === self::$_instance ) {
				self::$_instance = new self();
			}
			return self::$_instance;
		}

		/**
		 * Stores Framework Version & its details
		 *
		 * @param string      $data other information.
		 * @param string|bool $version framework version.
		 *
		 * @return $this
		 */
		public function add( $data = '', $version = false ) {
			if ( false === $version ) {
				$args    = get_file_data( trailingslashit( $data ) . 'wponion-init.php', array( 'version' => '@version' ) );
				$version = ( isset( $args['version'] ) && ! empty( $args['version'] ) ) ? $args['version'] : $version;
			}
			self::$data[ $version ] = trailingslashit( $data );
			return $this;
		}
	}
}

if ( ! function_exists( 'wponion_load' ) ) {
	/**
	 * Adds Passed Plugin path to the list array which later used to compare and
	 * load the framework from a plugin which has the latest version of framework
	 *
	 * @param bool   $version
	 * @param string $framework_path
	 */
	function wponion_load( $framework_path = __DIR__, $version = false ) {
		WPOnion_Loader::instance()
			->add( $framework_path, $version );
	}
}

if ( function_exists( 'wponion_load' ) ) {
	wponion_load( __DIR__ );
}
