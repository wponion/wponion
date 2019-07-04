<?php

namespace WPOnion\Utils;

use WPOnion\Traits\Class_Options;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Utils\Icon' ) ) {
	/**
	 * Class Icon
	 *
	 * @package WPOnion\Utils
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Icon {
		/**
		 * Uses Class Default Functions.
		 */
		use Class_Options;

		/**
		 * Icon constructor.
		 *
		 * @param array $args
		 */
		public function __construct( $args = array() ) {
			$this->set_args( $args, array(
				'name'       => false,
				'slug'       => false,
				'assets'     => false,
				'css_prefix' => false,
				'icons'      => false,
			) );

			if ( ! is_array( $this->option( 'assets' ) ) ) {
				$this->set_option( 'assets', array( $this->option( 'assets' ) ) );
			}

			if ( empty( $this->option( 'slug' ) ) ) {
				$this->set_option( 'slug', sanitize_title( $this->option( 'name' ) ) );
			}
		}

		/**
		 * registers With WPOnion Icon Handler.
		 *
		 * @return $this
		 */
		public function register() {
			Icons::add( $this );
			return $this;
		}

		/**
		 * @return mixed
		 */
		public function slug() {
			return $this->option( 'slug' );
		}

		/**
		 * @return mixed
		 */
		public function name() {
			return $this->option( 'name' );
		}

		/**
		 * Returns Icons
		 *
		 * @return array
		 */
		public function icons() {
			return $this->option( 'icons', array() );
		}

		/**
		 * @param bool $is_load
		 *
		 * @return mixed
		 */
		public function assets( $is_load = false ) {
			$asset = $this->option( 'assets' );

			if ( true === $is_load ) {
				foreach ( array_filter( $asset ) as $handle ) {
					wponion_load_asset( $handle );
				}
			}
			return $asset;

		}

		/**
		 * Returns CSS Prefix.
		 *
		 * @return mixed
		 */
		public function css_prefix() {
			return $this->option( 'css_prefix' );
		}

		/**
		 * @param string $icon
		 * @param array  $args
		 *
		 * @return $this
		 */
		public function add( $icon = '', $args = array() ) {
			$this->set_option( 'icons/' . $icon, wp_parse_args( $args, array(
				'title'  => $icon,
				'search' => array(),
			) ) );
			return $this;
		}
	}
}
