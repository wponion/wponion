/**
 * jquery.json-view - jQuery collapsible JSON plugin
 * @version v1.0.0
 * @link http://github.com/bazh/jquery.json-view
 * @license MIT
 */
;( function( $ ) {
	'use strict';

	var collapser = function( collapsed ) {
		var item = $( '<span />', {
			'class': 'collapser',
			on: {
				click: function() {
					var $this = $( this );

					$this.toggleClass( 'collapsed' );
					var block = $this.parent().children( '.block' );
					var ul    = block.children( 'ul' );

					if( $this.hasClass( 'collapsed' ) ) {
						ul.hide();
						block.children( '.dots, .comments' ).show();
					} else {
						ul.show();
						block.children( '.dots, .comments' ).hide();
					}
				}
			}
		} );

		if( collapsed ) {
			item.addClass( 'collapsed' );
		}

		return item;
	};

	var formatter = function( json, opts ) {
		var options = $.extend( {}, {
			nl2br: true
		}, opts );

		var htmlEncode = function( html ) {
			if( !html.toString() ) {
				return '';
			}

			return html.toString()
					   .replace( /&/g, "&amp;" )
					   .replace( /"/g, "&quot;" )
					   .replace( /</g, "&lt;" )
					   .replace( />/g, "&gt;" );
		};

		var span = function( val, cls ) {
			return $( '<span />', {
				'class': cls,
				html: htmlEncode( val )
			} );
		};

		var genBlock = function( val, level ) {
			switch( $.type( val ) ) {
				case 'object':
					if( !level ) {
						level = 0;
					}

					var output = $( '<span />', {
						'class': 'block'
					} );

					var cnt = Object.keys( val ).length;
					if( !cnt ) {
						return output
							.append( span( '{', 'b' ) )
							.append( ' ' )
							.append( span( '}', 'b' ) );
					}

					output.append( span( '{', 'b' ) );

					var items = $( '<ul />', {
						'class': 'obj collapsible level' + level
					} );

					$.each( val, function( key, data ) {
						cnt--;
						var item = $( '<li />' )
							.append( span( '"', 'q' ) )
							.append( key )
							.append( span( '"', 'q' ) )
							.append( ': ' )
							.append( genBlock( data, level + 1 ) );

						if( [ 'object', 'array' ].indexOf( $.type( data ) ) !== -1 && !$.isEmptyObject( data ) ) {
							item.prepend( collapser() );
						}

						if( cnt > 0 ) {
							item.append( ',' );
						}

						items.append( item );
					} );

					output.append( items );
					output.append( span( '...', 'dots' ) );
					output.append( span( '}', 'b' ) );
					if( Object.keys( val ).length === 1 ) {
						output.append( span( '// 1 item', 'comments' ) );
					} else {
						output.append( span( '// ' + Object.keys( val ).length + ' items', 'comments' ) );
					}

					return output;

				case 'array':
					if( !level ) {
						level = 0;
					}

					var cnt = val.length;

					var output = $( '<span />', {
						'class': 'block'
					} );

					if( !cnt ) {
						return output
							.append( span( '[', 'b' ) )
							.append( ' ' )
							.append( span( ']', 'b' ) );
					}

					output.append( span( '[', 'b' ) );

					var items = $( '<ul />', {
						'class': 'obj collapsible level' + level
					} );

					$.each( val, function( key, data ) {
						cnt--;
						var item = $( '<li />' )
							.append( genBlock( data, level + 1 ) );

						if( [ 'object', 'array' ].indexOf( $.type( data ) ) !== -1 && !$.isEmptyObject( data ) ) {
							item.prepend( collapser() );
						}

						if( cnt > 0 ) {
							item.append( ',' );
						}

						items.append( item );
					} );

					output.append( items );
					output.append( span( '...', 'dots' ) );
					output.append( span( ']', 'b' ) );
					if( val.length === 1 ) {
						output.append( span( '// 1 item', 'comments' ) );
					} else {
						output.append( span( '// ' + val.length + ' items', 'comments' ) );
					}

					return output;

				case 'string':
				case 'function':
					if( 'function' === $.type( val ) ) {
						val = val.toString();
					}

					val = htmlEncode( val );
					if( /^(http|https|file):\/\/[^\s]+$/i.test( val ) ) {
						return $( '<span />' )
							.append( span( '"', 'q' ) )
							.append( $( '<a />', {
								href: val,
								text: val
							} ) )
							.append( span( '"', 'q' ) );
					}
					if( options.nl2br ) {
						var pattern = /\n/g;
						if( pattern.test( val ) ) {
							val = ( val + '' ).replace( pattern, '<br />' );
						}
					}

					var text = $( '<span />', { 'class': 'str' } )
						.html( val );

					return $( '<span />' )
						.append( span( '"', 'q' ) )
						.append( text )
						.append( span( '"', 'q' ) );

				case 'number':
					return span( val.toString(), 'num' );

				case 'undefined':
					return span( 'undefined', 'undef' );

				case 'null':
					return span( 'null', 'null' );

				case 'boolean':
					return span( val ? 'true' : 'false', 'bool' );
				default:
					console.log( "Unknown Format In JSON View : " + $.type( val ) );
					break;
			}
		};

		return genBlock( json );
	};

	return $.fn.jsonView = function( json, options ) {
		var $this = $( this );

		options = $.extend( {}, {
			nl2br: true
		}, options );

		if( typeof json === 'string' ) {
			try {
				json = JSON.parse( json );
			} catch( err ) {
			}
		}

		$this.append( $( '<div />', {
			class: 'json-view'
		} ).append( formatter( json, options ) ) );

		return $this;
	};

} )( jQuery );
