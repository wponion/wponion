<?php

namespace WPOnion;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( '\WPOnion\Bridge' ) ) {
	/**
	 * Class Bridge
	 *
	 * @package WPOnion
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	abstract class Bridge {

		/**
		 * Settings
		 *
		 * @var array
		 */
		protected $settings = array();

		/**
		 * Type - Value can be anything like (settings,text_field)
		 *
		 * @var string
		 */
		protected $module = '';

		/**
		 * Merges And sets the given args
		 *
		 * @param array $options .
		 * @param array $defaults .
		 *
		 * @return array
		 */
		public function set_args( $options = array(), $defaults = array() ) {
			$defaults = empty( $defaults ) ? $this->defaults() : $defaults;
			$options  = $this->parse_args( $options, $defaults );
			return $options;
		}

		/**
		 * Merges given array
		 *
		 * @param array $new .
		 * @param array $defaults .
		 *
		 * @return array
		 */
		protected function parse_args( $new = array(), $defaults = array() ) {
			return wponion_parse_args( $new, $defaults );
		}

		/**
		 * Returns a default array.
		 *
		 * @return array
		 */
		protected function defaults() {
			return array();
		}

		/**
		 * Add a function to a hook with like add_action() function dose.
		 *
		 * @param string         $hook
		 * @param callable|array $function_to_add
		 * @param int            $priority
		 * @param int            $accepted_args
		 *
		 * @uses add_action
		 */
		public function add_action( $hook, $function_to_add, $priority = 30, $accepted_args = 1 ) {
			add_action( $hook, array( &$this, $function_to_add ), $priority, $accepted_args );
		}

		/**
		 * add a function to a hook with like add_filter() function dose.
		 *
		 * @param     $tag
		 * @param     $function_to_add
		 * @param int $priority
		 * @param int $accepted_args
		 *
		 * @uses add_action
		 */
		public function add_filter( $tag, $function_to_add, $priority = 30, $accepted_args = 1 ) {
			add_filter( $tag, array( &$this, $function_to_add ), $priority, $accepted_args );
		}

		/**
		 * Checks for values in $this->settings and returns it if exists.
		 *
		 * @param string $key
		 * @param bool   $default
		 *
		 * @return bool|mixed
		 */
		public function option( $key = '', $default = false ) {
			if ( true === $key ) {
				return $this->settings;
			}
			return ( isset( $this->settings[ $key ] ) ) ? $this->settings[ $key ] : $default;
		}

		/**
		 * Updates $this->settings array.
		 *
		 * @param $key
		 * @param $value
		 *
		 * @return $this
		 */
		public function set_option( $key, $value ) {
			$this->settings[ $key ] = $value;
			return $this;
		}

		/**
		 * Returns Current Module Slug.
		 *
		 * @return string
		 */
		public function module() {
			return $this->module;
		}

		/**
		 * Checks And handles data.
		 *
		 * @param array  $data
		 * @param array  $defaults
		 * @param string $save_with
		 *
		 * @return array
		 */
		protected function handle_data( $data = array(), $defaults = array(), $save_with = '' ) {
			if ( true === $data ) {
				return $data;
			} elseif ( is_array( $data ) ) {
				return $this->parse_args( $data, $defaults );
			} elseif ( false !== $data && isset( $defaults[ $save_with ] ) ) {
				$defaults[ $save_with ] = $data;
			}
			return $defaults;
		}

		/**
		 * Catchs Output.
		 *
		 * @param string $status
		 *
		 * @return string
		 */
		protected function catch_output( $status = 'start' ) {
			$data = '';
			if ( 'start' === $status ) {
				ob_start();
			} else {
				$data = ob_get_clean();
				ob_flush();
			}
			return $data;
		}
	}
}
