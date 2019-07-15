import WPOnion_Field from '../class/field';

export default class extends WPOnion_Field {
	/**
	 * Adds Rule To Each and every input to validate JS Lib.
	 * @param $args
	 * @param $elem
	 */
	maybe_js_validate_elem( $args, $elem ) {
		$elem.find( '[data-wponion-jsid]:input' ).each( function() {
			jQuery( this ).rules( 'add', $args );
		} );
	}

	/**
	 * Inits Field.
	 */
	init() {
		if( !window.wponion_is_library_exists( 'flatpickr' ) ) {
			return;
		}

		let $this     = this,
			$elem     = $this.element,
			$settings = this.option( 'settings' ),
			$dteID    = `div#${this.id()}datepicker`,
			$view;

		if( false === window.wponion._.isUndefined( $settings.theme ) ) {
			$view = $settings.theme;
			delete $settings.theme;
		} else {
			$view = 'default';
		}

		if( jQuery( $dteID ).length === 0 ) {
			jQuery( 'body' )
				.append( jQuery( '<div class="wponion-datepicker-' + $view + '" id="' + this.id() + 'datepicker"></div>' ) );
		}

		if( $elem.hasClass( 'wponion-datepicker-range' ) ) {
			$settings.appendTo = jQuery( $dteID )[ 0 ];
			if( $settings.plugins === undefined ) {
				$settings.plugins = [];
			}

			$settings.plugins.push( new window.rangePlugin( { input: $elem.find( 'input[data-wponion-datepicker-to-date]' )[ 0 ] } ) );
			$elem.find( 'input[data-wponion-datepicker-from-date]' )
				 .flatpickr( this.handle_args( $settings, 'date_picker' ) );
		} else {
			$settings.appendTo = jQuery( 'div#' + this.id() + 'datepicker' )[ 0 ];
			$elem.find( 'input' ).flatpickr( this.handle_args( $settings, 'date_picker' ) );
		}
	}
}
