import WPOnion_Field from '../../class/field';

export default class extends WPOnion_Field {
	/**
	 * Inits Field.
	 */
	init() {
		let $arg = this.option( 'selectize', {} );

		if( !window.wponion._.isUndefined( $arg.theme ) ) {
			this.element.parent().addClass( $arg.theme );
		} else {
			this.element.parent().addClass( 'selectize-default' );
		}

		if( window.wponion._.isObject( this.option( 'ajax' ) ) ) {
			$arg.load = ( query, callback ) => {
				if( query === undefined ) {
					return ( callback !== undefined ) ? callback() : false;
				}

				this.ajax( 'wp-query-data', {
					dataType: 'json',
					data: this.parse_args( { s: query }, this.option( 'ajax' ) ),
					error: () => callback(),
					success: ( res ) => {
						let terms = [];
						let ins   = this.element[ 0 ].selectize;
						if( res.results ) {
							jQuery.each( res.results, function( id, text ) {
								let data                        = {};
								data[ ins.settings.valueField ] = id;
								data[ ins.settings.labelField ] = text;
								terms.push( data );
							} );
						}
						callback( terms );
					}
				} ).send();
			};
		}

		this.element.removeClass( 'form-control' ).selectize( this.handle_args( $arg, 'selectize' ) );
		return this;
	}

	maybe_add_inited_class() {
	}
}
