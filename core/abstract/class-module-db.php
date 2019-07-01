<?php

namespace WPOnion\Bridge;

use WPOnion\Bridge;
use WPOnion\DB\Cache;
use WPOnion\Exception\DB_Cache_Not_Found;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Bridge\Module_DB' ) ) {
	/**
	 * Class Module_DB
	 *
	 * @package WPOnion\Bridge
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Module_DB extends Bridge {
		/**
		 * unique for database.
		 *
		 * @var string
		 */
		protected $unique = '';

		/**
		 * Stores Module DB Type.
		 *
		 * @var string
		 * @access
		 */
		protected $module_db = '';

		/**
		 * Stores Database Values.
		 *
		 * @var array|\WPOnion\DB\Option
		 */
		protected $db_values = array();

		/**
		 * options_cache
		 *
		 * @var array
		 */
		protected $options_cache = false;

		/**
		 * Stores Current Post ID
		 *
		 * @var null
		 * @access
		 */
		protected $post_id = null;

		/**
		 * Stores Current Term ID.
		 *
		 * @var bool
		 * @access
		 */
		protected $term_id = false;

		/**
		 * Stores Current User ID.
		 *
		 * @var bool
		 * @access
		 */
		protected $user_id = false;

		/**
		 * @return array|mixed|\WPOnion\DB\Option
		 */
		public function get_db_values() {
			if ( empty( $this->db_values ) ) {
				$this->db_values = wponion_wp_db()->get( $this->module_db(), $this->unique(), $this->get_id() );
			}
			return $this->db_values;
		}

		/**
		 * @param array $values
		 *
		 * @return $this
		 */
		public function set_db_values( $values = array() ) {
			wponion_wp_db()->set( $this->module_db(), $this->unique(), $this->get_id(), $values );
			if ( wpo_is_option( $this->db_values ) ) {
				$this->db_values->reload();
			} else {
				$this->db_values = $values;
			}

			return $this;
		}

		/**
		 * @return array|mixed
		 */
		public function get_db_cache() {
			try {
				return Cache::get( $this->get_cache_id() );
			} catch ( DB_Cache_Not_Found $exception ) {
			}

			return array();
		}

		/**
		 * @param $values
		 *
		 * @return $this
		 */
		public function set_db_cache( $values ) {
			$cid                 = $this->get_cache_id();
			$values              = array_filter( $values );
			$this->options_cache = $values;
			Cache::set( $cid, $values );
			return $this;
		}

		/**
		 * Returns DB Slug.
		 *
		 * @return string
		 */
		public function unique() {
			return $this->unique;
		}

		/**
		 * Returns Base Unique.
		 *
		 * @return string
		 */
		public function base_unique() {
			return $this->unique;
		}

		/**
		 * Checks and returns module db.
		 *
		 * @return string
		 */
		public function module_db() {
			return ( isset( $this->module_db ) && ! empty( $this->module_db ) ) ? $this->module_db : $this->module();
		}

		/**
		 * Returns Unique Cache ID For each instance but only once.
		 *
		 * @return string
		 */
		protected function get_cache_id() {
			return wponion_hash_string( $this->module() . '_' . $this->unique() );
		}

		/**
		 * @param bool   $id
		 * @param string $method
		 *
		 * @return bool|string
		 */
		protected function get_set_id( $id = false, $method = 'get' ) {
			$return = false;
			switch ( strtolower( $this->module ) ) {
				case 'post_meta':
				case 'wc_product':
				case 'metabox':
				case 'nav_menu':
				case 'media_fields':
					if ( 'set' === $method ) {
						$this->post_id = $id;
					}
					$return = $this->post_id;
					break;
				case 'user_profile':
					if ( 'set' === $method ) {
						$this->user_id = $id;
					}
					$return = $this->user_id;
					break;
				case 'term':
				case 'taxonomy':
					if ( 'set' === $method ) {
						$this->term_id = $id;
					}
					$return = $this->term_id;
					break;

			}
			return $return;
		}

		/**
		 * @param $id
		 *
		 * @return string|bool
		 */
		public function set_id( $id ) {
			return $this->get_set_id( $id, 'set' );
		}

		/**
		 * Returns ID Type.
		 *
		 * @return bool|int|string
		 */
		public function get_id() {
			return $this->get_set_id( false, 'get' );
		}
	}
}
