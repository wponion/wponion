<?php
/**
 * @var \WPOnion\Theme\WP_Modern $this
 */
$nav_menu = $this->nav_menu();
$fields   = $nav_menu->fields();

echo '<div class="' . $nav_menu->wrap_class( '' ) . '">';
foreach ( $fields->get() as $field ) {
	echo $nav_menu->render_field( $field );
}
echo '</div>';
