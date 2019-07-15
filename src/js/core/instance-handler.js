/**
 * Stores All JS Class Instance Created By WPOnion.
 */
export default class Instance_Handler {
	constructor() {
		this.instances = {};
	}

	/**
	 * Stores instance.
	 * @param $key
	 * @param $instance
	 * @return {Instance_Handler}
	 */
	set( $key, $instance ) {
		this.instances[ $key ] = $instance;
		return this;
	}

	/**
	 * Retrives Instance.
	 * @param $key
	 * @return {*}
	 */
	get( $key ) {
		return this.instances[ $key ];
	}
}
