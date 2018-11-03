import WPOnion_Dependency from '../helpers/dependency';
import { array_merge } from 'vsp-js-helper/index';

export default class {
	constructor( $element = undefined, param = {} ) {
		this.param        = array_merge( { nestable: false, parent: false }, param );
		let $this         = this;
		this.base         = {};
		this.base.$el     = $element;
		this.base.init    = () => {
			this.base.ruleset = jQuery.deps.createRuleset();
			this.base.depRoot();
			jQuery.deps.enable( this.base.$el, this.base.ruleset, {
				show: ( el ) => el.removeClass( 'hidden' ),
				hide: ( el ) => el.addClass( 'hidden' ),
				log: false,
				checkTargets: false,
			} );
		};
		this.base.depRoot = () => {
			this.base.$el.each( function() {
				jQuery( this ).find( '.wponion-has-dependency' ).each( function() {
					new WPOnion_Dependency( jQuery( this ), $this.base.ruleset, {
						nestable: $this.param.nestable,
						parent: ( true === $this.param.nestable ) ? $this.base.$el : $this.param.parent,
					} );
				} );
			} )
		};

		this.base.init();
	}
}
