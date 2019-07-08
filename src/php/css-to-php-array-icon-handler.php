<?php
include __DIR__ . '/icon-extractor-util.php';
include __DIR__ . '/../../core/traits/trait-self-instance.php';
include __DIR__ . '/../../core/setup/class-wponion.php';
include __DIR__ . '/../../core/class-assets.php';

$single_icon_file = file_get_contents( __DIR__ . '/icon-file.txt' );
$icon_function    = file_get_contents( __DIR__ . '/single-icon.txt' );
$last_updated     = date( 'd/m/Y - h:i:s:a' );
$icons            = array(
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
$icons_main_file  = <<<PHP
<?php
/* Last Updated : $last_updated */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

PHP;

foreach ( $icons as $framework => $data ) {
	$css = file_get_contents( $data['src'] );
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

		$slug = ( isset( $data['slug'] ) ) ? $data['slug'] : $framework;
		$code = str_replace( array( '[last_updated]', '[results]', '[name]', '[slug]' ), array(
			$last_updated,
			strip_array_keys( $result ),
			$data['name'],
			$slug,
		), $single_icon_file );
		save_icon_file( $code, $slug . '.php' );

		$assets          = ( isset( $data['assets'] ) ) ? $data['assets'] : $framework;
		$assets          = ( is_array( $assets ) ) ? strip_array_keys( $assets ) : "'$assets'";
		$prefix          = ( isset( $data['prefix'] ) ) ? $data['prefix'] : '';
		$prefix          = ( is_array( $prefix ) ) ? strip_array_keys( $prefix ) : "'$prefix'";
		$icons_main_file .= PHP_EOL . str_replace( array(
				'[name]',
				'[slug]',
				'[assets]',
				'[css_prefix]',
			), array(
				$data['name'],
				$slug,
				$assets,
				$prefix,
			), $icon_function );
	}
}

save_main_icon_file( $icons_main_file );
