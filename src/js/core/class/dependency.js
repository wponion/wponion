export default class {
	/**
	 *
	 * @param $element
	 * @param param
	 * @param $config
	 */
	constructor( $element = undefined, param = {}, $config = {} ) {
		this.param = window.wponion._.merge( { nestable: false, parent: false }, param );
		let $this  = this;

		this.base = {};

		this.base.$el = $element;

		this.base.depRoot = () => {
			let $d = {
				rules: $this.base.ruleset,
				config: {
					nestable: $this.param.nestable,
					parent: ( true === $this.param.nestable ) ? $this.base.$el : $this.param.parent,
				}
			};
			if( this.base.$el.length === 1 ) {
				this.base.$el.find( '.wponion-has-dependency' )
					.trigger( 'wponion_add_dependency', [ $d.rules, $d.config ] );
			} else if( this.base.$el.length > 1 ) {
				this.base.$el.each( function() {
					jQuery( this ).find( '.wponion-has-dependency' ).each( function() {
						jQuery( this ).trigger( 'wponion_add_dependency', [ $d.rules, $d.config ] );
					} );
					/*jQuery( this ).find( '.wponion-has-dependency' ).each( function() {
						$this.base.instance.push( new WPOnion_Dependency( jQuery( this ), $this.base.ruleset, {
							nestable: $this.param.nestable,
							parent: ( true === $this.param.nestable ) ? $this.base.$el : $this.param.parent,
						} ) );
					} );*/
				} );
			}
		};

		this.base.init = () => {
			this.base.ruleset = jQuery.deps.createRuleset();
			this.base.depRoot();
			jQuery.deps.enable( this.base.$el, this.base.ruleset, window.wponion._.merge( {
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
			}, $config ) );
		};

		this.base.instance = [];

		this.base.init();
	}
}
