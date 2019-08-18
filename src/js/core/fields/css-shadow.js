import WPOnion_Field from '../class/field';

export default class extends WPOnion_Field {
	/**
	 * Inits Field.
	 */
	init() {
		if( this.element.find( 'div.css-shadow-preview ' ).length > 0 ) {
			this.element.find( ':input' ).on( 'change', () => this.generate_css() );
			this.element.find( ':input' ).on( 'keyup', () => this.generate_css() );
		}
	}

	generate_css() {
		let $h      = this.element.find( 'input[data-css-id=h-shadow]' ).val(),
			$v      = this.element.find( 'input[data-css-id=v-shadow]' ).val(),
			$b      = this.element.find( 'input[data-css-id=blur]' ).val(),
			$spread = this.element.find( 'input[data-css-id=spread]' ).val(),
			$c      = this.element.find( 'input[data-css-id=color]' ).val(),
			$inset  = this.element.find( 'input[data-css-id=inset]' ).prop( 'checked' );

		$h      = ( window.wponion._.isEmpty( $h ) ) ? '0' : $h;
		$v      = ( window.wponion._.isEmpty( $v ) ) ? '0' : $v;
		$spread = ( window.wponion._.isEmpty( $spread ) ) ? '0' : $spread;
		$b      = ( window.wponion._.isEmpty( $b ) ) ? '0' : $b;
		$inset  = ( true === $inset ) ? 'inset' : '';

		if( 'text' === this.option( 'shadow_type' ) ) {
			this.element.find( 'div.css-shadow-preview > p' )
				.css( 'text-shadow', $h + 'px ' + $v + 'px ' + $b + 'px ' + $c );
		} else {
			this.element.find( 'div.css-shadow-preview > p' )
				.css( 'box-shadow', $h + 'px ' + $v + 'px ' + $b + 'px ' + $spread + 'px ' + $c + ' ' + $inset );
		}
	}
}
