<?php
/**
 *
 * Initial version created 12-05-2018 / 10:25 AM
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @package
 * @link
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

global $wponion_js, $wponion_css;

$wponion_js = array(
	'wponion-plugins'   => array( 'assets/js/wponion-plugins', array( 'jquery' ) ),
	'wponion-fields'    => array( 'assets/js/wponion-fields', array( 'wponion-plugins' ) ),
	'wponion-core'      => array( 'assets/js/wponion-core', array( 'wponion-fields' ) ),
	// WPOnion Related Plugins.
	'wponion-inputmask' => array( 'assets/js/plugins/wponion-inputmask', array( 'jquery', 'wponion-plugins' ) ),
);

$wponion_css = array(
	'wponion-core' => array( 'assets/css/wponion-base' ),
);

if ( ! function_exists( 'wponion_load_asset' ) ) {
	/**
	 * load Framework Assets.
	 *
	 * @param string $key
	 */
	function wponion_load_asset( $key = '' ) {
		global $wponion_css, $wponion_js;
		if ( isset( $wponion_css[ $key ] ) ) {
			wp_enqueue_style( $key );
		}

		if ( isset( $wponion_js[ $key ] ) ) {
			wp_enqueue_script( $key );
		}
	}
}