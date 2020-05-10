<?php

namespace WPOnion\Traits;

use WPOnion\Helper;

if ( ! trait_exists( '\WPOnion\Traits\Class_Options' ) ) {
	/**
	 * Trait Class_Options
	 *
	 * @package WPOnion\Traits
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 */
	trait Class_Options {
		/**
		 * Stores Options.
		 *
		 * @var array
		 */
		protected $settings = array();

		/**
		 * @var string
		 */
		protected $array_key_delimiter = '/';

		/**
		 * Fetchs Class Defaults.
		 *
		 * @param       $key
		 * @param mixed $defaults
		 *
		 * @return array
		 */
		private function get_class_defaults( $key, $defaults = array() ) {
			return ( method_exists( $this, $key ) ) ? $this->$key() : $defaults;
		}

		/**
		 * Sets Option With Class.
		 *
		 * @param array $user_options
		 * @param array $defaults
		 *
		 * @return array
		 */
		protected function set_args( $user_options = array(), $defaults = array() ) {
			$user_options   = ( ! is_array( $user_options ) ) ? array() : $user_options;
			$defaults       = $this->parse_args( $this->get_class_defaults( 'defaults', $defaults ), $this->get_class_defaults( 'base_defaults' ) );
			$this->settings = $this->parse_args( $user_options, $defaults );
			return $this->settings;
		}

		/**
		 * Merges given array
		 *
		 * @param array $new
		 * @param array $defaults
		 *
		 * @return array
		 */
		protected function parse_args( $new = array(), $defaults = array() ) {
			$new      = ( ! is_array( $new ) ) ? array() : $new;
			$defaults = ( ! is_array( $defaults ) ) ? array() : $defaults;
			return wponion_parse_args( $new, $defaults );
		}

		/**
		 * Sets A Value With Options.
		 *
		 * @param string $key
		 * @param mixed  $value
		 *
		 * @return $this
		 */
		protected function set_option( $key, $value ) {
			Helper::array_key_set( $key, $value, $this->settings, $this->array_key_delimiter );
			return $this;
		}

		/**
		 * Checks for values in $this->settings and returns it if exists.
		 *
		 * @param string $key
		 * @param bool   $default
		 *
		 * @return mixed
		 */
		protected function get_option( $key, $default = false ) {
			wponion_deprecated_function( __METHOD__, '1.4.6.1', 'option' );
			return $this->option( $key, $default );
		}

		/**
		 * Removes A Value From Stored Options.
		 *
		 * @param $key
		 *
		 * @return $this
		 * @since {NEWVERSION}
		 */
		protected function remove_option( $key ) {
			if ( is_string( $key ) ) {
				Helper::array_key_unset( $key, $this->settings, $this->array_key_delimiter );
			}

			if ( is_array( $key ) ) {
				foreach ( $key as $id ) {
					$this->remove_option( $id );
				}
			}

			return $this;
		}

		/**
		 * Checks if internal options has given key.
		 *
		 * @param $key
		 *
		 * @return bool
		 * @since {NEWVERSION}
		 */
		protected function has_option( $key ) {
			return Helper::array_key_isset( $key, $this->settings, $this->array_key_delimiter );
		}

		/**
		 * Checks for values in $this->settings and returns it if exists.
		 *
		 * @param string $key
		 * @param bool   $default
		 *
		 * @return mixed
		 */
		public function option( $key = null, $default = false ) {
			return ( empty( $key ) ) ? $this->settings : Helper::array_key_get( $key, $this->settings, $default, $this->array_key_delimiter );
		}
	}
}
