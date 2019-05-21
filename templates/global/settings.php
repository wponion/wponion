<?php
/**
 * @var $this \WPOnion\Theme\WP_Lite|\WPOnion\Theme\WP
 */
$module = $this->settings();

echo '<div class="' . $module->wrap_class() . '">';
include WPONION_PATH . 'templates/global/parts/settings/header.php';
include WPONION_PATH . 'templates/global/parts/settings/content.php';
include WPONION_PATH . 'templates/global/parts/settings/footer.php';
echo '</div>'; // div end
