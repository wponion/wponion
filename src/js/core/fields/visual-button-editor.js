import WPOnion_Field from '../class/field';

export default class extends WPOnion_Field {
	init() {
		this.button_id = this.id() + 'buttonpreview';
		this.hover     = this.element.find( 'style.hover' );
		this.focus     = this.element.find( 'style.focus' );
		this.normal    = this.element.find( 'style.normal' );
		this.preview   = this.element.find( '.button-editor-preview > button' );

		// Basic Config.
		this.button_label = this.element.find( 'div#button-label' );
		this.button_icon  = this.element.find( 'div#button-icon' );

		// Padding / Margin / Border Radius.
		this.button_margin        = this.element.find( 'div#button-margin' );
		this.button_padding       = this.element.find( 'div#button-padding' );
		this.button_border_radius = this.element.find( 'div#button-border-radius' );

		// Normal Background / Color
		this.button_background_normal  = this.element.find( 'div#button-normal-background' );
		this.button_color_normal       = this.element.find( 'div#button-normal-color' );
		this.button_text_shadow_normal = this.element.find( 'div#button-normal-text-shadow' );
		this.button_box_shadow_normal  = this.element.find( 'div#button-normal-box-shadow' );

		// Hover Background / Color / Text Shadow / Box Shadow
		this.button_background_hover  = this.element.find( 'div#button-hover-background' );
		this.button_color_hover       = this.element.find( 'div#button-hover-color' );
		this.button_text_shadow_hover = this.element.find( 'div#button-hover-text-shadow' );
		this.button_box_shadow_hover  = this.element.find( 'div#button-hover-box-shadow' );

		// Focus Background / Color
		this.button_background_focus  = this.element.find( 'div#button-focus-background' );
		this.button_color_focus       = this.element.find( 'div#button-focus-color' );
		this.button_text_shadow_focus = this.element.find( 'div#button-focus-text-shadow' );
		this.button_box_shadow_focus  = this.element.find( 'div#button-focus-box-shadow' );

		this.button_label.on( 'keyup', ':input', () => this.update_button_label() );
		this.button_icon.on( 'keyup change', ':input', () => this.update_button_icon() );

		/**
		 * Basic
		 */
		this.preview_update_event( this.button_margin, 'update_button_margin' );
		this.preview_update_event( this.button_padding, 'update_button_padding' );
		this.preview_update_event( this.button_border_radius, 'update_button_border_radius' );

		/**
		 * Normal State
		 */
		this.preview_update_event( this.button_background_normal, 'update_button_background', 'normal' );
		this.preview_update_event( this.button_color_normal, 'update_button_color', 'normal' );
		this.preview_update_event( this.button_text_shadow_normal, 'update_button_text_shadow', 'normal' );
		this.preview_update_event( this.button_box_shadow_normal, 'update_button_box_shadow', 'normal' );

		/**
		 * Hover State
		 */
		this.preview_update_event( this.button_background_hover, 'update_button_background', 'hover' );
		this.preview_update_event( this.button_color_hover, 'update_button_color', 'hover' );
		this.preview_update_event( this.button_text_shadow_hover, 'update_button_text_shadow', 'hover' );
		this.preview_update_event( this.button_box_shadow_hover, 'update_button_box_shadow', 'hover' );

		/**
		 * Focus State
		 */
		this.preview_update_event( this.button_background_focus, 'update_button_background', 'focus' );
		this.preview_update_event( this.button_color_focus, 'update_button_color', 'focus' );
		this.preview_update_event( this.button_text_shadow_focus, 'update_button_text_shadow', 'focus' );
		this.preview_update_event( this.button_box_shadow_focus, 'update_button_box_shadow', 'focus' );

	}

	preview_update_event( elem, callback, type = null ) {
		elem.on( 'change keyup', ':input', () => {
			this[ callback ]( type );
			this.update_preview( type );
		} );
	}

	get_spacing_values( $element_to_search, $type ) {
		let $all  = $element_to_search.find( '.wponion-spacing-input-all :input' ).val(),
			$is   = window.wponion._.isEmpty( $all ),
			$c    = {
				top: ( $is ) ? $element_to_search.find( '.wponion-spacing-input-top :input' ).val() : $all,
				right: ( $is ) ? $element_to_search.find( '.wponion-spacing-input-right :input' ).val() : $all,
				bottom: ( $is ) ? $element_to_search.find( '.wponion-spacing-input-bottom :input' ).val() : $all,
				left: ( $is ) ? $element_to_search.find( '.wponion-spacing-input-left :input' ).val() : $all,
			},
			$unit = $element_to_search.find( 'select' ).val();

		for( let $key in $c ) {
			if( $c.hasOwnProperty( $key ) ) {
				if( window.wponion._.isEmpty( $c[ $key ] ) && window.wponion._.isUndefined( $c[ $key ] ) ) {
					$c[ $type + '-' + $key ] = '';
					delete $c[ $key ];
				} else {
					$c[ $type + '-' + $key ] = $c[ $key ] + $unit;
					delete $c[ $key ];
				}
			}
		}
		return $c;
	}

