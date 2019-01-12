import WPOnion_VC_Field from './field';

class field extends WPOnion_VC_Field {
	init() {
		if( this.is_vc_param_elem() ) {
			if( ( this.element.find( 'input' ).length > 1 || this.element.find( 'input' ).length > 0 ) && this.element.find( 'ul' ).length > 0 ) {
				let $type = 'array';
				if( this.element.find( 'ul' ).length === 1 ) {
					$type = 'array';
				} else if( this.element.find( 'ul' ).length > 1 ) {
					$type = 'key_value_multi_array';
				}
				this.element.find( 'input' ).on( 'change', () => this.handle( $type ) );

				this.handle( $type );
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

	handle_single_change( $elem ) {
		if( $elem.is( ':checked' ) ) {
			$elem.val( $elem.attr( 'data-orgval' ) );
		} else {
			$elem.val( 'false' );
		}
	}

	handle( $type ) {
		let $checked = this.element.find( 'input:checked' );
		let $save    = [];
		if( $type === 'key_value_multi_array' ) {
			$save = {};
		}
		jQuery.each( $checked, function() {
			if( $type === 'array' ) {
				$save.push( jQuery( this ).val() );
			} else if( $type === 'key_value_multi_array' ) {
				var $g = jQuery( this ).data( 'group' );
				if( $save[ $g ] === undefined ) {
					$save[ $g ] = [];
				}
				$save[ $g ].push( jQuery( this ).val() );
			}
		} );
		this.save( $save, $type );
	}
}

export default ( ( w ) => w.wponion_register_field( 'checkbox_radio', ( $elem ) => new field( $elem ), 'vc' ) )( window );
