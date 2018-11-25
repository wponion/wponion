<?php $settings = $this->dashboard_widgets(); ?>

<div class="<?php echo $settings->wrap_class( '' ); ?>">
	<?php
	foreach ( $settings->fields() as $field ) {
		echo $settings->render_field( $field );
	}
	?>
</div>
