import WPOnion_Base from './base';

export default class WPOnion_Field_Base extends WPOnion_Base {
	constructor( $selector, $args = {} ) {
		super( $selector, $args );
		this._args = false;
		this.field_base_init();
	}

	field_base_init() {
	}

	/**
	 * This function used by each and every field.
	 * This function will also convert Simple JS function code into callable JS code & returns it
	 * Plus it also store the value in debug array if debug enabled.
	 * @param $arg
	 * @param $key
	 * @returns {*|Object|Array}
	 */
	handle_args( $arg, $key = false ) {
		let $args = window.wpo_core.js_func( $arg );
		if( !window.wpo_core.is_debug() ) {
			return $args;
		}
		let $defaults = {
			'php': {}, 'javascript': {}
		};
		let $exists   = window.wponion._.merge( $defaults, window.wponion.class.field_debug.get( this.id(), $defaults ) );

		if( false === $key ) {
			$exists.javascript = $args;
		} else {
			$exists.javascript [ $key ] = $args;
		}

		window.wponion.class.field_debug.add( this.id(), $exists );
		return $args;
	}


	/**
	 * Gathers Field Options Data from window.wponion array.
	 * @returns {*}
	 */
	options() {
		if( this._args === false ) {
			this._args = window.wpo_core.windowArgs( this.id() );
		}
		return this._args;
	}

	/**
	 * Checks if a given option key exists and if so then it returns it value
	 * or it returns the default value.
	 * @param $key
	 * @param $default
	 * @returns {*}
	 */
	option( $key = '', $default = {} ) {
		let $args = this.options();
		return ( false === window.wponion._.isUndefined( $args[ $key ] ) ) ? $args[ $key ] : $default;
	}


	/**
	 * Returns WPOnion JS Field ID
	 * @returns {*}
	 */
	id() {
		return window.wpo_core.jsid( this.element );
	}

	/**
	 * Returns Field's Module Slug.
	 * @returns {*}
	 */
	module() {
		return this.option( 'module', false );
	}

	/**
	 * Triggers An Ajax Action.
	 * @param $action
	 * @param $data
	 */
	ajax( $action = '', $data = {} ) {
		let $ajax_key         = window.wpo_core.option( 'ajax_action_key' );
		let $default          = {
			module: this.module(),
			unique: this.option( 'unique' ),
			field_path: this.option( 'field_path' ),
			builder_path: this.option( 'builder_path' ),
		};
		$default[ $ajax_key ] = $action;
		$data.data            = ( false === window.wponion._.isUndefined( $data.data ) ) ? window.wponion._.merge( $default, $data.data ) : $default;
		return window.wpo_core.ajax( $data );
	}

	/**
	 * Returns Field Parent By data-wponion-jsid attribute.
	 * @param $elem
	 * @returns {*|jQuery|HTMLElement}
	 */
	get_field_parent_by_id( $elem ) {
		return jQuery( 'div.wponion-element[data-wponion-jsid="' + window.wpo_core.jsid( $elem ) + '"]' );
	}
}
