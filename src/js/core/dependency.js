import WPOnion_Dependency from '../helpers/dependency';

/**
 * WPOnion Dependency Class
 */
export default class {
	/**
	 *
	 * @param $element
	 * @param param
	 * @param $config
	 */
	constructor( $element = undefined, param = {}, $config = {} ) {
		this.param         = window.wponion._.merge( { nestable: false, parent: false }, param );
		let $this          = this;
		this.base          = {};
		this.base.$el      = $element;
		this.base.init     = () => {
			this.base.ruleset = jQuery.deps.createRuleset();
			this.base.depRoot();
			let $_deps_functions = window.wponion._.merge( {
				show: ( el ) => {
					el.slideDown();
					el.find( ':input' ).removeClass( 'wponion-dependent' );
				},
				hide: ( el ) => {
					el.hide();
					el.find( ':input' ).addClass( 'wponion-dependent' );
				},
				log: false,
				checkTargets: false,
			}, $config );

			jQuery.deps.enable( this.base.$el, this.base.ruleset, $_deps_functions );
		};
		this.base.instance = [];
		this.base.depRoot  = () => {
			this.base.$el.each( function() {
				jQuery( this ).find( '.wponion-has-dependency' ).each( function() {
					$this.base.instance.push( new WPOnion_Dependency( jQuery( this ), $this.base.ruleset, {
						nestable: $this.param.nestable,
						parent: ( true === $this.param.nestable ) ? $this.base.$el : $this.param.parent,
					} ) );
				} );
			} );
		};
		this.base.init();
	}
}
