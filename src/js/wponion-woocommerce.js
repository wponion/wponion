/**
 * @param window = Window Object
 * @param document = Document Object
 * @param $ = jQuery Object
 * @param wpo = $wponion object
 * @param wp = $wponion.theme object.
 */
( ( window, document, $, wpo, wp ) => {
	let wphooks = wp.hooks;

	/**
	 * Inits Customizer Instance.
	 */
	wphooks.addAction( 'wponion_init', ( () => {
	} ) );

	$( document ).on( 'ready', function () {
		$( '#woocommerce-product-data' ).on( 'woocommerce_variations_loaded', function () {
			wponion_field( '.wponion-framework.wponion-woocommerce-variation' ).reload();
		} );

		$( '#variable_product_options' ).on( 'woocommerce_variations_added', function () {
			wponion_field( '.wponion-framework.wponion-woocommerce-variation' ).reload();
		} )
	} )

} )( window, document, jQuery, $wponion, wp );