<?php
/**
 * @var $this \WPOnion\Theme\WP_Lite|\WPOnion\Theme\WP
 */
$module = $this->settings();

echo '<div class="' . $module->wrap_class() . '">';
include wponion()->tpl( 'global/parts/settings/header.php' );
include wponion()->tpl( 'global/parts/settings/content.php' );
include wponion()->tpl( 'global/parts/settings/footer.php' );
echo '</div>'; // div end
