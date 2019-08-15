import WPOnion_Field from '../class/field';

export default class extends WPOnion_Field {
	init() {
		let $button = this.element.find( '.button-editor-preview > button' );
		this.css_id = 'button#' + $button.attr( 'id' );
		this.normal = '';
		this.hover  = '';
		this.focus  = '';
		this.active = '';


		this.element.find( 'div#button-label input' ).on( 'keyup', ( e ) => {
			$button.find( 'span.button-label' ).html( jQuery( e.currentTarget ).val() );
		} );

		this.element.find( 'div#button-icon input' ).on( 'change', ( e ) => {
			$button.find( 'span.button-icon' ).html( '<i class="' + jQuery( e.currentTarget ).val() + '"></i>' );
		} );

		this.element.find( 'div#button-css-builder' )
			.on( 'change', ':input', window.wponion_debounce( () => this.generate_css() ) );

		this.element.find( 'div#wponion-tab-colors' )
			.on( 'change', ':input', window.wponion_debounce( () => this.generate_css() ) );
	}

	generate_css() {
		/**
		 * CSS Builder
		 * @type {jQuery|*|string}
		 */
		let $builder = this.element.find( 'div#button-css-builder :input' ).serializeJSON();
		let $bdata   = window.wponion.object_path.get( $builder, this.option( 'field_path' ) + '/css_editor' );

		if( window.wponion._.isObject( $bdata ) ) {
			for( var $key in $bdata ) {
				if( $bdata.hasOwnProperty( $key ) ) {
					if( 'border-style' === $key && window.wponion._.isEmpty( $bdata[ $key ] ) ) {
						$bdata[ $key ] = 'solid';
					}

					if( !window.wponion._.isEmpty( $bdata[ $key ] ) ) {
						this.normal += ' ' + $key + ' : ' + $bdata[ $key ] + '; ';
					}
				}
			}
		}

		/**
		 * CSS Colors
		 * @type {jQuery|*|string}
		 */
		let $css  = this.element.find( 'div#wponion-tab-colors :input' ).serializeJSON();
		let $data = window.wponion.object_path.get( $css, this.option( 'field_path' ) );

		if( window.wponion._.isObject( $data ) ) {
			if( !window.wponion._.isUndefined( $data.background_color ) ) {
				for( let $key in $data.background_color ) {
					if( $data.background_color.hasOwnProperty( $key ) ) {
						if( !window.wponion._.isEmpty( $data.background_color[ $key ] ) ) {
							this[ $key ] += 'background:' + $data.background_color[ $key ] + ';';
						}
					}
				}
			}

			if( !window.wponion._.isUndefined( $data.text_color ) ) {
				for( let $key in $data.text_color ) {
					if( $data.text_color.hasOwnProperty( $key ) ) {
						if( !window.wponion._.isEmpty( $data.text_color[ $key ] ) ) {
							this[ $key ] += 'color:' + $data.text_color[ $key ] + ';';
						}
					}
				}
			}

			if( !window.wponion._.isUndefined( $data.box_shadow ) ) {
				for( let $key in $data.box_shadow ) {
					let $shadow = [];
					if( $data.box_shadow.hasOwnProperty( $key ) ) {
						if( !window.wponion._.isEmpty( $data.box_shadow[ $key ] ) ) {
							let bxsh = [];
							bxsh.push( ( !window.wponion._.isEmpty( $data.box_shadow[ $key ][ 'h-shadow' ] ) ) ? $data.box_shadow[ $key ][ 'h-shadow' ] : '0' );
							bxsh.push( ( !window.wponion._.isEmpty( $data.box_shadow[ $key ][ 'v-shadow' ] ) ) ? $data.box_shadow[ $key ][ 'v-shadow' ] : '0' );
							bxsh.push( ( !window.wponion._.isEmpty( $data.box_shadow[ $key ].blur ) ) ? $data.box_shadow[ $key ].blur : '0' );
							bxsh.push( ( !window.wponion._.isEmpty( $data.box_shadow[ $key ].spread ) ) ? $data.box_shadow[ $key ].spread : '0' );
							bxsh.push( ( !window.wponion._.isEmpty( $data.box_shadow[ $key ].color ) ) ? $data.box_shadow[ $key ].color : '0' );
							console.log( bxsh );
							$shadow.push( bxsh.join( ' ' ) );
						}
					}
					console.log( $shadow );
					this.normal += 'box-shadow:' + $shadow.join( ',' ) + ';';
				}
			}
		}

		this.save_css();
	}

	save_css() {
		let $css    = this.css_id + '{' + this.normal + '}';
		$css += this.css_id + ':hover {' + this.hover + '}';
		$css += this.css_id + ':active {' + this.active + '}';
		$css += this.css_id + ':focus {' + this.focus + '}';
		this.normal = '';
		this.hover  = '';
		this.active = '';
		this.focus  = '';
		this.element.find( '.button-editor-preview > style' ).html( $css );
	}
}
