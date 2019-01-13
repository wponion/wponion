import WPOnion_VC_Field from './field';

class field extends WPOnion_VC_Field {
	/**
	 * Inits Field.
	 */
	init() {
		if( this.is_vc_param_elem() ) {
			this.input_change();
			this.element.on( 'change', () => this.input_change() );
			this.element.on( 'wponion-sorter-updated', () => this.input_change() );
		}
	}

	/**
	 * Function Hooks With :input change even and triggers save function.
	 */
	input_change() {
		this.save( this.input_data(), 'sorter_values' );
		this.element.find( ':input' ).on( 'change', () => {
			this.save( this.input_data(), 'sorter_values' );
		} );
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
	w.wponion_register_field( 'keyvalue_pair', ( $elem ) => new field( $elem ), 'vc' );
	w.wponion_register_field( 'background', ( $elem ) => new field( $elem ), 'vc' );
	w.wponion_register_field( 'wp_links', ( $elem ) => new field( $elem ), 'vc' );
	w.wponion_register_field( 'fieldset', ( $elem ) => new field( $elem ), 'vc' );
	w.wponion_register_field( 'accordion', ( $elem ) => new field( $elem ), 'vc' );
	w.wponion_register_field( 'group', ( $elem ) => new field( $elem ), 'vc' );
	w.wponion_register_field( 'tab', ( $elem ) => new field( $elem ), 'vc' );
	w.wponion_register_field( 'sorter', ( $elem ) => new field( $elem ), 'vc' );
	w.wponion_register_field( 'clone_element', ( $elem ) => new field( $elem ), 'vc' );
} )( window );

