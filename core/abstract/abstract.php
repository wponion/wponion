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
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
if ( ! class_exists( 'WPOnion_Abstract' ) ) {
	/**
	 * Class WPOnion_Abstract
	 *
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	abstract class WPOnion_Abstract {
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
		protected $type = '';

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
			if ( ! is_array( $new ) ) {
				$new = array();
			}
			return wp_parse_args( $new, $defaults );
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
		 * @param     $hook
		 * @param     $function_to_add
		 * @param int $priority
		 * @param int $accepted_args
		 *
		 * @uses add_action
		 */
		public function add_action( $hook, $function_to_add, $priority = 30, $accepted_args = 1 ) {
			add_action( $hook, array( &$this, $function_to_add ), $priority, $accepted_args );
		}

		/**
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
				return 'wponion_' . $this->type . '_';
			}
			return 'wponion_' . $this->type . '_' . $this->plugin_id() . '_';
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
		 * @param string $key
		 * @param bool   $default
		 *
		 * @return bool|mixed
		 */
		public function option( $key = '', $default = false ) {
			if ( isset( $this->settings[ $key ] ) ) {
				return $this->settings[ $key ];
			}
			return $default;
		}

		/**
		 * @return array
		 */
		public function plugin_id() {
			return $this->plugin_id;
		}
	}
}
