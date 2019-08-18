import WPOnion_Field from '../class/field';
import css_units from 'vsp-js-helper/parts/css_units';

export default class extends WPOnion_Field {
	/**
	 * Inits Field.
	 */
	init() {
		this.css = {};

		this.element.find( 'select[data-css-property]' ).on( 'change', ( e ) => {
			let $elem = jQuery( e.currentTarget );
			this.add( $elem.attr( 'data-css-property' ), $elem.val() );
			this.update_preview();
		} );

		this.element.find( 'input[data-css-property]' ).on( 'change', ( e ) => {
			let $elem = jQuery( e.currentTarget );
			this.add( $elem.attr( 'data-css-property' ), $elem.val() );
			this.update_preview();
		} );

		this.element.find( '.wponion-element-css_unit' ).on( 'change', ':input', ( e ) => {
			let $main        = jQuery( e.currentTarget ),
				$parent      = $main.parent(),
				$main_parent = $main.parent().parent().parent(),
				$pxinput     = $parent.find( 'input' ),
				$select      = $parent.find( 'select' );

			if( '0' === $pxinput.val() ) {
				this.add( $main_parent.attr( 'data-css-property' ), '' );
			} else if( window.wponion._.isEmpty( $pxinput.val() ) ) {
				this.add( $main_parent.attr( 'data-css-property' ), '' );
			} else {
				this.add( $main_parent.attr( 'data-css-property' ), $pxinput.val() + $select.val() );
			}
			this.update_preview();
		} );
	}

	add( $key, $value ) {
		this.css[ $key ] = $value;
		/*if( window.wponion._.isEmpty( $value ) && false === window.wponion._.isUndefined( this.css[ $key ] ) ) {
			delete this.css[ $key ];
		} else {

		}*/
	}

	update_preview() {
		let $style   = [];
		let $preview = this.element.find( 'div.previewtxt' );

		for( let $key in this.css ) {
			if( this.css.hasOwnProperty( $key ) ) {
				if( window.wponion._.isEmpty( this.css[ $key ] ) ) {
					$preview.css( $key, '' );
				} else if( 'backup-font' === $key ) {
					$style.push( 'font-family:' + this.css[ $key ] + ';' );
					$preview.css( 'font-family:', this.css[ $key ] );
				} else {
					//$style.push( $key + ':' + this.css[ $key ] + ';' );
					$preview.css( $key, this.css[ $key ] );
				}
			}
		}
		//this.element.find( 'div.previewtxt' ).attr( 'style', $style.join( ' ' ) );
	}


	/**
	 * Returns Proper Valid Font Styles.
	 * @param $info
	 * @returns {{weight: string, style: string}}
	 */
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
