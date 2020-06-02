<?php
defined( 'ABSPATH' ) || exit;

/* @var $this \WPOnion\Theme\WP_Modern */
$metabox = $this->module_instance();
$colors  = $this->color_scheme( $metabox->option( 'color_scheme', array() ) );

if ( ! empty( $colors ) ) {
	echo '<style>' . $this->render_color_scheme_css( $colors, '#' . $metabox->metabox_id() ) . '</style>';
}

echo '<div ' . $metabox->wrap_attributes() . '>';
echo '<div class="wponion-metabox-inside-wrap">';
echo '<div class="content-outer-wrap">';
$this->load_file( 'parts/metabox/side-menu.php' );
$this->load_file( 'parts/metabox/contents.php' );
echo '</div>';
echo '</div>';

/**
 * Renders Ajax Buttons.
 */
if ( false !== $metabox->option( 'ajax' ) ) {
	echo '<h2 class="ajax-container">';
	echo $metabox->hidden_secure_data();
	echo $metabox->save_button();
	echo '</h2>';
}

echo '</div>';
