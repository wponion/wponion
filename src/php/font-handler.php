<?php
error_reporting( E_ALL );
set_time_limit( 0 );
define( 'ABSPATH', '' );
define( 'WPONION_URL', '' );

function add_action() {
}

function wponion() {
	return \WPOnion::instance();
}

include __DIR__ . '/../../core/traits/trait-self-instance.php';
include __DIR__ . '/../../core/setup/class-wponion.php';
include __DIR__ . '/../../core/class-assets.php';

$fonts = array(
	'dashicons'    => array(
		'name'   => 'Dashicons',
		'prefix' => array( 'dashicons' ),
		'src'    => 'https://developer.wordpress.org/wp-includes/css/dashicons.min.css',
	),
	'icofont'      => array(
		'name'   => 'Icofont',
		'prefix' => array( 'icofont' ),
		'src'    => 'https://icofont.com/icofont/icofont.min.css',
	),
	'fontawesome4' => array(
		'name'   => 'FontAwesome 4',
		'prefix' => array( 'fa' ),
		'src'    => \WPOnion\Assets::$icon_libs['fontawesome4']['src'],
	),
	'foundation'   => array(
		'name'   => 'Foundation',
		'prefix' => array( 'fi' ),
		'src'    => \WPOnion\Assets::$icon_libs['foundation']['src'],
	),
	'boxicons'     => array(
		'name'   => 'Box Icons',
		'prefix' => array( 'bx' ),
		'src'    => \WPOnion\Assets::$icon_libs['boxicons']['src'],
	),
);

foreach ( $fonts as $framework => $data ) {
	$css          = file_get_contents( $data['src'] );
	$last_updated = date( 'd/m/Y - h:i:s:a' );
	if ( ! empty( $css ) ) {
		$result         = array();
		$parser_matches = array();
		preg_match_all( '/(?ims)([a-z0-9\s\,\.\:#_\-@]+)\{([^\}]*)\}/', $css, $parser_matches );

		foreach ( $data['prefix'] as $prefix ) {
			foreach ( $parser_matches[0] as $i => $x ) {
				$selector               = trim( $parser_matches[1][ $i ] );
				$value                  = trim( $parser_matches[2][ $i ] );
				$is_correct_prefix      = substr( $selector, 0, strlen( '.' . $prefix ) ) === '.' . $prefix;
				$is_with_pseudo_element = is_numeric( strpos( $selector, ':' ) );
				$has_content_for_pseudo = is_numeric( strpos( $value, 'content' ) );
				$selector_is_icon       = $is_correct_prefix && $is_with_pseudo_element && $has_content_for_pseudo;

				if ( $selector_is_icon ) {
					$icon     = explode( ':', ltrim( $selector, '.' ) );
					$result[] = $prefix . ' ' . $icon[0];
				}
			}
		}

		$slug         = ( isset( $data['slug'] ) ) ? $data['slug'] : $framework;
		$file_content = var_export( array(
			'name'       => $data['name'],
			'slug'       => $slug,
			'assets'     => ( isset( $data['assets'] ) ) ? $data['assets'] : $framework,
			'css_prefix' => ( isset( $data['prefix'] ) ) ? $data['prefix'] : false,
			'icons'      => $result,
		), true );
		$file_content = preg_replace( '/[0-9]+ \=\>/i', '', $file_content );

		file_put_contents( __DIR__ . '/../../data/icons/' . $slug . '.php', <<<PHPCODE
<?php
/* Last Updated : $last_updated */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

wponion_add_icon_library($file_content)->register();

PHPCODE
		);
	}
}
