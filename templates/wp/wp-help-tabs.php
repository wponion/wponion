<?php $settings = $this->help_tabs(); ?>

<div class="<?php echo $settings->wrap_class(); ?>">
	<?php
	foreach ( $settings->current_tabs['fields'] as $field ) {
		echo $settings->render_field( $field );
	}
	?>
</div>
