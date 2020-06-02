<?php
defined( 'ABSPATH' ) || exit;

/* @var $this \WPOnion\Theme\WC */
$module = $this->module_instance();
$desc   = $module->option( 'framework_desc' );
echo '<div ' . $module->wrap_attributes() . '>';

$this->load_file( 'parts/settings/header.php' );
echo '<div class="postbox ">';
echo '<div class="content-outer-wrap">';
$metabox = $this->module_instance();
if ( ! empty( $metabox->settings_menus() ) ) {
	?>
	<div class="menu-wrap main-navigation">
		<div class="wponion-menu">
			<?php echo $this->main_menu( $metabox->settings_menus() ); ?>
		</div>
		<div class="wponion-menu-bg"></div>
	</div>
	<?php
}
$this->load_file( 'parts/settings/content.php' );
echo '</div></div>';
$this->load_file( 'parts/settings/footer.php' );

echo '</div>'; // div end
