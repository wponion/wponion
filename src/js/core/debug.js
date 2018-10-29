import $wpoh from 'vsp-js-helper/index';

export default class {
	static add( $key, $value ) {
		if( $wpoh.is_undefined( this.debug_info ) ) {
			this.debug_info = {};
		}

		if( $wpoh.is_undefined( this.debug_info[ $key ] ) ) {
			this.debug_info[ $key ] = $value;
		} else {
			this.debug_info[ $key ] = $wpoh.array_merge( $wpoh[ $key ], $value );
		}
	}

	static get( $key, $default = false ) {
		if( $wpoh.is_undefined( this.debug_info ) ) {
			this.debug_info = {};
		}

		return ( $wpoh.is_undefined( this.debug_info[ $key ] ) ) ? $default : this.debug_info[ $key ];
	}
}
