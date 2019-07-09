<?php
set_time_limit( 0 );

use WPOnion\Assets;

require_once __DIR__ . '/util.php';
require_once __DIR__ . '/../../../vendor/mustangostang/spyc/Spyc.php';
log_msg( 'Icon Extractor Started' );


$icon_function        = get_contents( __DIR__ . '/single-icon-function.txt' );
$icon_register        = get_contents( __DIR__ . '/single-icon-register.txt' );
$icon_defaults        = array(
	'title' => false,
	'css'   => false,
	'terms' => array(),
);
$current_time         = date( 'd/m/Y - h:i:s:a' );
$icons_php            = <<<PHP
<?php
/* Last Updated : $current_time */

use WPOnion\Helper as h;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

PHP;
$icons_register_code  = '';
$icons_functions_code = '';

$exclude_prefix = array( 'icofont' );
$libs           = array(
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

require_once __DIR__ . '/extractor/css.php';
require_once __DIR__ . '/extractor/fontawesome5.php';

save_icons_file( $icons_php . $icons_register_code . $icons_functions_code, false );

log_msg( 'Icon Extractor Finished' );
