<?php

namespace WPOnion\Bridge;

use WPOnion\Bridge;
use WPOnion\DB\Cache;
use WPOnion\DB\Multi_Save\Get;
use WPOnion\DB\Multi_Save\Save;
use WPOnion\Exception\DB_Cache_Not_Found;

defined( 'ABSPATH' ) || exit;

if ( ! class_exists( '\WPOnion\Bridge\Module_DB' ) ) {
	/**
	 * Class Module_DB
	 *
	 * @package WPOnion\Bridge
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 */
	abstract class Module_DB extends Bridge {
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
		 * @var bool
		 */
		protected $post_id = false;

		/**
		 * Stores Current Term ID.
		 *
		 * @var bool
		 */
		protected $term_id = false;

		/**
		 * Stores Current User ID.
		 *
		 * @var bool
		 */
		protected $user_id = false;

		/**
		 * @return array|mixed|\WPOnion\DB\Option
		 */
		public function get_db_values() {
			if ( empty( $this->db_values ) ) {
				/**
				 * Fires Action With Exact Unique Key Before Fetching Values From Database
				 *
				 * @param string      $unique unique ID Which used to store in Database.
				 * @param string|bool $get_id Provides a valid ID if its any of (post_meta,term_meta)
				 */
				do_action( "wponion/{$this->module()}/get/before", $this->unique(), $this->get_id() );

				/**
				 * Fires Action With Exact Unique Key Before Fetching Values From Database
				 *
				 * @param string|bool $get_id Provides a valid ID if its any of (post_meta,term_meta)
				 */
				do_action( "wponion/{$this->module()}/{$this->unique()}/get/before", $this->get_id() );

				$instance        = new Get( $this->option( 'save_type' ), $this );
				$this->db_values = $instance->run();

				/**
				 * Provides End Develoeprs An Option To Hook And Modify Values Before Saving in DB.
				 *
				 * @param array       $values Values To Be Stored in Database.
				 * @param string      $unique unique ID Which used to store in Database.
				 * @param string|bool $get_id Provides a valid ID if its any of (post_meta,term_meta)
				 */
				$this->db_values = apply_filters( "wponion/{$this->module()}/get/values", $this->db_values, $this->unique(), $this->get_id() );

				/**
				 * Provides End Develoeprs An Option To Hook And Modify Values Before Saving in DB.
				 *
				 * @param array       $values Values To Be Stored in Database.
				 * @param string|bool $get_id Provides a valid ID if its any of (post_meta,term_meta)
				 */
				$this->db_values = apply_filters( "wponion/{$this->module()}/{$this->unique()}/get/values", $this->db_values, $this->get_id() );

				/**
				 * Fires Action With Exact Unique Key After Fetching Values From Database
				 *
				 * @param array       $values Values Stored in Database.
				 * @param string|bool $get_id Provides a valid ID if its any of (post_meta,term_meta)
				 */
				do_action( "wponion/{$this->module()}/{$this->unique()}/get/after", $this->db_values, $this->get_id() );

				/**
				 * Fires Action With Exact Unique Key After Fetching Values From Database
				 *
				 * @param array       $values Values Stored in Database.
				 * @param string      $unique unique ID Which used to store in Database.
				 * @param string|bool $get_id Provides a valid ID if its any of (post_meta,term_meta)
				 */
				do_action( "wponion/{$this->module()}/get/after", $this->db_values, $this->unique(), $this->get_id() );
			}
			return $this->db_values;
		}

		/**
		 * @param array $values
		 *
		 * @return $this
		 */
		public function set_db_values( $values = array() ) {
			wponion_do_deprecated_action( "wponion_{$this->module()}_db_save_before", array(
				$values,
				$this->unique(),
				$this,
			), '1.4.6.1', "wponion/{$this->module()}/save/before" );

			/**
			 * Fires a Common Action After Saving Values In DB
			 *
			 * @param array       $values Values Stored in Database.
			 * @param string      $unique unique ID Which used to store in Database.
			 * @param string|bool $get_id Provides a valid ID if its any of (post_meta,term_meta)
			 */
			do_action( "wponion/{$this->module()}/save/before", $values, $this->unique(), $this->get_id() );

			/**
			 * Fires Action With Exact Unique Key Before Saving Values In DB
			 *
			 * @param array       $values Values Stored in Database.
			 * @param string|bool $get_id Provides a valid ID if its any of (post_meta,term_meta)
			 */
			do_action( "wponion/{$this->module()}/{$this->unique()}/save/before", $values, $this->get_id() );

			/**
			 * Provides End Develoeprs An Option To Hook And Modify Values Before Saving in DB.
			 *
			 * @param array       $values Values To Be Stored in Database.
			 * @param string      $unique unique ID Which used to store in Database.
			 * @param string|bool $get_id Provides a valid ID if its any of (post_meta,term_meta)
			 */
			$values = apply_filters( "wponion/{$this->module()}/save/values", $values, $this->unique(), $this->get_id() );

			/**
			 * Provides End Develoeprs An Option To Hook And Modify Values Before Saving in DB.
			 *
			 * @param array       $values Values To Be Stored in Database.
			 * @param string|bool $get_id Provides a valid ID if its any of (post_meta,term_meta)
			 */
			$values = apply_filters( "wponion/{$this->module()}/{$this->unique()}/save/values", $values, $this->get_id() );

			$instance = new Save( $this->option( 'save_type' ), $values, $this );
			$instance->run();

			wponion_do_deprecated_action( "wponion_{$this->module()}_db_save_after", array(
				$values,
				$this->unique(),
				$this,
			), '1.4.6.1', "wponion/{$this->module()}/save/after" );

			/**
			 * Fires Action With Exact Unique Key After Saving Values In DB
			 * Fires a Common Action After Saving Values In DB
			 *
			 * @param array       $values Values Stored in Database.
			 * @param string|bool $get_id Provides a valid ID if its any of (post_meta,term_meta)
			 */
			do_action( "wponion/{$this->module()}/{$this->unique()}/save/after", $values, $this->get_id() );

			/**
			 * Fires Action With Exact Unique Key After Saving Values In DB
			 * Fires a Common Action After Saving Values In DB
			 *
			 * @param array       $values Values Stored in Database.
			 * @param string      $unique unique ID Which used to store in Database.
			 * @param string|bool $get_id Provides a valid ID if its any of (post_meta,term_meta)
			 */
			do_action( "wponion/{$this->module()}/save/after", $values, $this->unique(), $this->get_id() );

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
		protected function get_db_cache() {
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
		protected function set_db_cache( $values ) {
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
		protected function base_unique() {
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
		 * Sets WordPress Related ID.
		 *
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
