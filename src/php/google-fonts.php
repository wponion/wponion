<?php
require_once __DIR__ . '/functions.php';

log_msg( 'Fetching Google Fonts' );
$content = file_get_contents( 'https://raw.githubusercontent.com/wponion/google-fonts/master/fonts.php' );
if ( ! empty( $content ) ) {
	log_msg( 'Saving Google Fonts' );
	file_put_contents( __DIR__ . '/../../data/fonts/google.php', $content );
} else {
	log_msg( 'Failed : Unable To Fetch Google Fonts' );
	log_msg( 'Response : ' );
	log_msg( $content );
}
