<?php
defined( 'ABSPATH' ) || exit;

/* @var \WPOnion\Theme\WP_Modern $this */
$widget      = $this->module_instance();
$is_template = ( $widget->option( 'is_template' ) ) ? 'wponion-template wponion-module-widget-template' : '';
$fields      = $widget->fields()->get();

if ( ! empty( $fields ) ) {
	echo "<div {$widget->wrap_attributes( $is_template )}>";
	foreach ( $fields as $field ) {
		echo $widget->render_field( $field );
	}
	echo '</div>';
}
