import WPOnion_VC_Field from './field';

class field extends WPOnion_VC_Field {
	/**
	 * Inits Field.
	 */
	init() {
		if( this.is_vc_param_elem() ) {
			let $inputs = this.element.find( ':input' );
			this.save( this.input_data(), 'key_value_array' );
			$inputs.on( 'change', () => {
				this.save( this.input_data(), 'key_value_array' );
			} );
		}
	}

	/**
	 * Converts Input Values Into JS/PHP Object/Array and returns it.
	 * @returns {*}
	 */
	input_data() {
		let $data = this.element.find( ':input:not(.wpb_vc_param_value)' ).serializeObject();
		if( false === window.wponion._.isUndefined( $data[ this.param_name ] ) ) {
			return $data[ this.param_name ];
		}
		return $data;
	}

}

export default ( ( w ) => {
	w.wponion_register_field( 'background', ( $elem ) => new field( $elem ), 'vc' );
	w.wponion_register_field( 'typography', ( $elem ) => new field( $elem ), 'vc' );
	w.wponion_register_field( 'image_size', ( $elem ) => new field( $elem ), 'vc' );
} )( window );
