<?php
if ( ! defined( 'ABSPATH' ) ) {
	die;
}

/* @var \WPOnion\Theme\WP_Modern $this */
$dashboard_widgets = $this->dashboard_widgets();
$fields            = $dashboard_widgets->fields();
?>

<div class="<?php echo $dashboard_widgets->wrap_class( '' ); ?>">
	<?php
	foreach ( $fields->fields() as $field ) {
		echo $dashboard_widgets->render_field( $field );
	}
	?>
</div>
