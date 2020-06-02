<?php
defined( 'ABSPATH' ) || exit;

/* @var $this \WPOnion\Theme\WC */
$metabox = $this->module_instance();
if ( ! empty( $metabox->metabox_menus() ) ) {
	?>
	<div class="menu-wrap main-navigation">
		<div class="wponion-menu">
			<?php echo $this->main_menu( $metabox->metabox_menus() ); ?>
		</div>
		<div class="wponion-menu-bg"></div>
	</div>
	<?php
}
