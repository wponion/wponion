import { array_merge, is_undefined } from 'vsp-js-helper/index';

export default class {
	static add( $key, $value ) {
		if( is_undefined( this.debug_info ) ) {
			this.debug_info = {};
		}

		if( is_undefined( this.debug_info[ $key ] ) ) {
			this.debug_info[ $key ] = $value;
		} else {
			this.debug_info[ $key ] = array_merge( $value, this.debug_info[ $key ] );
		}
	}

	static get( $key, $default = false ) {
		if( is_undefined( this.debug_info ) ) {
			this.debug_info = {};
		}

		return ( is_undefined( this.debug_info[ $key ] ) ) ? $default : this.debug_info[ $key ];
	}
}
