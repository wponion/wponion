<?php
/**
 * @var $this \WPOnion\Theme\WP_Modern
 */
$module = $this->settings();

echo '<div class="' . $module->wrap_class() . '">';

$this->load_file( 'parts/settings/header.php' );
$this->load_file( 'parts/settings/content.php' );
$this->load_file( 'parts/settings/footer.php' );

echo '</div>'; // div end
