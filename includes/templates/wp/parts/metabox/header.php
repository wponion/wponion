<?php
defined( 'ABSPATH' ) || exit;

/* @var $this \WPOnion\Theme\WP_Lite */
$metabox = $this->module_instance();

if ( ! empty( $metabox->metabox_menus() ) ) {
	echo '<div class="wponion-menu main-navigation">';
	echo $this->main_menu( $metabox->metabox_menus() );
	echo '</div>';
}
