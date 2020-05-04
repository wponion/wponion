import WPOnion_Field from '../../class/field';

export default class extends WPOnion_Field {
	/**
	 * Inits Field.
	 */
	init() {
		let $arg = this.option( 'select2', {} );

		if( ( false === window.wponion._.isUndefined( window.swal ) && window.swal.isVisible() ) || jQuery( '.wponion-wp-modal' ).length > 0 ) {
			$arg.dropdownParent = jQuery( '.wponion-wp-modal' );
		}

		if( window.wponion._.isUndefined( $arg.dropdownParent ) || false === window.wponion._.isUndefined( $arg.dropdownParent ) && $arg.dropdownParent.length === 0 ) {
			$arg.dropdownParent = jQuery( 'body' );
		}

		if( window.wponion._.isObject( this.option( 'ajax' ) ) ) {
			let $allow_html = ( !window.wponion._.isUndefined( $arg.allow_html ) && true === $arg.allow_html );

			if( false === $allow_html ) {
				$arg.escapeMarkup = ( m ) => m;
			}

			if( true === $allow_html && window.wponion._.isUndefined( $arg.templateResult ) ) {
				$arg.templateResult = ( state ) => {
					if( !state.id ) {
						return state.text;
					}
					return jQuery( '<span>' + state.text + '</span>' );
				};
			}

			if( window.wponion._.isUndefined( $arg.ajax ) ) {
				$arg.ajax = {};
			}

			$arg.ajax.delay          = 250;
			$arg.ajax.processResults = ( data ) => {
				let terms = [];
				if( data.results ) {
					jQuery.each( data.results, ( id, text ) => terms.push( { id: id, text: text } ) );
				}
				return { results: terms };
			};
			$arg.ajax.data           = ( params ) => {
				return { q: params.term };
			};
			$arg.ajax.transport      = ( params, success, failure ) => {
				return this.ajax( 'wp-query-data', {
					data: this.parse_args( params.data, this.option( 'ajax' ) ),
					success: success,
					error: failure,
				} ).send();
			};
		}

		this.element.select2( this.handle_args( $arg, 'select2' ) );
		return this;
	}

	maybe_add_inited_class() {
	}
}
