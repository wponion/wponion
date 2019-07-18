import WPOnion_Field_Base from '../../class/field-base';

export default class extends WPOnion_Field_Base {
	/**
	 * Inits Field.
	 */
	field_base_init() {
		if( this.element.find( '.wponion-remove' ).length > 0 ) {
			this.element.each( function() {
				let $el = jQuery( this );
				$el.find( '.wponion-remove' ).tippy( { appendTo: () => jQuery( this )[ 0 ] } );
				$el.find( '.wponion-remove' ).on( 'click', () => $el.slideUp( 'slow', () => $el.remove() ) );
			} );
		}

		let $auto = this.element.attr( 'data-autoclose' );
		if( $auto ) {
			$auto     = parseInt( $auto );
			let $left = $auto / 1000;
			if( this.element.find( '.wpo-counter' ).length === 1 ) {
				let $runner = setInterval( () => {
					this.element.find( '.wpo-counter' ).html( $left );
					$left -= 1;
					if( $left < 0 ) {
						clearInterval( $runner );
						this.element.find( '.wpo-counter' ).html( '0' );
					}
				}, 900 );
			}
			setTimeout( () => this.element.slideUp( 'slow', () => this.element.remove() ), $auto );
		}
	}

	maybe_add_inited_class() {
	}
}
