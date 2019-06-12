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
		if( window.wponion._.isUndefined( this.data ) ) {
			this.data = {};
		}
		this.data[ $key ] = ( window.wponion._.isUndefined( this.data[ $key ] ) ) ? $value : window.wponion._.merge( $value, this.data[ $key ] );
	}

	/**
	 * Gets A Debug Info Based on Key.
	 * @param $key
	 * @param $default
	 * @returns {boolean}
	 */
	static get( $key, $default = false ) {
		if( window.wponion._.isUndefined( this.data ) ) {
			this.data = {};
		}
		return ( window.wponion._.isUndefined( this.data[ $key ] ) ) ? $default : this.data[ $key ];
	}
}
