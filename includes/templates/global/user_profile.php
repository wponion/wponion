<?php
defined( 'ABSPATH' ) || exit;

/* @var \WPOnion\Theme\WP_Modern $this */
/* @var \WPO\Builder $fields */
$user_profile = $this->module_instance();
$fields       = $user_profile->fields()->get();
if ( ! empty( $fields ) ) {
	$heading = $user_profile->option( 'heading' );
	if ( ! empty( $heading ) ) {
		echo "<h2>{$heading}</h2>";
	}

	echo "<div {$user_profile->wrap_attributes()}>";
	foreach ( $fields as $field ) {
		echo $user_profile->render_field( $field );
	}
	echo '</div>';
}
