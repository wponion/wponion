import WP_WC_WP_Lite_Theme from './themes/wp-wc-wp-lite';
import WP_Modern from './themes/wp-modern';

/**
 * Below Function Registers All Prepacked Themes.
 */
export function wponion_register_themes() {
	/**
	 * Inits WP / WC / WP_Lite Theme
	 * @param $element
	 * @param $module
	 * @param $unique
	 * @param $theme
	 * @return {WP_WC_WP_Lite}
	 */
	let wp_wc_wp_lite_theme = function( $element, $module, $unique, $theme ) {
		return new WP_WC_WP_Lite_Theme( $element, $module, $unique, $theme );
	};

	/**
	 * Inits Modern Theme
	 * @param $element
	 * @param $module
	 * @param $unique
	 * @param $theme
	 * @return {WP_Modern}
	 */
	let wp_modern_theme = function( $element, $module, $unique, $theme ) {
		return new WP_Modern( $element, $module, $unique, $theme );
	};

	window.wponion_register_theme( 'wp', wp_wc_wp_lite_theme );
	window.wponion_register_theme( 'wc', wp_wc_wp_lite_theme );
	window.wponion_register_theme( 'wp_lite', wp_wc_wp_lite_theme );
	window.wponion_register_theme( 'wp_modern', wp_modern_theme );
}
