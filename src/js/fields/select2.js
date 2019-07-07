import WPOnion_Field from '../core/field';

class field extends WPOnion_Field {
	/**
	 * Inits Field.
	 */
	init() {
		let $arg = this.option( 'select2', {} );
		if( 'wc_product' !== this.module() ) {
			if( window.wponion._.isUndefined( $arg.dropdownParent ) ) {
				$arg.dropdownParent = this.get_field_parent_by_id( this.element );
				if( $arg.dropdownParent.length === 0 ) {
					$arg.dropdownParent = jQuery( 'body' );
				}
			}
		}
		if( this.option( 'ajax' ) ) {
			$arg.ajax = {
				processResults: ( data ) => {
					let terms = [];
					if( data.results ) {
						jQuery.each( data.results, function( id, text ) {
							terms.push( { id: id, text: text } );
						} );
					}
					return { results: terms };
				},
				data: ( params ) => {
					return { q: params.term };
				},
				transport: ( params, success, failure ) => {
					return this.ajax( 'wp-query-data', {
						data: params.data,
						success: success,
						error: failure,
					} ).send();
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
