<?php
if ( ! defined( 'ABSPATH' ) ) {
	die;
}

/* @var $this \WPOnion\Theme\WP_Lite */
$metabox = $this->metabox();

if ( ! empty( $metabox->metabox_menus() ) ) {
	echo '<div class="wponion-menu main-navigation">';
	echo $this->main_menu( $metabox->metabox_menus() );
	echo '</div>';
}
