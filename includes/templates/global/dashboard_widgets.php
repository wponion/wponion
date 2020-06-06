<?php
defined( 'ABSPATH' ) || exit;

/* @var \WPOnion\Theme\WP_Modern $this */
$dashboard_widgets = $this->module_instance();
$fields            = $dashboard_widgets->fields()->get();
if ( ! empty( $fields ) ) {
	echo "<div {$dashboard_widgets->wrap_attributes()}>";
	foreach ( $fields as $field ) {
		echo $dashboard_widgets->render_field( $field );
	}
	echo '</div>';
}
