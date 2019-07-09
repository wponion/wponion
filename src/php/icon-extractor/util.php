<?php
error_reporting( E_ALL );
set_time_limit( 0 );
define( 'ABSPATH', '' );
define( 'WPONION_URL', '' );
define( 'WPONION_PATH', __DIR__ . '/../../../' );

include_once __DIR__ . '/../load-wponion.php';
include_once __DIR__ . '/../functions.php';

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
