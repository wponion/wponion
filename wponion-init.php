<?php
/**
 * @version: 2.0
 * @package: wponion
 * @copyright: 2018 Varun Sridharan
 * @author: Varun Sridharan <varunsridharan23@gmail.com>
 * @link: http://github.com/wponion
 * @license: GPL V3 OR Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 * Initial version created 05-05-2018 / 03:38 PM
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
defined( 'WPONION_VERSION' ) or define( 'WPONION_VERSION', '0.0.9.4' );
defined( 'WPONION_NAME' ) or define( 'WPONION_NAME', __( 'WPOnion', 'wponion' ) );
defined( 'WPONION_FILE' ) or define( 'WPONION_FILE', __FILE__ );
defined( 'WPONION_PATH' ) or define( 'WPONION_PATH', plugin_dir_path( __FILE__ ) );
defined( 'WPONION_URL' ) or define( 'WPONION_URL', plugin_dir_url( __FILE__ ) );
defined( 'WPONION_DB_VERSION' ) or define( 'WPONION_DB_VERSION', '010420190518' );

if ( ! function_exists( 'wponion_setup' ) ) {
	/**
	 * Setup's Basic WPOnion.
	 */
	function wponion_setup() {
		if ( false === is_admin() && false === defined( 'DOING_AJAX' ) && false === ( defined( 'WPONION_FRONTEND' ) && true == WPONION_FRONTEND ) ) {
			return;
		}
		require_once WPONION_PATH . 'core/class-setup.php';
	}


	add_action( 'after_setup_theme', 'wponion_setup' );
}
