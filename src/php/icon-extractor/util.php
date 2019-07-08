<?php
error_reporting( E_ALL );
set_time_limit( 0 );
define( 'ABSPATH', '' );
define( 'WPONION_URL', '' );
define( 'WPONION_PATH', __DIR__ . '/../../../' );

function var_export_strip_array_keys( $result ) {
	return preg_replace( '/[0-9]+ \=\>/i', '', var_export( $result, true ) );
}

function do_action() {

}

function apply_filter( $dummy ) {
	return $dummy;
}

function add_filter() {

}

function add_action() {
	$file = '';


}

function wponion() {
	return \WPOnion::instance();
}

include_once __DIR__ . '/../load-wponion.php';

function log_msg( $content ) {
	echo $content . PHP_EOL;
}

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
