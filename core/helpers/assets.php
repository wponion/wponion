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
	'fontawesome'     => array( 'assets/vendors/fontawesome/fontawesome', array(), '5.0.13' ),
	'wponion-plugins' => array( 'assets/css/wponion-plugins' ),
	'wponion-core'    => array( 'assets/css/wponion-base', array( 'wponion-plugins' ) ),
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

if ( ! function_exists( 'wponion_load_icon' ) ) {
	/**
	 * Checks and load icon font based on the font class.
	 *
	 * @param $str
	 */
	function wponion_load_icon( $str ) {
		if ( true === wponion_is_fontawesome( $str ) ) {
			wponion_load_asset( 'fontawesome' );
		}
	}
}

if ( ! function_exists( 'wponion_is_fontawesome' ) ) {
	/**
	 * Checks if given string is a fontawesome class.
	 *
	 * @param $str
	 *
	 * @return bool
	 */
	function wponion_is_fontawesome( $str ) {
		#return ( false !== strpos( $str, 'fab ' ) || false !== strpos( $str, 'far ' ) || false !== strpos( $str, 'fas ' ) || false !== strpos( $str, 'fa ' ) );
		return ( false !== strpos( $str, ' fa-' ) );
	}
}

if ( ! function_exists( 'wponion_icon' ) ) {
	/**
	 * Checks and returns icon html + load the required icon font.
	 *
	 * @param $icon
	 *
	 * @return string
	 */
	function wponion_icon( $icon ) {
		wponion_load_icon( $icon );
		if ( $icon ) {
			return '<i class="' . $icon . ' wponion-icon"></i>';
		}
		return '';
	}
}

if ( ! function_exists( 'wponion_localize' ) ) {
	/**
	 * Returns an active instance of WPOnion_Localize_API.
	 *
	 * @return \WPOnion_Localize_API
	 */
	function wponion_localize() {
		return wponion_registry( 'wponion-global-localize-api', 'WPOnion_Localize_API' );
	}
}