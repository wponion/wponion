<?php

namespace WPOnion\Traits;

use WPOnion\Helper;

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
	 * If set to true then it utliezes
	 *
	 * @uses \WPOnion\Helper::array_key_get() | array_key_set/array_key_isset/array_key_unset
	 * @var bool
	 * @since 1.5
	 */
	protected $array_helper = true;

	/**
	 * Fetchs Class Defaults.
	 *
	 * @param       $key
	 * @param mixed $defaults
	 *
	 * @return array
	 */
	protected function call_method( $key, $defaults = array() ) {
		return ( method_exists( $this, $key ) ) ? $this->$key() : $defaults;
	}

	/**
	 * Sets Option With Class.
	 *
	 * @param array $user_options
	 * @param array $defaults
	 *
	 * @return array
	 * @uses defaults
	 * @uses base_defaults
	 */
	protected function set_args( $user_options = array(), $defaults = array() ) {
		$user_options   = ( ! wponion_is_array( $user_options ) ) ? array() : $user_options;
		$base_defauls   = $this->call_method( 'base_defaults', false );
		$defaults       = $this->call_method( 'defaults', $defaults );
		$defaults       = ( ! empty( $base_defauls ) ) ? $this->parse_args( $defaults, $base_defauls ) : $defaults;
		$this->settings = ( ! empty( $defaults ) ) ? $this->parse_args( $user_options, $defaults ) : $user_options;
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
		return wponion_parse_args( wponion_cast_array( $new ), wponion_cast_array( $defaults ) );
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
		wponion_deprecated_function( __METHOD__, '1.5', 'option' );
		return $this->option( $key, $default );
	}

	/**
	 * Sets Default Option Value if option does not exists.
	 *
	 * @param string $key
	 * @param mixed  $default
	 *
	 * @return $this
	 * @since 1.5
	 */
	protected function set_option_default( $key, $default ) {
		if ( ! $this->has_option( $key ) ) {
			$this->set_option( $key, $default );
		}
		return $this;
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
		if ( $this->array_helper ) {
			Helper::array_key_set( $key, $value, $this->settings, $this->array_key_delimiter );
		} else {
			$this->settings[ $key ] = $value;
		}
		return $this;
	}

	/**
	 * Removes A Value From Stored Options.
	 *
	 * @param $key
	 *
	 * @return $this
	 * @since 1.5
	 */
	protected function remove_option( $key ) {
		if ( is_string( $key ) ) {
			if ( $this->array_helper ) {
				Helper::array_key_unset( $key, $this->settings, $this->array_key_delimiter );
			} else {
				unset( $this->settings[ $key ] );
			}
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
	 * @since 1.5
	 */
	protected function has_option( $key ) {
		return ( $this->array_helper ) ? Helper::array_key_isset( $key, $this->settings, $this->array_key_delimiter ) : isset( $this->settings[ $key ] );
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
		if ( empty( $key ) ) {
			return $this->settings;
		}

		if ( $this->array_helper ) {
			return Helper::array_key_get( $key, $this->settings, $default, $this->array_key_delimiter );
		}
		return ( isset( $this->settings[ $key ] ) ) ? $this->settings[ $key ] : $default;
	}
}
