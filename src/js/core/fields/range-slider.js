import WPOnion_Field from '../class/field';

export default class extends WPOnion_Field {
	init() {
		let $input   = this.element.find( 'input[type=text]' );
		let $options = this.handle_args( this.parse_args( this.option( 'slider' ), {
			range: 'min',
			value: 0,
			max: 1000,
			min: 1,
			step: 1,
		} ), 'jQuery Slider' );

		$options.slide = ( event, ui ) => $input.val( ui.value ).trigger( 'change' );

		let $slider = this.element.find( '.wponion-range-slider' ).slider( $options );

		$input.keyup( function() {
			$slider.slider( 'value', $input.val() );
		} );
	}
}
