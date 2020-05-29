<?php

namespace WPOnion\Registry;

use WPOnion\Helper;

defined( 'ABSPATH' ) || exit;

/**
 * Class Modules
 *
 * @package WPOnion\Registry
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @since {NEWVERSION}
 */
class Storage {
	/**
	 * Stores All Instances
	 *
	 * @var array
	 */
	public static $storage = array();

	/**
	 * @param \WPOnion\Bridge $instance
	 * @param bool|string     $instance_id
	 *
	 * @static
	 * @return mixed
	 */
	public static function add( $instance, $instance_id = false ) {
		$instance_slug = ( method_exists( $instance, 'uid' ) ) ? $instance->uid() : '';
		$instance_slug = ( empty( $instance_slug ) && method_exists( $instance, 'unique' ) ) ? $instance->unique() : $instance_slug;

		if ( empty( $instance_id ) && ! empty( $instance_slug ) ) {
			$instance_id = $instance_slug;
		} else {
			$instance_id = ( ! empty( $instance_id ) && empty( $instance_slug ) ) ? $instance_id : trim( $instance_id, '/' ) . '/' . $instance_slug;
		}

		if ( ! self::has( $instance_id ) ) {
			Helper::array_key_set( $instance_id, $instance, self::$storage );
			return $instance;
		}
		return false;
	}

	/**
	 * @param string $key
	 *
	 * @static
	 * @return bool
	 */
	public static function has( $key ) {
		return ( ! empty( self::$storage ) || ! empty( $key ) ) ? Helper::array_key_isset( $key, self::$storage ) : false;
	}

	/**
	 * Returns An Instance.
	 *
	 * @param string $key
	 *
	 * @return bool
	 * @static
	 */
	public static function get( $key ) {
		return ( ! empty( self::$storage ) || ! empty( $key ) ) ? Helper::array_key_get( $key, self::$storage ) : false;
	}
}
