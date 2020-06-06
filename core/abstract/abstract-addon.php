<?php

namespace WPOnion;

use WPOnion\Traits\Self_Instance;

defined( 'ABSPATH' ) || exit;

/**
 * Class Addon
 *
 * @package WPOnion
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
abstract class Addon {
	use Self_Instance;

	/**
	 * Stores Addon File.
	 *
	 * @var string
	 */
	protected $file = null;

	/**
	 * Addon Name.
	 *
	 * @var string
	 */
	protected $name = null;

	/**
	 * dir
	 *
	 * @var string
	 */
	protected $dir = false;

	/**
	 * url
	 *
	 * @var string
	 */
	protected $url = false;

	/**
	 * Stores Version Information.
	 *
	 * @var string|int
	 */
	protected $version = null;

	/**
	 * Addon constructor.
	 *
	 * @param bool   $name
	 * @param string $file
	 * @param null   $version
	 */
	public function __construct( $name = false, $file = __FILE__, $version = null ) {
		$this->name    = $name;
		$this->file    = $file;
		$this->version = $version;
		$this->dir     = plugin_dir_path( $file );
		$this->url     = plugin_dir_url( $file );
		add_action( 'wponion/assets/register/after', array( &$this, 'register_assets' ) );
	}

	/**
	 * Returns Addon URL.
	 *
	 * @param string $extra
	 *
	 * @return string
	 */
	public function url( $extra = '' ) {
		return $this->url . $extra;
	}

	/**
	 * Returns Addon Dir.
	 *
	 * @param string $extra
	 *
	 * @return string
	 */
	public function dir( $extra = '' ) {
		return $this->dir . $extra;
	}

	/**
	 * Hooks with WPonion To Allow Devs To Register Their Assets.
	 *
	 * @hook wponion_register_assets_after
	 */
	public function register_assets() {
	}
}
