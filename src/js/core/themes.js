import WP_WC_WP_Lite_Theme from './themes/wp-wc-wp-lite';
import WP_Modern from './themes/wp-modern';

/**
 * Triggers Theme Inits. For All Themes.
 */
export function wponion_theme_init() {
	let $wpof_div = jQuery( '.wponion-framework' );
	if( $wpof_div.length > 0 ) {
		$wpof_div.each( ( i, e ) => window.wponion_init_theme( jQuery( e ) ) );
	}
}

/**
 * Inits WP / WC / WP_Lite Theme
 * @param $element
 * @param $module
 * @param $unique
 * @param $theme
 * @return {WP_WC_WP_Lite}
 */
export function wponion_wp_wc_wp_lite_init_theme( $element, $module, $unique, $theme ) {
	return new WP_WC_WP_Lite_Theme( $element, $module, $unique, $theme );
}

/**
 * Inits Modern Theme
 * @param $element
 * @param $module
 * @param $unique
 * @param $theme
 * @return {WP_Modern}
 */
export function wponion_wp_modern_init_theme( $element, $module, $unique, $theme ) {
	return new WP_Modern( $element, $module, $unique, $theme );
}

/**
 * Below Function Registers All Prepacked Themes.
 */
export function wponion_register_themes() {
	window.wponion_register_theme( 'wp', wponion_wp_wc_wp_lite_init_theme );
	window.wponion_register_theme( 'wc', wponion_wp_wc_wp_lite_init_theme );
	window.wponion_register_theme( 'wp_lite', wponion_wp_wc_wp_lite_init_theme );
	window.wponion_register_theme( 'wp_modern', wponion_wp_modern_init_theme );
}
