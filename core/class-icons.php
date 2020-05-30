<?php

namespace WPOnion;

defined( 'ABSPATH' ) || exit;

/**
 * Class Icons
 *
 * @package WPOnion
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
class Icons {
	/**
	 * Stores All Icon's Class Instance.
	 *
	 * @var array
	 */
	protected static $instances = array();

	/**
	 * Stores All Icon's Info.
	 *
	 * @var array
	 */
	protected static $icons = array();

	/**
	 * Adds Icon's Instance.
	 *
	 * @param array|\WPOnion\Icon $instance_or_args
	 *
	 * @return \WPOnion\Icon
	 */
	public static function add( $instance_or_args ) {
		if ( ! $instance_or_args instanceof Icon ) {
			$instance_or_args = new Icon( $instance_or_args );
		}
		self::$instances[ $instance_or_args->slug() ] = $instance_or_args;
		self::$icons[ $instance_or_args->slug() ]     = $instance_or_args->name();
		return $instance_or_args;
	}

	/**
	 * Returns All Icons.
	 *
	 * @return array
	 */
	public static function get_all() {
		return self::$instances;
	}

	/**
	 * Returns Icons data if exists.
	 *
	 * @param $icon_name
	 *
	 * @return array|\WPOnion\Icon|bool
	 */
	public static function get( $icon_name ) {
		return isset( self::$instances[ $icon_name ] ) ? self::$instances[ $icon_name ] : false;
	}

	/**
	 * Checks and returns Icon's Name.
	 *
	 * @param $slug
	 *
	 * @return bool|mixed
	 */
	public static function name( $slug ) {
		return ( isset( self::$icons[ $slug ] ) ) ? self::$icons[ $slug ] : false;
	}

	/**
	 * Returns List of icons.
	 *
	 * @return array
	 */
	public static function icon_list() {
		return self::$icons;
	}

	/**
	 * Basic Setup.
	 */
	public static function setup() {
		do_action( 'wponion/icons/setup/before' );
		require_once WPONION_PATH . 'data/icons.php';
		do_action( 'wponion/icons/setup/after' );
	}

	/**
	 * Retuns Icons Defaults.
	 *
	 * @return array
	 */
	public static function icon_defaults() {
		return array(
			'title' => false,
			'css'   => false,
			'terms' => array(),
		);
	}
}

Icons::setup();
