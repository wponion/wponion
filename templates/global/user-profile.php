<?php $settings = $this->user_profile(); ?>

<?php if ( ! empty( $settings->option( 'heading' ) ) ) { ?>
	<h2><?php echo $settings->option( 'heading' ); ?></h2>
<?php } ?>
<div class="<?php echo $settings->wrap_class(); ?>">
	<?php
	foreach ( $settings->fields() as $field ) {
		echo $settings->render_field( $field );
	}
	?>
</div>
