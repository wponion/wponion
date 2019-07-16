export default class WPOnion_Dependency {
	/**
	 *
	 * @param $element
	 * @param param
	 * @param $config
	 */
	constructor( $element = false, param = {}, $config = {} ) {

		this.rules = jQuery.deps.createRuleset();
		this.param = window.wponion._.merge( { nestable: false, parent: false }, param );
		this.conf  = {
			nestable: this.param.nestable,
			parent: ( true === this.param.nestable ) ? $element : this.param.parent,
		};

		window.wponion_get_fields( $element, '.wponion-has-dependency' )
			  .each( ( e, elem ) => jQuery( elem ).trigger( 'wponion_add_dependency', [ this.rules, this.conf ] ) );

		jQuery.deps.enable( $element, this.rules, window.wponion._.merge( {
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

	}
}
