<?php
/**
 *
 * Initial version created 05-05-2018 / 06:35 PM
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @package wponion
 * @link http://github.com/wponion
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

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
		 * Plugin_id
		 * This is used in do_action & apply_filters to provide plugin developers with a custom hook to run only when
		 * their instance is created / running.
		 *
		 * @var null.
		 */
		protected $plugin_id = null;

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
		 * Custom Wrapper for both do_action & apply_filters
		 *
		 * @uses \do_action()
		 * @uses \apply_filters()
		 *
		 * @param string $type
		 * @param array  $args
		 *
		 * @return mixed
		 */
		private function action_filter( $type = '', $args = array() ) {
			return call_user_func_array( $type, $args );
		}

		/**
		 * Triggers doaction for the given slug
		 * with global & plugin Specific slugs
		 *
		 * @return mixed
		 */
		protected function _action() {
			return $this->global_action_filter( 'do_action', func_get_args() );
		}

		/**
		 * Triggers doaction & apply filter for the given slug
		 * with global & plugin Specific slugs
		 *
		 * @param string $type
		 * @param array  $args
		 *
		 * @return mixed
		 */
		protected function global_action_filter( $type = 'apply_filters', $args = array() ) {
			$_args            = $args;
			$actual_hook_slug = $args[0];
			$_args[0]         = $this->get_action_filter_slugs( true ) . $actual_hook_slug;
			$data             = $this->action_filter( $type, $_args );
			$_args[0]         = $this->get_action_filter_slugs( false ) . $actual_hook_slug;
			$data             = $this->action_filter( $type, $_args );
			return $data;
		}

		/**
		 * Returns Custom Prefix For Every Action & Filter Applied By WPSF
		 *
		 * @param bool $plugin_id
		 *
		 * @return string
		 */
		protected function get_action_filter_slugs( $plugin_id = false ) {
			if ( false === $plugin_id ) {
				return $this->generate_filter_slug( array( 'wponion', $this->module() ) );
			}
			return $this->generate_filter_slug( array( 'wponion', $this->module(), $this->plugin_id() ) );
		}

		/**
		 * Generates Slug For Apply Filters.
		 *
		 * @param array $args
		 *
		 * @return string
		 */
		protected function generate_filter_slug( $args = array() ) {
			$html = array();
			foreach ( $args as $slug ) {
				if ( ! empty( $slug ) ) {
					$html[] = $slug;
				}
			}
			return implode( '_', $html ) . '_';

		}

		/**
		 * Triggers apply filter for the given slug
		 * with global & plugin Specific slugs
		 *
		 * @return mixed
		 */
		protected function _filter() {
			return $this->global_action_filter( 'apply_filters', func_get_args() );
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
		 * Returns current plugin_id
		 *
		 * @return array
		 */
		public function plugin_id() {
			return $this->plugin_id;
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
