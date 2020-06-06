<?php
defined( 'ABSPATH' ) || exit;

/* @var \WPOnion\Theme\WP_Modern $this */
/* @var \WPOnion\Modules\Admin\Taxonomy $taxonomy */
/* @var \WPO\Builder $fields */
$taxonomy = $this->module_instance();
$fields   = $taxonomy->fields()->get();

if ( ! empty( $fields ) ) {
	echo "<div {$taxonomy->wrap_attributes()} >";
	foreach ( $fields as $field ) {
		echo $taxonomy->render_field( $field );
	}
	echo '</div>';
}
