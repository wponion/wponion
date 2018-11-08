<?php $settings = $this->screen_options(); ?>

<div class="<?php echo $settings->wrap_class(); ?>">
	<?php
	foreach ( $settings->current_options['fields'] as $field ) {
		echo $settings->render_field( $field );
	}
	?>
</div>
