<?php
global $wponion_wp_theme;
$settings = $wponion_wp_theme->settings();
?>
<div class="wrap">
	<div class="<?php echo $settings->wrap_class( '', true ); ?>">
		<?php echo $wponion_wp_theme->get_main_menu_html(); ?>


		<div id="poststuff">
			<div class="metabox-holder" id="post-body">
				<div id="post-body-content">
					<div class="wponion-content">
						<div class="wponion-sections">
							<?php echo $settings->render_inner_html(); ?>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>