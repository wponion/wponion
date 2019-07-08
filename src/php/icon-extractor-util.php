<?php
error_reporting( E_ALL );
set_time_limit( 0 );
define( 'ABSPATH', '' );
define( 'WPONION_URL', '' );

function strip_array_keys( $result ) {
	return preg_replace( '/[0-9]+ \=\>/i', '', var_export( $result, true ) );
}

function add_action() {
}

function wponion() {
	return \WPOnion::instance();
}


function icons_file_updater( $content = '', $append = false ) {

}


function save_main_icon_file( $content ) {
	file_put_contents( __DIR__ . '/../../data/icons.php', $content );
}


function save_icon_file( $content, $file_name ) {
	file_put_contents( __DIR__ . '/../../data/icons/' . $file_name, $content );
}
