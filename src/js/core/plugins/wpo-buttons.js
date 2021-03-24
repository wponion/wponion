export default class WPOButton {
	constructor( element, options ) {
		this.DEFAULTS  = {
			loadingText: window.wpo_core.txt( 'processing', 'Loading ...' ),
			spinner: 'spinner is-active',
		};
		this.$element  = jQuery( element );
		this.options   = jQuery.extend( {}, this.DEFAULTS, options );
		this.isLoading = false;
	}

	setState( state ) {
		let d    = 'disabled',
			$el  = this.$element,
			val  = $el.is( 'input' ) ? 'val' : 'html',
			data = $el.data();

		state += 'Text';

		if( data.resetText == null ) {
			$el.data( 'resetText', $el[ val ]() );
		}

		setTimeout( jQuery.proxy( function() {
			let $state = ( false !== window.wponion._.isUndefined( $el.data( state ) ) ) ? this.options[ state ] : $el.data( state );

			if( 'html' === val && 'loadingText' === state ) {
				$state += ' ' + '<span class="' + this.options.spinner + ' wpo-spinner"></span>';
			}

			$el[ val ]( $state );

			if( 'loadingText' === state ) {
				this.isLoading = true;
				$el.addClass( d ).prop( d, true );
			} else if( this.isLoading ) {
				this.isLoading = false;
				$el.removeClass( d ).prop( d, false );
			}

			if( 'val' === val ) {
				if( true === this.isLoading ) {
					$el.parent().append( jQuery( '<span class="' + this.options.spinner + ' wpo-spinner"></span>' ) );
				} else {
					$el.parent().find( '.wpo-spinner' ).remove();
				}
			}

		}, this ), 0 );
	}
}
