/**
 * WPOnion Debug Class.
 */
export default class {
	/**
	 * Add A Debug Info To Debug Array.
	 * @param $key
	 * @param $value
	 */
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

	/**
	 * Gets A Debug Info Based on Key.
	 * @param $key
	 * @param $default
	 * @returns {boolean}
	 */
	static get( $key, $default = false ) {
		if( window.wponion._.isUndefined( this.debug_info ) ) {
			this.debug_info = {};
		}
		return ( window.wponion._.isUndefined( this.debug_info[ $key ] ) ) ? $default : this.debug_info[ $key ];
	}
}
