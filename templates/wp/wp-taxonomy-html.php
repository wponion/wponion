<?php
$settings = $this->taxonomy();
?>

<div class="<?php echo $settings->wrap_class(); ?>">

	<?php
	foreach ( $settings->fields() as $field ) {
		echo $settings->render_field( $field );
	}

	?>

</div>
