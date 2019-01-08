( ( window, document, $ ) => {

	$( document ).on( 'ready', function() {
		$( '#woocommerce-product-data' ).on( 'woocommerce_variations_loaded', function() {
			window.wponion_field( '.wponion-framework.wponion-woocommerce-variation' ).reload();
		} );

		$( '#variable_product_options' ).on( 'woocommerce_variations_added', function() {
			window.wponion_field( '.wponion-framework.wponion-woocommerce-variation' ).reload();
		} );
	} );

} )( window, document, jQuery );
