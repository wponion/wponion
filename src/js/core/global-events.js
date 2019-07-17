export default function() {
	// Triggers When Variation is loaded
	jQuery( '#woocommerce-product-data' ).on( 'woocommerce_variations_loaded', function() {
		jQuery( 'body' ).find( '.wponion-framework.wponion-woocommerce-variation' ).each( function() {
			window.wponion_field_reload_all( jQuery( this ) );
			window.wponion_dependency( jQuery( this ) );
		} );
	} );

	// Triggers When A Variation is updated
	jQuery( '#variable_product_options' ).on( 'woocommerce_variations_added', function() {
		jQuery( 'body' ).find( '.wponion-framework.wponion-woocommerce-variation' ).each( function() {
			window.wponion_field_reload_all( jQuery( this ) );
			window.wponion_dependency( jQuery( this ) );
		} );
	} );

	// Triggers When A Widget is updated
	jQuery( document ).on( 'widget-added widget-updated', function( event, $widget ) {
		window.wponion_field_reload_all( $widget );
		window.wponion_dependency( $widget );
	} );

	// Triggers When New Menu Item Added.
	jQuery( document ).on( 'menu-item-added', function( event, $menu ) {
		window.wponion_field_reload_all( $menu );
		window.wponion_dependency( $menu );
	} );
}
