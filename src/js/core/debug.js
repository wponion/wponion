/**
 * Simple Debug Class.
 */
export default class {
	static add( $key, $value ) {
		if( window.wponion._.isUndefined( this.debug_info ) ) {
			this.debug_info = {};
		}

		if( window.wponion._.isUndefined( this.debug_info[ $key ] ) ) {
			this.debug_info[ $key ] = $value;
		} else {
			this.debug_info[ $key ] = window.wponion._.merge( $value, this.debug_info[ $key ] );
		}
	}

	static get( $key, $default = false ) {
		if( window.wponion._.isUndefined( this.debug_info ) ) {
			this.debug_info = {};
		}

		return ( window.wponion._.isUndefined( this.debug_info[ $key ] ) ) ? $default : this.debug_info[ $key ];
	}
}
