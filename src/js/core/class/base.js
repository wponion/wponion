import { to_jquery, parse_args } from 'vsp-js-helper/index';

/**
 * WPOnion Javascript Base Class For All Handler.
 */
export default class WPOnion_Base {
	/**
	 * @param $selector
	 * @param $args
	 */
	constructor( $selector, $args = {} ) {
		this.elem = to_jquery( $selector );
		this.args = window.wponion._.isObject( $args ) ? $args : {};
	}

	/**
	 * Returns Current Active Element.
	 */
	get element() {
		return this.elem;
	}

	/**
	 * Returns Hook Class.
	 * @returns {*}
	 */
	get hook() {
		return window.wponion.hooks;
	}

	/**
	 * Get A Stored Args.
	 * @param $key
	 * @param $default
	 * @return {boolean}
	 */
	get_arg( $key, $default = false ) {
		return ( window.wponion._.isUndefined( this.args[ $key ] ) ) ? $default : this.args[ $key ];
	}

	/**
	 * Sets A Custom Value To Arg.
	 * @param $key
	 * @param $value
	 */
	set_arg( $key, $value ) {
		this.args[ $key ] = $value;
		return this;
	}

	/**
	 * Parses Args.
	 * @param $args
	 * @param $defaults
	 * @param $is_deep
	 * @return {JS_Parse_Args}
	 */
	parse_args( $args, $defaults, $is_deep = false ) {
		return parse_args( $defaults, $args, $is_deep );
	}
}
