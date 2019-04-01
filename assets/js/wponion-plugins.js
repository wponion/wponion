/*!
  SerializeJSON jQuery plugin.
  https://github.com/marioizquierdo/jquery.serializeJSON
  version 2.9.0 (Jan, 2018)

  Copyright (c) 2012-2018 Mario Izquierdo
  Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
  and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
*/
!function(e){if("function"==typeof define&&define.amd)define(["jquery"],e);else if("object"==typeof exports){var n=require("jquery");module.exports=e(n)}else e(window.jQuery||window.Zepto||window.$)}(function(e){"use strict";e.fn.serializeJSON=function(n){var r,s,t,i,a,u,l,o,p,c,d,f,y;return r=e.serializeJSON,s=this,t=r.setupOpts(n),i=s.serializeArray(),r.readCheckboxUncheckedValues(i,t,s),a={},e.each(i,function(e,n){u=n.name,l=n.value,p=r.extractTypeAndNameWithNoType(u),c=p.nameWithNoType,(d=p.type)||(d=r.attrFromInputWithName(s,u,"data-value-type")),r.validateType(u,d,t),"skip"!==d&&(f=r.splitInputNameIntoKeysArray(c),o=r.parseValue(l,u,d,t),(y=!o&&r.shouldSkipFalsy(s,u,c,d,t))||r.deepSet(a,f,o,t))}),a},e.serializeJSON={defaultOptions:{checkboxUncheckedValue:void 0,parseNumbers:!1,parseBooleans:!1,parseNulls:!1,parseAll:!1,parseWithFunction:null,skipFalsyValuesForTypes:[],skipFalsyValuesForFields:[],customTypes:{},defaultTypes:{string:function(e){return String(e)},number:function(e){return Number(e)},boolean:function(e){return-1===["false","null","undefined","","0"].indexOf(e)},null:function(e){return-1===["false","null","undefined","","0"].indexOf(e)?e:null},array:function(e){return JSON.parse(e)},object:function(e){return JSON.parse(e)},auto:function(n){return e.serializeJSON.parseValue(n,null,null,{parseNumbers:!0,parseBooleans:!0,parseNulls:!0})},skip:null},useIntKeysAsArrayIndex:!1},setupOpts:function(n){var r,s,t,i,a,u;u=e.serializeJSON,null==n&&(n={}),t=u.defaultOptions||{},s=["checkboxUncheckedValue","parseNumbers","parseBooleans","parseNulls","parseAll","parseWithFunction","skipFalsyValuesForTypes","skipFalsyValuesForFields","customTypes","defaultTypes","useIntKeysAsArrayIndex"];for(r in n)if(-1===s.indexOf(r))throw new Error("serializeJSON ERROR: invalid option '"+r+"'. Please use one of "+s.join(", "));return i=function(e){return!1!==n[e]&&""!==n[e]&&(n[e]||t[e])},a=i("parseAll"),{checkboxUncheckedValue:i("checkboxUncheckedValue"),parseNumbers:a||i("parseNumbers"),parseBooleans:a||i("parseBooleans"),parseNulls:a||i("parseNulls"),parseWithFunction:i("parseWithFunction"),skipFalsyValuesForTypes:i("skipFalsyValuesForTypes"),skipFalsyValuesForFields:i("skipFalsyValuesForFields"),typeFunctions:e.extend({},i("defaultTypes"),i("customTypes")),useIntKeysAsArrayIndex:i("useIntKeysAsArrayIndex")}},parseValue:function(n,r,s,t){var i,a;return i=e.serializeJSON,a=n,t.typeFunctions&&s&&t.typeFunctions[s]?a=t.typeFunctions[s](n):t.parseNumbers&&i.isNumeric(n)?a=Number(n):!t.parseBooleans||"true"!==n&&"false"!==n?t.parseNulls&&"null"==n?a=null:t.typeFunctions&&t.typeFunctions.string&&(a=t.typeFunctions.string(n)):a="true"===n,t.parseWithFunction&&!s&&(a=t.parseWithFunction(a,r)),a},isObject:function(e){return e===Object(e)},isUndefined:function(e){return void 0===e},isValidArrayIndex:function(e){return/^[0-9]+$/.test(String(e))},isNumeric:function(e){return e-parseFloat(e)>=0},optionKeys:function(e){if(Object.keys)return Object.keys(e);var n,r=[];for(n in e)r.push(n);return r},readCheckboxUncheckedValues:function(n,r,s){var t,i,a;null==r&&(r={}),e.serializeJSON,t="input[type=checkbox][name]:not(:checked):not([disabled])",s.find(t).add(s.filter(t)).each(function(s,t){if(i=e(t),null==(a=i.attr("data-unchecked-value"))&&(a=r.checkboxUncheckedValue),null!=a){if(t.name&&-1!==t.name.indexOf("[]["))throw new Error("serializeJSON ERROR: checkbox unchecked values are not supported on nested arrays of objects like '"+t.name+"'. See https://github.com/marioizquierdo/jquery.serializeJSON/issues/67");n.push({name:t.name,value:a})}})},extractTypeAndNameWithNoType:function(e){var n;return(n=e.match(/(.*):([^:]+)$/))?{nameWithNoType:n[1],type:n[2]}:{nameWithNoType:e,type:null}},shouldSkipFalsy:function(n,r,s,t,i){var a=e.serializeJSON.attrFromInputWithName(n,r,"data-skip-falsy");if(null!=a)return"false"!==a;var u=i.skipFalsyValuesForFields;if(u&&(-1!==u.indexOf(s)||-1!==u.indexOf(r)))return!0;var l=i.skipFalsyValuesForTypes;return null==t&&(t="string"),!(!l||-1===l.indexOf(t))},attrFromInputWithName:function(e,n,r){var s,t;return s=n.replace(/(:|\.|\[|\]|\s)/g,"\\$1"),t='[name="'+s+'"]',e.find(t).add(e.filter(t)).attr(r)},validateType:function(n,r,s){var t,i;if(i=e.serializeJSON,t=i.optionKeys(s?s.typeFunctions:i.defaultOptions.defaultTypes),r&&-1===t.indexOf(r))throw new Error("serializeJSON ERROR: Invalid type "+r+" found in input name '"+n+"', please use one of "+t.join(", "));return!0},splitInputNameIntoKeysArray:function(n){var r;return e.serializeJSON,r=n.split("["),""===(r=e.map(r,function(e){return e.replace(/\]/g,"")}))[0]&&r.shift(),r},deepSet:function(n,r,s,t){var i,a,u,l,o,p;if(null==t&&(t={}),(p=e.serializeJSON).isUndefined(n))throw new Error("ArgumentError: param 'o' expected to be an object or array, found undefined");if(!r||0===r.length)throw new Error("ArgumentError: param 'keys' expected to be an array with least one element");i=r[0],1===r.length?""===i?n.push(s):n[i]=s:(a=r[1],""===i&&(o=n[l=n.length-1],i=p.isObject(o)&&(p.isUndefined(o[a])||r.length>2)?l:l+1),""===a?!p.isUndefined(n[i])&&e.isArray(n[i])||(n[i]=[]):t.useIntKeysAsArrayIndex&&p.isValidArrayIndex(a)?!p.isUndefined(n[i])&&e.isArray(n[i])||(n[i]=[]):!p.isUndefined(n[i])&&p.isObject(n[i])||(n[i]={}),u=r.slice(1),p.deepSet(n[i],u,s,t))}}});

