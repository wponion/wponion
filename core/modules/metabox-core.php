<?php
/**
 *
 * Project : wponion
 * Date : 23-11-2018
 * Time : 09:13 AM
 * File : metabox-core.php
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @package wponion
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

namespace WPOnion\Modules;

if ( ! class_exists( '\WPOnion\Modules\Metabox_Core' ) ) {
	/**
	 * Class Metabox_Core
	 *
	 * @package WPOnion\Modules
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 * @private
	 */
	class Metabox_Core extends metabox {
		public function __construct( $settings = array(), $fields = array() ) {
			parent::__construct( $settings, $fields );
		}

		public function on_init() {
			$this->add_action( 'load-edit-tags.php', 'on_page_load' );
			$this->add_action( 'load-profile.php', 'on_page_load' );
			$this->add_action( 'load-user-edit.php', 'on_page_load' );
		}

		public function on_page_load() {
			parent::on_page_load();
			remove_action( 'add_meta_boxes', array( &$this, 'register_metabox' ) );
			remove_action( 'save_post', array( &$this, 'save_metabox' ) );
		}

		public function custom_metabox_class( $class ) {
			$class   = parent::custom_metabox_class( $class );
			$class[] = 'wponion-core-custom-metabox';
			return $class;
		}

		public function set_cache( $data = array() ) {
			if ( false !== $this->option( 'set_cache' ) && wponion_is_callable( $this->option( 'set_cache' ) ) ) {
				return wponion_callback( $this->option( 'set_cache' ), array( $data, $this->post_id ) );
			}
			return parent::set_cache( $data );
		}

		protected function get_db_cache() {
			if ( false !== $this->option( 'get_cache' ) && wponion_is_callable( $this->option( 'get_cache' ) ) ) {
				return wponion_callback( $this->option( 'get_cache' ), array( $this->post_id ) );
			}
			return parent::get_db_cache();
		}

		public function get_db_values() {
			if ( false !== $this->option( 'get_db_values' ) && wponion_is_callable( $this->option( 'get_db_values' ) ) ) {
				return wponion_callback( $this->option( 'get_db_values' ), $this->post_id );
			}
			return parent::get_db_values();
		}

		protected function set_db_values( $value ) {
			if ( false !== $this->option( 'set_db_values' ) && wponion_is_callable( $this->option( 'set_db_values' ) ) ) {
				return wponion_callback( $this->option( 'set_db_values' ), array( $value, $this->post_id ) );
			}
			return parent::set_db_values( $value );
		}

		protected function defaults() {
			$this->parse_args( array(
				'set_cache'     => false,
				'get_cache'     => false,
				'get_db_values' => false,
				'set_db_values' => false,
			), parent::defaults() );
		}
	}
}
