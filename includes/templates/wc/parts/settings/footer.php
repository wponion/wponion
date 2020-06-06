<?php
defined( 'ABSPATH' ) || exit;

/* @var $this \WPOnion\Theme\WC */
$module = $this->module_instance();
?>

<footer>
	<div class="inner-container wpo-row wpo-middle-xs">
		<div class="left wpo-col-xs-12 wpo-col-sm-12 wpo-col-md-6">

		</div>
		<div class="right wpo-col-xs-12 wpo-col-sm-12 wpo-col-md-6">
			<div class="action-buttons">
				<?php echo $module->settings_button(); ?>
			</div>
		</div>
	</div>

</footer>
