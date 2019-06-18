import WPOnion_Field from '../core/field';

class field extends WPOnion_Field {
	init() {
		if( typeof CodeMirror !== 'function' ) {
			return;
		}

		let $textarea   = this.element.find( 'textarea' ),
			cdnURL      = this.option( 'cdn_url' ),
			data_editor = this.handle_args( this.parse_args( this.option( 'settings', {} ), {
				theme: 'default',
			} ), 'Code Editor' ),
			$link_id    = 'wpo-codemirror-' + data_editor.theme + '-css',
			code_editor = window.CodeMirror.fromTextArea( $textarea[ 0 ], data_editor );

		if( data_editor.theme !== 'default' && jQuery( document ).find( 'link#' + $link_id ).length === 0 ) {
			let $cssLink = jQuery( '<link>' );

			jQuery( '#wpo-codemirror-css' ).after( $cssLink );

			$cssLink.attr( {
				rel: 'stylesheet',
				id: 'wpo-codemirror-' + data_editor.theme + '-css',
				href: cdnURL + '/theme/' + data_editor.theme + '.min.css',
				type: 'text/css',
				media: 'all'
			} );
		}

		window.CodeMirror.modeURL = cdnURL + '/mode/%N/%N.min.js';
		window.CodeMirror.autoLoadMode( code_editor, data_editor.mode );
		code_editor.on( 'change', () => $textarea.val( code_editor.getValue() ).trigger( 'change' ) );
	}
}

export default ( ( w ) => w.wponion_register_field( 'code_editor', ( $elem ) => new field( $elem ) ) )( window );
