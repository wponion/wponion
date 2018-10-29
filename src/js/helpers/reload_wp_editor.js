import WPOnion_Field from '../core/field';
import $wpoh from 'vsp-js-helper/index';

export default class extends WPOnion_Field {
	init() {
		if( this.element.length > 0 ) {
			let $mce_editor  = tinyMCEPreInit.mceInit[ this.option( 'wpeditor_id' ) ],
				$quick_tags  = tinyMCEPreInit.qtInit[ this.option( 'wpeditor_id' ) ],
				$NEW_ID      = 'wponion-wp-editor-' + $wpoh.rand_md5(),
				$textArea    = this.element.find( 'textarea' ).clone(),
				$actual_ID   = $textArea.attr( 'id' ),
				$actual_html = this.element.find( '.wponion-fieldset' ).html(),
				$regex       = new RegExp( $actual_ID, "g" );
			$actual_html     = $actual_html.replace( $regex, $NEW_ID );

			this.element.find( '.wponion-fieldset' ).html( $actual_html );
			this.element.find( 'textarea' ).parent().append( $textArea );
			this.element.find( 'textarea:not(#' + $actual_ID + ')' ).remove();
			this.element.find( 'textarea' ).attr( 'id', $NEW_ID );

			if( false === $wpoh.is_undefined( $mce_editor ) ) {
				$mce_editor.selector = '#' + $NEW_ID;
				tinymce.init( $mce_editor );
				tinyMCE.execCommand( 'mceAddEditor', false, '#' + $NEW_ID );
			}

			if( false === $wpoh.is_undefined( $quick_tags ) ) {
				$quick_tags[ 'id' ] = $NEW_ID;
				quicktags( $quick_tags );
			}
		}
	}
}
