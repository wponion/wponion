import WPOnion_Field from '../core/field';
import css_units from 'vsp-js-helper/parts/css_units';

class field extends WPOnion_Field {
	init() {
		this.font_weight_style = false;
		let $el                = this.element;
		let $preview           = this.element.find( '.wponion-font-preview' );
		let $this              = this;
		this.element.find( ':input' ).on( 'change', function() {
			let
				$font_field        = $el.find( '.wponion-element-font_picker' ),
				$font              = $font_field.find( '.wponion-font-selector' ).val(),
				$font_weight_style = $this.font_style( $font_field.find( '.wponion-variant-selector' ).val() ),
				$tag               = $el.find( '.wponion-element-tag select' ).val(),
				$color             = $el.find( '.wponion-field-color_picker input.wp-color-picker' ).val(),
				$align             = $el.find( '.wponion-element-align select' ).val(),
				$fontSize          = $el.find( '.wponion-element-size input' ).val(),
				$lineHeight        = $el.find( '.wponion-element-line-height input' ).val(),
				$backUPFont        = $el.find( '.wponion-element-backup-font select' ).val(),
				$direction         = $el.find( '.wponion-element-direction select' ).val(),
				$letterSpacing     = $el.find( '.wponion-element-letter-spacing input' ).val(),
				href               = 'https://fonts.googleapis.com/css?family=' + $font + ':' + $font_weight_style.weight,
				html               = '<link href="' + href + '" class="wpsf-font-preview-' + $this.id() + '" rel="stylesheet" type="text/css" />';

			if( jQuery( '.wponion-font-preview-' + $this.id() ).length > 0 ) {
				jQuery( '.wponion-font-preview-' + $this.id() ).attr( 'href', href );
			} else {
				jQuery( 'head' ).append( html );
			}

			if( $fontSize === '' || $fontSize === undefined ) {
				$fontSize = '18px';
			}

			if( $letterSpacing === '' || $letterSpacing === undefined ) {
				$letterSpacing = '1px';
			}

			if( $lineHeight === '' || $lineHeight === undefined ) {
				$lineHeight = '20px';
			}


			let $_attrs = ' font-family:' + $font + '; ' +
				' font-weight:' + $font_weight_style.weight + '; ' +
				' font-style:' + $font_weight_style.style + '; ' +
				' text-align:' + $align + '; ' +
				' color: ' + $color + ';' +
				' font-size:' + css_units( $fontSize ) + '; ' +
				' letter-spacing:' + css_units( $letterSpacing ) + '; ' +
				' line-height:' + css_units( $lineHeight ) + '; ';


			let $text = $preview.text();
			$preview.html( '' );
			$preview.append( jQuery( '<' + $tag + '>' + $text + '</' + $tag + ' >' ) );
			$preview.find( $tag ).attr( "style", $_attrs );

		} );
	}

	font_style( $info ) {
		let $weight_val = '400',
			$style_val  = 'normal';

		switch( $info ) {
			case '100':
				$weight_val = '100';
				break;
			case '100italic':
				$weight_val = '100';
				$style_val  = 'italic';
				break;
			case '300':
				$weight_val = '300';
				break;
			case '300italic':
				$weight_val = '300';
				$style_val  = 'italic';
				break;
			case '500':
				$weight_val = '500';
				break;
			case '500italic':
				$weight_val = '500';
				$style_val  = 'italic';
				break;
			case '700':
				$weight_val = '700';
				break;
			case '700italic':
				$weight_val = '700';
				$style_val  = 'italic';
				break;
			case '900':
				$weight_val = '900';
				break;
			case '900italic':
				$weight_val = '900';
				$style_val  = 'italic';
				break;
			case 'italic':
				$style_val = 'italic';
				break;
		}
		return { weight: $weight_val, style: $style_val };
	}
}


export default ( ( w ) => w.wponion_render_field( 'typography', ( $elem ) => new field( $elem ) ) )( window );
