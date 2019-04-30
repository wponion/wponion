<?php
/**
 * @var $this \WPOnion\Theme\WP_Modern
 */

$metabox = $this->metabox();

if ( ! empty( $metabox->option( 'theme_color' ) ) && 'false' !== $metabox->option( 'theme_color' ) ) {
	echo '<style>';
	echo '#' . $metabox->metabox_id() . ' ';
	echo ' .wponion-menu > ul > li > a.active ';
	echo ' , ';
	echo '#' . $metabox->metabox_id() . ' ';
	echo ' .wponion-menu > ul > li:hover > a ';
	echo '{background:' . $metabox->option( 'theme_color' ) . '}';
	echo '</style>';
}

echo '<div class="' . $metabox->wrap_class() . '">';
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
