<?php

namespace WPOnion\Traits;

defined( 'ABSPATH' ) || exit;

/**
 * Trait Self_Instance
 *
 * @package WPOnion\Traits
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
trait Self_Instance {
	/**
	 * Stores Self Instance.
	 *
	 * @var
	 */
	protected static $self_instance;

	/**
	 * Creates Instance.
	 *
	 * @return static
	 */
	public static function instance() {
		if ( ! isset( self::$self_instance[ static::class ] ) ) {
			self::$self_instance[ static::class ] = new static();
		}
		return self::$self_instance[ static::class ];
	}
}