// @ wponion-inline ../../node_modules/form-serializer/dist/jquery.serialize-object.min.js
( function( window, document, wp, $ ) {
/* global console:true */
( function( $ ) {
	var $WPONION = [ 'input[name=post_format]', 'select#page_template', 'input#menu_order', 'select#parent_id', 'select#post_status', 'input[name=visibility]' ];

	function Rule( controller, condition, value ) {
		this.init( controller, condition, value );
	}

	function Ruleset() {
		this.rules = [];
	}

	$.extend( Rule.prototype, {
		init: function( controller, condition, value ) {
			this.controller = controller;
			this.condition  = condition;
			this.value      = value;
			this.rules      = [];
			this.controls   = [];
		},

		evalCondition: function( context, control, condition, val1, val2 ) {
			if( '==' === condition || '=' === condition || 'OR' === condition ) {
				return this.checkBoolean( val1 ) === this.checkBoolean( val2 );
			} else if( '!=' === condition ) {
				return this.checkBoolean( val1 ) !== this.checkBoolean( val2 );
			} else if( '>=' === condition ) {
				return Number( val2 ) >= Number( val1 );
			} else if( '<=' === condition ) {
				return Number( val2 ) <= Number( val1 );
			} else if( '>' === condition ) {
				return Number( val2 ) > Number( val1 );
			} else if( '<' === condition ) {
				return Number( val2 ) < Number( val1 );
			} else if( '()' === condition ) {
				return window[ val1 ]( context, control, val2 ); // FIXED: function method
			} else if( 'in' === condition ) {
				if( '' === val2 || null === val2 ) {
					return false;
				}
				if( typeof val2 === 'object' ) {
					for( var i = 0; i <= val2.length; i++ ) {
						if( val2[ i ] !== undefined ) {
							if( val2[ i ] === val1 ) {
								return true;
							}
						}
					}

				}
				return false;
			} else if( 'any' === condition ) {
				return $.inArray( val2, val1.split( ',' ) ) > -1;
			} else if( 'not-any' === condition ) {
				return -1 === $.inArray( val2, val1.split( ',' ) );
			} else {
				throw new Error( 'Unknown condition:' + condition );
			}
		},

		checkBoolean: function( value ) {
			switch( value ) {
				case true:
				case 'true':
				case 1:
				case '1':
					value = true;
					break;
				case false:
				case 'false':
				case 0:
				case '0':
					value = false;
					break;
			}
			return value;
		},

		checkCondition: function( context, cfg ) {
			if( !this.condition ) {
				return true;
			}

			var control = context.find( this.controller );
			if( control.size() === 0 && cfg.log ) {
				console.log( 'Evaling condition: Could not find controller input ' + this.controller );
			}

			var val = this.getControlValue( context, control );
			if( cfg.log && val === undefined ) {
				console.log( 'Evaling condition: Could not exctract value from input ' + this.controller );
			}
			if( val === undefined ) {
				return false;
			}

			val = this.normalizeValue( control, this.value, val );
			return this.evalCondition( context, control, this.condition, this.value, val );
		},

		normalizeValue: function( control, baseValue, val ) {
			if( typeof baseValue === 'number' ) {
				return parseFloat( val );
			}
			return val;
		},

		getControlValue: function( context, control ) {
			if( ( 'radio' === control.attr( 'type' ) || 'checkbox' === control.attr( 'type' ) ) && control.length > 1 ) {
				return control.filter( ':checked' ).val();
			}

			if( 'checkbox' === control.attr( 'type' ) || 'radio' === control.attr( 'type' ) ) {
				return control.is( ':checked' );
			}
			return control.val();
		},

		createRule: function( controller, condition, value ) {
			var rule = new Rule( controller, condition, value );
			this.rules.push( rule );
			return rule;
		},

		include: function( input ) {
			if( !input ) {
				throw new Error( 'Must give an input selector' );
			}

			this.controls.push( input );
		},

		applyRule: function( context, cfg, enforced ) {
			var result;

			if( enforced === undefined ) {
				result = this.checkCondition( context, cfg );
			} else {
				result = enforced;
			}

			if( cfg.log ) {
				console.log( 'Applying rule on ' + this.controller + '==' + this.value + ' enforced: ' + enforced + ' result: ' + result );
			}

			if( cfg.log && !this.controls.length ) {
				console.log( 'Zero length controls slipped through' );
			}

			var show = cfg.show || function( control ) {
				control.show();
			};

			var hide = cfg.hide || function( control ) {
				control.hide();
			};

			var controls = $.map( this.controls, function( elem ) {
				var control = ( typeof elem === 'object' ) ? elem : context.find( elem );
				if( cfg.log && control.size() === 0 ) {
					console.log( 'Could not find element:' + elem );
				}
				return control;
			} );

			if( result ) {
				$( controls ).each( function() {
					// Some friendly debug info
					if( cfg.log && $( this ).size() === 0 ) {
						console.log( 'Control selection is empty when showing' );
						console.log( this );
					}
					show( this );
				} );

				$( this.rules ).each( function() {
					if( this.condition !== 'OR' ) {
						this.applyRule( context, cfg );
					}
				} );
			} else {
				$( controls ).each( function() {
					if( cfg.log && $( this ).size() === 0 ) {
						console.log( 'Control selection is empty when hiding:' );
						console.log( this );
					}
					hide( this );
				} );

				$( this.rules ).each( function() {
					if( this.condition !== 'OR' ) {
						this.applyRule( context, cfg, false );
					} else {
						this.applyRule( context, cfg );
					}
				} );
			}
		}
	} );

	$.extend( Ruleset.prototype, {
		createRule: function( controller, condition, value ) {
			var rule = new Rule( controller, condition, value );
			this.rules.push( rule );
			return rule;
		},

		applyRules: function( context, cfg ) {
			var i;
			cfg = cfg || {};

			if( cfg.log ) {
				console.log( 'Starting evaluation ruleset of ' + this.rules.length + ' rules' );
			}

			for( i = 0; i < this.rules.length; i++ ) {
				this.rules[ i ].applyRule( context, cfg );
			}
		},

		walk: function() {
			var rules = [];

			function descent( rule ) {
				rules.push( rule );
				$( rule.children ).each( function() {
					descent( this );
				} );
			}

			$( this.rules ).each( function() {
				descent( this );
			} );
			return rules;
		},

		checkTargets: function( context, cfg ) {
			var controls = 0;
			var rules    = this.walk();

			$( rules ).each( function() {
				if( context.find( this.controller ).length === 0 ) {
					throw new Error( 'Rule\'s controller does not exist: ' + this.controller );
				}

				if( this.controls.length === 0 ) {
					throw new Error( 'Rule has no controls: ' + this );
				}

				$( this.controls ).each( function() {
					if( context.find( this ) === 0 ) {
						throw new Error( 'Rule\'s target control ' + this + ' does not exist in context ' + context.get( 0 ) );
					}
					controls++;
				} );
			} );

			if( cfg.log ) {
				console.log( 'Controller check ok, rules count ' + rules.length + ' controls count ' + controls );
			}
		},

		install: function( cfg ) {
			$.deps.enable( $( document.body ), this, cfg );
		}
	} );

	$.deps = {
		createRuleset: function() {
			return new Ruleset();
		},

		enable: function( selection, ruleset, cfg ) {
			cfg = cfg || {};

			if( cfg.checkTargets || cfg.checkTargets === undefined ) {
				ruleset.checkTargets( selection, cfg );
			}

			if( cfg.log ) {
				console.log( 'Enabling dependency change monitoring on ' + selection.get( 0 ) );
			}

			var handler = function() {
				ruleset.applyRules( selection, cfg );
			};
			var val     = selection.on( 'change.deps', null, null, handler );

			ruleset.applyRules( selection, cfg );
			return val;
		}
	};

	$.extend( $.deps, {
		enable: function( selection, ruleset, cfg ) {
			cfg = cfg || {};
			if( cfg.checkTargets || cfg.checkTargets === undefined ) {
				ruleset.checkTargets( selection, cfg );
			}

			if( cfg.log ) {
				console.log( 'Enabling dependency change monitoring on ' + selection.get( 0 ) );
			}

			var handler = function() {
				ruleset.applyRules( selection, cfg );
			};

			$.each( $WPONION, function( i, e ) {
				$( 'body' ).find( e ).on( 'change', function() {
					handler();
				} );
			} );
			var val = selection.on( 'change.deps', null, null, handler );
			ruleset.applyRules( selection, cfg );
			return val;
		}
	} );

	$.extend( Rule.prototype, {
		FieldVal: function( content, control ) {
			var val = this.getControlValue( content, control );
			if( val === undefined ) {
				return false;
			}
			val = this.normalizeValue( this.control, this.value, val );
			return val;
		},

		checkCondition: function( context, cfg ) {
			if( !this.condition ) {
				return true;
			}

			var control = context.find( this.controller );
			if( $.inArray( this.controller, $WPONION ) !== -1 ) {
				control = $( 'body' ).find( this.controller );

			}


			if( control.length === 0 && cfg.log ) {
				console.log( 'Evaling condition: Could not find controller input ' + this.controller );
			}

			var val = this.FieldVal( context, control );

			if( cfg.log && val === undefined ) {
				console.log( 'Evaling condition: Could not extract value from input ' + this.controller );
			}

			if( val === false ) {
				return false;
			}

			return this.evalCondition( context, control, this.condition, this.value, val );
		},
	} );
} )( jQuery );

+function( $ ) {
	'use strict';

	var Button = function( element, options ) {
		this.$element  = $( element );
		this.options   = $.extend( {}, Button.DEFAULTS, options );
		this.isLoading = false;
	};

	Button.DEFAULTS = {
		loadingText: 'loading...'
	};

	Button.prototype.setState = function( state ) {
		var d    = 'disabled';
		var $el  = this.$element;
		var val  = $el.is( 'input' ) ? 'val' : 'html';
		var data = $el.data();

		state += 'Text';

		if( data.resetText == null ) {
			$el.data( 'resetText', $el[ val ]() );
		}

		// push to event loop to allow forms to submit
		setTimeout( $.proxy( function() {
			if( data[ state ] === null && typeof this.options[ state ] !== 'undefined' && this.options[ state ] !== '' ) {
				$el[ val ]( this.options[ state ] );
			} else if( data[ state ] !== null && typeof data[ state ] !== 'undefined' && data[ state ] !== '' ) {
				$el[ val ]( data[ state ] );
			} else {
				$el.wpo_button( 'reset' );
			}

			if( state === 'loadingText' ) {
				this.isLoading = true;
				$el.addClass( d ).attr( d, d ).prop( d, true );
			} else if( this.isLoading ) {
				this.isLoading = false;
				$el.removeClass( d ).removeAttr( d ).prop( d, false );
			}
		}, this ), 0 );
	};

	function Plugin( option ) {
		return this.each( function() {
			var $this   = $( this );
			var data    = $this.data( 'bs.button' );
			var options = ( typeof option === 'object' && option ) ? option : false;

			if( !data ) {
				$this.data( 'bs.button', ( data = new Button( this, options ) ) );
			}
			data.setState( option );
		} );
	}

	var old                     = $.fn.wpo_button;
	$.fn.wpo_button             = Plugin;
	$.fn.wpo_button.Constructor = Button;
	$.fn.wpo_button.noConflict  = function() {
		$.fn.wpo_button = old;
		return this;
	};
}( jQuery );

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

/*
* jQuery BlockUI; v20141123
* http://jquery.malsup.com/block/
* Copyright (c) 2014 M. Alsup; Dual licensed: MIT/GPL
*/
(function(){"use strict";function e(e){function o(o,i){var s,h,k=o==window,v=i&&void 0!==i.message?i.message:void 0;if(i=e.extend({},e.blockUI.defaults,i||{}),!i.ignoreIfBlocked||!e(o).data("blockUI.isBlocked")){if(i.overlayCSS=e.extend({},e.blockUI.defaults.overlayCSS,i.overlayCSS||{}),s=e.extend({},e.blockUI.defaults.css,i.css||{}),i.onOverlayClick&&(i.overlayCSS.cursor="pointer"),h=e.extend({},e.blockUI.defaults.themedCSS,i.themedCSS||{}),v=void 0===v?i.message:v,k&&b&&t(window,{fadeOut:0}),v&&"string"!=typeof v&&(v.parentNode||v.jquery)){var y=v.jquery?v[0]:v,m={};e(o).data("blockUI.history",m),m.el=y,m.parent=y.parentNode,m.display=y.style.display,m.position=y.style.position,m.parent&&m.parent.removeChild(y)}e(o).data("blockUI.onUnblock",i.onUnblock);var g,I,w,U,x=i.baseZ;g=r||i.forceIframe?e('<iframe class="blockUI" style="z-index:'+x++ +';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="'+i.iframeSrc+'"></iframe>'):e('<div class="blockUI" style="display:none"></div>'),I=i.theme?e('<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:'+x++ +';display:none"></div>'):e('<div class="blockUI blockOverlay" style="z-index:'+x++ +';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>'),i.theme&&k?(U='<div class="blockUI '+i.blockMsgClass+' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:'+(x+10)+';display:none;position:fixed">',i.title&&(U+='<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(i.title||"&nbsp;")+"</div>"),U+='<div class="ui-widget-content ui-dialog-content"></div>',U+="</div>"):i.theme?(U='<div class="blockUI '+i.blockMsgClass+' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:'+(x+10)+';display:none;position:absolute">',i.title&&(U+='<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(i.title||"&nbsp;")+"</div>"),U+='<div class="ui-widget-content ui-dialog-content"></div>',U+="</div>"):U=k?'<div class="blockUI '+i.blockMsgClass+' blockPage" style="z-index:'+(x+10)+';display:none;position:fixed"></div>':'<div class="blockUI '+i.blockMsgClass+' blockElement" style="z-index:'+(x+10)+';display:none;position:absolute"></div>',w=e(U),v&&(i.theme?(w.css(h),w.addClass("ui-widget-content")):w.css(s)),i.theme||I.css(i.overlayCSS),I.css("position",k?"fixed":"absolute"),(r||i.forceIframe)&&g.css("opacity",0);var C=[g,I,w],S=k?e("body"):e(o);e.each(C,function(){this.appendTo(S)}),i.theme&&i.draggable&&e.fn.draggable&&w.draggable({handle:".ui-dialog-titlebar",cancel:"li"});var O=f&&(!e.support.boxModel||e("object,embed",k?null:o).length>0);if(u||O){if(k&&i.allowBodyStretch&&e.support.boxModel&&e("html,body").css("height","100%"),(u||!e.support.boxModel)&&!k)var E=d(o,"borderTopWidth"),T=d(o,"borderLeftWidth"),M=E?"(0 - "+E+")":0,B=T?"(0 - "+T+")":0;e.each(C,function(e,o){var t=o[0].style;if(t.position="absolute",2>e)k?t.setExpression("height","Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:"+i.quirksmodeOffsetHack+') + "px"'):t.setExpression("height",'this.parentNode.offsetHeight + "px"'),k?t.setExpression("width",'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"'):t.setExpression("width",'this.parentNode.offsetWidth + "px"'),B&&t.setExpression("left",B),M&&t.setExpression("top",M);else if(i.centerY)k&&t.setExpression("top",'(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'),t.marginTop=0;else if(!i.centerY&&k){var n=i.css&&i.css.top?parseInt(i.css.top,10):0,s="((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "+n+') + "px"';t.setExpression("top",s)}})}if(v&&(i.theme?w.find(".ui-widget-content").append(v):w.append(v),(v.jquery||v.nodeType)&&e(v).show()),(r||i.forceIframe)&&i.showOverlay&&g.show(),i.fadeIn){var j=i.onBlock?i.onBlock:c,H=i.showOverlay&&!v?j:c,z=v?j:c;i.showOverlay&&I._fadeIn(i.fadeIn,H),v&&w._fadeIn(i.fadeIn,z)}else i.showOverlay&&I.show(),v&&w.show(),i.onBlock&&i.onBlock.bind(w)();if(n(1,o,i),k?(b=w[0],p=e(i.focusableElements,b),i.focusInput&&setTimeout(l,20)):a(w[0],i.centerX,i.centerY),i.timeout){var W=setTimeout(function(){k?e.unblockUI(i):e(o).unblock(i)},i.timeout);e(o).data("blockUI.timeout",W)}}}function t(o,t){var s,l=o==window,a=e(o),d=a.data("blockUI.history"),c=a.data("blockUI.timeout");c&&(clearTimeout(c),a.removeData("blockUI.timeout")),t=e.extend({},e.blockUI.defaults,t||{}),n(0,o,t),null===t.onUnblock&&(t.onUnblock=a.data("blockUI.onUnblock"),a.removeData("blockUI.onUnblock"));var r;r=l?e("body").children().filter(".blockUI").add("body > .blockUI"):a.find(">.blockUI"),t.cursorReset&&(r.length>1&&(r[1].style.cursor=t.cursorReset),r.length>2&&(r[2].style.cursor=t.cursorReset)),l&&(b=p=null),t.fadeOut?(s=r.length,r.stop().fadeOut(t.fadeOut,function(){0===--s&&i(r,d,t,o)})):i(r,d,t,o)}function i(o,t,i,n){var s=e(n);if(!s.data("blockUI.isBlocked")){o.each(function(){this.parentNode&&this.parentNode.removeChild(this)}),t&&t.el&&(t.el.style.display=t.display,t.el.style.position=t.position,t.el.style.cursor="default",t.parent&&t.parent.appendChild(t.el),s.removeData("blockUI.history")),s.data("blockUI.static")&&s.css("position","static"),"function"==typeof i.onUnblock&&i.onUnblock(n,i);var l=e(document.body),a=l.width(),d=l[0].style.width;l.width(a-1).width(a),l[0].style.width=d}}function n(o,t,i){var n=t==window,l=e(t);if((o||(!n||b)&&(n||l.data("blockUI.isBlocked")))&&(l.data("blockUI.isBlocked",o),n&&i.bindEvents&&(!o||i.showOverlay))){var a="mousedown mouseup keydown keypress keyup touchstart touchend touchmove";o?e(document).bind(a,i,s):e(document).unbind(a,s)}}function s(o){if("keydown"===o.type&&o.keyCode&&9==o.keyCode&&b&&o.data.constrainTabKey){var t=p,i=!o.shiftKey&&o.target===t[t.length-1],n=o.shiftKey&&o.target===t[0];if(i||n)return setTimeout(function(){l(n)},10),!1}var s=o.data,a=e(o.target);return a.hasClass("blockOverlay")&&s.onOverlayClick&&s.onOverlayClick(o),a.parents("div."+s.blockMsgClass).length>0?!0:0===a.parents().children().filter("div.blockUI").length}function l(e){if(p){var o=p[e===!0?p.length-1:0];o&&o.focus()}}function a(e,o,t){var i=e.parentNode,n=e.style,s=(i.offsetWidth-e.offsetWidth)/2-d(i,"borderLeftWidth"),l=(i.offsetHeight-e.offsetHeight)/2-d(i,"borderTopWidth");o&&(n.left=s>0?s+"px":"0"),t&&(n.top=l>0?l+"px":"0")}function d(o,t){return parseInt(e.css(o,t),10)||0}e.fn._fadeIn=e.fn.fadeIn;var c=e.noop||function(){},r=/MSIE/.test(navigator.userAgent),u=/MSIE 6.0/.test(navigator.userAgent)&&!/MSIE 8.0/.test(navigator.userAgent);document.documentMode||0;var f=e.isFunction(document.createElement("div").style.setExpression);e.blockUI=function(e){o(window,e)},e.unblockUI=function(e){t(window,e)},e.growlUI=function(o,t,i,n){var s=e('<div class="growlUI"></div>');o&&s.append("<h1>"+o+"</h1>"),t&&s.append("<h2>"+t+"</h2>"),void 0===i&&(i=3e3);var l=function(o){o=o||{},e.blockUI({message:s,fadeIn:o.fadeIn!==void 0?o.fadeIn:700,fadeOut:o.fadeOut!==void 0?o.fadeOut:1e3,timeout:o.timeout!==void 0?o.timeout:i,centerY:!1,showOverlay:!1,onUnblock:n,css:e.blockUI.defaults.growlCSS})};l(),s.css("opacity"),s.mouseover(function(){l({fadeIn:0,timeout:3e4});var o=e(".blockMsg");o.stop(),o.fadeTo(300,1)}).mouseout(function(){e(".blockMsg").fadeOut(1e3)})},e.fn.block=function(t){if(this[0]===window)return e.blockUI(t),this;var i=e.extend({},e.blockUI.defaults,t||{});return this.each(function(){var o=e(this);i.ignoreIfBlocked&&o.data("blockUI.isBlocked")||o.unblock({fadeOut:0})}),this.each(function(){"static"==e.css(this,"position")&&(this.style.position="relative",e(this).data("blockUI.static",!0)),this.style.zoom=1,o(this,t)})},e.fn.unblock=function(o){return this[0]===window?(e.unblockUI(o),this):this.each(function(){t(this,o)})},e.blockUI.version=2.7,e.blockUI.defaults={message:"<h1>Please wait...</h1>",title:null,draggable:!0,theme:!1,css:{padding:0,margin:0,width:"30%",top:"40%",left:"35%",textAlign:"center",color:"#000",border:"3px solid #aaa",backgroundColor:"#fff",cursor:"wait"},themedCSS:{width:"30%",top:"40%",left:"35%"},overlayCSS:{backgroundColor:"#000",opacity:.6,cursor:"wait"},cursorReset:"default",growlCSS:{width:"350px",top:"10px",left:"",right:"10px",border:"none",padding:"5px",opacity:.6,cursor:"default",color:"#fff",backgroundColor:"#000","-webkit-border-radius":"10px","-moz-border-radius":"10px","border-radius":"10px"},iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank",forceIframe:!1,baseZ:1e3,centerX:!0,centerY:!0,allowBodyStretch:!0,bindEvents:!0,constrainTabKey:!0,fadeIn:200,fadeOut:400,timeout:0,showOverlay:!0,focusInput:!0,focusableElements:":input:enabled:visible",onBlock:null,onUnblock:null,onOverlayClick:null,quirksmodeOffsetHack:4,blockMsgClass:"blockMsg",ignoreIfBlocked:!1};var b=null,p=[]}"function"==typeof define&&define.amd&&define.amd.jQuery?define(["jquery"],e):e(jQuery)})();
(function(e,t){'object'==typeof exports&&'undefined'!=typeof module?module.exports=t():'function'==typeof define&&define.amd?define(t):e.tippy=t()})(this,function(){'use strict';function e(e){return e&&'[object Function]'==={}.toString.call(e)}function t(e,t){if(1!==e.nodeType)return[];var r=e.ownerDocument.defaultView,a=r.getComputedStyle(e,null);return t?a[t]:a}function r(e){return'HTML'===e.nodeName?e:e.parentNode||e.host}function a(e){if(!e)return document.body;switch(e.nodeName){case'HTML':case'BODY':return e.ownerDocument.body;case'#document':return e.body;}var p=t(e),o=p.overflow,i=p.overflowX,n=p.overflowY;return /(auto|scroll|overlay)/.test(o+n+i)?e:a(r(e))}function p(e){return 11===e?ht:10===e?bt:ht||bt}function o(e){if(!e)return document.documentElement;for(var r=p(10)?document.body:null,a=e.offsetParent||null;a===r&&e.nextElementSibling;)a=(e=e.nextElementSibling).offsetParent;var i=a&&a.nodeName;return i&&'BODY'!==i&&'HTML'!==i?-1!==['TH','TD','TABLE'].indexOf(a.nodeName)&&'static'===t(a,'position')?o(a):a:e?e.ownerDocument.documentElement:document.documentElement}function n(e){var t=e.nodeName;return'BODY'!==t&&('HTML'===t||o(e.firstElementChild)===e)}function s(e){return null===e.parentNode?e:s(e.parentNode)}function l(e,t){if(!e||!e.nodeType||!t||!t.nodeType)return document.documentElement;var r=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,a=r?e:t,p=r?t:e,i=document.createRange();i.setStart(a,0),i.setEnd(p,0);var d=i.commonAncestorContainer;if(e!==d&&t!==d||a.contains(p))return n(d)?d:o(d);var c=s(e);return c.host?l(c.host,t):l(e,s(t).host)}function d(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:'top',r='top'===t?'scrollTop':'scrollLeft',a=e.nodeName;if('BODY'===a||'HTML'===a){var p=e.ownerDocument.documentElement,o=e.ownerDocument.scrollingElement||p;return o[r]}return e[r]}function c(e,t){var r=!!(2<arguments.length&&void 0!==arguments[2])&&arguments[2],a=d(t,'top'),p=d(t,'left'),o=r?-1:1;return e.top+=a*o,e.bottom+=a*o,e.left+=p*o,e.right+=p*o,e}function m(e,t){var r='x'===t?'Left':'Top',a='Left'===r?'Right':'Bottom';return parseFloat(e['border'+r+'Width'],10)+parseFloat(e['border'+a+'Width'],10)}function f(e,t,r,a){return Je(t['offset'+e],t['scroll'+e],r['client'+e],r['offset'+e],r['scroll'+e],p(10)?parseInt(r['offset'+e])+parseInt(a['margin'+('Height'===e?'Top':'Left')])+parseInt(a['margin'+('Height'===e?'Bottom':'Right')]):0)}function h(e){var t=e.body,r=e.documentElement,a=p(10)&&getComputedStyle(r);return{height:f('Height',t,r,a),width:f('Width',t,r,a)}}function b(e){return xt({},e,{right:e.left+e.width,bottom:e.top+e.height})}function u(e){var r={};try{if(p(10)){r=e.getBoundingClientRect();var a=d(e,'top'),o=d(e,'left');r.top+=a,r.left+=o,r.bottom+=a,r.right+=o}else r=e.getBoundingClientRect()}catch(t){}var i={left:r.left,top:r.top,width:r.right-r.left,height:r.bottom-r.top},n='HTML'===e.nodeName?h(e.ownerDocument):{},s=n.width||e.clientWidth||i.right-i.left,l=n.height||e.clientHeight||i.bottom-i.top,c=e.offsetWidth-s,f=e.offsetHeight-l;if(c||f){var y=t(e);c-=m(y,'x'),f-=m(y,'y'),i.width-=c,i.height-=f}return b(i)}function y(e,r){var o=!!(2<arguments.length&&void 0!==arguments[2])&&arguments[2],i=p(10),n='HTML'===r.nodeName,s=u(e),l=u(r),d=a(e),m=t(r),f=parseFloat(m.borderTopWidth,10),h=parseFloat(m.borderLeftWidth,10);o&&n&&(l.top=Je(l.top,0),l.left=Je(l.left,0));var y=b({top:s.top-l.top-f,left:s.left-l.left-h,width:s.width,height:s.height});if(y.marginTop=0,y.marginLeft=0,!i&&n){var g=parseFloat(m.marginTop,10),x=parseFloat(m.marginLeft,10);y.top-=f-g,y.bottom-=f-g,y.left-=h-x,y.right-=h-x,y.marginTop=g,y.marginLeft=x}return(i&&!o?r.contains(d):r===d&&'BODY'!==d.nodeName)&&(y=c(y,r)),y}function g(e){var t=!!(1<arguments.length&&void 0!==arguments[1])&&arguments[1],r=e.ownerDocument.documentElement,a=y(e,r),p=Je(r.clientWidth,window.innerWidth||0),o=Je(r.clientHeight,window.innerHeight||0),i=t?0:d(r),n=t?0:d(r,'left'),s={top:i-a.top+a.marginTop,left:n-a.left+a.marginLeft,width:p,height:o};return b(s)}function x(e){var a=e.nodeName;return'BODY'!==a&&'HTML'!==a&&('fixed'===t(e,'position')||x(r(e)))}function w(e){if(!e||!e.parentElement||p())return document.documentElement;for(var r=e.parentElement;r&&'none'===t(r,'transform');)r=r.parentElement;return r||document.documentElement}function v(e,t,p,o){var i=!!(4<arguments.length&&void 0!==arguments[4])&&arguments[4],n={top:0,left:0},s=i?w(e):l(e,t);if('viewport'===o)n=g(s,i);else{var d;'scrollParent'===o?(d=a(r(t)),'BODY'===d.nodeName&&(d=e.ownerDocument.documentElement)):'window'===o?d=e.ownerDocument.documentElement:d=o;var c=y(d,s,i);if('HTML'===d.nodeName&&!x(s)){var m=h(e.ownerDocument),f=m.height,b=m.width;n.top+=c.top-c.marginTop,n.bottom=f+c.top,n.left+=c.left-c.marginLeft,n.right=b+c.left}else n=c}p=p||0;var u='number'==typeof p;return n.left+=u?p:p.left||0,n.top+=u?p:p.top||0,n.right-=u?p:p.right||0,n.bottom-=u?p:p.bottom||0,n}function k(e){var t=e.width,r=e.height;return t*r}function E(e,t,r,a,p){var o=5<arguments.length&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf('auto'))return e;var i=v(r,a,o,p),n={top:{width:i.width,height:t.top-i.top},right:{width:i.right-t.right,height:i.height},bottom:{width:i.width,height:i.bottom-t.bottom},left:{width:t.left-i.left,height:i.height}},s=Object.keys(n).map(function(e){return xt({key:e},n[e],{area:k(n[e])})}).sort(function(e,t){return t.area-e.area}),l=s.filter(function(e){var t=e.width,a=e.height;return t>=r.clientWidth&&a>=r.clientHeight}),d=0<l.length?l[0].key:s[0].key,c=e.split('-')[1];return d+(c?'-'+c:'')}function O(e,t,r){var a=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null,p=a?w(t):l(t,r);return y(r,p,a)}function C(e){var t=e.ownerDocument.defaultView,r=t.getComputedStyle(e),a=parseFloat(r.marginTop||0)+parseFloat(r.marginBottom||0),p=parseFloat(r.marginLeft||0)+parseFloat(r.marginRight||0),o={width:e.offsetWidth+p,height:e.offsetHeight+a};return o}function L(e){var t={left:'right',right:'left',bottom:'top',top:'bottom'};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function T(e,t,r){r=r.split('-')[0];var a=C(e),p={width:a.width,height:a.height},o=-1!==['right','left'].indexOf(r),i=o?'top':'left',n=o?'left':'top',s=o?'height':'width',l=o?'width':'height';return p[i]=t[i]+t[s]/2-a[s]/2,p[n]=r===n?t[n]-a[l]:t[L(n)],p}function S(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function A(e,t,r){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===r});var a=S(e,function(e){return e[t]===r});return e.indexOf(a)}function Y(t,r,a){var p=void 0===a?t:t.slice(0,A(t,'name',a));return p.forEach(function(t){t['function']&&console.warn('`modifier.function` is deprecated, use `modifier.fn`!');var a=t['function']||t.fn;t.enabled&&e(a)&&(r.offsets.popper=b(r.offsets.popper),r.offsets.reference=b(r.offsets.reference),r=a(r,t))}),r}function P(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=O(this.state,this.popper,this.reference,this.options.positionFixed),e.placement=E(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.positionFixed=this.options.positionFixed,e.offsets.popper=T(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position=this.options.positionFixed?'fixed':'absolute',e=Y(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function D(e,t){return e.some(function(e){var r=e.name,a=e.enabled;return a&&r===t})}function X(e){for(var t=[!1,'ms','Webkit','Moz','O'],r=e.charAt(0).toUpperCase()+e.slice(1),a=0;a<t.length;a++){var p=t[a],o=p?''+p+r:e;if('undefined'!=typeof document.body.style[o])return o}return null}function I(){return this.state.isDestroyed=!0,D(this.modifiers,'applyStyle')&&(this.popper.removeAttribute('x-placement'),this.popper.style.position='',this.popper.style.top='',this.popper.style.left='',this.popper.style.right='',this.popper.style.bottom='',this.popper.style.willChange='',this.popper.style[X('transform')]=''),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function N(e){var t=e.ownerDocument;return t?t.defaultView:window}function H(e,t,r,p){var o='BODY'===e.nodeName,i=o?e.ownerDocument.defaultView:e;i.addEventListener(t,r,{passive:!0}),o||H(a(i.parentNode),t,r,p),p.push(i)}function W(e,t,r,p){r.updateBound=p,N(e).addEventListener('resize',r.updateBound,{passive:!0});var o=a(e);return H(o,'scroll',r.updateBound,r.scrollParents),r.scrollElement=o,r.eventsEnabled=!0,r}function B(){this.state.eventsEnabled||(this.state=W(this.reference,this.options,this.state,this.scheduleUpdate))}function M(e,t){return N(e).removeEventListener('resize',t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener('scroll',t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}function R(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=M(this.reference,this.state))}function z(e){return''!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function F(e,t){Object.keys(t).forEach(function(r){var a='';-1!==['width','height','top','right','bottom','left'].indexOf(r)&&z(t[r])&&(a='px'),e.style[r]=t[r]+a})}function _(e,t){Object.keys(t).forEach(function(r){var a=t[r];!1===a?e.removeAttribute(r):e.setAttribute(r,t[r])})}function U(e,t){var r=e.offsets,a=r.popper,p=r.reference,o=Qe,i=function(e){return e},n=o(a.width),s=o(p.width),l=-1!==['left','right'].indexOf(e.placement),d=-1!==e.placement.indexOf('-'),c=t?l||d||s%2==n%2?o:Ge:i,m=t?o:i;return{left:c(1==s%2&&1==n%2&&!d&&t?a.left-1:a.left),top:m(a.top),bottom:m(a.bottom),right:c(a.right)}}function V(e,t,r){var a=S(e,function(e){var r=e.name;return r===t}),p=!!a&&e.some(function(e){return e.name===r&&e.enabled&&e.order<a.order});if(!p){var o='`'+t+'`';console.warn('`'+r+'`'+' modifier is required by '+o+' modifier in order to work, be sure to include it before '+o+'!')}return p}function q(e){return'end'===e?'start':'start'===e?'end':e}function j(e){var t=!!(1<arguments.length&&void 0!==arguments[1])&&arguments[1],r=kt.indexOf(e),a=kt.slice(r+1).concat(kt.slice(0,r));return t?a.reverse():a}function K(e,t,r,a){var p=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),o=+p[1],i=p[2];if(!o)return e;if(0===i.indexOf('%')){var n;switch(i){case'%p':n=r;break;case'%':case'%r':default:n=a;}var s=b(n);return s[t]/100*o}if('vh'===i||'vw'===i){var l;return l='vh'===i?Je(document.documentElement.clientHeight,window.innerHeight||0):Je(document.documentElement.clientWidth,window.innerWidth||0),l/100*o}return o}function G(e,t,r,a){var p=[0,0],o=-1!==['right','left'].indexOf(a),i=e.split(/(\+|\-)/).map(function(e){return e.trim()}),n=i.indexOf(S(i,function(e){return-1!==e.search(/,|\s/)}));i[n]&&-1===i[n].indexOf(',')&&console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');var s=/\s*,\s*|\s+/,l=-1===n?[i]:[i.slice(0,n).concat([i[n].split(s)[0]]),[i[n].split(s)[1]].concat(i.slice(n+1))];return l=l.map(function(e,a){var p=(1===a?!o:o)?'height':'width',i=!1;return e.reduce(function(e,t){return''===e[e.length-1]&&-1!==['+','-'].indexOf(t)?(e[e.length-1]=t,i=!0,e):i?(e[e.length-1]+=t,i=!1,e):e.concat(t)},[]).map(function(e){return K(e,p,t,r)})}),l.forEach(function(e,t){e.forEach(function(r,a){z(r)&&(p[t]+=r*('-'===e[a-1]?-1:1))})}),p}function Q(e,t){var r=t.offset,a=e.placement,p=e.offsets,o=p.popper,i=p.reference,n=a.split('-')[0],s=void 0;return s=z(+r)?[+r,0]:G(r,o,i,n),'left'===n?(o.top+=s[0],o.left-=s[1]):'right'===n?(o.top+=s[0],o.left+=s[1]):'top'===n?(o.left+=s[0],o.top-=s[1]):'bottom'===n&&(o.left+=s[0],o.top+=s[1]),e.popper=o,e}function J(e){return[].slice.call(e)}function Z(e,t){return(Lt.closest||function(e){for(var t=this;t;){if(Tt.call(t,e))return t;t=t.parentElement}}).call(e,t)}function $(e,t){for(;e;){if(t(e))return e;e=e.parentElement}}function ee(){return document.createElement('div')}function te(e,t){e[St.x&&'innerHTML']=t instanceof Element?t[St.x&&'innerHTML']:t}function re(e,t){t.content instanceof Element?(te(e,''),e.appendChild(t.content)):e[t.allowHTML?'innerHTML':'textContent']=t.content}function ae(e){return{tooltip:e.querySelector(Ct.TOOLTIP),backdrop:e.querySelector(Ct.BACKDROP),content:e.querySelector(Ct.CONTENT),arrow:e.querySelector(Ct.ARROW)||e.querySelector(Ct.ROUND_ARROW)}}function pe(e){e.setAttribute('data-inertia','')}function oe(e){e.removeAttribute('data-inertia')}function ie(e){var t=ee();return'round'===e?(t.className='tippy-roundarrow',te(t,'<svg viewBox="0 0 24 8" xmlns="http://www.w3.org/2000/svg"><path d="M3 8s2.021-.015 5.253-4.218C9.584 2.051 10.797 1.007 12 1c1.203-.007 2.416 1.035 3.761 2.782C19.012 8.005 21 8 21 8H3z"/></svg>')):t.className='tippy-arrow',t}function ne(){var e=ee();return e.className='tippy-backdrop',e.setAttribute('data-state','hidden'),e}function se(e,t){e.setAttribute('tabindex','-1'),t.setAttribute('data-interactive','')}function le(e,t){e.removeAttribute('tabindex'),t.removeAttribute('data-interactive')}function de(e,t){e.forEach(function(e){e&&(e.style.transitionDuration=t+'ms')})}function ce(e,t,r){e[t+'EventListener']('transitionend',r)}function me(e){var t=e.getAttribute('x-placement');return t?t.split('-')[0]:''}function fe(e,t){e.forEach(function(e){e&&e.setAttribute('data-state',t)})}function he(e){void e.offsetHeight}function be(e,t){var r=ee();r.className='tippy-popper',r.setAttribute('role','tooltip'),r.id='tippy-'+e,r.style.zIndex=t.zIndex;var a=ee();a.className='tippy-tooltip',a.style.maxWidth=t.maxWidth+('number'==typeof t.maxWidth?'px':''),a.setAttribute('data-size',t.size),a.setAttribute('data-animation',t.animation),a.setAttribute('data-state','hidden'),t.theme.split(' ').forEach(function(e){a.classList.add(e+'-theme')});var p=ee();return p.className='tippy-content',p.setAttribute('data-state','hidden'),t.interactive&&se(r,a),t.arrow&&a.appendChild(ie(t.arrowType)),t.animateFill&&(a.appendChild(ne()),a.setAttribute('data-animatefill','')),t.inertia&&pe(a),re(p,t),a.appendChild(p),r.appendChild(a),r.addEventListener('focusout',function(t){t.relatedTarget&&r._tippy&&!$(t.relatedTarget,function(e){return e===r})&&t.relatedTarget!==r._tippy.reference&&r._tippy.props.shouldPopperHideOnBlur(t)&&r._tippy.hide()}),r}function ye(e,t,r){var a=ae(e),p=a.tooltip,o=a.content,i=a.backdrop,n=a.arrow;e.style.zIndex=r.zIndex,p.setAttribute('data-size',r.size),p.setAttribute('data-animation',r.animation),p.style.maxWidth=r.maxWidth+('number'==typeof r.maxWidth?'px':''),t.content!==r.content&&re(o,r),!t.animateFill&&r.animateFill?(p.appendChild(ne()),p.setAttribute('data-animatefill','')):t.animateFill&&!r.animateFill&&(p.removeChild(i),p.removeAttribute('data-animatefill')),!t.arrow&&r.arrow?p.appendChild(ie(r.arrowType)):t.arrow&&!r.arrow&&p.removeChild(n),t.arrow&&r.arrow&&t.arrowType!==r.arrowType&&p.replaceChild(ie(r.arrowType),n),!t.interactive&&r.interactive?se(e,p):t.interactive&&!r.interactive&&le(e,p),!t.inertia&&r.inertia?pe(p):t.inertia&&!r.inertia&&oe(p),t.theme!==r.theme&&(t.theme.split(' ').forEach(function(e){p.classList.remove(e+'-theme')}),r.theme.split(' ').forEach(function(e){p.classList.add(e+'-theme')}))}function ue(e,t){var r=e.popper,a=e.options,p=a.onCreate,o=a.onUpdate;a.onCreate=a.onUpdate=function(){he(r),t(),o(),a.onCreate=p,a.onUpdate=o}}function ge(e){J(document.querySelectorAll(Ct.POPPER)).forEach(function(t){var r=t._tippy;r&&!0===r.props.hideOnClick&&(!e||t!==e.popper)&&r.hide()})}function xe(e,t,r,a){if(!e)return!0;var p=r.clientX,o=r.clientY,i=a.interactiveBorder,n=a.distance,s=t.top-o>('top'===e?i+n:i),l=o-t.bottom>('bottom'===e?i+n:i),d=t.left-p>('left'===e?i+n:i),c=p-t.right>('right'===e?i+n:i);return s||l||d||c}function we(e,t){return-(e-t)+'px'}function ve(){At||(At=!0,ot&&document.body.classList.add('tippy-iOS'),window.performance&&document.addEventListener('mousemove',ke))}function ke(){var e=performance.now();20>e-Yt&&(At=!1,document.removeEventListener('mousemove',ke),!ot&&document.body.classList.remove('tippy-iOS')),Yt=e}function Ee(e){var t=e.target;if(!(t instanceof Element))return ge();var r=Z(t,Ct.POPPER);if(!(r&&r._tippy&&r._tippy.props.interactive)){var a=$(t,function(e){return e._tippy&&e._tippy.reference===e});if(a){var p=a._tippy,o=-1<p.props.trigger.indexOf('click');if(At||o)return ge(p);if(!0!==p.props.hideOnClick||o)return;p.clearDelayTimeouts()}ge()}}function Oe(){var e=document,t=e.activeElement;t&&t.blur&&t._tippy&&t.blur()}function Ce(){J(document.querySelectorAll(Ct.POPPER)).forEach(function(e){var t=e._tippy;t.props.livePlacement||t.popperInstance.scheduleUpdate()})}function Le(){document.addEventListener('click',Ee,!0),document.addEventListener('touchstart',ve,{passive:!0}),window.addEventListener('blur',Oe),window.addEventListener('resize',Ce),!it&&(navigator.maxTouchPoints||navigator.msMaxTouchPoints)&&document.addEventListener('pointerdown',ve)}function Te(e){return'[object Object]'==={}.toString.call(e)}function Se(e,t){return{}.hasOwnProperty.call(e,t)}function Ae(e){return!isNaN(e)&&!isNaN(parseFloat(e))}function Ye(e){if(e instanceof Element||Te(e))return[e];if(e instanceof NodeList)return J(e);if(Array.isArray(e))return e;try{return J(document.querySelectorAll(e))}catch(t){return[]}}function Pe(e,t,r){if(Array.isArray(e)){var a=e[t];return null==a?r:a}return e}function De(e){var t=window.scrollX||window.pageXOffset,r=window.scrollY||window.pageYOffset;e.focus(),scroll(t,r)}function Xe(e){setTimeout(e,1)}function Ie(e,t){var r;return function(){var a=this,p=arguments;clearTimeout(r),r=setTimeout(function(){return e.apply(a,p)},t)}}function Ne(e,t){return e&&e.modifiers&&e.modifiers[t]}function He(e){return!(e instanceof Element)||Tt.call(e,'a[href],area[href],button,details,input,textarea,select,iframe,[tabindex]')&&!e.hasAttribute('disabled')}function We(e){return Pt.reduce(function(t,r){var a=(e.getAttribute('data-tippy-'+r)||'').trim();return a?(t[r]='content'===r?a:'true'===a||'false'!==a&&(Ae(a)?+a:'['===a[0]||'{'===a[0]?JSON.parse(a):a),t):t},{})}function Be(e){var t={isVirtual:!0,attributes:e.attributes||{},setAttribute:function(t,r){e.attributes[t]=r},getAttribute:function(t){return e.attributes[t]},removeAttribute:function(t){delete e.attributes[t]},hasAttribute:function(t){return t in e.attributes},addEventListener:function(){},removeEventListener:function(){},classList:{classNames:{},add:function(t){e.classList.classNames[t]=!0},remove:function(t){delete e.classList.classNames[t]},contains:function(t){return t in e.classList.classNames}}};for(var r in t)e[r]=t[r]}function Me(e,t){var r=Dt({},t,t.performance?{}:We(e));return r.arrow&&(r.animateFill=!1),'function'==typeof r.appendTo&&(r.appendTo=t.appendTo(e)),'function'==typeof r.content&&(r.content=t.content(e)),r}function Re(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];Object.keys(e).forEach(function(e){if(!Se(t,e))throw new Error('[tippy]: `'+e+'` is not a valid option')})}function ze(e,t){return(t?e:{X:'Y',Y:'X'}[e])||''}function Fe(e,t,r,p){var o=t[0],i=t[1];if(!o&&!i)return'';var n={scale:function(){return i?r?o+', '+i:i+', '+o:''+o}(),translate:function(){return i?r?p?o+'px, '+-i+'px':o+'px, '+i+'px':p?-i+'px, '+o+'px':i+'px, '+o+'px':p?-o+'px':o+'px'}()};return n[e]}function _e(e,t){var r=e.match(new RegExp(t+'([XY])'));return r?r[1]:''}function Ue(e,t){var r=e.match(t);return r?r[1].split(',').map(function(e){return parseFloat(e,10)}):[]}function Ve(e,t){var r=me(Z(e,Ct.POPPER)),a='top'===r||'bottom'===r,p='right'===r||'bottom'===r,o={translate:{axis:_e(t,'translate'),numbers:Ue(t,Xt.translate)},scale:{axis:_e(t,'scale'),numbers:Ue(t,Xt.scale)}},i=t.replace(Xt.translate,'translate'+ze(o.translate.axis,a)+'('+Fe('translate',o.translate.numbers,a,p)+')').replace(Xt.scale,'scale'+ze(o.scale.axis,a)+'('+Fe('scale',o.scale.numbers,a,p)+')');e.style['undefined'==typeof document.body.style.transform?'webkitTransform':'transform']=i}function qe(e,t){function r(){Xe(function(){z=!1})}function a(){X=new MutationObserver(function(){q.popperInstance.update()}),X.observe(U,{childList:!0,subtree:!0,characterData:!0})}function p(e){var t=N=e,r=t.clientX,a=t.clientY;if(q.popperInstance){var p=me(q.popper),o=q.popperChildren.arrow?20:5,i='top'===p||'bottom'===p,n='left'===p||'right'===p,l=i?Je(o,r):r,d=n?Je(o,a):a;i&&l>o&&(l=Ke(r,window.innerWidth-o)),n&&d>o&&(d=Ke(a,window.innerHeight-o));var c=q.reference.getBoundingClientRect(),m=q.props.followCursor,f='horizontal'===m,h='vertical'===m;q.popperInstance.reference={getBoundingClientRect:function(){return{width:0,height:0,top:f?c.top:d,bottom:f?c.bottom:d,left:h?c.left:l,right:h?c.right:l}},clientWidth:0,clientHeight:0},q.popperInstance.scheduleUpdate(),'initial'===m&&q.state.isVisible&&s()}}function o(e){var t=Z(e.target,q.props.target);t&&!t._tippy&&(qe(t,Dt({},q.props,{target:'',showOnInit:!0})),i(e))}function i(e){if(T(),!q.state.isVisible){if(q.props.target)return o(e);if(B=!0,q.props.wait)return q.props.wait(q,e);x()&&document.addEventListener('mousemove',p);var t=Pe(q.props.delay,0,nt.delay);t?H=setTimeout(function(){A()},t):A()}}function n(){if(T(),!q.state.isVisible)return s();B=!1;var e=Pe(q.props.delay,1,nt.delay);e?W=setTimeout(function(){q.state.isVisible&&Y()},e):Y()}function s(){document.removeEventListener('mousemove',p),N=null}function l(){document.body.removeEventListener('mouseleave',n),document.removeEventListener('mousemove',F)}function d(e){!q.state.isEnabled||y(e)||(!q.state.isVisible&&(I=e),'click'===e.type&&!1!==q.props.hideOnClick&&q.state.isVisible?n():i(e))}function c(e){var t=$(e.target,function(e){return e._tippy}),r=Z(e.target,Ct.POPPER)===q.popper,a=t===q.reference;r||a||xe(me(q.popper),q.popper.getBoundingClientRect(),e,q.props)&&(l(),n())}function m(e){return y(e)?void 0:q.props.interactive?(document.body.addEventListener('mouseleave',n),void document.addEventListener('mousemove',F)):void n()}function f(e){if(e.target===q.reference){if(q.props.interactive){if(!e.relatedTarget)return;if(Z(e.relatedTarget,Ct.POPPER))return}n()}}function h(e){Z(e.target,q.props.target)&&i(e)}function b(e){Z(e.target,q.props.target)&&n()}function y(e){var t=-1<e.type.indexOf('touch'),r=it&&At&&q.props.touchHold&&!t,a=At&&!q.props.touchHold&&t;return r||a}function u(){var e=q.props.popperOptions,t=q.popperChildren,r=t.tooltip,a=t.arrow;return new Ot(q.reference,q.popper,Dt({placement:q.props.placement},e,{modifiers:Dt({},e?e.modifiers:{},{preventOverflow:Dt({boundariesElement:q.props.boundary},Ne(e,'preventOverflow')),arrow:Dt({element:a,enabled:!!a},Ne(e,'arrow')),flip:Dt({enabled:q.props.flip,padding:q.props.distance+5,behavior:q.props.flipBehavior},Ne(e,'flip')),offset:Dt({offset:q.props.offset},Ne(e,'offset'))}),onCreate:function(){r.style[me(q.popper)]=we(q.props.distance,nt.distance),a&&q.props.arrowTransform&&Ve(a,q.props.arrowTransform)},onUpdate:function(){var e=r.style;e.top='',e.bottom='',e.left='',e.right='',e[me(q.popper)]=we(q.props.distance,nt.distance),a&&q.props.arrowTransform&&Ve(a,q.props.arrowTransform)}}))}function g(e){q.popperInstance?!x()&&(q.popperInstance.scheduleUpdate(),q.props.livePlacement&&q.popperInstance.enableEventListeners()):(q.popperInstance=u(),a(),(!q.props.livePlacement||x())&&q.popperInstance.disableEventListeners()),q.popperInstance.reference=q.reference;var t=q.popperChildren.arrow;if(x()){t&&(t.style.margin='0');var r=Pe(q.props.delay,0,nt.delay);I.type&&p(r&&N?N:I)}else t&&(t.style.margin='');ue(q.popperInstance,e),q.props.appendTo.contains(q.popper)||(q.props.appendTo.appendChild(q.popper),q.props.onMount(q),q.state.isMounted=!0)}function x(){return q.props.followCursor&&!At&&'focus'!==I.type}function w(){de([q.popper],pt?0:q.props.updateDuration);(function e(){q.popperInstance&&q.popperInstance.scheduleUpdate(),q.state.isMounted?requestAnimationFrame(e):de([q.popper],0)})()}function v(e,t){E(e,function(){!q.state.isVisible&&q.props.appendTo.contains(q.popper)&&t()})}function k(e,t){E(e,t)}function E(e,t){if(0===e)return t();var r=q.popperChildren.tooltip,a=function a(p){p.target===r&&(ce(r,'remove',a),t())};ce(r,'remove',M),ce(r,'add',a),M=a}function O(e,t,r){q.reference.addEventListener(e,t),r.push({eventType:e,handler:t})}function C(){R=q.props.trigger.trim().split(' ').reduce(function(e,t){return'manual'===t?e:(q.props.target?'mouseenter'===t?(O('mouseover',h,e),O('mouseout',b,e)):'focus'===t?(O('focusin',h,e),O('focusout',b,e)):'click'===t?O(t,h,e):void 0:(O(t,d,e),q.props.touchHold&&(O('touchstart',d,e),O('touchend',m,e)),'mouseenter'===t?O('mouseleave',m,e):'focus'===t?O(pt?'focusout':'blur',f,e):void 0),e)},[])}function L(){R.forEach(function(e){var t=e.eventType,r=e.handler;q.reference.removeEventListener(t,r)})}function T(){clearTimeout(H),clearTimeout(W)}function S(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};Re(e,nt);var t=q.props,r=Me(q.reference,Dt({},q.props,e,{performance:!0}));r.performance=Se(e,'performance')?e.performance:t.performance,q.props=r,(Se(e,'trigger')||Se(e,'touchHold'))&&(L(),C()),Se(e,'interactiveDebounce')&&(l(),F=Ie(c,e.interactiveDebounce)),ye(q.popper,t,r),q.popperChildren=ae(q.popper),q.popperInstance&&st.some(function(t){return Se(e,t)})&&(q.popperInstance.destroy(),q.popperInstance=u(),!q.state.isVisible&&q.popperInstance.disableEventListeners(),q.props.followCursor&&N&&p(N))}function A(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:Pe(q.props.duration,0,nt.duration[0]);return q.state.isDestroyed||!q.state.isEnabled||At&&!q.props.touch?void 0:q.reference.isVirtual||document.documentElement.contains(q.reference)?q.reference.hasAttribute('disabled')?void 0:z?void(z=!1):void(!1===q.props.onShow(q)||(q.popper.style.visibility='visible',q.state.isVisible=!0,de([q.popper,q.popperChildren.tooltip,q.popperChildren.backdrop],0),g(function(){q.state.isVisible&&(!x()&&q.popperInstance.update(),de([q.popperChildren.tooltip,q.popperChildren.backdrop,q.popperChildren.content],e),q.popperChildren.backdrop&&(q.popperChildren.content.style.transitionDelay=Qe(e/6)+'ms'),q.props.interactive&&q.reference.classList.add('tippy-active'),q.props.sticky&&w(),fe([q.popperChildren.tooltip,q.popperChildren.backdrop,q.popperChildren.content],'visible'),k(e,function(){0===q.props.updateDuration&&q.popperChildren.tooltip.classList.add('tippy-notransition'),q.props.autoFocus&&q.props.interactive&&-1<['focus','click'].indexOf(I.type)&&De(q.popper),q.reference.setAttribute('aria-'+q.props.aria,q.popper.id),q.props.onShown(q),q.state.isShown=!0}))}))):P()}function Y(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:Pe(q.props.duration,1,nt.duration[1]);q.state.isDestroyed||!q.state.isEnabled||!1===q.props.onHide(q)||(0===q.props.updateDuration&&q.popperChildren.tooltip.classList.remove('tippy-notransition'),q.props.interactive&&q.reference.classList.remove('tippy-active'),q.popper.style.visibility='hidden',q.state.isVisible=!1,q.state.isShown=!1,de([q.popperChildren.tooltip,q.popperChildren.backdrop,q.popperChildren.content],e),fe([q.popperChildren.tooltip,q.popperChildren.backdrop,q.popperChildren.content],'hidden'),q.props.autoFocus&&q.props.interactive&&!z&&-1<['focus','click'].indexOf(I.type)&&('focus'===I.type&&(z=!0),De(q.reference)),v(e,function(){B||s(),q.reference.removeAttribute('aria-'+q.props.aria),q.popperInstance.disableEventListeners(),q.props.appendTo.removeChild(q.popper),q.state.isMounted=!1,q.props.onHidden(q)}))}function P(e){q.state.isDestroyed||(q.state.isMounted&&Y(0),L(),q.reference.removeEventListener('click',r),delete q.reference._tippy,q.props.target&&e&&J(q.reference.querySelectorAll(q.props.target)).forEach(function(e){return e._tippy&&e._tippy.destroy()}),q.popperInstance&&q.popperInstance.destroy(),X&&X.disconnect(),q.state.isDestroyed=!0)}var D=Me(e,t);if(!D.multiple&&e._tippy)return null;var X=null,I={},N=null,H=0,W=0,B=!1,M=function(){},R=[],z=!1,F=0<D.interactiveDebounce?Ie(c,D.interactiveDebounce):c,_=It++,U=be(_,D);U.addEventListener('mouseenter',function(e){q.props.interactive&&q.state.isVisible&&'mouseenter'===I.type&&i(e)}),U.addEventListener('mouseleave',function(e){q.props.interactive&&'mouseenter'===I.type&&0===q.props.interactiveDebounce&&xe(me(U),U.getBoundingClientRect(),e,q.props)&&n()});var V=ae(U),q={id:_,reference:e,popper:U,popperChildren:V,popperInstance:null,props:D,state:{isEnabled:!0,isVisible:!1,isDestroyed:!1,isMounted:!1,isShown:!1},clearDelayTimeouts:T,set:S,setContent:function(e){S({content:e})},show:A,hide:Y,enable:function(){q.state.isEnabled=!0},disable:function(){q.state.isEnabled=!1},destroy:P};return C(),e.addEventListener('click',r),D.lazy||(q.popperInstance=u(),q.popperInstance.disableEventListeners()),D.showOnInit&&i(),!D.a11y||D.target||He(e)||e.setAttribute('tabindex','0'),e._tippy=q,U._tippy=q,q}function je(e,t,r){Re(t,nt),Nt||(Le(),Nt=!0);var a=Dt({},nt,t);Te(e)&&Be(e);var p=Ye(e),o=p[0],i=(r&&o?[o]:p).reduce(function(e,t){var r=t&&qe(t,a);return r&&e.push(r),e},[]),n={targets:e,props:a,instances:i,destroyAll:function(){n.instances.forEach(function(e){e.destroy()}),n.instances=[]}};return n}for(var Ke=Math.min,Ge=Math.floor,Qe=Math.round,Je=Math.max,Ze='.tippy-iOS{cursor:pointer!important}.tippy-notransition{transition:none!important}.tippy-popper{-webkit-perspective:700px;perspective:700px;z-index:9999;outline:0;transition-timing-function:cubic-bezier(.165,.84,.44,1);pointer-events:none;line-height:1.4;max-width:calc(100% - 10px)}.tippy-popper[x-placement^=top] .tippy-backdrop{border-radius:40% 40% 0 0}.tippy-popper[x-placement^=top] .tippy-roundarrow{bottom:-8px;-webkit-transform-origin:50% 0;transform-origin:50% 0}.tippy-popper[x-placement^=top] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(180deg);transform:rotate(180deg)}.tippy-popper[x-placement^=top] .tippy-arrow{border-top:8px solid #333;border-right:8px solid transparent;border-left:8px solid transparent;bottom:-7px;margin:0 6px;-webkit-transform-origin:50% 0;transform-origin:50% 0}.tippy-popper[x-placement^=top] .tippy-backdrop{-webkit-transform-origin:0 25%;transform-origin:0 25%}.tippy-popper[x-placement^=top] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(1) translate(-50%,-55%);transform:scale(1) translate(-50%,-55%)}.tippy-popper[x-placement^=top] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(.2) translate(-50%,-45%);transform:scale(.2) translate(-50%,-45%);opacity:0}.tippy-popper[x-placement^=top] [data-animation=shift-toward][data-state=visible]{-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateY(-20px);transform:translateY(-20px)}.tippy-popper[x-placement^=top] [data-animation=perspective]{-webkit-transform-origin:bottom;transform-origin:bottom}.tippy-popper[x-placement^=top] [data-animation=perspective][data-state=visible]{-webkit-transform:translateY(-10px) rotateX(0);transform:translateY(-10px) rotateX(0)}.tippy-popper[x-placement^=top] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:translateY(0) rotateX(60deg);transform:translateY(0) rotateX(60deg)}.tippy-popper[x-placement^=top] [data-animation=fade][data-state=visible]{-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=shift-away][data-state=visible]{-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=shift-away][data-state=hidden]{opacity:0;-webkit-transform:translateY(0);transform:translateY(0)}.tippy-popper[x-placement^=top] [data-animation=scale][data-state=visible]{-webkit-transform:translateY(-10px) scale(1);transform:translateY(-10px) scale(1)}.tippy-popper[x-placement^=top] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateY(0) scale(.5);transform:translateY(0) scale(.5)}.tippy-popper[x-placement^=bottom] .tippy-backdrop{border-radius:0 0 30% 30%}.tippy-popper[x-placement^=bottom] .tippy-roundarrow{top:-8px;-webkit-transform-origin:50% 100%;transform-origin:50% 100%}.tippy-popper[x-placement^=bottom] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(0);transform:rotate(0)}.tippy-popper[x-placement^=bottom] .tippy-arrow{border-bottom:8px solid #333;border-right:8px solid transparent;border-left:8px solid transparent;top:-7px;margin:0 6px;-webkit-transform-origin:50% 100%;transform-origin:50% 100%}.tippy-popper[x-placement^=bottom] .tippy-backdrop{-webkit-transform-origin:0 -50%;transform-origin:0 -50%}.tippy-popper[x-placement^=bottom] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(1) translate(-50%,-45%);transform:scale(1) translate(-50%,-45%)}.tippy-popper[x-placement^=bottom] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(.2) translate(-50%);transform:scale(.2) translate(-50%);opacity:0}.tippy-popper[x-placement^=bottom] [data-animation=shift-toward][data-state=visible]{-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateY(20px);transform:translateY(20px)}.tippy-popper[x-placement^=bottom] [data-animation=perspective]{-webkit-transform-origin:top;transform-origin:top}.tippy-popper[x-placement^=bottom] [data-animation=perspective][data-state=visible]{-webkit-transform:translateY(10px) rotateX(0);transform:translateY(10px) rotateX(0)}.tippy-popper[x-placement^=bottom] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:translateY(0) rotateX(-60deg);transform:translateY(0) rotateX(-60deg)}.tippy-popper[x-placement^=bottom] [data-animation=fade][data-state=visible]{-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=shift-away][data-state=visible]{-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=shift-away][data-state=hidden]{opacity:0;-webkit-transform:translateY(0);transform:translateY(0)}.tippy-popper[x-placement^=bottom] [data-animation=scale][data-state=visible]{-webkit-transform:translateY(10px) scale(1);transform:translateY(10px) scale(1)}.tippy-popper[x-placement^=bottom] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateY(0) scale(.5);transform:translateY(0) scale(.5)}.tippy-popper[x-placement^=left] .tippy-backdrop{border-radius:50% 0 0 50%}.tippy-popper[x-placement^=left] .tippy-roundarrow{right:-16px;-webkit-transform-origin:33.33333333% 50%;transform-origin:33.33333333% 50%}.tippy-popper[x-placement^=left] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(90deg);transform:rotate(90deg)}.tippy-popper[x-placement^=left] .tippy-arrow{border-left:8px solid #333;border-top:8px solid transparent;border-bottom:8px solid transparent;right:-7px;margin:3px 0;-webkit-transform-origin:0 50%;transform-origin:0 50%}.tippy-popper[x-placement^=left] .tippy-backdrop{-webkit-transform-origin:50% 0;transform-origin:50% 0}.tippy-popper[x-placement^=left] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(1) translate(-50%,-50%);transform:scale(1) translate(-50%,-50%)}.tippy-popper[x-placement^=left] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(.2) translate(-75%,-50%);transform:scale(.2) translate(-75%,-50%);opacity:0}.tippy-popper[x-placement^=left] [data-animation=shift-toward][data-state=visible]{-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateX(-20px);transform:translateX(-20px)}.tippy-popper[x-placement^=left] [data-animation=perspective]{-webkit-transform-origin:right;transform-origin:right}.tippy-popper[x-placement^=left] [data-animation=perspective][data-state=visible]{-webkit-transform:translateX(-10px) rotateY(0);transform:translateX(-10px) rotateY(0)}.tippy-popper[x-placement^=left] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:translateX(0) rotateY(-60deg);transform:translateX(0) rotateY(-60deg)}.tippy-popper[x-placement^=left] [data-animation=fade][data-state=visible]{-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=shift-away][data-state=visible]{-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=shift-away][data-state=hidden]{opacity:0;-webkit-transform:translateX(0);transform:translateX(0)}.tippy-popper[x-placement^=left] [data-animation=scale][data-state=visible]{-webkit-transform:translateX(-10px) scale(1);transform:translateX(-10px) scale(1)}.tippy-popper[x-placement^=left] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateX(0) scale(.5);transform:translateX(0) scale(.5)}.tippy-popper[x-placement^=right] .tippy-backdrop{border-radius:0 50% 50% 0}.tippy-popper[x-placement^=right] .tippy-roundarrow{left:-16px;-webkit-transform-origin:66.66666666% 50%;transform-origin:66.66666666% 50%}.tippy-popper[x-placement^=right] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.tippy-popper[x-placement^=right] .tippy-arrow{border-right:8px solid #333;border-top:8px solid transparent;border-bottom:8px solid transparent;left:-7px;margin:3px 0;-webkit-transform-origin:100% 50%;transform-origin:100% 50%}.tippy-popper[x-placement^=right] .tippy-backdrop{-webkit-transform-origin:-50% 0;transform-origin:-50% 0}.tippy-popper[x-placement^=right] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(1) translate(-50%,-50%);transform:scale(1) translate(-50%,-50%)}.tippy-popper[x-placement^=right] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(.2) translate(-25%,-50%);transform:scale(.2) translate(-25%,-50%);opacity:0}.tippy-popper[x-placement^=right] [data-animation=shift-toward][data-state=visible]{-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateX(20px);transform:translateX(20px)}.tippy-popper[x-placement^=right] [data-animation=perspective]{-webkit-transform-origin:left;transform-origin:left}.tippy-popper[x-placement^=right] [data-animation=perspective][data-state=visible]{-webkit-transform:translateX(10px) rotateY(0);transform:translateX(10px) rotateY(0)}.tippy-popper[x-placement^=right] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:translateX(0) rotateY(60deg);transform:translateX(0) rotateY(60deg)}.tippy-popper[x-placement^=right] [data-animation=fade][data-state=visible]{-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=shift-away][data-state=visible]{-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=shift-away][data-state=hidden]{opacity:0;-webkit-transform:translateX(0);transform:translateX(0)}.tippy-popper[x-placement^=right] [data-animation=scale][data-state=visible]{-webkit-transform:translateX(10px) scale(1);transform:translateX(10px) scale(1)}.tippy-popper[x-placement^=right] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateX(0) scale(.5);transform:translateX(0) scale(.5)}.tippy-tooltip{position:relative;color:#fff;border-radius:4px;font-size:.9rem;padding:.3rem .6rem;max-width:350px;text-align:center;will-change:transform;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;background-color:#333}.tippy-tooltip[data-size=small]{padding:.2rem .4rem;font-size:.75rem}.tippy-tooltip[data-size=large]{padding:.4rem .8rem;font-size:1rem}.tippy-tooltip[data-animatefill]{overflow:hidden;background-color:transparent}.tippy-tooltip[data-interactive],.tippy-tooltip[data-interactive] path{pointer-events:auto}.tippy-tooltip[data-inertia][data-state=visible]{transition-timing-function:cubic-bezier(.53,2,.36,.85)}.tippy-tooltip[data-inertia][data-state=hidden]{transition-timing-function:ease}.tippy-arrow,.tippy-roundarrow{position:absolute;width:0;height:0}.tippy-roundarrow{width:24px;height:8px;fill:#333;pointer-events:none}.tippy-backdrop{position:absolute;will-change:transform;background-color:#333;border-radius:50%;width:calc(110% + 2rem);left:50%;top:50%;z-index:-1;transition:all cubic-bezier(.46,.1,.52,.98);-webkit-backface-visibility:hidden;backface-visibility:hidden}.tippy-backdrop:after{content:"";float:left;padding-top:100%}.tippy-backdrop+.tippy-content{transition-property:opacity;will-change:opacity}.tippy-backdrop+.tippy-content[data-state=visible]{opacity:1}.tippy-backdrop+.tippy-content[data-state=hidden]{opacity:0}',$e='3.4.0',et='undefined'!=typeof window,tt=et?navigator:{},rt=et?window:{},at=('MutationObserver'in rt),pt=/MSIE |Trident\//.test(tt.userAgent),ot=/iPhone|iPad|iPod/.test(tt.platform)&&!rt.MSStream,it=('ontouchstart'in rt),nt={a11y:!0,allowHTML:!0,animateFill:!0,animation:'shift-away',appendTo:function(){return document.body},aria:'describedby',arrow:!1,arrowTransform:'',arrowType:'sharp',autoFocus:!0,boundary:'scrollParent',content:'',delay:[0,20],distance:10,duration:[325,275],flip:!0,flipBehavior:'flip',followCursor:!1,hideOnClick:!0,inertia:!1,interactive:!1,interactiveBorder:2,interactiveDebounce:0,lazy:!0,livePlacement:!0,maxWidth:'',multiple:!1,offset:0,onHidden:function(){},onHide:function(){},onMount:function(){},onShow:function(){},onShown:function(){},performance:!1,placement:'top',popperOptions:{},shouldPopperHideOnBlur:function(){return!0},showOnInit:!1,size:'regular',sticky:!1,target:'',theme:'dark',touch:!0,touchHold:!1,trigger:'mouseenter focus',updateDuration:200,wait:null,zIndex:9999},st=['arrow','arrowType','distance','flip','flipBehavior','offset','placement','popperOptions'],lt='undefined'!=typeof window&&'undefined'!=typeof document,dt=['Edge','Trident','Firefox'],ct=0,mt=0;mt<dt.length;mt+=1)if(lt&&0<=navigator.userAgent.indexOf(dt[mt])){ct=1;break}var i=lt&&window.Promise,ft=i?function(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then(function(){t=!1,e()}))}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},ct))}},ht=lt&&!!(window.MSInputMethodContext&&document.documentMode),bt=lt&&/MSIE 10/.test(navigator.userAgent),yt=function(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')},ut=function(){function e(e,t){for(var r,a=0;a<t.length;a++)r=t[a],r.enumerable=r.enumerable||!1,r.configurable=!0,'value'in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),gt=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},xt=Object.assign||function(e){for(var t,r=1;r<arguments.length;r++)for(var a in t=arguments[r],t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},wt=lt&&/Firefox/i.test(navigator.userAgent),vt=['auto-start','auto','auto-end','top-start','top','top-end','right-start','right','right-end','bottom-end','bottom','bottom-start','left-end','left','left-start'],kt=vt.slice(3),Et={FLIP:'flip',CLOCKWISE:'clockwise',COUNTERCLOCKWISE:'counterclockwise'},Ot=function(){function t(r,a){var p=this,o=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};yt(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(p.update)},this.update=ft(this.update.bind(this)),this.options=xt({},t.Defaults,o),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=r&&r.jquery?r[0]:r,this.popper=a&&a.jquery?a[0]:a,this.options.modifiers={},Object.keys(xt({},t.Defaults.modifiers,o.modifiers)).forEach(function(e){p.options.modifiers[e]=xt({},t.Defaults.modifiers[e]||{},o.modifiers?o.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return xt({name:e},p.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(t){t.enabled&&e(t.onLoad)&&t.onLoad(p.reference,p.popper,p.options,t,p.state)}),this.update();var i=this.options.eventsEnabled;i&&this.enableEventListeners(),this.state.eventsEnabled=i}return ut(t,[{key:'update',value:function(){return P.call(this)}},{key:'destroy',value:function(){return I.call(this)}},{key:'enableEventListeners',value:function(){return B.call(this)}},{key:'disableEventListeners',value:function(){return R.call(this)}}]),t}();Ot.Utils=('undefined'==typeof window?global:window).PopperUtils,Ot.placements=vt,Ot.Defaults={placement:'bottom',positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,r=t.split('-')[0],a=t.split('-')[1];if(a){var p=e.offsets,o=p.reference,i=p.popper,n=-1!==['bottom','top'].indexOf(r),s=n?'left':'top',l=n?'width':'height',d={start:gt({},s,o[s]),end:gt({},s,o[s]+o[l]-i[l])};e.offsets.popper=xt({},i,d[a])}return e}},offset:{order:200,enabled:!0,fn:Q,offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var r=t.boundariesElement||o(e.instance.popper);e.instance.reference===r&&(r=o(r));var a=X('transform'),p=e.instance.popper.style,i=p.top,n=p.left,s=p[a];p.top='',p.left='',p[a]='';var l=v(e.instance.popper,e.instance.reference,t.padding,r,e.positionFixed);p.top=i,p.left=n,p[a]=s,t.boundaries=l;var d=t.priority,c=e.offsets.popper,m={primary:function(e){var r=c[e];return c[e]<l[e]&&!t.escapeWithReference&&(r=Je(c[e],l[e])),gt({},e,r)},secondary:function(e){var r='right'===e?'left':'top',a=c[r];return c[e]>l[e]&&!t.escapeWithReference&&(a=Ke(c[r],l[e]-('right'===e?c.width:c.height))),gt({},r,a)}};return d.forEach(function(e){var t=-1===['left','top'].indexOf(e)?'secondary':'primary';c=xt({},c,m[t](e))}),e.offsets.popper=c,e},priority:['left','right','top','bottom'],padding:5,boundariesElement:'scrollParent'},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,r=t.popper,a=t.reference,p=e.placement.split('-')[0],o=Ge,i=-1!==['top','bottom'].indexOf(p),n=i?'right':'bottom',s=i?'left':'top',l=i?'width':'height';return r[n]<o(a[s])&&(e.offsets.popper[s]=o(a[s])-r[l]),r[s]>o(a[n])&&(e.offsets.popper[s]=o(a[n])),e}},arrow:{order:500,enabled:!0,fn:function(e,r){var a;if(!V(e.instance.modifiers,'arrow','keepTogether'))return e;var p=r.element;if('string'==typeof p){if(p=e.instance.popper.querySelector(p),!p)return e;}else if(!e.instance.popper.contains(p))return console.warn('WARNING: `arrow.element` must be child of its popper element!'),e;var o=e.placement.split('-')[0],i=e.offsets,n=i.popper,s=i.reference,l=-1!==['left','right'].indexOf(o),d=l?'height':'width',c=l?'Top':'Left',m=c.toLowerCase(),f=l?'left':'top',h=l?'bottom':'right',y=C(p)[d];s[h]-y<n[m]&&(e.offsets.popper[m]-=n[m]-(s[h]-y)),s[m]+y>n[h]&&(e.offsets.popper[m]+=s[m]+y-n[h]),e.offsets.popper=b(e.offsets.popper);var u=s[m]+s[d]/2-y/2,g=t(e.instance.popper),x=parseFloat(g['margin'+c],10),w=parseFloat(g['border'+c+'Width'],10),v=u-e.offsets.popper[m]-x-w;return v=Je(Ke(n[d]-y,v),0),e.arrowElement=p,e.offsets.arrow=(a={},gt(a,m,Qe(v)),gt(a,f,''),a),e},element:'[x-arrow]'},flip:{order:600,enabled:!0,fn:function(e,t){if(D(e.instance.modifiers,'inner'))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var r=v(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement,e.positionFixed),a=e.placement.split('-')[0],p=L(a),o=e.placement.split('-')[1]||'',i=[];switch(t.behavior){case Et.FLIP:i=[a,p];break;case Et.CLOCKWISE:i=j(a);break;case Et.COUNTERCLOCKWISE:i=j(a,!0);break;default:i=t.behavior;}return i.forEach(function(n,s){if(a!==n||i.length===s+1)return e;a=e.placement.split('-')[0],p=L(a);var l=e.offsets.popper,d=e.offsets.reference,c=Ge,m='left'===a&&c(l.right)>c(d.left)||'right'===a&&c(l.left)<c(d.right)||'top'===a&&c(l.bottom)>c(d.top)||'bottom'===a&&c(l.top)<c(d.bottom),f=c(l.left)<c(r.left),h=c(l.right)>c(r.right),b=c(l.top)<c(r.top),y=c(l.bottom)>c(r.bottom),u='left'===a&&f||'right'===a&&h||'top'===a&&b||'bottom'===a&&y,g=-1!==['top','bottom'].indexOf(a),x=!!t.flipVariations&&(g&&'start'===o&&f||g&&'end'===o&&h||!g&&'start'===o&&b||!g&&'end'===o&&y);(m||u||x)&&(e.flipped=!0,(m||u)&&(a=i[s+1]),x&&(o=q(o)),e.placement=a+(o?'-'+o:''),e.offsets.popper=xt({},e.offsets.popper,T(e.instance.popper,e.offsets.reference,e.placement)),e=Y(e.instance.modifiers,e,'flip'))}),e},behavior:'flip',padding:5,boundariesElement:'viewport'},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,r=t.split('-')[0],a=e.offsets,p=a.popper,o=a.reference,i=-1!==['left','right'].indexOf(r),n=-1===['top','left'].indexOf(r);return p[i?'left':'top']=o[r]-(n?p[i?'width':'height']:0),e.placement=L(t),e.offsets.popper=b(p),e}},hide:{order:800,enabled:!0,fn:function(e){if(!V(e.instance.modifiers,'hide','preventOverflow'))return e;var t=e.offsets.reference,r=S(e.instance.modifiers,function(e){return'preventOverflow'===e.name}).boundaries;if(t.bottom<r.top||t.left>r.right||t.top>r.bottom||t.right<r.left){if(!0===e.hide)return e;e.hide=!0,e.attributes['x-out-of-boundaries']=''}else{if(!1===e.hide)return e;e.hide=!1,e.attributes['x-out-of-boundaries']=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var r=t.x,a=t.y,p=e.offsets.popper,i=S(e.instance.modifiers,function(e){return'applyStyle'===e.name}).gpuAcceleration;void 0!==i&&console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');var n=void 0===i?t.gpuAcceleration:i,s=o(e.instance.popper),l=u(s),d={position:p.position},c=U(e,2>window.devicePixelRatio||!wt),m='bottom'===r?'top':'bottom',f='right'===a?'left':'right',h=X('transform'),b=void 0,y=void 0;if(y='bottom'==m?'HTML'===s.nodeName?-s.clientHeight+c.bottom:-l.height+c.bottom:c.top,b='right'==f?'HTML'===s.nodeName?-s.clientWidth+c.right:-l.width+c.right:c.left,n&&h)d[h]='translate3d('+b+'px, '+y+'px, 0)',d[m]=0,d[f]=0,d.willChange='transform';else{var g='bottom'==m?-1:1,x='right'==f?-1:1;d[m]=y*g,d[f]=b*x,d.willChange=m+', '+f}var w={"x-placement":e.placement};return e.attributes=xt({},w,e.attributes),e.styles=xt({},d,e.styles),e.arrowStyles=xt({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:'bottom',y:'right'},applyStyle:{order:900,enabled:!0,fn:function(e){return F(e.instance.popper,e.styles),_(e.instance.popper,e.attributes),e.arrowElement&&Object.keys(e.arrowStyles).length&&F(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,r,a,p){var o=O(p,t,e,r.positionFixed),i=E(r.placement,o,t,e,r.modifiers.flip.boundariesElement,r.modifiers.flip.padding);return t.setAttribute('x-placement',i),F(t,{position:r.positionFixed?'fixed':'absolute'}),r},gpuAcceleration:void 0}}};var Ct={POPPER:'.tippy-popper',TOOLTIP:'.tippy-tooltip',CONTENT:'.tippy-content',BACKDROP:'.tippy-backdrop',ARROW:'.tippy-arrow',ROUND_ARROW:'.tippy-roundarrow'},Lt=et?Element.prototype:{},Tt=Lt.matches||Lt.matchesSelector||Lt.webkitMatchesSelector||Lt.mozMatchesSelector||Lt.msMatchesSelector,St={x:!0},At=!1,Yt=0,Pt=Object.keys(nt),Dt=Object.assign||function(e){for(var t,r=1;r<arguments.length;r++)for(var a in t=arguments[r],t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},Xt={translate:/translateX?Y?\(([^)]+)\)/,scale:/scaleX?Y?\(([^)]+)\)/},It=1,Nt=!1;je.version=$e,je.defaults=nt,je.one=function(e,t){return je(e,t,!0).instances[0]},je.setDefaults=function(e){Object.keys(e).forEach(function(t){nt[t]=e[t]})},je.disableAnimations=function(){je.setDefaults({duration:0,updateDuration:0,animateFill:!1})},je.hideAllPoppers=ge,je.useCapture=function(){};return et&&setTimeout(function(){J(document.querySelectorAll('[data-tippy]')).forEach(function(e){var t=e.getAttribute('data-tippy');t&&je(e,{content:t})})}),function(e){if(at){var t=document.createElement('style');t.type='text/css',t.textContent=e,document.head.insertBefore(t,document.head.firstChild)}}(Ze),je});
//# sourceMappingURL=tippy.all.min.js.map

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Sweetalert2=t()}(this,function(){"use strict";function V(e){return(V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e,t,n){return(o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()?Reflect.construct:function(e,t,n){var o=[null];o.push.apply(o,t);var i=new(Function.bind.apply(e,o));return n&&u(i,n.prototype),i}).apply(null,arguments)}function l(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e,t,n){return(d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=c(e)););return e}(e,t);if(o){var i=Object.getOwnPropertyDescriptor(o,t);return i.get?i.get.call(n):i.value}})(e,t,n||e)}var t="SweetAlert2:",p=function(e){return Array.prototype.slice.call(e)},q=function(e){console.warn("".concat(t," ").concat(e))},H=function(e){console.error("".concat(t," ").concat(e))},i=[],j=function(e){return"function"==typeof e?e():e},R=function(e){return e&&Promise.resolve(e)===e},e=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),n=function(e){var t={};for(var n in e)t[e[n]]="swal2-"+e[n];return t},I=n(["container","shown","height-auto","iosfix","popup","modal","no-backdrop","toast","toast-shown","toast-column","fade","show","hide","noanimation","close","title","header","content","actions","confirm","cancel","footer","icon","icon-text","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","validation-message","progresssteps","activeprogressstep","progresscircle","progressline","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl"]),f=n(["success","warning","info","question","error"]),m={previousBodyPadding:null},g=function(e,t){return e.classList.contains(t)},N=function(e){if(e.focus(),"file"!==e.type){var t=e.value;e.value="",e.value=t}},h=function(e,t,n){e&&t&&("string"==typeof t&&(t=t.split(/\s+/).filter(Boolean)),t.forEach(function(t){e.forEach?e.forEach(function(e){n?e.classList.add(t):e.classList.remove(t)}):n?e.classList.add(t):e.classList.remove(t)}))},D=function(e,t){h(e,t,!0)},U=function(e,t){h(e,t,!1)},_=function(e,t){for(var n=0;n<e.childNodes.length;n++)if(g(e.childNodes[n],t))return e.childNodes[n]},z=function(e){e.style.opacity="",e.style.display=e.id===I.content?"block":"flex"},W=function(e){e.style.opacity="",e.style.display="none"},K=function(e){return e&&(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},v=function(){return document.body.querySelector("."+I.container)},b=function(e){var t=v();return t?t.querySelector("."+e):null},y=function(){return b(I.popup)},w=function(){var e=y();return p(e.querySelectorAll("."+I.icon))},C=function(){return b(I.title)},k=function(){return b(I.content)},B=function(){return b(I.image)},x=function(){return b(I.progresssteps)},A=function(){return b(I["validation-message"])},P=function(){return b(I.confirm)},S=function(){return b(I.cancel)},L=function(){return b(I.actions)},F=function(){return b(I.footer)},Z=function(){return b(I.close)},Q=function(){var e=p(y().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort(function(e,t){return e=parseInt(e.getAttribute("tabindex")),(t=parseInt(t.getAttribute("tabindex")))<e?1:e<t?-1:0}),t=p(y().querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable], audio[controls], video[controls]')).filter(function(e){return"-1"!==e.getAttribute("tabindex")});return function(e){for(var t=[],n=0;n<e.length;n++)-1===t.indexOf(e[n])&&t.push(e[n]);return t}(e.concat(t)).filter(function(e){return K(e)})},E=function(){return!T()&&!document.body.classList.contains(I["no-backdrop"])},T=function(){return document.body.classList.contains(I["toast-shown"])},O=function(){return"undefined"==typeof window||"undefined"==typeof document},M='\n <div aria-labelledby="'.concat(I.title,'" aria-describedby="').concat(I.content,'" class="').concat(I.popup,'" tabindex="-1">\n   <div class="').concat(I.header,'">\n     <ul class="').concat(I.progresssteps,'"></ul>\n     <div class="').concat(I.icon," ").concat(f.error,'">\n       <span class="swal2-x-mark"><span class="swal2-x-mark-line-left"></span><span class="swal2-x-mark-line-right"></span></span>\n     </div>\n     <div class="').concat(I.icon," ").concat(f.question,'">\n       <span class="').concat(I["icon-text"],'">?</span>\n      </div>\n     <div class="').concat(I.icon," ").concat(f.warning,'">\n       <span class="').concat(I["icon-text"],'">!</span>\n      </div>\n     <div class="').concat(I.icon," ").concat(f.info,'">\n       <span class="').concat(I["icon-text"],'">i</span>\n      </div>\n     <div class="').concat(I.icon," ").concat(f.success,'">\n       <div class="swal2-success-circular-line-left"></div>\n       <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n       <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n       <div class="swal2-success-circular-line-right"></div>\n     </div>\n     <img class="').concat(I.image,'" />\n     <h2 class="').concat(I.title,'" id="').concat(I.title,'"></h2>\n     <button type="button" class="').concat(I.close,'">×</button>\n   </div>\n   <div class="').concat(I.content,'">\n     <div id="').concat(I.content,'"></div>\n     <input class="').concat(I.input,'" />\n     <input type="file" class="').concat(I.file,'" />\n     <div class="').concat(I.range,'">\n       <input type="range" />\n       <output></output>\n     </div>\n     <select class="').concat(I.select,'"></select>\n     <div class="').concat(I.radio,'"></div>\n     <label for="').concat(I.checkbox,'" class="').concat(I.checkbox,'">\n       <input type="checkbox" />\n       <span class="').concat(I.label,'"></span>\n     </label>\n     <textarea class="').concat(I.textarea,'"></textarea>\n     <div class="').concat(I["validation-message"],'" id="').concat(I["validation-message"],'"></div>\n   </div>\n   <div class="').concat(I.actions,'">\n     <button type="button" class="').concat(I.confirm,'">OK</button>\n     <button type="button" class="').concat(I.cancel,'">Cancel</button>\n   </div>\n   <div class="').concat(I.footer,'">\n   </div>\n </div>\n').replace(/(^|\n)\s*/g,""),Y=function(e){var t=v();if(t&&(t.parentNode.removeChild(t),U([document.documentElement,document.body],[I["no-backdrop"],I["toast-shown"],I["has-column"]])),!O()){var n=document.createElement("div");n.className=I.container,n.innerHTML=M;var o="string"==typeof e.target?document.querySelector(e.target):e.target;o.appendChild(n);var i,r=y(),a=k(),s=_(a,I.input),c=_(a,I.file),u=a.querySelector(".".concat(I.range," input")),l=a.querySelector(".".concat(I.range," output")),d=_(a,I.select),p=a.querySelector(".".concat(I.checkbox," input")),f=_(a,I.textarea);r.setAttribute("role",e.toast?"alert":"dialog"),r.setAttribute("aria-live",e.toast?"polite":"assertive"),e.toast||r.setAttribute("aria-modal","true"),"rtl"===window.getComputedStyle(o).direction&&D(v(),I.rtl);var m=function(e){Se.isVisible()&&i!==e.target.value&&Se.resetValidationMessage(),i=e.target.value};return s.oninput=m,c.onchange=m,d.onchange=m,p.onchange=m,f.oninput=m,u.oninput=function(e){m(e),l.value=u.value},u.onchange=function(e){m(e),u.nextSibling.value=u.value},r}H("SweetAlert2 requires document to initialize")},$=function(e,t){if(!e)return W(t);if(e instanceof HTMLElement)t.appendChild(e);else if("object"===V(e))if(t.innerHTML="",0 in e)for(var n=0;n in e;n++)t.appendChild(e[n].cloneNode(!0));else t.appendChild(e.cloneNode(!0));else e&&(t.innerHTML=e);z(t)},J=function(){if(O())return!1;var e=document.createElement("div"),t={WebkitAnimation:"webkitAnimationEnd",OAnimation:"oAnimationEnd oanimationend",animation:"animationend"};for(var n in t)if(t.hasOwnProperty(n)&&void 0!==e.style[n])return t[n];return!1}(),X=function(e){var t=L(),n=P(),o=S();if(e.showConfirmButton||e.showCancelButton?z(t):W(t),e.showCancelButton?o.style.display="inline-block":W(o),e.showConfirmButton?n.style.removeProperty("display"):W(n),n.innerHTML=e.confirmButtonText,o.innerHTML=e.cancelButtonText,n.setAttribute("aria-label",e.confirmButtonAriaLabel),o.setAttribute("aria-label",e.cancelButtonAriaLabel),n.className=I.confirm,D(n,e.confirmButtonClass),o.className=I.cancel,D(o,e.cancelButtonClass),e.buttonsStyling){D([n,o],I.styled),e.confirmButtonColor&&(n.style.backgroundColor=e.confirmButtonColor),e.cancelButtonColor&&(o.style.backgroundColor=e.cancelButtonColor);var i=window.getComputedStyle(n).getPropertyValue("background-color");n.style.borderLeftColor=i,n.style.borderRightColor=i}else U([n,o],I.styled),n.style.backgroundColor=n.style.borderLeftColor=n.style.borderRightColor="",o.style.backgroundColor=o.style.borderLeftColor=o.style.borderRightColor=""},G=function(e){var t=k().querySelector("#"+I.content);e.html?$(e.html,t):e.text?(t.textContent=e.text,z(t)):W(t)},ee=function(e){for(var t=w(),n=0;n<t.length;n++)W(t[n]);if(e.type)if(-1!==Object.keys(f).indexOf(e.type)){var o=Se.getPopup().querySelector(".".concat(I.icon,".").concat(f[e.type]));z(o),e.animation&&D(o,"swal2-animate-".concat(e.type,"-icon"))}else H('Unknown type! Expected "success", "error", "warning", "info" or "question", got "'.concat(e.type,'"'))},te=function(e){var t=B();e.imageUrl?(t.setAttribute("src",e.imageUrl),t.setAttribute("alt",e.imageAlt),z(t),e.imageWidth?t.setAttribute("width",e.imageWidth):t.removeAttribute("width"),e.imageHeight?t.setAttribute("height",e.imageHeight):t.removeAttribute("height"),t.className=I.image,e.imageClass&&D(t,e.imageClass)):W(t)},ne=function(i){var r=x(),a=parseInt(null===i.currentProgressStep?Se.getQueueStep():i.currentProgressStep,10);i.progressSteps&&i.progressSteps.length?(z(r),r.innerHTML="",a>=i.progressSteps.length&&q("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),i.progressSteps.forEach(function(e,t){var n=document.createElement("li");if(D(n,I.progresscircle),n.innerHTML=e,t===a&&D(n,I.activeprogressstep),r.appendChild(n),t!==i.progressSteps.length-1){var o=document.createElement("li");D(o,I.progressline),i.progressStepsDistance&&(o.style.width=i.progressStepsDistance),r.appendChild(o)}})):W(r)},oe=function(e){var t=C();e.titleText?t.innerText=e.titleText:e.title&&("string"==typeof e.title&&(e.title=e.title.split("\n").join("<br />")),$(e.title,t))};var ie=[],re=function(){var e=y();e||Se.fire(""),e=y();var t=L(),n=P(),o=S();z(t),z(n),D([e,t],I.loading),n.disabled=!0,o.disabled=!0,e.setAttribute("data-loading",!0),e.setAttribute("aria-busy",!0),e.focus()},ae={},se={title:"",titleText:"",text:"",html:"",footer:"",type:null,toast:!1,customClass:"",customContainerClass:"",target:"body",backdrop:!0,animation:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showCancelButton:!1,preConfirm:null,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:null,confirmButtonClass:"",cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:null,cancelButtonClass:"",buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusCancel:!1,showCloseButton:!1,closeButtonAriaLabel:"Close this dialog",showLoaderOnConfirm:!1,imageUrl:null,imageWidth:null,imageHeight:null,imageAlt:"",imageClass:"",timer:null,width:null,padding:null,background:null,input:null,inputPlaceholder:"",inputValue:"",inputOptions:{},inputAutoTrim:!0,inputClass:"",inputAttributes:{},inputValidator:null,validationMessage:null,grow:!1,position:"center",progressSteps:[],currentProgressStep:null,progressStepsDistance:null,onBeforeOpen:null,onAfterClose:null,onOpen:null,onClose:null},ce=[],ue=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusCancel","heightAuto","keydownListenerCapture"],le=function(e){return se.hasOwnProperty(e)},de=function(e){return-1!==ce.indexOf(e)},pe=Object.freeze({isValidParameter:le,isUpdatableParameter:function(e){return-1!==["title","titleText","text","html","type","showConfirmButton","showCancelButton","confirmButtonText","confirmButtonAriaLabel","confirmButtonColor","confirmButtonClass","cancelButtonText","cancelButtonAriaLabel","cancelButtonColor","cancelButtonClass","buttonsStyling","reverseButtons","imageUrl","imageWidth","imageHeigth","imageAlt","imageClass","progressSteps","currentProgressStep"].indexOf(e)},isDeprecatedParameter:de,argsToParams:function(n){var o={};switch(V(n[0])){case"object":s(o,n[0]);break;default:["title","html","type"].forEach(function(e,t){switch(V(n[t])){case"string":o[e]=n[t];break;case"undefined":break;default:H("Unexpected type of ".concat(e,'! Expected "string", got ').concat(V(n[t])))}})}return o},isVisible:function(){return!!y()},clickConfirm:function(){return P().click()},clickCancel:function(){return S().click()},getContainer:v,getPopup:y,getTitle:C,getContent:k,getImage:B,getIcons:w,getCloseButton:Z,getActions:L,getConfirmButton:P,getCancelButton:S,getFooter:F,getFocusableElements:Q,getValidationMessage:A,isLoading:function(){return y().hasAttribute("data-loading")},fire:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return o(this,t)},mixin:function(i){return function(e){function t(){return a(this,t),l(this,c(t).apply(this,arguments))}var n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,e),r((n=t).prototype,[{key:"_main",value:function(e){return d(c(t.prototype),"_main",this).call(this,s({},i,e))}}]),o&&r(n,o),t}(this)},queue:function(e){var r=this;ie=e;var a=function(){ie=[],document.body.removeAttribute("data-swal2-queue-step")},s=[];return new Promise(function(i){!function t(n,o){n<ie.length?(document.body.setAttribute("data-swal2-queue-step",n),r.fire(ie[n]).then(function(e){void 0!==e.value?(s.push(e.value),t(n+1,o)):(a(),i({dismiss:e.dismiss}))})):(a(),i({value:s}))}(0)})},getQueueStep:function(){return document.body.getAttribute("data-swal2-queue-step")},insertQueueStep:function(e,t){return t&&t<ie.length?ie.splice(t,0,e):ie.push(e)},deleteQueueStep:function(e){void 0!==ie[e]&&ie.splice(e,1)},showLoading:re,enableLoading:re,getTimerLeft:function(){return ae.timeout&&ae.timeout.getTimerLeft()},stopTimer:function(){return ae.timeout&&ae.timeout.stop()},resumeTimer:function(){return ae.timeout&&ae.timeout.start()},toggleTimer:function(){var e=ae.timeout;return e&&(e.running?e.stop():e.start())},increaseTimer:function(e){return ae.timeout&&ae.timeout.increase(e)},isTimerRunning:function(){return ae.timeout&&ae.timeout.isRunning()}}),fe={promise:new WeakMap,innerParams:new WeakMap,domCache:new WeakMap};function me(){var e=fe.innerParams.get(this),t=fe.domCache.get(this);e.showConfirmButton||(W(t.confirmButton),e.showCancelButton||W(t.actions)),U([t.popup,t.actions],I.loading),t.popup.removeAttribute("aria-busy"),t.popup.removeAttribute("data-loading"),t.confirmButton.disabled=!1,t.cancelButton.disabled=!1}var ge=function(){null===m.previousBodyPadding&&document.body.scrollHeight>window.innerHeight&&(m.previousBodyPadding=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=m.previousBodyPadding+function(){if("ontouchstart"in window||navigator.msMaxTouchPoints)return 0;var e=document.createElement("div");e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}()+"px")},he=function(){return!!window.MSInputMethodContext&&!!document.documentMode},ve=function(){var e=v(),t=y();e.style.removeProperty("align-items"),t.offsetTop<0&&(e.style.alignItems="flex-start")},be={swalPromiseResolve:new WeakMap};function ye(e){var t=v(),n=y(),o=fe.innerParams.get(this),i=be.swalPromiseResolve.get(this),r=o.onClose,a=o.onAfterClose;if(n){null!==r&&"function"==typeof r&&r(n),U(n,I.show),D(n,I.hide);var s=function(){T()?we(a):(new Promise(function(e){var t=window.scrollX,n=window.scrollY;ae.restoreFocusTimeout=setTimeout(function(){ae.previousActiveElement&&ae.previousActiveElement.focus?(ae.previousActiveElement.focus(),ae.previousActiveElement=null):document.body&&document.body.focus(),e()},100),void 0!==t&&void 0!==n&&window.scrollTo(t,n)}).then(function(){return we(a)}),ae.keydownTarget.removeEventListener("keydown",ae.keydownHandler,{capture:ae.keydownListenerCapture}),ae.keydownHandlerAdded=!1),t.parentNode&&t.parentNode.removeChild(t),U([document.documentElement,document.body],[I.shown,I["height-auto"],I["no-backdrop"],I["toast-shown"],I["toast-column"]]),E()&&(null!==m.previousBodyPadding&&(document.body.style.paddingRight=m.previousBodyPadding,m.previousBodyPadding=null),function(){if(g(document.body,I.iosfix)){var e=parseInt(document.body.style.top,10);U(document.body,I.iosfix),document.body.style.top="",document.body.scrollTop=-1*e}}(),"undefined"!=typeof window&&he()&&window.removeEventListener("resize",ve),p(document.body.children).forEach(function(e){e.hasAttribute("data-previous-aria-hidden")?(e.setAttribute("aria-hidden",e.getAttribute("data-previous-aria-hidden")),e.removeAttribute("data-previous-aria-hidden")):e.removeAttribute("aria-hidden")}))};J&&!g(n,I.noanimation)?n.addEventListener(J,function e(){n.removeEventListener(J,e),g(n,I.hide)&&s()}):s(),i(e||{})}}var we=function(e){null!==e&&"function"==typeof e&&setTimeout(function(){e()})};var Ce=function e(t,n){a(this,e);var o,i,r=n;this.running=!1,this.start=function(){return this.running||(this.running=!0,i=new Date,o=setTimeout(t,r)),r},this.stop=function(){return this.running&&(this.running=!1,clearTimeout(o),r-=new Date-i),r},this.increase=function(e){var t=this.running;return t&&this.stop(),r+=e,t&&this.start(),r},this.getTimerLeft=function(){return this.running&&(this.stop(),this.start()),r},this.isRunning=function(){return this.running},this.start()},ke={email:function(e,t){return/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(e)?Promise.resolve():Promise.resolve(t||"Invalid email address")},url:function(e,t){return/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/.test(e)?Promise.resolve():Promise.resolve(t||"Invalid URL")}};var Be=function(e){var t=v(),n=y();null!==e.onBeforeOpen&&"function"==typeof e.onBeforeOpen&&e.onBeforeOpen(n),e.animation?(D(n,I.show),D(t,I.fade),U(n,I.hide)):U(n,I.fade),z(n),t.style.overflowY="hidden",J&&!g(n,I.noanimation)?n.addEventListener(J,function e(){n.removeEventListener(J,e),t.style.overflowY="auto"}):t.style.overflowY="auto",D([document.documentElement,document.body,t],I.shown),e.heightAuto&&e.backdrop&&!e.toast&&D([document.documentElement,document.body],I["height-auto"]),E()&&(ge(),function(){if(/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&!g(document.body,I.iosfix)){var e=document.body.scrollTop;document.body.style.top=-1*e+"px",D(document.body,I.iosfix)}}(),"undefined"!=typeof window&&he()&&(ve(),window.addEventListener("resize",ve)),p(document.body.children).forEach(function(e){e===v()||function(e,t){if("function"==typeof e.contains)return e.contains(t)}(e,v())||(e.hasAttribute("aria-hidden")&&e.setAttribute("data-previous-aria-hidden",e.getAttribute("aria-hidden")),e.setAttribute("aria-hidden","true"))}),setTimeout(function(){t.scrollTop=0})),T()||ae.previousActiveElement||(ae.previousActiveElement=document.activeElement),null!==e.onOpen&&"function"==typeof e.onOpen&&setTimeout(function(){e.onOpen(n)})};var xe,Ae=Object.freeze({hideLoading:me,disableLoading:me,getInput:function(e){var t=fe.innerParams.get(this),n=fe.domCache.get(this);if(!(e=e||t.input))return null;switch(e){case"select":case"textarea":case"file":return _(n.content,I[e]);case"checkbox":return n.popup.querySelector(".".concat(I.checkbox," input"));case"radio":return n.popup.querySelector(".".concat(I.radio," input:checked"))||n.popup.querySelector(".".concat(I.radio," input:first-child"));case"range":return n.popup.querySelector(".".concat(I.range," input"));default:return _(n.content,I.input)}},close:ye,closePopup:ye,closeModal:ye,closeToast:ye,enableButtons:function(){var e=fe.domCache.get(this);e.confirmButton.disabled=!1,e.cancelButton.disabled=!1},disableButtons:function(){var e=fe.domCache.get(this);e.confirmButton.disabled=!0,e.cancelButton.disabled=!0},enableConfirmButton:function(){fe.domCache.get(this).confirmButton.disabled=!1},disableConfirmButton:function(){fe.domCache.get(this).confirmButton.disabled=!0},enableInput:function(){var e=this.getInput();if(!e)return!1;if("radio"===e.type)for(var t=e.parentNode.parentNode.querySelectorAll("input"),n=0;n<t.length;n++)t[n].disabled=!1;else e.disabled=!1},disableInput:function(){var e=this.getInput();if(!e)return!1;if(e&&"radio"===e.type)for(var t=e.parentNode.parentNode.querySelectorAll("input"),n=0;n<t.length;n++)t[n].disabled=!0;else e.disabled=!0},showValidationMessage:function(e){var t=fe.domCache.get(this);t.validationMessage.innerHTML=e;var n=window.getComputedStyle(t.popup);t.validationMessage.style.marginLeft="-".concat(n.getPropertyValue("padding-left")),t.validationMessage.style.marginRight="-".concat(n.getPropertyValue("padding-right")),z(t.validationMessage);var o=this.getInput();o&&(o.setAttribute("aria-invalid",!0),o.setAttribute("aria-describedBy",I["validation-message"]),N(o),D(o,I.inputerror))},resetValidationMessage:function(){var e=fe.domCache.get(this);e.validationMessage&&W(e.validationMessage);var t=this.getInput();t&&(t.removeAttribute("aria-invalid"),t.removeAttribute("aria-describedBy"),U(t,I.inputerror))},getProgressSteps:function(){return fe.innerParams.get(this).progressSteps},setProgressSteps:function(e){var t=s({},fe.innerParams.get(this),{progressSteps:e});fe.innerParams.set(this,t),ne(t)},showProgressSteps:function(){var e=fe.domCache.get(this);z(e.progressSteps)},hideProgressSteps:function(){var e=fe.domCache.get(this);W(e.progressSteps)},_main:function(e){var E=this;!function(e){for(var t in e)le(t)||q('Unknown parameter "'.concat(t,'"')),e.toast&&-1!==ue.indexOf(t)&&q('The parameter "'.concat(t,'" is incompatible with toasts')),de(t)&&(n='The parameter "'.concat(t,'" is deprecated and will be removed in the next major release.'),-1===i.indexOf(n)&&(i.push(n),q(n)));var n}(e);var T=s({},se,e);!function(t){var e;t.inputValidator||Object.keys(ke).forEach(function(e){t.input===e&&(t.inputValidator=ke[e])}),(!t.target||"string"==typeof t.target&&!document.querySelector(t.target)||"string"!=typeof t.target&&!t.target.appendChild)&&(q('Target parameter is not valid, defaulting to "body"'),t.target="body"),"function"==typeof t.animation&&(t.animation=t.animation.call());var n=y(),o="string"==typeof t.target?document.querySelector(t.target):t.target;e=n&&o&&n.parentNode!==o.parentNode?Y(t):n||Y(t),t.width&&(e.style.width="number"==typeof t.width?t.width+"px":t.width),t.padding&&(e.style.padding="number"==typeof t.padding?t.padding+"px":t.padding),t.background&&(e.style.background=t.background);for(var i=window.getComputedStyle(e).getPropertyValue("background-color"),r=e.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"),a=0;a<r.length;a++)r[a].style.backgroundColor=i;var s=v(),c=Z(),u=F();if(oe(t),G(t),"string"==typeof t.backdrop?v().style.background=t.backdrop:t.backdrop||D([document.documentElement,document.body],I["no-backdrop"]),!t.backdrop&&t.allowOutsideClick&&q('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'),t.position in I?D(s,I[t.position]):(q('The "position" parameter is not valid, defaulting to "center"'),D(s,I.center)),t.grow&&"string"==typeof t.grow){var l="grow-"+t.grow;l in I&&D(s,I[l])}t.showCloseButton?(c.setAttribute("aria-label",t.closeButtonAriaLabel),z(c)):W(c),e.className=I.popup,t.toast?(D([document.documentElement,document.body],I["toast-shown"]),D(e,I.toast)):D(e,I.modal),t.customClass&&D(e,t.customClass),t.customContainerClass&&D(s,t.customContainerClass),ne(t),ee(t),te(t),X(t),$(t.footer,u),!0===t.animation?U(e,I.noanimation):D(e,I.noanimation),t.showLoaderOnConfirm&&!t.preConfirm&&q("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request")}(T),Object.freeze(T),fe.innerParams.set(this,T),ae.timeout&&(ae.timeout.stop(),delete ae.timeout),clearTimeout(ae.restoreFocusTimeout);var O={popup:y(),container:v(),content:k(),actions:L(),confirmButton:P(),cancelButton:S(),closeButton:Z(),validationMessage:A(),progressSteps:x()};fe.domCache.set(this,O);var M=this.constructor;return new Promise(function(e){var n=function(e){E.closePopup({value:e})},s=function(e){E.closePopup({dismiss:e})};be.swalPromiseResolve.set(E,e),T.timer&&(ae.timeout=new Ce(function(){s("timer"),delete ae.timeout},T.timer)),T.input&&setTimeout(function(){var e=E.getInput();e&&N(e)},0);for(var c=function(t){T.showLoaderOnConfirm&&M.showLoading(),T.preConfirm?(E.resetValidationMessage(),Promise.resolve().then(function(){return T.preConfirm(t,T.validationMessage)}).then(function(e){K(O.validationMessage)||!1===e?E.hideLoading():n(e||t)})):n(t)},t=function(e){var t=e.target,n=O.confirmButton,o=O.cancelButton,i=n&&(n===t||n.contains(t)),r=o&&(o===t||o.contains(t));switch(e.type){case"click":if(i&&M.isVisible())if(E.disableButtons(),T.input){var a=function(){var e=E.getInput();if(!e)return null;switch(T.input){case"checkbox":return e.checked?1:0;case"radio":return e.checked?e.value:null;case"file":return e.files.length?e.files[0]:null;default:return T.inputAutoTrim?e.value.trim():e.value}}();T.inputValidator?(E.disableInput(),Promise.resolve().then(function(){return T.inputValidator(a,T.validationMessage)}).then(function(e){E.enableButtons(),E.enableInput(),e?E.showValidationMessage(e):c(a)})):E.getInput().checkValidity()?c(a):(E.enableButtons(),E.showValidationMessage(T.validationMessage))}else c(!0);else r&&M.isVisible()&&(E.disableButtons(),s(M.DismissReason.cancel))}},o=O.popup.querySelectorAll("button"),i=0;i<o.length;i++)o[i].onclick=t,o[i].onmouseover=t,o[i].onmouseout=t,o[i].onmousedown=t;if(O.closeButton.onclick=function(){s(M.DismissReason.close)},T.toast)O.popup.onclick=function(){T.showConfirmButton||T.showCancelButton||T.showCloseButton||T.input||s(M.DismissReason.close)};else{var r=!1;O.popup.onmousedown=function(){O.container.onmouseup=function(e){O.container.onmouseup=void 0,e.target===O.container&&(r=!0)}},O.container.onmousedown=function(){O.popup.onmouseup=function(e){O.popup.onmouseup=void 0,(e.target===O.popup||O.popup.contains(e.target))&&(r=!0)}},O.container.onclick=function(e){r?r=!1:e.target===O.container&&j(T.allowOutsideClick)&&s(M.DismissReason.backdrop)}}T.reverseButtons?O.confirmButton.parentNode.insertBefore(O.cancelButton,O.confirmButton):O.confirmButton.parentNode.insertBefore(O.confirmButton,O.cancelButton);var a=function(e,t){for(var n=Q(T.focusCancel),o=0;o<n.length;o++)return(e+=t)===n.length?e=0:-1===e&&(e=n.length-1),n[e].focus();O.popup.focus()};ae.keydownHandlerAdded&&(ae.keydownTarget.removeEventListener("keydown",ae.keydownHandler,{capture:ae.keydownListenerCapture}),ae.keydownHandlerAdded=!1),T.toast||(ae.keydownHandler=function(e){return function(e,t){if(t.stopKeydownPropagation&&e.stopPropagation(),"Enter"!==e.key||e.isComposing)if("Tab"===e.key){for(var n=e.target,o=Q(t.focusCancel),i=-1,r=0;r<o.length;r++)if(n===o[r]){i=r;break}e.shiftKey?a(i,-1):a(i,1),e.stopPropagation(),e.preventDefault()}else-1!==["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Left","Right","Up","Down"].indexOf(e.key)?document.activeElement===O.confirmButton&&K(O.cancelButton)?O.cancelButton.focus():document.activeElement===O.cancelButton&&K(O.confirmButton)&&O.confirmButton.focus():"Escape"!==e.key&&"Esc"!==e.key||!0!==j(t.allowEscapeKey)||(e.preventDefault(),s(M.DismissReason.esc));else if(e.target&&E.getInput()&&e.target.outerHTML===E.getInput().outerHTML){if(-1!==["textarea","file"].indexOf(t.input))return;M.clickConfirm(),e.preventDefault()}}(e,T)},ae.keydownTarget=T.keydownListenerCapture?window:O.popup,ae.keydownListenerCapture=T.keydownListenerCapture,ae.keydownTarget.addEventListener("keydown",ae.keydownHandler,{capture:ae.keydownListenerCapture}),ae.keydownHandlerAdded=!0),E.enableButtons(),E.hideLoading(),E.resetValidationMessage(),T.toast&&(T.input||T.footer||T.showCloseButton)?D(document.body,I["toast-column"]):U(document.body,I["toast-column"]);for(var u,l,d=["input","file","range","select","radio","checkbox","textarea"],p=function(e){e.placeholder&&!T.inputPlaceholder||(e.placeholder=T.inputPlaceholder)},f=0;f<d.length;f++){var m=I[d[f]],g=_(O.content,m);if(u=E.getInput(d[f])){for(var h in u.attributes)if(u.attributes.hasOwnProperty(h)){var v=u.attributes[h].name;"type"!==v&&"value"!==v&&u.removeAttribute(v)}for(var b in T.inputAttributes)"range"===d[f]&&"placeholder"===b||u.setAttribute(b,T.inputAttributes[b])}g.className=m,T.inputClass&&D(g,T.inputClass),W(g)}switch(T.input){case"text":case"email":case"password":case"number":case"tel":case"url":u=_(O.content,I.input),"string"==typeof T.inputValue||"number"==typeof T.inputValue?u.value=T.inputValue:R(T.inputValue)||q('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(V(T.inputValue),'"')),p(u),u.type=T.input,z(u);break;case"file":p(u=_(O.content,I.file)),u.type=T.input,z(u);break;case"range":var y=_(O.content,I.range),w=y.querySelector("input"),C=y.querySelector("output");w.value=T.inputValue,w.type=T.input,C.value=T.inputValue,z(y);break;case"select":var k=_(O.content,I.select);if(k.innerHTML="",T.inputPlaceholder){var B=document.createElement("option");B.innerHTML=T.inputPlaceholder,B.value="",B.disabled=!0,B.selected=!0,k.appendChild(B)}l=function(e){e.forEach(function(e){var t=e[0],n=e[1],o=document.createElement("option");o.value=t,o.innerHTML=n,T.inputValue.toString()===t.toString()&&(o.selected=!0),k.appendChild(o)}),z(k),k.focus()};break;case"radio":var x=_(O.content,I.radio);x.innerHTML="",l=function(e){e.forEach(function(e){var t=e[0],n=e[1],o=document.createElement("input"),i=document.createElement("label");o.type="radio",o.name=I.radio,o.value=t,T.inputValue.toString()===t.toString()&&(o.checked=!0);var r=document.createElement("span");r.innerHTML=n,r.className=I.label,i.appendChild(o),i.appendChild(r),x.appendChild(i)}),z(x);var t=x.querySelectorAll("input");t.length&&t[0].focus()};break;case"checkbox":var A=_(O.content,I.checkbox),P=E.getInput("checkbox");P.type="checkbox",P.value=1,P.id=I.checkbox,P.checked=Boolean(T.inputValue),A.querySelector("span").innerHTML=T.inputPlaceholder,z(A);break;case"textarea":var S=_(O.content,I.textarea);S.value=T.inputValue,p(S),z(S);break;case null:break;default:H('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(T.input,'"'))}if("select"===T.input||"radio"===T.input){var L=function(e){return l((t=e,n=[],"undefined"!=typeof Map&&t instanceof Map?t.forEach(function(e,t){n.push([t,e])}):Object.keys(t).forEach(function(e){n.push([e,t[e]])}),n));var t,n};R(T.inputOptions)?(M.showLoading(),T.inputOptions.then(function(e){E.hideLoading(),L(e)})):"object"===V(T.inputOptions)?L(T.inputOptions):H("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(V(T.inputOptions)))}else-1!==["text","email","number","tel","textarea"].indexOf(T.input)&&R(T.inputValue)&&(M.showLoading(),W(u),T.inputValue.then(function(e){u.value="number"===T.input?parseFloat(e)||0:e+"",z(u),u.focus(),E.hideLoading()}).catch(function(e){H("Error in inputValue promise: "+e),u.value="",z(u),u.focus(),E.hideLoading()}));Be(T),T.toast||(j(T.allowEnterKey)?T.focusCancel&&K(O.cancelButton)?O.cancelButton.focus():T.focusConfirm&&K(O.confirmButton)?O.confirmButton.focus():a(-1,1):document.activeElement&&"function"==typeof document.activeElement.blur&&document.activeElement.blur()),O.container.scrollTop=0})},update:function(t){var n={};Object.keys(t).forEach(function(e){Se.isUpdatableParameter(e)?n[e]=t[e]:q('Invalid parameter to update: "'.concat(e,'". Updatable params are listed here: TODO (@limonte) add link'))});var e=s({},fe.innerParams.get(this),n);X(e),G(e),ee(e),te(e),ne(e),oe(e),fe.innerParams.set(this,e)}});function Pe(){if("undefined"!=typeof window){"undefined"==typeof Promise&&H("This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)"),xe=this;for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var o=Object.freeze(this.constructor.argsToParams(t));Object.defineProperties(this,{params:{value:o,writable:!1,enumerable:!0}});var i=this._main(this.params);fe.promise.set(this,i)}}Pe.prototype.then=function(e){return fe.promise.get(this).then(e)},Pe.prototype.finally=function(e){return fe.promise.get(this).finally(e)},s(Pe.prototype,Ae),s(Pe,pe),Object.keys(Ae).forEach(function(t){Pe[t]=function(){var e;if(xe)return(e=xe)[t].apply(e,arguments)}}),Pe.DismissReason=e,Pe.version="8.0.5";var Se=Pe;return Se.default=Se}),"undefined"!=typeof window&&window.Sweetalert2&&(window.swal=window.sweetAlert=window.Swal=window.SweetAlert=window.Sweetalert2);
"undefined"!=typeof document&&function(e,t){var n=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=t);else try{n.innerHTML=t}catch(e){n.innerText=t}}(document,"@-webkit-keyframes swal2-show{0%{-webkit-transform:scale(.7);transform:scale(.7)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes swal2-show{0%{-webkit-transform:scale(.7);transform:scale(.7)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}100%{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.875em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.875em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}100%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}100%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}50%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}80%{margin-top:-.375em;-webkit-transform:scale(1.15);transform:scale(1.15)}100%{margin-top:0;-webkit-transform:scale(1);transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}50%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}80%{margin-top:-.375em;-webkit-transform:scale(1.15);transform:scale(1.15)}100%{margin-top:0;-webkit-transform:scale(1);transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);opacity:1}}body.swal2-toast-shown .swal2-container{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-shown{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}body.swal2-toast-column .swal2-toast{flex-direction:column;align-items:stretch}body.swal2-toast-column .swal2-toast .swal2-actions{flex:1;align-self:stretch;height:2.2em;margin-top:.3125em}body.swal2-toast-column .swal2-toast .swal2-loading{justify-content:center}body.swal2-toast-column .swal2-toast .swal2-input{height:2em;margin:.3125em auto;font-size:1em}body.swal2-toast-column .swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast{flex-direction:row;align-items:center;width:auto;padding:.625em;box-shadow:0 0 .625em #d9d9d9;overflow-y:hidden}.swal2-popup.swal2-toast .swal2-header{flex-direction:row}.swal2-popup.swal2-toast .swal2-title{flex-grow:1;justify-content:flex-start;margin:0 .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{position:initial;width:.8em;height:.8em;line-height:.8}.swal2-popup.swal2-toast .swal2-content{justify-content:flex-start;font-size:1em}.swal2-popup.swal2-toast .swal2-icon{width:2em;min-width:2em;height:2em;margin:0}.swal2-popup.swal2-toast .swal2-icon-text{font-size:2em;font-weight:700;line-height:1em}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{height:auto;margin:0 .3125em}.swal2-popup.swal2-toast .swal2-styled{margin:0 .3125em;padding:.3125em .625em;font-size:1em}.swal2-popup.swal2-toast .swal2-styled:focus{box-shadow:0 0 0 .0625em #fff,0 0 0 .125em rgba(50,100,150,.4)}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:2em;height:2.8125em;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.25em;left:-.9375em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:2em 2em;transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;-webkit-transform-origin:0 2em;transform-origin:0 2em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:showSweetToast .5s;animation:showSweetToast .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:hideSweetToast .2s forwards;animation:hideSweetToast .2s forwards}.swal2-popup.swal2-toast .swal2-animate-success-icon .swal2-success-line-tip{-webkit-animation:animate-toast-success-tip .75s;animation:animate-toast-success-tip .75s}.swal2-popup.swal2-toast .swal2-animate-success-icon .swal2-success-line-long{-webkit-animation:animate-toast-success-long .75s;animation:animate-toast-success-long .75s}@-webkit-keyframes showSweetToast{0%{-webkit-transform:translateY(-.625em) rotateZ(2deg);transform:translateY(-.625em) rotateZ(2deg);opacity:0}33%{-webkit-transform:translateY(0) rotateZ(-2deg);transform:translateY(0) rotateZ(-2deg);opacity:.5}66%{-webkit-transform:translateY(.3125em) rotateZ(2deg);transform:translateY(.3125em) rotateZ(2deg);opacity:.7}100%{-webkit-transform:translateY(0) rotateZ(0);transform:translateY(0) rotateZ(0);opacity:1}}@keyframes showSweetToast{0%{-webkit-transform:translateY(-.625em) rotateZ(2deg);transform:translateY(-.625em) rotateZ(2deg);opacity:0}33%{-webkit-transform:translateY(0) rotateZ(-2deg);transform:translateY(0) rotateZ(-2deg);opacity:.5}66%{-webkit-transform:translateY(.3125em) rotateZ(2deg);transform:translateY(.3125em) rotateZ(2deg);opacity:.7}100%{-webkit-transform:translateY(0) rotateZ(0);transform:translateY(0) rotateZ(0);opacity:1}}@-webkit-keyframes hideSweetToast{0%{opacity:1}33%{opacity:.5}100%{-webkit-transform:rotateZ(1deg);transform:rotateZ(1deg);opacity:0}}@keyframes hideSweetToast{0%{opacity:1}33%{opacity:.5}100%{-webkit-transform:rotateZ(1deg);transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes animate-toast-success-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes animate-toast-success-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes animate-toast-success-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes animate-toast-success-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-shown{top:auto;right:auto;bottom:auto;left:auto;background-color:transparent}body.swal2-no-backdrop .swal2-shown>.swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}body.swal2-no-backdrop .swal2-shown.swal2-top{top:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-top-left,body.swal2-no-backdrop .swal2-shown.swal2-top-start{top:0;left:0}body.swal2-no-backdrop .swal2-shown.swal2-top-end,body.swal2-no-backdrop .swal2-shown.swal2-top-right{top:0;right:0}body.swal2-no-backdrop .swal2-shown.swal2-center{top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}body.swal2-no-backdrop .swal2-shown.swal2-center-left,body.swal2-no-backdrop .swal2-shown.swal2-center-start{top:50%;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-center-end,body.swal2-no-backdrop .swal2-shown.swal2-center-right{top:50%;right:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-bottom{bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-bottom-left,body.swal2-no-backdrop .swal2-shown.swal2-bottom-start{bottom:0;left:0}body.swal2-no-backdrop .swal2-shown.swal2-bottom-end,body.swal2-no-backdrop .swal2-shown.swal2-bottom-right{right:0;bottom:0}.swal2-container{display:flex;position:fixed;top:0;right:0;bottom:0;left:0;flex-direction:row;align-items:center;justify-content:center;padding:10px;background-color:transparent;z-index:1060;overflow-x:hidden;-webkit-overflow-scrolling:touch}.swal2-container.swal2-top{align-items:flex-start}.swal2-container.swal2-top-left,.swal2-container.swal2-top-start{align-items:flex-start;justify-content:flex-start}.swal2-container.swal2-top-end,.swal2-container.swal2-top-right{align-items:flex-start;justify-content:flex-end}.swal2-container.swal2-center{align-items:center}.swal2-container.swal2-center-left,.swal2-container.swal2-center-start{align-items:center;justify-content:flex-start}.swal2-container.swal2-center-end,.swal2-container.swal2-center-right{align-items:center;justify-content:flex-end}.swal2-container.swal2-bottom{align-items:flex-end}.swal2-container.swal2-bottom-left,.swal2-container.swal2-bottom-start{align-items:flex-end;justify-content:flex-start}.swal2-container.swal2-bottom-end,.swal2-container.swal2-bottom-right{align-items:flex-end;justify-content:flex-end}.swal2-container.swal2-grow-fullscreen>.swal2-modal{display:flex!important;flex:1;align-self:stretch;justify-content:center}.swal2-container.swal2-grow-row>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-grow-column{flex:1;flex-direction:column}.swal2-container.swal2-grow-column.swal2-bottom,.swal2-container.swal2-grow-column.swal2-center,.swal2-container.swal2-grow-column.swal2-top{align-items:center}.swal2-container.swal2-grow-column.swal2-bottom-left,.swal2-container.swal2-grow-column.swal2-bottom-start,.swal2-container.swal2-grow-column.swal2-center-left,.swal2-container.swal2-grow-column.swal2-center-start,.swal2-container.swal2-grow-column.swal2-top-left,.swal2-container.swal2-grow-column.swal2-top-start{align-items:flex-start}.swal2-container.swal2-grow-column.swal2-bottom-end,.swal2-container.swal2-grow-column.swal2-bottom-right,.swal2-container.swal2-grow-column.swal2-center-end,.swal2-container.swal2-grow-column.swal2-center-right,.swal2-container.swal2-grow-column.swal2-top-end,.swal2-container.swal2-grow-column.swal2-top-right{align-items:flex-end}.swal2-container.swal2-grow-column>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right):not(.swal2-grow-fullscreen)>.swal2-modal{margin:auto}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-container .swal2-modal{margin:0!important}}.swal2-container.swal2-fade{transition:background-color .1s}.swal2-container.swal2-shown{background-color:rgba(0,0,0,.4)}.swal2-popup{display:none;position:relative;flex-direction:column;justify-content:center;width:32em;max-width:100%;padding:1.25em;border-radius:.3125em;background:#fff;font-family:inherit;font-size:1rem;box-sizing:border-box}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-popup .swal2-header{display:flex;flex-direction:column;align-items:center}.swal2-popup .swal2-title{display:block;position:relative;max-width:100%;margin:0 0 .4em;padding:0;color:#595959;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-popup .swal2-actions{flex-wrap:wrap;align-items:center;justify-content:center;margin:1.25em auto 0;z-index:1}.swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-popup .swal2-actions.swal2-loading .swal2-styled.swal2-confirm{width:2.5em;height:2.5em;margin:.46875em;padding:0;border:.25em solid transparent;border-radius:100%;border-color:transparent;background-color:transparent!important;color:transparent;cursor:default;box-sizing:border-box;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-popup .swal2-actions.swal2-loading .swal2-styled.swal2-cancel{margin-right:30px;margin-left:30px}.swal2-popup .swal2-actions.swal2-loading :not(.swal2-styled).swal2-confirm::after{display:inline-block;width:15px;height:15px;margin-left:5px;border:3px solid #999;border-radius:50%;border-right-color:transparent;box-shadow:1px 1px 1px #fff;content:'';-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal}.swal2-popup .swal2-styled{margin:.3125em;padding:.625em 2em;font-weight:500;box-shadow:none}.swal2-popup .swal2-styled:not([disabled]){cursor:pointer}.swal2-popup .swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#3085d6;color:#fff;font-size:1.0625em}.swal2-popup .swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#aaa;color:#fff;font-size:1.0625em}.swal2-popup .swal2-styled:focus{outline:0;box-shadow:0 0 0 2px #fff,0 0 0 4px rgba(50,100,150,.4)}.swal2-popup .swal2-styled::-moz-focus-inner{border:0}.swal2-popup .swal2-footer{justify-content:center;margin:1.25em 0 0;padding:1em 0 0;border-top:1px solid #eee;color:#545454;font-size:1em}.swal2-popup .swal2-image{max-width:100%;margin:1.25em auto}.swal2-popup .swal2-close{position:absolute;top:0;right:0;justify-content:center;width:1.2em;height:1.2em;padding:0;transition:color .1s ease-out;border:none;border-radius:0;outline:initial;background:0 0;color:#ccc;font-family:serif;font-size:2.5em;line-height:1.2;cursor:pointer;overflow:hidden}.swal2-popup .swal2-close:hover{-webkit-transform:none;transform:none;color:#f27474}.swal2-popup>.swal2-checkbox,.swal2-popup>.swal2-file,.swal2-popup>.swal2-input,.swal2-popup>.swal2-radio,.swal2-popup>.swal2-select,.swal2-popup>.swal2-textarea{display:none}.swal2-popup .swal2-content{justify-content:center;margin:0;padding:0;color:#545454;font-size:1.125em;font-weight:300;line-height:normal;z-index:1;word-wrap:break-word}.swal2-popup #swal2-content{text-align:center}.swal2-popup .swal2-checkbox,.swal2-popup .swal2-file,.swal2-popup .swal2-input,.swal2-popup .swal2-radio,.swal2-popup .swal2-select,.swal2-popup .swal2-textarea{margin:1em auto}.swal2-popup .swal2-file,.swal2-popup .swal2-input,.swal2-popup .swal2-textarea{width:100%;transition:border-color .3s,box-shadow .3s;border:1px solid #d9d9d9;border-radius:.1875em;font-size:1.125em;box-shadow:inset 0 1px 1px rgba(0,0,0,.06);box-sizing:border-box}.swal2-popup .swal2-file.swal2-inputerror,.swal2-popup .swal2-input.swal2-inputerror,.swal2-popup .swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-popup .swal2-file:focus,.swal2-popup .swal2-input:focus,.swal2-popup .swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:0 0 3px #c4e6f5}.swal2-popup .swal2-file::-webkit-input-placeholder,.swal2-popup .swal2-input::-webkit-input-placeholder,.swal2-popup .swal2-textarea::-webkit-input-placeholder{color:#ccc}.swal2-popup .swal2-file:-ms-input-placeholder,.swal2-popup .swal2-input:-ms-input-placeholder,.swal2-popup .swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-popup .swal2-file::-ms-input-placeholder,.swal2-popup .swal2-input::-ms-input-placeholder,.swal2-popup .swal2-textarea::-ms-input-placeholder{color:#ccc}.swal2-popup .swal2-file::placeholder,.swal2-popup .swal2-input::placeholder,.swal2-popup .swal2-textarea::placeholder{color:#ccc}.swal2-popup .swal2-range input{width:80%}.swal2-popup .swal2-range output{width:20%;font-weight:600;text-align:center}.swal2-popup .swal2-range input,.swal2-popup .swal2-range output{height:2.625em;margin:1em auto;padding:0;font-size:1.125em;line-height:2.625em}.swal2-popup .swal2-input{height:2.625em;padding:0 .75em}.swal2-popup .swal2-input[type=number]{max-width:10em}.swal2-popup .swal2-file{font-size:1.125em}.swal2-popup .swal2-textarea{height:6.75em;padding:.75em}.swal2-popup .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;color:#545454;font-size:1.125em}.swal2-popup .swal2-checkbox,.swal2-popup .swal2-radio{align-items:center;justify-content:center}.swal2-popup .swal2-checkbox label,.swal2-popup .swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-popup .swal2-checkbox input,.swal2-popup .swal2-radio input{margin:0 .4em}.swal2-popup .swal2-validation-message{display:none;align-items:center;justify-content:center;padding:.625em;background:#f0f0f0;color:#666;font-size:1em;font-weight:300;overflow:hidden}.swal2-popup .swal2-validation-message::before{display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center;content:'!';zoom:normal}@supports (-ms-accelerator:true){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@-moz-document url-prefix(){.swal2-close:focus{outline:2px solid rgba(50,100,150,.4)}}.swal2-icon{position:relative;justify-content:center;width:5em;height:5em;margin:1.25em auto 1.875em;border:.25em solid transparent;border-radius:50%;line-height:5em;cursor:default;box-sizing:content-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;zoom:normal}.swal2-icon-text{font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-success{border-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:3.75em 3.75em;transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 3.75em;transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;top:-.25em;left:-.25em;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%;z-index:2;box-sizing:content-box}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;top:.5em;left:1.625em;width:.4375em;height:5.625em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);z-index:1}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;height:.3125em;border-radius:.125em;background-color:#a5dc86;z-index:2}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.875em;width:1.5625em;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-progresssteps{align-items:center;margin:0 0 1.25em;padding:0;font-weight:600}.swal2-progresssteps li{display:inline-block;position:relative}.swal2-progresssteps .swal2-progresscircle{width:2em;height:2em;border-radius:2em;background:#3085d6;color:#fff;line-height:2em;text-align:center;z-index:20}.swal2-progresssteps .swal2-progresscircle:first-child{margin-left:0}.swal2-progresssteps .swal2-progresscircle:last-child{margin-right:0}.swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep{background:#3085d6}.swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep~.swal2-progresscircle{background:#add8e6}.swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep~.swal2-progressline{background:#add8e6}.swal2-progresssteps .swal2-progressline{width:2.5em;height:.4em;margin:0 -1px;background:#3085d6;z-index:10}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-show.swal2-noanimation{-webkit-animation:none;animation:none}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-hide.swal2-noanimation{-webkit-animation:none;animation:none}.swal2-rtl .swal2-close{right:auto;left:0}.swal2-animate-success-icon .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-animate-success-icon .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-animate-success-icon .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-animate-error-icon{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-animate-error-icon .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}@-webkit-keyframes swal2-rotate-loading{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:initial!important}}");
/**
 * jQuery Geocoding and Places Autocomplete Plugin - V 1.7.0
 *
 * @author Martin Kleppe <kleppe@ubilabs.net>, 2016
 * @author Ubilabs http://ubilabs.net, 2016
 * @license MIT License <http://www.opensource.org/licenses/mit-license.php>
 */

// # $.geocomplete()
// ## jQuery Geocoding and Places Autocomplete Plugin
//
// * https://github.com/ubilabs/geocomplete/
// * by Martin Kleppe <kleppe@ubilabs.net>

( function( $, window, document, undefined ) {

	// ## Options
	// The default options for this plugin.
	//
	// * `map` - Might be a selector, an jQuery object or a DOM element. Default is `false` which shows no map.
	// * `details` - The container that should be populated with data. Defaults to `false` which ignores the setting.
	// * 'detailsScope' - Allows you to scope the 'details' container and have multiple geocomplete fields on one page. Must be a parent of the input. Default is 'null'
	// * `location` - Location to initialize the map on. Might be an address `string` or an `array` with [latitude, longitude] or a `google.maps.LatLng`object. Default is `false` which shows a blank map.
	// * `bounds` - Whether to snap geocode search to map bounds. Default: `true` if false search globally. Alternatively pass a custom `LatLngBounds object.
	// * `autoselect` - Automatically selects the highlighted item or the first item from the suggestions list on Enter.
	// * `detailsAttribute` - The attribute's name to use as an indicator. Default: `"name"`
	// * `mapOptions` - Options to pass to the `google.maps.Map` constructor. See the full list [here](http://code.google.com/apis/maps/documentation/javascript/reference.html#MapOptions).
	// * `mapOptions.zoom` - The inital zoom level. Default: `14`
	// * `mapOptions.scrollwheel` - Whether to enable the scrollwheel to zoom the map. Default: `false`
	// * `mapOptions.mapTypeId` - The map type. Default: `"roadmap"`
	// * `markerOptions` - The options to pass to the `google.maps.Marker` constructor. See the full list [here](http://code.google.com/apis/maps/documentation/javascript/reference.html#MarkerOptions).
	// * `markerOptions.draggable` - If the marker is draggable. Default: `false`. Set to true to enable dragging.
	// * `markerOptions.disabled` - Do not show marker. Default: `false`. Set to true to disable marker.
	// * `maxZoom` - The maximum zoom level too zoom in after a geocoding response. Default: `16`
	// * `types` - An array containing one or more of the supported types for the places request. Default: `['geocode']` See the full list [here](http://code.google.com/apis/maps/documentation/javascript/places.html#place_search_requests).
	// * `blur` - Trigger geocode when input loses focus.
	// * `geocodeAfterResult` - If blur is set to true, choose whether to geocode if user has explicitly selected a result before blur.
	// * `restoreValueAfterBlur` - Restores the input's value upon blurring. Default is `false` which ignores the setting.

	var defaults = {
		bounds: true,
		country: null,
		map: false,
		details: false,
		detailsAttribute: "name",
		detailsScope: null,
		autoselect: true,
		location: false,

		mapOptions: {
			zoom: 14,
			scrollwheel: false,
			mapTypeId: "roadmap"
		},

		markerOptions: {
			draggable: false
		},

		maxZoom: 16,
		types: [ 'geocode' ],
		blur: false,
		geocodeAfterResult: false,
		restoreValueAfterBlur: false
	};

	// See: [Geocoding Types](https://developers.google.com/maps/documentation/geocoding/#Types)
	// on Google Developers.
	var componentTypes = ( "street_address route intersection political " +
		"country administrative_area_level_1 administrative_area_level_2 " +
		"administrative_area_level_3 colloquial_area locality sublocality " +
		"neighborhood premise subpremise postal_code natural_feature airport " +
		"park point_of_interest post_box street_number floor room " +
		"lat lng viewport location " +
		"formatted_address location_type bounds" ).split( " " );

	// See: [Places Details Responses](https://developers.google.com/maps/documentation/javascript/places#place_details_responses)
	// on Google Developers.
	var placesDetails = ( "id place_id url website vicinity reference name rating " +
		"international_phone_number icon formatted_phone_number" ).split( " " );

	// The actual plugin constructor.
	function GeoComplete( input, options ) {
		this.options = $.extend( true, {}, defaults, options );

		// This is a fix to allow types:[] not to be overridden by defaults
		// so search results includes everything
		if( options && options.types ) {
			this.options.types = options.types;
		}

		this.input     = input;
		this.$input    = $( input );
		this._defaults = defaults;
		this._name     = 'geocomplete';

		this.init();
	}

	// Initialize all parts of the plugin.
	$.extend( GeoComplete.prototype, {
		init: function() {
			this.initMap();
			this.initMarker();
			this.initGeocoder();
			this.initDetails();
			this.initLocation();
		},

		// Initialize the map but only if the option `map` was set.
		// This will create a `map` within the given container
		// using the provided `mapOptions` or link to the existing map instance.
		initMap: function() {
			if( !this.options.map ) {
				return;
			}

			if( typeof this.options.map.setCenter == "function" ) {
				this.map = this.options.map;
				return;
			}

			if( typeof this.options.mapOptions.center !== 'undefined' ) {
				this.options.mapOptions.center = this.handle_lat_lng( this.options.mapOptions.center );
			}

			this.map = new google.maps.Map( $( this.options.map )[ 0 ], this.options.mapOptions );

			if( typeof this.options.mapOptions.center !== 'undefined' ) {
				this.map.setCenter( new google.maps.LatLng( this.options.mapOptions.center.lat, this.options.mapOptions.center.lng, this.options.mapOptions.center.zoom ) );
				//this.center( this.options.mapOptions.center );
			}

			// add click event listener on the map
			google.maps.event.addListener(
				this.map,
				'click',
				$.proxy( this.mapClicked, this )
			);

			// add dragend even listener on the map
			google.maps.event.addListener(
				this.map,
				'dragend',
				$.proxy( this.mapDragged, this )
			);

			// add idle even listener on the map
			google.maps.event.addListener(
				this.map,
				'idle',
				$.proxy( this.mapIdle, this )
			);

			google.maps.event.addListener(
				this.map,
				'zoom_changed',
				$.proxy( this.mapZoomed, this )
			);
		},

		// Add a marker with the provided `markerOptions` but only
		// if the option was set. Additionally it listens for the `dragend` event
		// to notify the plugin about changes.
		initMarker: function() {
			if( !this.map ) {
				return;
			}


			if( this.options.markerOptions.constructor === Array ) {
				var bounds      = new google.maps.LatLngBounds();
				var iWargs      = {};
				var infoWindows = {};
				for( var key in this.options.markerOptions ) {
					var options = $.extend( this.options.markerOptions[ key ], { map: this.map } );
					var $MAP    = this.map;
					if( options.disabled ) {
						return;
					}

					var hasInfoWindow = false;
					if( typeof options.InfoWindow !== "undefined" ) {
						if( options.InfoWindow.constructor === String ) {
							hasInfoWindow = { content: options.InfoWindow };
						} else {
							hasInfoWindow = options.InfoWindow;
						}
						delete options[ 'InfoWindow' ];
					}

					if( typeof options.position !== 'undefined' ) {
						options.position = this.handle_lat_lng( options.position );
					}

					var $_marker = new google.maps.Marker( options );
					bounds.extend( $_marker.position );
					if( false !== hasInfoWindow ) {
						var $_POS     = $_marker.getPosition();
						hasInfoWindow = $.extend( hasInfoWindow, { ___marker: $_marker } );
						if( typeof hasInfoWindow[ 'position' ] !== "undefined" && hasInfoWindow[ 'position' ][ 'lat' ].constructor === String && hasInfoWindow[ 'position' ][ 'lng' ].constructor === String ) {
							hasInfoWindow[ 'position' ] = new google.maps.LatLng( hasInfoWindow[ 'position' ][ 'lat' ], hasInfoWindow[ 'position' ][ 'lng' ] );
						}
						iWargs[ $_POS.lat() + "_" + $_POS.lng() ] = hasInfoWindow;
					}

					google.maps.event.addListener( $_marker, 'click', ( function( marker ) {
						return function() {
							var $key = marker.position.lat() + "_" + marker.position.lng();
							if( typeof iWargs[ $key ] !== 'undefined' ) {
								if( typeof infoWindows[ $key ] === 'undefined' ) {
									infoWindows[ $key ] = new google.maps.InfoWindow( iWargs[ $key ] );
									infoWindows[ $key ].open( $MAP, marker );
									google.maps.event.addListener( infoWindows[ $key ], 'closeclick', function() {
										delete infoWindows[ $key ];
									} )
								}
							}
						}
					} )( $_marker ) );
				}
				this.map.fitBounds( bounds );

			} else {

				var options = $.extend( this.options.markerOptions, { map: this.map } );

				if( options.disabled ) {
					return;
				}

				this.marker = new google.maps.Marker( options );

				google.maps.event.addListener(
					this.marker,
					'dragend',
					$.proxy( this.markerDragged, this )
				);
			}
		},

		handle_lat_lng: function( $data ) {
			var $return = {};
			if( $data.constructor === Array && typeof $data[ 0 ] !== "undefined" && typeof $data[ 1 ] !== "undefined" ) {
				var $lat  = $data[ 0 ];
				var $lng  = $data[ 1 ];
				var $zoom = ( typeof $data[ 2 ] !== 'undefined' ) ? $data[ 2 ] : null;
				$return   = { lat: parseFloat( $lat ), lng: parseFloat( $lng ), zoom: $zoom };
			} else if( $data.constructor === Object && typeof $data[ 'lat' ] !== "undefined" && typeof $data[ 'lng' ] !== "undefined" ) {
				var $zoom = ( typeof $data[ 'zoom' ] !== 'undefined' ) ? $data[ 'zoom' ] : null;
				$return   = {
					lat: parseFloat( $data.lat ),
					lng: parseFloat( $data.lng ),
					zoom: $zoom,
				};
			} else if( $data.constructor === String ) {
				var $a    = $data.split( ',' );
				var $zoom = ( typeof $a[ 2 ] !== 'undefined' ) ? $a[ 2 ] : null;
				$return   = { lat: parseFloat( $a[ 0 ] ), lng: parseFloat( $a[ 1 ] ), zoom: $a[ 2 ] };
			}
			return $return;
		},

		// Associate the input with the autocompleter and create a geocoder
		// to fall back when the autocompleter does not return a value.
		initGeocoder: function() {

			// Indicates is user did select a result from the dropdown.
			var selected = false;

			var options = {
				types: this.options.types,
				bounds: this.options.bounds === true ? null : this.options.bounds,
				componentRestrictions: this.options.componentRestrictions
			};

			if( this.options.country ) {
				options.componentRestrictions = { country: this.options.country };
			}

			this.autocomplete = new google.maps.places.Autocomplete(
				this.input, options
			);

			this.geocoder = new google.maps.Geocoder();

			// Bind autocomplete to map bounds but only if there is a map
			// and `options.bindToMap` is set to true.
			if( this.map && this.options.bounds === true ) {
				this.autocomplete.bindTo( 'bounds', this.map );
			}

			// Watch `place_changed` events on the autocomplete input field.
			google.maps.event.addListener(
				this.autocomplete,
				'place_changed',
				$.proxy( this.placeChanged, this )
			);

			// Prevent parent form from being submitted if user hit enter.
			this.$input.on( 'keypress.' + this._name, function( event ) {
				if( event.keyCode === 13 ) {
					return false;
				}
			} );

			// Assume that if user types anything after having selected a result,
			// the selected location is not valid any more.
			if( this.options.geocodeAfterResult === true ) {
				this.$input.bind( 'keypress.' + this._name, $.proxy( function() {
					if( event.keyCode != 9 && this.selected === true ) {
						this.selected = false;
					}
				}, this ) );
			}

			// Listen for "geocode" events and trigger find action.
			this.$input.bind( 'geocode.' + this._name, $.proxy( function() {
				this.find();
			}, this ) );

			// Saves the previous input value
			this.$input.bind( 'geocode:result.' + this._name, $.proxy( function() {
				this.lastInputVal = this.$input.val();
			}, this ) );

			// Trigger find action when input element is blurred out and user has
			// not explicitly selected a result.
			// (Useful for typing partial location and tabbing to the next field
			// or clicking somewhere else.)
			if( this.options.blur === true ) {
				this.$input.on( 'blur.' + this._name, $.proxy( function() {
					if( this.options.geocodeAfterResult === true && this.selected === true ) {
						return;
					}

					if( this.options.restoreValueAfterBlur === true && this.selected === true ) {
						setTimeout( $.proxy( this.restoreLastValue, this ), 0 );
					} else {
						this.find();
					}
				}, this ) );
			}
		},

		// Prepare a given DOM structure to be populated when we got some data.
		// This will cycle through the list of component types and map the
		// corresponding elements.
		initDetails: function() {
			if( !this.options.details ) {
				return;
			}

			if( this.options.detailsScope ) {
				var $details = $( this.input ).parents( this.options.detailsScope ).find( this.options.details );
			} else {
				var $details = $( this.options.details );
			}

			var attribute = this.options.detailsAttribute,
				details   = {};

			function setDetail( value ) {
				details[ value ] = $details.find( "[" + attribute + "=" + value + "]" );
			}

			$.each( componentTypes, function( index, key ) {
				setDetail( key );
				setDetail( key + "_short" );
			} );

			$.each( placesDetails, function( index, key ) {
				setDetail( key );
			} );

			this.$details = $details;
			this.details  = details;
		},

		// Set the initial location of the plugin if the `location` options was set.
		// This method will care about converting the value into the right format.
		initLocation: function() {

			var location = this.options.location, latLng;

			if( !location ) {
				return;
			}

			if( typeof location === 'string' ) {
				this.find( location );
				return;
			}

			if( location instanceof Array ) {
				latLng = new google.maps.LatLng( location[ 0 ], location[ 1 ] );
			}

			if( location instanceof google.maps.LatLng ) {
				latLng = location;
			}

			if( latLng ) {
				if( this.map ) {
					this.map.setCenter( latLng );
				}
				if( this.marker ) {
					this.marker.setPosition( latLng );
				}
			}
		},

		destroy: function() {
			if( this.map ) {
				google.maps.event.clearInstanceListeners( this.map );
				google.maps.event.clearInstanceListeners( this.marker );
			}

			this.autocomplete.unbindAll();
			google.maps.event.clearInstanceListeners( this.autocomplete );
			google.maps.event.clearInstanceListeners( this.input );
			this.$input.removeData();
			this.$input.off( this._name );
			this.$input.unbind( '.' + this._name );
		},

		// Look up a given address. If no `address` was specified it uses
		// the current value of the input.
		find: function( address ) {
			this.geocode( { address: address || this.$input.val() } );
		},

		// Requests details about a given location.
		// Additionally it will bias the requests to the provided bounds.
		geocode: function( request ) {
			// Don't geocode if the requested address is empty
			if( !request.address ) {
				return;
			}
			if( this.options.bounds && !request.bounds ) {
				if( this.options.bounds === true ) {
					request.bounds = this.map && this.map.getBounds();
				} else {
					request.bounds = this.options.bounds;
				}
			}

			if( this.options.country ) {
				request.region = this.options.country;
			}

			this.geocoder.geocode( request, $.proxy( this.handleGeocode, this ) );
		},

		// Get the selected result. If no result is selected on the list, then get
		// the first result from the list.
		selectFirstResult: function() {
			//$(".pac-container").hide();

			var selected = '';
			// Check if any result is selected.
			if( $( ".pac-item-selected" )[ 0 ] ) {
				selected = '-selected';
			}

			// Get the first suggestion's text.
			var $span1 = $( ".pac-container:visible .pac-item" + selected + ":first span:nth-child(2)" ).text();
			var $span2 = $( ".pac-container:visible .pac-item" + selected + ":first span:nth-child(3)" ).text();

			// Adds the additional information, if available.
			var firstResult = $span1;
			if( $span2 ) {
				firstResult += " - " + $span2;
			}

			this.$input.val( firstResult );

			return firstResult;
		},

		// Restores the input value using the previous value if it exists
		restoreLastValue: function() {
			if( this.lastInputVal ) {
				this.$input.val( this.lastInputVal );
			}
		},

		// Handles the geocode response. If more than one results was found
		// it triggers the "geocode:multiple" events. If there was an error
		// the "geocode:error" event is fired.
		handleGeocode: function( results, status ) {
			if( status === google.maps.GeocoderStatus.OK ) {
				var result = results[ 0 ];
				this.$input.val( result.formatted_address );
				this.update( result );

				if( results.length > 1 ) {
					this.trigger( "geocode:multiple", results );
				}

			} else {
				this.trigger( "geocode:error", status );
			}
		},

		// Triggers a given `event` with optional `arguments` on the input.
		trigger: function( event, argument ) {
			this.$input.trigger( event, [ argument ] );
		},

		// Set the map to a new center by passing a `geometry`.
		// If the geometry has a viewport, the map zooms out to fit the bounds.
		// Additionally it updates the marker position.
		center: function( geometry ) {
			if( geometry.viewport ) {
				this.map.fitBounds( geometry.viewport );
				if( this.map.getZoom() > this.options.maxZoom ) {
					this.map.setZoom( this.options.maxZoom );
				}
			} else {
				this.map.setZoom( this.options.maxZoom );
				this.map.setCenter( geometry.location );
			}

			if( this.marker ) {
				this.marker.setPosition( geometry.location );
				this.marker.setAnimation( this.options.markerOptions.animation );
			}
		},

		// Update the elements based on a single places or geocoding response
		// and trigger the "geocode:result" event on the input.
		update: function( result ) {

			if( this.map ) {
				this.center( result.geometry );
			}

			if( this.$details ) {
				this.fillDetails( result );
			}

			this.trigger( "geocode:result", result );
		},

		// Populate the provided elements with new `result` data.
		// This will lookup all elements that has an attribute with the given
		// component type.
		fillDetails: function( result ) {

			var data     = {},
				geometry = result.geometry,
				viewport = geometry.viewport,
				bounds   = geometry.bounds;

			// Create a simplified version of the address components.
			$.each( result.address_components, function( index, object ) {
				var name = object.types[ 0 ];

				$.each( object.types, function( index, name ) {
					data[ name ]            = object.long_name;
					data[ name + "_short" ] = object.short_name;
				} );
			} );

			// Add properties of the places details.
			$.each( placesDetails, function( index, key ) {
				data[ key ] = result[ key ];
			} );

			// Add infos about the address and geometry.
			$.extend( data, {
				formatted_address: result.formatted_address,
				location_type: geometry.location_type || "PLACES",
				viewport: viewport,
				bounds: bounds,
				location: geometry.location,
				lat: geometry.location.lat(),
				lng: geometry.location.lng()
			} );

			// Set the values for all details.
			$.each( this.details, $.proxy( function( key, $detail ) {
				var value = data[ key ];
				this.setDetail( $detail, value );
			}, this ) );

			this.data = data;
		},

		// Assign a given `value` to a single `$element`.
		// If the element is an input, the value is set, otherwise it updates
		// the text content.
		setDetail: function( $element, value ) {

			if( value === undefined ) {
				value = "";
			} else if( typeof value.toUrlValue == "function" ) {
				value = value.toUrlValue();
			}

			if( $element.is( ":input" ) ) {
				$element.val( value );
			} else {
				$element.text( value );
			}
		},

		// Fire the "geocode:dragged" event and pass the new position.
		markerDragged: function( event ) {
			this.trigger( "geocode:dragged", event.latLng );
		},

		mapClicked: function( event ) {
			this.trigger( "geocode:click", event.latLng );
		},

		// Fire the "geocode:mapdragged" event and pass the current position of the map center.
		mapDragged: function( event ) {
			this.trigger( "geocode:mapdragged", this.map.getCenter() );
		},

		// Fire the "geocode:idle" event and pass the current position of the map center.
		mapIdle: function( event ) {
			this.trigger( "geocode:idle", this.map.getCenter() );
		},

		mapZoomed: function( event ) {
			this.trigger( "geocode:zoom", this.map.getZoom() );
		},

		// Restore the old position of the marker to the last knwon location.
		resetMarker: function() {
			this.marker.setPosition( this.data.location );
			this.setDetail( this.details.lat, this.data.location.lat() );
			this.setDetail( this.details.lng, this.data.location.lng() );
		},

		// Update the plugin after the user has selected an autocomplete entry.
		// If the place has no geometry it passes it to the geocoder.
		placeChanged: function() {
			var place     = this.autocomplete.getPlace();
			this.selected = true;

			if( !place.geometry ) {
				if( this.options.autoselect ) {
					// Automatically selects the highlighted item or the first item from the
					// suggestions list.
					var autoSelection = this.selectFirstResult();
					this.find( autoSelection );
				}
			} else {
				// Use the input text if it already gives geometry.
				this.update( place );
			}
		}
	} );

	// A plugin wrapper around the constructor.
	// Pass `options` with all settings that are different from the default.
	// The attribute is used to prevent multiple instantiations of the plugin.
	$.fn.geocomplete = function( options ) {

		var attribute = 'plugin_geocomplete';

		// If you call `.geocomplete()` with a string as the first parameter
		// it returns the corresponding property or calls the method with the
		// following arguments.
		if( typeof options == "string" ) {

			var instance = $( this ).data( attribute ) || $( this ).geocomplete().data( attribute ),
				prop     = instance[ options ];

			if( typeof prop == "function" ) {
				prop.apply( instance, Array.prototype.slice.call( arguments, 1 ) );
				return $( this );
			} else {
				if( arguments.length == 2 ) {
					prop = arguments[ 1 ];
				}
				return prop;
			}
		} else {
			return this.each( function() {
				// Prevent against multiple instantiations.
				var instance = $.data( this, attribute );
				if( !instance ) {
					instance = new GeoComplete( this, options );
					$.data( this, attribute, instance );
				}
			} );
		}
	};

} )( jQuery, window, document );

} )( window, document, wp, jQuery );
/*!
 * jQuery Validation Plugin v1.18.0
 *
 * https://jqueryvalidation.org/
 *
 * Copyright (c) 2018 Jörn Zaefferer
 * Released under the MIT license
 */
(function( factory ) {
	if ( typeof define === "function" && define.amd ) {
		define( ["jquery"], factory );
	} else if (typeof module === "object" && module.exports) {
		module.exports = factory( require( "jquery" ) );
	} else {
		factory( jQuery );
	}
}(function( $ ) {

$.extend( $.fn, {

	// https://jqueryvalidation.org/validate/
	validate: function( options ) {

		// If nothing is selected, return nothing; can't chain anyway
		if ( !this.length ) {
			if ( options && options.debug && window.console ) {
				console.warn( "Nothing selected, can't validate, returning nothing." );
			}
			return;
		}

		// Check if a validator for this form was already created
		var validator = $.data( this[ 0 ], "validator" );
		if ( validator ) {
			return validator;
		}

		// Add novalidate tag if HTML5.
		this.attr( "novalidate", "novalidate" );

		validator = new $.validator( options, this[ 0 ] );
		$.data( this[ 0 ], "validator", validator );

		if ( validator.settings.onsubmit ) {

			this.on( "click.validate", ":submit", function( event ) {

				// Track the used submit button to properly handle scripted
				// submits later.
				validator.submitButton = event.currentTarget;

				// Allow suppressing validation by adding a cancel class to the submit button
				if ( $( this ).hasClass( "cancel" ) ) {
					validator.cancelSubmit = true;
				}

				// Allow suppressing validation by adding the html5 formnovalidate attribute to the submit button
				if ( $( this ).attr( "formnovalidate" ) !== undefined ) {
					validator.cancelSubmit = true;
				}
			} );

			// Validate the form on submit
			this.on( "submit.validate", function( event ) {
				if ( validator.settings.debug ) {

					// Prevent form submit to be able to see console output
					event.preventDefault();
				}

				function handle() {
					var hidden, result;

					// Insert a hidden input as a replacement for the missing submit button
					// The hidden input is inserted in two cases:
					//   - A user defined a `submitHandler`
					//   - There was a pending request due to `remote` method and `stopRequest()`
					//     was called to submit the form in case it's valid
					if ( validator.submitButton && ( validator.settings.submitHandler || validator.formSubmitted ) ) {
						hidden = $( "<input type='hidden'/>" )
							.attr( "name", validator.submitButton.name )
							.val( $( validator.submitButton ).val() )
							.appendTo( validator.currentForm );
					}

					if ( validator.settings.submitHandler && !validator.settings.debug ) {
						result = validator.settings.submitHandler.call( validator, validator.currentForm, event );
						if ( hidden ) {

							// And clean up afterwards; thanks to no-block-scope, hidden can be referenced
							hidden.remove();
						}
						if ( result !== undefined ) {
							return result;
						}
						return false;
					}
					return true;
				}

				// Prevent submit for invalid forms or custom submit handlers
				if ( validator.cancelSubmit ) {
					validator.cancelSubmit = false;
					return handle();
				}
				if ( validator.form() ) {
					if ( validator.pendingRequest ) {
						validator.formSubmitted = true;
						return false;
					}
					return handle();
				} else {
					validator.focusInvalid();
					return false;
				}
			} );
		}

		return validator;
	},

	// https://jqueryvalidation.org/valid/
	valid: function() {
		var valid, validator, errorList;

		if ( $( this[ 0 ] ).is( "form" ) ) {
			valid = this.validate().form();
		} else {
			errorList = [];
			valid = true;
			validator = $( this[ 0 ].form ).validate();
			this.each( function() {
				valid = validator.element( this ) && valid;
				if ( !valid ) {
					errorList = errorList.concat( validator.errorList );
				}
			} );
			validator.errorList = errorList;
		}
		return valid;
	},

	// https://jqueryvalidation.org/rules/
	rules: function( command, argument ) {
		var element = this[ 0 ],
			settings, staticRules, existingRules, data, param, filtered;

		// If nothing is selected, return empty object; can't chain anyway
		if ( element == null ) {
			return;
		}

		if ( !element.form && element.isContentEditable ) {
			element.form = this.closest( "form" )[ 0 ];
			element.name = this.attr( "name" );
		}

		if ( element.form == null ) {
			return;
		}

		if ( command ) {
			settings = $.data( element.form, "validator" ).settings;
			staticRules = settings.rules;
			existingRules = $.validator.staticRules( element );
			switch ( command ) {
			case "add":
				$.extend( existingRules, $.validator.normalizeRule( argument ) );

				// Remove messages from rules, but allow them to be set separately
				delete existingRules.messages;
				staticRules[ element.name ] = existingRules;
				if ( argument.messages ) {
					settings.messages[ element.name ] = $.extend( settings.messages[ element.name ], argument.messages );
				}
				break;
			case "remove":
				if ( !argument ) {
					delete staticRules[ element.name ];
					return existingRules;
				}
				filtered = {};
				$.each( argument.split( /\s/ ), function( index, method ) {
					filtered[ method ] = existingRules[ method ];
					delete existingRules[ method ];
				} );
				return filtered;
			}
		}

		data = $.validator.normalizeRules(
		$.extend(
			{},
			$.validator.classRules( element ),
			$.validator.attributeRules( element ),
			$.validator.dataRules( element ),
			$.validator.staticRules( element )
		), element );

		// Make sure required is at front
		if ( data.required ) {
			param = data.required;
			delete data.required;
			data = $.extend( { required: param }, data );
		}

		// Make sure remote is at back
		if ( data.remote ) {
			param = data.remote;
			delete data.remote;
			data = $.extend( data, { remote: param } );
		}

		return data;
	}
} );

// Custom selectors
$.extend( $.expr.pseudos || $.expr[ ":" ], {		// '|| $.expr[ ":" ]' here enables backwards compatibility to jQuery 1.7. Can be removed when dropping jQ 1.7.x support

	// https://jqueryvalidation.org/blank-selector/
	blank: function( a ) {
		return !$.trim( "" + $( a ).val() );
	},

	// https://jqueryvalidation.org/filled-selector/
	filled: function( a ) {
		var val = $( a ).val();
		return val !== null && !!$.trim( "" + val );
	},

	// https://jqueryvalidation.org/unchecked-selector/
	unchecked: function( a ) {
		return !$( a ).prop( "checked" );
	}
} );

// Constructor for validator
$.validator = function( options, form ) {
	this.settings = $.extend( true, {}, $.validator.defaults, options );
	this.currentForm = form;
	this.init();
};

// https://jqueryvalidation.org/jQuery.validator.format/
$.validator.format = function( source, params ) {
	if ( arguments.length === 1 ) {
		return function() {
			var args = $.makeArray( arguments );
			args.unshift( source );
			return $.validator.format.apply( this, args );
		};
	}
	if ( params === undefined ) {
		return source;
	}
	if ( arguments.length > 2 && params.constructor !== Array  ) {
		params = $.makeArray( arguments ).slice( 1 );
	}
	if ( params.constructor !== Array ) {
		params = [ params ];
	}
	$.each( params, function( i, n ) {
		source = source.replace( new RegExp( "\\{" + i + "\\}", "g" ), function() {
			return n;
		} );
	} );
	return source;
};

$.extend( $.validator, {

	defaults: {
		messages: {},
		groups: {},
		rules: {},
		errorClass: "error",
		pendingClass: "pending",
		validClass: "valid",
		errorElement: "label",
		focusCleanup: false,
		focusInvalid: true,
		errorContainer: $( [] ),
		errorLabelContainer: $( [] ),
		onsubmit: true,
		ignore: ":hidden",
		ignoreTitle: false,
		onfocusin: function( element ) {
			this.lastActive = element;

			// Hide error label and remove error class on focus if enabled
			if ( this.settings.focusCleanup ) {
				if ( this.settings.unhighlight ) {
					this.settings.unhighlight.call( this, element, this.settings.errorClass, this.settings.validClass );
				}
				this.hideThese( this.errorsFor( element ) );
			}
		},
		onfocusout: function( element ) {
			if ( !this.checkable( element ) && ( element.name in this.submitted || !this.optional( element ) ) ) {
				this.element( element );
			}
		},
		onkeyup: function( element, event ) {

			// Avoid revalidate the field when pressing one of the following keys
			// Shift       => 16
			// Ctrl        => 17
			// Alt         => 18
			// Caps lock   => 20
			// End         => 35
			// Home        => 36
			// Left arrow  => 37
			// Up arrow    => 38
			// Right arrow => 39
			// Down arrow  => 40
			// Insert      => 45
			// Num lock    => 144
			// AltGr key   => 225
			var excludedKeys = [
				16, 17, 18, 20, 35, 36, 37,
				38, 39, 40, 45, 144, 225
			];

			if ( event.which === 9 && this.elementValue( element ) === "" || $.inArray( event.keyCode, excludedKeys ) !== -1 ) {
				return;
			} else if ( element.name in this.submitted || element.name in this.invalid ) {
				this.element( element );
			}
		},
		onclick: function( element ) {

			// Click on selects, radiobuttons and checkboxes
			if ( element.name in this.submitted ) {
				this.element( element );

			// Or option elements, check parent select in that case
			} else if ( element.parentNode.name in this.submitted ) {
				this.element( element.parentNode );
			}
		},
		highlight: function( element, errorClass, validClass ) {
			if ( element.type === "radio" ) {
				this.findByName( element.name ).addClass( errorClass ).removeClass( validClass );
			} else {
				$( element ).addClass( errorClass ).removeClass( validClass );
			}
		},
		unhighlight: function( element, errorClass, validClass ) {
			if ( element.type === "radio" ) {
				this.findByName( element.name ).removeClass( errorClass ).addClass( validClass );
			} else {
				$( element ).removeClass( errorClass ).addClass( validClass );
			}
		}
	},

	// https://jqueryvalidation.org/jQuery.validator.setDefaults/
	setDefaults: function( settings ) {
		$.extend( $.validator.defaults, settings );
	},

	messages: {
		required: "This field is required.",
		remote: "Please fix this field.",
		email: "Please enter a valid email address.",
		url: "Please enter a valid URL.",
		date: "Please enter a valid date.",
		dateISO: "Please enter a valid date (ISO).",
		number: "Please enter a valid number.",
		digits: "Please enter only digits.",
		equalTo: "Please enter the same value again.",
		maxlength: $.validator.format( "Please enter no more than {0} characters." ),
		minlength: $.validator.format( "Please enter at least {0} characters." ),
		rangelength: $.validator.format( "Please enter a value between {0} and {1} characters long." ),
		range: $.validator.format( "Please enter a value between {0} and {1}." ),
		max: $.validator.format( "Please enter a value less than or equal to {0}." ),
		min: $.validator.format( "Please enter a value greater than or equal to {0}." ),
		step: $.validator.format( "Please enter a multiple of {0}." )
	},

	autoCreateRanges: false,

	prototype: {

		init: function() {
			this.labelContainer = $( this.settings.errorLabelContainer );
			this.errorContext = this.labelContainer.length && this.labelContainer || $( this.currentForm );
			this.containers = $( this.settings.errorContainer ).add( this.settings.errorLabelContainer );
			this.submitted = {};
			this.valueCache = {};
			this.pendingRequest = 0;
			this.pending = {};
			this.invalid = {};
			this.reset();

			var currentForm = this.currentForm,
				groups = ( this.groups = {} ),
				rules;
			$.each( this.settings.groups, function( key, value ) {
				if ( typeof value === "string" ) {
					value = value.split( /\s/ );
				}
				$.each( value, function( index, name ) {
					groups[ name ] = key;
				} );
			} );
			rules = this.settings.rules;
			$.each( rules, function( key, value ) {
				rules[ key ] = $.validator.normalizeRule( value );
			} );

			function delegate( event ) {

				// Set form expando on contenteditable
				if ( !this.form && this.isContentEditable ) {
					this.form = $( this ).closest( "form" )[ 0 ];
					this.name = $( this ).attr( "name" );
				}

				// Ignore the element if it belongs to another form. This will happen mainly
				// when setting the `form` attribute of an input to the id of another form.
				if ( currentForm !== this.form ) {
					return;
				}

				var validator = $.data( this.form, "validator" ),
					eventType = "on" + event.type.replace( /^validate/, "" ),
					settings = validator.settings;
				if ( settings[ eventType ] && !$( this ).is( settings.ignore ) ) {
					settings[ eventType ].call( validator, this, event );
				}
			}

			$( this.currentForm )
				.on( "focusin.validate focusout.validate keyup.validate",
					":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], " +
					"[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], " +
					"[type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], " +
					"[type='radio'], [type='checkbox'], [contenteditable], [type='button']", delegate )

				// Support: Chrome, oldIE
				// "select" is provided as event.target when clicking a option
				.on( "click.validate", "select, option, [type='radio'], [type='checkbox']", delegate );

			if ( this.settings.invalidHandler ) {
				$( this.currentForm ).on( "invalid-form.validate", this.settings.invalidHandler );
			}
		},

		// https://jqueryvalidation.org/Validator.form/
		form: function() {
			this.checkForm();
			$.extend( this.submitted, this.errorMap );
			this.invalid = $.extend( {}, this.errorMap );
			if ( !this.valid() ) {
				$( this.currentForm ).triggerHandler( "invalid-form", [ this ] );
			}
			this.showErrors();
			return this.valid();
		},

		checkForm: function() {
			this.prepareForm();
			for ( var i = 0, elements = ( this.currentElements = this.elements() ); elements[ i ]; i++ ) {
				this.check( elements[ i ] );
			}
			return this.valid();
		},

		// https://jqueryvalidation.org/Validator.element/
		element: function( element ) {
			var cleanElement = this.clean( element ),
				checkElement = this.validationTargetFor( cleanElement ),
				v = this,
				result = true,
				rs, group;

			if ( checkElement === undefined ) {
				delete this.invalid[ cleanElement.name ];
			} else {
				this.prepareElement( checkElement );
				this.currentElements = $( checkElement );

				// If this element is grouped, then validate all group elements already
				// containing a value
				group = this.groups[ checkElement.name ];
				if ( group ) {
					$.each( this.groups, function( name, testgroup ) {
						if ( testgroup === group && name !== checkElement.name ) {
							cleanElement = v.validationTargetFor( v.clean( v.findByName( name ) ) );
							if ( cleanElement && cleanElement.name in v.invalid ) {
								v.currentElements.push( cleanElement );
								result = v.check( cleanElement ) && result;
							}
						}
					} );
				}

				rs = this.check( checkElement ) !== false;
				result = result && rs;
				if ( rs ) {
					this.invalid[ checkElement.name ] = false;
				} else {
					this.invalid[ checkElement.name ] = true;
				}

				if ( !this.numberOfInvalids() ) {

					// Hide error containers on last error
					this.toHide = this.toHide.add( this.containers );
				}
				this.showErrors();

				// Add aria-invalid status for screen readers
				$( element ).attr( "aria-invalid", !rs );
			}

			return result;
		},

		// https://jqueryvalidation.org/Validator.showErrors/
		showErrors: function( errors ) {
			if ( errors ) {
				var validator = this;

				// Add items to error list and map
				$.extend( this.errorMap, errors );
				this.errorList = $.map( this.errorMap, function( message, name ) {
					return {
						message: message,
						element: validator.findByName( name )[ 0 ]
					};
				} );

				// Remove items from success list
				this.successList = $.grep( this.successList, function( element ) {
					return !( element.name in errors );
				} );
			}
			if ( this.settings.showErrors ) {
				this.settings.showErrors.call( this, this.errorMap, this.errorList );
			} else {
				this.defaultShowErrors();
			}
		},

		// https://jqueryvalidation.org/Validator.resetForm/
		resetForm: function() {
			if ( $.fn.resetForm ) {
				$( this.currentForm ).resetForm();
			}
			this.invalid = {};
			this.submitted = {};
			this.prepareForm();
			this.hideErrors();
			var elements = this.elements()
				.removeData( "previousValue" )
				.removeAttr( "aria-invalid" );

			this.resetElements( elements );
		},

		resetElements: function( elements ) {
			var i;

			if ( this.settings.unhighlight ) {
				for ( i = 0; elements[ i ]; i++ ) {
					this.settings.unhighlight.call( this, elements[ i ],
						this.settings.errorClass, "" );
					this.findByName( elements[ i ].name ).removeClass( this.settings.validClass );
				}
			} else {
				elements
					.removeClass( this.settings.errorClass )
					.removeClass( this.settings.validClass );
			}
		},

		numberOfInvalids: function() {
			return this.objectLength( this.invalid );
		},

		objectLength: function( obj ) {
			/* jshint unused: false */
			var count = 0,
				i;
			for ( i in obj ) {

				// This check allows counting elements with empty error
				// message as invalid elements
				if ( obj[ i ] !== undefined && obj[ i ] !== null && obj[ i ] !== false ) {
					count++;
				}
			}
			return count;
		},

		hideErrors: function() {
			this.hideThese( this.toHide );
		},

		hideThese: function( errors ) {
			errors.not( this.containers ).text( "" );
			this.addWrapper( errors ).hide();
		},

		valid: function() {
			return this.size() === 0;
		},

		size: function() {
			return this.errorList.length;
		},

		focusInvalid: function() {
			if ( this.settings.focusInvalid ) {
				try {
					$( this.findLastActive() || this.errorList.length && this.errorList[ 0 ].element || [] )
					.filter( ":visible" )
					.focus()

					// Manually trigger focusin event; without it, focusin handler isn't called, findLastActive won't have anything to find
					.trigger( "focusin" );
				} catch ( e ) {

					// Ignore IE throwing errors when focusing hidden elements
				}
			}
		},

		findLastActive: function() {
			var lastActive = this.lastActive;
			return lastActive && $.grep( this.errorList, function( n ) {
				return n.element.name === lastActive.name;
			} ).length === 1 && lastActive;
		},

		elements: function() {
			var validator = this,
				rulesCache = {};

			// Select all valid inputs inside the form (no submit or reset buttons)
			return $( this.currentForm )
			.find( "input, select, textarea, [contenteditable]" )
			.not( ":submit, :reset, :image, :disabled" )
			.not( this.settings.ignore )
			.filter( function() {
				var name = this.name || $( this ).attr( "name" ); // For contenteditable
				if ( !name && validator.settings.debug && window.console ) {
					console.error( "%o has no name assigned", this );
				}

				// Set form expando on contenteditable
				if ( this.isContentEditable ) {
					this.form = $( this ).closest( "form" )[ 0 ];
					this.name = name;
				}

				// Ignore elements that belong to other/nested forms
				if ( this.form !== validator.currentForm ) {
					return false;
				}

				// Select only the first element for each name, and only those with rules specified
				if ( name in rulesCache || !validator.objectLength( $( this ).rules() ) ) {
					return false;
				}

				rulesCache[ name ] = true;
				return true;
			} );
		},

		clean: function( selector ) {
			return $( selector )[ 0 ];
		},

		errors: function() {
			var errorClass = this.settings.errorClass.split( " " ).join( "." );
			return $( this.settings.errorElement + "." + errorClass, this.errorContext );
		},

		resetInternals: function() {
			this.successList = [];
			this.errorList = [];
			this.errorMap = {};
			this.toShow = $( [] );
			this.toHide = $( [] );
		},

		reset: function() {
			this.resetInternals();
			this.currentElements = $( [] );
		},

		prepareForm: function() {
			this.reset();
			this.toHide = this.errors().add( this.containers );
		},

		prepareElement: function( element ) {
			this.reset();
			this.toHide = this.errorsFor( element );
		},

		elementValue: function( element ) {
			var $element = $( element ),
				type = element.type,
				val, idx;

			if ( type === "radio" || type === "checkbox" ) {
				return this.findByName( element.name ).filter( ":checked" ).val();
			} else if ( type === "number" && typeof element.validity !== "undefined" ) {
				return element.validity.badInput ? "NaN" : $element.val();
			}

			if ( element.isContentEditable ) {
				val = $element.text();
			} else {
				val = $element.val();
			}

			if ( type === "file" ) {

				// Modern browser (chrome & safari)
				if ( val.substr( 0, 12 ) === "C:\\fakepath\\" ) {
					return val.substr( 12 );
				}

				// Legacy browsers
				// Unix-based path
				idx = val.lastIndexOf( "/" );
				if ( idx >= 0 ) {
					return val.substr( idx + 1 );
				}

				// Windows-based path
				idx = val.lastIndexOf( "\\" );
				if ( idx >= 0 ) {
					return val.substr( idx + 1 );
				}

				// Just the file name
				return val;
			}

			if ( typeof val === "string" ) {
				return val.replace( /\r/g, "" );
			}
			return val;
		},

		check: function( element ) {
			element = this.validationTargetFor( this.clean( element ) );

			var rules = $( element ).rules(),
				rulesCount = $.map( rules, function( n, i ) {
					return i;
				} ).length,
				dependencyMismatch = false,
				val = this.elementValue( element ),
				result, method, rule, normalizer;

			// Prioritize the local normalizer defined for this element over the global one
			// if the former exists, otherwise user the global one in case it exists.
			if ( typeof rules.normalizer === "function" ) {
				normalizer = rules.normalizer;
			} else if (	typeof this.settings.normalizer === "function" ) {
				normalizer = this.settings.normalizer;
			}

			// If normalizer is defined, then call it to retreive the changed value instead
			// of using the real one.
			// Note that `this` in the normalizer is `element`.
			if ( normalizer ) {
				val = normalizer.call( element, val );

				// Delete the normalizer from rules to avoid treating it as a pre-defined method.
				delete rules.normalizer;
			}

			for ( method in rules ) {
				rule = { method: method, parameters: rules[ method ] };
				try {
					result = $.validator.methods[ method ].call( this, val, element, rule.parameters );

					// If a method indicates that the field is optional and therefore valid,
					// don't mark it as valid when there are no other rules
					if ( result === "dependency-mismatch" && rulesCount === 1 ) {
						dependencyMismatch = true;
						continue;
					}
					dependencyMismatch = false;

					if ( result === "pending" ) {
						this.toHide = this.toHide.not( this.errorsFor( element ) );
						return;
					}

					if ( !result ) {
						this.formatAndAdd( element, rule );
						return false;
					}
				} catch ( e ) {
					if ( this.settings.debug && window.console ) {
						console.log( "Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.", e );
					}
					if ( e instanceof TypeError ) {
						e.message += ".  Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.";
					}

					throw e;
				}
			}
			if ( dependencyMismatch ) {
				return;
			}
			if ( this.objectLength( rules ) ) {
				this.successList.push( element );
			}
			return true;
		},

		// Return the custom message for the given element and validation method
		// specified in the element's HTML5 data attribute
		// return the generic message if present and no method specific message is present
		customDataMessage: function( element, method ) {
			return $( element ).data( "msg" + method.charAt( 0 ).toUpperCase() +
				method.substring( 1 ).toLowerCase() ) || $( element ).data( "msg" );
		},

		// Return the custom message for the given element name and validation method
		customMessage: function( name, method ) {
			var m = this.settings.messages[ name ];
			return m && ( m.constructor === String ? m : m[ method ] );
		},

		// Return the first defined argument, allowing empty strings
		findDefined: function() {
			for ( var i = 0; i < arguments.length; i++ ) {
				if ( arguments[ i ] !== undefined ) {
					return arguments[ i ];
				}
			}
			return undefined;
		},

		// The second parameter 'rule' used to be a string, and extended to an object literal
		// of the following form:
		// rule = {
		//     method: "method name",
		//     parameters: "the given method parameters"
		// }
		//
		// The old behavior still supported, kept to maintain backward compatibility with
		// old code, and will be removed in the next major release.
		defaultMessage: function( element, rule ) {
			if ( typeof rule === "string" ) {
				rule = { method: rule };
			}

			var message = this.findDefined(
					this.customMessage( element.name, rule.method ),
					this.customDataMessage( element, rule.method ),

					// 'title' is never undefined, so handle empty string as undefined
					!this.settings.ignoreTitle && element.title || undefined,
					$.validator.messages[ rule.method ],
					"<strong>Warning: No message defined for " + element.name + "</strong>"
				),
				theregex = /\$?\{(\d+)\}/g;
			if ( typeof message === "function" ) {
				message = message.call( this, rule.parameters, element );
			} else if ( theregex.test( message ) ) {
				message = $.validator.format( message.replace( theregex, "{$1}" ), rule.parameters );
			}

			return message;
		},

		formatAndAdd: function( element, rule ) {
			var message = this.defaultMessage( element, rule );

			this.errorList.push( {
				message: message,
				element: element,
				method: rule.method
			} );

			this.errorMap[ element.name ] = message;
			this.submitted[ element.name ] = message;
		},

		addWrapper: function( toToggle ) {
			if ( this.settings.wrapper ) {
				toToggle = toToggle.add( toToggle.parent( this.settings.wrapper ) );
			}
			return toToggle;
		},

		defaultShowErrors: function() {
			var i, elements, error;
			for ( i = 0; this.errorList[ i ]; i++ ) {
				error = this.errorList[ i ];
				if ( this.settings.highlight ) {
					this.settings.highlight.call( this, error.element, this.settings.errorClass, this.settings.validClass );
				}
				this.showLabel( error.element, error.message );
			}
			if ( this.errorList.length ) {
				this.toShow = this.toShow.add( this.containers );
			}
			if ( this.settings.success ) {
				for ( i = 0; this.successList[ i ]; i++ ) {
					this.showLabel( this.successList[ i ] );
				}
			}
			if ( this.settings.unhighlight ) {
				for ( i = 0, elements = this.validElements(); elements[ i ]; i++ ) {
					this.settings.unhighlight.call( this, elements[ i ], this.settings.errorClass, this.settings.validClass );
				}
			}
			this.toHide = this.toHide.not( this.toShow );
			this.hideErrors();
			this.addWrapper( this.toShow ).show();
		},

		validElements: function() {
			return this.currentElements.not( this.invalidElements() );
		},

		invalidElements: function() {
			return $( this.errorList ).map( function() {
				return this.element;
			} );
		},

		showLabel: function( element, message ) {
			var place, group, errorID, v,
				error = this.errorsFor( element ),
				elementID = this.idOrName( element ),
				describedBy = $( element ).attr( "aria-describedby" );

			if ( error.length ) {

				// Refresh error/success class
				error.removeClass( this.settings.validClass ).addClass( this.settings.errorClass );

				// Replace message on existing label
				error.html( message );
			} else {

				// Create error element
				error = $( "<" + this.settings.errorElement + ">" )
					.attr( "id", elementID + "-error" )
					.addClass( this.settings.errorClass )
					.html( message || "" );

				// Maintain reference to the element to be placed into the DOM
				place = error;
				if ( this.settings.wrapper ) {

					// Make sure the element is visible, even in IE
					// actually showing the wrapped element is handled elsewhere
					place = error.hide().show().wrap( "<" + this.settings.wrapper + "/>" ).parent();
				}
				if ( this.labelContainer.length ) {
					this.labelContainer.append( place );
				} else if ( this.settings.errorPlacement ) {
					this.settings.errorPlacement.call( this, place, $( element ) );
				} else {
					place.insertAfter( element );
				}

				// Link error back to the element
				if ( error.is( "label" ) ) {

					// If the error is a label, then associate using 'for'
					error.attr( "for", elementID );

					// If the element is not a child of an associated label, then it's necessary
					// to explicitly apply aria-describedby
				} else if ( error.parents( "label[for='" + this.escapeCssMeta( elementID ) + "']" ).length === 0 ) {
					errorID = error.attr( "id" );

					// Respect existing non-error aria-describedby
					if ( !describedBy ) {
						describedBy = errorID;
					} else if ( !describedBy.match( new RegExp( "\\b" + this.escapeCssMeta( errorID ) + "\\b" ) ) ) {

						// Add to end of list if not already present
						describedBy += " " + errorID;
					}
					$( element ).attr( "aria-describedby", describedBy );

					// If this element is grouped, then assign to all elements in the same group
					group = this.groups[ element.name ];
					if ( group ) {
						v = this;
						$.each( v.groups, function( name, testgroup ) {
							if ( testgroup === group ) {
								$( "[name='" + v.escapeCssMeta( name ) + "']", v.currentForm )
									.attr( "aria-describedby", error.attr( "id" ) );
							}
						} );
					}
				}
			}
			if ( !message && this.settings.success ) {
				error.text( "" );
				if ( typeof this.settings.success === "string" ) {
					error.addClass( this.settings.success );
				} else {
					this.settings.success( error, element );
				}
			}
			this.toShow = this.toShow.add( error );
		},

		errorsFor: function( element ) {
			var name = this.escapeCssMeta( this.idOrName( element ) ),
				describer = $( element ).attr( "aria-describedby" ),
				selector = "label[for='" + name + "'], label[for='" + name + "'] *";

			// 'aria-describedby' should directly reference the error element
			if ( describer ) {
				selector = selector + ", #" + this.escapeCssMeta( describer )
					.replace( /\s+/g, ", #" );
			}

			return this
				.errors()
				.filter( selector );
		},

		// See https://api.jquery.com/category/selectors/, for CSS
		// meta-characters that should be escaped in order to be used with JQuery
		// as a literal part of a name/id or any selector.
		escapeCssMeta: function( string ) {
			return string.replace( /([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1" );
		},

		idOrName: function( element ) {
			return this.groups[ element.name ] || ( this.checkable( element ) ? element.name : element.id || element.name );
		},

		validationTargetFor: function( element ) {

			// If radio/checkbox, validate first element in group instead
			if ( this.checkable( element ) ) {
				element = this.findByName( element.name );
			}

			// Always apply ignore filter
			return $( element ).not( this.settings.ignore )[ 0 ];
		},

		checkable: function( element ) {
			return ( /radio|checkbox/i ).test( element.type );
		},

		findByName: function( name ) {
			return $( this.currentForm ).find( "[name='" + this.escapeCssMeta( name ) + "']" );
		},

		getLength: function( value, element ) {
			switch ( element.nodeName.toLowerCase() ) {
			case "select":
				return $( "option:selected", element ).length;
			case "input":
				if ( this.checkable( element ) ) {
					return this.findByName( element.name ).filter( ":checked" ).length;
				}
			}
			return value.length;
		},

		depend: function( param, element ) {
			return this.dependTypes[ typeof param ] ? this.dependTypes[ typeof param ]( param, element ) : true;
		},

		dependTypes: {
			"boolean": function( param ) {
				return param;
			},
			"string": function( param, element ) {
				return !!$( param, element.form ).length;
			},
			"function": function( param, element ) {
				return param( element );
			}
		},

		optional: function( element ) {
			var val = this.elementValue( element );
			return !$.validator.methods.required.call( this, val, element ) && "dependency-mismatch";
		},

		startRequest: function( element ) {
			if ( !this.pending[ element.name ] ) {
				this.pendingRequest++;
				$( element ).addClass( this.settings.pendingClass );
				this.pending[ element.name ] = true;
			}
		},

		stopRequest: function( element, valid ) {
			this.pendingRequest--;

			// Sometimes synchronization fails, make sure pendingRequest is never < 0
			if ( this.pendingRequest < 0 ) {
				this.pendingRequest = 0;
			}
			delete this.pending[ element.name ];
			$( element ).removeClass( this.settings.pendingClass );
			if ( valid && this.pendingRequest === 0 && this.formSubmitted && this.form() ) {
				$( this.currentForm ).submit();

				// Remove the hidden input that was used as a replacement for the
				// missing submit button. The hidden input is added by `handle()`
				// to ensure that the value of the used submit button is passed on
				// for scripted submits triggered by this method
				if ( this.submitButton ) {
					$( "input:hidden[name='" + this.submitButton.name + "']", this.currentForm ).remove();
				}

				this.formSubmitted = false;
			} else if ( !valid && this.pendingRequest === 0 && this.formSubmitted ) {
				$( this.currentForm ).triggerHandler( "invalid-form", [ this ] );
				this.formSubmitted = false;
			}
		},

		previousValue: function( element, method ) {
			method = typeof method === "string" && method || "remote";

			return $.data( element, "previousValue" ) || $.data( element, "previousValue", {
				old: null,
				valid: true,
				message: this.defaultMessage( element, { method: method } )
			} );
		},

		// Cleans up all forms and elements, removes validator-specific events
		destroy: function() {
			this.resetForm();

			$( this.currentForm )
				.off( ".validate" )
				.removeData( "validator" )
				.find( ".validate-equalTo-blur" )
					.off( ".validate-equalTo" )
					.removeClass( "validate-equalTo-blur" )
				.find( ".validate-lessThan-blur" )
					.off( ".validate-lessThan" )
					.removeClass( "validate-lessThan-blur" )
				.find( ".validate-lessThanEqual-blur" )
					.off( ".validate-lessThanEqual" )
					.removeClass( "validate-lessThanEqual-blur" )
				.find( ".validate-greaterThanEqual-blur" )
					.off( ".validate-greaterThanEqual" )
					.removeClass( "validate-greaterThanEqual-blur" )
				.find( ".validate-greaterThan-blur" )
					.off( ".validate-greaterThan" )
					.removeClass( "validate-greaterThan-blur" );
		}

	},

	classRuleSettings: {
		required: { required: true },
		email: { email: true },
		url: { url: true },
		date: { date: true },
		dateISO: { dateISO: true },
		number: { number: true },
		digits: { digits: true },
		creditcard: { creditcard: true }
	},

	addClassRules: function( className, rules ) {
		if ( className.constructor === String ) {
			this.classRuleSettings[ className ] = rules;
		} else {
			$.extend( this.classRuleSettings, className );
		}
	},

	classRules: function( element ) {
		var rules = {},
			classes = $( element ).attr( "class" );

		if ( classes ) {
			$.each( classes.split( " " ), function() {
				if ( this in $.validator.classRuleSettings ) {
					$.extend( rules, $.validator.classRuleSettings[ this ] );
				}
			} );
		}
		return rules;
	},

	normalizeAttributeRule: function( rules, type, method, value ) {

		// Convert the value to a number for number inputs, and for text for backwards compability
		// allows type="date" and others to be compared as strings
		if ( /min|max|step/.test( method ) && ( type === null || /number|range|text/.test( type ) ) ) {
			value = Number( value );

			// Support Opera Mini, which returns NaN for undefined minlength
			if ( isNaN( value ) ) {
				value = undefined;
			}
		}

		if ( value || value === 0 ) {
			rules[ method ] = value;
		} else if ( type === method && type !== "range" ) {

			// Exception: the jquery validate 'range' method
			// does not test for the html5 'range' type
			rules[ method ] = true;
		}
	},

	attributeRules: function( element ) {
		var rules = {},
			$element = $( element ),
			type = element.getAttribute( "type" ),
			method, value;

		for ( method in $.validator.methods ) {

			// Support for <input required> in both html5 and older browsers
			if ( method === "required" ) {
				value = element.getAttribute( method );

				// Some browsers return an empty string for the required attribute
				// and non-HTML5 browsers might have required="" markup
				if ( value === "" ) {
					value = true;
				}

				// Force non-HTML5 browsers to return bool
				value = !!value;
			} else {
				value = $element.attr( method );
			}

			this.normalizeAttributeRule( rules, type, method, value );
		}

		// 'maxlength' may be returned as -1, 2147483647 ( IE ) and 524288 ( safari ) for text inputs
		if ( rules.maxlength && /-1|2147483647|524288/.test( rules.maxlength ) ) {
			delete rules.maxlength;
		}

		return rules;
	},

	dataRules: function( element ) {
		var rules = {},
			$element = $( element ),
			type = element.getAttribute( "type" ),
			method, value;

		for ( method in $.validator.methods ) {
			value = $element.data( "rule" + method.charAt( 0 ).toUpperCase() + method.substring( 1 ).toLowerCase() );

			// Cast empty attributes like `data-rule-required` to `true`
			if ( value === "" ) {
				value = true;
			}

			this.normalizeAttributeRule( rules, type, method, value );
		}
		return rules;
	},

	staticRules: function( element ) {
		var rules = {},
			validator = $.data( element.form, "validator" );

		if ( validator.settings.rules ) {
			rules = $.validator.normalizeRule( validator.settings.rules[ element.name ] ) || {};
		}
		return rules;
	},

	normalizeRules: function( rules, element ) {

		// Handle dependency check
		$.each( rules, function( prop, val ) {

			// Ignore rule when param is explicitly false, eg. required:false
			if ( val === false ) {
				delete rules[ prop ];
				return;
			}
			if ( val.param || val.depends ) {
				var keepRule = true;
				switch ( typeof val.depends ) {
				case "string":
					keepRule = !!$( val.depends, element.form ).length;
					break;
				case "function":
					keepRule = val.depends.call( element, element );
					break;
				}
				if ( keepRule ) {
					rules[ prop ] = val.param !== undefined ? val.param : true;
				} else {
					$.data( element.form, "validator" ).resetElements( $( element ) );
					delete rules[ prop ];
				}
			}
		} );

		// Evaluate parameters
		$.each( rules, function( rule, parameter ) {
			rules[ rule ] = $.isFunction( parameter ) && rule !== "normalizer" ? parameter( element ) : parameter;
		} );

		// Clean number parameters
		$.each( [ "minlength", "maxlength" ], function() {
			if ( rules[ this ] ) {
				rules[ this ] = Number( rules[ this ] );
			}
		} );
		$.each( [ "rangelength", "range" ], function() {
			var parts;
			if ( rules[ this ] ) {
				if ( $.isArray( rules[ this ] ) ) {
					rules[ this ] = [ Number( rules[ this ][ 0 ] ), Number( rules[ this ][ 1 ] ) ];
				} else if ( typeof rules[ this ] === "string" ) {
					parts = rules[ this ].replace( /[\[\]]/g, "" ).split( /[\s,]+/ );
					rules[ this ] = [ Number( parts[ 0 ] ), Number( parts[ 1 ] ) ];
				}
			}
		} );

		if ( $.validator.autoCreateRanges ) {

			// Auto-create ranges
			if ( rules.min != null && rules.max != null ) {
				rules.range = [ rules.min, rules.max ];
				delete rules.min;
				delete rules.max;
			}
			if ( rules.minlength != null && rules.maxlength != null ) {
				rules.rangelength = [ rules.minlength, rules.maxlength ];
				delete rules.minlength;
				delete rules.maxlength;
			}
		}

		return rules;
	},

	// Converts a simple string to a {string: true} rule, e.g., "required" to {required:true}
	normalizeRule: function( data ) {
		if ( typeof data === "string" ) {
			var transformed = {};
			$.each( data.split( /\s/ ), function() {
				transformed[ this ] = true;
			} );
			data = transformed;
		}
		return data;
	},

	// https://jqueryvalidation.org/jQuery.validator.addMethod/
	addMethod: function( name, method, message ) {
		$.validator.methods[ name ] = method;
		$.validator.messages[ name ] = message !== undefined ? message : $.validator.messages[ name ];
		if ( method.length < 3 ) {
			$.validator.addClassRules( name, $.validator.normalizeRule( name ) );
		}
	},

	// https://jqueryvalidation.org/jQuery.validator.methods/
	methods: {

		// https://jqueryvalidation.org/required-method/
		required: function( value, element, param ) {

			// Check if dependency is met
			if ( !this.depend( param, element ) ) {
				return "dependency-mismatch";
			}
			if ( element.nodeName.toLowerCase() === "select" ) {

				// Could be an array for select-multiple or a string, both are fine this way
				var val = $( element ).val();
				return val && val.length > 0;
			}
			if ( this.checkable( element ) ) {
				return this.getLength( value, element ) > 0;
			}
			return value !== undefined && value !== null && value.length > 0;
		},

		// https://jqueryvalidation.org/email-method/
		email: function( value, element ) {

			// From https://html.spec.whatwg.org/multipage/forms.html#valid-e-mail-address
			// Retrieved 2014-01-14
			// If you have a problem with this implementation, report a bug against the above spec
			// Or use custom methods to implement your own email validation
			return this.optional( element ) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test( value );
		},

		// https://jqueryvalidation.org/url-method/
		url: function( value, element ) {

			// Copyright (c) 2010-2013 Diego Perini, MIT licensed
			// https://gist.github.com/dperini/729294
			// see also https://mathiasbynens.be/demo/url-regex
			// modified to allow protocol-relative URLs
			return this.optional( element ) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test( value );
		},

		// https://jqueryvalidation.org/date-method/
		date: ( function() {
			var called = false;

			return function( value, element ) {
				if ( !called ) {
					called = true;
					if ( this.settings.debug && window.console ) {
						console.warn(
							"The `date` method is deprecated and will be removed in version '2.0.0'.\n" +
							"Please don't use it, since it relies on the Date constructor, which\n" +
							"behaves very differently across browsers and locales. Use `dateISO`\n" +
							"instead or one of the locale specific methods in `localizations/`\n" +
							"and `additional-methods.js`."
						);
					}
				}

				return this.optional( element ) || !/Invalid|NaN/.test( new Date( value ).toString() );
			};
		}() ),

		// https://jqueryvalidation.org/dateISO-method/
		dateISO: function( value, element ) {
			return this.optional( element ) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test( value );
		},

		// https://jqueryvalidation.org/number-method/
		number: function( value, element ) {
			return this.optional( element ) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test( value );
		},

		// https://jqueryvalidation.org/digits-method/
		digits: function( value, element ) {
			return this.optional( element ) || /^\d+$/.test( value );
		},

		// https://jqueryvalidation.org/minlength-method/
		minlength: function( value, element, param ) {
			var length = $.isArray( value ) ? value.length : this.getLength( value, element );
			return this.optional( element ) || length >= param;
		},

		// https://jqueryvalidation.org/maxlength-method/
		maxlength: function( value, element, param ) {
			var length = $.isArray( value ) ? value.length : this.getLength( value, element );
			return this.optional( element ) || length <= param;
		},

		// https://jqueryvalidation.org/rangelength-method/
		rangelength: function( value, element, param ) {
			var length = $.isArray( value ) ? value.length : this.getLength( value, element );
			return this.optional( element ) || ( length >= param[ 0 ] && length <= param[ 1 ] );
		},

		// https://jqueryvalidation.org/min-method/
		min: function( value, element, param ) {
			return this.optional( element ) || value >= param;
		},

		// https://jqueryvalidation.org/max-method/
		max: function( value, element, param ) {
			return this.optional( element ) || value <= param;
		},

		// https://jqueryvalidation.org/range-method/
		range: function( value, element, param ) {
			return this.optional( element ) || ( value >= param[ 0 ] && value <= param[ 1 ] );
		},

		// https://jqueryvalidation.org/step-method/
		step: function( value, element, param ) {
			var type = $( element ).attr( "type" ),
				errorMessage = "Step attribute on input type " + type + " is not supported.",
				supportedTypes = [ "text", "number", "range" ],
				re = new RegExp( "\\b" + type + "\\b" ),
				notSupported = type && !re.test( supportedTypes.join() ),
				decimalPlaces = function( num ) {
					var match = ( "" + num ).match( /(?:\.(\d+))?$/ );
					if ( !match ) {
						return 0;
					}

					// Number of digits right of decimal point.
					return match[ 1 ] ? match[ 1 ].length : 0;
				},
				toInt = function( num ) {
					return Math.round( num * Math.pow( 10, decimals ) );
				},
				valid = true,
				decimals;

			// Works only for text, number and range input types
			// TODO find a way to support input types date, datetime, datetime-local, month, time and week
			if ( notSupported ) {
				throw new Error( errorMessage );
			}

			decimals = decimalPlaces( param );

			// Value can't have too many decimals
			if ( decimalPlaces( value ) > decimals || toInt( value ) % toInt( param ) !== 0 ) {
				valid = false;
			}

			return this.optional( element ) || valid;
		},

		// https://jqueryvalidation.org/equalTo-method/
		equalTo: function( value, element, param ) {

			// Bind to the blur event of the target in order to revalidate whenever the target field is updated
			var target = $( param );
			if ( this.settings.onfocusout && target.not( ".validate-equalTo-blur" ).length ) {
				target.addClass( "validate-equalTo-blur" ).on( "blur.validate-equalTo", function() {
					$( element ).valid();
				} );
			}
			return value === target.val();
		},

		// https://jqueryvalidation.org/remote-method/
		remote: function( value, element, param, method ) {
			if ( this.optional( element ) ) {
				return "dependency-mismatch";
			}

			method = typeof method === "string" && method || "remote";

			var previous = this.previousValue( element, method ),
				validator, data, optionDataString;

			if ( !this.settings.messages[ element.name ] ) {
				this.settings.messages[ element.name ] = {};
			}
			previous.originalMessage = previous.originalMessage || this.settings.messages[ element.name ][ method ];
			this.settings.messages[ element.name ][ method ] = previous.message;

			param = typeof param === "string" && { url: param } || param;
			optionDataString = $.param( $.extend( { data: value }, param.data ) );
			if ( previous.old === optionDataString ) {
				return previous.valid;
			}

			previous.old = optionDataString;
			validator = this;
			this.startRequest( element );
			data = {};
			data[ element.name ] = value;
			$.ajax( $.extend( true, {
				mode: "abort",
				port: "validate" + element.name,
				dataType: "json",
				data: data,
				context: validator.currentForm,
				success: function( response ) {
					var valid = response === true || response === "true",
						errors, message, submitted;

					validator.settings.messages[ element.name ][ method ] = previous.originalMessage;
					if ( valid ) {
						submitted = validator.formSubmitted;
						validator.resetInternals();
						validator.toHide = validator.errorsFor( element );
						validator.formSubmitted = submitted;
						validator.successList.push( element );
						validator.invalid[ element.name ] = false;
						validator.showErrors();
					} else {
						errors = {};
						message = response || validator.defaultMessage( element, { method: method, parameters: value } );
						errors[ element.name ] = previous.message = message;
						validator.invalid[ element.name ] = true;
						validator.showErrors( errors );
					}
					previous.valid = valid;
					validator.stopRequest( element, valid );
				}
			}, param ) );
			return "pending";
		}
	}

} );

// Ajax mode: abort
// usage: $.ajax({ mode: "abort"[, port: "uniqueport"]});
// if mode:"abort" is used, the previous request on that port (port can be undefined) is aborted via XMLHttpRequest.abort()

var pendingRequests = {},
	ajax;

// Use a prefilter if available (1.5+)
if ( $.ajaxPrefilter ) {
	$.ajaxPrefilter( function( settings, _, xhr ) {
		var port = settings.port;
		if ( settings.mode === "abort" ) {
			if ( pendingRequests[ port ] ) {
				pendingRequests[ port ].abort();
			}
			pendingRequests[ port ] = xhr;
		}
	} );
} else {

	// Proxy ajax
	ajax = $.ajax;
	$.ajax = function( settings ) {
		var mode = ( "mode" in settings ? settings : $.ajaxSettings ).mode,
			port = ( "port" in settings ? settings : $.ajaxSettings ).port;
		if ( mode === "abort" ) {
			if ( pendingRequests[ port ] ) {
				pendingRequests[ port ].abort();
			}
			pendingRequests[ port ] = ajax.apply( this, arguments );
			return pendingRequests[ port ];
		}
		return ajax.apply( this, arguments );
	};
}
return $;
}));

/*!
 * jQuery Validation Plugin v1.18.0
 *
 * https://jqueryvalidation.org/
 *
 * Copyright (c) 2018 Jörn Zaefferer
 * Released under the MIT license
 */
(function( factory ) {
	if ( typeof define === "function" && define.amd ) {
		define( ["jquery", "./jquery.validate"], factory );
	} else if (typeof module === "object" && module.exports) {
		module.exports = factory( require( "jquery" ) );
	} else {
		factory( jQuery );
	}
}(function( $ ) {

( function() {

	function stripHtml( value ) {

		// Remove html tags and space chars
		return value.replace( /<.[^<>]*?>/g, " " ).replace( /&nbsp;|&#160;/gi, " " )

		// Remove punctuation
		.replace( /[.(),;:!?%#$'\"_+=\/\-“”’]*/g, "" );
	}

	$.validator.addMethod( "maxWords", function( value, element, params ) {
		return this.optional( element ) || stripHtml( value ).match( /\b\w+\b/g ).length <= params;
	}, $.validator.format( "Please enter {0} words or less." ) );

	$.validator.addMethod( "minWords", function( value, element, params ) {
		return this.optional( element ) || stripHtml( value ).match( /\b\w+\b/g ).length >= params;
	}, $.validator.format( "Please enter at least {0} words." ) );

	$.validator.addMethod( "rangeWords", function( value, element, params ) {
		var valueStripped = stripHtml( value ),
			regex = /\b\w+\b/g;
		return this.optional( element ) || valueStripped.match( regex ).length >= params[ 0 ] && valueStripped.match( regex ).length <= params[ 1 ];
	}, $.validator.format( "Please enter between {0} and {1} words." ) );

}() );

// Accept a value from a file input based on a required mimetype
$.validator.addMethod( "accept", function( value, element, param ) {

	// Split mime on commas in case we have multiple types we can accept
	var typeParam = typeof param === "string" ? param.replace( /\s/g, "" ) : "image/*",
		optionalValue = this.optional( element ),
		i, file, regex;

	// Element is optional
	if ( optionalValue ) {
		return optionalValue;
	}

	if ( $( element ).attr( "type" ) === "file" ) {

		// Escape string to be used in the regex
		// see: https://stackoverflow.com/questions/3446170/escape-string-for-use-in-javascript-regex
		// Escape also "/*" as "/.*" as a wildcard
		typeParam = typeParam
				.replace( /[\-\[\]\/\{\}\(\)\+\?\.\\\^\$\|]/g, "\\$&" )
				.replace( /,/g, "|" )
				.replace( /\/\*/g, "/.*" );

		// Check if the element has a FileList before checking each file
		if ( element.files && element.files.length ) {
			regex = new RegExp( ".?(" + typeParam + ")$", "i" );
			for ( i = 0; i < element.files.length; i++ ) {
				file = element.files[ i ];

				// Grab the mimetype from the loaded file, verify it matches
				if ( !file.type.match( regex ) ) {
					return false;
				}
			}
		}
	}

	// Either return true because we've validated each file, or because the
	// browser does not support element.files and the FileList feature
	return true;
}, $.validator.format( "Please enter a value with a valid mimetype." ) );

$.validator.addMethod( "alphanumeric", function( value, element ) {
	return this.optional( element ) || /^\w+$/i.test( value );
}, "Letters, numbers, and underscores only please" );

/*
 * Dutch bank account numbers (not 'giro' numbers) have 9 digits
 * and pass the '11 check'.
 * We accept the notation with spaces, as that is common.
 * acceptable: 123456789 or 12 34 56 789
 */
$.validator.addMethod( "bankaccountNL", function( value, element ) {
	if ( this.optional( element ) ) {
		return true;
	}
	if ( !( /^[0-9]{9}|([0-9]{2} ){3}[0-9]{3}$/.test( value ) ) ) {
		return false;
	}

	// Now '11 check'
	var account = value.replace( / /g, "" ), // Remove spaces
		sum = 0,
		len = account.length,
		pos, factor, digit;
	for ( pos = 0; pos < len; pos++ ) {
		factor = len - pos;
		digit = account.substring( pos, pos + 1 );
		sum = sum + factor * digit;
	}
	return sum % 11 === 0;
}, "Please specify a valid bank account number" );

$.validator.addMethod( "bankorgiroaccountNL", function( value, element ) {
	return this.optional( element ) ||
			( $.validator.methods.bankaccountNL.call( this, value, element ) ) ||
			( $.validator.methods.giroaccountNL.call( this, value, element ) );
}, "Please specify a valid bank or giro account number" );

/**
 * BIC is the business identifier code (ISO 9362). This BIC check is not a guarantee for authenticity.
 *
 * BIC pattern: BBBBCCLLbbb (8 or 11 characters long; bbb is optional)
 *
 * Validation is case-insensitive. Please make sure to normalize input yourself.
 *
 * BIC definition in detail:
 * - First 4 characters - bank code (only letters)
 * - Next 2 characters - ISO 3166-1 alpha-2 country code (only letters)
 * - Next 2 characters - location code (letters and digits)
 *   a. shall not start with '0' or '1'
 *   b. second character must be a letter ('O' is not allowed) or digit ('0' for test (therefore not allowed), '1' denoting passive participant, '2' typically reverse-billing)
 * - Last 3 characters - branch code, optional (shall not start with 'X' except in case of 'XXX' for primary office) (letters and digits)
 */
$.validator.addMethod( "bic", function( value, element ) {
    return this.optional( element ) || /^([A-Z]{6}[A-Z2-9][A-NP-Z1-9])(X{3}|[A-WY-Z0-9][A-Z0-9]{2})?$/.test( value.toUpperCase() );
}, "Please specify a valid BIC code" );

/*
 * Código de identificación fiscal ( CIF ) is the tax identification code for Spanish legal entities
 * Further rules can be found in Spanish on http://es.wikipedia.org/wiki/C%C3%B3digo_de_identificaci%C3%B3n_fiscal
 *
 * Spanish CIF structure:
 *
 * [ T ][ P ][ P ][ N ][ N ][ N ][ N ][ N ][ C ]
 *
 * Where:
 *
 * T: 1 character. Kind of Organization Letter: [ABCDEFGHJKLMNPQRSUVW]
 * P: 2 characters. Province.
 * N: 5 characters. Secuencial Number within the province.
 * C: 1 character. Control Digit: [0-9A-J].
 *
 * [ T ]: Kind of Organizations. Possible values:
 *
 *   A. Corporations
 *   B. LLCs
 *   C. General partnerships
 *   D. Companies limited partnerships
 *   E. Communities of goods
 *   F. Cooperative Societies
 *   G. Associations
 *   H. Communities of homeowners in horizontal property regime
 *   J. Civil Societies
 *   K. Old format
 *   L. Old format
 *   M. Old format
 *   N. Nonresident entities
 *   P. Local authorities
 *   Q. Autonomous bodies, state or not, and the like, and congregations and religious institutions
 *   R. Congregations and religious institutions (since 2008 ORDER EHA/451/2008)
 *   S. Organs of State Administration and regions
 *   V. Agrarian Transformation
 *   W. Permanent establishments of non-resident in Spain
 *
 * [ C ]: Control Digit. It can be a number or a letter depending on T value:
 * [ T ]  -->  [ C ]
 * ------    ----------
 *   A         Number
 *   B         Number
 *   E         Number
 *   H         Number
 *   K         Letter
 *   P         Letter
 *   Q         Letter
 *   S         Letter
 *
 */
$.validator.addMethod( "cifES", function( value, element ) {
	"use strict";

	if ( this.optional( element ) ) {
		return true;
	}

	var cifRegEx = new RegExp( /^([ABCDEFGHJKLMNPQRSUVW])(\d{7})([0-9A-J])$/gi );
	var letter  = value.substring( 0, 1 ), // [ T ]
		number  = value.substring( 1, 8 ), // [ P ][ P ][ N ][ N ][ N ][ N ][ N ]
		control = value.substring( 8, 9 ), // [ C ]
		all_sum = 0,
		even_sum = 0,
		odd_sum = 0,
		i, n,
		control_digit,
		control_letter;

	function isOdd( n ) {
		return n % 2 === 0;
	}

	// Quick format test
	if ( value.length !== 9 || !cifRegEx.test( value ) ) {
		return false;
	}

	for ( i = 0; i < number.length; i++ ) {
		n = parseInt( number[ i ], 10 );

		// Odd positions
		if ( isOdd( i ) ) {

			// Odd positions are multiplied first.
			n *= 2;

			// If the multiplication is bigger than 10 we need to adjust
			odd_sum += n < 10 ? n : n - 9;

		// Even positions
		// Just sum them
		} else {
			even_sum += n;
		}
	}

	all_sum = even_sum + odd_sum;
	control_digit = ( 10 - ( all_sum ).toString().substr( -1 ) ).toString();
	control_digit = parseInt( control_digit, 10 ) > 9 ? "0" : control_digit;
	control_letter = "JABCDEFGHI".substr( control_digit, 1 ).toString();

	// Control must be a digit
	if ( letter.match( /[ABEH]/ ) ) {
		return control === control_digit;

	// Control must be a letter
	} else if ( letter.match( /[KPQS]/ ) ) {
		return control === control_letter;
	}

	// Can be either
	return control === control_digit || control === control_letter;

}, "Please specify a valid CIF number." );

/*
 * Brazillian CPF number (Cadastrado de Pessoas Físicas) is the equivalent of a Brazilian tax registration number.
 * CPF numbers have 11 digits in total: 9 numbers followed by 2 check numbers that are being used for validation.
 */
$.validator.addMethod( "cpfBR", function( value ) {

	// Removing special characters from value
	value = value.replace( /([~!@#$%^&*()_+=`{}\[\]\-|\\:;'<>,.\/? ])+/g, "" );

	// Checking value to have 11 digits only
	if ( value.length !== 11 ) {
		return false;
	}

	var sum = 0,
		firstCN, secondCN, checkResult, i;

	firstCN = parseInt( value.substring( 9, 10 ), 10 );
	secondCN = parseInt( value.substring( 10, 11 ), 10 );

	checkResult = function( sum, cn ) {
		var result = ( sum * 10 ) % 11;
		if ( ( result === 10 ) || ( result === 11 ) ) {
			result = 0;
		}
		return ( result === cn );
	};

	// Checking for dump data
	if ( value === "" ||
		value === "00000000000" ||
		value === "11111111111" ||
		value === "22222222222" ||
		value === "33333333333" ||
		value === "44444444444" ||
		value === "55555555555" ||
		value === "66666666666" ||
		value === "77777777777" ||
		value === "88888888888" ||
		value === "99999999999"
	) {
		return false;
	}

	// Step 1 - using first Check Number:
	for ( i = 1; i <= 9; i++ ) {
		sum = sum + parseInt( value.substring( i - 1, i ), 10 ) * ( 11 - i );
	}

	// If first Check Number (CN) is valid, move to Step 2 - using second Check Number:
	if ( checkResult( sum, firstCN ) ) {
		sum = 0;
		for ( i = 1; i <= 10; i++ ) {
			sum = sum + parseInt( value.substring( i - 1, i ), 10 ) * ( 12 - i );
		}
		return checkResult( sum, secondCN );
	}
	return false;

}, "Please specify a valid CPF number" );

// https://jqueryvalidation.org/creditcard-method/
// based on https://en.wikipedia.org/wiki/Luhn_algorithm
$.validator.addMethod( "creditcard", function( value, element ) {
	if ( this.optional( element ) ) {
		return "dependency-mismatch";
	}

	// Accept only spaces, digits and dashes
	if ( /[^0-9 \-]+/.test( value ) ) {
		return false;
	}

	var nCheck = 0,
		nDigit = 0,
		bEven = false,
		n, cDigit;

	value = value.replace( /\D/g, "" );

	// Basing min and max length on
	// https://dev.ean.com/general-info/valid-card-types/
	if ( value.length < 13 || value.length > 19 ) {
		return false;
	}

	for ( n = value.length - 1; n >= 0; n-- ) {
		cDigit = value.charAt( n );
		nDigit = parseInt( cDigit, 10 );
		if ( bEven ) {
			if ( ( nDigit *= 2 ) > 9 ) {
				nDigit -= 9;
			}
		}

		nCheck += nDigit;
		bEven = !bEven;
	}

	return ( nCheck % 10 ) === 0;
}, "Please enter a valid credit card number." );

/* NOTICE: Modified version of Castle.Components.Validator.CreditCardValidator
 * Redistributed under the the Apache License 2.0 at http://www.apache.org/licenses/LICENSE-2.0
 * Valid Types: mastercard, visa, amex, dinersclub, enroute, discover, jcb, unknown, all (overrides all other settings)
 */
$.validator.addMethod( "creditcardtypes", function( value, element, param ) {
	if ( /[^0-9\-]+/.test( value ) ) {
		return false;
	}

	value = value.replace( /\D/g, "" );

	var validTypes = 0x0000;

	if ( param.mastercard ) {
		validTypes |= 0x0001;
	}
	if ( param.visa ) {
		validTypes |= 0x0002;
	}
	if ( param.amex ) {
		validTypes |= 0x0004;
	}
	if ( param.dinersclub ) {
		validTypes |= 0x0008;
	}
	if ( param.enroute ) {
		validTypes |= 0x0010;
	}
	if ( param.discover ) {
		validTypes |= 0x0020;
	}
	if ( param.jcb ) {
		validTypes |= 0x0040;
	}
	if ( param.unknown ) {
		validTypes |= 0x0080;
	}
	if ( param.all ) {
		validTypes = 0x0001 | 0x0002 | 0x0004 | 0x0008 | 0x0010 | 0x0020 | 0x0040 | 0x0080;
	}
	if ( validTypes & 0x0001 && ( /^(5[12345])/.test( value ) || /^(2[234567])/.test( value ) ) ) { // Mastercard
		return value.length === 16;
	}
	if ( validTypes & 0x0002 && /^(4)/.test( value ) ) { // Visa
		return value.length === 16;
	}
	if ( validTypes & 0x0004 && /^(3[47])/.test( value ) ) { // Amex
		return value.length === 15;
	}
	if ( validTypes & 0x0008 && /^(3(0[012345]|[68]))/.test( value ) ) { // Dinersclub
		return value.length === 14;
	}
	if ( validTypes & 0x0010 && /^(2(014|149))/.test( value ) ) { // Enroute
		return value.length === 15;
	}
	if ( validTypes & 0x0020 && /^(6011)/.test( value ) ) { // Discover
		return value.length === 16;
	}
	if ( validTypes & 0x0040 && /^(3)/.test( value ) ) { // Jcb
		return value.length === 16;
	}
	if ( validTypes & 0x0040 && /^(2131|1800)/.test( value ) ) { // Jcb
		return value.length === 15;
	}
	if ( validTypes & 0x0080 ) { // Unknown
		return true;
	}
	return false;
}, "Please enter a valid credit card number." );

/**
 * Validates currencies with any given symbols by @jameslouiz
 * Symbols can be optional or required. Symbols required by default
 *
 * Usage examples:
 *  currency: ["£", false] - Use false for soft currency validation
 *  currency: ["$", false]
 *  currency: ["RM", false] - also works with text based symbols such as "RM" - Malaysia Ringgit etc
 *
 *  <input class="currencyInput" name="currencyInput">
 *
 * Soft symbol checking
 *  currencyInput: {
 *     currency: ["$", false]
 *  }
 *
 * Strict symbol checking (default)
 *  currencyInput: {
 *     currency: "$"
 *     //OR
 *     currency: ["$", true]
 *  }
 *
 * Multiple Symbols
 *  currencyInput: {
 *     currency: "$,£,¢"
 *  }
 */
$.validator.addMethod( "currency", function( value, element, param ) {
    var isParamString = typeof param === "string",
        symbol = isParamString ? param : param[ 0 ],
        soft = isParamString ? true : param[ 1 ],
        regex;

    symbol = symbol.replace( /,/g, "" );
    symbol = soft ? symbol + "]" : symbol + "]?";
    regex = "^[" + symbol + "([1-9]{1}[0-9]{0,2}(\\,[0-9]{3})*(\\.[0-9]{0,2})?|[1-9]{1}[0-9]{0,}(\\.[0-9]{0,2})?|0(\\.[0-9]{0,2})?|(\\.[0-9]{1,2})?)$";
    regex = new RegExp( regex );
    return this.optional( element ) || regex.test( value );

}, "Please specify a valid currency" );

$.validator.addMethod( "dateFA", function( value, element ) {
	return this.optional( element ) || /^[1-4]\d{3}\/((0?[1-6]\/((3[0-1])|([1-2][0-9])|(0?[1-9])))|((1[0-2]|(0?[7-9]))\/(30|([1-2][0-9])|(0?[1-9]))))$/.test( value );
}, $.validator.messages.date );

/**
 * Return true, if the value is a valid date, also making this formal check dd/mm/yyyy.
 *
 * @example $.validator.methods.date("01/01/1900")
 * @result true
 *
 * @example $.validator.methods.date("01/13/1990")
 * @result false
 *
 * @example $.validator.methods.date("01.01.1900")
 * @result false
 *
 * @example <input name="pippo" class="{dateITA:true}" />
 * @desc Declares an optional input element whose value must be a valid date.
 *
 * @name $.validator.methods.dateITA
 * @type Boolean
 * @cat Plugins/Validate/Methods
 */
$.validator.addMethod( "dateITA", function( value, element ) {
	var check = false,
		re = /^\d{1,2}\/\d{1,2}\/\d{4}$/,
		adata, gg, mm, aaaa, xdata;
	if ( re.test( value ) ) {
		adata = value.split( "/" );
		gg = parseInt( adata[ 0 ], 10 );
		mm = parseInt( adata[ 1 ], 10 );
		aaaa = parseInt( adata[ 2 ], 10 );
		xdata = new Date( Date.UTC( aaaa, mm - 1, gg, 12, 0, 0, 0 ) );
		if ( ( xdata.getUTCFullYear() === aaaa ) && ( xdata.getUTCMonth() === mm - 1 ) && ( xdata.getUTCDate() === gg ) ) {
			check = true;
		} else {
			check = false;
		}
	} else {
		check = false;
	}
	return this.optional( element ) || check;
}, $.validator.messages.date );

$.validator.addMethod( "dateNL", function( value, element ) {
	return this.optional( element ) || /^(0?[1-9]|[12]\d|3[01])[\.\/\-](0?[1-9]|1[012])[\.\/\-]([12]\d)?(\d\d)$/.test( value );
}, $.validator.messages.date );

// Older "accept" file extension method. Old docs: http://docs.jquery.com/Plugins/Validation/Methods/accept
$.validator.addMethod( "extension", function( value, element, param ) {
	param = typeof param === "string" ? param.replace( /,/g, "|" ) : "png|jpe?g|gif";
	return this.optional( element ) || value.match( new RegExp( "\\.(" + param + ")$", "i" ) );
}, $.validator.format( "Please enter a value with a valid extension." ) );

/**
 * Dutch giro account numbers (not bank numbers) have max 7 digits
 */
$.validator.addMethod( "giroaccountNL", function( value, element ) {
	return this.optional( element ) || /^[0-9]{1,7}$/.test( value );
}, "Please specify a valid giro account number" );

$.validator.addMethod( "greaterThan", function( value, element, param ) {
    var target = $( param );

    if ( this.settings.onfocusout && target.not( ".validate-greaterThan-blur" ).length ) {
        target.addClass( "validate-greaterThan-blur" ).on( "blur.validate-greaterThan", function() {
            $( element ).valid();
        } );
    }

    return value > target.val();
}, "Please enter a greater value." );

$.validator.addMethod( "greaterThanEqual", function( value, element, param ) {
    var target = $( param );

    if ( this.settings.onfocusout && target.not( ".validate-greaterThanEqual-blur" ).length ) {
        target.addClass( "validate-greaterThanEqual-blur" ).on( "blur.validate-greaterThanEqual", function() {
            $( element ).valid();
        } );
    }

    return value >= target.val();
}, "Please enter a greater value." );

/**
 * IBAN is the international bank account number.
 * It has a country - specific format, that is checked here too
 *
 * Validation is case-insensitive. Please make sure to normalize input yourself.
 */
$.validator.addMethod( "iban", function( value, element ) {

	// Some quick simple tests to prevent needless work
	if ( this.optional( element ) ) {
		return true;
	}

	// Remove spaces and to upper case
	var iban = value.replace( / /g, "" ).toUpperCase(),
		ibancheckdigits = "",
		leadingZeroes = true,
		cRest = "",
		cOperator = "",
		countrycode, ibancheck, charAt, cChar, bbanpattern, bbancountrypatterns, ibanregexp, i, p;

	// Check for IBAN code length.
	// It contains:
	// country code ISO 3166-1 - two letters,
	// two check digits,
	// Basic Bank Account Number (BBAN) - up to 30 chars
	var minimalIBANlength = 5;
	if ( iban.length < minimalIBANlength ) {
		return false;
	}

	// Check the country code and find the country specific format
	countrycode = iban.substring( 0, 2 );
	bbancountrypatterns = {
		"AL": "\\d{8}[\\dA-Z]{16}",
		"AD": "\\d{8}[\\dA-Z]{12}",
		"AT": "\\d{16}",
		"AZ": "[\\dA-Z]{4}\\d{20}",
		"BE": "\\d{12}",
		"BH": "[A-Z]{4}[\\dA-Z]{14}",
		"BA": "\\d{16}",
		"BR": "\\d{23}[A-Z][\\dA-Z]",
		"BG": "[A-Z]{4}\\d{6}[\\dA-Z]{8}",
		"CR": "\\d{17}",
		"HR": "\\d{17}",
		"CY": "\\d{8}[\\dA-Z]{16}",
		"CZ": "\\d{20}",
		"DK": "\\d{14}",
		"DO": "[A-Z]{4}\\d{20}",
		"EE": "\\d{16}",
		"FO": "\\d{14}",
		"FI": "\\d{14}",
		"FR": "\\d{10}[\\dA-Z]{11}\\d{2}",
		"GE": "[\\dA-Z]{2}\\d{16}",
		"DE": "\\d{18}",
		"GI": "[A-Z]{4}[\\dA-Z]{15}",
		"GR": "\\d{7}[\\dA-Z]{16}",
		"GL": "\\d{14}",
		"GT": "[\\dA-Z]{4}[\\dA-Z]{20}",
		"HU": "\\d{24}",
		"IS": "\\d{22}",
		"IE": "[\\dA-Z]{4}\\d{14}",
		"IL": "\\d{19}",
		"IT": "[A-Z]\\d{10}[\\dA-Z]{12}",
		"KZ": "\\d{3}[\\dA-Z]{13}",
		"KW": "[A-Z]{4}[\\dA-Z]{22}",
		"LV": "[A-Z]{4}[\\dA-Z]{13}",
		"LB": "\\d{4}[\\dA-Z]{20}",
		"LI": "\\d{5}[\\dA-Z]{12}",
		"LT": "\\d{16}",
		"LU": "\\d{3}[\\dA-Z]{13}",
		"MK": "\\d{3}[\\dA-Z]{10}\\d{2}",
		"MT": "[A-Z]{4}\\d{5}[\\dA-Z]{18}",
		"MR": "\\d{23}",
		"MU": "[A-Z]{4}\\d{19}[A-Z]{3}",
		"MC": "\\d{10}[\\dA-Z]{11}\\d{2}",
		"MD": "[\\dA-Z]{2}\\d{18}",
		"ME": "\\d{18}",
		"NL": "[A-Z]{4}\\d{10}",
		"NO": "\\d{11}",
		"PK": "[\\dA-Z]{4}\\d{16}",
		"PS": "[\\dA-Z]{4}\\d{21}",
		"PL": "\\d{24}",
		"PT": "\\d{21}",
		"RO": "[A-Z]{4}[\\dA-Z]{16}",
		"SM": "[A-Z]\\d{10}[\\dA-Z]{12}",
		"SA": "\\d{2}[\\dA-Z]{18}",
		"RS": "\\d{18}",
		"SK": "\\d{20}",
		"SI": "\\d{15}",
		"ES": "\\d{20}",
		"SE": "\\d{20}",
		"CH": "\\d{5}[\\dA-Z]{12}",
		"TN": "\\d{20}",
		"TR": "\\d{5}[\\dA-Z]{17}",
		"AE": "\\d{3}\\d{16}",
		"GB": "[A-Z]{4}\\d{14}",
		"VG": "[\\dA-Z]{4}\\d{16}"
	};

	bbanpattern = bbancountrypatterns[ countrycode ];

	// As new countries will start using IBAN in the
	// future, we only check if the countrycode is known.
	// This prevents false negatives, while almost all
	// false positives introduced by this, will be caught
	// by the checksum validation below anyway.
	// Strict checking should return FALSE for unknown
	// countries.
	if ( typeof bbanpattern !== "undefined" ) {
		ibanregexp = new RegExp( "^[A-Z]{2}\\d{2}" + bbanpattern + "$", "" );
		if ( !( ibanregexp.test( iban ) ) ) {
			return false; // Invalid country specific format
		}
	}

	// Now check the checksum, first convert to digits
	ibancheck = iban.substring( 4, iban.length ) + iban.substring( 0, 4 );
	for ( i = 0; i < ibancheck.length; i++ ) {
		charAt = ibancheck.charAt( i );
		if ( charAt !== "0" ) {
			leadingZeroes = false;
		}
		if ( !leadingZeroes ) {
			ibancheckdigits += "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf( charAt );
		}
	}

	// Calculate the result of: ibancheckdigits % 97
	for ( p = 0; p < ibancheckdigits.length; p++ ) {
		cChar = ibancheckdigits.charAt( p );
		cOperator = "" + cRest + "" + cChar;
		cRest = cOperator % 97;
	}
	return cRest === 1;
}, "Please specify a valid IBAN" );

$.validator.addMethod( "integer", function( value, element ) {
	return this.optional( element ) || /^-?\d+$/.test( value );
}, "A positive or negative non-decimal number please" );

$.validator.addMethod( "ipv4", function( value, element ) {
	return this.optional( element ) || /^(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)$/i.test( value );
}, "Please enter a valid IP v4 address." );

$.validator.addMethod( "ipv6", function( value, element ) {
	return this.optional( element ) || /^((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$/i.test( value );
}, "Please enter a valid IP v6 address." );

$.validator.addMethod( "lessThan", function( value, element, param ) {
    var target = $( param );

    if ( this.settings.onfocusout && target.not( ".validate-lessThan-blur" ).length ) {
        target.addClass( "validate-lessThan-blur" ).on( "blur.validate-lessThan", function() {
            $( element ).valid();
        } );
    }

    return value < target.val();
}, "Please enter a lesser value." );

$.validator.addMethod( "lessThanEqual", function( value, element, param ) {
    var target = $( param );

    if ( this.settings.onfocusout && target.not( ".validate-lessThanEqual-blur" ).length ) {
        target.addClass( "validate-lessThanEqual-blur" ).on( "blur.validate-lessThanEqual", function() {
            $( element ).valid();
        } );
    }

    return value <= target.val();
}, "Please enter a lesser value." );

$.validator.addMethod( "lettersonly", function( value, element ) {
	return this.optional( element ) || /^[a-z]+$/i.test( value );
}, "Letters only please" );

$.validator.addMethod( "letterswithbasicpunc", function( value, element ) {
	return this.optional( element ) || /^[a-z\-.,()'"\s]+$/i.test( value );
}, "Letters or punctuation only please" );

// Limit the number of files in a FileList.
$.validator.addMethod( "maxfiles", function( value, element, param ) {
	if ( this.optional( element ) ) {
		return true;
	}

	if ( $( element ).attr( "type" ) === "file" ) {
		if ( element.files && element.files.length > param ) {
			return false;
		}
	}

	return true;
}, $.validator.format( "Please select no more than {0} files." ) );

// Limit the size of each individual file in a FileList.
$.validator.addMethod( "maxsize", function( value, element, param ) {
	if ( this.optional( element ) ) {
		return true;
	}

	if ( $( element ).attr( "type" ) === "file" ) {
		if ( element.files && element.files.length ) {
			for ( var i = 0; i < element.files.length; i++ ) {
				if ( element.files[ i ].size > param ) {
					return false;
				}
			}
		}
	}

	return true;
}, $.validator.format( "File size must not exceed {0} bytes each." ) );

// Limit the size of all files in a FileList.
$.validator.addMethod( "maxsizetotal", function( value, element, param ) {
	if ( this.optional( element ) ) {
		return true;
	}

	if ( $( element ).attr( "type" ) === "file" ) {
		if ( element.files && element.files.length ) {
			var totalSize = 0;

			for ( var i = 0; i < element.files.length; i++ ) {
				totalSize += element.files[ i ].size;
				if ( totalSize > param ) {
					return false;
				}
			}
		}
	}

	return true;
}, $.validator.format( "Total size of all files must not exceed {0} bytes." ) );


$.validator.addMethod( "mobileNL", function( value, element ) {
	return this.optional( element ) || /^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)6((\s|\s?\-\s?)?[0-9]){8}$/.test( value );
}, "Please specify a valid mobile number" );

/* For UK phone functions, do the following server side processing:
 * Compare original input with this RegEx pattern:
 * ^\(?(?:(?:00\)?[\s\-]?\(?|\+)(44)\)?[\s\-]?\(?(?:0\)?[\s\-]?\(?)?|0)([1-9]\d{1,4}\)?[\s\d\-]+)$
 * Extract $1 and set $prefix to '+44<space>' if $1 is '44', otherwise set $prefix to '0'
 * Extract $2 and remove hyphens, spaces and parentheses. Phone number is combined $prefix and $2.
 * A number of very detailed GB telephone number RegEx patterns can also be found at:
 * http://www.aa-asterisk.org.uk/index.php/Regular_Expressions_for_Validating_and_Formatting_GB_Telephone_Numbers
 */
$.validator.addMethod( "mobileUK", function( phone_number, element ) {
	phone_number = phone_number.replace( /\(|\)|\s+|-/g, "" );
	return this.optional( element ) || phone_number.length > 9 &&
		phone_number.match( /^(?:(?:(?:00\s?|\+)44\s?|0)7(?:[1345789]\d{2}|624)\s?\d{3}\s?\d{3})$/ );
}, "Please specify a valid mobile number" );

$.validator.addMethod( "netmask", function( value, element ) {
    return this.optional( element ) || /^(254|252|248|240|224|192|128)\.0\.0\.0|255\.(254|252|248|240|224|192|128|0)\.0\.0|255\.255\.(254|252|248|240|224|192|128|0)\.0|255\.255\.255\.(254|252|248|240|224|192|128|0)/i.test( value );
}, "Please enter a valid netmask." );

/*
 * The NIE (Número de Identificación de Extranjero) is a Spanish tax identification number assigned by the Spanish
 * authorities to any foreigner.
 *
 * The NIE is the equivalent of a Spaniards Número de Identificación Fiscal (NIF) which serves as a fiscal
 * identification number. The CIF number (Certificado de Identificación Fiscal) is equivalent to the NIF, but applies to
 * companies rather than individuals. The NIE consists of an 'X' or 'Y' followed by 7 or 8 digits then another letter.
 */
$.validator.addMethod( "nieES", function( value, element ) {
	"use strict";

	if ( this.optional( element ) ) {
		return true;
	}

	var nieRegEx = new RegExp( /^[MXYZ]{1}[0-9]{7,8}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/gi );
	var validChars = "TRWAGMYFPDXBNJZSQVHLCKET",
		letter = value.substr( value.length - 1 ).toUpperCase(),
		number;

	value = value.toString().toUpperCase();

	// Quick format test
	if ( value.length > 10 || value.length < 9 || !nieRegEx.test( value ) ) {
		return false;
	}

	// X means same number
	// Y means number + 10000000
	// Z means number + 20000000
	value = value.replace( /^[X]/, "0" )
		.replace( /^[Y]/, "1" )
		.replace( /^[Z]/, "2" );

	number = value.length === 9 ? value.substr( 0, 8 ) : value.substr( 0, 9 );

	return validChars.charAt( parseInt( number, 10 ) % 23 ) === letter;

}, "Please specify a valid NIE number." );

/*
 * The Número de Identificación Fiscal ( NIF ) is the way tax identification used in Spain for individuals
 */
$.validator.addMethod( "nifES", function( value, element ) {
	"use strict";

	if ( this.optional( element ) ) {
		return true;
	}

	value = value.toUpperCase();

	// Basic format test
	if ( !value.match( "((^[A-Z]{1}[0-9]{7}[A-Z0-9]{1}$|^[T]{1}[A-Z0-9]{8}$)|^[0-9]{8}[A-Z]{1}$)" ) ) {
		return false;
	}

	// Test NIF
	if ( /^[0-9]{8}[A-Z]{1}$/.test( value ) ) {
		return ( "TRWAGMYFPDXBNJZSQVHLCKE".charAt( value.substring( 8, 0 ) % 23 ) === value.charAt( 8 ) );
	}

	// Test specials NIF (starts with K, L or M)
	if ( /^[KLM]{1}/.test( value ) ) {
		return ( value[ 8 ] === "TRWAGMYFPDXBNJZSQVHLCKE".charAt( value.substring( 8, 1 ) % 23 ) );
	}

	return false;

}, "Please specify a valid NIF number." );

/*
 * Numer identyfikacji podatkowej ( NIP ) is the way tax identification used in Poland for companies
 */
$.validator.addMethod( "nipPL", function( value ) {
	"use strict";

	value = value.replace( /[^0-9]/g, "" );

	if ( value.length !== 10 ) {
		return false;
	}

	var arrSteps = [ 6, 5, 7, 2, 3, 4, 5, 6, 7 ];
	var intSum = 0;
	for ( var i = 0; i < 9; i++ ) {
		intSum += arrSteps[ i ] * value[ i ];
	}
	var int2 = intSum % 11;
	var intControlNr = ( int2 === 10 ) ? 0 : int2;

	return ( intControlNr === parseInt( value[ 9 ], 10 ) );
}, "Please specify a valid NIP number." );

/**
 * Created for project jquery-validation.
 * @Description Brazillian PIS or NIS number (Número de Identificação Social Pis ou Pasep) is the equivalent of a
 * Brazilian tax registration number NIS of PIS numbers have 11 digits in total: 10 numbers followed by 1 check numbers
 * that are being used for validation.
 * @copyright (c) 21/08/2018 13:14, Cleiton da Silva Mendonça
 * @author Cleiton da Silva Mendonça <cleiton.mendonca@gmail.com>
 * @link http://gitlab.com/csmendonca Gitlab of Cleiton da Silva Mendonça
 * @link http://github.com/csmendonca Github of Cleiton da Silva Mendonça
 */
$.validator.addMethod( "nisBR", function( value ) {
	var number;
	var cn;
	var sum = 0;
	var dv;
	var count;
	var multiplier;

	// Removing special characters from value
	value = value.replace( /([~!@#$%^&*()_+=`{}\[\]\-|\\:;'<>,.\/? ])+/g, "" );

	// Checking value to have 11 digits only
	if ( value.length !== 11 ) {
		return false;
	}

	//Get check number of value
	cn = parseInt( value.substring( 10, 11 ), 10 );

	//Get number with 10 digits of the value
	number = parseInt( value.substring( 0, 10 ), 10 );

	for ( count = 2; count < 12; count++ ) {
		multiplier = count;
		if ( count === 10 ) {
			multiplier = 2;
		}
		if ( count === 11 ) {
			multiplier = 3;
		}
		sum += ( ( number % 10 ) * multiplier );
		number = parseInt( number / 10, 10 );
	}
	dv = ( sum % 11 );

	if ( dv > 1 ) {
		dv = ( 11 - dv );
	} else {
		dv = 0;
	}

	if ( cn === dv ) {
		return true;
	} else {
		return false;
	}
}, "Please specify a valid NIS/PIS number" );

$.validator.addMethod( "notEqualTo", function( value, element, param ) {
	return this.optional( element ) || !$.validator.methods.equalTo.call( this, value, element, param );
}, "Please enter a different value, values must not be the same." );

$.validator.addMethod( "nowhitespace", function( value, element ) {
	return this.optional( element ) || /^\S+$/i.test( value );
}, "No white space please" );

/**
* Return true if the field value matches the given format RegExp
*
* @example $.validator.methods.pattern("AR1004",element,/^AR\d{4}$/)
* @result true
*
* @example $.validator.methods.pattern("BR1004",element,/^AR\d{4}$/)
* @result false
*
* @name $.validator.methods.pattern
* @type Boolean
* @cat Plugins/Validate/Methods
*/
$.validator.addMethod( "pattern", function( value, element, param ) {
	if ( this.optional( element ) ) {
		return true;
	}
	if ( typeof param === "string" ) {
		param = new RegExp( "^(?:" + param + ")$" );
	}
	return param.test( value );
}, "Invalid format." );

/**
 * Dutch phone numbers have 10 digits (or 11 and start with +31).
 */
$.validator.addMethod( "phoneNL", function( value, element ) {
	return this.optional( element ) || /^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)[1-9]((\s|\s?\-\s?)?[0-9]){8}$/.test( value );
}, "Please specify a valid phone number." );

/**
 * Polish telephone numbers have 9 digits.
 *
 * Mobile phone numbers starts with following digits:
 * 45, 50, 51, 53, 57, 60, 66, 69, 72, 73, 78, 79, 88.
 *
 * Fixed-line numbers starts with area codes:
 * 12, 13, 14, 15, 16, 17, 18, 22, 23, 24, 25, 29, 32, 33,
 * 34, 41, 42, 43, 44, 46, 48, 52, 54, 55, 56, 58, 59, 61,
 * 62, 63, 65, 67, 68, 71, 74, 75, 76, 77, 81, 82, 83, 84,
 * 85, 86, 87, 89, 91, 94, 95.
 *
 * Ministry of National Defence numbers and VoIP numbers starts with 26 and 39.
 *
 * Excludes intelligent networks (premium rate, shared cost, free phone numbers).
 *
 * Poland National Numbering Plan http://www.itu.int/oth/T02020000A8/en
 */
$.validator.addMethod( "phonePL", function( phone_number, element ) {
	phone_number = phone_number.replace( /\s+/g, "" );
	var regexp = /^(?:(?:(?:\+|00)?48)|(?:\(\+?48\)))?(?:1[2-8]|2[2-69]|3[2-49]|4[1-68]|5[0-9]|6[0-35-9]|[7-8][1-9]|9[145])\d{7}$/;
	return this.optional( element ) || regexp.test( phone_number );
}, "Please specify a valid phone number" );

/* For UK phone functions, do the following server side processing:
 * Compare original input with this RegEx pattern:
 * ^\(?(?:(?:00\)?[\s\-]?\(?|\+)(44)\)?[\s\-]?\(?(?:0\)?[\s\-]?\(?)?|0)([1-9]\d{1,4}\)?[\s\d\-]+)$
 * Extract $1 and set $prefix to '+44<space>' if $1 is '44', otherwise set $prefix to '0'
 * Extract $2 and remove hyphens, spaces and parentheses. Phone number is combined $prefix and $2.
 * A number of very detailed GB telephone number RegEx patterns can also be found at:
 * http://www.aa-asterisk.org.uk/index.php/Regular_Expressions_for_Validating_and_Formatting_GB_Telephone_Numbers
 */

// Matches UK landline + mobile, accepting only 01-3 for landline or 07 for mobile to exclude many premium numbers
$.validator.addMethod( "phonesUK", function( phone_number, element ) {
	phone_number = phone_number.replace( /\(|\)|\s+|-/g, "" );
	return this.optional( element ) || phone_number.length > 9 &&
		phone_number.match( /^(?:(?:(?:00\s?|\+)44\s?|0)(?:1\d{8,9}|[23]\d{9}|7(?:[1345789]\d{8}|624\d{6})))$/ );
}, "Please specify a valid uk phone number" );

/* For UK phone functions, do the following server side processing:
 * Compare original input with this RegEx pattern:
 * ^\(?(?:(?:00\)?[\s\-]?\(?|\+)(44)\)?[\s\-]?\(?(?:0\)?[\s\-]?\(?)?|0)([1-9]\d{1,4}\)?[\s\d\-]+)$
 * Extract $1 and set $prefix to '+44<space>' if $1 is '44', otherwise set $prefix to '0'
 * Extract $2 and remove hyphens, spaces and parentheses. Phone number is combined $prefix and $2.
 * A number of very detailed GB telephone number RegEx patterns can also be found at:
 * http://www.aa-asterisk.org.uk/index.php/Regular_Expressions_for_Validating_and_Formatting_GB_Telephone_Numbers
 */
$.validator.addMethod( "phoneUK", function( phone_number, element ) {
	phone_number = phone_number.replace( /\(|\)|\s+|-/g, "" );
	return this.optional( element ) || phone_number.length > 9 &&
		phone_number.match( /^(?:(?:(?:00\s?|\+)44\s?)|(?:\(?0))(?:\d{2}\)?\s?\d{4}\s?\d{4}|\d{3}\)?\s?\d{3}\s?\d{3,4}|\d{4}\)?\s?(?:\d{5}|\d{3}\s?\d{3})|\d{5}\)?\s?\d{4,5})$/ );
}, "Please specify a valid phone number" );

/**
 * Matches US phone number format
 *
 * where the area code may not start with 1 and the prefix may not start with 1
 * allows '-' or ' ' as a separator and allows parens around area code
 * some people may want to put a '1' in front of their number
 *
 * 1(212)-999-2345 or
 * 212 999 2344 or
 * 212-999-0983
 *
 * but not
 * 111-123-5434
 * and not
 * 212 123 4567
 */
$.validator.addMethod( "phoneUS", function( phone_number, element ) {
	phone_number = phone_number.replace( /\s+/g, "" );
	return this.optional( element ) || phone_number.length > 9 &&
		phone_number.match( /^(\+?1-?)?(\([2-9]([02-9]\d|1[02-9])\)|[2-9]([02-9]\d|1[02-9]))-?[2-9]\d{2}-?\d{4}$/ );
}, "Please specify a valid phone number" );

/*
* Valida CEPs do brasileiros:
*
* Formatos aceitos:
* 99999-999
* 99.999-999
* 99999999
*/
$.validator.addMethod( "postalcodeBR", function( cep_value, element ) {
	return this.optional( element ) || /^\d{2}.\d{3}-\d{3}?$|^\d{5}-?\d{3}?$/.test( cep_value );
}, "Informe um CEP válido." );

/**
 * Matches a valid Canadian Postal Code
 *
 * @example jQuery.validator.methods.postalCodeCA( "H0H 0H0", element )
 * @result true
 *
 * @example jQuery.validator.methods.postalCodeCA( "H0H0H0", element )
 * @result false
 *
 * @name jQuery.validator.methods.postalCodeCA
 * @type Boolean
 * @cat Plugins/Validate/Methods
 */
$.validator.addMethod( "postalCodeCA", function( value, element ) {
	return this.optional( element ) || /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ] *\d[ABCEGHJKLMNPRSTVWXYZ]\d$/i.test( value );
}, "Please specify a valid postal code" );

/* Matches Italian postcode (CAP) */
$.validator.addMethod( "postalcodeIT", function( value, element ) {
	return this.optional( element ) || /^\d{5}$/.test( value );
}, "Please specify a valid postal code" );

$.validator.addMethod( "postalcodeNL", function( value, element ) {
	return this.optional( element ) || /^[1-9][0-9]{3}\s?[a-zA-Z]{2}$/.test( value );
}, "Please specify a valid postal code" );

// Matches UK postcode. Does not match to UK Channel Islands that have their own postcodes (non standard UK)
$.validator.addMethod( "postcodeUK", function( value, element ) {
	return this.optional( element ) || /^((([A-PR-UWYZ][0-9])|([A-PR-UWYZ][0-9][0-9])|([A-PR-UWYZ][A-HK-Y][0-9])|([A-PR-UWYZ][A-HK-Y][0-9][0-9])|([A-PR-UWYZ][0-9][A-HJKSTUW])|([A-PR-UWYZ][A-HK-Y][0-9][ABEHMNPRVWXY]))\s?([0-9][ABD-HJLNP-UW-Z]{2})|(GIR)\s?(0AA))$/i.test( value );
}, "Please specify a valid UK postcode" );

/*
 * Lets you say "at least X inputs that match selector Y must be filled."
 *
 * The end result is that neither of these inputs:
 *
 *	<input class="productinfo" name="partnumber">
 *	<input class="productinfo" name="description">
 *
 *	...will validate unless at least one of them is filled.
 *
 * partnumber:	{require_from_group: [1,".productinfo"]},
 * description: {require_from_group: [1,".productinfo"]}
 *
 * options[0]: number of fields that must be filled in the group
 * options[1]: CSS selector that defines the group of conditionally required fields
 */
$.validator.addMethod( "require_from_group", function( value, element, options ) {
	var $fields = $( options[ 1 ], element.form ),
		$fieldsFirst = $fields.eq( 0 ),
		validator = $fieldsFirst.data( "valid_req_grp" ) ? $fieldsFirst.data( "valid_req_grp" ) : $.extend( {}, this ),
		isValid = $fields.filter( function() {
			return validator.elementValue( this );
		} ).length >= options[ 0 ];

	// Store the cloned validator for future validation
	$fieldsFirst.data( "valid_req_grp", validator );

	// If element isn't being validated, run each require_from_group field's validation rules
	if ( !$( element ).data( "being_validated" ) ) {
		$fields.data( "being_validated", true );
		$fields.each( function() {
			validator.element( this );
		} );
		$fields.data( "being_validated", false );
	}
	return isValid;
}, $.validator.format( "Please fill at least {0} of these fields." ) );

/*
 * Lets you say "either at least X inputs that match selector Y must be filled,
 * OR they must all be skipped (left blank)."
 *
 * The end result, is that none of these inputs:
 *
 *	<input class="productinfo" name="partnumber">
 *	<input class="productinfo" name="description">
 *	<input class="productinfo" name="color">
 *
 *	...will validate unless either at least two of them are filled,
 *	OR none of them are.
 *
 * partnumber:	{skip_or_fill_minimum: [2,".productinfo"]},
 * description: {skip_or_fill_minimum: [2,".productinfo"]},
 * color:		{skip_or_fill_minimum: [2,".productinfo"]}
 *
 * options[0]: number of fields that must be filled in the group
 * options[1]: CSS selector that defines the group of conditionally required fields
 *
 */
$.validator.addMethod( "skip_or_fill_minimum", function( value, element, options ) {
	var $fields = $( options[ 1 ], element.form ),
		$fieldsFirst = $fields.eq( 0 ),
		validator = $fieldsFirst.data( "valid_skip" ) ? $fieldsFirst.data( "valid_skip" ) : $.extend( {}, this ),
		numberFilled = $fields.filter( function() {
			return validator.elementValue( this );
		} ).length,
		isValid = numberFilled === 0 || numberFilled >= options[ 0 ];

	// Store the cloned validator for future validation
	$fieldsFirst.data( "valid_skip", validator );

	// If element isn't being validated, run each skip_or_fill_minimum field's validation rules
	if ( !$( element ).data( "being_validated" ) ) {
		$fields.data( "being_validated", true );
		$fields.each( function() {
			validator.element( this );
		} );
		$fields.data( "being_validated", false );
	}
	return isValid;
}, $.validator.format( "Please either skip these fields or fill at least {0} of them." ) );

/* Validates US States and/or Territories by @jdforsythe
 * Can be case insensitive or require capitalization - default is case insensitive
 * Can include US Territories or not - default does not
 * Can include US Military postal abbreviations (AA, AE, AP) - default does not
 *
 * Note: "States" always includes DC (District of Colombia)
 *
 * Usage examples:
 *
 *  This is the default - case insensitive, no territories, no military zones
 *  stateInput: {
 *     caseSensitive: false,
 *     includeTerritories: false,
 *     includeMilitary: false
 *  }
 *
 *  Only allow capital letters, no territories, no military zones
 *  stateInput: {
 *     caseSensitive: false
 *  }
 *
 *  Case insensitive, include territories but not military zones
 *  stateInput: {
 *     includeTerritories: true
 *  }
 *
 *  Only allow capital letters, include territories and military zones
 *  stateInput: {
 *     caseSensitive: true,
 *     includeTerritories: true,
 *     includeMilitary: true
 *  }
 *
 */
$.validator.addMethod( "stateUS", function( value, element, options ) {
	var isDefault = typeof options === "undefined",
		caseSensitive = ( isDefault || typeof options.caseSensitive === "undefined" ) ? false : options.caseSensitive,
		includeTerritories = ( isDefault || typeof options.includeTerritories === "undefined" ) ? false : options.includeTerritories,
		includeMilitary = ( isDefault || typeof options.includeMilitary === "undefined" ) ? false : options.includeMilitary,
		regex;

	if ( !includeTerritories && !includeMilitary ) {
		regex = "^(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])$";
	} else if ( includeTerritories && includeMilitary ) {
		regex = "^(A[AEKLPRSZ]|C[AOT]|D[CE]|FL|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEINOPST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$";
	} else if ( includeTerritories ) {
		regex = "^(A[KLRSZ]|C[AOT]|D[CE]|FL|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEINOPST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$";
	} else {
		regex = "^(A[AEKLPRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])$";
	}

	regex = caseSensitive ? new RegExp( regex ) : new RegExp( regex, "i" );
	return this.optional( element ) || regex.test( value );
}, "Please specify a valid state" );

// TODO check if value starts with <, otherwise don't try stripping anything
$.validator.addMethod( "strippedminlength", function( value, element, param ) {
	return $( value ).text().length >= param;
}, $.validator.format( "Please enter at least {0} characters" ) );

$.validator.addMethod( "time", function( value, element ) {
	return this.optional( element ) || /^([01]\d|2[0-3]|[0-9])(:[0-5]\d){1,2}$/.test( value );
}, "Please enter a valid time, between 00:00 and 23:59" );

$.validator.addMethod( "time12h", function( value, element ) {
	return this.optional( element ) || /^((0?[1-9]|1[012])(:[0-5]\d){1,2}(\ ?[AP]M))$/i.test( value );
}, "Please enter a valid time in 12-hour am/pm format" );

// Same as url, but TLD is optional
$.validator.addMethod( "url2", function( value, element ) {
	return this.optional( element ) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test( value );
}, $.validator.messages.url );

/**
 * Return true, if the value is a valid vehicle identification number (VIN).
 *
 * Works with all kind of text inputs.
 *
 * @example <input type="text" size="20" name="VehicleID" class="{required:true,vinUS:true}" />
 * @desc Declares a required input element whose value must be a valid vehicle identification number.
 *
 * @name $.validator.methods.vinUS
 * @type Boolean
 * @cat Plugins/Validate/Methods
 */
$.validator.addMethod( "vinUS", function( v ) {
	if ( v.length !== 17 ) {
		return false;
	}

	var LL = [ "A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ],
		VL = [ 1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 7, 9, 2, 3, 4, 5, 6, 7, 8, 9 ],
		FL = [ 8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2 ],
		rs = 0,
		i, n, d, f, cd, cdv;

	for ( i = 0; i < 17; i++ ) {
		f = FL[ i ];
		d = v.slice( i, i + 1 );
		if ( i === 8 ) {
			cdv = d;
		}
		if ( !isNaN( d ) ) {
			d *= f;
		} else {
			for ( n = 0; n < LL.length; n++ ) {
				if ( d.toUpperCase() === LL[ n ] ) {
					d = VL[ n ];
					d *= f;
					if ( isNaN( cdv ) && n === 8 ) {
						cdv = LL[ n ];
					}
					break;
				}
			}
		}
		rs += d;
	}
	cd = rs % 11;
	if ( cd === 10 ) {
		cd = "X";
	}
	if ( cd === cdv ) {
		return true;
	}
	return false;
}, "The specified vehicle identification number (VIN) is invalid." );

$.validator.addMethod( "zipcodeUS", function( value, element ) {
	return this.optional( element ) || /^\d{5}(-\d{4})?$/.test( value );
}, "The specified US ZIP Code is invalid" );

$.validator.addMethod( "ziprange", function( value, element ) {
	return this.optional( element ) || /^90[2-5]\d\{2\}-\d{4}$/.test( value );
}, "Your ZIP-code must be in the range 902xx-xxxx to 905xx-xxxx" );
return $;
}));