import WPOnion_Dependency from '../helpers/dependency';

export default class {
	constructor( $element = undefined, param = undefined ) {
		let $this         = this;
		this.base         = {};
		this.base.$el     = $element;
		this.base.init    = () => {
			this.ruleset = jQuery.deps.createRuleset();
			let $cfg     = {
				show: ( el ) => el.removeClass( 'hidden' ),
				hide: ( el ) => el.addClass( 'hidden' ),
				log: true,
				checkTargets: false,
			};

			if( param !== undefined ) {

			} else {
				this.base.depRoot();
			}
		};
		this.base.depRoot = () => {
			this.base.$el.each( function() {
				jQuery( this ).find( '.wponion-has-dependency' ).each( function() {
					new WPOnion_Dependency( jQuery( this ), $this.base.ruleset );
				} );
			} )
		};

		this.base.init();
	}
}
