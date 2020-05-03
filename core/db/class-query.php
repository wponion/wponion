<?php

namespace WPOnion\DB;

use WP_Query;
use WPOnion\Bridge;
use WPOnion\Helper;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\DB\Query' ) ) {
	/**
	 * Class Query
	 *
	 * @package WPOnion\DB
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Query extends Bridge {
		/**
		 * query
		 *
		 * @var null
		 */
		protected $query = null;

		/**
		 * Stores Unique Key
		 *
		 * @var null
		 */
		protected $unique = null;

		/**
		 * query_arg
		 *
		 * @var array
		 */
		protected $query_args = array();

		/**
		 * Stores DB Results
		 *
		 * @var array
		 * @since 1.4.5.1
		 */
		protected $results = array();

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
		 * @since 1.4.5.4
		 */
		protected function clear() {
			$this->query      = null;
			$this->query_args = array();
			$this->settings   = array();
		}

		/**
		 * Handles Query Type.
		 *
		 * @param string $type
		 *
		 * @since 1.4.5.4
		 */
		protected function setup_query_args( $type ) {
			$this->set_option( 'query_db_type', $type );
			switch ( $type ) {
				case 'pages':
				case 'page':
				case 'posts':
				case 'post':
					if ( ! isset( $this->query_args['post_type'] ) ) {
						$this->query_args['post_type'] = ( in_array( $type, array(
							'posts',
							'post',
						), true ) ) ? 'post' : 'page';
					}
					$this->set_option( 'query_db_type', 'custom_post_type' );
					$this->set_option( 'default_option_key', 'ID' );
					$this->set_option( 'default_option_value', 'post_title' );
					break;

				case 'categories':
				case 'category':
				case 'tags':
				case 'tag':
					if ( ! isset( $this->query_args['taxonomy'] ) ) {
						$this->query_args['taxonomy'] = ( in_array( $type, array(
							'tags',
							'tag',
						), true ) ) ? 'post_tag' : 'category';
					}
					if ( ! empty( $this->query_args['s'] ) ) {
						$this->query_args['search'] = $this->query_args['s'];
						unset( $this->query_args['s'] );
					}
					$this->set_option( 'query_db_type', 'terms' );
					$this->set_option( 'default_option_key', 'term_id' );
					$this->set_option( 'default_option_value', 'name' );
					break;

				case 'users':
					$this->set_option( 'default_option_key', 'ID' );
					$this->set_option( 'default_option_value', 'user_login' );
					break;

				case 'menus':
					$this->set_option( 'default_option_key', 'term_id' );
					$this->set_option( 'default_option_value', 'name' );
					break;

				case 'body_layouts':
				case 'body_layout':
				case 'header_layouts':
				case 'header_layout':
				case 'sidebar_layouts':
				case 'sidebar_layout':
					$layout = str_replace( array( '_layouts', '_layout' ), '', $type );
					$this->set_option( 'query_db_type', $layout . '_layout' );
					break;
			}
		}

		/**
		 * Validates & Properly Sets Args.
		 *
		 * @var array  $args Query Args.
		 * @var string $search Search Query.
		 *
		 * @since 1.4.5.4
		 */
		protected function handle_query_args( $args, $search ) {
			$this->set_option( 'option_key', 'ID' );
			$this->set_option( 'option_value', 'name' );
			$this->set_option( 'default_option_key', 'ID' );
			$this->set_option( 'default_option_value', 'name' );
			$this->set_option( 'customizable', true );

			if ( ! empty( $search ) ) {
				$this->query_args['s'] = $search;
			}

			if ( ! empty( $args ) ) {
				$op_key   = isset( $args['option_key'] ) ? $args['option_key'] : 'ID';
				$op_value = isset( $args['option_label'] ) ? $args['option_label'] : 'name';
				$is_all   = ( false === $op_key && false === $op_value );
				$callback = isset( $args['result_callback'] ) ? $args['result_callback'] : 'ID';

				$this->set_option( 'result_callback', $callback );
				$this->set_option( 'has_option_label_key', $is_all );
				$this->set_option( 'option_key', $op_key );
				$this->set_option( 'option_value', $op_value );

				unset( $args['option_key'] );
				unset( $args['option_label'] );
				unset( $args['result_callback'] );

				$this->query_args = $this->parse_args( $args, $this->query_args );
			}
		}

		/**
		 * Handles Query Args By Replacing true/1 and false/0
		 * into actual true/false
		 *
		 * @param string $type
		 */
		protected function handle_pre_query_args( $type ) {
			foreach ( $this->query_args as $id => $value ) {
				if ( ! is_array( $value ) ) {
					$this->query_args[ $id ] = wponion_validate_bool_val( $value );
				}
			}

			/**
			 * This filter provides an option to modify DB Query args before fetching the results.
			 *
			 * @var {$this->query_args} Contains All Query Args as an array
			 * @var string $type Type of query.
			 * @var string {$this->unique} Module's Unique Key.
			 * @var string {$this->module} Module's Slug.
			 */
			$this->query_args = apply_filters( 'wponion_query_args', $this->query_args, $type, $this->unique, $this->module );
		}

		/**
		 * Fetches Values From Database.
		 *
		 * @since 1.4.5.4
		 */
		protected function get_db() {
			switch ( $this->option( 'query_db_type' ) ) {
				case 'custom_post_type':
					$this->query   = new WP_Query( $this->query_args );
					$this->results = $this->query->posts;
					break;

				case 'terms':
					$this->results = get_terms( $this->query_args );
					break;

				case 'menus':
					$this->results = wp_get_nav_menus( $this->query_args );
					break;

				case 'users':
					$this->results = get_users( $this->query_args );
					break;

				case 'post_types':
					$this->results = Helper::get_post_types();
					$this->set_option( 'customizable', false );
					break;

				case 'menu_location':
					$this->results = get_registered_nav_menus();
					$this->set_option( 'customizable', false );
					break;

				case 'currency':
				case 'currency_symbol':
					$this->results = ( 'currency_symbol' === $this->option( 'query_db_type' ) ) ? Helper::get_currency_symbol() : Helper::get_currency();
					$this->set_option( 'customizable', false );
					break;

				case 'body_layout':
				case 'header_layout':
				case 'sidebar_layout':
					$layout        = str_replace( '_layout', '', $this->option( 'query_db_type' ) );
					$size          = ( isset( $args['size'] ) ) ? $args['size'] : '200';
					$exclude       = ( isset( $args['exclude'] ) ) ? $args['exclude'] : array();
					$this->results = wponion_layouts_field_option( $layout, $size, $exclude );
					$this->set_option( 'customizable', false );
					break;
				case 'sidebars':
					global $wp_registered_sidebars;
					$this->results = $wp_registered_sidebars;
					$this->set_option( 'customizable', false );
					break;
			}
		}

		/**
		 * @param string $type
		 * @param array  $args
		 * @param null   $search
		 *
		 * @return array
		 */
		public function query( $type = '', $args = array(), $search = null ) {
			$this->results = array();
			$this->handle_query_args( $args, $search );
			$this->setup_query_args( $type );
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
			 * @var string {$this->unique} Module's Unique Key.
			 * @var string {$this->module} Module's Slug.
			 */
			$this->results = apply_filters( 'wponion_wp_query_result', $this->results, $search, $type, $args, $this->unique, $this->module );

			if ( true === $this->option( 'customizable' ) && false === $this->option( 'has_option_label_key' ) ) {
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
				$default_option_key   = $this->option( 'default_option_key' );
				$default_option_value = $this->option( 'default_option_value' );
				foreach ( $this->results as $values ) {
					$key            = $this->option_data( $option_key, $default_option_key, $values );
					$value          = $this->option_data( $option_value, $default_option_value, $values );
					$return[ $key ] = $value;
				}
			}
			return $return;
		}

		/**
		 * @param $key
		 * @param $default
		 * @param $data
		 *
		 * @return mixed|bool
		 */
		protected function option_data( $key, $default, $data ) {
			$matches = wponion_is_callable( $key ) ? wponion_callback( $key, array( $data ) ) : false;

			if ( ! empty( $matches ) && is_string( $matches ) ) {
				return $matches;
			} elseif ( empty( $matches ) && ! wponion_is_callable( $key ) ) {
				preg_match_all( '@\[([^<>&/\[\]\x00-\x20=]++)]@', $key, $matches, PREG_SET_ORDER, 0 );

				if ( ! empty( $matches ) ) {
					foreach ( $matches as $match ) {
						if ( isset( $match[1] ) && ! empty( $match[1] ) ) {
							$_data = $this->_single_option_data( $data, $match[1], $default );
							$key   = str_replace( $match[0], $_data, $key );
						}
					}
					return $key;
				}
			}

			return $this->_single_option_data( $data, $key, $default );
		}

		/**
		 * Returns Single data.
		 *
		 * @param $data
		 * @param $key
		 * @param $default
		 *
		 * @return bool|mixed
		 */
		protected function _single_option_data( $data, $key, $default ) {
			if ( wponion_is_array( $data ) ) {
				if ( isset( $data[ $key ] ) ) {
					return $data[ $key ];
				}
				return ( isset( $data[ $default ] ) ) ? $data[ $default ] : false;
			} elseif ( is_object( $data ) ) {
				if ( isset( $data->{$key} ) ) {
					return $data->{$key};
				}
				return ( isset( $data->{$default} ) ) ? $data->{$default} : false;
			}
			return false;
		}
	}
}
