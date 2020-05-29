<?php

namespace WPO\Helper;

defined( 'ABSPATH' ) || exit;

use JsonSerializable;
use WPOnion\Traits\Json_Serialize;
use WPOnion\Traits\Countable;

/**
 * Class Base
 *
 * @package WPO\Helper
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
abstract class Base implements JsonSerializable, \Countable {
	use Json_Serialize;
	use Countable;

	/**
	 * Stores Options.
	 *
	 * @var array
	 */
	protected $settings = array();

	/**
	 * Custom Variable Name That Class Uses To Work As Array.
	 *
	 * @uses \ArrayAccess
	 * @var string
	 */
	protected $array_var = 'settings';

	/**
	 * Stores Unique value.
	 *
	 * @var string
	 */
	protected $unique = '';

	/**
	 * Returns Array Accessable Variable.
	 *
	 * @return mixed
	 */
	public function get() {
		return $this->{$this->array_var};
	}

	/**
	 * Updates Array Access Variable With New Data.
	 *
	 * @param $args
	 *
	 * @return $this
	 */
	public function set( $args ) {
		$this->{$this->array_var} = $args;
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
	 * @return array
	 */
	public function __sleep() {
		return array_keys( get_class_vars( static::class ) );
	}
}
