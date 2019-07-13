<?php
if ( ! defined( 'ABSPATH' ) ) {
	die;
}

/* @var $this \WPOnion\Theme\WP_Modern */
$module = $this->settings();
$colors = $this->color_scheme( $module->option( 'color_scheme', array() ) );

if ( ! empty( $colors ) ) {
	echo '<style>' . $this->render_color_scheme_css( $colors ) . '</style>';
}

echo '<div id="' . $module->instance_id() . '" class="' . $module->wrap_class() . '">';

$this->load_file( 'parts/settings/header.php' );
$this->load_file( 'parts/settings/content.php' );
$this->load_file( 'parts/settings/footer.php' );

echo '</div>'; // div end
