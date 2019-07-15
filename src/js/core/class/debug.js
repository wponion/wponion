/**
 * WPOnion Debug Class.
 */
export default class {
	constructor() {
		this.data = {};
	}

	/**
	 * @param $key
	 * @param $value
	 */
	add( $key, $value ) {
		this.data[ $key ] = ( window.wponion._.isUndefined( this.data[ $key ] ) ) ? $value : window.wponion._.merge( $value, this.data[ $key ] );
		return this;
	}

	/**
	 * @param $key
	 * @param $default
	 * @return {boolean}
	 */
	get( $key, $default = false ) {
		return ( window.wponion._.isUndefined( this.data[ $key ] ) ) ? $default : this.data[ $key ];
	}
}
