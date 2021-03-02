<?php

namespace WPOnion\DB;

use ArrayAccess;
use Iterator;
use JsonSerializable;
use WPOnion\Helper;
use WPOnion\Traits\Array_Position;
use WPOnion\Traits\Countable;
use WPOnion\Traits\Json_Serialize;
use WPOnion\Traits\Serializable;

defined( 'ABSPATH' ) || exit;

/**
 * Class Option
 *
 * @package WPOnion\DB
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Option implements ArrayAccess, Iterator, JsonSerializable, \Serializable, \Countable {
	use Json_Serialize;
	use Countable;
	use Serializable;
	use Array_Position;

	/**
	 * @var bool
	 */
	protected $module = false;

	/**
	 * @var bool
	 */
	protected $unique = false;

	/**
	 * @var bool
	 */
	protected $extra = false;

	/**
	 * Stores All Network Options.
	 *
	 * @var array
	 */
	protected $options = array();

	/**
	 * @var string
	 */
	protected $delimiter = '/';

	/**
	 * Option constructor.
	 *
	 * @param string $module
	 * @param string $unique
	 * @param bool   $extra
	 */
	public function __construct( $module, $unique, $extra = false ) {
		$this->module = $module;
		$this->unique = $unique;
		$this->extra  = $extra;
		$this->load();
	}

	/**
	 * Reloads Option Values.
	 *
	 * @return $this
	 */
	public function reload() {
		$this->load();
		return $this;
	}

	/**
	 * Loads Values From Database.
	 */
	protected function load() {
		$this->options = wponion_wp_db()->get( $this->module, $this->unique, $this->extra );
		$this->options = ( ! wponion_is_array( $this->options ) ) ? array() : $this->options;
	}

	/**
	 * Returns As A String.
	 *
	 * @return array|string
	 */
	public function __toString() {
		return ( is_string( $this->options ) ) ? $this->options : '';
	}

	/**
	 * Saves Values in DB.
	 *
	 * @return bool
	 */
	public function save() {
		$instance = wponion_wp_db()->set( $this->module, $this->unique, $this->extra, $this->options );
		return ( ! is_wp_error( $instance ) && false !== $instance );
	}

	/**
	 * Handles Option Key and check if base unique is passed.
	 *
	 * @param $key
	 *
	 * @return string
	 */
	protected function op_key( $key ) {
		$_key  = explode( $this->delimiter, $key );
		$first = array_shift( $_key );
		if ( $first === $this->unique ) {
			return implode( $this->delimiter, $_key );
		}
		return $key;
	}

	/**
	 * @param $option_key
	 *
	 * @return bool
	 */
	public function has( $option_key ) {
		return Helper::array_key_isset( $this->op_key( $option_key ), $this->options, $this->delimiter );
	}

	/**
	 * Gets An Array Value.
	 *
	 * @param string     $option_key
	 * @param bool|mixed $default
	 *
	 * @return mixed
	 */
	public function get( $option_key = '', $default = false ) {
		return ( empty( $option_key ) ) ? $this->options : Helper::array_key_get( $this->op_key( $option_key ), $this->options, $default, $this->delimiter );
	}

	/**
	 * Sets An Array.
	 *
	 * @param mixed $option_key
	 * @param mixed $value
	 *
	 * @return $this
	 */
	public function set( $option_key = '', $value = '' ) {
		if ( ! empty( $option_key ) && empty( $value ) ) {
			$this->options = $option_key;
		} else {
			Helper::array_key_set( $this->op_key( $option_key ), $value, $this->options, $this->delimiter );
		}
		return $this;
	}

	/**
	 * @param $option_key
	 *
	 * @return array|object
	 */
	public function delete( $option_key ) {
		return Helper::array_key_unset( $this->op_key( $option_key ), $this->options, $this->delimiter );
	}

	/**
	 * @return mixed
	 */
	public function current() {
		$keys = array_keys( $this->options );
		return $this->options[ $keys[ $this->position ] ];
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
	 * Checks if Class Is Empty
	 *
	 * @return bool
	 */
	public function is_empty() {
		return ( empty( $this->get() ) );
	}

}
