
class WPOnion_Visual_Composer {
	constructor( $element ) {
		this.element = $element;
	}
}

export default ( ( window ) => {
	window.wponion_visual_composer_init = () => {
		let $element = jQuery( '.wponion-framework.wponion-module-visual_composer' );

		if( $element.length > 0 ) {
			$element.each( function() {
				new WPOnion_Visual_Composer( jQuery( this ) );
			} );
		}
	};
} )( window );
