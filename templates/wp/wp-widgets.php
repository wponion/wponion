<?php $settings = $this->widgets(); ?>

<div class="<?php echo $settings->wrap_class( '' ); ?>">
	<?php
	if ( ! empty( $settings->fields() ) ) {
		foreach ( $settings->fields()
					  ->fields() as $field ) {
			echo $settings->render_field( $field );
		}
	}
	?>
</div>
