import WPOnion_Field from '../core/field';
import $wponion from '../core/core';

class field extends WPOnion_Field {
	/**
	 * Inits Field.
	 */
	init() {
		this.image = '<img class="wponion-no-preview" src="' + this.option( 'nopreview' ) + '"/>';
		this.element.find( '.wponion-oembed-preview' ).before( '<span class="spinner wponion-spinner"></span>' );
		this.element.find( ':input' ).on( 'change', ( e ) => this.show_preview( e ) );
	}

	/**
	 * Handles OEmbed Preview.
	 */
	show_preview() {
		let $value = this.element.find( ':input' ).val();
		this.element.find( '.wponion-spinner' ).addClass( 'is-active' );
		let $preview = this.element.find( '.wponion-oembed-preview' );
		$wponion.ajax( 'oembed-preview', {
			method: 'POST',
			data: { value: $value }
		}, ( res ) => {
			if( false === res.success ) {
				$preview.html( this.image );
			} else {
				$preview.html( res.data );
			}
		}, () => $preview.html( this.image ), () => this.element.find( '.wponion-spinner' )
														.removeClass( 'is-active' ) );
	}
}

export default ( ( w ) => w.wponion_register_field( 'oembed', ( $elem ) => new field( $elem ) ) )( window );
