<?php
global $wponion_wp_theme;
$settings = $wponion_wp_theme->dashboard_widgets();
?>

<div class="<?php echo $settings->wrap_class( '', true ); ?>">
	<?php echo $settings->render(); ?>
</div>
