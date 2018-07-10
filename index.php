<?php
/**
 * Plugin Name: WPOnion
 * Plugin URI: https://github.com/wponion/
 * Description: Powerfull,Reliable & Lightweight Options Framework.
 * Version: 0.0.1
 * Author: varunsridharan
 * Author URI: https://varunsridharan.in
 * Text Domain: wponion
 * Domain Path: /i18n/
 *
 * Initial version created 05-05-2018 / 03:37 PM
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @package wponion
 * @link http://github.com/wponion/
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

add_action( 'wponion_loaded', 'wponion_load_sample_files' );

if ( ! function_exists( 'wponion_load_sample_files' ) ) {
	function wponion_load_sample_files() {
		include plugin_dir_path( __FILE__ ) . 'sample/settings.php';
		include plugin_dir_path( __FILE__ ) . 'sample/dashboard-widgets.php';
	}
}

require_once 'wponion.php';
