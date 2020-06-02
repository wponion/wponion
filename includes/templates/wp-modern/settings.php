<?php
defined( 'ABSPATH' ) || exit;

/* @var $this \WPOnion\Theme\WP_Modern */
$module = $this->module_instance();
$colors = $this->color_scheme( $module->option( 'color_scheme', array() ) );

if ( ! empty( $colors ) ) {
	echo '<style>' . $this->render_color_scheme_css( $colors ) . '</style>';
}

echo '<div ' . $module->wrap_attributes() . '>';

$this->load_file( 'parts/settings/header.php' );
$this->load_file( 'parts/settings/content.php' );
$this->load_file( 'parts/settings/footer.php' );

echo '</div>'; // div end
