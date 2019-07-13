<?php
if ( ! defined( 'ABSPATH' ) ) {
	die;
}

/* @var \WPOnion\Theme\WP_Modern $this */
$nav_menu = $this->nav_menu();
$fields   = $nav_menu->fields();

echo '<div id="' . $nav_menu->instance_id() . '" class="' . $nav_menu->wrap_class( '' ) . '">';
foreach ( $fields->get() as $field ) {
	echo $nav_menu->render_field( $field );
}
echo '</div>';
