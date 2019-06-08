<?php
/**
 *
 * Initial version created 07-05-2018 / 10:11 AM
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @package wponion
 * @link http://github.com/wponion
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

namespace WPOnion\Bridge;

use WPO\Builder;
use WPO\Container;
use WPO\Field;
use WPOnion\Bridge;
use WPOnion\Themes;

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
	class Module_DB extends Module_DB_Cache {
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
				$this->db_values = wponion_get_set_db( $this->module_db(), $this->unique(), $this->get_id() );
			}
			return $this->db_values;
		}

		/**
		 * @param array $values
		 *
		 * @return $this
		 */
		public function set_db_values( $values = array() ) {
			$this->db_values = $values;
			wponion_update_db( $this->module_db(), $this->unique, $values, $this->get_id() );
			return $this;
		}

		/**
		 * @return bool|mixed
		 */
		public function get_db_cache() {
			self::retrive_db_cache();
			$cid = $this->get_cache_id();
			return ( isset( self::$cache[ $cid ] ) && is_array( self::$cache[ $cid ] ) ) ? self::$cache[ $cid ] : array();
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
			self::$cache[ $cid ] = $values;
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
		 * Checks and returns module db.
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
