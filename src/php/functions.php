<?php
function log_msg( $content ) {
	echo $content . PHP_EOL;
}

function get_contents( $url ) {
	static $data = array();
	return file_get_contents( $url );
}

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
}

function wponion() {
	return \WPOnion::instance();
}
