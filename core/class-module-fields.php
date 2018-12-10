<?php
/**
 *
 * Project : wponion
 * Date : 12-11-2018
 * Time : 08:31 AM
 * File : module-fields.php
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @package wponion
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

namespace WPOnion;

use WPOnion\Core\Array_Finder;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Module_Fields' ) ) {
	/**
	 * Class Module_Fields
	 *
	 * @package WPOnion\Bridge
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Module_Fields extends Array_Finder {
		/**
		 * has_callback
		 *
		 * @var bool
		 */
		protected $has_callback = false;

		/**
		 * has_fields
		 *
		 * @var bool
		 */
		protected $has_fields = false;

		/**
		 * has_sections
		 *
		 * @var bool
		 */
		protected $has_sections = false;

		/**
		 * has_page
		 *
		 * @var bool
		 */
		protected $has_page = false;

		/**
		 * has_href
		 *
		 * @var bool
		 */
		protected $has_href = false;

		/**
		 * @param $data
		 *
		 * @return mixed
		 */
		private function create_name( $data ) {
			if ( ! isset( $data['name'] ) && isset( $data['title'] ) ) {
				$data['name'] = sanitize_title( $data['title'] );
			}
			return $data;
		}

		/**
		 * @param string $has
		 */
		private function set_status( $has = '' ) {
			$this->has_href     = false;
			$this->has_sections = false;
			$this->has_fields   = false;
			$this->has_callback = false;
			$this->has_page     = false;
			if ( isset( $this->{'has_' . $has} ) ) {
				$this->{'has_' . $has} = true;
			}
		}

		/**
		 * Module_Fields constructor.
		 *
		 * @param array $module_fields
		 */
		public function __construct( $module_fields = array() ) {
			parent::__construct( $module_fields, '/' );

			if ( ! $this->_is_callback() && ! $this->_is_fields() && ! $this->_is_sections() && ! $this->_is_href() ) {
				foreach ( $this->contents as $id => $data ) {
					if ( $this->_is_field( $data ) ) {
						continue;
					}
					if ( $this->_is_callback( $data ) || $this->_is_href( $data ) || $this->_is_fields( $data ) || $this->_is_sections( $data ) ) {
						$_instance = new self( $data );
						unset( $this->contents[ $id ] );
						$this->contents[ $_instance->get( 'name' ) ] = $_instance;
					}
				}
			} elseif ( $this->_is_fields() && ! $this->_is_field() ) {
				$this->set_status( 'fields' );
				$this->contents = $this->create_name( $this->contents );
			} elseif ( $this->_is_sections() && ! $this->_is_field() ) {
				$this->set_status( 'sections' );
				$this->contents             = $this->create_name( $this->contents );
				$this->contents['sections'] = new self( $this->contents['sections'] );
			} elseif ( $this->_is_href() && ! $this->_is_field() ) {
				$this->set_status( 'href' );
				$this->contents = $this->create_name( $this->contents );
			} elseif ( $this->_is_callback() && ! $this->_is_field() ) {
				$this->set_status( 'callback' );
				$this->contents = $this->create_name( $this->contents );
			}
		}

		/**
		 * @param bool $content
		 *
		 * @return bool
		 */
		private function _is_fields( $content = false ) {
			$content = ( false === $content ) ? $this->contents : $content;
			return ( isset( $content['fields'] ) );
		}

		/**
		 * @param bool $content
		 *
		 * @return bool
		 */
		private function _is_callback( $content = false ) {
			$content = ( false === $content ) ? $this->contents : $content;
			return ( isset( $content['callback'] ) );
		}

		/**
		 * @param bool $content
		 *
		 * @return bool
		 */
		private function _is_sections( $content = false ) {
			$content = ( false === $content ) ? $this->contents : $content;
			return ( isset( $content['sections'] ) );
		}

		/**
		 * @param bool $content
		 *
		 * @return bool
		 */
		private function _is_href( $content = false ) {
			$content = ( false === $content ) ? $this->contents : $content;
			return ( isset( $content['href'] ) );
		}

		/**
		 * @param bool $content
		 *
		 * @return bool
		 */
		private function _is_field( $content = false ) {
			$content = ( false === $content ) ? $this->contents : $content;
			return ( isset( $content['type'] ) );
		}

		/**
		 * @return bool
		 */
		public function has_sections() {
			return ( $this->has_sections );
		}

		/**
		 * @return bool
		 */
		public function has_page() {
			return ( $this->has_page );
		}

		/**
		 * @return bool
		 */
		public function has_fields() {
			return ( $this->has_fields );
		}

		/**
		 * @return bool
		 */
		public function has_href() {
			return ( $this->has_href );
		}

		/**
		 * @return bool
		 */
		public function has_callback() {
			return ( $this->has_callback );
		}

		/**
		 * Returns First Section Data.
		 *
		 * @return bool|mixed
		 */
		public function first_section() {
			$data = $this->sections();
			$data->rewind();
			$return = $data->current();
			$data->rewind();
			return $return;
		}

		/**
		 * Returns Name Field.
		 *
		 * @return mixed|null
		 */
		public function name() {
			return $this->get( 'name' );
		}

		/**
		 * Returns Href Field.
		 *
		 * @return mixed|null
		 */
		public function href() {
			return $this->get( 'href' );
		}

		/**
		 * Returns icon Field.
		 *
		 * @return mixed|null
		 */
		public function icon() {
			return $this->get( 'icon' );
		}

		/**
		 * Returns sections Field.
		 *
		 * @return mixed|null
		 */
		public function sections() {
			return $this->get( 'sections' );
		}

		/**
		 * Returns callback Field.
		 *
		 * @return mixed|null
		 */
		public function callback() {
			return $this->get( 'callback' );
		}

		/**
		 * Returns fields Field.
		 *
		 * @return mixed|null
		 */
		public function fields() {
			return $this->get( 'fields' );
		}

		/**
		 * Returns Title Field.
		 *
		 * @return mixed|null
		 */
		public function title() {
			return $this->get( 'title' );
		}
	}
}
