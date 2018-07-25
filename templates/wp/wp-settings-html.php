<div class="wrap">

	<div class="<?php echo $this->settings()->wrap_class( '', true ); ?>">
		<div class="wponion-framework-header">
			<?php
			if ( ! empty( $this->settings()->option( 'framework_title' ) ) ) {
				echo '<h1>' . $this->settings()->option( 'framework_title' ) . '</h1>';
			}

			if ( ! empty( $this->settings()->option( 'framework_desc' ) ) ) {
				echo '<p>' . $this->settings()->option( 'framework_desc' ) . '</p>';
			}

			?>

		</div>
		<?php echo $this->get_main_menu_html(); ?>
		<div id="poststuff">

			<div class="metabox-holder" id="post-body">
				<div id="post-body-content">
					<div class="wponion-content">
						<div class="loader loader-default wponion-page-loader is-active"
							 data-text="<?php _e( "Loading Please Wait..." ); ?>"></div>
						<div class="wponion-sections">
							<?php include_once 'settings-template.php'; ?>
						</div>
						<div class="wponion-sections wponion-form-actions">
							<?php echo $this->settings()->settings_button(); ?>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>