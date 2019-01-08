import WPOnion_Dependency from '../helpers/dependency';

export default class {
	constructor( $element = undefined, param = {} ) {
		this.param         = window.window.wpo._.merge( { nestable: false, parent: false }, param );

		let $this          = this;
		this.base          = {};
		this.base.$el      = $element;
		this.base.init     = () => {
			this.base.ruleset = jQuery.deps.createRuleset();
			this.base.depRoot();
			jQuery.deps.enable( this.base.$el, this.base.ruleset, {
				show: ( el ) => {
					//el.removeClass( 'hidden' );
					el.slideDown();
					el.find( ':input' ).removeClass( 'wponion-dependent' );
				},
				hide: ( el ) => {
					//el.addClass( 'hidden' );
					el.slideUp();
					el.find( ':input' ).addClass( 'wponion-dependent' );
				},
				log: false,
				checkTargets: false,
			} );
		};
		this.base.instance = [];
		this.base.depRoot  = () => {
			this.base.$el.each( function() {
				jQuery( this ).find( '.wponion-has-dependency' ).each( function() {
					$this.base.instance = new WPOnion_Dependency( jQuery( this ), $this.base.ruleset, {
						nestable: $this.param.nestable,
						parent: ( true === $this.param.nestable ) ? $this.base.$el : $this.param.parent,
					} );
				} );
			} );
		};

		this.base.init();
	}
}
