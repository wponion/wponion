<?php
if ( ! defined( 'ABSPATH' ) ) {
	die;
}

/* @var $this \WPOnion\Theme\WC */
$module = $this->settings();
$desc   = $module->option( 'framework_desc' );
echo '<div class="' . $module->wrap_class() . '">';

$this->load_file( 'parts/settings/header.php' );
echo '<div class="postbox ">';
echo '<div class="content-outer-wrap">';
$metabox = $this->settings();
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
