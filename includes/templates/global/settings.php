<?php
defined( 'ABSPATH' ) || exit;

/**
 * @var $this \WPOnion\Theme\WP_Lite|\WPOnion\Theme\WP
 */
$module = $this->module_instance();

echo '<div ' . $module->wrap_attributes() . '>';
include wponion()->tpl( 'global/parts/settings/header.php' );
include wponion()->tpl( 'global/parts/settings/content.php' );
include wponion()->tpl( 'global/parts/settings/footer.php' );
echo '</div>'; // div end
