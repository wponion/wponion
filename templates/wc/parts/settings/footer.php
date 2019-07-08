<?php
if ( ! defined( 'ABSPATH' ) ) {
	die;
}

/* @var $this \WPOnion\Theme\WC */
$module = $this->settings();
?>

<footer>
	<div class="inner-container row middle-xs">
		<div class="left col-xs-12 col-sm-12 col-md-6">

		</div>
		<div class="right col-xs-12 col-sm-12 col-md-6">
			<div class="action-buttons">
				<?php echo $module->settings_button(); ?>
			</div>
		</div>
	</div>

</footer>
