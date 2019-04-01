<?php

namespace WPOnion\WP\Assets;
if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\WP\Assets\Asset' ) ) {
	/**
	 * Class Asset
	 *
	 * @package WPOnion\WP\Assets
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Asset {
		/**
		 * @var string
		 */
		protected $type = null;

		/**
		 * Name of the script / style. Should be unique.
		 *
		 * @var string
		 */
		protected $handle = null;

		/**
		 * Full URL of the script / style, or path of the script / style relative to the WordPress root directory
		 *
		 * @var string
		 */
		protected $src = null;

		/**
		 * An array of registered script / style handles this script / style depends on
		 *
		 * @var array|false
		 * @access
		 */
		protected $dep = null;

		/**
		 * String specifying script version number, if it has one,
		 * which is added to the URL as a query string for cache busting purposes.
		 * If version is set to false,
		 * a version number is automatically added equal to current installed WordPress version.
		 * If set to null, no version is added.
		 *
		 * @var false|bool|string
		 * @access
		 */
		protected $ver = null;

		/**
		 * Whether to enqueue the script before </body> instead of in the <head>.
		 * The media for which this stylesheet has been defined.
		 * Accepts media types like 'all', 'print' and 'screen', or
		 * media queries like '(orientation: portrait)' and '(max-width: 640px)'.
		 *
		 * @var string
		 */
		protected $in_footer_meda = null;

		/**
		 * Stores All Load if Conditions.
		 *
		 * @var array
		 * @access
		 */
		protected $load_if = array();

		/**
		 * Asset constructor.
		 *
		 * @param string $type
		 * @param null   $handle
		 * @param null   $src
		 * @param array  $dep
		 * @param bool   $ver
		 * @param null   $in_footer_media
		 */
		public function __construct( $type = 'script', $handle = null, $src = null, $dep = array(), $ver = false, $in_footer_media = null ) {
			if ( 'style' === $type && null === $in_footer_media ) {
				$in_footer_media = 'all';
			} elseif ( 'script' === $type && null === $in_footer_media ) {
				$in_footer_media = false;
			}

			$this->type           = $type;
			$this->handle         = $handle;
			$this->src            = $src;
			$this->dep            = $dep;
			$this->ver            = $ver;
			$this->in_footer_meda = $in_footer_media;
		}

		/**
		 * Common Assets Args Functions.(setters)
		 */

		/**
		 * @param $handle
		 *
		 * @return \WPOnion\WP\Assets\Asset
		 */
		public function set_handle( $handle ) {
			$this->handle = $handle;
			return $this;
		}

		/**
		 * @param $src
		 *
		 * @return \WPOnion\WP\Assets\Asset
		 */
		public function set_src( $src ) {
			$this->src = $src;
			return $this;
		}

		/**
		 * @param $dep
		 *
		 * @return \WPOnion\WP\Assets\Asset
		 */
		public function set_dep( $dep ) {
			$dep       = ( is_string( $dep ) ) ? array( $dep ) : $dep;
			$this->dep = array_filter( $dep );
			return $this;
		}

		/**
		 * @param $ver
		 *
		 * @return \WPOnion\WP\Assets\Asset
		 */
		public function set_ver( $ver ) {
			$this->ver = $ver;
			return $this;
		}

		/**
		 * @param $media
		 *
		 * @return $this
		 */
		public function set_in_footer_media( $media ) {
			return $this;
		}

		/**
		 * @param $footer
		 *
		 * @return \WPOnion\WP\Assets\Asset
		 */
		public function set_in_footer( $footer ) {
			return $this->set_in_footer_media( $footer );
		}

		/**
		 * @param $media
		 *
		 * @return \WPOnion\WP\Assets\Asset
		 */
		public function set_media( $media ) {
			return $this->set_in_footer_media( $media );
		}

		/**
		 *
		 */

		public function register() {

		}

	}
}
