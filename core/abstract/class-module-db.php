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
		 * @access
		 */
		protected $module_db = '';

		/**
		 * Stores Database Values.
		 *
		 * @var array
		 */
		protected $db_values = array();

		/**
		 * options_cache
		 *
		 * @var array
		 */
		protected $options_cache = false;

		protected $post_id = null;
		protected $term_id = false;
		protected $user_id = false;


		/**
		 * @return array|mixed|void
		 */
		protected function get_db_values() {
			switch ( $this->module_db ) {
				case 'settings':
					if ( empty( $this->db_values ) ) {
						$this->db_values = get_option( $this->unique );
						$this->db_values = ( ! wponion_is_array( $this->db_values ) ) ? array() : $this->db_values;
					}
					break;
				case 'network_settings':
					if ( empty( $this->db_values ) ) {
						$this->db_values = get_site_option( $this->unique );
						$this->db_values = ( ! wponion_is_array( $this->db_values ) ) ? array() : $this->db_values;
					}
					break;
				case 'postmeta':
					if ( ! isset( $this->db_values[ $this->post_id() ] ) ) {
						$data                                = get_post_meta( $this->post_id(), $this->unique, true );
						$data                                = ( ! wponion_is_array( $data ) ) ? array() : $data;
						$this->db_values[ $this->post_id() ] = $data;
					}
					return isset( $this->db_values[ $this->post_id() ] ) ? $this->db_values[ $this->post_id() ] : array();
					break;
				case 'taxonomy':
					if ( false !== $this->term_id() && ! isset( $this->db_values[ $this->term_id() ] ) ) {
						$data                                = wponion_get_term_meta( $this->term_id(), $this->unique );
						$data                                = ( ! wponion_is_array( $data ) ) ? array() : $data;
						$this->db_values[ $this->term_id() ] = $data;
					}
					return isset( $this->db_values[ $this->term_id() ] ) ? $this->db_values[ $this->term_id() ] : array();
					break;
				case 'dashboard_widget':
					$this->db_values = wponion_get_option( $this->unique(), true );
					$this->db_values = ( ! wponion_is_array( $this->db_values ) ) ? array() : $this->db_values;
					break;
				case 'user_profile':
					if ( ! isset( $this->db_values[ $this->user_id() ] ) ) {
						$data                                = get_user_meta( $this->user_id(), $this->unique, true );
						$data                                = ( ! wponion_is_array( $data ) ) ? array() : $data;
						$this->db_values[ $this->user_id() ] = $data;
					}
					return isset( $this->db_values[ $this->user_id() ] ) ? $this->db_values[ $this->user_id() ] : array();
					break;
			}
			return $this->db_values;
		}

		/**
		 * @param array $values
		 *
		 * @return $this
		 */
		protected function set_db_values( $values = array() ) {
			switch ( $this->module_db ) {
				case 'settings':
					$this->db_values = $values;
					update_option( $this->unique, $values );
					break;
				case 'network_settings':
					$this->db_values = $values;
					update_site_option( $this->unique, $values );
					break;
				case 'postmeta':
					$this->db_values[ $this->post_id() ] = $values;
					update_post_meta( $this->post_id(), $this->unique, $values );
					break;
				case 'taxonomy':
					$this->db_values[ $this->term_id() ] = $values;
					wponion_update_term_meta( $this->term_id(), $this->unique, $values );
					break;
				case 'dashboard_widget':
					$this->db_values = $values;
					wponion_update_option( $this->unique(), $values );
					break;
				case 'user_profile':
					$this->db_values[ $this->user_id() ] = $values;
					update_user_meta( $this->user_id(), $this->unique, $values );
					break;
			}
			return $this;
		}

		/**
		 * @return bool|mixed
		 */
		protected function get_db_cache() {
			switch ( $this->module_db ) {
				case 'settings':
				case 'network_settings':
				case 'dashboard_widget':
					return wponion_get_option( $this->get_cache_id(), array() );
					break;
				case 'postmeta':
					return get_post_meta( $this->post_id(), $this->get_cache_id(), true );
					break;
				case 'taxonomy':
					return wponion_get_term_meta( $this->term_id(), $this->get_cache_id() );
					break;
				case 'user_profile':
					return get_user_meta( $this->user_id, $this->get_cache_id(), true );
					break;
			}
			return false;
		}

		/**
		 * @param $values
		 *
		 * @return $this
		 */
		protected function set_db_cache( $values ) {
			switch ( $this->module_db ) {
				case 'settings':
				case 'network_settings':
				case 'dashboard_widget':
					wponion_update_option( $this->get_cache_id(), $values );
					$this->options_cache = $values;
					break;
				case 'postmeta':
				case 'taxonomy':
					$values['wponion_version'] = WPONION_DB_VERSION;
					$this->options_cache       = $values;
					if ( 'postmeta' === $this->module_db ) {
						update_post_meta( $this->post_id(), $this->get_cache_id(), $values );
					} else {
						wponion_update_term_meta( $this->term_id(), $this->get_cache_id(), $values );
					}
					break;
				case 'user_profile':
					$this->options_cache = $values;
					update_user_meta( $this->user_id(), $this->get_cache_id(), $values );
					break;
			}
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
		 * Returns Unique Cache ID For each instance but only once.
		 *
		 * @return string
		 */
		protected function get_cache_id() {
			return 'wponion_' . wponion_hash_string( $this->unique() . '_' . $this->module() ) . '_cache';
		}

		/**
		 * @param $post_id
		 *
		 * @return $this
		 */
		public function set_post_id( $post_id ) {
			$this->post_id = $post_id;
			return $this;
		}

		/**
		 * Returns Post ID
		 *
		 * @return string|null
		 */
		public function post_id() {
			return $this->post_id;
		}

		/**
		 * @param $user_id
		 *
		 * @return $this
		 */
		public function set_user_id( $user_id ) {
			$this->user_id = $user_id;
			return $this;
		}

		/**
		 * Returns User ID
		 *
		 * @return mixed
		 */
		public function user_id() {
			return $this->user_id;
		}

		/**
		 * Updateds Current Term ID.
		 *
		 * @param $term_id
		 *
		 * @return $this
		 */
		public function set_term_id( $term_id ) {
			$this->term_id = $term_id;
			return $this;
		}

		/**
		 * @return mixed
		 */
		public function term_id() {
			return $this->term_id;
		}

	}
}
