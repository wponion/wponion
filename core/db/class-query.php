<?php

namespace WPOnion\DB;

use WPOnion\Bridge;
use WPOnion\Traits\Internal\Module;
use WPOnion\Traits\Internal\Unique;

defined( 'ABSPATH' ) || exit;

/**
 * Class Query
 *
 * @package WPOnion\DB
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Query extends Bridge {
	use Unique;
	use Module;

	/**
	 * Stors Handler Instance.
	 *
	 * @var \WPOnion\DB\Query_Types\WP_Query_Base
	 * @since 1.4.6
	 */
	protected $handler = false;

	/**
	 * query_arg
	 *
	 * @var array
	 */
	protected $args = array();

	/**
	 * Stores DB Results
	 *
	 * @var array
	 * @since 1.4.5.1
	 */
	protected $results = array();

	/**
	 * Stores Query Type.
	 *
	 * @var bool
	 * @since 1.4.6
	 */
	public $type = false;

	/**
	 * Query constructor.
	 *
	 * @param null $unique
	 * @param null $module
	 */
	public function __construct( $unique = null, $module = null ) {
		$this->module = $module;
		$this->unique = $unique;
	}

	/**
	 * Clears All Stored Args.
	 *
	 * @since 1.4.6
	 */
	protected function clear() {
		$this->args     = array();
		$this->settings = array();
	}

	/**
	 * Validates & Properly Sets Args.
	 *
	 * @var array  $args Query Args.
	 * @var string $search Search Query.
	 *
	 * @since 1.4.6
	 */
	protected function handle_query_args( $args, $search ) {
		if ( ! empty( $search ) ) {
			$this->args['s'] = $search;
		}

		if ( ! empty( $args ) ) {
			$args = wponion_parse_args( $args, array(
				'option_key'      => false,
				'option_label'    => false,
				'result_callback' => false,
			) );

			$this->set_option( 'option_key', $args['option_key'] );
			$this->set_option( 'option_value', $args['option_label'] );
			$this->set_option( 'result_callback', $args['result_callback'] );

			unset( $args['option_key'] );
			unset( $args['option_label'] );
			unset( $args['result_callback'] );

			$this->args = $this->parse_args( $args, $this->args );
		}
	}

	/**
	 * Handles Query Args By Replacing true/1 and false/0
	 * into actual true/false
	 *
	 * @param string $type
	 */
	protected function handle_pre_query_args( $type ) {
		foreach ( $this->args as $id => $value ) {
			if ( ! is_array( $value ) ) {
				$this->args[ $id ] = wponion_is_bool_val( $value );
			}
		}

		/**
		 * This filter provides an option to modify DB Query args before fetching the results.
		 *
		 * @var {$this->args} Contains All Query Args as an array
		 * @var string $type Type of query.
		 * @var string {$this->unique()} Module's Unique Key.
		 * @var string {$this->module()} Module's Slug.
		 */
		$this->args = apply_filters( 'wponion/query/args', $this->args, $type, $this->unique(), $this->module() );
	}

	/**
	 * Fetches Values From Database.
	 *
	 * @since 1.4.6
	 */
	protected function get_db() {
		if ( method_exists( $this->handler, 'get_results' ) ) {
			$this->results = $this->handler->get_results( $this->args );
		} else {
			/**
			 * This action provides ability to hook with wponion.
			 *
			 * @var array  {$this->args} Contains All Query Args as an array
			 * @var string $type Type of query.
			 * @var string {$this->unique()} Module's Unique Key.
			 * @var string {$this->module()} Module's Slug.
			 */
			do_action_ref_array( 'wponion_query_database', array(
				&$this->results,
				$this->args,
				$this->type,
				$this->unique(),
				$this->module(),
			) );
		}
	}

	/**
	 * @param string $type
	 * @param array  $args
	 * @param string $search
	 *
	 * @return array
	 */
	public function query( $type = '', $args = array(), $search = null ) {
		$this->results = array();
		$this->type    = $type;
		$class         = wponion_query_module( $type );

		if ( ! empty( $class ) ) {
			$this->handler = new $class( $this );
		}

		$this->handle_query_args( $args, $search );

		if ( method_exists( $this->handler, 'setup_query_args' ) ) {
			$this->args = $this->handler->setup_query_args( $this->args );
		}

		$this->handle_pre_query_args( $type );
		$this->get_db();

		if ( is_wp_error( $this->results ) || is_null( $this->results ) || empty( $this->results ) ) {
			return array();
		}

		if ( wponion_is_callable( $this->option( 'result_callback' ) ) ) {
			$this->results = wponion_callback( $this->option( 'result_callback' ) );
		}

		/**
		 * Runs Once WP Query Is Complete.
		 *
		 * @var array  {$this->result} WP_Query Result.
		 * @var string $search User Search Query
		 * @var string $type Search Type.
		 * @var array  $args Query Args.
		 * @var string {$this->unique()} Module's Unique Key.
		 * @var string {$this->module()} Module's Slug.
		 */
		$this->results = apply_filters( 'wponion/query/results', $this->results, $search, $type, $args, $this->unique(), $this->module() );

		if ( $this->handler->is_customizable() ) {
			$this->results = $this->format_output_data();
		}

		$this->clear();
		return $this->results;
	}

	/**
	 * Formats Output Data Based on
	 * `option_key` && `option_value` arguments.
	 *
	 * @return array
	 */
	protected function format_output_data() {
		$return = array();
		if ( ! empty( $this->results ) ) {
			$option_key           = $this->option( 'option_key' );
			$option_value         = $this->option( 'option_value' );
			$default_option_key   = array( $this->handler, 'default_key' );
			$default_option_value = array( $this->handler, 'default_label' );

			foreach ( $this->results as $result_key => $result_values ) {
				$key            = $this->option_data( $option_key, $default_option_key, $result_key, $result_values );
				$value          = $this->option_data( $option_value, $default_option_value, $result_key, $result_values );
				$return[ $key ] = $value;
			}
		}
		return $return;
	}

	/**
	 * @param string|callable $key
	 * @param string|callable $default
	 * @param string|int      $result_key
	 * @param mixed           $result_values
	 *
	 * @return string|bool
	 */
	protected function option_data( $key, $default, $result_key, $result_values ) {
		if ( ! empty( $key ) ) {
			/** Callback Provides 1. Result Values , 2. Result Key */
			$args          = array( $result_values, $result_key );
			$user_callback = wponion_is_callable( $key ) ? wponion_callback( $key, $args ) : false;

			if ( ! empty( $user_callback ) && is_string( $user_callback ) ) {
				return $user_callback;
			}

			$matches = wponion_extract_template_tags( $key );
			if ( ! empty( $matches ) ) {
				foreach ( $matches as $match ) {
					if ( isset( $match[1] ) && ! empty( $match[1] ) ) {
						$key = str_replace( $match[0], $this->single_option_data( $match[1], $default, $result_key, $result_values ), $key );
					}
				}
				return $key;
			}
		}

		return $this->single_option_data( $key, $default, $result_key, $result_values );
	}

	/**
	 * @param mixed               $callback
	 * @param mixed               $default_callback
	 * @param string|int          $result_key
	 * @param string|object|array $result_value
	 *
	 * @return bool|string
	 */
	protected function single_option_data( $callback, $default_callback, $result_key, $result_value ) {
		$result = $this->_single_option( $result_value, $callback );

		if ( empty( $result ) && wponion_is_callable( $default_callback ) ) {
			$result = wponion_callback( $default_callback, array( $result_value, $result_key ) );
		}

		if ( empty( $result ) ) {
			$result = $this->_single_option( $result_value, $default_callback );
		}

		return ( is_scalar( $result ) ) ? $result : false;
	}

	/**
	 * @param string|array|object $result_values
	 * @param mixed               $callback
	 *
	 * @return bool|string
	 */
	protected function _single_option( $result_values, $callback ) {
		$result = wponion_extract_data_from_array_object( $result_values, $callback );
		return ( is_scalar( $result ) ) ? $result : false;
	}
}
