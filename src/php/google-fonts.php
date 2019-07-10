<?php
$fonts = file_get_contents( 'https://raw.githubusercontent.com/wponion/google-fonts/master/fonts.php' );

if ( ! empty( $fonts ) ) {
	file_put_contents( __DIR__ . '/../../data/fonts/google.php', $fonts );
}
