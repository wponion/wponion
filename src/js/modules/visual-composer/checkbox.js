import WPOnion_VC_Field from './field';

class field extends WPOnion_VC_Field {
	/**
	 * Inits Field.
	 */
	init() {
		if( this.is_vc_param_elem() ) {
			if( this.element.hasClass( 'wponion-element-radio' ) && 0 === this.element.find( '.wponion-checkbox-radio-group' ).length ) {
				this.handle( 'array' );
				this.element.find( 'input' ).on( 'change', () => this.handle( 'array' ) );
			} else if( ( this.element.find( 'input' ).length > 1 || this.element.find( 'input' ).length > 0 ) && this.element.find( 'ul' ).length > 0 ) {
				let $type = 'array';
				if( this.element.find( 'ul' ).length === 1 ) {
					$type = 'array';
				} else if( this.element.find( 'ul' ).length > 1 ) {
					$type = 'key_value_multi_array';
				}
				this.handle( $type );
				this.element.find( 'input' ).on( 'change', () => this.handle( $type ) );
			} else {
				let $this = this;
				let $val  = this.element.find( 'input' ).attr( 'value' );
				this.element.find( 'input' ).attr( 'data-orgval', $val );
				this.element.find( 'input' ).on( 'change', function() {
					$this.handle_single_change( jQuery( this ) );
				} );
				this.element.find( 'input' ).each( function() {
					$this.handle_single_change( jQuery( this ) );
				} );
			}
		}
	}

	/**
	 * Handles Single Checkbox Change Events.
	 * @param $elem
	 */
	handle_single_change( $elem ) {
		if( $elem.is( ':checked' ) ) {
			$elem.val( $elem.attr( 'data-orgval' ) );
		} else {
			$elem.val( 'false' );
		}
	}

	/**
	 * Handles Multiple Checkboxes
	 * @param $type
	 */
	handle( $type ) {
		let $checked = this.element.find( 'input:checked' );
		let $save    = ( $type === 'key_value_multi_array' ) ? {} : [];
		if( $checked.length > 0 ) {
			jQuery.each( $checked, function() {
				if( $type === 'array' ) {
					$save.push( jQuery( this ).val() );
				} else if( $type === 'key_value_multi_array' ) {
					let $g = jQuery( this ).data( 'group' );
					if( $save[ $g ] === undefined ) {
						$save[ $g ] = [];
					}
					$save[ $g ].push( jQuery( this ).val() );
				}
			} );
			this.save( $save, $type );
		}
	}
}

export default ( ( w ) => {
	w.wponion_register_field( 'checkbox_radio', ( $elem ) => new field( $elem ), 'vc' );
} )( window );
