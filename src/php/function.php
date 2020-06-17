<?php
date_default_timezone_set( 'Asia/Kolkata' );
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

/**
 * Retrieve metadata from a file.
 *
 * Searches for metadata in the first 8kiB of a file, such as a plugin or theme.
 * Each piece of metadata must be on its own line. Fields can not span multiple
 * lines, the value will get cut at the end of the first line.
 *
 * If the file data is not within that first 8kiB, then the author should correct
 * their plugin file and move the data headers to the top.
 *
 * @param string $file Path to the file
 * @param array  $default_headers List of headers, in the format array('HeaderKey' => 'Header Name')
 *
 * @return array
 */
function get_file_meta( $file, $default_headers ) {
	$fp        = fopen( $file, 'r' );
	$file_data = fread( $fp, 8192 );
	fclose( $fp );
	$file_data   = str_replace( "\r", "\n", $file_data );
	$all_headers = $default_headers;

	foreach ( $all_headers as $field => $regex ) {
		if ( preg_match( '/^[ \t\/*#@]*' . preg_quote( $regex, '/' ) . ':(.*)$/mi', $file_data, $match ) && $match[1] )
			$all_headers[ $field ] = trim( preg_replace( "/\s*(?:\*\/|\?>).*/", '', $match[1] ) ); else
			$all_headers[ $field ] = '';
	}

	return $all_headers;
}
