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
defined( 'WPONION_VERSION' ) or define( 'WPONION_VERSION', '0.0.2' );
defined( 'WPONION_NAME' ) or define( 'WPONION_NAME', __( 'WPOnion' ) );
defined( 'WPONION_FILE' ) or define( 'WPONION_FILE', __FILE__ );
defined( 'WPONION_PATH' ) or define( 'WPONION_PATH', plugin_dir_path( __FILE__ ) );
defined( 'WPONION_URL' ) or define( 'WPONION_URL', plugin_dir_url( __FILE__ ) );
defined( 'WPONION_DB_VERSION' ) or define( 'WPONION_DB_VERSION', '25072018.0936' );

if ( ! function_exists( 'wponion_init' ) ) {
	/**
	 * Setup's Basic WPOnion.
	 */
	function wponion_init() {
		/**
		 * Include All Functions Files.
		 */
		require_once WPONION_PATH . 'core/helpers/base.php';

		require_once WPONION_PATH . 'core/registry/class-common.php';
		require_once WPONION_PATH . 'core/registry/class-core.php';
		require_once WPONION_PATH . 'core/registry/class-modules.php';
		require_once WPONION_PATH . 'core/registry/class-fields.php';
		require_once WPONION_PATH . 'core/registry/class-field-error.php';

		require_once WPONION_PATH . 'core/class-autoloader.php';
		require_once WPONION_PATH . 'core/class-core-ajax.php';
		//require_once WPONION_PATH . 'core/class-async-request.php';
		require_once WPONION_PATH . 'core/class-assets.php';
		require_once WPONION_PATH . 'core/class-icons.php';
		do_action( 'wponion_loaded' );
	}

	add_action( 'after_setup_theme', 'wponion_init' );
}


if ( file_exists( WPONION_PATH . '/i18n/' . get_locale() . '.mo' ) ) {
	load_textdomain( 'wponion', WPONION_PATH . '/i18n/' . get_locale() . '.mo' );
}
