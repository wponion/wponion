import WPOnion_Field from '../class/field';

export default class extends WPOnion_Field {
	/**
	 * Returns Websafe Font Data.
	 * @returns {*}
	 */
	get websafe() {
		return window.wpo_core.windowArgs( 'wponion_websafe_fonts' );
	}

	/**
	 * Returns Google Font Data.
	 * @returns {*}
	 */
	get google_fonts() {
		return window.wpo_core.windowArgs( 'wponion_gfonts' );
	}

	/**
	 * Creats HTML Option Tag Using Array.
	 * @param data
	 * @returns {string}
	 */
	build_options( data ) {
		let $return = '';
		for( let $_d in data ) {
			if( false === window.wponion._.isUndefined( data[ $_d ] ) ) {
				$return += `<option value="${$_d}">${data[ $_d ]}</option>`;
			}
		}
		return $return;
	}

	/**
	 * Inits Field.
	 */
	init() {
		this.element.find( 'select.wponion-font-selector' ).on( 'change', ( e ) => {
			let $val  = jQuery( e.currentTarget ).val(),
				$html = null;
			console.log( $val );

			if( false === window.wponion._.isUndefined( this.websafe.fonts [ $val ] ) ) {
				$html = this.build_options( this.websafe.variants );
			} else if( false === window.wponion._.isUndefined( this.google_fonts[ $val ] ) ) {
				$html = this.build_options( this.google_fonts[ $val ] );
			}
			let $variant = this.element.find( 'select.wponion-variant-selector' ).html( $html );

			if( $variant.hasClass( 'chosen' ) ) {
				$variant.trigger( 'chosen:updated' );
			} else if( $variant.hasClass( 'select2' ) ) {
				$variant.trigger( 'change' );
			}
		} );
	}
}
