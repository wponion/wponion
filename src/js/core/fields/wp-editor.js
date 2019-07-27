import WPOnion_Field from '../class/field';

export default class extends WPOnion_Field {
	/**
	 * Inits Field.
	 */
	init() {
		if( typeof window.wp.editor === 'undefined' || typeof window.tinyMCEPreInit === 'undefined' || typeof window.tinyMCEPreInit.mceInit[ 'wpeditor_' + this.id() ] === 'undefined' ) {
			return;
		}

		let $editor        = this.element.find( '.wponion-wp-editor' ),
			$textarea      = this.element.find( 'textarea' ),
			$has_wp_editor = this.element.find( '.wp-editor-wrap' ).length || this.element.find( '.mce-container' ).length,
			settings       = {
				tinymce: window.tinyMCEPreInit.mceInit[ 'wpeditor_' + this.id() ],
				quicktags: window.tinyMCEPreInit.qtInit[ 'wpeditor_' + this.id() ]
			},
			wpEditor       = wp.oldEditor ? wp.oldEditor : wp.editor;

		if( $has_wp_editor ) {
			$editor.empty();
			$editor.append( $textarea );
			$textarea.css( 'display', '' );
		}

		if( wpEditor && wpEditor.hasOwnProperty( 'autop' ) ) {
			wp.editor.autop      = wpEditor.autop;
			wp.editor.removep    = wpEditor.removep;
			wp.editor.initialize = wpEditor.initialize;
		}

		settings.tinymce = this.parse_args( settings.tinymce, {
			selector: $textarea.attr( 'id' ),
			setup: ( editor ) => {
				editor.on( 'change', window.wponion_debounce( () => {
					editor.save();
					$textarea.trigger( 'change' );
				}, 250 ) );
			}
		} );

		// Override editor tinymce settings
		if( this.option( 'tinymce' ) === false ) {
			settings.tinymce = false;
			$editor.addClass( 'wponion-no-tinymce' );
		}

		// Override editor quicktags settings
		if( this.option( 'quicktags' ) === false ) {
			settings.quicktags = false;
			$editor.addClass( 'wponion-no-quicktags' );
		}

		window.wp.editor.initialize( $textarea.attr( 'id' ), settings );

		if( this.option( 'media_buttons' ) ) {
			var $editor_buttons = $editor.find( '.wp-media-buttons' );
			if( $editor_buttons.length ) {
				$editor_buttons.find( '.wponion-shortcode-button' ).data( 'editor-id', $textarea.attr( 'id' ) );
			} else {
				var $media_buttons = jQuery( this.option( 'media_buttons_html' ) );
				$media_buttons.find( '.wponion-shortcode-button' ).data( 'editor-id', $textarea.attr( 'id' ) );
				$editor.prepend( $media_buttons );
			}
		}
	}
}
