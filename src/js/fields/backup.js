import WPOnion_Field from '../core/field';
import $wponion from '../core/core';

/* global swal:true */

/* global tippy:true */

class field extends WPOnion_Field {
	/**
	 * Inits Field.
	 */
	init() {
		this.tooltip();

		this.element.find( 'input[type="file"]' ).on( 'change', ( e ) => {
			this.handle_backup_import( e.currentTarget );
		} );

		this.element.find( 'a.download_backup' ).on( 'click', () => {
			let $file = this.option( 'base_unique' );
			$file     = $file + '-' + this.module();
			let date  = new Date();
			let str   = date.getFullYear() + '-' + ( date.getMonth() + 1 ) + '-' + date.getDate() + '-' + date.getHours() + date.getMinutes() + date.getSeconds();
			$file     = $file + '-' + str;
			this.force_download( JSON.parse( this.element.find( '.backup_textarea textarea' ).html() ), $file );
		} );

		this.element.find( 'a.new_backup ' ).on( 'click', () => {
			this.block_form();
			this.ajax( 'new-module-data-backup', {
				data: {
					unique: this.option( 'base_unique' ),
					extra: this.get_extra_value(),
				},
				onSuccess: ( e ) => {
					if( e.success ) {
						this.tooltip( true );
						this.element.find( '.backup_lists' ).html( e.data );
						this.tooltip();
					} else {
						this.swal_error( e.data );
					}
				},
				onAlways: () => this.unblock_form(),
			} );
		} );

		this.element.on( 'click', '.delete_backup', ( e ) => {
			this.block_form();
			let $ins = jQuery( 'div.tippy-popper .tippy-content .delete_backup' ).tippy_get();
			if( $ins.instances[ 0 ] ) {
				$ins.instances[ 0 ].destroy();
			}
			this.ajax( 'delete-module-data-backup', {
				data: {
					unique: this.option( 'base_unique' ),
					extra: this.get_extra_value(),
					backup_id: jQuery( e.currentTarget ).attr( 'data-backupid' ),
				},
				onSuccess: ( e ) => {
					if( e.success ) {
						this.tooltip( true );
						this.element.find( '.backup_lists' ).html( e.data );
						this.tooltip();
					} else {
						this.swal_error( e.data );
					}
				},
				onAlways: () => this.unblock_form(),
			} );
		} );

		this.element.on( 'click', '.restore_backup', ( e ) => {
			this.restore_backup( jQuery( e.currentTarget ).attr( 'data-backupid' ) );
		} );

		this.element.on( 'blur', '.restore_textarea textarea', ( e ) => {
			try {
				this.restore_backup( JSON.parse( jQuery( e.currentTarget ).val() ) );
				jQuery( e.currentTarget ).val( '' ).html( '' );
			} catch( error ) {
				this.swal_error( this.option( 'invalid_format' ) );
			}
		} );
	}

	/**
	 * Generates Swal Error Msg.
	 * @param msg
	 */
	swal_error( msg ) {
		swal.fire( {
			type: 'error',
			title: msg
		} );
	}

	/**
	 * Handles ToolTip instance.
	 * @param remove
	 */
	tooltip( remove = false ) {
		let $this = this;
		if( true === remove ) {
			this.element.find( '.backup_lists li' ).each( function() {
				let $elem = jQuery( this ).find( '> a' )[ 0 ];
				$elem._tippy.destroy();
			} );
		} else {
			this.element.find( '.backup_lists li' ).each( function() {
				$this.show_tooltip( jQuery( this ).find( '>a' ) );
			} );
		}
	}

	/**
	 * Blocks A Form
	 */
	block_form() {
		jQuery( document ).find( 'button' ).attr( 'disabled', 'disabled' );
	}

	/**
	 * Unblocks a form
	 */
	unblock_form() {
		jQuery( document ).find( 'button' ).removeAttr( 'disabled' );
	}

	/**
	 * Forces Download Export Data.
	 * @param exportObj
	 * @param exportName
	 */
	force_download( exportObj, exportName ) {
		let dataStr            = 'data:text/json;charset=utf-8,' + encodeURIComponent( JSON.stringify( exportObj ) );
		let downloadAnchorNode = document.createElement( 'a' );
		downloadAnchorNode.setAttribute( 'href', dataStr );
		downloadAnchorNode.setAttribute( 'download', exportName + '.json' );
		document.body.appendChild( downloadAnchorNode ); // required for firefox
		downloadAnchorNode.click();
		downloadAnchorNode.remove();
	}

	/**
	 * Restores Backup Data.
	 * @param backup_id
	 */
	restore_backup( backup_id ) {
		this.block_form();
		this.ajax( 'restore-module-data-backup', {
			data: {
				unique: this.option( 'base_unique' ),
				extra: this.get_extra_value(),
				backup_id: backup_id,
			},
			onSuccess: ( e ) => {
				if( e.success ) {
					swal.fire( {
						type: 'success',
						title: e.data,
					} );
				} else {
					this.swal_error( e.data );
				}
			},
			onAlways: () => this.unblock_form(),
		} );
	}

	/**
	 * Handles Backup Import File and restores it.
	 * @param $elem
	 */
	handle_backup_import( $elem ) {
		if( $elem.files && $elem.files[ 0 ] ) {
			let $file = $elem.files[ 0 ];

			if( $file.type !== 'application/json' ) {
				this.swal_error( this.option( 'invalid_format' ) );
			} else {

				let reader    = new FileReader();
				reader.onload = ( e ) => {
					this.restore_backup( JSON.parse( e.target.result ) );
				};
				reader.readAsText( $file );
			}
		}
	}

	/**
	 * Show's ToolTip
	 * @param $elem
	 */
	show_tooltip( $elem ) {
		let $backupid = $elem.attr( 'data-backupid' );
		let $appendTO = this.element[ 0 ];
		tippy( $elem[ 0 ], {
			arrow: true,
			appendTo: $appendTO,
			arrowType: 'round',
			content: '<button data-backupid="' + $backupid + '" type="button" class="restore_backup button button-secondary button-small"><i class="dashicons-image-rotate dashicons"></i> </button> | <button data-backupid="' + $backupid + '" type="button" class="delete_backup button button-secondary button-small"><i class="dashicons-trash dashicons"></i> </button>',
			interactive: true,
			theme: 'translucent',
			onShown: () => {
				jQuery( 'div.tippy-popper .tippy-content .delete_backup' ).tippy( {
					arrow: true,
					arrowType: 'skinny',
					appendTo: $appendTO,
					content: $wponion.txt( 'delete' ),
					theme: 'light-border',
					interactive: false,
					placement: 'bottom',
				} );

				jQuery( 'div.tippy-popper .tippy-content .restore_backup' ).tippy( {
					arrow: true,
					arrowType: 'skinny',
					appendTo: $appendTO,
					content: $wponion.txt( 'restore' ),
					theme: 'light-border',
					placement: 'bottom',
				} );
			},
			placement: 'right',
		} );
	}

	/**
	 * Returns Extra Value.
	 * @returns {*}
	 */
	get_extra_value() {
		if( jQuery( 'form#post input#post_ID' ).length === 1 ) {
			return jQuery( 'form#post input#post_ID' ).val();
		}
		return false;
	}
}

export default ( ( w ) => w.wponion_register_field( 'backup', ( $elem ) => new field( $elem ) ) )( window );
