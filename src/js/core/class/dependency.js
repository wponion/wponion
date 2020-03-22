export default class WPOnion_Dependency {
	/**
	 *
	 * @param $element
	 * @param param
	 * @param $config
	 * @todo need to find a way to add " wponion-dependent " class to html element when its hidden
	 */
	constructor( $element = false, param = {}, $config = {} ) {
		this.param = window.wponion._.merge( { nestable: false, parent: false }, param );
		this.conf  = {
			nestable: this.param.nestable,
			parent: ( true === this.param.nestable ) ? $element : this.param.parent,
		};

		window.wponion_get_fields( $element, '.wponion-has-dependency' )
			  .each( ( e, elem ) => jQuery( elem ).trigger( 'wponion_add_dependency', [ this.conf ] ) );
	}
}
