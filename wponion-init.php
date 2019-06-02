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
defined( 'WPONION_VERSION' ) or define( 'WPONION_VERSION', '1.0' );
defined( 'WPONION_NAME' ) or define( 'WPONION_NAME', 'WPOnion' );
defined( 'WPONION_FILE' ) or define( 'WPONION_FILE', plugin_dir_path( __FILE__ ) . 'index.php' );
defined( 'WPONION_PATH' ) or define( 'WPONION_PATH', plugin_dir_path( __FILE__ ) );
defined( 'WPONION_URL' ) or define( 'WPONION_URL', plugin_dir_url( __FILE__ ) );

if ( ! function_exists( 'wponion' ) ) {
	/**
	 * Returns An WPOnion Instance.
	 *
	 * @return bool|\WPOnion
	 */
	function wponion() {
		if ( ! class_exists( '\WPOnion' ) ) {
			require_once WPONION_PATH . 'core/class-wponion.php';
		}
		return WPOnion::instance();
	}

	wponion();
}

if ( ! function_exists( 'wponion_setup' ) ) {
	/**
	 * Setup's Basic WPOnion.
	 */
	function wponion_setup() {
		require_once wponion()->path( 'core/class-addons.php' );
		require_once wponion()->path( 'core/class-setup.php' );
	}

	add_action( 'after_setup_theme', 'wponion_setup' );
}
