import WPOnion_Field from '../core/field';

class field extends WPOnion_Field {
	/**
	 * Inits Field.
	 */
	init() {
		let $arg = this.option( 'select2', {} );
		if( window.wponion._.isUndefined( $arg.dropdownParent ) ) {
			$arg.dropdownParent = this.get_field_parent_by_id( this.element );
		}

		if( this.option( 'ajax' ) ) {
			$arg.ajax = {
				processResults: ( data ) => {
					let terms = [];
					if( data ) {
						jQuery.each( data, function( id, text ) {
							terms.push( { id: id, text: text } );
						} );
					}
					return {
						results: terms
					};
				},
				data: ( params ) => {
					return {
						q: params.term,
						query_args: this.option( 'query_args' ),
						query_options: this.option( 'query_options' ),
					};
				},
				transport: ( params, success, failure ) => {
					return this.ajax( 'ajax-wp-query-data', {
						data: params.data,
						onSuccess: success,
						onError: failure,
					} );
				}
			};
		}

		$arg = this.handle_args( $arg, 'select2' );
		this.element.select2( $arg );
		return this;
	}

	field_debug() {
	}
}

export default ( ( w ) => w.wponion_register_field( 'select2', ( $elem ) => new field( $elem ) ) )( window );
