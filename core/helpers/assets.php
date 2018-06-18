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
	'wponion-plugins'           => array(
		wponion_debug_assets( 'assets/js/wponion-plugins', 'js' ),
		array( 'jquery' ),
	),
	'wponion-fields'            => array(
		wponion_debug_assets( 'assets/js/wponion-fields', 'js' ),
		array( 'wponion-plugins' ),
	),
	'wponion-core'              => array(
		wponion_debug_assets( 'assets/js/wponion-core', 'js' ),
		array( 'wponion-fields' ),
	),
	'wponion-customizer'        => array(
		wponion_debug_assets( 'assets/js/wponion-customizer', 'js' ),
		array( 'wponion-core' ),
	),
	'wponion-postmessags'       => array( 'assets/js/wponion-postmessage.js', array( 'wponion-customizer' ) ),
	'wponion-selectize-plugins' => array( 'assets/js/wponion-selectize-plugins.js' ),
	'wponion-cloner'            => array( wponion_debug_assets( 'assets/js/wponion-cloner', 'js' ), ),
	// WPOnion Related Plugins.
	'wponion-inputmask'         => array(
		'assets/plugins/inputmask/jquery.inputmask.bundle.min.js',
		array( 'jquery' ),
	),
	'select2'                   => array(
		'assets/plugins/select2/select2.full.min.js',
		array( 'jquery' ),
	),
	'selectize'                 => array(
		'assets/plugins/selectize/selectize.min.js',
		array( 'jquery' ),
	),
	'chosen'                    => array( 'assets/plugins/chosen/chosen.jquery.min.js', array( 'jquery' ) ),
	'wponion-colorpicker'       => array(
		'assets/plugins/wp-color-picker-alpha/wp-color-picker-alpha.min.js',
		array( 'wp-color-picker' ),
	),
);

$wponion_css = array(
	'flag-icon-css'       => array( 'assets/plugins/flag-icon-css/css/flag-icon.min.css' ),
	'chosen'              => array( 'assets/plugins/chosen/chosen.min.css' ),
	'select2'             => array( 'assets/plugins/select2/select2.min.css' ),
	'animate.css'         => array( 'assets/plugins/animate.css/animate.min.css' ),
	'wponion-plugins'     => array( wponion_debug_assets( 'assets/css/wponion-plugins', 'css' ) ),
	'fontawesome'         => array( 'assets/plugins/fontawesome/fontawesome.min.css', array(), '5.0.13', ),
	'typicons'            => array( 'assets/plugins/typicons/typicons.css', array( 'fontawesome' ) ),
	'wponion-core'        => array(
		wponion_debug_assets( 'assets/css/wponion-base', 'css' ),
		array( 'wponion-plugins', 'fontawesome', 'typicons' ),
	),
	'wponion-colorpicker' => array(
		'assets/plugins/wp-color-picker-alpha/cs-colorpicker.min.css',
		array( 'wp-color-picker' ),
	),
);

if ( ! function_exists( 'wponion_load_core_assets' ) ) {
	/**
	 * Loads More assets and also with core.
	 *
	 * @param array $extra
	 */
	function wponion_load_core_assets( $extra = array() ) {
		wponion_load_asset( 'wponion-core' );

		if ( is_array( $extra ) ) {
			foreach ( $extra as $slug ) {
				wponion_load_asset( $slug );
			}
		} else {
			wponion_load_asset( $extra );
		}

	}
}

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

if ( ! function_exists( 'wponion_icon' ) ) {
	/**
	 * Checks and returns icon html + load the required icon font.
	 *
	 * @param $icon
	 *
	 * @return string
	 */
	function wponion_icon( $icon ) {
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
	 * @return \WPOnion\JS\Localize_API
	 */
	function wponion_localize() {
		return wponion_registry( 'wponion-global-localize-api', '\WPOnion\JS\Localize_API' );
	}
}

if ( ! function_exists( 'wponion_icon_libraries' ) ) {
	/**
	 * Returns a list of Icon Libs.
	 *
	 * @return mixed
	 */
	function wponion_icon_libraries() {
		return apply_filters( 'wponion_icon_libraries', array(
			__( 'DashIcons' )   => WPONION_PATH . 'assets/json/dashicons.json',
			__( 'FontAwesome' ) => WPONION_PATH . 'assets/json/fontawesome_icons.json',
			__( 'TypIcons' )    => WPONION_PATH . 'assets/json/typicons_icons.json',
		) );
	}
}