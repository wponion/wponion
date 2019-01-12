import WPOnion_Dependency from '../helpers/dependency';

/**
 * WPOnion Dependency Class
 */
export default class {
	/**
	 *
	 * @param $element
	 * @param param
	 */
	constructor( $element = undefined, param = {} ) {
		this.param = window.window.wponion._.merge( { nestable: false, parent: false }, param );
		let $this          = this;
		this.base          = {};
		this.base.$el      = $element;
		this.base.init     = () => {
			this.base.ruleset = jQuery.deps.createRuleset();
			this.base.depRoot();
			jQuery.deps.enable( this.base.$el, this.base.ruleset, {
				show: ( el ) => {
					el.slideDown();
					el.find( ':input' ).removeClass( 'wponion-dependent' );
				},
				hide: ( el ) => {
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
