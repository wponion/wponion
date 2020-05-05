<?php
defined( 'ABSPATH' ) || exit;

/**
 * @var WPOnion\Theme\WP_Modern $this
 */
$help_tabs = $this->help_tabs();
?>

<div <?php echo $help_tabs->wrap_attributes(); ?>>
	<?php
	foreach ( $help_tabs->current_tabs['fields'] as $field ) {
		echo $help_tabs->render_field( $field );
	}
	?>
</div>
