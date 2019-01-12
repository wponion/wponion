/**
 * WPOnion Module JS Class
 */
export default class {
	/**
	 * WPOnion Module JS Class Constructor.
	 * @param $selector
	 * @param $context
	 */
	constructor( $selector, $context ) {
		if( !$selector.jQuery ) {
			$selector = jQuery( $selector );
		}
		this.set_element( $selector );
		this.set_contxt( $context );
		this.module_init();
	}

	/**
	 * Triggers Module Init Function.
	 */
	module_init() {
	}

	/**
	 * Sets Element Args.
	 * @param $elem
	 */
	set_element( $elem ) {
		if( !$elem.jQuery ) {
			$elem = jQuery( $elem );
		}
		this.elem = $elem;
		return this;
	}

	/**
	 * Sets Contxt Args.
	 * @param $contxt
	 */
	set_contxt( $contxt ) {
		this.context = $contxt;
		return this;
	}

	/**
	 * Returns Hook Class.
	 * @returns {*}
	 */
	get hook() {
		return window.wponion.hooks;
	}

	/**
	 * Returns Element Variable
	 * @returns {*}
	 */
	get element() {
		return this.elem;
	}

	/**
	 * Returns Contxt Variable.
	 * @returns {*}
	 */
	get contxt() {
		return this.context;
	}
}
