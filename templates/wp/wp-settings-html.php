<?php
$ins     = $this->settings();
$loading = __( 'Loading Please Wait...' );
?>

<div class="wrap">
	<div class="<?php echo $ins->wrap_class( '', true ); ?>">
		<div class="wponion-framework-header">
			<?php
			if ( ! empty( $ins->option( 'framework_title' ) ) ) {
				echo '<h1>' . $ins->option( 'framework_title' ) . '</h1>';
			}

			if ( ! empty( $ins->option( 'framework_desc' ) ) ) {
				echo '<p>' . $ins->option( 'framework_desc' ) . '</p>';
			}
			?>
		</div>

		<?php echo $this->get_main_menu_html(); ?>

		<div class="wponion-content">
			<div class="loader loader-default page-loader is-active" data-text="<?php echo $loading; ?>"></div>
			<div class="wponion-sections"> <?php include_once 'settings-template.php'; ?> </div>
			<div class="wponion-sections wponion-form-actions"> <?php echo $ins->settings_button(); ?> </div>
		</div>
	</div>
</div>