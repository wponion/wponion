<?php
global $wponion_wp_theme;
$settings = $wponion_wp_theme->settings();
?>
<div class="wrap">

	<div class="<?php echo $settings->wrap_class( '', true ); ?>">
		<div class="wponion-framework-header">
			<?php
			if ( ! empty( $settings->option( 'framework_title' ) ) ) {
				echo '<h1>' . $settings->option( 'framework_title' ) . '</h1>';
			}

			if ( ! empty( $settings->option( 'framework_desc' ) ) ) {
				echo '<p>' . $settings->option( 'framework_desc' ) . '</p>';
			}

			?>

		</div>
		<?php echo $wponion_wp_theme->get_main_menu_html(); ?>
		<div id="poststuff">

			<div class="metabox-holder wponion-framework-bootstrap" id="post-body">
				<div id="post-body-content">
					<div class="wponion-content">
						<div class="loader loader-default wponion-page-loader is-active"
							 data-text="<?php _e( "Loading Please Wait..." ); ?>"></div>
						<div class="wponion-sections">
							<?php include_once 'settings-template.php'; ?>
						</div>
						<div class="wponion-sections wponion-form-actions">
							<?php echo $settings->settings_button(); ?>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>