<?php
if ( ! defined( 'ABSPATH' ) ) {
	die;
}

/* @var WPOnion\Theme\WP_Modern $this */
$help_tabs = $this->help_tabs();
?>

<div class="<?php echo $help_tabs->wrap_class(); ?>">
	<?php
	foreach ( $help_tabs->current_tabs['fields'] as $field ) {
		echo $help_tabs->render_field( $field );
	}
	?>
</div>
