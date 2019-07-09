<?php
$fa_free   = array(
	'solid'  => 'fas',
	'brands' => 'fab',
);
$fa_groups = array(
	'brands'  => 'Brands',
	'solid'   => 'Solid',
	'regular' => 'Regular',
	'light'   => 'Light',
);
$fa_styles = array(
	'brands'  => 'fab',
	'solid'   => 'fas',
	'regular' => 'far',
	'light'   => 'fal',
);

require_once __DIR__ . '/../../../../vendor/mustangostang/spyc/Spyc.php';

$lib = $libs['fontawesome5'];

function fa_extract_font( $_libs ) {
	global $icon_defaults, $fa_styles, $fa_groups;
	$result = array();
	foreach ( $_libs as $css => $icon ) {
		$icon_arg          = array_merge( $icon_defaults, array( 'css' => $css ) );
		$icon_arg['title'] = ( ! empty( $icon['label'] ) ) ? $icon['label'] : $css;
		$icon_arg['terms'] = ( ! empty( $icon['search']['terms'] ) ) ? $icon['search']['terms'] : array();
		$icon_arg['terms'] = ( is_array( $icon_arg['terms'] ) ) ? implode( ' ', $icon_arg['terms'] ) : $icon_arg['terms'];
		if ( is_array( $icon['styles'] ) && ! empty( $icon['styles'] ) ) {
			foreach ( $icon['styles'] as $style ) {
				if ( isset( $fa_styles[ $style ] ) ) {
					$_ico = $icon_arg;
					$key  = $fa_styles[ $style ] . ' fa-' . $_ico['css'];
					unset( $_ico['css'] );
					if ( ! isset( $result[ $fa_groups[ $style ] ] ) ) {
						$result[ $fa_groups[ $style ] ] = array();
					}
					$c = array_filter( $_ico );

					if ( count( $c ) === 1 ) {
						$result[ $fa_groups[ $style ] ][ $key ] = ( isset( $c['title'] ) ) ? $c['title'] : $key;
					} else {
						$result[ $fa_groups[ $style ] ][ $key ] = $c;
					}
				}
			}
		}
	}
	return $result;
}

log_msg( 'Extracting - YML-FA : ' . 'fontawesome5' );
$file = get_contents( $lib['src'] );
$fa5  = false;
if ( ! empty( $file ) ) {
	$result = array();
	$fa5    = spyc_load( $file );

	if ( is_array( $fa5 ) ) {
		$result = fa_extract_font( $fa5 );
	}

	$slug = icon_slug( $lib, 'fontawesome5' );
	save_icon_json( $result, $slug );
	$icons_functions_code .= icon_returns_function( $slug, $lib, $icon_function );
	$icons_register_code  .= icon_register_function( $slug, $lib, 'fontawesome5', $icon_register );
} else {
	log_msg( 'Extracting Failed - YML-FA : fontawesome5' );
}

log_msg( 'Extracting - YML-FA : FontAwesome5Pro' );
$fapro  = $libs['fontawesome5pro'];
$fa5pro = get_contents( $fapro['src'] );

if ( ! empty( $fa5pro ) ) {
	$result = array();
	$fa5pro = spyc_load( $fa5pro );

	if ( is_array( $fa5pro ) ) {
		foreach ( $fa5pro as $key => $data ) {
			if ( isset( $fa5[ $key ] ) ) {
				if ( is_array( $data['styles'] ) && ! empty( $data['styles'] ) && isset( $fa5[ $key ]['styles'] ) ) {
					if ( is_array( $data['styles'] ) ) {
						foreach ( $data['styles'] as $i => $term ) {
							if ( isset( $fa5[ $key ]['styles'] ) && in_array( $term, $fa5[ $key ]['styles'], true ) ) {
								unset( $fa5pro[ $key ]['styles'][ $i ] );
							}
						}
						if ( empty( array_filter( $fa5pro[ $key ]['styles'] ) ) ) {
							unset( $fa5pro[ $key ] );
						}
					}
				}
			}
		}
		$result = fa_extract_font( $fa5pro );
		$slug   = icon_slug( $fapro, 'fontawesome5pro' );
		save_icon_json( $result, $slug );
		$icons_functions_code .= icon_returns_function( $slug, $fapro, get_contents( __DIR__ . '/../icon-function-fontawesome5pro.txt' ) );
		$icons_register_code  .= icon_register_function( $slug, $fapro, 'fontawesome5pro', $icon_register );
	}
} else {
	log_msg( 'Extracting Failed - YML-FA : fontawesome5 Pro' );
}
