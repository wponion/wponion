export default class {
	constructor( $selector, $context ) {
		if( !$selector.jQuery ) {
			$selector = jQuery( $selector );
		}
		this.set_element( $selector );
		this.set_contxt( $context );
		this.module_init();
	}

	module_init() {
	}

	set_element( $elem ) {
		if( !$elem.jQuery ) {
			$elem = jQuery( $elem );
		}
		this.elem = $elem;
		return this;
	}

	set_contxt( $contxt ) {
		this.context = $contxt;
		return this;
	}

	get hook() {
		return window.wp.hooks;
	}

	get element() {
		return this.elem;
	}

	get contxt() {
		return this.context;
	}

}
