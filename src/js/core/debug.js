/**
 * Simple Debug Class.
 */
export default class {
	static add( $key, $value ) {
		if( window.wpo._.isUndefined( this.debug_info ) ) {
			this.debug_info = {};
		}

		if( window.wpo._.isUndefined( this.debug_info[ $key ] ) ) {
			this.debug_info[ $key ] = $value;
		} else {
			this.debug_info[ $key ] = window.wpo._.merge( $value, this.debug_info[ $key ] );
		}
	}

	static get( $key, $default = false ) {
		if( window.wpo._.isUndefined( this.debug_info ) ) {
			this.debug_info = {};
		}

		return ( window.wpo._.isUndefined( this.debug_info[ $key ] ) ) ? $default : this.debug_info[ $key ];
	}
}
