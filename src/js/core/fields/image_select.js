import WPOnion_Field from '../class/field';

export default class extends WPOnion_Field {
	init_image( $element ) {
		let $parent = $element.parent().parent();
		if( $parent.hasClass( 'wponion-checkbox-radio-tooltip' ) ) {
			$parent.addClass( 'wponion-field-tooltip' );
			this.init_field( $parent, 'tooltip' );
		}
	}

	init() {
		let $this = this;
		this.element.find( 'img' ).each( function() {
			if( jQuery( this )[ 0 ].complete ) {
				$this.init_image( jQuery( this ) );
			} else {
				jQuery( this ).on( 'load', function() {
					$this.init_image( jQuery( this ) );
				} );
			}
		} );
	}
}
