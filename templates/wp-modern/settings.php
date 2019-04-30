<?php
/**
 * @var $this \WPOnion\Theme\WP_Modern
 */
$module = $this->settings();

if ( ! empty( $module->option( 'theme_color' ) ) && 'false' !== $module->option( 'theme_color' ) ) {
	echo '<style>';
	echo ' .wponion-menu > ul > li > a.active ';
	echo ' , ';
	echo ' .wponion-menu > ul > li:hover > a ';
	echo '{background:' . $module->option( 'theme_color' ) . '}';
	echo '</style>';
}

echo '<div class="' . $module->wrap_class() . '">';

$this->load_file( 'parts/settings/header.php' );
$this->load_file( 'parts/settings/content.php' );
$this->load_file( 'parts/settings/footer.php' );

echo '</div>'; // div end
