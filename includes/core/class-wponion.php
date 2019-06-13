<?php
if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( 'WPOnion' ) ) {
	/**
	 * Class WPOnion
	 *
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	final class WPOnion {
		/**
		 * Stores Current WPOnion Instance.
		 *
		 * @var bool
		 * @access
		 * @static
		 */
		protected static $instance = false;

		/**
		 * WPOnion constructor.
		 */
		public function __construct() {
		}

		/**
		 * Returns An Static Instance.
		 *
		 * @static
		 * @return bool|\WPOnion
		 */
		public static function instance() {
			if ( false === self::$instance ) {
				self::$instance = new self();
			}
			return self::$instance;
		}

		/**
		 * Returns WPOnion Version.
		 *
		 * @return string
		 */
		public function version() {
			return WPONION_VERSION;
		}

		/**
		 * Returns Current WPOnion Path.
		 *
		 * @param string $extra
		 *
		 * @return string
		 */
		public function path( $extra = '' ) {
			return WPONION_PATH . $extra;
		}

		/**
		 * @param string $extra
		 *
		 * @return string
		 */
		public function inc( $extra = '' ) {
			return $this->path( 'includes/' . $extra );
		}

		/**
		 * Returns Current WPOnion URL.
		 *
		 * @param string $extra
		 *
		 * @return string
		 */
		public function url( $extra = '' ) {
			return WPONION_URL . $extra;
		}

		/**
		 * Returns Current WPOnion File.
		 *
		 * @return string
		 */
		public function file() {
			return WPONION_FILE;
		}

		/**
		 * Returns Current Assets Path As URL.
		 *
		 * @param string $extra
		 *
		 * @return string
		 */
		public function assets( $extra = '' ) {
			return $this->url( 'assets/' . $extra );
		}

		/**
		 * Returns Current Assets Path As URL.
		 *
		 * @param string $extra
		 *
		 * @return string
		 */
		public function assets_path( $extra = '' ) {
			return $this->path( 'assets/' . $extra );
		}

		/**
		 * Returns Templates Path.
		 *
		 * @param $extra
		 *
		 * @return string
		 */
		public function tpl( $extra = '' ) {
			return $this->path( 'templates/' . $extra );
		}

		/**
		 * @param $extra
		 *
		 * @return string
		 */
		public function tpl_url( $extra = '' ) {
			return $this->url( 'templates/' . $extra );
		}

		/**
		 * @param $extra
		 *
		 * @return string
		 */
		public function data( $extra = '' ) {
			return $this->path( 'data/' . $extra );
		}

		/**
		 * @param $extra
		 *
		 * @return string
		 */
		public function data_url( $extra = '' ) {
			return $this->path( 'data/' . $extra );
		}
	}
}
