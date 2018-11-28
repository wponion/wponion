+function( $ ) {
	'use strict';

	var Button = function( element, options ) {
		this.$element  = $( element );
		this.options   = $.extend( {}, Button.DEFAULTS, options );
		this.isLoading = false;
	};

	Button.DEFAULTS = {
		loadingText: 'loading...'
	};

	Button.prototype.setState = function( state ) {
		var d    = 'disabled';
		var $el  = this.$element;
		var val  = $el.is( 'input' ) ? 'val' : 'html';
		var data = $el.data();

		state += 'Text';

		if( data.resetText == null ) {
			$el.data( 'resetText', $el[ val ]() );
		}

		// push to event loop to allow forms to submit
		setTimeout( $.proxy( function() {
			if( data[ state ] === null && typeof this.options[ state ] !== 'undefined' && this.options[ state ] !== '' ) {
				$el[ val ]( this.options[ state ] );
			} else if( data[ state ] !== null && typeof data[ state ] !== 'undefined' && data[ state ] !== '' ) {
				$el[ val ]( data[ state ] );
			} else {
				$el.wpo_button( 'reset' );
			}

			if( state === 'loadingText' ) {
				this.isLoading = true;
				$el.addClass( d ).attr( d, d ).prop( d, true );
			} else if( this.isLoading ) {
				this.isLoading = false;
				$el.removeClass( d ).removeAttr( d ).prop( d, false );
			}
		}, this ), 0 );
	};

	function Plugin( option ) {
		return this.each( function() {
			var $this   = $( this );
			var data    = $this.data( 'bs.button' );
			var options = ( typeof option === 'object' && option ) ? option : false;

			if( !data ) {
				$this.data( 'bs.button', ( data = new Button( this, options ) ) );
			}
			data.setState( option );
		} );
	}

	var old                     = $.fn.wpo_button;
	$.fn.wpo_button             = Plugin;
	$.fn.wpo_button.Constructor = Button;
	$.fn.wpo_button.noConflict  = function() {
		$.fn.wpo_button = old;
		return this;
	};
}( jQuery );
