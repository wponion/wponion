<?php

namespace WPOnion\DB;

use WPOnion\Helper;

if ( ! class_exists( '\WPOnion\DB\Option' ) ) {
	/**
	 * Class Option
	 *
	 * @package WPOnion\DB
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Option implements \ArrayAccess, \Iterator, \JsonSerializable, \Serializable, \Countable {
		/**
		 * @var bool
		 * @access
		 */
		protected $module = false;

		/**
		 * @var bool
		 * @access
		 */
		protected $unique = false;

		/**
		 * @var bool
		 * @access
		 */
		protected $extra = false;

		/**
		 * Store Array Position.
		 *
		 * @var null
		 * @access
		 */
		protected $position = 0;

		/**
		 * Stores All Network Options.
		 *
		 * @var array
		 * @access
		 * @static
		 */
		protected $options = array();

		/**
		 * @var string
		 * @access
		 */
		protected $delimiter = '/';

		/**
		 * Option constructor.
		 *
		 * @param array  $options
		 * @param string $module
		 * @param string $unique
		 * @param bool   $extra
		 */
		public function __construct( $options, $module, $unique, $extra = false ) {
			$this->options = $options;
			$this->module  = $module;
			$this->unique  = $unique;
			$this->extra   = $extra;
		}

		/**
		 * Saves Values in DB.
		 *
		 * @return bool
		 */
		public function save() {
			$instance = wponion_update_db( $this->module, $this->unique, $this->options, $this->extra );
			return ( ! is_wp_error( $instance ) && false !== $instance ) ? true : false;
		}

		/**
		 * @param $option_key
		 *
		 * @return bool
		 */
		public function has( $option_key ) {
			return Helper::array_key_isset( $option_key, $this->options, false, $this->delimiter );
		}

		/**
		 * Gets An Array Value.
		 *
		 * @param string     $option_key
		 * @param bool|mixed $default
		 *
		 * @return mixed
		 */
		public function get( $option_key, $default = false ) {
			return Helper::array_key_get( $option_key, $this->options, $default, $this->delimiter );
		}

		/**
		 * Sets An Array.
		 *
		 * @param $option_key
		 * @param $value
		 *
		 * @return $this
		 */
		public function set( $option_key, $value ) {
			Helper::array_key_set( $option_key, $value, $this->options, $this->delimiter );
			return $this;
		}

		/**
		 * @param $option_key
		 *
		 * @return array|object
		 */
		public function delete( $option_key ) {
			return Helper::array_key_unset( $option_key, $this->options, $this->delimiter );
		}

		/**
		 * Changes Array Pointer To Next Position.
		 */
		public function next() {
			++$this->position;
		}

		/**
		 * @return mixed
		 */
		public function current() {
			$keys = array_keys( $this->options );
			return $this->options[ $keys[ $this->position ] ];
		}

		/**
		 * Changes Array Pointer To 0
		 */
		public function rewind() {
			$this->position = 0;
		}

		/**
		 * @return bool
		 */
		public function valid() {
			$keys = array_keys( $this->options );
			return isset( $keys[ $this->position ] );
		}

		/**
		 * @return mixed
		 */
		public function key() {
			$keys = array_keys( $this->options );
			return $keys[ $this->position ];
		}

		/**
		 * @param mixed $offset
		 *
		 * @return array|object|void
		 */
		public function offsetUnset( $offset ) {
			return $this->delete( $offset );
		}

		/**
		 * @param mixed $offset
		 *
		 * @return bool
		 */
		public function offsetExists( $offset ) {
			return $this->has( $offset );
		}

		/**
		 * @param mixed $offset
		 * @param mixed $value
		 *
		 * @return void|\WPOnion\DB\Option
		 */
		public function offsetSet( $offset, $value ) {
			return $this->set( $offset, $value );
		}

		/**
		 * @param string $offset
		 *
		 * @return bool|mixed
		 */
		public function offsetGet( $offset ) {
			return $this->get( $offset );
		}

		/**
		 * @return string
		 */
		public function serialize() {
			return serialize( $this->options );
		}

		/**
		 * @param string $serialized
		 */
		public function unserialize( $serialized ) {
			$this->options = unserialize( $serialized );
		}

		/**
		 * @return int
		 */
		public function count() {
			return count( $this->options );
		}

		/**
		 * @return array|mixed
		 */
		public function jsonSerialize() {
			return $this->options;
		}

	}
}
