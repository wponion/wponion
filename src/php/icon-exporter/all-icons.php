<?php

use WPOnion\Assets;

require_once __DIR__ . '/../load-wponion.php';

class Icon_Exporter {
	public static $icon_defaults            = array();
	public static $libs                     = array();
	public static $icons_register_functions = '';
	public static $icons_callbacks          = '';
	public static $exclude_css_prefix       = array();

	public static function contents( $src ) {
		return file_get_contents( $src );
	}

	public static function init() {
		self::$icon_defaults      = array(
			'title' => false,
			'css'   => false,
			'terms' => array(),
		);
		self::$exclude_css_prefix = array( 'icofont' );
		self::$libs               = array(
			'css'             => array(
				'dashicons'    => array(
					'name'   => 'Dashicons',
					'prefix' => array( 'dashicons' ),
					'src'    => 'https://developer.wordpress.org/wp-includes/css/dashicons.min.css',
				),
				'icofont'      => array(
					'name'   => 'Icofont',
					'prefix' => array( 'icofont' ),
					'src'    => Assets::$icon_libs['icofont']['src'],
				),
				'fontawesome4' => array(
					'name'   => 'FontAwesome 4',
					'prefix' => array( 'fa' ),
					'src'    => Assets::$icon_libs['fontawesome4']['src'],
				),
				'foundation'   => array(
					'name'   => 'Foundation',
					'prefix' => array( 'fi' ),
					'src'    => Assets::$icon_libs['foundation']['src'],
				),
				'boxicons'     => array(
					'name'   => 'Box Icons',
					'prefix' => array( 'bx' ),
					'src'    => Assets::$icon_libs['boxicons']['src'],
				),
			),
			'fontawesome5'    => array(
				'name'   => 'FontAwesome 5',
				'prefix' => array( 'fas', 'fab' ),
				'src'    => 'https://raw.githubusercontent.com/FortAwesome/Font-Awesome/master/metadata/icons.yml',
			),
			'fontawesome5pro' => array(
				'name'   => 'FontAwesome 5 Pro',
				'prefix' => array( 'fas', 'far', 'fal', 'fab' ),
				'src'    => __DIR__ . '/../../fonts/fontawesome-pro/icons-5.9.0.yml',
			),
		);
		self::init_export();
	}

	public static function init_export() {
		require_once WPONION_PATH . '/vendor/mustangostang/spyc/Spyc.php';
		require_once WPONION_PATH . '/src/php/icon-exporter/extract-base.php';
		require_once WPONION_PATH . '/src/php/icon-exporter/exporter/css.php';
		require_once WPONION_PATH . '/src/php/icon-exporter/exporter/fontawesome5.php';
		require_once WPONION_PATH . '/src/php/icon-exporter/exporter/fontawesome5pro.php';
		self::save_file();
	}

	public static function save_file() {
		$current_time = date( 'd/m/Y - h:i:s:a' );
		$icons_php    = <<<PHP
<?php
/* Last Updated : $current_time */

use WPOnion\Helper as Helper;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

PHP;

		$icons_php .= self::$icons_register_functions;
		$icons_php .= self::$icons_callbacks;
		file_put_contents( WPONION_PATH . '/data/icons.php', $icons_php );
	}
}

Icon_Exporter::init();
