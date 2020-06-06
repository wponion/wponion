<?php
defined( 'ABSPATH' ) || exit;

/**
 * @var $this \WPOnion\Theme\WP_Modern
 */
$metabox = $this->module_instance();
if ( ! empty( $metabox->metabox_menus() ) ) {
	?>
	<div class="menu-wrap">
		<div class="wponion-menu">
			<?php echo $this->get_main_menu_html( $metabox->metabox_menus() ); ?>
		</div>
		<div class="wponion-menu-bg"></div>
	</div>
	<?php
}
?>
