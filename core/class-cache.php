<?php

namespace WPOnion;

use WPOnion\Exception\Cache_Not_Found;

defined( 'ABSPATH' ) || exit;

/**
 * Class Cache
 *
 * @example Recommended usage example:
 *  try {
 *        $value = \WPOnion\Cache::get('some/key');
 *  } catch(\WPOnion\Cache_Not_Found $e) {
 *        $val = get_value_from_somewhere();
 *        \WPOnion\Cache::set('some/key', $val);
 *        $val = \WPOnion\Cache::get('some/key');
 *        //because there is no guaranty that \WPOnion\Cache::set('some/key', $value); succeeded
 *        //trust only your $value, cache can do clean-up right after set() and remove the value you tried to set
 *  }
 *
 * @package WPOnion
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
final class Cache {
	/**
	 * Stores Cached Data.
	 *
	 * @var array
	 */
	protected static $cache = array();

	/**
	 * If the PHP will have less that this memory, the cache will try to delete parts from its array to free memory
	 *
	 * (1024 * 1024 = 1048576 = 1 Mb) * 10
	 */
	protected static $min_free_memory = 10485760;

	/**
	 * A special value that is used to detect if value was found in cache
	 * We can't use null|false because these can be values set by user and we can't treat them as not existing values
	 *
	 * @var \WPOnion\Exception\Cache_Not_Found
	 */
	protected static $not_found_value;

	/**
	 * The amount of times the data was already stored in the cache.
	 *
	 * @var int
	 */
	protected static $hits = 0;

	/**
	 * Amount of times the cache did not have the value in cache.
	 *
	 * @var int
	 */
	protected static $misses = 0;

	/**
	 * Amount of times the cache free was called.
	 *
	 * @var int
	 */
	protected static $freed = 0;

	/**
	 * Returns Proper Memory Limit.
	 *
	 * @return float|int
	 */
	protected static function get_memory_limit() {
		$m = ini_get( 'memory_limit' );
		if ( '-1' === $m ) {
			return 256 * 1024 * 1024;
		}
		switch ( substr( $m, -1 ) ) {
			case 'M':
				return intval( $m ) * 1024 * 1024;
			case 'K':
				return intval( $m ) * 1024;
			case 'G':
				return intval( $m ) * 1024 * 1024 * 1024;
			default:
				return intval( $m ) * 1024 * 1024;
		}
	}

	/**
	 * Returns Current Memory Usage
	 * about memory_get_usage(false)
	 *
	 * @see  http://stackoverflow.com/a/16239377/1794248
	 * @return bool
	 */
	protected static function memory_exceeded() {
		return memory_get_usage( false ) >= self::get_memory_limit() - self::$min_free_memory;
	}

	/**
	 * Inits Cache System.
	 */
	public static function init() {
		self::$not_found_value = new Cache_Not_Found();
		$clear_cache           = array(
			'query',
			'wp_get_object_terms',
			'created_term',
			'wp_upgrade',
			'added_option',
			'updated_option',
			'deleted_option',
			'wp_after_admin_bar_render',
			'http_response',
			'oembed_result',
			'customize_post_value_set',
			'customize_save_after',
			'customize_render_panel',
			'customize_render_control',
			'customize_render_section',
			'role_has_cap',
			'user_has_cap',
			'theme_page_templates',
			'pre_get_users',
			'request',
			'send_headers',
			'updated_usermeta',
			'added_usermeta',
			'image_memory_limit',
			'upload_dir',
			'wp_head',
			'wp_footer',
			'wp',
			'wp_init',
			'init',
			'updated_postmeta',
			'deleted_postmeta',
			'setted_transient',
			'registered_post_type',
			'wp_count_posts',
			'wp_count_attachments',
			'after_delete_post',
			'post_updated',
			'wp_insert_post',
			'deleted_post',
			'clean_post_cache',
			'wp_restore_post_revision',
			'wp_delete_post_revision',
			'get_term',
			'edited_term_taxonomies',
			'deleted_term_taxonomy',
			'edited_terms',
			'clean_term_cache',
			'edited_term_taxonomy',
			'switch_theme',
			'wp_get_update_data',
			'clean_user_cache',
			'process_text_diff_html',
		);
		$force_flush           = array(
			'switch_blog',
			'upgrader_post_install',
			'upgrader_process_complete',
			'switch_theme',
		);

		foreach ( $clear_cache as $hook ) {
			add_filter( $hook, array( __CLASS__, 'free_memory' ), 1 );
		}

		foreach ( $force_flush as $hook => $tmp ) {
			add_filter( $hook, array( __CLASS__, 'clear' ), 1 );
		}
	}

	/**
	 * Clear's Up Memory for smooth process.
	 *
	 * @param mixed $dummy
	 *
	 * @return mixed
	 */
	public static function free_memory( $dummy = null ) {
		while ( self::memory_exceeded() && ! empty( self::$cache ) ) {
			reset( self::$cache );
			$key = key( self::$cache );
			unset( self::$cache[ $key ] );
		}
		++self::$freed;
		return $dummy;
	}

	/**
	 * Fetches a cached data.
	 *
	 * @param string $key cache_id
	 *
	 * @return mixed
	 * @throws \WPOnion\Exception\Cache_Not_Found
	 */
	public static function get( $key ) {
		self::free_memory();
		$values = Helper::array_key_get( $key, self::$cache, self::$not_found_value );
		self::free_memory();

		if ( $values === self::$not_found_value ) {
			++self::$misses;
			$not_found = new Cache_Not_Found();
			$not_found->set_cache_id( $key );
			throw $not_found;
		} else {
			++self::$hits;
		}
		return $values;
	}

	/**
	 * Sets a cache data.
	 *
	 * @param string $key cache_id.
	 * @param mixed  $value cache_data.
	 *
	 * @return array|object
	 */
	public static function set( $key, $value = false ) {
		self::free_memory();
		$return = Helper::array_key_set( $key, $value, self::$cache );
		self::free_memory();
		return $return;
	}

	/**
	 * Removes a cached data.
	 *
	 * @param string $key cache_id
	 */
	public static function remove( $key ) {
		Helper::array_key_unset( $key, self::$cache );
		self::free_memory();
	}

	/**
	 * Empty the cache
	 *
	 * @param mixed $dummy When method is used in add_filter()
	 *
	 * @return mixed
	 */
	public static function clear( $dummy = null ) {
		self::$cache = array();
		return $dummy;
	}

	/**
	 * Debug information
	 */
	public static function stats() {
		$cache_data = array();
		foreach ( self::$cache as $group => $cache ) {
			$cache_data[ $group ] = number_format( strlen( serialize( $cache ) ) / KB_IN_BYTES, 2 ) . 'k';
		}

		return array(
			'hits'       => self::$hits,
			'misses'     => self::$misses,
			'freed'      => self::$freed,
			'peak_usage' => memory_get_peak_usage( false ),
			'cache_data' => $cache_data,
		);
	}
}
