import WPOnion_Field from '../core/field';

class field extends WPOnion_Field {
	init() {
		let $this     = this,
			$elem     = $this.element,
			$settings = this.handle_args( this.option( 'settings' ) ),
			$view;

		if( false === window.wponion._.isUndefined( $settings.theme ) ) {
			$view = $settings.theme;
			delete $settings.theme;
		} else {
			$view = 'default';
		}

		if( jQuery( 'div#' + this.id() ).length === 0 ) {
			jQuery( 'body' )
				.append( jQuery( '<div class="wponion-datepicker-' + $view + '" id="' + this.id() + '"></div>' ) );
		}

		if( $elem.hasClass( 'wponion-datepicker-range' ) ) {
			$settings.appendTo = jQuery( 'div#' + this.id() )[ 0 ];
			if( $settings.plugins === undefined ) {
				$settings.plugins = [];
			}

			$settings.plugins.push( new rangePlugin( { input: $elem.find( 'input[data-wponion-datepicker-to-date]' )[ 0 ] } ) );
			$elem.find( 'input[data-wponion-datepicker-from-date]' ).flatpickr( $settings );
		} else {
			$settings.appendTo = jQuery( 'div#' + this.id() )[ 0 ];
			$elem.find( 'input' ).flatpickr( $settings );
		}
	}
}

export default ( ( w ) => w.wponion_render_field( 'date_picker', ( $elem ) => new field( $elem ) ) )( window );
