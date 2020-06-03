<?php
defined( 'ABSPATH' ) || exit;

/* @var WPOnion\Theme_API $this */
$help_tabs = $this->module_instance();

echo "<div {$help_tabs->wrap_attributes()}>";
if ( wponion_is_array( $help_tabs->current_tabs['fields'] ) ) {
	foreach ( $help_tabs->current_tabs['fields'] as $field ) {
		echo $help_tabs->render_field( $field );
	}
}
echo '</div>';
