/* global wponion_error_swal:true */
/* global wponion_success_swal:true */
/* global wponion_js_file:true */
import WPOnion_Field from '../core/field';

class field extends WPOnion_Field {
	/**
	 * Inits Field.
	 */
	init() {
		this.handle_export_textarea();
		this.handle_import_textarea();
		this.handle_backup_button();
		this.handle_download_backup();
		this.handle_delete_backup();
		this.handle_restore_backup();
	}

	handle_import_textarea() {
		let $textid = '.' + this.option( 'import_textarea' );
		this.element.find( 'button.import-backup' ).on( 'click', () => {
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
		let $textid = '.' + this.option( 'export_textarea' );
		let $unique = this.option( 'unique' );
		let $module = this.option( 'module' );
		this.element.find( '.download' ).on( 'click', () => {
			wponion_js_file( jQuery( $textid ).html(), 'backup_' + $module + '_' + $unique + '.json' );
		} );
	}

	handle_backup_button() {
		this.element.find( 'button.backup-now' ).on( 'click', ( e ) => {
			this.ajax( 'import_export', {
				data: {
					import_export_action: 'backup',
				},
				button_lock: jQuery( e.currentTarget ),
				element_lock: this.element.find( '.saved-backup-headers' ),
				success: ( res ) => wponion_success_swal( res ).fire(),
				error: ( res ) => wponion_error_swal( res ).fire(),
			} ).send();
		} );
	}

	handle_download_backup() {
		this.element.on( 'click', '.download-backup', ( e ) => {
			e.preventDefault();
			this.ajax( 'import_export', {
				data: {
					import_export_action: 'download',
					backup_id: jQuery( e.currentTarget ).attr( 'data-backup-id' )
				},
				element_lock: this.element.find( '.saved-backup-headers' ),
				success: ( res ) => wponion_js_file( res.backup, res.file_name ),
				error: ( res ) => wponion_error_swal( res ).fire(),
			} ).send();
		} );
	}

	handle_delete_backup() {
		this.element.on( 'click', '.delete-backup', ( e ) => {
			e.preventDefault();
			this.ajax( 'import_export', {
				data: {
					import_export_action: 'delete',
					backup_id: jQuery( e.currentTarget ).attr( 'data-backup-id' )
				},
				element_lock: this.element.find( '.saved-backup-headers' ),
				success: () => {
					jQuery( e.currentTarget ).parent().parent().fadeOut( function() {
						jQuery( this ).remove();
					} );
				},
				error: ( res ) => wponion_error_swal( res ).fire(),
			} ).send();
		} );
	}

	handle_restore_backup() {
		this.element.on( 'click', '.restore-backup', ( e ) => {
			e.preventDefault();
			this.ajax( 'import_export', {
				data: {
					import_export_action: 'restore',
					backup_id: jQuery( e.currentTarget ).attr( 'data-backup-id' )
				},
				element_lock: this.element.find( '.saved-backup-headers' ),
				success: ( res ) => {
					wponion_success_swal( res ).fire();
					let $textid = '.' + this.option( 'export_textarea' );
					this.element.find( $textid ).val( JSON.stringify( res.backup ) );
				},
				error: ( res ) => wponion_error_swal( res ).fire(),
			} ).send();
		} );
	}

}

export default ( ( w ) => w.wponion_register_field( 'import_export', ( $elem ) => new field( $elem ) ) )( window );
