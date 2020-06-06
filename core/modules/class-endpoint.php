<?php

namespace WPOnion\Modules;

use const EP_ROOT;

defined( 'ABSPATH' ) || exit;

/**
 * Class Endpoint
 *
 * @package WPOnion\Modules\Util
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Endpoint {
	/**
	 * @var array
	 */
	protected static $cache = array();

	/**
	 * Stores Custom Prefix.
	 *
	 * @var string
	 */
	protected $prefix = null;

	/**
	 * @var array
	 */
	protected $endpoints = array();

	/**
	 * @var array
	 */
	protected $rules = array();

	/**
	 * @var array
	 */
	protected $tags = array();

	/**
	 * @var string
	 */
	protected $parameter_pattern = '/{([\w\d]+)}/';

	/**
	 * @var string
	 */
	protected $value_pattern_replace = '([^\/]+)';

	/**
	 * @var array
	 */
	protected $rules_queryvars = array();

	/**
	 * Endpoint constructor.
	 *
	 * @param string $custom_prefix
	 *
	 * @uses save_cache
	 * @uses on_wp_shutdown
	 * @uses register_query_args
	 */
	public function __construct( $custom_prefix ) {
		$this->prefix = $custom_prefix;
		if ( did_action( 'init' ) ) {
			$this->init();
		} else {
			add_action( 'init', array( &$this, 'init' ) );
		}
		add_action( 'parse_request', array( $this, 'parse_request' ) );
		add_filter( 'query_vars', array( $this, 'register_query_args' ) );
		add_action( 'shutdown', array( $this, 'on_wp_shutdown' ) );
		add_action( 'shutdown', array( __CLASS__, 'save_cache' ), 99999999 );
	}

	/**
	 * Inits Cache.
	 */
	public static function save_cache() {
		$cache    = get_option( '_wponion_endpoints', false );
		$cache_id = wponion_hash_array( self::$cache );
		if ( $cache !== $cache_id ) {
			flush_rewrite_rules();
			update_option( '_wponion_endpoints', $cache_id );
		}
	}

	/**
	 * Checks if Cache Flushing is required.
	 */
	public function on_wp_shutdown() {
		self::$cache[ $this->prefix ] = array( $this->rules, $this->endpoints, $this->tags );
	}

	/**
	 * @see wp_init
	 */
	public function init() {
		$this->register_rewrite_rules();
		$this->register_rewrite_tags();
		$this->register_rewrite_endpoints();
	}

	/**
	 * Adds Custom Endpoints To Endpoints Array.
	 *
	 * @param string       $endpoint
	 * @param int          $endpoint_type
	 * @param array|string $callback
	 *
	 * @return $this
	 * @example add_endpoint('world/',EP_PAGES,array(&$this,'page_callback'))
	 *
	 * @example add_endpoint('hello/',EP_PAGES,'my_page_calback')
	 */
	public function add_endpoint( $endpoint = '', $endpoint_type = EP_ROOT, $callback = array() ) {
		if ( ! isset( $this->endpoints[ $endpoint ] ) ) {
			$this->endpoints[ $endpoint ] = array(
				'type'     => $endpoint_type,
				'callback' => $callback,
			);
		}
		return $this;
	}

	/**
	 * Adds Custom Rewrite Rules.
	 *
	 * @param string $path
	 * @param array  $rewrite_regex Custom Rewrite URL's Regext eg : array('customKey' => 'your regex here')
	 * @param array  $tag_regex Custom Rewrite Tag's Regext eg : array('customKey' => 'your regex here')
	 * @param string $after This can either be 'top' or 'bottom'. 'top' will take precedence over WordPress's existing rules, where 'bottom' will check all other rules match first.
	 *
	 * @return $this
	 */
	public function add_rewrite_rule( $path = '', $rewrite_regex = array(), $tag_regex = array(), $after = 'top' ) {
		$url_matches = array();
		$uri         = '^' . $path;
		$_url        = array();
		$matches     = [];

		preg_match_all( '/{([\w\d]+)}/', $path, $url_matches );

		if ( ! empty( $url_matches ) && isset( $url_matches[1] ) ) {
			foreach ( $url_matches[1] as $data ) {
				$key   = '{' . $data . '}';
				$regex = ( isset( $rewrite_regex[ $data ] ) && ! empty( $rewrite_regex[ $data ] ) ) ? $rewrite_regex[ $data ] : $this->value_pattern_replace;
				$uri   = str_replace( $key, $regex, $uri );
			}

			if ( preg_match_all( $this->parameter_pattern, $path, $matches ) ) {
				foreach ( $matches[1] as $id => $param ) {
					$key                     = ( empty( $this->prefix ) ) ? $param : $this->prefix . '_' . $param;
					$this->rules_queryvars[] = $key;
					$_url[]                  = "{$key}=\$matches[" . ( $id + 1 ) . ']';
					$_regex                  = ( isset( $tag_regex[ $param ] ) && ! empty( $tag_regex[ $param ] ) ) ? $tag_regex[ $param ] : '(.+)';
					$this->add_tag( '%' . $key . '%', $_regex );
				}
			}

			$this->rules[] = array(
				'regex'   => $uri . '/?',
				'replace' => 'index.php?' . implode( '&', $_url ),
				'type'    => $after,
			);
		}
		return $this;
	}

	/**
	 * Adds Rewrite Tag.
	 *
	 * @param string  $tag
	 * @param string  $regex
	 * @param boolean $force
	 *
	 * @return $this
	 */
	public function add_tag( $tag = '', $regex = '', $force = false ) {
		if ( ! isset( $this->tags[ $tag ] ) || isset( $this->tags[ $tag ] ) && true === $force ) {
			$this->tags[ $tag ] = $regex;
		}
		return $this;
	}

	/**
	 * Registers Rewrite Rules With WordPress.
	 */
	protected function register_rewrite_rules() {
		if ( ! empty( $this->rules ) ) {
			foreach ( $this->rules as $value ) {
				add_rewrite_rule( $value['regex'], $value['replace'], $value['type'] );
			}
		}
	}

	/**
	 * Registers Rewrite Tag With WordPress.
	 */
	protected function register_rewrite_tags() {
		if ( ! empty( $this->tags ) ) {
			foreach ( $this->tags as $param => $value ) {
				add_rewrite_tag( $param, $value );
			}
		}
	}

	/**
	 * Registers Rewrite Endpoints With WordPress.
	 */
	protected function register_rewrite_endpoints() {
		if ( ! empty( $this->endpoints ) ) {
			foreach ( $this->endpoints as $slug => $arr ) {
				add_rewrite_endpoint( $slug, $arr['type'] );
			}
		}
	}

	/**
	 * Adds Query Args To WP.
	 *
	 * @param array $vars
	 *
	 * @return array
	 */
	public function register_query_args( $vars = array() ) {
		$vars = ( ! empty( $this->endpoints ) ) ? array_merge( $vars, array_keys( $this->endpoints ) ) : $vars;
		$vars = ( ! empty( $this->rules_queryvars ) ) ? array_merge( $vars, array_unique( $this->rules_queryvars ) ) : $vars;
		return $vars;
	}

	/**
	 * Parses Request And Triggers Callback / Action.
	 * Based On the $callback Arg when using add_endpoint()
	 *
	 * @param $wp
	 */
	public function parse_request( $wp ) {
		if ( ! empty( $wp->query_vars ) ) {
			foreach ( $wp->query_vars as $key => $value ) {
				if ( isset( $this->endpoints[ $key ] ) && isset( $this->endpoints[ $key ]['callback'] ) && wponion_is_callable( $this->endpoints[ $key ]['callback'] ) ) {
					wponion_callback( $this->endpoints[ $key ]['callback'], $wp );
				}
			}
		}
	}
}
