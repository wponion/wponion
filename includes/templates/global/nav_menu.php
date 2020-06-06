<?php
defined( 'ABSPATH' ) || exit;

/* @var \WPOnion\Theme\WP_Modern $this */
$nav_menu = $this->module_instance();
$fields   = $nav_menu->fields()->get();

if ( ! empty( $fields ) ) {
	echo "<div {$nav_menu->wrap_attributes()}>";
	foreach ( $fields as $field ) {
		echo $nav_menu->render_field( $field );
	}
	echo '</div>';
}
