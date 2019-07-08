<?php
set_time_limit( 0 );

use WPOnion\Assets;

require_once __DIR__ . '/util.php';
log_msg( 'Icon Extractor Started' );


$icon_function        = file_get_contents( __DIR__ . '/single-icon-function.txt' );
$icon_register        = file_get_contents( __DIR__ . '/single-icon-register.txt' );
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
$exclude_prefix       = array( 'icofont' );
$libs                 = array(
	'css'    => array(
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
	'yml-fa' => array(
		'fontawesome5pro' => array(
			'name'   => 'FontAwesome 5 Pro',
			'prefix' => array( 'fas', 'far', 'fal', 'fab' ),
			'src'    => __DIR__ . '/../../fonts/fontawesome/fa-pro-5.9.0.yml',
		),
		'fontawesome5'    => array(
			'name'   => 'FontAwesome 5',
			'prefix' => array( 'fas', 'fab' ),
			'src'    => 'https://raw.githubusercontent.com/FortAwesome/Font-Awesome/master/metadata/icons.yml',
		),
	),
);

require_once __DIR__ . '/extract-css.php';
require_once __DIR__ . '/extract-fontawesome.php';

save_icons_file( $icons_php . $icons_register_code . $icons_functions_code, false );

log_msg( 'Icon Extractor Finished' );
