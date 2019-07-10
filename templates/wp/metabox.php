<?php
if ( ! defined( 'ABSPATH' ) ) {
	die;
}

/* @var $this \WPOnion\Theme\WP */
$metabox = $this->metabox();
echo '<div class="' . $metabox->wrap_class() . '">';
echo '<div class="wponion-metabox-inside-wrap">';
echo '<div class="content-outer-wrap">';
$this->load_file( 'parts/metabox/header.php' );
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
