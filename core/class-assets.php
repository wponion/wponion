<?php

namespace WPOnion;

use WPOnion_Vendor_Support;

defined( 'ABSPATH' ) || exit;

/**
 * Class Assets
 *
 * @package WPOnion
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 */
final class Assets {
	/**
	 * Stores Icon Library Data.
	 *
	 * @var array
	 */
	public static $icon_libs = array();

	/**
	 * Stores All Javascript's File Data.
	 *
	 * @var array
	 */
	public static $scripts = array();

	/**
	 * Stores All Stylesheets File Data.
	 *
	 * @var array
	 */
	public static $styles = array();

	/**
	 * Stores CDN Info for each css file.
	 *
	 * @var array
	 */
	public static $cdn_styles = array();

	/**
	 * Stores CDN Info for each css file
	 *
	 * @var array
	 */
	public static $cdn_scripts = array();

	/**
	 * Inits WPOnion_Assets Class.
	 */
	public static function init() {
		self::$icon_libs   = array(
			'materialdesignicons' => array(
				'src'     => 'https://cdn.materialdesignicons.com/3.7.95/css/materialdesignicons.min.css',
				'version' => '3.7.95',
			),
			'fontawesome4'        => array(
				'src'     => 'https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css',
				'version' => '4.7.0',
			),
			'icofont'             => array(
				'src'     => 'https://icofont.com/icofont/icofont.min.css',
				'version' => '1.0.1',
			),
			'fontawesome5'        => array(
				'src'     => 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.9.0/css/all.min.css',
				'version' => '5.9.0',
			),
			'foundation'          => array(
				'src'     => 'https://cdn.jsdelivr.net/npm/foundation-icons@1.0.1/foundation-icons.css',
				'version' => '1.0.1',
			),
			'boxicons'            => array(
				'src'     => 'https://cdn.jsdelivr.net/npm/boxicons@2.0.2/css/boxicons.min.css',
				'version' => '2.0.2',
			),
		);
		self::$cdn_scripts = array(
			'wponion-inputmask'  => array(
				'src'  => '/vendors/inputmask/jquery.inputmask.bundle.min.js',
				'deps' => array( 'jquery' ),
			),
			'select2'            => array(
				'src'  => '/vendors/select2/select2.full.min.js',
				'deps' => array( 'jquery' ),
			),
			'chosen'             => array(
				'src'  => '/vendors/chosen/chosen.jquery.min.js',
				'deps' => array( 'jquery' ),
			),
			'selectize'          => array(
				'src'  => '/vendors/selectize/selectize.js',
				'deps' => array( 'jquery' ),
			),
			'wponion-datepicker' => array(
				'src'  => '/vendors/flatpickr/script.js',
				'deps' => array( 'jquery' ),
			),
			'wponion-pickr'      => array(
				'src'  => '/vendors/pickr/pickr.es5.min.js',
				'deps' => array( 'jquery' ),
			),
		);
		self::$cdn_styles  = array(
			'select2'            => array( 'src' => '/vendors/select2/select2.min.css' ),
			'chosen'             => array( 'src' => '/vendors/chosen/chosen.min.css' ),
			'selectize'          => array( 'src' => '/vendors/selectize/selectize.css' ),
			'wponion-datepicker' => array( 'src' => '/vendors/flatpickr/style.css' ),
			'wponion-pickr'      => array( 'src' => '/vendors/pickr/pickr.css' ),
		);
		self::$scripts     = array(
			'wponion-plugins' => array(
				'src'  => wponion()->assets( 'js/wponion-plugins.js' ),
				'deps' => array( 'lodash', 'wp-util' ),
			),
			'wponion-core'    => array(
				'src'  => wponion()->assets( 'js/wponion-core.js' ),
				'deps' => array( 'wponion-plugins' ),
			),
		);
		self::$styles      = array( 'wponion-core' => array( 'src' => wponion()->assets( 'css/wponion-base.css' ) ) );
		add_action( 'admin_enqueue_scripts', array( __CLASS__, 'register_assets' ), 1 );
		add_action( 'load-customize.php', array( __CLASS__, 'register_assets' ), 1 );
		add_action( 'wp_enqueue_scripts', array( __CLASS__, 'register_assets' ), 1 );
		add_action( 'wponion/ajax/enqueue_assets', array( __CLASS__, 'register_assets' ), 1 );
	}

	/**
	 * Registers Assets With WordPress.
	 */
	public static function register_assets() {
		do_action( 'wponion/assets/register/before' );
		wponion_localize();

		if ( is_version_lte( 'wordpress', '5.0' ) ) { //phpcs:ignore WordPress.WP.CapitalPDangit.Misspelled
			wp_register_script( 'lodash', 'https://cdn.jsdelivr.net/npm/lodash@4.17.11/lodash.min.js', array(), '4.17.11', true );
		}

		self::cdn( 'script', self::$cdn_scripts );
		self::cdn( 'style', self::$cdn_styles );
		self::handle_assets( 'style', self::$icon_libs );
		self::handle_assets( 'script', self::$scripts );
		self::handle_assets( 'style', self::$styles );

		do_action( 'wponion/assets/register/after' );
	}

	/**
	 * Validate & Registers Assets with WordPress.
	 *
	 * @param $type
	 * @param $data
	 */
	protected static function handle_assets( $type, $data ) {
		foreach ( $data as $key => $src ) {
			self::regiser_asset( $type, $src, $key );
		}
	}

	/**
	 * Registers Assets with WordPress.
	 *
	 * @param $type
	 * @param $src
	 * @param $key
	 */
	protected static function regiser_asset( $type, $src, $key ) {
		$src = wp_parse_args( $src, array(
			'handle'  => $key,
			'src'     => false,
			'deps'    => array(),
			'version' => ( true === wponion_is_debug() ) ? time() : WPONION_VERSION,
			'footer'  => true,
			'media'   => 'all',
		) );
		if ( 'script' === $type ) {
			wp_register_script( $key, $src['src'], $src['deps'], $src['version'], $src['footer'] );
		} else {
			wp_register_style( $key, $src['src'], $src['deps'], $src['version'], $src['media'] );
		}
	}

	/**
	 * Fetches CDN Url. if WPOnion Vendor Support is not installed.
	 *
	 * @param $type
	 * @param $data
	 */
	protected static function cdn( $type, $data ) {
		foreach ( $data as $key => $src ) {
			$is_cdn_off = ( defined( 'WPONION_OFF_CDN' ) && true === WPONION_OFF_CDN );
			$url        = WPONION_CDN_URL . '@' . WPONION_CDN_VERSION . $src['src'];
			if ( ( $is_cdn_off && class_exists( '\WPOnion_Vendor_Support' ) ) || ! $is_cdn_off && class_exists( '\WPOnion_Vendor_Support' ) ) {
				if ( 'script' === $type ) {
					$url = WPOnion_Vendor_Support::script( $key );
				} else {
					$url = WPOnion_Vendor_Support::style( $key );
				}
			}
			$src['src'] = $url;
			self::regiser_asset( $type, $src, $key );
		}
	}
}

Assets::init();
