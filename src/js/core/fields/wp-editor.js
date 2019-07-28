import WPOnion_Field from '../class/field';

export default class extends WPOnion_Field {
	/**
	 * Inits Field.
	 */
	init() {
		if( typeof window.wp.editor === 'undefined' || typeof window.tinyMCEPreInit === 'undefined' ) {
			return;
		}

		let $tinymce       = window.wpo_core.windowArgs( 'wponion_wp_editor', {} ),
			$quicktags     = window.wpo_core.windowArgs( 'wponion_wp_quick_tags', {} );
		$tinymce           = $tinymce || {};
		$quicktags         = $quicktags || {};
		$tinymce           = ( false === window.wponion._.isUndefined( $tinymce[ 'wpeditor_' + this.id() ] ) ) ? $tinymce[ 'wpeditor_' + this.id() ] : {};
		$quicktags         = ( false === window.wponion._.isUndefined( $quicktags[ 'wpeditor_' + this.id() ] ) ) ? $quicktags[ 'wpeditor_' + this.id() ] : {};
		let $editor        = this.element.find( '.wponion-wp-editor' ),
			$textarea      = this.element.find( 'textarea' ),
			$has_wp_editor = this.element.find( '.wp-editor-wrap' ).length || this.element.find( '.mce-container' ).length,
			settings       = {
				tinymce: $tinymce,
				quicktags: $quicktags,
			},
			wpEditor       = wp.oldEditor ? wp.oldEditor : wp.editor;

		settings = this.handle_args( settings, 'WPEditor' );

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

		// Override editor tinymce settings
		if( this.option( 'tinymce' ) ) {
			settings.tinymce.selector = $textarea.attr( 'id' );
			settings.tinymce.setup    = ( editor ) => {
				editor.on( 'change', window.wponion_debounce( () => {
					editor.save();
					$textarea.trigger( 'change' );
				}, 250 ) );
			};
		} else {
			settings.tinymce = false;
			$editor.addClass( 'wponion-no-tinymce' );
		}

		// Override editor quicktags settings
		if( !this.option( 'quicktags' ) ) {
			settings.quicktags = false;
			$editor.addClass( 'wponion-no-quicktags' );
		}

		window.wp.editor.initialize( $textarea.attr( 'id' ), settings );

		if( this.option( 'media_buttons' ) ) {
			let $editor_buttons = $editor.find( '.wp-media-buttons' );
			if( $editor_buttons.length ) {
				$editor_buttons.find( '.wponion-shortcode-button' ).data( 'editor-id', $textarea.attr( 'id' ) );
			} else {
				let $media_buttons = jQuery( this.option( 'media_buttons_html' ) );
				$media_buttons.find( '.wponion-shortcode-button' ).data( 'editor-id', $textarea.attr( 'id' ) );
				$editor.prepend( $media_buttons );
			}
		}
	}
}
