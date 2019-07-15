export default function() {
	// Triggers When Variation is loaded
	jQuery( '#woocommerce-product-data' ).on( 'woocommerce_variations_loaded', function() {
	} );

	// Triggers When A Variation is updated
	jQuery( '#variable_product_options' ).on( 'woocommerce_variations_added', function() {
	} );

	// Triggers When A Widget is updated
	jQuery( document ).on( 'widget-added widget-updated', function( event, $widget ) {
	} );

	// Triggers When New Menu Item Added.
	jQuery( document ).on( 'menu-item-added', function( event, $menu ) {
	} );
}
