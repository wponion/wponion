<?php
set_time_limit( 0 );
error_reporting( E_ALL );
define( 'ABSPATH', '' );
define( 'WPONION_URL', '' );
define( 'WPONION_PATH', dirname( dirname( __DIR__ ) ) );
define( 'WPO_PHP_PATH', __DIR__ );

function wponion() {
	return \WPOnion::instance();
}

function wpo_log( $content ) {
	echo $content . PHP_EOL;
}

function var_export_strip_array_keys( $result ) {
	return preg_replace( '/[0-9]+ \=\>/i', '', var_export( $result, true ) );
}


/**
 * Noop Related Functions.
 */

function do_action() {
}

function apply_filter( $dummy ) {
	return $dummy;
}

function add_filter() {
}

function add_action() {
}

