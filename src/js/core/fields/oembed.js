import WPOnion_Field from '../class/field';

export default class extends WPOnion_Field {
	/**
	 * Inits Field.
	 */
	init() {
		this.image = '<img class="wponion-no-preview" src="' + this.option( 'nopreview' ) + '"/>';
		this.element.find( '.wponion-oembed-preview' ).before( '<span class="spinner wponion-spinner"></span>' );
		this.element.find( ':input' ).on( 'blur', ( e ) => this.show_preview( e ) );
	}

	/**
	 * Handles OEmbed Preview.
	 */
	show_preview() {
		let $spinner = this.element.find( '.wponion-spinner' ),
			$preview = this.element.find( '.wponion-oembed-preview' );
		$spinner.addClass( 'is-active' );
		this.ajax( 'oembed-preview', {
			method: 'POST',
			data: { value: this.element.find( ':input' ).val() },
			success: ( res ) => $preview.html( res ),
			error: () => $preview.html( this.image ),
			always: () => $spinner.removeClass( 'is-active' ),
		} ).send();
	}
}
