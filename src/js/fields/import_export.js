import WPOnion_Field from '../core/field';

class field extends WPOnion_Field {
	/**
	 * Inits Field.
	 */
	init() {
		this.handle_export_textarea();
		this.handle_import_textarea();
		//
	}

	handle_import_textarea() {
		let $textid = '#' + this.option( 'import_textarea' );
		this.element.find( $textid ).on( 'blur', () => {
			let $elem = jQuery( $textid );
			this.ajax( 'import_export', {
				data: {
					import_export_action: 'import',
					import_content: $elem.val(),
				},
				element_lock: $elem.parent(),
				success: ( res ) => wponion_success_swal( res ).fire(),
				error: ( res ) => wponion_error_swal( res ).fire(),
			} ).send();
		} );
	}

	handle_export_textarea() {
		let $textid   = '#' + this.option( 'export_textarea' );
		let $unique   = this.option( 'unique' );
		let $module   = this.option( 'module' );
		let clipboard = new ClipboardJS( 'button#copy_btn', { text: () => jQuery( $textid ).html() } );
		clipboard.on( 'success', () => {
			window.swal.fire( {
				type: 'success',
				title: window.wponion.core.txt( 'copied', 'Copied' ),
			} );
		} );
		this.element.find( '#download' ).on( 'click', () => {
			wponion_js_file( jQuery( $textid ).html(), 'backup_' + $module + '_' + $unique + '.json' );
		} );
	}

}

export default ( ( w ) => w.wponion_register_field( 'import_export', ( $elem ) => new field( $elem ) ) )( window );
