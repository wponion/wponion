class WPOnion_Module_VC {
	constructor( $element ) {
		this.element = $element;
		window.wponion_field( this.element ).reload();
		window.wponion_vc_field( this.element ).reload();
	}
}

export default ( ( window ) => {
	jQuery( window ).on( 'load', () => {
		window.wponion.vc = {
			fields: {
				abstract: require( './visual-composer/field' ).default,
				checkbox: require( './visual-composer/checkbox-radio' ).default,
				select: require( './visual-composer/select' ).default,
				background: require( './visual-composer/background' ).default,
				key_value: require( './visual-composer/keyvalue_pair' ).default,
				image: require( './visual-composer/image' ).default,
			},
		};

		/**
		 * Simple Function To Init WPonion VC Module.
		 */
		window.wponion_vc_init = () => {
			let $element = jQuery( '.wponion-framework.wponion-module-vc' );

			if( $element.length > 0 ) {
				$element.each( function() {
					new WPOnion_Module_VC( jQuery( this ) );
				} );
			}
		};

		/**
		 * WPonion VC Field Class Insstance Creator.
		 * @param $elem
		 * @param $contxt
		 * @returns {window.wponion.vc.fields.abstract}
		 */
		window.wponion_vc_field = ( $elem, $contxt = {} ) => new window.wponion.vc.fields.abstract( $elem, $contxt );
	} );
} )( window );
