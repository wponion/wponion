<?php
error_reporting( E_ALL );
set_time_limit( 0 );
define( 'ABSPATH', '' );
define( 'WPONION_URL', '' );
define( 'WPONION_PATH', __DIR__ . '/../../../' );

include_once __DIR__ . '/../functions.php';
include_once __DIR__ . '/../load-wponion.php';

function save_icons_file( $content, $merge = false ) {
	$file = __DIR__ . '/../../../data/icons.php';
	if ( $merge ) {
		$content = file_get_contents( $file ) . '' . $content;
	}
	file_put_contents( $file, $content );
}

function save_icon_json( $content, $file_name ) {
	$content = ( is_array( $content ) || is_object( $content ) ) ? json_encode( $content ) : $content;
	file_put_contents( __DIR__ . '/../../../data/json/icons/' . $file_name . '.json', $content );
}

function icon_slug( $lib, $framework ) {
	$slug = ( isset( $lib['slug'] ) ) ? $lib['slug'] : $framework;
	return str_replace( array( '-', '.', ';', ':', ' ' ), '_', $slug );
}

function icon_returns_function( $slug, $lib, $code ) {
	$search  = array( '[last_updated]', '[file]', '[name]', '[slug]' );
	$replace = array( date( 'd/m/Y - h:i:s:a' ), $slug . '.json', $lib['name'], $slug );
	return str_replace( $search, $replace, $code );
}

function icon_register_function( $slug, $lib, $framework, $code ) {
	$assets  = ( isset( $lib['assets'] ) ) ? $lib['assets'] : $framework;
	$assets  = ( is_array( $assets ) ) ? var_export_strip_array_keys( $assets ) : "'$assets'";
	$prefix  = ( isset( $lib['prefix'] ) ) ? $lib['prefix'] : '';
	$prefix  = ( is_array( $prefix ) ) ? var_export_strip_array_keys( $prefix ) : "'$prefix'";
	$search  = array( '[name]', '[slug]', '[assets]', '[css_prefix]' );
	$replace = array( $lib['name'], $slug, $assets, $prefix );
	return str_replace( $search, $replace, $code );
}
