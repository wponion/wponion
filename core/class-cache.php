<?php

namespace WPOnion;

use WPOnion\Exception\Cache_Not_Found;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}


if ( ! class_exists( '\WPOnion\Cache' ) ) {
	/**
	 * Class Cache
	 *
	 * Recommended usage example:
	 *  try {
	 *      $value = FW_Cache::get('some/key');
	 *  } catch(\WPOnion\Cache_Not_Found $e) {
	 *      $value = get_value_from_somewhere();
	 *
	 *      \WPOnion\Cache::set('some/key', $value);
	 *
	 *      // (!) after set, do not do this:
	 *      $value = \WPOnion\Cache::get('some/key');
	 *      // because there is no guaranty that FW_Cache::set('some/key', $value); succeeded
	 *      // trust only your $value, cache can do clean-up right after set() and remove the value you tried to set
	 *  }
	 *
	 * @package WPOnion
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	final class Cache {
		/**
		 * @var array
		 * @access
		 * @static
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
		 * @access
		 * @static
		 */
		protected static $not_found_value;

		/**
		 * The amount of times the data was already stored in the cache.
		 *
		 * @var int
		 * @since 2.4.17
		 */
		protected static $hits = 0;

		/**
		 * Amount of times the cache did not have the value in cache.
		 *
		 * @var int
		 * @since 2.4.17
		 */
		protected static $misses = 0;

		/**
		 * Amount of times the cache free was called.
		 *
		 * @var int
		 * @since 2.4.17
		 */
		protected static $freed = 0;

		/**
		 * Returns Proper Memory Limit.
		 *
		 * @static
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
		 * @static
		 * @return bool
		 */
		protected static function memory_exceeded() {
			return memory_get_usage( false ) >= self::get_memory_limit() - self::$min_free_memory;
		}

		public static function init() {
			self::$not_found_value = new Cache_Not_Found();

			/**
			 * Listen often triggered hooks to clear the memory
			 * instead of tick function https://github.com/ThemeFuse/Unyson/issues/1197
			 *
			 * @since 2.4.17
			 */
			$clear_cache = array(
				'query'                     => true,
				'plugins_loaded'            => true,
				'wp_get_object_terms'       => true,
				'created_term'              => true,
				'wp_upgrade'                => true,
				'added_option'              => true,
				'updated_option'            => true,
				'deleted_option'            => true,
				'wp_after_admin_bar_render' => true,
				'http_response'             => true,
				'oembed_result'             => true,
				'customize_post_value_set'  => true,
				'customize_save_after'      => true,
				'customize_render_panel'    => true,
				'customize_render_control'  => true,
				'customize_render_section'  => true,
				'role_has_cap'              => true,
				'user_has_cap'              => true,
				'theme_page_templates'      => true,
				'pre_get_users'             => true,
				'request'                   => true,
				'send_headers'              => true,
				'updated_usermeta'          => true,
				'added_usermeta'            => true,
				'image_memory_limit'        => true,
				'upload_dir'                => true,
				'wp_head'                   => true,
				'wp_footer'                 => true,
				'wp'                        => true,
				'wp_init'                   => true,
				'fw_init'                   => true,
				'init'                      => true,
				'updated_postmeta'          => true,
				'deleted_postmeta'          => true,
				'setted_transient'          => true,
				'registered_post_type'      => true,
				'wp_count_posts'            => true,
				'wp_count_attachments'      => true,
				'after_delete_post'         => true,
				'post_updated'              => true,
				'wp_insert_post'            => true,
				'deleted_post'              => true,
				'clean_post_cache'          => true,
				'wp_restore_post_revision'  => true,
				'wp_delete_post_revision'   => true,
				'get_term'                  => true,
				'edited_term_taxonomies'    => true,
				'deleted_term_taxonomy'     => true,
				'edited_terms'              => true,
				'clean_term_cache'          => true,
				'edited_term_taxonomy'      => true,
				'switch_theme'              => true,
				'wp_get_update_data'        => true,
				'clean_user_cache'          => true,
				'process_text_diff_html'    => true,
			);
			foreach ( $clear_cache as $hook => $tmp ) {
				add_filter( $hook, array( __CLASS__, 'free_memory' ), 1 );
			}

			/**
			 * Flush the cache when something major is changed (files or db values)
			 */
			$force_flush = array(
				'switch_blog'               => true,
				'upgrader_post_install'     => true,
				'upgrader_process_complete' => true,
				'switch_theme'              => true,
			);
			foreach ( $force_flush as $hook => $tmp ) {
				add_filter( $hook, array( __CLASS__, 'clear' ), 1 );
			}
		}

		/**
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
			// This method is used in add_filter() so to not break anything return filter value
			return $dummy;
		}

		/**
		 * @param string $key
		 *
		 * @static
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
		 * @param string $key
		 * @param mixed  $value
		 *
		 * @static
		 * @return array|object
		 */
		public static function set( $key, $value = false ) {
			self::free_memory();
			$return = Helper::array_key_set( $key, $value, self::$cache );
			self::free_memory();
			return $return;
		}

		/**
		 * @param string $key
		 *
		 * @static
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
			// This method is used in add_filter() so to not break anything return filter value
			return $dummy;
		}

		/**
		 * Debug information
		 * <?php add_action('admin_footer', function(){ FW_Cache::stats(); });
		 *
		 * @since 2.4.17
		 */
		public static function stats() {
			echo '<div style="z-index: 10000; position: relative; background: #fff; padding: 15px;">';
			echo '<p>';
			echo '<strong>Cache Hits:</strong> ' . self::$hits . '<br />';
			echo '<strong>Cache Misses:</strong> ' . self::$misses . '<br />';
			echo '<strong>Cache Freed:</strong> ' . self::$freed . '<br />';
			echo '<strong>PHP Memory Peak Usage:</strong> ' . memory_get_peak_usage( false ) . '<br />';
			echo '</p>';
			echo '<ul>';
			foreach ( self::$cache as $group => $cache ) {
				echo "<li><strong>Group:</strong> $group - ( " . number_format( strlen( serialize( $cache ) ) / KB_IN_BYTES, 2 ) . 'k )</li>';
			}
			echo '</ul>';
			echo '</div>';
		}
	}
}