	get_css_shadow_values( $values, $type ) {
		let $shadow = [];
		for( let $key in $values ) {
			if( $values.hasOwnProperty( $key ) ) {
				if( !window.wponion._.isEmpty( $values[ $key ] ) ) {
					let bxsh = [];
					bxsh.push( ( !window.wponion._.isEmpty( $values[ $key ][ 'h-shadow' ] ) ) ? $values[ $key ][ 'h-shadow' ] + 'px' : '0' );
					bxsh.push( ( !window.wponion._.isEmpty( $values[ $key ][ 'v-shadow' ] ) ) ? $values[ $key ][ 'v-shadow' ] + 'px' : '0' );
					bxsh.push( ( !window.wponion._.isEmpty( $values[ $key ].blur ) ) ? $values[ $key ].blur + 'px' : '0' );

					if( 'box' === $type ) {
						bxsh.push( ( !window.wponion._.isEmpty( $values[ $key ].spread ) ) ? $values[ $key ].spread + 'px' : '0' );
					}

					bxsh.push( ( !window.wponion._.isEmpty( $values[ $key ].color ) ) ? $values[ $key ].color : 'transparent' );

					if( 'box' === $type ) {
						bxsh.push( ( !window.wponion._.isUndefined( $values[ $key ].inset ) ) ? 'inset' : '' );
					}

					$shadow.push( bxsh.join( ' ' ) );
				}
			}
		}
		return $shadow;
	}

	/**
	 * General Field Live Preview.
	 */

	update_button_label() {
		this.preview.find( '.button-label' ).html( this.button_label.find( 'input' ).val() );
	}

	update_button_icon() {
		this.preview.find( '.button-icon' ).html( '<i class="' + this.button_icon.find( 'input' ).val() + '"></i>' );
	}

	update_button_margin() {
		this.save_css( this.get_spacing_values( this.button_margin, 'margin' ) );
	}

	update_button_padding() {
		this.save_css( this.get_spacing_values( this.button_padding, 'padding' ) );
	}

	update_button_border_radius() {
		let $all = this.button_border_radius.find( '.wponion-spacing-input-all :input' ).val();
		this.save_css( { 'border-radius': $all + 'px' } );
	}

	/**
	 * Normal Field live Preview.
	 */

	update_button_background( $type = 'normal' ) {
		let $background = ( !window.wponion._.isUndefined( this[ 'button_background_' + $type ] ) ) ? this[ 'button_background_' + $type ] : false;

		if( false !== $background ) {
			$background = $background.find( 'input' ).val();
			this.save_css( { background: $background }, $type );
		}
	}

	update_button_color( $type = 'normal' ) {
		let $color = ( !window.wponion._.isUndefined( this[ 'button_color_' + $type ] ) ) ? this[ 'button_color_' + $type ] : false;

		if( false !== $color ) {
			$color = $color.find( 'input' ).val();
			this.save_css( { color: $color }, $type );
		}
	}

	update_button_text_shadow( $type = 'normal' ) {
		let $shadow = [],
			$data   = ( !window.wponion._.isUndefined( this[ 'button_text_shadow_' + $type ] ) ) ? this[ 'button_text_shadow_' + $type ] : false;
		if( false !== $data ) {
			$data = $data.find( ':input' ).serializeJSON();
			$data = window.wponion.object_path.get( $data, this.option( 'field_path' ) );
			if( false === window.wponion._.isUndefined( $data[ $type ].text_shadow ) ) {
				$shadow = this.get_css_shadow_values( $data[ $type ].text_shadow, 'text' );
			}
			this.save_css( { 'text-shadow': $shadow.join( ',' ) }, $type );
		}
	}

	update_button_box_shadow( $type = 'normal' ) {
		let $shadow = [],
			$data   = ( !window.wponion._.isUndefined( this[ 'button_box_shadow_' + $type ] ) ) ? this[ 'button_box_shadow_' + $type ] : false;
		if( false !== $data ) {
			$data = $data.find( ':input' ).serializeJSON();
			$data = window.wponion.object_path.get( $data, this.option( 'field_path' ) );
			if( false === window.wponion._.isUndefined( $data[ $type ].box_shadow ) ) {
				$shadow = this.get_css_shadow_values( $data[ $type ].box_shadow, 'box' );
			}
			this.save_css( { 'box-shadow': $shadow.join( ',' ) }, $type );
		}
	}


	/**
	 * Common Functions
	 */

	save_css( $css, $type = 'normal' ) {
		for( let $key in $css ) {
			if( $css.hasOwnProperty( $key ) ) {
				let $val = ( window.wponion._.isEmpty( $css[ $key ] ) ) ? '' : $css[ $key ];
				if( 'hover' === $type ) {
					this.hover.css( $key, $val );
				} else if( 'focus' === $type ) {
					this.focus.css( $key, $val );
				} else {
					this.normal.css( $key, $val );
				}
			}
		}
	}

	update_preview( $type = 'normal' ) {
		if( 'hover' === $type ) {
			this.hover.html( 'button#' + this.button_id + ':hover{' + this.hover.attr( 'style' ) + '}' );
		} else if( 'focus' === $type ) {
			this.focus.html( 'button#' + this.button_id + ':focus{' + this.focus.attr( 'style' ) + '}' );
		} else {
			this.normal.html( 'button#' + this.button_id + '{' + this.normal.attr( 'style' ) + '}' );
		}
	}
}
