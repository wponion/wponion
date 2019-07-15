import WPOnion_Field from '../class/field';

export default class extends WPOnion_Field {
	/**
	 * Inits Field.
	 */
	init() {
		if( this.element.find( '.wponion-custom-value-input' ).length > 0 ) {
			let $custom_input = this.element.find( '.wponion-custom-value-input' ),
				$radios       = this.element.find( 'input[type=radio]' ),
				$checkbox     = this.element.find( 'input[type=checkbox]' );

			$custom_input.moveAttr( 'name', 'data-name' );

			$radios.each( ( i, e ) => {
				let $target = jQuery( e );
				if( $target.is( ':checked' ) ) {
					if( $target.parent().find( '.wponion-custom-value-input' ).length > 0 ) {
						$custom_input.moveAttr( 'name', 'data-name' );
						$target.parent().find( '.wponion-custom-value-input' ).moveAttr( 'data-name', 'name' );
					}
				}
			} );

			$radios.on( 'click', ( e ) => {
				let $target = jQuery( e.currentTarget );
				$custom_input.moveAttr( 'name', 'data-name' );
				if( $target.parent().find( '.wponion-custom-value-input' ).length > 0 ) {
					$target.parent().find( '.wponion-custom-value-input' ).moveAttr( 'data-name', 'name' );
				}
			} );

			$checkbox.each( ( i, e ) => {
				let $target = jQuery( e );
				if( $target.parent().find( '.wponion-custom-value-input' ).length > 0 ) {
					if( $target.is( ':checked' ) ) {
						$target.moveAttr( 'name', 'data-name' );
						$target.parent().find( '.wponion-custom-value-input' ).moveAttr( 'data-name', 'name' );
					} else {
						$target.moveAttr( 'name', 'data-name' );
						$target.parent().find( '.wponion-custom-value-input' ).moveAttr( 'name', 'data-name' );
					}
				}
			} );

			$checkbox.on( 'click', ( e ) => {
				let $target = jQuery( e.currentTarget );
				if( $target.parent().find( '.wponion-custom-value-input' ).length > 0 ) {
					if( $target.is( ':checked' ) ) {
						$target.moveAttr( 'name', 'data-name' );
						$target.parent().find( '.wponion-custom-value-input' ).moveAttr( 'data-name', 'name' );
					} else {
						$target.parent().find( '.wponion-custom-value-input' ).moveAttr( 'name', 'data-name' );
					}
				}
			} );
		}
	}
}
