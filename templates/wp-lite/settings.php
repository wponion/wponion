<?php
/**
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @link
 * @copyright 2019 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

/**
 * @var $this \WPOnion\Theme\WP_Modern
 */
$module = $this->settings();

echo '<div class="' . $module->wrap_class() . '">';

$this->load_file( 'parts/settings/header.php' );
$this->load_file( 'parts/settings/content.php' );
$this->load_file( 'parts/settings/footer.php' );

echo '</div>'; // div end
