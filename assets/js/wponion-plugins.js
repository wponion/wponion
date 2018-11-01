/**
 * Animate CSS Related Functions.
 */
jQuery.fn.extend( {
	animateCss: function( animationName, callback ) {
		var animationEnd = ( function( el ) {
			var animations = {
				animation: 'animationend',
				OAnimation: 'oAnimationEnd',
				MozAnimation: 'mozAnimationEnd',
				WebkitAnimation: 'webkitAnimationEnd',
			};

			for( var t in animations ) {
				if( el.style[ t ] !== undefined ) {
					return animations[ t ];
				}
			}
		} )( document.createElement( 'div' ) );

		this.addClass( 'animated ' + animationName ).one( animationEnd, function() {
			jQuery( this ).removeClass( 'animated ' + animationName );
			if( typeof callback === 'function' ) callback( jQuery( this ) );
		} );

		return this;
	},
} );

/**
 * Tippy Custom Wrap Code.
 */
jQuery.fn.extend( {
	/**
	 * A Custom Wrap Class To Handle Tippy Instance
	 * @param $arguments
	 * @returns {*}
	 */
	tippy: function( $arguments ) {
		var tippy_helper = {
			create_instance: function( $elem, $arguments ) {
				if( $elem.attr( 'data-tippy-instance-id' ) === undefined ) {
					var $_instance_id = 'Tippy' + $wponion.rand_id();
					$elem.attr( 'data-tippy-instance-id', $_instance_id );
					window[ $_instance_id ] = new tippy( $elem[ 0 ], $arguments );
					return true;
				}
				return false;
			},
			get_instance: function( $elem ) {
				if( $elem.attr( 'data-tippy-instance-id' ) === undefined ) {
					return false;
				}
				var $_instance_id = $elem.attr( 'data-tippy-instance-id' );
				return ( undefined !== window[ $_instance_id ] ) ? window[ $_instance_id ] : false;
			}
		};

		if( this.length > 1 ) {
			this.each( function() {
				tippy_helper.create_instance( jQuery( this ), $arguments );
			} );
			return true;
		} else {
			var $status = tippy_helper.create_instance( jQuery( this ), $arguments );
			return ( true === $status ) ? tippy_helper.get_instance( jQuery( this ) ) : false;
		}
	},

	/**
	 * Returns An Active instance
	 * @returns {boolean}
	 */
	tippy_get: function() {
		if( jQuery( this ).attr( 'data-tippy-instance-id' ) === undefined ) {
			return false;
		}
		var $_instance_id = jQuery( this ).attr( 'data-tippy-instance-id' );
		return ( undefined !== window[ $_instance_id ] ) ? window[ $_instance_id ] : false;
	},
} );

/**
 * // @ wponion-append ../vendors/jquery-interdependencies/jquery-interdependencies.js
 * // @ wponion-append ../../node_modules/jquery.actual/jquery.actual.js
 * // @ wponion-append ../../node_modules/bootstrap-maxlength/bootstrap-maxlength.min.js
 * // @ wponion-append ../vendors/inputToArray.js
 * // @ wponion-append ../../node_modules/overlayscrollbars/js/jquery.overlayScrollbars.min.js
 * Simple JS Addons.
 */

( function( window, document, wp, $ ) {

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
			if( "==" === condition || "OR" === condition ) {
				return this.checkBoolean( val1 ) === this.checkBoolean( val2 );
			} else if( "!=" === condition ) {
				return this.checkBoolean( val1 ) !== this.checkBoolean( val2 );
			} else if( ">=" === condition ) {
				return Number( val2 ) >= Number( val1 );
			} else if( "<=" === condition ) {
				return Number( val2 ) <= Number( val1 );
			} else if( ">" === condition ) {
				return Number( val2 ) > Number( val1 );
			} else if( "<" === condition ) {
				return Number( val2 ) < Number( val1 );
			} else if( "()" === condition ) {
				return window[ val1 ]( context, control, val2 ); // FIXED: function method
			} else if( "in" === condition ) {
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
			} else if( "any" === condition ) {
				return $.inArray( val2, val1.split( ',' ) ) > -1;
			} else if( "not-any" === condition ) {
				return -1 === $.inArray( val2, val1.split( ',' ) );
			} else {
				throw new Error( "Unknown condition:" + condition );
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
				console.log( "Evaling condition: Could not find controller input " + this.controller );
			}

			var val = this.getControlValue( context, control );
			if( cfg.log && val === undefined ) {
				console.log( "Evaling condition: Could not exctract value from input " + this.controller );
			}
			if( val === undefined ) {
				return false;
			}

			val = this.normalizeValue( control, this.value, val );
			return this.evalCondition( context, control, this.condition, this.value, val );
		},

		normalizeValue: function( control, baseValue, val ) {
			if( typeof baseValue === "number" ) {
				return parseFloat( val );
			}
			return val;
		},

		getControlValue: function( context, control ) {
			if( ( "radio" === control.attr( "type" ) || "checkbox" === control.attr( "type" ) ) && control.length > 1 ) {
				return control.filter( ":checked" ).val();
			}

			if( "checkbox" === control.attr( "type" ) || "radio" === control.attr( "type" ) ) {
				return control.is( ":checked" );
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
				throw new Error( "Must give an input selector" );
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
				console.log( "Applying rule on " + this.controller + "==" + this.value + " enforced:" + enforced + " result:" + result );
			}

			if( cfg.log && !this.controls.length ) {
				console.log( "Zero length controls slipped through" );
			}

			var show = cfg.show || function( control ) {
				control.show();
			};

			var hide = cfg.hide || function( control ) {
				control.hide();
			};


			var controls = $.map( this.controls, function( elem, idx ) {
				var control = ( typeof elem === "object" ) ? elem : context.find( elem );
				if( cfg.log && control.size() === 0 ) {
					console.log( "Could not find element:" + elem );
				}
				return control;
			} );

			if( result ) {
				$( controls ).each( function() {
					// Some friendly debug info
					if( cfg.log && $( this ).size() === 0 ) {
						console.log( "Control selection is empty when showing" );
						console.log( this );
					}
					show( this );
				} );

				$( this.rules ).each( function() {
					if( this.condition !== "OR" ) {
						this.applyRule( context, cfg );
					}
				} );
			} else {
				$( controls ).each( function() {
					if( cfg.log && $( this ).size() === 0 ) {
						console.log( "Control selection is empty when hiding:" );
						console.log( this );
					}
					hide( this );
				} );

				$( this.rules ).each( function() {
					if( this.condition !== "OR" ) {
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
				console.log( "Starting evaluation ruleset of " + this.rules.length + " rules" );
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
					throw new Error( "Rule's controller does not exist:" + this.controller );
				}

				if( this.controls.length === 0 ) {
					throw new Error( "Rule has no controls:" + this );
				}

				$( this.controls ).each( function() {
					if( context.find( this ) === 0 ) {
						throw new Error( "Rule's target control " + this + " does not exist in context " + context.get( 0 ) );
					}
					controls++;
				} );
			} );

			if( cfg.log ) {
				console.log( "Controller check ok, rules count " + rules.length + " controls count " + controls );
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
				console.log( "Enabling dependency change monitoring on " + selection.get( 0 ) );
			}

			var handler = function() {
				ruleset.applyRules( selection, cfg );
			};
			var val     = selection.on( "change.deps", null, null, handler );

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
				log( "Enabling dependency change monitoring on " + selection.get( 0 ) );
			}

			var handler = function() {
				ruleset.applyRules( selection, cfg );
			};

			$.each( $WPONION, function( i, e ) {
				$( 'body' ).find( e ).on( 'change', function() {
					handler();
				} )
			} );
			var val     = selection.on( "change.deps", null, null, handler );
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

			if( $.inArray( this.controller, $WPONION ) !== -1 ) {
				var control = $( "body" ).find( this.controller );

			} else {
				var control = context.find( this.controller );
			}


			if( control.length === 0 && cfg.log ) {
				log( "Evaling condition: Could not find controller input " + this.controller );
			}

			var val = this.FieldVal( context, control );

			if( cfg.log && val === undefined ) {
				log( "Evaling condition: Could not extract value from input " + this.controller );
			}

			if( val === false ) {
				return false;
			}

			return this.evalCondition( context, control, this.condition, this.value, val );
		},

	} );


} )( jQuery );

/**
 * jquery.json-view - jQuery collapsible JSON plugin
 * @version v1.0.0
 * @link http://github.com/bazh/jquery.json-view
 * @license MIT
 */
;( function ( $ ) {
	'use strict';

	var collapser = function ( collapsed ) {
		var item = $( '<span />', {
			'class': 'collapser',
			on: {
				click: function () {
					var $this = $( this );

					$this.toggleClass( 'collapsed' );
					var block = $this.parent().children( '.block' );
					var ul    = block.children( 'ul' );

					if ( $this.hasClass( 'collapsed' ) ) {
						ul.hide();
						block.children( '.dots, .comments' ).show();
					} else {
						ul.show();
						block.children( '.dots, .comments' ).hide();
					}
				}
			}
		} );

		if ( collapsed ) {
			item.addClass( 'collapsed' );
		}

		return item;
	};

	var formatter = function ( json, opts ) {
		var options = $.extend( {}, {
			nl2br: true
		}, opts );

		var htmlEncode = function ( html ) {
			if ( !html.toString() ) {
				return '';
			}

			return html.toString().replace( /&/g, "&amp;" ).replace( /"/g, "&quot;" ).replace( /</g, "&lt;" ).replace( />/g, "&gt;" );
		};

		var span = function ( val, cls ) {
			return $( '<span />', {
				'class': cls,
				html: htmlEncode( val )
			} );
		};

		var genBlock = function ( val, level ) {
			switch ( $.type( val ) ) {
				case 'object':
					if ( !level ) {
						level = 0;
					}

					var output = $( '<span />', {
						'class': 'block'
					} );

					var cnt = Object.keys( val ).length;
					if ( !cnt ) {
						return output
							.append( span( '{', 'b' ) )
							.append( ' ' )
							.append( span( '}', 'b' ) );
					}

					output.append( span( '{', 'b' ) );

					var items = $( '<ul />', {
						'class': 'obj collapsible level' + level
					} );

					$.each( val, function ( key, data ) {
						cnt--;
						var item = $( '<li />' )
							.append( span( '"', 'q' ) )
							.append( key )
							.append( span( '"', 'q' ) )
							.append( ': ' )
							.append( genBlock( data, level + 1 ) );

						if ( [ 'object', 'array' ].indexOf( $.type( data ) ) !== -1 && !$.isEmptyObject( data ) ) {
							item.prepend( collapser() );
						}

						if ( cnt > 0 ) {
							item.append( ',' );
						}

						items.append( item );
					} );

					output.append( items );
					output.append( span( '...', 'dots' ) );
					output.append( span( '}', 'b' ) );
					if ( Object.keys( val ).length === 1 ) {
						output.append( span( '// 1 item', 'comments' ) );
					} else {
						output.append( span( '// ' + Object.keys( val ).length + ' items', 'comments' ) );
					}

					return output;

				case 'array':
					if ( !level ) {
						level = 0;
					}

					var cnt = val.length;

					var output = $( '<span />', {
						'class': 'block'
					} );

					if ( !cnt ) {
						return output
							.append( span( '[', 'b' ) )
							.append( ' ' )
							.append( span( ']', 'b' ) );
					}

					output.append( span( '[', 'b' ) );

					var items = $( '<ul />', {
						'class': 'obj collapsible level' + level
					} );

					$.each( val, function ( key, data ) {
						cnt--;
						var item = $( '<li />' )
							.append( genBlock( data, level + 1 ) );

						if ( [ 'object', 'array' ].indexOf( $.type( data ) ) !== -1 && !$.isEmptyObject( data ) ) {
							item.prepend( collapser() );
						}

						if ( cnt > 0 ) {
							item.append( ',' );
						}

						items.append( item );
					} );

					output.append( items );
					output.append( span( '...', 'dots' ) );
					output.append( span( ']', 'b' ) );
					if ( val.length === 1 ) {
						output.append( span( '// 1 item', 'comments' ) );
					} else {
						output.append( span( '// ' + val.length + ' items', 'comments' ) );
					}

					return output;

				case 'string':
					val = htmlEncode( val );
					if ( /^(http|https|file):\/\/[^\s]+$/i.test( val ) ) {
						return $( '<span />' )
							.append( span( '"', 'q' ) )
							.append( $( '<a />', {
								href: val,
								text: val
							} ) )
							.append( span( '"', 'q' ) );
					}
					if ( options.nl2br ) {
						var pattern = /\n/g;
						if ( pattern.test( val ) ) {
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
			}
		};

		return genBlock( json );
	};

	return $.fn.jsonView = function ( json, options ) {
		var $this = $( this );

		options = $.extend( {}, {
			nl2br: true
		}, options );

		if ( typeof json === 'string' ) {
			try {
				json = JSON.parse( json );
			} catch ( err ) {
			}
		}

		$this.append( $( '<div />', {
			class: 'json-view'
		} ).append( formatter( json, options ) ) );

		return $this;
	};

} )( jQuery );

( function (window, undefined) {
	'use strict';

	/**
	 * Handles managing all events for whatever you plug it into. Priorities for hooks are based on lowest to highest in
	 * that, lowest priority hooks are fired first.
	 */
	var EventManager = function () {
		var slice = Array.prototype.slice;

		/**
		 * Maintain a reference to the object scope so our public methods never get confusing.
		 */
		var MethodsAvailable = {
			removeFilter: removeFilter,
			applyFilters: applyFilters,
			addFilter: addFilter,
			removeAction: removeAction,
			doAction: doAction,
			addAction: addAction
		};

		/**
		 * Contains the hooks that get registered with this EventManager. The array for storage utilizes a "flat"
		 * object literal such that looking up the hook utilizes the native object literal hash.
		 */
		var STORAGE = {
			actions: {},
			filters: {}
		};

		/**
		 * Adds an action to the event manager.
		 *
		 * @param action Must contain namespace.identifier
		 * @param callback Must be a valid callback function before this action is added
		 * @param [priority=10] Used to control when the function is executed in relation to other callbacks bound to the same hook
		 * @param [context] Supply a value to be used for this
		 */
		function addAction(action, callback, priority, context) {
			if ( typeof action === 'string' && typeof callback === 'function' ) {
				priority = parseInt( ( priority || 10 ), 10 );
				_addHook( 'actions', action, callback, priority, context );
			}

			return MethodsAvailable;
		}

		/**
		 * Performs an action if it exists. You can pass as many arguments as you want to this function; the only rule is
		 * that the first argument must always be the action.
		 */
		function doAction(/* action, arg1, arg2, ... */) {
			var args = slice.call( arguments );
			var action = args.shift();

			if ( typeof action === 'string' ) {
				_runHook( 'actions', action, args );
			}

			return MethodsAvailable;
		}

		/**
		 * Removes the specified action if it contains a namespace.identifier & exists.
		 *
		 * @param action The action to remove
		 * @param [callback] Callback function to remove
		 */
		function removeAction(action, callback) {
			if ( typeof action === 'string' ) {
				_removeHook( 'actions', action, callback );
			}

			return MethodsAvailable;
		}

		/**
		 * Adds a filter to the event manager.
		 *
		 * @param filter Must contain namespace.identifier
		 * @param callback Must be a valid callback function before this action is added
		 * @param [priority=10] Used to control when the function is executed in relation to other callbacks bound to the same hook
		 * @param [context] Supply a value to be used for this
		 */
		function addFilter(filter, callback, priority, context) {
			if ( typeof filter === 'string' && typeof callback === 'function' ) {
				priority = parseInt( ( priority || 10 ), 10 );
				_addHook( 'filters', filter, callback, priority, context );
			}

			return MethodsAvailable;
		}

		/**
		 * Performs a filter if it exists. You should only ever pass 1 argument to be filtered. The only rule is that
		 * the first argument must always be the filter.
		 */
		function applyFilters(/* filter, filtered arg, arg2, ... */) {
			var args = slice.call( arguments );
			var filter = args.shift();

			if ( typeof filter === 'string' ) {
				return _runHook( 'filters', filter, args );
			}

			return MethodsAvailable;
		}

		/**
		 * Removes the specified filter if it contains a namespace.identifier & exists.
		 *
		 * @param filter The action to remove
		 * @param [callback] Callback function to remove
		 */
		function removeFilter(filter, callback) {
			if ( typeof filter === 'string' ) {
				_removeHook( 'filters', filter, callback );
			}

			return MethodsAvailable;
		}

		/**
		 * Removes the specified hook by resetting the value of it.
		 *
		 * @param type Type of hook, either 'actions' or 'filters'
		 * @param hook The hook (namespace.identifier) to remove
		 * @private
		 */
		function _removeHook(type, hook, callback, context) {
			var handlers, handler, i;

			if ( !STORAGE[ type ][ hook ] ) {
				return;
			}
			if ( !callback ) {
				STORAGE[ type ][ hook ] = [];
			} else {
				handlers = STORAGE[ type ][ hook ];
				if ( !context ) {
					for ( i = handlers.length; i--; ) {
						if ( handlers[ i ].callback === callback ) {
							handlers.splice( i, 1 );
						}
					}
				}
				else {
					for ( i = handlers.length; i--; ) {
						handler = handlers[ i ];
						if ( handler.callback === callback && handler.context === context ) {
							handlers.splice( i, 1 );
						}
					}
				}
			}
		}

		/**
		 * Adds the hook to the appropriate storage container
		 *
		 * @param type 'actions' or 'filters'
		 * @param hook The hook (namespace.identifier) to add to our event manager
		 * @param callback The function that will be called when the hook is executed.
		 * @param priority The priority of this hook. Must be an integer.
		 * @param [context] A value to be used for this
		 * @private
		 */
		function _addHook(type, hook, callback, priority, context) {
			var hookObject = {
				callback: callback,
				priority: priority,
				context: context
			};

			// Utilize 'prop itself' : http://jsperf.com/hasownproperty-vs-in-vs-undefined/19
			var hooks = STORAGE[ type ][ hook ];
			if ( hooks ) {
				hooks.push( hookObject );
				hooks = _hookInsertSort( hooks );
			}
			else {
				hooks = [ hookObject ];
			}

			STORAGE[ type ][ hook ] = hooks;
		}

		/**
		 * Use an insert sort for keeping our hooks organized based on priority. This function is ridiculously faster
		 * than bubble sort, etc: http://jsperf.com/javascript-sort
		 *
		 * @param hooks The custom array containing all of the appropriate hooks to perform an insert sort on.
		 * @private
		 */
		function _hookInsertSort(hooks) {
			var tmpHook, j, prevHook;
			for ( var i = 1, len = hooks.length; i < len; i++ ) {
				tmpHook = hooks[ i ];
				j = i;
				while ( ( prevHook = hooks[ j - 1 ] ) && prevHook.priority > tmpHook.priority ) {
					hooks[ j ] = hooks[ j - 1 ];
					--j;
				}
				hooks[ j ] = tmpHook;
			}

			return hooks;
		}

		/**
		 * Runs the specified hook. If it is an action, the value is not modified but if it is a filter, it is.
		 *
		 * @param type 'actions' or 'filters'
		 * @param hook The hook ( namespace.identifier ) to be ran.
		 * @param args Arguments to pass to the action/filter. If it's a filter, args is actually a single parameter.
		 * @private
		 */
		function _runHook(type, hook, args) {
			var handlers = STORAGE[ type ][ hook ], i, len;

			if ( !handlers ) {
				return ( type === 'filters' ) ? args[ 0 ] : false;
			}

			len = handlers.length;
			if ( type === 'filters' ) {
				for ( i = 0; i < len; i++ ) {
					args[ 0 ] = handlers[ i ].callback.apply( handlers[ i ].context, args );
				}
			} else {
				for ( i = 0; i < len; i++ ) {
					handlers[ i ].callback.apply( handlers[ i ].context, args );
				}
			}

			return ( type === 'filters' ) ? args[ 0 ] : true;
		}

		// return all of the publicly available methods
		return MethodsAvailable;

	};

	window.wp = window.wp || {};
	window.wp.hooks = window.wp.hooks || new EventManager();

} )( window );

/*
* jQuery BlockUI; v20141123
* http://jquery.malsup.com/block/
* Copyright (c) 2014 M. Alsup; Dual licensed: MIT/GPL
*/
(function(){"use strict";function e(e){function o(o,i){var s,h,k=o==window,v=i&&void 0!==i.message?i.message:void 0;if(i=e.extend({},e.blockUI.defaults,i||{}),!i.ignoreIfBlocked||!e(o).data("blockUI.isBlocked")){if(i.overlayCSS=e.extend({},e.blockUI.defaults.overlayCSS,i.overlayCSS||{}),s=e.extend({},e.blockUI.defaults.css,i.css||{}),i.onOverlayClick&&(i.overlayCSS.cursor="pointer"),h=e.extend({},e.blockUI.defaults.themedCSS,i.themedCSS||{}),v=void 0===v?i.message:v,k&&b&&t(window,{fadeOut:0}),v&&"string"!=typeof v&&(v.parentNode||v.jquery)){var y=v.jquery?v[0]:v,m={};e(o).data("blockUI.history",m),m.el=y,m.parent=y.parentNode,m.display=y.style.display,m.position=y.style.position,m.parent&&m.parent.removeChild(y)}e(o).data("blockUI.onUnblock",i.onUnblock);var g,I,w,U,x=i.baseZ;g=r||i.forceIframe?e('<iframe class="blockUI" style="z-index:'+x++ +';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="'+i.iframeSrc+'"></iframe>'):e('<div class="blockUI" style="display:none"></div>'),I=i.theme?e('<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:'+x++ +';display:none"></div>'):e('<div class="blockUI blockOverlay" style="z-index:'+x++ +';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>'),i.theme&&k?(U='<div class="blockUI '+i.blockMsgClass+' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:'+(x+10)+';display:none;position:fixed">',i.title&&(U+='<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(i.title||"&nbsp;")+"</div>"),U+='<div class="ui-widget-content ui-dialog-content"></div>',U+="</div>"):i.theme?(U='<div class="blockUI '+i.blockMsgClass+' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:'+(x+10)+';display:none;position:absolute">',i.title&&(U+='<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(i.title||"&nbsp;")+"</div>"),U+='<div class="ui-widget-content ui-dialog-content"></div>',U+="</div>"):U=k?'<div class="blockUI '+i.blockMsgClass+' blockPage" style="z-index:'+(x+10)+';display:none;position:fixed"></div>':'<div class="blockUI '+i.blockMsgClass+' blockElement" style="z-index:'+(x+10)+';display:none;position:absolute"></div>',w=e(U),v&&(i.theme?(w.css(h),w.addClass("ui-widget-content")):w.css(s)),i.theme||I.css(i.overlayCSS),I.css("position",k?"fixed":"absolute"),(r||i.forceIframe)&&g.css("opacity",0);var C=[g,I,w],S=k?e("body"):e(o);e.each(C,function(){this.appendTo(S)}),i.theme&&i.draggable&&e.fn.draggable&&w.draggable({handle:".ui-dialog-titlebar",cancel:"li"});var O=f&&(!e.support.boxModel||e("object,embed",k?null:o).length>0);if(u||O){if(k&&i.allowBodyStretch&&e.support.boxModel&&e("html,body").css("height","100%"),(u||!e.support.boxModel)&&!k)var E=d(o,"borderTopWidth"),T=d(o,"borderLeftWidth"),M=E?"(0 - "+E+")":0,B=T?"(0 - "+T+")":0;e.each(C,function(e,o){var t=o[0].style;if(t.position="absolute",2>e)k?t.setExpression("height","Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:"+i.quirksmodeOffsetHack+') + "px"'):t.setExpression("height",'this.parentNode.offsetHeight + "px"'),k?t.setExpression("width",'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"'):t.setExpression("width",'this.parentNode.offsetWidth + "px"'),B&&t.setExpression("left",B),M&&t.setExpression("top",M);else if(i.centerY)k&&t.setExpression("top",'(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'),t.marginTop=0;else if(!i.centerY&&k){var n=i.css&&i.css.top?parseInt(i.css.top,10):0,s="((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "+n+') + "px"';t.setExpression("top",s)}})}if(v&&(i.theme?w.find(".ui-widget-content").append(v):w.append(v),(v.jquery||v.nodeType)&&e(v).show()),(r||i.forceIframe)&&i.showOverlay&&g.show(),i.fadeIn){var j=i.onBlock?i.onBlock:c,H=i.showOverlay&&!v?j:c,z=v?j:c;i.showOverlay&&I._fadeIn(i.fadeIn,H),v&&w._fadeIn(i.fadeIn,z)}else i.showOverlay&&I.show(),v&&w.show(),i.onBlock&&i.onBlock.bind(w)();if(n(1,o,i),k?(b=w[0],p=e(i.focusableElements,b),i.focusInput&&setTimeout(l,20)):a(w[0],i.centerX,i.centerY),i.timeout){var W=setTimeout(function(){k?e.unblockUI(i):e(o).unblock(i)},i.timeout);e(o).data("blockUI.timeout",W)}}}function t(o,t){var s,l=o==window,a=e(o),d=a.data("blockUI.history"),c=a.data("blockUI.timeout");c&&(clearTimeout(c),a.removeData("blockUI.timeout")),t=e.extend({},e.blockUI.defaults,t||{}),n(0,o,t),null===t.onUnblock&&(t.onUnblock=a.data("blockUI.onUnblock"),a.removeData("blockUI.onUnblock"));var r;r=l?e("body").children().filter(".blockUI").add("body > .blockUI"):a.find(">.blockUI"),t.cursorReset&&(r.length>1&&(r[1].style.cursor=t.cursorReset),r.length>2&&(r[2].style.cursor=t.cursorReset)),l&&(b=p=null),t.fadeOut?(s=r.length,r.stop().fadeOut(t.fadeOut,function(){0===--s&&i(r,d,t,o)})):i(r,d,t,o)}function i(o,t,i,n){var s=e(n);if(!s.data("blockUI.isBlocked")){o.each(function(){this.parentNode&&this.parentNode.removeChild(this)}),t&&t.el&&(t.el.style.display=t.display,t.el.style.position=t.position,t.el.style.cursor="default",t.parent&&t.parent.appendChild(t.el),s.removeData("blockUI.history")),s.data("blockUI.static")&&s.css("position","static"),"function"==typeof i.onUnblock&&i.onUnblock(n,i);var l=e(document.body),a=l.width(),d=l[0].style.width;l.width(a-1).width(a),l[0].style.width=d}}function n(o,t,i){var n=t==window,l=e(t);if((o||(!n||b)&&(n||l.data("blockUI.isBlocked")))&&(l.data("blockUI.isBlocked",o),n&&i.bindEvents&&(!o||i.showOverlay))){var a="mousedown mouseup keydown keypress keyup touchstart touchend touchmove";o?e(document).bind(a,i,s):e(document).unbind(a,s)}}function s(o){if("keydown"===o.type&&o.keyCode&&9==o.keyCode&&b&&o.data.constrainTabKey){var t=p,i=!o.shiftKey&&o.target===t[t.length-1],n=o.shiftKey&&o.target===t[0];if(i||n)return setTimeout(function(){l(n)},10),!1}var s=o.data,a=e(o.target);return a.hasClass("blockOverlay")&&s.onOverlayClick&&s.onOverlayClick(o),a.parents("div."+s.blockMsgClass).length>0?!0:0===a.parents().children().filter("div.blockUI").length}function l(e){if(p){var o=p[e===!0?p.length-1:0];o&&o.focus()}}function a(e,o,t){var i=e.parentNode,n=e.style,s=(i.offsetWidth-e.offsetWidth)/2-d(i,"borderLeftWidth"),l=(i.offsetHeight-e.offsetHeight)/2-d(i,"borderTopWidth");o&&(n.left=s>0?s+"px":"0"),t&&(n.top=l>0?l+"px":"0")}function d(o,t){return parseInt(e.css(o,t),10)||0}e.fn._fadeIn=e.fn.fadeIn;var c=e.noop||function(){},r=/MSIE/.test(navigator.userAgent),u=/MSIE 6.0/.test(navigator.userAgent)&&!/MSIE 8.0/.test(navigator.userAgent);document.documentMode||0;var f=e.isFunction(document.createElement("div").style.setExpression);e.blockUI=function(e){o(window,e)},e.unblockUI=function(e){t(window,e)},e.growlUI=function(o,t,i,n){var s=e('<div class="growlUI"></div>');o&&s.append("<h1>"+o+"</h1>"),t&&s.append("<h2>"+t+"</h2>"),void 0===i&&(i=3e3);var l=function(o){o=o||{},e.blockUI({message:s,fadeIn:o.fadeIn!==void 0?o.fadeIn:700,fadeOut:o.fadeOut!==void 0?o.fadeOut:1e3,timeout:o.timeout!==void 0?o.timeout:i,centerY:!1,showOverlay:!1,onUnblock:n,css:e.blockUI.defaults.growlCSS})};l(),s.css("opacity"),s.mouseover(function(){l({fadeIn:0,timeout:3e4});var o=e(".blockMsg");o.stop(),o.fadeTo(300,1)}).mouseout(function(){e(".blockMsg").fadeOut(1e3)})},e.fn.block=function(t){if(this[0]===window)return e.blockUI(t),this;var i=e.extend({},e.blockUI.defaults,t||{});return this.each(function(){var o=e(this);i.ignoreIfBlocked&&o.data("blockUI.isBlocked")||o.unblock({fadeOut:0})}),this.each(function(){"static"==e.css(this,"position")&&(this.style.position="relative",e(this).data("blockUI.static",!0)),this.style.zoom=1,o(this,t)})},e.fn.unblock=function(o){return this[0]===window?(e.unblockUI(o),this):this.each(function(){t(this,o)})},e.blockUI.version=2.7,e.blockUI.defaults={message:"<h1>Please wait...</h1>",title:null,draggable:!0,theme:!1,css:{padding:0,margin:0,width:"30%",top:"40%",left:"35%",textAlign:"center",color:"#000",border:"3px solid #aaa",backgroundColor:"#fff",cursor:"wait"},themedCSS:{width:"30%",top:"40%",left:"35%"},overlayCSS:{backgroundColor:"#000",opacity:.6,cursor:"wait"},cursorReset:"default",growlCSS:{width:"350px",top:"10px",left:"",right:"10px",border:"none",padding:"5px",opacity:.6,cursor:"default",color:"#fff",backgroundColor:"#000","-webkit-border-radius":"10px","-moz-border-radius":"10px","border-radius":"10px"},iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank",forceIframe:!1,baseZ:1e3,centerX:!0,centerY:!0,allowBodyStretch:!0,bindEvents:!0,constrainTabKey:!0,fadeIn:200,fadeOut:400,timeout:0,showOverlay:!0,focusInput:!0,focusableElements:":input:enabled:visible",onBlock:null,onUnblock:null,onOverlayClick:null,quirksmodeOffsetHack:4,blockMsgClass:"blockMsg",ignoreIfBlocked:!1};var b=null,p=[]}"function"==typeof define&&define.amd&&define.amd.jQuery?define(["jquery"],e):e(jQuery)})();
(function(t,e){'object'==typeof exports&&'undefined'!=typeof module?module.exports=e():'function'==typeof define&&define.amd?define(e):t.tippy=e()})(this,function(){'use strict';function t(t){return'[object Object]'==={}.toString.call(t)}function a(t){return[].slice.call(t)}function o(e){if(e instanceof Element||t(e))return[e];if(e instanceof NodeList)return a(e);if(Array.isArray(e))return e;try{return a(document.querySelectorAll(e))}catch(t){return[]}}function r(t){t.refObj=!0,t.attributes=t.attributes||{},t.setAttribute=function(e,a){t.attributes[e]=a},t.getAttribute=function(e){return t.attributes[e]},t.removeAttribute=function(e){delete t.attributes[e]},t.hasAttribute=function(e){return e in t.attributes},t.addEventListener=function(){},t.removeEventListener=function(){},t.classList={classNames:{},add:function(e){return t.classList.classNames[e]=!0},remove:function(e){return delete t.classList.classNames[e],!0},contains:function(e){return e in t.classList.classNames}}}function p(t){for(var e=['','webkit'],a=t.charAt(0).toUpperCase()+t.slice(1),o=0;o<e.length;o++){var i=e[o],r=i?i+a:t;if('undefined'!=typeof document.body.style[r])return r}return null}function n(){return document.createElement('div')}function s(t,e,a){var i=n();i.setAttribute('class','tippy-popper'),i.setAttribute('role','tooltip'),i.setAttribute('id','tippy-'+t),i.style.zIndex=a.zIndex,i.style.maxWidth=a.maxWidth;var o=n();o.setAttribute('class','tippy-tooltip'),o.setAttribute('data-size',a.size),o.setAttribute('data-animation',a.animation),o.setAttribute('data-state','hidden'),a.theme.split(' ').forEach(function(e){o.classList.add(e+'-theme')});var r=n();if(r.setAttribute('class','tippy-content'),a.arrow){var s=n();s.style[p('transform')]=a.arrowTransform,'round'===a.arrowType?(s.classList.add('tippy-roundarrow'),s.innerHTML='<svg viewBox="0 0 24 8" xmlns="http://www.w3.org/2000/svg"><path d="M3 8s2.021-.015 5.253-4.218C9.584 2.051 10.797 1.007 12 1c1.203-.007 2.416 1.035 3.761 2.782C19.012 8.005 21 8 21 8H3z"/></svg>'):s.classList.add('tippy-arrow'),o.appendChild(s)}if(a.animateFill){o.setAttribute('data-animatefill','');var l=n();l.classList.add('tippy-backdrop'),l.setAttribute('data-state','hidden'),o.appendChild(l)}a.inertia&&o.setAttribute('data-inertia',''),a.interactive&&o.setAttribute('data-interactive','');var d=a.html;if(d){var c;d instanceof Element?(r.appendChild(d),c='#'+(d.id||'tippy-html-template')):(r.innerHTML=document.querySelector(d).innerHTML,c=d),i.setAttribute('data-html',''),o.setAttribute('data-template-id',c),a.interactive&&i.setAttribute('tabindex','-1')}else r[a.allowTitleHTML?'innerHTML':'textContent']=e;return o.appendChild(r),i.appendChild(o),i}function l(t,e,a,i){var o=a.onTrigger,r=a.onMouseLeave,p=a.onBlur,n=a.onDelegateShow,s=a.onDelegateHide,l=[];if('manual'===t)return l;var d=function(t,a){e.addEventListener(t,a),l.push({event:t,handler:a})};return i.target?(Ft.supportsTouch&&i.touchHold&&(d('touchstart',n),d('touchend',s)),'mouseenter'===t&&(d('mouseover',n),d('mouseout',s)),'focus'===t&&(d('focusin',n),d('focusout',s)),'click'===t&&d('click',n)):(d(t,o),Ft.supportsTouch&&i.touchHold&&(d('touchstart',o),d('touchend',r)),'mouseenter'===t&&d('mouseleave',r),'focus'===t&&d(zt?'focusout':'blur',p)),l}function d(t,e){var a=Kt.reduce(function(a,i){var o=t.getAttribute('data-tippy-'+i.toLowerCase())||e[i];return'false'===o&&(o=!1),'true'===o&&(o=!0),isFinite(o)&&!isNaN(parseFloat(o))&&(o=parseFloat(o)),'target'!==i&&'string'==typeof o&&'['===o.trim().charAt(0)&&(o=JSON.parse(o)),a[i]=o,a},{});return Qt({},e,a)}function c(t,e){return e.arrow&&(e.animateFill=!1),e.appendTo&&'function'==typeof e.appendTo&&(e.appendTo=e.appendTo()),'function'==typeof e.html&&(e.html=e.html(t)),e}function m(t){var e=function(e){return t.querySelector(e)};return{tooltip:e(qt.TOOLTIP),backdrop:e(qt.BACKDROP),content:e(qt.CONTENT),arrow:e(qt.ARROW)||e(qt.ROUND_ARROW)}}function f(t){var e=t.getAttribute('title');e&&t.setAttribute('data-original-title',e),t.removeAttribute('title')}function h(t){return t&&'[object Function]'==={}.toString.call(t)}function b(t,e){if(1!==t.nodeType)return[];var a=getComputedStyle(t,null);return e?a[e]:a}function u(t){return'HTML'===t.nodeName?t:t.parentNode||t.host}function y(t){if(!t)return document.body;switch(t.nodeName){case'HTML':case'BODY':return t.ownerDocument.body;case'#document':return t.body;}var e=b(t),a=e.overflow,i=e.overflowX,o=e.overflowY;return /(auto|scroll|overlay)/.test(a+o+i)?t:y(u(t))}function g(t){return 11===t?ae:10===t?ie:ae||ie}function w(t){if(!t)return document.documentElement;for(var e=g(10)?document.body:null,a=t.offsetParent;a===e&&t.nextElementSibling;)a=(t=t.nextElementSibling).offsetParent;var i=a&&a.nodeName;return i&&'BODY'!==i&&'HTML'!==i?-1!==['TD','TABLE'].indexOf(a.nodeName)&&'static'===b(a,'position')?w(a):a:t?t.ownerDocument.documentElement:document.documentElement}function x(t){var e=t.nodeName;return'BODY'!==e&&('HTML'===e||w(t.firstElementChild)===t)}function v(t){return null===t.parentNode?t:v(t.parentNode)}function k(t,e){if(!t||!t.nodeType||!e||!e.nodeType)return document.documentElement;var a=t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_FOLLOWING,i=a?t:e,o=a?e:t,r=document.createRange();r.setStart(i,0),r.setEnd(o,0);var p=r.commonAncestorContainer;if(t!==p&&e!==p||i.contains(o))return x(p)?p:w(p);var n=v(t);return n.host?k(n.host,e):k(t,v(e).host)}function E(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:'top',a='top'===e?'scrollTop':'scrollLeft',i=t.nodeName;if('BODY'===i||'HTML'===i){var o=t.ownerDocument.documentElement,r=t.ownerDocument.scrollingElement||o;return r[a]}return t[a]}function T(t,e){var a=!!(2<arguments.length&&void 0!==arguments[2])&&arguments[2],i=E(e,'top'),o=E(e,'left'),r=a?-1:1;return t.top+=i*r,t.bottom+=i*r,t.left+=o*r,t.right+=o*r,t}function L(t,e){var a='x'===e?'Left':'Top',i='Left'===a?'Right':'Bottom';return parseFloat(t['border'+a+'Width'],10)+parseFloat(t['border'+i+'Width'],10)}function O(t,e,a,i){return Bt(e['offset'+t],e['scroll'+t],a['client'+t],a['offset'+t],a['scroll'+t],g(10)?parseInt(a['offset'+t])+parseInt(i['margin'+('Height'===t?'Top':'Left')])+parseInt(i['margin'+('Height'===t?'Bottom':'Right')]):0)}function A(t){var e=t.body,a=t.documentElement,i=g(10)&&getComputedStyle(a);return{height:O('Height',e,a,i),width:O('Width',e,a,i)}}function C(t){return ne({},t,{right:t.left+t.width,bottom:t.top+t.height})}function S(t){var e={};try{if(g(10)){e=t.getBoundingClientRect();var a=E(t,'top'),i=E(t,'left');e.top+=a,e.left+=i,e.bottom+=a,e.right+=i}else e=t.getBoundingClientRect()}catch(t){}var o={left:e.left,top:e.top,width:e.right-e.left,height:e.bottom-e.top},r='HTML'===t.nodeName?A(t.ownerDocument):{},p=r.width||t.clientWidth||o.right-o.left,n=r.height||t.clientHeight||o.bottom-o.top,s=t.offsetWidth-p,l=t.offsetHeight-n;if(s||l){var d=b(t);s-=L(d,'x'),l-=L(d,'y'),o.width-=s,o.height-=l}return C(o)}function Y(t,e){var a=!!(2<arguments.length&&void 0!==arguments[2])&&arguments[2],i=g(10),o='HTML'===e.nodeName,r=S(t),p=S(e),n=y(t),s=b(e),l=parseFloat(s.borderTopWidth,10),d=parseFloat(s.borderLeftWidth,10);a&&o&&(p.top=Bt(p.top,0),p.left=Bt(p.left,0));var c=C({top:r.top-p.top-l,left:r.left-p.left-d,width:r.width,height:r.height});if(c.marginTop=0,c.marginLeft=0,!i&&o){var m=parseFloat(s.marginTop,10),f=parseFloat(s.marginLeft,10);c.top-=l-m,c.bottom-=l-m,c.left-=d-f,c.right-=d-f,c.marginTop=m,c.marginLeft=f}return(i&&!a?e.contains(n):e===n&&'BODY'!==n.nodeName)&&(c=T(c,e)),c}function P(t){var e=!!(1<arguments.length&&void 0!==arguments[1])&&arguments[1],a=t.ownerDocument.documentElement,i=Y(t,a),o=Bt(a.clientWidth,window.innerWidth||0),r=Bt(a.clientHeight,window.innerHeight||0),p=e?0:E(a),n=e?0:E(a,'left'),s={top:p-i.top+i.marginTop,left:n-i.left+i.marginLeft,width:o,height:r};return C(s)}function X(t){var e=t.nodeName;return'BODY'!==e&&'HTML'!==e&&('fixed'===b(t,'position')||X(u(t)))}function D(t){if(!t||!t.parentElement||g())return document.documentElement;for(var e=t.parentElement;e&&'none'===b(e,'transform');)e=e.parentElement;return e||document.documentElement}function I(t,e,a,i){var o=!!(4<arguments.length&&void 0!==arguments[4])&&arguments[4],r={top:0,left:0},p=o?D(t):k(t,e);if('viewport'===i)r=P(p,o);else{var n;'scrollParent'===i?(n=y(u(e)),'BODY'===n.nodeName&&(n=t.ownerDocument.documentElement)):'window'===i?n=t.ownerDocument.documentElement:n=i;var s=Y(n,p,o);if('HTML'===n.nodeName&&!X(p)){var l=A(t.ownerDocument),d=l.height,c=l.width;r.top+=s.top-s.marginTop,r.bottom=d+s.top,r.left+=s.left-s.marginLeft,r.right=c+s.left}else r=s}a=a||0;var m='number'==typeof a;return r.left+=m?a:a.left||0,r.top+=m?a:a.top||0,r.right-=m?a:a.right||0,r.bottom-=m?a:a.bottom||0,r}function R(t){var e=t.width,a=t.height;return e*a}function H(t,e,a,i,o){var r=5<arguments.length&&void 0!==arguments[5]?arguments[5]:0;if(-1===t.indexOf('auto'))return t;var p=I(a,i,r,o),n={top:{width:p.width,height:e.top-p.top},right:{width:p.right-e.right,height:p.height},bottom:{width:p.width,height:p.bottom-e.bottom},left:{width:e.left-p.left,height:p.height}},s=Object.keys(n).map(function(t){return ne({key:t},n[t],{area:R(n[t])})}).sort(function(t,e){return e.area-t.area}),l=s.filter(function(t){var e=t.width,i=t.height;return e>=a.clientWidth&&i>=a.clientHeight}),d=0<l.length?l[0].key:s[0].key,c=t.split('-')[1];return d+(c?'-'+c:'')}function _(t,e,a){var i=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null,o=i?D(e):k(e,a);return Y(a,o,i)}function N(t){var e=getComputedStyle(t),a=parseFloat(e.marginTop)+parseFloat(e.marginBottom),i=parseFloat(e.marginLeft)+parseFloat(e.marginRight),o={width:t.offsetWidth+i,height:t.offsetHeight+a};return o}function M(t){var e={left:'right',right:'left',bottom:'top',top:'bottom'};return t.replace(/left|right|bottom|top/g,function(t){return e[t]})}function W(t,e,a){a=a.split('-')[0];var i=N(t),o={width:i.width,height:i.height},r=-1!==['right','left'].indexOf(a),p=r?'top':'left',n=r?'left':'top',s=r?'height':'width',l=r?'width':'height';return o[p]=e[p]+e[s]/2-i[s]/2,o[n]=a===n?e[n]-i[l]:e[M(n)],o}function B(t,e){return Array.prototype.find?t.find(e):t.filter(e)[0]}function U(t,e,a){if(Array.prototype.findIndex)return t.findIndex(function(t){return t[e]===a});var i=B(t,function(t){return t[e]===a});return t.indexOf(i)}function z(t,e,a){var i=void 0===a?t:t.slice(0,U(t,'name',a));return i.forEach(function(t){t['function']&&console.warn('`modifier.function` is deprecated, use `modifier.fn`!');var a=t['function']||t.fn;t.enabled&&h(a)&&(e.offsets.popper=C(e.offsets.popper),e.offsets.reference=C(e.offsets.reference),e=a(e,t))}),e}function F(){if(!this.state.isDestroyed){var t={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};t.offsets.reference=_(this.state,this.popper,this.reference,this.options.positionFixed),t.placement=H(this.options.placement,t.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),t.originalPlacement=t.placement,t.positionFixed=this.options.positionFixed,t.offsets.popper=W(this.popper,t.offsets.reference,t.placement),t.offsets.popper.position=this.options.positionFixed?'fixed':'absolute',t=z(this.modifiers,t),this.state.isCreated?this.options.onUpdate(t):(this.state.isCreated=!0,this.options.onCreate(t))}}function q(t,e){return t.some(function(t){var a=t.name,i=t.enabled;return i&&a===e})}function j(t){for(var e=[!1,'ms','Webkit','Moz','O'],a=t.charAt(0).toUpperCase()+t.slice(1),o=0;o<e.length;o++){var i=e[o],r=i?''+i+a:t;if('undefined'!=typeof document.body.style[r])return r}return null}function K(){return this.state.isDestroyed=!0,q(this.modifiers,'applyStyle')&&(this.popper.removeAttribute('x-placement'),this.popper.style.position='',this.popper.style.top='',this.popper.style.left='',this.popper.style.right='',this.popper.style.bottom='',this.popper.style.willChange='',this.popper.style[j('transform')]=''),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function V(t){var e=t.ownerDocument;return e?e.defaultView:window}function G(t,e,a,i){var o='BODY'===t.nodeName,r=o?t.ownerDocument.defaultView:t;r.addEventListener(e,a,{passive:!0}),o||G(y(r.parentNode),e,a,i),i.push(r)}function Q(t,e,a,i){a.updateBound=i,V(t).addEventListener('resize',a.updateBound,{passive:!0});var o=y(t);return G(o,'scroll',a.updateBound,a.scrollParents),a.scrollElement=o,a.eventsEnabled=!0,a}function Z(){this.state.eventsEnabled||(this.state=Q(this.reference,this.options,this.state,this.scheduleUpdate))}function $(t,e){return V(t).removeEventListener('resize',e.updateBound),e.scrollParents.forEach(function(t){t.removeEventListener('scroll',e.updateBound)}),e.updateBound=null,e.scrollParents=[],e.scrollElement=null,e.eventsEnabled=!1,e}function J(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=$(this.reference,this.state))}function tt(t){return''!==t&&!isNaN(parseFloat(t))&&isFinite(t)}function et(t,e){Object.keys(e).forEach(function(a){var i='';-1!==['width','height','top','right','bottom','left'].indexOf(a)&&tt(e[a])&&(i='px'),t.style[a]=e[a]+i})}function at(t,e){Object.keys(e).forEach(function(a){var i=e[a];!1===i?t.removeAttribute(a):t.setAttribute(a,e[a])})}function it(t,e,a){var i=B(t,function(t){var a=t.name;return a===e}),o=!!i&&t.some(function(t){return t.name===a&&t.enabled&&t.order<i.order});if(!o){var r='`'+e+'`';console.warn('`'+a+'`'+' modifier is required by '+r+' modifier in order to work, be sure to include it before '+r+'!')}return o}function ot(t){return'end'===t?'start':'start'===t?'end':t}function rt(t){var e=!!(1<arguments.length&&void 0!==arguments[1])&&arguments[1],a=le.indexOf(t),i=le.slice(a+1).concat(le.slice(0,a));return e?i.reverse():i}function pt(t,e,a,i){var o=t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),r=+o[1],p=o[2];if(!r)return t;if(0===p.indexOf('%')){var n;switch(p){case'%p':n=a;break;case'%':case'%r':default:n=i;}var s=C(n);return s[e]/100*r}if('vh'===p||'vw'===p){var l;return l='vh'===p?Bt(document.documentElement.clientHeight,window.innerHeight||0):Bt(document.documentElement.clientWidth,window.innerWidth||0),l/100*r}return r}function nt(t,e,a,i){var o=[0,0],r=-1!==['right','left'].indexOf(i),p=t.split(/(\+|\-)/).map(function(t){return t.trim()}),n=p.indexOf(B(p,function(t){return-1!==t.search(/,|\s/)}));p[n]&&-1===p[n].indexOf(',')&&console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');var s=/\s*,\s*|\s+/,l=-1===n?[p]:[p.slice(0,n).concat([p[n].split(s)[0]]),[p[n].split(s)[1]].concat(p.slice(n+1))];return l=l.map(function(t,i){var o=(1===i?!r:r)?'height':'width',p=!1;return t.reduce(function(t,e){return''===t[t.length-1]&&-1!==['+','-'].indexOf(e)?(t[t.length-1]=e,p=!0,t):p?(t[t.length-1]+=e,p=!1,t):t.concat(e)},[]).map(function(t){return pt(t,o,e,a)})}),l.forEach(function(t,e){t.forEach(function(a,i){tt(a)&&(o[e]+=a*('-'===t[i-1]?-1:1))})}),o}function st(t,e){var a=e.offset,i=t.placement,o=t.offsets,r=o.popper,p=o.reference,n=i.split('-')[0],s=void 0;return s=tt(+a)?[+a,0]:nt(a,r,p,n),'left'===n?(r.top+=s[0],r.left-=s[1]):'right'===n?(r.top+=s[0],r.left+=s[1]):'top'===n?(r.left+=s[0],r.top-=s[1]):'bottom'===n&&(r.left+=s[0],r.top+=s[1]),t.popper=r,t}function lt(t){void t.offsetHeight}function dt(t,e,a){var i=t.popper,o=t.options,r=o.onCreate,p=o.onUpdate;o.onCreate=o.onUpdate=function(){lt(i),e&&e(),p(),o.onCreate=r,o.onUpdate=p},a||t.scheduleUpdate()}function ct(t){return t.getAttribute('x-placement').replace(/-.+/,'')}function mt(t,e,a){if(!e.getAttribute('x-placement'))return!0;var i=t.clientX,o=t.clientY,r=a.interactiveBorder,p=a.distance,n=e.getBoundingClientRect(),s=ct(e),l=r+p,d={top:n.top-o>r,bottom:o-n.bottom>r,left:n.left-i>r,right:i-n.right>r};return'top'===s?d.top=n.top-o>l:'bottom'===s?d.bottom=o-n.bottom>l:'left'===s?d.left=n.left-i>l:'right'===s?d.right=i-n.right>l:void 0,d.top||d.bottom||d.left||d.right}function ft(t,e,a,i){if(!e.length)return'';var o={scale:function(){return 1===e.length?''+e[0]:a?e[0]+', '+e[1]:e[1]+', '+e[0]}(),translate:function(){return 1===e.length?i?-e[0]+'px':e[0]+'px':a?i?e[0]+'px, '+-e[1]+'px':e[0]+'px, '+e[1]+'px':i?-e[1]+'px, '+e[0]+'px':e[1]+'px, '+e[0]+'px'}()};return o[t]}function ht(t,e){if(!t)return'';return e?t:{X:'Y',Y:'X'}[t]}function bt(t,e,a){var i=ct(t),o='top'===i||'bottom'===i,r='right'===i||'bottom'===i,n=function(t){var e=a.match(t);return e?e[1]:''},s=function(t){var e=a.match(t);return e?e[1].split(',').map(parseFloat):[]},l={translate:/translateX?Y?\(([^)]+)\)/,scale:/scaleX?Y?\(([^)]+)\)/},d={translate:{axis:n(/translate([XY])/),numbers:s(l.translate)},scale:{axis:n(/scale([XY])/),numbers:s(l.scale)}},c=a.replace(l.translate,'translate'+ht(d.translate.axis,o)+'('+ft('translate',d.translate.numbers,o,r)+')').replace(l.scale,'scale'+ht(d.scale.axis,o)+'('+ft('scale',d.scale.numbers,o,r)+')');e.style[p('transform')]=c}function ut(t){return-(t-jt.distance)+'px'}function yt(t,a){var i=Element.prototype.closest||function(t){for(var a=this;a;){if(e.call(a,t))return a;a=a.parentElement}};return i.call(t,a)}function gt(t,e){return Array.isArray(t)?t[e]:t}function wt(t,e){t.forEach(function(t){t&&t.setAttribute('data-state',e)})}function xt(t,e){t.filter(Boolean).forEach(function(t){t.style[p('transitionDuration')]=e+'ms'})}function vt(t){var e=window.scrollX||window.pageXOffset,a=window.scrollY||window.pageYOffset;t.focus(),scroll(e,a)}function kt(){var t=this._(he).lastTriggerEvent;return this.options.followCursor&&!Ft.usingTouch&&t&&'focus'!==t.type}function Et(t){var e=yt(t.target,this.options.target);if(e&&!e._tippy){var a=e.getAttribute('title')||this.title;a&&(e.setAttribute('title',a),_t(e,Qt({},this.options,{target:null})),Tt.call(e._tippy,t))}}function Tt(t){var e=this,a=this.options;if(St.call(this),!this.state.visible){if(a.target)return void Et.call(this,t);if(this._(he).isPreparingToShow=!0,a.wait)return void a.wait.call(this.popper,this.show.bind(this),t);if(kt.call(this)){this._(he).followCursorListener||Yt.call(this);var i=m(this.popper),o=i.arrow;o&&(o.style.margin='0'),document.addEventListener('mousemove',this._(he).followCursorListener)}var r=gt(a.delay,0);r?this._(he).showTimeout=setTimeout(function(){e.show()},r):this.show()}}function Lt(){var t=this;if(St.call(this),!!this.state.visible){this._(he).isPreparingToShow=!1;var e=gt(this.options.delay,1);e?this._(he).hideTimeout=setTimeout(function(){t.state.visible&&t.hide()},e):this.hide()}}function Ot(){var t=this;return{onTrigger:function(e){if(t.state.enabled){var a=Ft.supportsTouch&&Ft.usingTouch&&-1<['mouseenter','mouseover','focus'].indexOf(e.type);a&&t.options.touchHold||(t._(he).lastTriggerEvent=e,'click'===e.type&&'persistent'!==t.options.hideOnClick&&t.state.visible?Lt.call(t):Tt.call(t,e))}},onMouseLeave:function(e){if(!(-1<['mouseleave','mouseout'].indexOf(e.type)&&Ft.supportsTouch&&Ft.usingTouch&&t.options.touchHold)){if(t.options.interactive){var a=Lt.bind(t),i=function e(i){var o=yt(i.target,qt.REFERENCE),r=yt(i.target,qt.POPPER)===t.popper,p=o===t.reference;r||p||mt(i,t.popper,t.options)&&(document.body.removeEventListener('mouseleave',a),document.removeEventListener('mousemove',e),Lt.call(t,e))};return document.body.addEventListener('mouseleave',a),void document.addEventListener('mousemove',i)}Lt.call(t)}},onBlur:function(e){if(!(e.target!==t.reference||Ft.usingTouch)){if(t.options.interactive){if(!e.relatedTarget)return;if(yt(e.relatedTarget,qt.POPPER))return}Lt.call(t)}},onDelegateShow:function(e){yt(e.target,t.options.target)&&Tt.call(t,e)},onDelegateHide:function(e){yt(e.target,t.options.target)&&Lt.call(t)}}}function At(){var t=this,e=this.popper,a=this.reference,i=this.options,o=m(e),r=o.tooltip,p=i.popperOptions,n='round'===i.arrowType?qt.ROUND_ARROW:qt.ARROW,s=r.querySelector(n),l=Qt({placement:i.placement},p||{},{modifiers:Qt({},p?p.modifiers:{},{arrow:Qt({element:n},p&&p.modifiers?p.modifiers.arrow:{}),flip:Qt({enabled:i.flip,padding:i.distance+5,behavior:i.flipBehavior},p&&p.modifiers?p.modifiers.flip:{}),offset:Qt({offset:i.offset},p&&p.modifiers?p.modifiers.offset:{})}),onCreate:function(){r.style[ct(e)]=ut(i.distance),s&&i.arrowTransform&&bt(e,s,i.arrowTransform)},onUpdate:function(){var t=r.style;t.top='',t.bottom='',t.left='',t.right='',t[ct(e)]=ut(i.distance),s&&i.arrowTransform&&bt(e,s,i.arrowTransform)}});return Xt.call(this,{target:e,callback:function(){t.popperInstance.update()},options:{childList:!0,subtree:!0,characterData:!0}}),new ce(a,e,l)}function Ct(t){var e=this.options;if(this.popperInstance?(this.popperInstance.scheduleUpdate(),e.livePlacement&&!kt.call(this)&&this.popperInstance.enableEventListeners()):(this.popperInstance=At.call(this),!e.livePlacement&&this.popperInstance.disableEventListeners()),!kt.call(this)){var a=m(this.popper),i=a.arrow;i&&(i.style.margin=''),this.popperInstance.reference=this.reference}dt(this.popperInstance,t,!0),e.appendTo.contains(this.popper)||e.appendTo.appendChild(this.popper)}function St(){var t=this._(he),e=t.showTimeout,a=t.hideTimeout;clearTimeout(e),clearTimeout(a)}function Yt(){var t=this;this._(he).followCursorListener=function(e){var a=t._(he).lastMouseMoveEvent=e,i=a.clientX,o=a.clientY;t.popperInstance&&(t.popperInstance.reference={getBoundingClientRect:function(){return{width:0,height:0,top:o,left:i,right:i,bottom:o}},clientWidth:0,clientHeight:0},t.popperInstance.scheduleUpdate())}}function Pt(){var t=this,e=function(){t.popper.style[p('transitionDuration')]=t.options.updateDuration+'ms'},a=function(){t.popper.style[p('transitionDuration')]=''};(function i(){t.popperInstance&&t.popperInstance.update(),e(),t.state.visible?requestAnimationFrame(i):a()})()}function Xt(t){var e=t.target,a=t.callback,i=t.options;if(window.MutationObserver){var o=new MutationObserver(a);o.observe(e,i),this._(he).mutationObservers.push(o)}}function Dt(t,a){if(!t)return a();var e=m(this.popper),i=e.tooltip,o=function(t,e){e&&i[t+'EventListener']('transition'in document.body.style?'transitionend':'webkitTransitionEnd',e)},r=function t(r){r.target===i&&(o('remove',t),a())};o('remove',this._(he).transitionendListener),o('add',r),this._(he).transitionendListener=r}function It(t,e){return t.reduce(function(t,a){var i=ye,o=c(a,e.performance?e:d(a,e)),r=a.getAttribute('title');if(!r&&!o.target&&!o.html&&!o.dynamicTitle)return t;a.setAttribute(o.target?'data-tippy-delegate':'data-tippy',''),f(a);var p=s(i,r,o),n=new ue({id:i,reference:a,popper:p,options:o,title:r,popperInstance:null});o.createPopperInstanceOnInit&&(n.popperInstance=At.call(n),n.popperInstance.disableEventListeners());var h=Ot.call(n);return n.listeners=o.trigger.trim().split(' ').reduce(function(t,e){return t.concat(l(e,a,h,o))},[]),o.dynamicTitle&&Xt.call(n,{target:a,callback:function(){var t=m(p),e=t.content,i=a.getAttribute('title');i&&(e[o.allowTitleHTML?'innerHTML':'textContent']=n.title=i,f(a))},options:{attributes:!0}}),a._tippy=n,p._tippy=n,p._reference=a,t.push(n),ye++,t},[])}function Rt(t){var e=a(document.querySelectorAll(qt.POPPER));e.forEach(function(e){var a=e._tippy;if(a){var i=a.options;(!0===i.hideOnClick||-1<i.trigger.indexOf('focus'))&&(!t||e!==t.popper)&&a.hide()}})}function Ht(t){var i=function(){Ft.usingTouch||(Ft.usingTouch=!0,Ft.iOS&&document.body.classList.add('tippy-touch'),Ft.dynamicInputDetection&&window.performance&&document.addEventListener('mousemove',o),Ft.onUserInputChange('touch'))},o=function(){var t;return function(){var e=performance.now();20>e-t&&(Ft.usingTouch=!1,document.removeEventListener('mousemove',o),!Ft.iOS&&document.body.classList.remove('tippy-touch'),Ft.onUserInputChange('mouse')),t=e}}();document.addEventListener('click',function(t){if(!(t.target instanceof Element))return Rt();var e=yt(t.target,qt.REFERENCE),a=yt(t.target,qt.POPPER);if(!(a&&a._tippy&&a._tippy.options.interactive)){if(e&&e._tippy){var i=e._tippy.options,o=-1<i.trigger.indexOf('click'),r=i.multiple;if(!r&&Ft.usingTouch||!r&&o)return Rt(e._tippy);if(!0!==i.hideOnClick||o)return}Rt()}},t),document.addEventListener('touchstart',i),window.addEventListener('blur',function(){var t=document,a=t.activeElement;a&&a.blur&&e.call(a,qt.REFERENCE)&&a.blur()}),window.addEventListener('resize',function(){a(document.querySelectorAll(qt.POPPER)).forEach(function(t){var e=t._tippy;e&&!e.options.livePlacement&&e.popperInstance.scheduleUpdate()})}),!Ft.supportsTouch&&(navigator.maxTouchPoints||navigator.msMaxTouchPoints)&&document.addEventListener('pointerdown',i)}function _t(e,a,i){Ft.supported&&!ge&&(Ht(we),ge=!0),t(e)&&r(e),a=Qt({},jt,a);var p=o(e),n=p[0];return{selector:e,options:a,tooltips:Ft.supported?It(i&&n?[n]:p,a):[],destroyAll:function(){this.tooltips.forEach(function(t){return t.destroy()}),this.tooltips=[]}}}var Nt=Math.min,Mt=Math.round,Wt=Math.floor,Bt=Math.max,Ut='undefined'!=typeof window,zt=Ut&&/MSIE |Trident\//.test(navigator.userAgent),Ft={};Ut&&(Ft.supported='requestAnimationFrame'in window,Ft.supportsTouch='ontouchstart'in window,Ft.usingTouch=!1,Ft.dynamicInputDetection=!0,Ft.iOS=/iPhone|iPad|iPod/.test(navigator.platform)&&!window.MSStream,Ft.onUserInputChange=function(){});for(var qt={POPPER:'.tippy-popper',TOOLTIP:'.tippy-tooltip',CONTENT:'.tippy-content',BACKDROP:'.tippy-backdrop',ARROW:'.tippy-arrow',ROUND_ARROW:'.tippy-roundarrow',REFERENCE:'[data-tippy]'},jt={placement:'top',livePlacement:!0,trigger:'mouseenter focus',animation:'shift-away',html:!1,animateFill:!0,arrow:!1,delay:[0,20],duration:[350,300],interactive:!1,interactiveBorder:2,theme:'dark',size:'regular',distance:10,offset:0,hideOnClick:!0,multiple:!1,followCursor:!1,inertia:!1,updateDuration:350,sticky:!1,appendTo:function(){return document.body},zIndex:9999,touchHold:!1,performance:!1,dynamicTitle:!1,flip:!0,flipBehavior:'flip',arrowType:'sharp',arrowTransform:'',maxWidth:'',target:null,allowTitleHTML:!0,popperOptions:{},createPopperInstanceOnInit:!1,onShow:function(){},onShown:function(){},onHide:function(){},onHidden:function(){}},Kt=Ft.supported&&Object.keys(jt),Vt=function(t,e){if(!(t instanceof e))throw new TypeError('Cannot call a class as a function')},Gt=function(){function t(t,e){for(var a,o=0;o<e.length;o++)a=e[o],a.enumerable=a.enumerable||!1,a.configurable=!0,('value'in a)&&(a.writable=!0),Object.defineProperty(t,a.key,a)}return function(e,a,i){return a&&t(e.prototype,a),i&&t(e,i),e}}(),Qt=Object.assign||function(t){for(var e,a=1;a<arguments.length;a++)for(var i in e=arguments[a],e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},Zt='undefined'!=typeof window&&'undefined'!=typeof document,$t=['Edge','Trident','Firefox'],Jt=0,te=0;te<$t.length;te+=1)if(Zt&&0<=navigator.userAgent.indexOf($t[te])){Jt=1;break}var i=Zt&&window.Promise,ee=i?function(t){var e=!1;return function(){e||(e=!0,window.Promise.resolve().then(function(){e=!1,t()}))}}:function(t){var e=!1;return function(){e||(e=!0,setTimeout(function(){e=!1,t()},Jt))}},ae=Zt&&!!(window.MSInputMethodContext&&document.documentMode),ie=Zt&&/MSIE 10/.test(navigator.userAgent),oe=function(t,e){if(!(t instanceof e))throw new TypeError('Cannot call a class as a function')},re=function(){function t(t,e){for(var a,o=0;o<e.length;o++)a=e[o],a.enumerable=a.enumerable||!1,a.configurable=!0,'value'in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}return function(e,a,i){return a&&t(e.prototype,a),i&&t(e,i),e}}(),pe=function(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t},ne=Object.assign||function(t){for(var e,a=1;a<arguments.length;a++)for(var i in e=arguments[a],e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},se=['auto-start','auto','auto-end','top-start','top','top-end','right-start','right','right-end','bottom-end','bottom','bottom-start','left-end','left','left-start'],le=se.slice(3),de={FLIP:'flip',CLOCKWISE:'clockwise',COUNTERCLOCKWISE:'counterclockwise'},ce=function(){function t(e,a){var i=this,o=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};oe(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(i.update)},this.update=ee(this.update.bind(this)),this.options=ne({},t.Defaults,o),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=e&&e.jquery?e[0]:e,this.popper=a&&a.jquery?a[0]:a,this.options.modifiers={},Object.keys(ne({},t.Defaults.modifiers,o.modifiers)).forEach(function(e){i.options.modifiers[e]=ne({},t.Defaults.modifiers[e]||{},o.modifiers?o.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(t){return ne({name:t},i.options.modifiers[t])}).sort(function(t,e){return t.order-e.order}),this.modifiers.forEach(function(t){t.enabled&&h(t.onLoad)&&t.onLoad(i.reference,i.popper,i.options,t,i.state)}),this.update();var r=this.options.eventsEnabled;r&&this.enableEventListeners(),this.state.eventsEnabled=r}return re(t,[{key:'update',value:function(){return F.call(this)}},{key:'destroy',value:function(){return K.call(this)}},{key:'enableEventListeners',value:function(){return Z.call(this)}},{key:'disableEventListeners',value:function(){return J.call(this)}}]),t}();ce.Utils=('undefined'==typeof window?global:window).PopperUtils,ce.placements=se,ce.Defaults={placement:'bottom',positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(t){var e=t.placement,a=e.split('-')[0],i=e.split('-')[1];if(i){var o=t.offsets,r=o.reference,p=o.popper,n=-1!==['bottom','top'].indexOf(a),s=n?'left':'top',l=n?'width':'height',d={start:pe({},s,r[s]),end:pe({},s,r[s]+r[l]-p[l])};t.offsets.popper=ne({},p,d[i])}return t}},offset:{order:200,enabled:!0,fn:st,offset:0},preventOverflow:{order:300,enabled:!0,fn:function(t,e){var a=e.boundariesElement||w(t.instance.popper);t.instance.reference===a&&(a=w(a));var i=j('transform'),o=t.instance.popper.style,r=o.top,p=o.left,n=o[i];o.top='',o.left='',o[i]='';var s=I(t.instance.popper,t.instance.reference,e.padding,a,t.positionFixed);o.top=r,o.left=p,o[i]=n,e.boundaries=s;var l=e.priority,d=t.offsets.popper,c={primary:function(t){var a=d[t];return d[t]<s[t]&&!e.escapeWithReference&&(a=Bt(d[t],s[t])),pe({},t,a)},secondary:function(t){var a='right'===t?'left':'top',i=d[a];return d[t]>s[t]&&!e.escapeWithReference&&(i=Nt(d[a],s[t]-('right'===t?d.width:d.height))),pe({},a,i)}};return l.forEach(function(t){var e=-1===['left','top'].indexOf(t)?'secondary':'primary';d=ne({},d,c[e](t))}),t.offsets.popper=d,t},priority:['left','right','top','bottom'],padding:5,boundariesElement:'scrollParent'},keepTogether:{order:400,enabled:!0,fn:function(t){var e=t.offsets,a=e.popper,i=e.reference,o=t.placement.split('-')[0],r=Wt,p=-1!==['top','bottom'].indexOf(o),n=p?'right':'bottom',s=p?'left':'top',l=p?'width':'height';return a[n]<r(i[s])&&(t.offsets.popper[s]=r(i[s])-a[l]),a[s]>r(i[n])&&(t.offsets.popper[s]=r(i[n])),t}},arrow:{order:500,enabled:!0,fn:function(t,e){var a;if(!it(t.instance.modifiers,'arrow','keepTogether'))return t;var i=e.element;if('string'==typeof i){if(i=t.instance.popper.querySelector(i),!i)return t;}else if(!t.instance.popper.contains(i))return console.warn('WARNING: `arrow.element` must be child of its popper element!'),t;var o=t.placement.split('-')[0],r=t.offsets,p=r.popper,n=r.reference,s=-1!==['left','right'].indexOf(o),l=s?'height':'width',d=s?'Top':'Left',c=d.toLowerCase(),m=s?'left':'top',f=s?'bottom':'right',h=N(i)[l];n[f]-h<p[c]&&(t.offsets.popper[c]-=p[c]-(n[f]-h)),n[c]+h>p[f]&&(t.offsets.popper[c]+=n[c]+h-p[f]),t.offsets.popper=C(t.offsets.popper);var u=n[c]+n[l]/2-h/2,y=b(t.instance.popper),g=parseFloat(y['margin'+d],10),w=parseFloat(y['border'+d+'Width'],10),x=u-t.offsets.popper[c]-g-w;return x=Bt(Nt(p[l]-h,x),0),t.arrowElement=i,t.offsets.arrow=(a={},pe(a,c,Mt(x)),pe(a,m,''),a),t},element:'[x-arrow]'},flip:{order:600,enabled:!0,fn:function(t,e){if(q(t.instance.modifiers,'inner'))return t;if(t.flipped&&t.placement===t.originalPlacement)return t;var a=I(t.instance.popper,t.instance.reference,e.padding,e.boundariesElement,t.positionFixed),i=t.placement.split('-')[0],o=M(i),r=t.placement.split('-')[1]||'',p=[];switch(e.behavior){case de.FLIP:p=[i,o];break;case de.CLOCKWISE:p=rt(i);break;case de.COUNTERCLOCKWISE:p=rt(i,!0);break;default:p=e.behavior;}return p.forEach(function(n,s){if(i!==n||p.length===s+1)return t;i=t.placement.split('-')[0],o=M(i);var l=t.offsets.popper,d=t.offsets.reference,c=Wt,m='left'===i&&c(l.right)>c(d.left)||'right'===i&&c(l.left)<c(d.right)||'top'===i&&c(l.bottom)>c(d.top)||'bottom'===i&&c(l.top)<c(d.bottom),f=c(l.left)<c(a.left),h=c(l.right)>c(a.right),b=c(l.top)<c(a.top),u=c(l.bottom)>c(a.bottom),y='left'===i&&f||'right'===i&&h||'top'===i&&b||'bottom'===i&&u,g=-1!==['top','bottom'].indexOf(i),w=!!e.flipVariations&&(g&&'start'===r&&f||g&&'end'===r&&h||!g&&'start'===r&&b||!g&&'end'===r&&u);(m||y||w)&&(t.flipped=!0,(m||y)&&(i=p[s+1]),w&&(r=ot(r)),t.placement=i+(r?'-'+r:''),t.offsets.popper=ne({},t.offsets.popper,W(t.instance.popper,t.offsets.reference,t.placement)),t=z(t.instance.modifiers,t,'flip'))}),t},behavior:'flip',padding:5,boundariesElement:'viewport'},inner:{order:700,enabled:!1,fn:function(t){var e=t.placement,a=e.split('-')[0],i=t.offsets,o=i.popper,r=i.reference,p=-1!==['left','right'].indexOf(a),n=-1===['top','left'].indexOf(a);return o[p?'left':'top']=r[a]-(n?o[p?'width':'height']:0),t.placement=M(e),t.offsets.popper=C(o),t}},hide:{order:800,enabled:!0,fn:function(t){if(!it(t.instance.modifiers,'hide','preventOverflow'))return t;var e=t.offsets.reference,a=B(t.instance.modifiers,function(t){return'preventOverflow'===t.name}).boundaries;if(e.bottom<a.top||e.left>a.right||e.top>a.bottom||e.right<a.left){if(!0===t.hide)return t;t.hide=!0,t.attributes['x-out-of-boundaries']=''}else{if(!1===t.hide)return t;t.hide=!1,t.attributes['x-out-of-boundaries']=!1}return t}},computeStyle:{order:850,enabled:!0,fn:function(t,e){var a=e.x,i=e.y,o=t.offsets.popper,r=B(t.instance.modifiers,function(t){return'applyStyle'===t.name}).gpuAcceleration;void 0!==r&&console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');var p=void 0===r?e.gpuAcceleration:r,n=w(t.instance.popper),s=S(n),l={position:o.position},d={left:Wt(o.left),top:Mt(o.top),bottom:Mt(o.bottom),right:Wt(o.right)},c='bottom'===a?'top':'bottom',m='right'===i?'left':'right',f=j('transform'),h=void 0,b=void 0;if(b='bottom'==c?'HTML'===n.nodeName?-n.clientHeight+d.bottom:-s.height+d.bottom:d.top,h='right'==m?'HTML'===n.nodeName?-n.clientWidth+d.right:-s.width+d.right:d.left,p&&f)l[f]='translate3d('+h+'px, '+b+'px, 0)',l[c]=0,l[m]=0,l.willChange='transform';else{var u='bottom'==c?-1:1,y='right'==m?-1:1;l[c]=b*u,l[m]=h*y,l.willChange=c+', '+m}var g={"x-placement":t.placement};return t.attributes=ne({},g,t.attributes),t.styles=ne({},l,t.styles),t.arrowStyles=ne({},t.offsets.arrow,t.arrowStyles),t},gpuAcceleration:!0,x:'bottom',y:'right'},applyStyle:{order:900,enabled:!0,fn:function(t){return et(t.instance.popper,t.styles),at(t.instance.popper,t.attributes),t.arrowElement&&Object.keys(t.arrowStyles).length&&et(t.arrowElement,t.arrowStyles),t},onLoad:function(t,e,a,i,o){var r=_(o,e,t,a.positionFixed),p=H(a.placement,r,e,t,a.modifiers.flip.boundariesElement,a.modifiers.flip.padding);return e.setAttribute('x-placement',p),et(e,{position:a.positionFixed?'fixed':'absolute'}),a},gpuAcceleration:void 0}}};var me={};if(Ut){var fe=Element.prototype;me=fe.matches||fe.matchesSelector||fe.webkitMatchesSelector||fe.mozMatchesSelector||fe.msMatchesSelector||function(t){for(var e=(this.document||this.ownerDocument).querySelectorAll(t),a=e.length;0<=--a&&e.item(a)!==this;);return-1<a}}var e=me,he={},be=function(t){return function(e){return e===he&&t}},ue=function(){function t(e){for(var a in Vt(this,t),e)this[a]=e[a];this.state={destroyed:!1,visible:!1,enabled:!0},this._=be({mutationObservers:[]})}return Gt(t,[{key:'enable',value:function(){this.state.enabled=!0}},{key:'disable',value:function(){this.state.enabled=!1}},{key:'show',value:function(t){var e=this;if(!this.state.destroyed&&this.state.enabled){var a=this.popper,i=this.reference,o=this.options,r=m(a),n=r.tooltip,s=r.backdrop,l=r.content;return o.dynamicTitle&&!i.getAttribute('data-original-title')||i.hasAttribute('disabled')?void 0:i.refObj||document.documentElement.contains(i)?void(o.onShow.call(a,this),t=gt(void 0===t?o.duration:t,0),xt([a,n,s],0),a.style.visibility='visible',this.state.visible=!0,Ct.call(this,function(){if(e.state.visible){if(kt.call(e)||e.popperInstance.scheduleUpdate(),kt.call(e)){e.popperInstance.disableEventListeners();var r=gt(o.delay,0),d=e._(he).lastTriggerEvent;d&&e._(he).followCursorListener(r&&e._(he).lastMouseMoveEvent?e._(he).lastMouseMoveEvent:d)}xt([n,s,s?l:null],t),s&&getComputedStyle(s)[p('transform')],o.interactive&&i.classList.add('tippy-active'),o.sticky&&Pt.call(e),wt([n,s],'visible'),Dt.call(e,t,function(){o.updateDuration||n.classList.add('tippy-notransition'),o.interactive&&vt(a),i.setAttribute('aria-describedby','tippy-'+e.id),o.onShown.call(a,e)})}})):void this.destroy()}}},{key:'hide',value:function(t){var e=this;if(!this.state.destroyed&&this.state.enabled){var a=this.popper,i=this.reference,o=this.options,r=m(a),p=r.tooltip,n=r.backdrop,s=r.content;o.onHide.call(a,this),t=gt(void 0===t?o.duration:t,1),o.updateDuration||p.classList.remove('tippy-notransition'),o.interactive&&i.classList.remove('tippy-active'),a.style.visibility='hidden',this.state.visible=!1,xt([p,n,n?s:null],t),wt([p,n],'hidden'),o.interactive&&-1<o.trigger.indexOf('click')&&vt(i),Dt.call(this,t,function(){e.state.visible||!o.appendTo.contains(a)||(!e._(he).isPreparingToShow&&(document.removeEventListener('mousemove',e._(he).followCursorListener),e._(he).lastMouseMoveEvent=null),e.popperInstance&&e.popperInstance.disableEventListeners(),i.removeAttribute('aria-describedby'),o.appendTo.removeChild(a),o.onHidden.call(a,e))})}}},{key:'destroy',value:function(){var t=this,e=!(0<arguments.length&&void 0!==arguments[0])||arguments[0];if(!this.state.destroyed){this.state.visible&&this.hide(0),this.listeners.forEach(function(e){t.reference.removeEventListener(e.event,e.handler)}),this.title&&this.reference.setAttribute('title',this.title),delete this.reference._tippy;['data-original-title','data-tippy','data-tippy-delegate'].forEach(function(e){t.reference.removeAttribute(e)}),this.options.target&&e&&a(this.reference.querySelectorAll(this.options.target)).forEach(function(t){return t._tippy&&t._tippy.destroy()}),this.popperInstance&&this.popperInstance.destroy(),this._(he).mutationObservers.forEach(function(t){t.disconnect()}),this.state.destroyed=!0}}}]),t}(),ye=1,ge=!1,we=!1;return _t.version='2.6.0',_t.browser=Ft,_t.defaults=jt,_t.one=function(t,e){return _t(t,e,!0).tooltips[0]},_t.disableAnimations=function(){jt.updateDuration=jt.duration=0,jt.animateFill=!1},_t.useCapture=function(){we=!0},function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:'';if(Ut&&Ft.supported){var e=document.head||document.querySelector('head'),a=document.createElement('style');a.type='text/css',e.insertBefore(a,e.firstChild),a.styleSheet?a.styleSheet.cssText=t:a.appendChild(document.createTextNode(t))}}('.tippy-touch{cursor:pointer!important}.tippy-notransition{transition:none!important}.tippy-popper{max-width:350px;-webkit-perspective:700px;perspective:700px;z-index:9999;outline:0;transition-timing-function:cubic-bezier(.165,.84,.44,1);pointer-events:none;line-height:1.4}.tippy-popper[data-html]{max-width:96%;max-width:calc(100% - 20px)}.tippy-popper[x-placement^=top] .tippy-backdrop{border-radius:40% 40% 0 0}.tippy-popper[x-placement^=top] .tippy-roundarrow{bottom:-8px;-webkit-transform-origin:50% 0;transform-origin:50% 0}.tippy-popper[x-placement^=top] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(180deg);transform:rotate(180deg)}.tippy-popper[x-placement^=top] .tippy-arrow{border-top:7px solid #333;border-right:7px solid transparent;border-left:7px solid transparent;bottom:-7px;margin:0 6px;-webkit-transform-origin:50% 0;transform-origin:50% 0}.tippy-popper[x-placement^=top] .tippy-backdrop{-webkit-transform-origin:0 90%;transform-origin:0 90%}.tippy-popper[x-placement^=top] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(6) translate(-50%,25%);transform:scale(6) translate(-50%,25%);opacity:1}.tippy-popper[x-placement^=top] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(1) translate(-50%,25%);transform:scale(1) translate(-50%,25%);opacity:0}.tippy-popper[x-placement^=top] [data-animation=shift-toward][data-state=visible]{opacity:1;-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateY(-20px);transform:translateY(-20px)}.tippy-popper[x-placement^=top] [data-animation=perspective]{-webkit-transform-origin:bottom;transform-origin:bottom}.tippy-popper[x-placement^=top] [data-animation=perspective][data-state=visible]{opacity:1;-webkit-transform:translateY(-10px) rotateX(0);transform:translateY(-10px) rotateX(0)}.tippy-popper[x-placement^=top] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:translateY(0) rotateX(90deg);transform:translateY(0) rotateX(90deg)}.tippy-popper[x-placement^=top] [data-animation=fade][data-state=visible]{opacity:1;-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=shift-away][data-state=visible]{opacity:1;-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=shift-away][data-state=hidden]{opacity:0;-webkit-transform:translateY(0);transform:translateY(0)}.tippy-popper[x-placement^=top] [data-animation=scale][data-state=visible]{opacity:1;-webkit-transform:translateY(-10px) scale(1);transform:translateY(-10px) scale(1)}.tippy-popper[x-placement^=top] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateY(0) scale(0);transform:translateY(0) scale(0)}.tippy-popper[x-placement^=bottom] .tippy-backdrop{border-radius:0 0 30% 30%}.tippy-popper[x-placement^=bottom] .tippy-roundarrow{top:-8px;-webkit-transform-origin:50% 100%;transform-origin:50% 100%}.tippy-popper[x-placement^=bottom] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(0);transform:rotate(0)}.tippy-popper[x-placement^=bottom] .tippy-arrow{border-bottom:7px solid #333;border-right:7px solid transparent;border-left:7px solid transparent;top:-7px;margin:0 6px;-webkit-transform-origin:50% 100%;transform-origin:50% 100%}.tippy-popper[x-placement^=bottom] .tippy-backdrop{-webkit-transform-origin:0 -90%;transform-origin:0 -90%}.tippy-popper[x-placement^=bottom] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(6) translate(-50%,-125%);transform:scale(6) translate(-50%,-125%);opacity:1}.tippy-popper[x-placement^=bottom] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(1) translate(-50%,-125%);transform:scale(1) translate(-50%,-125%);opacity:0}.tippy-popper[x-placement^=bottom] [data-animation=shift-toward][data-state=visible]{opacity:1;-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateY(20px);transform:translateY(20px)}.tippy-popper[x-placement^=bottom] [data-animation=perspective]{-webkit-transform-origin:top;transform-origin:top}.tippy-popper[x-placement^=bottom] [data-animation=perspective][data-state=visible]{opacity:1;-webkit-transform:translateY(10px) rotateX(0);transform:translateY(10px) rotateX(0)}.tippy-popper[x-placement^=bottom] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:translateY(0) rotateX(-90deg);transform:translateY(0) rotateX(-90deg)}.tippy-popper[x-placement^=bottom] [data-animation=fade][data-state=visible]{opacity:1;-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=shift-away][data-state=visible]{opacity:1;-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=shift-away][data-state=hidden]{opacity:0;-webkit-transform:translateY(0);transform:translateY(0)}.tippy-popper[x-placement^=bottom] [data-animation=scale][data-state=visible]{opacity:1;-webkit-transform:translateY(10px) scale(1);transform:translateY(10px) scale(1)}.tippy-popper[x-placement^=bottom] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateY(0) scale(0);transform:translateY(0) scale(0)}.tippy-popper[x-placement^=left] .tippy-backdrop{border-radius:50% 0 0 50%}.tippy-popper[x-placement^=left] .tippy-roundarrow{right:-16px;-webkit-transform-origin:33.33333333% 50%;transform-origin:33.33333333% 50%}.tippy-popper[x-placement^=left] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(90deg);transform:rotate(90deg)}.tippy-popper[x-placement^=left] .tippy-arrow{border-left:7px solid #333;border-top:7px solid transparent;border-bottom:7px solid transparent;right:-7px;margin:3px 0;-webkit-transform-origin:0 50%;transform-origin:0 50%}.tippy-popper[x-placement^=left] .tippy-backdrop{-webkit-transform-origin:100% 0;transform-origin:100% 0}.tippy-popper[x-placement^=left] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(6) translate(40%,-50%);transform:scale(6) translate(40%,-50%);opacity:1}.tippy-popper[x-placement^=left] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(1.5) translate(40%,-50%);transform:scale(1.5) translate(40%,-50%);opacity:0}.tippy-popper[x-placement^=left] [data-animation=shift-toward][data-state=visible]{opacity:1;-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateX(-20px);transform:translateX(-20px)}.tippy-popper[x-placement^=left] [data-animation=perspective]{-webkit-transform-origin:right;transform-origin:right}.tippy-popper[x-placement^=left] [data-animation=perspective][data-state=visible]{opacity:1;-webkit-transform:translateX(-10px) rotateY(0);transform:translateX(-10px) rotateY(0)}.tippy-popper[x-placement^=left] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:translateX(0) rotateY(-90deg);transform:translateX(0) rotateY(-90deg)}.tippy-popper[x-placement^=left] [data-animation=fade][data-state=visible]{opacity:1;-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=shift-away][data-state=visible]{opacity:1;-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=shift-away][data-state=hidden]{opacity:0;-webkit-transform:translateX(0);transform:translateX(0)}.tippy-popper[x-placement^=left] [data-animation=scale][data-state=visible]{opacity:1;-webkit-transform:translateX(-10px) scale(1);transform:translateX(-10px) scale(1)}.tippy-popper[x-placement^=left] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateX(0) scale(0);transform:translateX(0) scale(0)}.tippy-popper[x-placement^=right] .tippy-backdrop{border-radius:0 50% 50% 0}.tippy-popper[x-placement^=right] .tippy-roundarrow{left:-16px;-webkit-transform-origin:66.66666666% 50%;transform-origin:66.66666666% 50%}.tippy-popper[x-placement^=right] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.tippy-popper[x-placement^=right] .tippy-arrow{border-right:7px solid #333;border-top:7px solid transparent;border-bottom:7px solid transparent;left:-7px;margin:3px 0;-webkit-transform-origin:100% 50%;transform-origin:100% 50%}.tippy-popper[x-placement^=right] .tippy-backdrop{-webkit-transform-origin:-100% 0;transform-origin:-100% 0}.tippy-popper[x-placement^=right] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(6) translate(-140%,-50%);transform:scale(6) translate(-140%,-50%);opacity:1}.tippy-popper[x-placement^=right] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(1.5) translate(-140%,-50%);transform:scale(1.5) translate(-140%,-50%);opacity:0}.tippy-popper[x-placement^=right] [data-animation=shift-toward][data-state=visible]{opacity:1;-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateX(20px);transform:translateX(20px)}.tippy-popper[x-placement^=right] [data-animation=perspective]{-webkit-transform-origin:left;transform-origin:left}.tippy-popper[x-placement^=right] [data-animation=perspective][data-state=visible]{opacity:1;-webkit-transform:translateX(10px) rotateY(0);transform:translateX(10px) rotateY(0)}.tippy-popper[x-placement^=right] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:translateX(0) rotateY(90deg);transform:translateX(0) rotateY(90deg)}.tippy-popper[x-placement^=right] [data-animation=fade][data-state=visible]{opacity:1;-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=shift-away][data-state=visible]{opacity:1;-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=shift-away][data-state=hidden]{opacity:0;-webkit-transform:translateX(0);transform:translateX(0)}.tippy-popper[x-placement^=right] [data-animation=scale][data-state=visible]{opacity:1;-webkit-transform:translateX(10px) scale(1);transform:translateX(10px) scale(1)}.tippy-popper[x-placement^=right] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateX(0) scale(0);transform:translateX(0) scale(0)}.tippy-tooltip{position:relative;color:#fff;border-radius:4px;font-size:.9rem;padding:.3rem .6rem;text-align:center;will-change:transform;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;background-color:#333}.tippy-tooltip[data-size=small]{padding:.2rem .4rem;font-size:.75rem}.tippy-tooltip[data-size=large]{padding:.4rem .8rem;font-size:1rem}.tippy-tooltip[data-animatefill]{overflow:hidden;background-color:transparent}.tippy-tooltip[data-animatefill] .tippy-content{transition:-webkit-clip-path cubic-bezier(.46,.1,.52,.98);transition:clip-path cubic-bezier(.46,.1,.52,.98);transition:clip-path cubic-bezier(.46,.1,.52,.98),-webkit-clip-path cubic-bezier(.46,.1,.52,.98)}.tippy-tooltip[data-interactive],.tippy-tooltip[data-interactive] path{pointer-events:auto}.tippy-tooltip[data-inertia][data-state=visible]{transition-timing-function:cubic-bezier(.53,2,.36,.85)}.tippy-tooltip[data-inertia][data-state=hidden]{transition-timing-function:ease}.tippy-arrow,.tippy-roundarrow{position:absolute;width:0;height:0}.tippy-roundarrow{width:24px;height:8px;fill:#333;pointer-events:none}.tippy-backdrop{position:absolute;will-change:transform;background-color:#333;border-radius:50%;width:26%;left:50%;top:50%;z-index:-1;transition:all cubic-bezier(.46,.1,.52,.98);-webkit-backface-visibility:hidden;backface-visibility:hidden}.tippy-backdrop:after{content:"";float:left;padding-top:100%}body:not(.tippy-touch) .tippy-tooltip[data-animatefill][data-state=visible] .tippy-content{-webkit-clip-path:ellipse(100% 100% at 50% 50%);clip-path:ellipse(100% 100% at 50% 50%)}body:not(.tippy-touch) .tippy-tooltip[data-animatefill][data-state=hidden] .tippy-content{-webkit-clip-path:ellipse(5% 50% at 50% 50%);clip-path:ellipse(5% 50% at 50% 50%)}body:not(.tippy-touch) .tippy-popper[x-placement=right] .tippy-tooltip[data-animatefill][data-state=visible] .tippy-content{-webkit-clip-path:ellipse(135% 100% at 0 50%);clip-path:ellipse(135% 100% at 0 50%)}body:not(.tippy-touch) .tippy-popper[x-placement=right] .tippy-tooltip[data-animatefill][data-state=hidden] .tippy-content{-webkit-clip-path:ellipse(40% 100% at 0 50%);clip-path:ellipse(40% 100% at 0 50%)}body:not(.tippy-touch) .tippy-popper[x-placement=left] .tippy-tooltip[data-animatefill][data-state=visible] .tippy-content{-webkit-clip-path:ellipse(135% 100% at 100% 50%);clip-path:ellipse(135% 100% at 100% 50%)}body:not(.tippy-touch) .tippy-popper[x-placement=left] .tippy-tooltip[data-animatefill][data-state=hidden] .tippy-content{-webkit-clip-path:ellipse(40% 100% at 100% 50%);clip-path:ellipse(40% 100% at 100% 50%)}@media (max-width:360px){.tippy-popper{max-width:96%;max-width:calc(100% - 20px)}}'),_t});

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Sweetalert2=t()}(this,function(){"use strict";function V(e){return(V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e,t,n){return(l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()?Reflect.construct:function(e,t,n){var o=[null];o.push.apply(o,t);var i=new(Function.bind.apply(e,o));return n&&u(i,n.prototype),i}).apply(null,arguments)}function d(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e,t,n){return(p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=c(e)););return e}(e,t);if(o){var i=Object.getOwnPropertyDescriptor(o,t);return i.get?i.get.call(n):i.value}})(e,t,n||e)}var t="SweetAlert2:",f=function(e){return Array.prototype.slice.call(e)},q=function(e){console.warn("".concat(t," ").concat(e))},R=function(e){console.error("".concat(t," ").concat(e))},n=[],m=function(e){-1===n.indexOf(e)&&(n.push(e),q(e))},I=function(e){return"function"==typeof e?e():e},H=function(e){return e&&"object"===V(e)&&"function"==typeof e.then},e=Object.freeze({cancel:"cancel",backdrop:"overlay",close:"close",esc:"esc",timer:"timer"}),h=function(e){var t={};for(var n in e)t[e[n]]="swal2-"+e[n];return t},D=h(["container","shown","height-auto","iosfix","popup","modal","no-backdrop","toast","toast-shown","toast-column","fade","show","hide","noanimation","close","title","header","content","actions","confirm","cancel","footer","icon","icon-text","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","validation-message","progresssteps","activeprogressstep","progresscircle","progressline","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen"]),g=h(["success","warning","info","question","error"]),b={previousBodyPadding:null},v=function(e,t){return e.classList.contains(t)},_=function(e){if(e.focus(),"file"!==e.type){var t=e.value;e.value="",e.value=t}},y=function(e,t,n){e&&t&&("string"==typeof t&&(t=t.split(/\s+/).filter(Boolean)),t.forEach(function(t){e.forEach?e.forEach(function(e){n?e.classList.add(t):e.classList.remove(t)}):n?e.classList.add(t):e.classList.remove(t)}))},N=function(e,t){y(e,t,!0)},z=function(e,t){y(e,t,!1)},W=function(e,t){for(var n=0;n<e.childNodes.length;n++)if(v(e.childNodes[n],t))return e.childNodes[n]},U=function(e){e.style.opacity="",e.style.display=e.id===D.content?"block":"flex"},K=function(e){e.style.opacity="",e.style.display="none"},F=function(e){return e&&(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},w=function(){return document.body.querySelector("."+D.container)},C=function(e){var t=w();return t?t.querySelector("."+e):null},k=function(){return C(D.popup)},x=function(){var e=k();return f(e.querySelectorAll("."+D.icon))},A=function(){return C(D.title)},B=function(){return C(D.content)},S=function(){return C(D.image)},P=function(){return C(D.progresssteps)},O=function(){return C(D["validation-message"])},E=function(){return C(D.confirm)},Z=function(){return C(D.cancel)},Q=function(){return C(D.actions)},Y=function(){return C(D.footer)},$=function(){return C(D.close)},J=function(){var e=f(k().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort(function(e,t){return e=parseInt(e.getAttribute("tabindex")),(t=parseInt(t.getAttribute("tabindex")))<e?1:e<t?-1:0}),t=f(k().querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable], audio[controls], video[controls]')).filter(function(e){return"-1"!==e.getAttribute("tabindex")});return function(e){for(var t=[],n=0;n<e.length;n++)-1===t.indexOf(e[n])&&t.push(e[n]);return t}(e.concat(t)).filter(function(e){return F(e)})},L=function(){return!T()&&!document.body.classList.contains(D["no-backdrop"])},T=function(){return document.body.classList.contains(D["toast-shown"])},M=function(){return"undefined"==typeof window||"undefined"==typeof document},j='\n <div aria-labelledby="'.concat(D.title,'" aria-describedby="').concat(D.content,'" class="').concat(D.popup,'" tabindex="-1">\n   <div class="').concat(D.header,'">\n     <ul class="').concat(D.progresssteps,'"></ul>\n     <div class="').concat(D.icon," ").concat(g.error,'">\n       <span class="swal2-x-mark"><span class="swal2-x-mark-line-left"></span><span class="swal2-x-mark-line-right"></span></span>\n     </div>\n     <div class="').concat(D.icon," ").concat(g.question,'">\n       <span class="').concat(D["icon-text"],'">?</span>\n      </div>\n     <div class="').concat(D.icon," ").concat(g.warning,'">\n       <span class="').concat(D["icon-text"],'">!</span>\n      </div>\n     <div class="').concat(D.icon," ").concat(g.info,'">\n       <span class="').concat(D["icon-text"],'">i</span>\n      </div>\n     <div class="').concat(D.icon," ").concat(g.success,'">\n       <div class="swal2-success-circular-line-left"></div>\n       <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n       <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n       <div class="swal2-success-circular-line-right"></div>\n     </div>\n     <img class="').concat(D.image,'" />\n     <h2 class="').concat(D.title,'" id="').concat(D.title,'"></h2>\n     <button type="button" class="').concat(D.close,'">×</button>\n   </div>\n   <div class="').concat(D.content,'">\n     <div id="').concat(D.content,'"></div>\n     <input class="').concat(D.input,'" />\n     <input type="file" class="').concat(D.file,'" />\n     <div class="').concat(D.range,'">\n       <input type="range" />\n       <output></output>\n     </div>\n     <select class="').concat(D.select,'"></select>\n     <div class="').concat(D.radio,'"></div>\n     <label for="').concat(D.checkbox,'" class="').concat(D.checkbox,'">\n       <input type="checkbox" />\n       <span class="').concat(D.label,'"></span>\n     </label>\n     <textarea class="').concat(D.textarea,'"></textarea>\n     <div class="').concat(D["validation-message"],'" id="').concat(D["validation-message"],'"></div>\n   </div>\n   <div class="').concat(D.actions,'">\n     <button type="button" class="').concat(D.confirm,'">OK</button>\n     <button type="button" class="').concat(D.cancel,'">Cancel</button>\n   </div>\n   <div class="').concat(D.footer,'">\n   </div>\n </div>\n').replace(/(^|\n)\s*/g,""),X=function(e){var t=w();if(t&&(t.parentNode.removeChild(t),z([document.documentElement,document.body],[D["no-backdrop"],D["toast-shown"],D["has-column"]])),!M()){var n=document.createElement("div");n.className=D.container,n.innerHTML=j,("string"==typeof e.target?document.querySelector(e.target):e.target).appendChild(n);var o,i=k(),r=B(),a=W(r,D.input),s=W(r,D.file),c=r.querySelector(".".concat(D.range," input")),u=r.querySelector(".".concat(D.range," output")),l=W(r,D.select),d=r.querySelector(".".concat(D.checkbox," input")),p=W(r,D.textarea);i.setAttribute("role",e.toast?"alert":"dialog"),i.setAttribute("aria-live",e.toast?"polite":"assertive"),e.toast||i.setAttribute("aria-modal","true");var f=function(e){De.isVisible()&&o!==e.target.value&&De.resetValidationMessage(),o=e.target.value};return a.oninput=f,s.onchange=f,l.onchange=f,d.onchange=f,p.oninput=f,c.oninput=function(e){f(e),u.value=c.value},c.onchange=function(e){f(e),c.nextSibling.value=c.value},i}R("SweetAlert2 requires document to initialize")},G=function(e,t){if(!e)return K(t);if("object"===V(e))if(t.innerHTML="",0 in e)for(var n=0;n in e;n++)t.appendChild(e[n].cloneNode(!0));else t.appendChild(e.cloneNode(!0));else e&&(t.innerHTML=e);U(t)},ee=function(){if(M())return!1;var e=document.createElement("div"),t={WebkitAnimation:"webkitAnimationEnd",OAnimation:"oAnimationEnd oanimationend",animation:"animationend"};for(var n in t)if(t.hasOwnProperty(n)&&void 0!==e.style[n])return t[n];return!1}(),te=function(e){var t=Q(),n=E(),o=Z();if(e.showConfirmButton||e.showCancelButton?U(t):K(t),e.showCancelButton?o.style.display="inline-block":K(o),e.showConfirmButton?n.style.removeProperty("display"):K(n),n.innerHTML=e.confirmButtonText,o.innerHTML=e.cancelButtonText,n.setAttribute("aria-label",e.confirmButtonAriaLabel),o.setAttribute("aria-label",e.cancelButtonAriaLabel),n.className=D.confirm,N(n,e.confirmButtonClass),o.className=D.cancel,N(o,e.cancelButtonClass),e.buttonsStyling){N([n,o],D.styled),e.confirmButtonColor&&(n.style.backgroundColor=e.confirmButtonColor),e.cancelButtonColor&&(o.style.backgroundColor=e.cancelButtonColor);var i=window.getComputedStyle(n).getPropertyValue("background-color");n.style.borderLeftColor=i,n.style.borderRightColor=i}else z([n,o],D.styled),n.style.backgroundColor=n.style.borderLeftColor=n.style.borderRightColor="",o.style.backgroundColor=o.style.borderLeftColor=o.style.borderRightColor=""},ne=function(e){var t=B().querySelector("#"+D.content);e.html?G(e.html,t):e.text?(t.textContent=e.text,U(t)):K(t)},oe=function(e){for(var t=x(),n=0;n<t.length;n++)K(t[n]);if(e.type)if(-1!==Object.keys(g).indexOf(e.type)){var o=De.getPopup().querySelector(".".concat(D.icon,".").concat(g[e.type]));U(o),e.animation&&N(o,"swal2-animate-".concat(e.type,"-icon"))}else R('Unknown type! Expected "success", "error", "warning", "info" or "question", got "'.concat(e.type,'"'))},ie=function(e){var t=S();e.imageUrl?(t.setAttribute("src",e.imageUrl),t.setAttribute("alt",e.imageAlt),U(t),e.imageWidth?t.setAttribute("width",e.imageWidth):t.removeAttribute("width"),e.imageHeight?t.setAttribute("height",e.imageHeight):t.removeAttribute("height"),t.className=D.image,e.imageClass&&N(t,e.imageClass)):K(t)},re=function(i){var r=P(),a=parseInt(null===i.currentProgressStep?De.getQueueStep():i.currentProgressStep,10);i.progressSteps&&i.progressSteps.length?(U(r),r.innerHTML="",a>=i.progressSteps.length&&q("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),i.progressSteps.forEach(function(e,t){var n=document.createElement("li");if(N(n,D.progresscircle),n.innerHTML=e,t===a&&N(n,D.activeprogressstep),r.appendChild(n),t!==i.progressSteps.length-1){var o=document.createElement("li");N(o,D.progressline),i.progressStepsDistance&&(o.style.width=i.progressStepsDistance),r.appendChild(o)}})):K(r)},ae=function(e){var t=A();e.titleText?t.innerText=e.titleText:e.title&&("string"==typeof e.title&&(e.title=e.title.split("\n").join("<br />")),G(e.title,t))},se=function(){null===b.previousBodyPadding&&document.body.scrollHeight>window.innerHeight&&(b.previousBodyPadding=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=b.previousBodyPadding+function(){if("ontouchstart"in window||navigator.msMaxTouchPoints)return 0;var e=document.createElement("div");e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}()+"px")},ce=function(){return!!window.MSInputMethodContext&&!!document.documentMode},ue=function(){var e=w(),t=k();e.style.removeProperty("align-items"),t.offsetTop<0&&(e.style.alignItems="flex-start")},le={},de=function(e,t){var n=w(),o=k();if(o){null!==e&&"function"==typeof e&&e(o),z(o,D.show),N(o,D.hide);var i=function(){T()?pe(t):(new Promise(function(e){var t=window.scrollX,n=window.scrollY;le.restoreFocusTimeout=setTimeout(function(){le.previousActiveElement&&le.previousActiveElement.focus?(le.previousActiveElement.focus(),le.previousActiveElement=null):document.body&&document.body.focus(),e()},100),void 0!==t&&void 0!==n&&window.scrollTo(t,n)}).then(function(){return pe(t)}),le.keydownTarget.removeEventListener("keydown",le.keydownHandler,{capture:le.keydownListenerCapture}),le.keydownHandlerAdded=!1),n.parentNode&&n.parentNode.removeChild(n),z([document.documentElement,document.body],[D.shown,D["height-auto"],D["no-backdrop"],D["toast-shown"],D["toast-column"]]),L()&&(null!==b.previousBodyPadding&&(document.body.style.paddingRight=b.previousBodyPadding,b.previousBodyPadding=null),function(){if(v(document.body,D.iosfix)){var e=parseInt(document.body.style.top,10);z(document.body,D.iosfix),document.body.style.top="",document.body.scrollTop=-1*e}}(),"undefined"!=typeof window&&ce()&&window.removeEventListener("resize",ue),f(document.body.children).forEach(function(e){e.hasAttribute("data-previous-aria-hidden")?(e.setAttribute("aria-hidden",e.getAttribute("data-previous-aria-hidden")),e.removeAttribute("data-previous-aria-hidden")):e.removeAttribute("aria-hidden")}))};ee&&!v(o,D.noanimation)?o.addEventListener(ee,function e(){o.removeEventListener(ee,e),v(o,D.hide)&&i()}):i()}},pe=function(e){null!==e&&"function"==typeof e&&setTimeout(function(){e()})};function fe(e){var t=function e(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];if(!(this instanceof e))return l(e,n);Object.getPrototypeOf(e).apply(this,n)};return t.prototype=r(Object.create(e.prototype),{constructor:t}),"function"==typeof Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e,t}var me={title:"",titleText:"",text:"",html:"",footer:"",type:null,toast:!1,customClass:"",target:"body",backdrop:!0,animation:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showCancelButton:!1,preConfirm:null,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:null,confirmButtonClass:null,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:null,cancelButtonClass:null,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusCancel:!1,showCloseButton:!1,closeButtonAriaLabel:"Close this dialog",showLoaderOnConfirm:!1,imageUrl:null,imageWidth:null,imageHeight:null,imageAlt:"",imageClass:null,timer:null,width:null,padding:null,background:null,input:null,inputPlaceholder:"",inputValue:"",inputOptions:{},inputAutoTrim:!0,inputClass:null,inputAttributes:{},inputValidator:null,validationMessage:null,grow:!1,position:"center",progressSteps:[],currentProgressStep:null,progressStepsDistance:null,onBeforeOpen:null,onAfterClose:null,onOpen:null,onClose:null,useRejections:!1,expectRejections:!1},he=["useRejections","expectRejections","extraParams"],ge=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusCancel","heightAuto","keydownListenerCapture"],be=function(e){return me.hasOwnProperty(e)||"extraParams"===e},ve=function(e){return-1!==he.indexOf(e)},ye=function(e){for(var t in e)be(t)||q('Unknown parameter "'.concat(t,'"')),e.toast&&-1!==ge.indexOf(t)&&q('The parameter "'.concat(t,'" is incompatible with toasts')),ve(t)&&m('The parameter "'.concat(t,'" is deprecated and will be removed in the next major release.'))},we='"setDefaults" & "resetDefaults" methods are deprecated in favor of "mixin" method and will be removed in the next major release. For new projects, use "mixin". For past projects already using "setDefaults", support will be provided through an additional package.',Ce={};var ke=[],xe=function(){var e=k();e||De(""),e=k();var t=Q(),n=E(),o=Z();U(t),U(n),N([e,t],D.loading),n.disabled=!0,o.disabled=!0,e.setAttribute("data-loading",!0),e.setAttribute("aria-busy",!0),e.focus()},Ae=Object.freeze({isValidParameter:be,isDeprecatedParameter:ve,argsToParams:function(n){var o={};switch(V(n[0])){case"object":r(o,n[0]);break;default:["title","html","type"].forEach(function(e,t){switch(V(n[t])){case"string":o[e]=n[t];break;case"undefined":break;default:R("Unexpected type of ".concat(e,'! Expected "string", got ').concat(V(n[t])))}})}return o},adaptInputValidator:function(n){return function(e,t){return n.call(this,e,t).then(function(){},function(e){return e})}},close:de,closePopup:de,closeModal:de,closeToast:de,isVisible:function(){return!!k()},clickConfirm:function(){return E().click()},clickCancel:function(){return Z().click()},getContainer:w,getPopup:k,getTitle:A,getContent:B,getImage:S,getIcons:x,getCloseButton:$,getButtonsWrapper:function(){return m("swal.getButtonsWrapper() is deprecated and will be removed in the next major release, use swal.getActions() instead"),C(D.actions)},getActions:Q,getConfirmButton:E,getCancelButton:Z,getFooter:Y,getFocusableElements:J,getValidationMessage:O,isLoading:function(){return k().hasAttribute("data-loading")},fire:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return l(this,t)},mixin:function(n){return fe(function(e){function t(){return s(this,t),d(this,c(t).apply(this,arguments))}return a(t,e),i(t,[{key:"_main",value:function(e){return p(c(t.prototype),"_main",this).call(this,r({},n,e))}}]),t}(this))},queue:function(e){var r=this;ke=e;var a=function(){ke=[],document.body.removeAttribute("data-swal2-queue-step")},s=[];return new Promise(function(i){!function t(n,o){n<ke.length?(document.body.setAttribute("data-swal2-queue-step",n),r(ke[n]).then(function(e){void 0!==e.value?(s.push(e.value),t(n+1,o)):(a(),i({dismiss:e.dismiss}))})):(a(),i({value:s}))}(0)})},getQueueStep:function(){return document.body.getAttribute("data-swal2-queue-step")},insertQueueStep:function(e,t){return t&&t<ke.length?ke.splice(t,0,e):ke.push(e)},deleteQueueStep:function(e){void 0!==ke[e]&&ke.splice(e,1)},showLoading:xe,enableLoading:xe,getTimerLeft:function(){return le.timeout&&le.timeout.getTimerLeft()}}),Be="function"==typeof Symbol?Symbol:function(){var t=0;function e(e){return"__"+e+"_"+Math.floor(1e9*Math.random())+"_"+ ++t+"__"}return e.iterator=e("Symbol.iterator"),e}(),Se="function"==typeof WeakMap?WeakMap:function(n,o,t){function e(){o(this,n,{value:Be("WeakMap")})}return e.prototype={delete:function(e){delete e[this[n]]},get:function(e){return e[this[n]]},has:function(e){return t.call(e,this[n])},set:function(e,t){o(e,this[n],{configurable:!0,value:t})}},e}(Be("WeakMap"),Object.defineProperty,{}.hasOwnProperty),Pe={promise:new Se,innerParams:new Se,domCache:new Se};function Oe(){var e=Pe.innerParams.get(this),t=Pe.domCache.get(this);e.showConfirmButton||(K(t.confirmButton),e.showCancelButton||K(t.actions)),z([t.popup,t.actions],D.loading),t.popup.removeAttribute("aria-busy"),t.popup.removeAttribute("data-loading"),t.confirmButton.disabled=!1,t.cancelButton.disabled=!1}function Ee(e){var t=Pe.domCache.get(this);t.validationMessage.innerHTML=e;var n=window.getComputedStyle(t.popup);t.validationMessage.style.marginLeft="-".concat(n.getPropertyValue("padding-left")),t.validationMessage.style.marginRight="-".concat(n.getPropertyValue("padding-right")),U(t.validationMessage);var o=this.getInput();o&&(o.setAttribute("aria-invalid",!0),o.setAttribute("aria-describedBy",D["validation-message"]),_(o),N(o,D.inputerror))}function Le(){var e=Pe.domCache.get(this);e.validationMessage&&K(e.validationMessage);var t=this.getInput();t&&(t.removeAttribute("aria-invalid"),t.removeAttribute("aria-describedBy"),z(t,D.inputerror))}var Te=function e(t,n){var o,i,r;s(this,e);var a=n;this.start=function(){r=!0,i=new Date,o=setTimeout(t,a)},this.stop=function(){r=!1,clearTimeout(o),a-=new Date-i},this.getTimerLeft=function(){return r&&(this.stop(),this.start()),a},this.start()},Me={email:function(e,t){return/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(e)?Promise.resolve():Promise.reject(t&&t.validationMessage?t.validationMessage:"Invalid email address")},url:function(e,t){return/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/.test(e)?Promise.resolve():Promise.reject(t&&t.validationMessage?t.validationMessage:"Invalid URL")}};var je=function(e){var t=w(),n=k();null!==e.onBeforeOpen&&"function"==typeof e.onBeforeOpen&&e.onBeforeOpen(n),e.animation?(N(n,D.show),N(t,D.fade),z(n,D.hide)):z(n,D.fade),U(n),t.style.overflowY="hidden",ee&&!v(n,D.noanimation)?n.addEventListener(ee,function e(){n.removeEventListener(ee,e),t.style.overflowY="auto"}):t.style.overflowY="auto",N([document.documentElement,document.body,t],D.shown),e.heightAuto&&e.backdrop&&!e.toast&&N([document.documentElement,document.body],D["height-auto"]),L()&&(se(),function(){if(/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&!v(document.body,D.iosfix)){var e=document.body.scrollTop;document.body.style.top=-1*e+"px",N(document.body,D.iosfix)}}(),"undefined"!=typeof window&&ce()&&(ue(),window.addEventListener("resize",ue)),f(document.body.children).forEach(function(e){e===w()||e.contains(w())||(e.hasAttribute("aria-hidden")&&e.setAttribute("data-previous-aria-hidden",e.getAttribute("aria-hidden")),e.setAttribute("aria-hidden","true"))}),setTimeout(function(){t.scrollTop=0})),T()||le.previousActiveElement||(le.previousActiveElement=document.activeElement),null!==e.onOpen&&"function"==typeof e.onOpen&&setTimeout(function(){e.onOpen(n)})};var Ve,qe=Object.freeze({hideLoading:Oe,disableLoading:Oe,getInput:function(e){var t=Pe.innerParams.get(this),n=Pe.domCache.get(this);if(!(e=e||t.input))return null;switch(e){case"select":case"textarea":case"file":return W(n.content,D[e]);case"checkbox":return n.popup.querySelector(".".concat(D.checkbox," input"));case"radio":return n.popup.querySelector(".".concat(D.radio," input:checked"))||n.popup.querySelector(".".concat(D.radio," input:first-child"));case"range":return n.popup.querySelector(".".concat(D.range," input"));default:return W(n.content,D.input)}},enableButtons:function(){var e=Pe.domCache.get(this);e.confirmButton.disabled=!1,e.cancelButton.disabled=!1},disableButtons:function(){var e=Pe.domCache.get(this);e.confirmButton.disabled=!0,e.cancelButton.disabled=!0},enableConfirmButton:function(){Pe.domCache.get(this).confirmButton.disabled=!1},disableConfirmButton:function(){Pe.domCache.get(this).confirmButton.disabled=!0},enableInput:function(){var e=this.getInput();if(!e)return!1;if("radio"===e.type)for(var t=e.parentNode.parentNode.querySelectorAll("input"),n=0;n<t.length;n++)t[n].disabled=!1;else e.disabled=!1},disableInput:function(){var e=this.getInput();if(!e)return!1;if(e&&"radio"===e.type)for(var t=e.parentNode.parentNode.querySelectorAll("input"),n=0;n<t.length;n++)t[n].disabled=!0;else e.disabled=!0},showValidationMessage:Ee,resetValidationMessage:Le,resetValidationError:function(){m("Swal.resetValidationError() is deprecated and will be removed in the next major release, use Swal.resetValidationMessage() instead"),Le.bind(this)()},showValidationError:function(e){m("Swal.showValidationError() is deprecated and will be removed in the next major release, use Swal.showValidationMessage() instead"),Ee.bind(this)(e)},getProgressSteps:function(){return Pe.innerParams.get(this).progressSteps},setProgressSteps:function(e){var t=r({},Pe.innerParams.get(this),{progressSteps:e});Pe.innerParams.set(this,t),re(t)},showProgressSteps:function(){var e=Pe.domCache.get(this);U(e.progressSteps)},hideProgressSteps:function(){var e=Pe.domCache.get(this);K(e.progressSteps)},_main:function(e){var L=this;ye(e);var T=r({},me,e);!function(t){var e;t.inputValidator||Object.keys(Me).forEach(function(e){t.input===e&&(t.inputValidator=t.expectRejections?Me[e]:De.adaptInputValidator(Me[e]))}),t.validationMessage&&("object"!==V(t.extraParams)&&(t.extraParams={}),t.extraParams.validationMessage=t.validationMessage),(!t.target||"string"==typeof t.target&&!document.querySelector(t.target)||"string"!=typeof t.target&&!t.target.appendChild)&&(q('Target parameter is not valid, defaulting to "body"'),t.target="body"),"function"==typeof t.animation&&(t.animation=t.animation.call());var n=k(),o="string"==typeof t.target?document.querySelector(t.target):t.target;e=n&&o&&n.parentNode!==o.parentNode?X(t):n||X(t),t.width&&(e.style.width="number"==typeof t.width?t.width+"px":t.width),t.padding&&(e.style.padding="number"==typeof t.padding?t.padding+"px":t.padding),t.background&&(e.style.background=t.background);for(var i=window.getComputedStyle(e).getPropertyValue("background-color"),r=e.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"),a=0;a<r.length;a++)r[a].style.backgroundColor=i;var s=w(),c=$(),u=Y();if(ae(t),ne(t),"string"==typeof t.backdrop?w().style.background=t.backdrop:t.backdrop||N([document.documentElement,document.body],D["no-backdrop"]),!t.backdrop&&t.allowOutsideClick&&q('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'),t.position in D?N(s,D[t.position]):(q('The "position" parameter is not valid, defaulting to "center"'),N(s,D.center)),t.grow&&"string"==typeof t.grow){var l="grow-"+t.grow;l in D&&N(s,D[l])}t.showCloseButton?(c.setAttribute("aria-label",t.closeButtonAriaLabel),U(c)):K(c),e.className=D.popup,t.toast?(N([document.documentElement,document.body],D["toast-shown"]),N(e,D.toast)):N(e,D.modal),t.customClass&&N(e,t.customClass),re(t),oe(t),ie(t),te(t),G(t.footer,u),!0===t.animation?z(e,D.noanimation):N(e,D.noanimation),t.showLoaderOnConfirm&&!t.preConfirm&&q("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request")}(T),Object.freeze(T),Pe.innerParams.set(this,T),le.timeout&&(le.timeout.stop(),delete le.timeout),clearTimeout(le.restoreFocusTimeout);var M={popup:k(),container:w(),content:B(),actions:Q(),confirmButton:E(),cancelButton:Z(),closeButton:$(),validationMessage:O(),progressSteps:P()};Pe.domCache.set(this,M);var j=this.constructor;return new Promise(function(t,n){var o=function(e){j.closePopup(T.onClose,T.onAfterClose),T.useRejections?t(e):t({value:e})},c=function(e){j.closePopup(T.onClose,T.onAfterClose),T.useRejections?n(e):t({dismiss:e})},u=function(e){j.closePopup(T.onClose,T.onAfterClose),n(e)};T.timer&&(le.timeout=new Te(function(){c("timer"),delete le.timeout},T.timer)),T.input&&setTimeout(function(){var e=L.getInput();e&&_(e)},0);for(var l=function(t){if(T.showLoaderOnConfirm&&j.showLoading(),T.preConfirm){L.resetValidationMessage();var e=Promise.resolve().then(function(){return T.preConfirm(t,T.extraParams)});T.expectRejections?e.then(function(e){return o(e||t)},function(e){L.hideLoading(),e&&L.showValidationMessage(e)}):e.then(function(e){F(M.validationMessage)||!1===e?L.hideLoading():o(e||t)},function(e){return u(e)})}else o(t)},e=function(e){var t=e.target,n=M.confirmButton,o=M.cancelButton,i=n&&(n===t||n.contains(t)),r=o&&(o===t||o.contains(t));switch(e.type){case"click":if(i&&j.isVisible())if(L.disableButtons(),T.input){var a=function(){var e=L.getInput();if(!e)return null;switch(T.input){case"checkbox":return e.checked?1:0;case"radio":return e.checked?e.value:null;case"file":return e.files.length?e.files[0]:null;default:return T.inputAutoTrim?e.value.trim():e.value}}();if(T.inputValidator){L.disableInput();var s=Promise.resolve().then(function(){return T.inputValidator(a,T.extraParams)});T.expectRejections?s.then(function(){L.enableButtons(),L.enableInput(),l(a)},function(e){L.enableButtons(),L.enableInput(),e&&L.showValidationMessage(e)}):s.then(function(e){L.enableButtons(),L.enableInput(),e?L.showValidationMessage(e):l(a)},function(e){return u(e)})}else l(a)}else l(!0);else r&&j.isVisible()&&(L.disableButtons(),c(j.DismissReason.cancel))}},i=M.popup.querySelectorAll("button"),r=0;r<i.length;r++)i[r].onclick=e,i[r].onmouseover=e,i[r].onmouseout=e,i[r].onmousedown=e;if(M.closeButton.onclick=function(){c(j.DismissReason.close)},T.toast)M.popup.onclick=function(){T.showConfirmButton||T.showCancelButton||T.showCloseButton||T.input||c(j.DismissReason.close)};else{var a=!1;M.popup.onmousedown=function(){M.container.onmouseup=function(e){M.container.onmouseup=void 0,e.target===M.container&&(a=!0)}},M.container.onmousedown=function(){M.popup.onmouseup=function(e){M.popup.onmouseup=void 0,(e.target===M.popup||M.popup.contains(e.target))&&(a=!0)}},M.container.onclick=function(e){a?a=!1:e.target===M.container&&I(T.allowOutsideClick)&&c(j.DismissReason.backdrop)}}T.reverseButtons?M.confirmButton.parentNode.insertBefore(M.cancelButton,M.confirmButton):M.confirmButton.parentNode.insertBefore(M.confirmButton,M.cancelButton);var s=function(e,t){for(var n=J(T.focusCancel),o=0;o<n.length;o++)return(e+=t)===n.length?e=0:-1===e&&(e=n.length-1),n[e].focus();M.popup.focus()};le.keydownHandlerAdded&&(le.keydownTarget.removeEventListener("keydown",le.keydownHandler,{capture:le.keydownListenerCapture}),le.keydownHandlerAdded=!1),T.toast||(le.keydownHandler=function(e){return function(e,t){if(t.stopKeydownPropagation&&e.stopPropagation(),"Enter"!==e.key||e.isComposing)if("Tab"===e.key){for(var n=e.target,o=J(t.focusCancel),i=-1,r=0;r<o.length;r++)if(n===o[r]){i=r;break}e.shiftKey?s(i,-1):s(i,1),e.stopPropagation(),e.preventDefault()}else-1!==["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Left","Right","Up","Down"].indexOf(e.key)?document.activeElement===M.confirmButton&&F(M.cancelButton)?M.cancelButton.focus():document.activeElement===M.cancelButton&&F(M.confirmButton)&&M.confirmButton.focus():"Escape"!==e.key&&"Esc"!==e.key||!0!==I(t.allowEscapeKey)||(e.preventDefault(),c(j.DismissReason.esc));else if(e.target&&L.getInput()&&e.target.outerHTML===L.getInput().outerHTML){if(-1!==["textarea","file"].indexOf(t.input))return;j.clickConfirm(),e.preventDefault()}}(e,T)},le.keydownTarget=T.keydownListenerCapture?window:M.popup,le.keydownListenerCapture=T.keydownListenerCapture,le.keydownTarget.addEventListener("keydown",le.keydownHandler,{capture:le.keydownListenerCapture}),le.keydownHandlerAdded=!0),L.enableButtons(),L.hideLoading(),L.resetValidationMessage(),T.toast&&(T.input||T.footer||T.showCloseButton)?N(document.body,D["toast-column"]):z(document.body,D["toast-column"]);for(var d,p,f=["input","file","range","select","radio","checkbox","textarea"],m=0;m<f.length;m++){var h=D[f[m]],g=W(M.content,h);if(d=L.getInput(f[m])){for(var b in d.attributes)if(d.attributes.hasOwnProperty(b)){var v=d.attributes[b].name;"type"!==v&&"value"!==v&&d.removeAttribute(v)}for(var y in T.inputAttributes)d.setAttribute(y,T.inputAttributes[y])}g.className=h,T.inputClass&&N(g,T.inputClass),K(g)}switch(T.input){case"text":case"email":case"password":case"number":case"tel":case"url":d=W(M.content,D.input),"string"==typeof T.inputValue||"number"==typeof T.inputValue?d.value=T.inputValue:q('Unexpected type of inputValue! Expected "string" or "number", got "'.concat(V(T.inputValue),'"')),d.placeholder=T.inputPlaceholder,d.type=T.input,U(d);break;case"file":(d=W(M.content,D.file)).placeholder=T.inputPlaceholder,d.type=T.input,U(d);break;case"range":var w=W(M.content,D.range),C=w.querySelector("input"),k=w.querySelector("output");C.value=T.inputValue,C.type=T.input,k.value=T.inputValue,U(w);break;case"select":var x=W(M.content,D.select);if(x.innerHTML="",T.inputPlaceholder){var A=document.createElement("option");A.innerHTML=T.inputPlaceholder,A.value="",A.disabled=!0,A.selected=!0,x.appendChild(A)}p=function(e){e.forEach(function(e){var t=e[0],n=e[1],o=document.createElement("option");o.value=t,o.innerHTML=n,T.inputValue.toString()===t.toString()&&(o.selected=!0),x.appendChild(o)}),U(x),x.focus()};break;case"radio":var B=W(M.content,D.radio);B.innerHTML="",p=function(e){e.forEach(function(e){var t=e[0],n=e[1],o=document.createElement("input"),i=document.createElement("label");o.type="radio",o.name=D.radio,o.value=t,T.inputValue.toString()===t.toString()&&(o.checked=!0);var r=document.createElement("span");r.innerHTML=n,r.className=D.label,i.appendChild(o),i.appendChild(r),B.appendChild(i)}),U(B);var t=B.querySelectorAll("input");t.length&&t[0].focus()};break;case"checkbox":var S=W(M.content,D.checkbox),P=L.getInput("checkbox");P.type="checkbox",P.value=1,P.id=D.checkbox,P.checked=Boolean(T.inputValue),S.querySelector("span").innerHTML=T.inputPlaceholder,U(S);break;case"textarea":var O=W(M.content,D.textarea);O.value=T.inputValue,O.placeholder=T.inputPlaceholder,U(O);break;case null:break;default:R('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(T.input,'"'))}if("select"===T.input||"radio"===T.input){var E=function(e){return p((t=e,n=[],"undefined"!=typeof Map&&t instanceof Map?t.forEach(function(e,t){n.push([t,e])}):Object.keys(t).forEach(function(e){n.push([e,t[e]])}),n));var t,n};H(T.inputOptions)?(j.showLoading(),T.inputOptions.then(function(e){L.hideLoading(),E(e)})):"object"===V(T.inputOptions)?E(T.inputOptions):R("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(V(T.inputOptions)))}else-1!==["text","email","number","tel","textarea"].indexOf(T.input)&&H(T.inputValue)&&(j.showLoading(),K(d),T.inputValue.then(function(e){d.value="number"===T.input?parseFloat(e)||0:e+"",U(d),d.focus(),L.hideLoading()}).catch(function(e){R("Error in inputValue promise: "+e),d.value="",U(d),d.focus(),L.hideLoading()}));je(T),T.toast||(I(T.allowEnterKey)?T.focusCancel&&F(M.cancelButton)?M.cancelButton.focus():T.focusConfirm&&F(M.confirmButton)?M.confirmButton.focus():s(-1,1):document.activeElement&&document.activeElement.blur()),M.container.scrollTop=0})}});function Re(){if("undefined"!=typeof window){"undefined"==typeof Promise&&R("This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)");for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];if(0===t.length)return R("At least 1 argument is expected!"),!1;Ve=this;var o=Object.freeze(this.constructor.argsToParams(t));Object.defineProperties(this,{params:{value:o,writable:!1,enumerable:!0}});var i=this._main(this.params);Pe.promise.set(this,i)}}Re.prototype.then=function(e,t){return Pe.promise.get(this).then(e,t)},Re.prototype.catch=function(e){return Pe.promise.get(this).catch(e)},Re.prototype.finally=function(e){return Pe.promise.get(this).finally(e)},r(Re.prototype,qe),r(Re,Ae),Object.keys(qe).forEach(function(t){Re[t]=function(){var e;if(Ve)return(e=Ve)[t].apply(e,arguments)}}),Re.DismissReason=e,Re.noop=function(){};var Ie,He,De=fe((Ie=Re,He=function(e){function t(){return s(this,t),d(this,c(t).apply(this,arguments))}return a(t,Ie),i(t,[{key:"_main",value:function(e){return p(c(t.prototype),"_main",this).call(this,r({},Ce,e))}}],[{key:"setDefaults",value:function(t){if(m(we),!t||"object"!==V(t))throw new TypeError("SweetAlert2: The argument for setDefaults() is required and has to be a object");ye(t),Object.keys(t).forEach(function(e){Ie.isValidParameter(e)&&(Ce[e]=t[e])})}},{key:"resetDefaults",value:function(){m(we),Ce={}}}]),t}(),"undefined"!=typeof window&&"object"===V(window._swalDefaults)&&He.setDefaults(window._swalDefaults),He));return De.default=De}),"undefined"!=typeof window&&window.Sweetalert2&&(window.Sweetalert2.version="7.28.11",window.swal=window.sweetAlert=window.Swal=window.SweetAlert=window.Sweetalert2);
"undefined"!=typeof document&&function(e,t){var n=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=t);else try{n.innerHTML=t}catch(e){n.innerText=t}}(document,"@-webkit-keyframes swal2-show{0%{-webkit-transform:scale(.7);transform:scale(.7)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes swal2-show{0%{-webkit-transform:scale(.7);transform:scale(.7)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}100%{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.875em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.875em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}100%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}100%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}50%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}80%{margin-top:-.375em;-webkit-transform:scale(1.15);transform:scale(1.15)}100%{margin-top:0;-webkit-transform:scale(1);transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}50%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}80%{margin-top:-.375em;-webkit-transform:scale(1.15);transform:scale(1.15)}100%{margin-top:0;-webkit-transform:scale(1);transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);opacity:1}}body.swal2-toast-shown .swal2-container{position:fixed;background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-shown{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}body.swal2-toast-column .swal2-toast{flex-direction:column;align-items:stretch}body.swal2-toast-column .swal2-toast .swal2-actions{flex:1;align-self:stretch;height:2.2em;margin-top:.3125em}body.swal2-toast-column .swal2-toast .swal2-loading{justify-content:center}body.swal2-toast-column .swal2-toast .swal2-input{height:2em;margin:.3125em auto;font-size:1em}body.swal2-toast-column .swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast{flex-direction:row;align-items:center;width:auto;padding:.625em;box-shadow:0 0 .625em #d9d9d9;overflow-y:hidden}.swal2-popup.swal2-toast .swal2-header{flex-direction:row}.swal2-popup.swal2-toast .swal2-title{flex-grow:1;justify-content:flex-start;margin:0 .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{position:initial;width:.8em;height:.8em;line-height:.8}.swal2-popup.swal2-toast .swal2-content{justify-content:flex-start;font-size:1em}.swal2-popup.swal2-toast .swal2-icon{width:2em;min-width:2em;height:2em;margin:0}.swal2-popup.swal2-toast .swal2-icon-text{font-size:2em;font-weight:700;line-height:1em}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{height:auto;margin:0 .3125em}.swal2-popup.swal2-toast .swal2-styled{margin:0 .3125em;padding:.3125em .625em;font-size:1em}.swal2-popup.swal2-toast .swal2-styled:focus{box-shadow:0 0 0 .0625em #fff,0 0 0 .125em rgba(50,100,150,.4)}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:2em;height:2.8125em;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.25em;left:-.9375em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:2em 2em;transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;-webkit-transform-origin:0 2em;transform-origin:0 2em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:showSweetToast .5s;animation:showSweetToast .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:hideSweetToast .2s forwards;animation:hideSweetToast .2s forwards}.swal2-popup.swal2-toast .swal2-animate-success-icon .swal2-success-line-tip{-webkit-animation:animate-toast-success-tip .75s;animation:animate-toast-success-tip .75s}.swal2-popup.swal2-toast .swal2-animate-success-icon .swal2-success-line-long{-webkit-animation:animate-toast-success-long .75s;animation:animate-toast-success-long .75s}@-webkit-keyframes showSweetToast{0%{-webkit-transform:translateY(-.625em) rotateZ(2deg);transform:translateY(-.625em) rotateZ(2deg);opacity:0}33%{-webkit-transform:translateY(0) rotateZ(-2deg);transform:translateY(0) rotateZ(-2deg);opacity:.5}66%{-webkit-transform:translateY(.3125em) rotateZ(2deg);transform:translateY(.3125em) rotateZ(2deg);opacity:.7}100%{-webkit-transform:translateY(0) rotateZ(0);transform:translateY(0) rotateZ(0);opacity:1}}@keyframes showSweetToast{0%{-webkit-transform:translateY(-.625em) rotateZ(2deg);transform:translateY(-.625em) rotateZ(2deg);opacity:0}33%{-webkit-transform:translateY(0) rotateZ(-2deg);transform:translateY(0) rotateZ(-2deg);opacity:.5}66%{-webkit-transform:translateY(.3125em) rotateZ(2deg);transform:translateY(.3125em) rotateZ(2deg);opacity:.7}100%{-webkit-transform:translateY(0) rotateZ(0);transform:translateY(0) rotateZ(0);opacity:1}}@-webkit-keyframes hideSweetToast{0%{opacity:1}33%{opacity:.5}100%{-webkit-transform:rotateZ(1deg);transform:rotateZ(1deg);opacity:0}}@keyframes hideSweetToast{0%{opacity:1}33%{opacity:.5}100%{-webkit-transform:rotateZ(1deg);transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes animate-toast-success-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes animate-toast-success-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes animate-toast-success-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes animate-toast-success-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-shown{top:auto;right:auto;bottom:auto;left:auto;background-color:transparent}body.swal2-no-backdrop .swal2-shown>.swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}body.swal2-no-backdrop .swal2-shown.swal2-top{top:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-top-left,body.swal2-no-backdrop .swal2-shown.swal2-top-start{top:0;left:0}body.swal2-no-backdrop .swal2-shown.swal2-top-end,body.swal2-no-backdrop .swal2-shown.swal2-top-right{top:0;right:0}body.swal2-no-backdrop .swal2-shown.swal2-center{top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}body.swal2-no-backdrop .swal2-shown.swal2-center-left,body.swal2-no-backdrop .swal2-shown.swal2-center-start{top:50%;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-center-end,body.swal2-no-backdrop .swal2-shown.swal2-center-right{top:50%;right:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-bottom{bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-bottom-left,body.swal2-no-backdrop .swal2-shown.swal2-bottom-start{bottom:0;left:0}body.swal2-no-backdrop .swal2-shown.swal2-bottom-end,body.swal2-no-backdrop .swal2-shown.swal2-bottom-right{right:0;bottom:0}.swal2-container{display:flex;position:fixed;top:0;right:0;bottom:0;left:0;flex-direction:row;align-items:center;justify-content:center;padding:10px;background-color:transparent;z-index:1060;overflow-x:hidden;-webkit-overflow-scrolling:touch}.swal2-container.swal2-top{align-items:flex-start}.swal2-container.swal2-top-left,.swal2-container.swal2-top-start{align-items:flex-start;justify-content:flex-start}.swal2-container.swal2-top-end,.swal2-container.swal2-top-right{align-items:flex-start;justify-content:flex-end}.swal2-container.swal2-center{align-items:center}.swal2-container.swal2-center-left,.swal2-container.swal2-center-start{align-items:center;justify-content:flex-start}.swal2-container.swal2-center-end,.swal2-container.swal2-center-right{align-items:center;justify-content:flex-end}.swal2-container.swal2-bottom{align-items:flex-end}.swal2-container.swal2-bottom-left,.swal2-container.swal2-bottom-start{align-items:flex-end;justify-content:flex-start}.swal2-container.swal2-bottom-end,.swal2-container.swal2-bottom-right{align-items:flex-end;justify-content:flex-end}.swal2-container.swal2-grow-fullscreen>.swal2-modal{display:flex!important;flex:1;align-self:stretch;justify-content:center}.swal2-container.swal2-grow-row>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-grow-column{flex:1;flex-direction:column}.swal2-container.swal2-grow-column.swal2-bottom,.swal2-container.swal2-grow-column.swal2-center,.swal2-container.swal2-grow-column.swal2-top{align-items:center}.swal2-container.swal2-grow-column.swal2-bottom-left,.swal2-container.swal2-grow-column.swal2-bottom-start,.swal2-container.swal2-grow-column.swal2-center-left,.swal2-container.swal2-grow-column.swal2-center-start,.swal2-container.swal2-grow-column.swal2-top-left,.swal2-container.swal2-grow-column.swal2-top-start{align-items:flex-start}.swal2-container.swal2-grow-column.swal2-bottom-end,.swal2-container.swal2-grow-column.swal2-bottom-right,.swal2-container.swal2-grow-column.swal2-center-end,.swal2-container.swal2-grow-column.swal2-center-right,.swal2-container.swal2-grow-column.swal2-top-end,.swal2-container.swal2-grow-column.swal2-top-right{align-items:flex-end}.swal2-container.swal2-grow-column>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right):not(.swal2-grow-fullscreen)>.swal2-modal{margin:auto}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-container .swal2-modal{margin:0!important}}.swal2-container.swal2-fade{transition:background-color .1s}.swal2-container.swal2-shown{background-color:rgba(0,0,0,.4)}.swal2-popup{display:none;position:relative;flex-direction:column;justify-content:center;width:32em;max-width:100%;padding:1.25em;border-radius:.3125em;background:#fff;font-family:inherit;font-size:1rem;box-sizing:border-box}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-popup .swal2-header{display:flex;flex-direction:column;align-items:center}.swal2-popup .swal2-title{display:block;position:relative;max-width:100%;margin:0 0 .4em;padding:0;color:#595959;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-popup .swal2-actions{flex-wrap:wrap;align-items:center;justify-content:center;margin:1.25em auto 0;z-index:1}.swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-popup .swal2-actions.swal2-loading .swal2-styled.swal2-confirm{width:2.5em;height:2.5em;margin:.46875em;padding:0;border:.25em solid transparent;border-radius:100%;border-color:transparent;background-color:transparent!important;color:transparent;cursor:default;box-sizing:border-box;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-popup .swal2-actions.swal2-loading .swal2-styled.swal2-cancel{margin-right:30px;margin-left:30px}.swal2-popup .swal2-actions.swal2-loading :not(.swal2-styled).swal2-confirm::after{display:inline-block;width:15px;height:15px;margin-left:5px;border:3px solid #999;border-radius:50%;border-right-color:transparent;box-shadow:1px 1px 1px #fff;content:'';-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal}.swal2-popup .swal2-styled{margin:.3125em;padding:.625em 2em;font-weight:500;box-shadow:none}.swal2-popup .swal2-styled:not([disabled]){cursor:pointer}.swal2-popup .swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#3085d6;color:#fff;font-size:1.0625em}.swal2-popup .swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#aaa;color:#fff;font-size:1.0625em}.swal2-popup .swal2-styled:focus{outline:0;box-shadow:0 0 0 2px #fff,0 0 0 4px rgba(50,100,150,.4)}.swal2-popup .swal2-styled::-moz-focus-inner{border:0}.swal2-popup .swal2-footer{justify-content:center;margin:1.25em 0 0;padding:1em 0 0;border-top:1px solid #eee;color:#545454;font-size:1em}.swal2-popup .swal2-image{max-width:100%;margin:1.25em auto}.swal2-popup .swal2-close{position:absolute;top:0;right:0;justify-content:center;width:1.2em;height:1.2em;padding:0;transition:color .1s ease-out;border:none;border-radius:0;background:0 0;color:#ccc;font-family:serif;font-size:2.5em;line-height:1.2;cursor:pointer;overflow:hidden}.swal2-popup .swal2-close:hover{-webkit-transform:none;transform:none;color:#f27474}.swal2-popup>.swal2-checkbox,.swal2-popup>.swal2-file,.swal2-popup>.swal2-input,.swal2-popup>.swal2-radio,.swal2-popup>.swal2-select,.swal2-popup>.swal2-textarea{display:none}.swal2-popup .swal2-content{justify-content:center;margin:0;padding:0;color:#545454;font-size:1.125em;font-weight:300;line-height:normal;z-index:1;word-wrap:break-word}.swal2-popup #swal2-content{text-align:center}.swal2-popup .swal2-checkbox,.swal2-popup .swal2-file,.swal2-popup .swal2-input,.swal2-popup .swal2-radio,.swal2-popup .swal2-select,.swal2-popup .swal2-textarea{margin:1em auto}.swal2-popup .swal2-file,.swal2-popup .swal2-input,.swal2-popup .swal2-textarea{width:100%;transition:border-color .3s,box-shadow .3s;border:1px solid #d9d9d9;border-radius:.1875em;font-size:1.125em;box-shadow:inset 0 1px 1px rgba(0,0,0,.06);box-sizing:border-box}.swal2-popup .swal2-file.swal2-inputerror,.swal2-popup .swal2-input.swal2-inputerror,.swal2-popup .swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-popup .swal2-file:focus,.swal2-popup .swal2-input:focus,.swal2-popup .swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:0 0 3px #c4e6f5}.swal2-popup .swal2-file::-webkit-input-placeholder,.swal2-popup .swal2-input::-webkit-input-placeholder,.swal2-popup .swal2-textarea::-webkit-input-placeholder{color:#ccc}.swal2-popup .swal2-file:-ms-input-placeholder,.swal2-popup .swal2-input:-ms-input-placeholder,.swal2-popup .swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-popup .swal2-file::-ms-input-placeholder,.swal2-popup .swal2-input::-ms-input-placeholder,.swal2-popup .swal2-textarea::-ms-input-placeholder{color:#ccc}.swal2-popup .swal2-file::placeholder,.swal2-popup .swal2-input::placeholder,.swal2-popup .swal2-textarea::placeholder{color:#ccc}.swal2-popup .swal2-range input{width:80%}.swal2-popup .swal2-range output{width:20%;font-weight:600;text-align:center}.swal2-popup .swal2-range input,.swal2-popup .swal2-range output{height:2.625em;margin:1em auto;padding:0;font-size:1.125em;line-height:2.625em}.swal2-popup .swal2-input{height:2.625em;padding:0 .75em}.swal2-popup .swal2-input[type=number]{max-width:10em}.swal2-popup .swal2-file{font-size:1.125em}.swal2-popup .swal2-textarea{height:6.75em;padding:.75em}.swal2-popup .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;color:#545454;font-size:1.125em}.swal2-popup .swal2-checkbox,.swal2-popup .swal2-radio{align-items:center;justify-content:center}.swal2-popup .swal2-checkbox label,.swal2-popup .swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-popup .swal2-checkbox input,.swal2-popup .swal2-radio input{margin:0 .4em}.swal2-popup .swal2-validation-message{display:none;align-items:center;justify-content:center;padding:.625em;background:#f0f0f0;color:#666;font-size:1em;font-weight:300;overflow:hidden}.swal2-popup .swal2-validation-message::before{display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center;content:'!';zoom:normal}@supports (-ms-accelerator:true){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@-moz-document url-prefix(){.swal2-close:focus{outline:2px solid rgba(50,100,150,.4)}}.swal2-icon{position:relative;justify-content:center;width:5em;height:5em;margin:1.25em auto 1.875em;border:.25em solid transparent;border-radius:50%;line-height:5em;cursor:default;box-sizing:content-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;zoom:normal}.swal2-icon-text{font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-success{border-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:3.75em 3.75em;transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 3.75em;transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;top:-.25em;left:-.25em;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%;z-index:2;box-sizing:content-box}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;top:.5em;left:1.625em;width:.4375em;height:5.625em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);z-index:1}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;height:.3125em;border-radius:.125em;background-color:#a5dc86;z-index:2}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.875em;width:1.5625em;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-progresssteps{align-items:center;margin:0 0 1.25em;padding:0;font-weight:600}.swal2-progresssteps li{display:inline-block;position:relative}.swal2-progresssteps .swal2-progresscircle{width:2em;height:2em;border-radius:2em;background:#3085d6;color:#fff;line-height:2em;text-align:center;z-index:20}.swal2-progresssteps .swal2-progresscircle:first-child{margin-left:0}.swal2-progresssteps .swal2-progresscircle:last-child{margin-right:0}.swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep{background:#3085d6}.swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep~.swal2-progresscircle{background:#add8e6}.swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep~.swal2-progressline{background:#add8e6}.swal2-progresssteps .swal2-progressline{width:2.5em;height:.4em;margin:0 -1px;background:#3085d6;z-index:10}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-show.swal2-noanimation{-webkit-animation:none;animation:none}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-hide.swal2-noanimation{-webkit-animation:none;animation:none}[dir=rtl] .swal2-close{right:auto;left:0}.swal2-animate-success-icon .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-animate-success-icon .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-animate-success-icon .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-animate-error-icon{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-animate-error-icon .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}@-webkit-keyframes swal2-rotate-loading{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:initial!important}}");
/**
 * jQuery Geocoding and Places Autocomplete Plugin - V 1.7.0
 *
 * @author Martin Kleppe <kleppe@ubilabs.net>, 2016
 * @author Ubilabs http://ubilabs.net, 2016
 * @license MIT License <http://www.opensource.org/licenses/mit-license.php>
 */
(function($,window,document,undefined){var defaults={bounds:true,country:null,map:false,details:false,detailsAttribute:"name",detailsScope:null,autoselect:true,location:false,mapOptions:{zoom:14,scrollwheel:false,mapTypeId:"roadmap"},markerOptions:{draggable:false},maxZoom:16,types:["geocode"],blur:false,geocodeAfterResult:false,restoreValueAfterBlur:false};var componentTypes=("street_address route intersection political "+"country administrative_area_level_1 administrative_area_level_2 "+"administrative_area_level_3 colloquial_area locality sublocality "+"neighborhood premise subpremise postal_code natural_feature airport "+"park point_of_interest post_box street_number floor room "+"lat lng viewport location "+"formatted_address location_type bounds").split(" ");var placesDetails=("id place_id url website vicinity reference name rating "+"international_phone_number icon formatted_phone_number").split(" ");function GeoComplete(input,options){this.options=$.extend(true,{},defaults,options);if(options&&options.types){this.options.types=options.types}this.input=input;this.$input=$(input);this._defaults=defaults;this._name="geocomplete";this.init()}$.extend(GeoComplete.prototype,{init:function(){this.initMap();this.initMarker();this.initGeocoder();this.initDetails();this.initLocation()},initMap:function(){if(!this.options.map){return}if(typeof this.options.map.setCenter=="function"){this.map=this.options.map;return}this.map=new google.maps.Map($(this.options.map)[0],this.options.mapOptions);google.maps.event.addListener(this.map,"click",$.proxy(this.mapClicked,this));google.maps.event.addListener(this.map,"dragend",$.proxy(this.mapDragged,this));google.maps.event.addListener(this.map,"idle",$.proxy(this.mapIdle,this));google.maps.event.addListener(this.map,"zoom_changed",$.proxy(this.mapZoomed,this))},initMarker:function(){if(!this.map){return}var options=$.extend(this.options.markerOptions,{map:this.map});if(options.disabled){return}this.marker=new google.maps.Marker(options);google.maps.event.addListener(this.marker,"dragend",$.proxy(this.markerDragged,this))},initGeocoder:function(){var selected=false;var options={types:this.options.types,bounds:this.options.bounds===true?null:this.options.bounds,componentRestrictions:this.options.componentRestrictions};if(this.options.country){options.componentRestrictions={country:this.options.country}}this.autocomplete=new google.maps.places.Autocomplete(this.input,options);this.geocoder=new google.maps.Geocoder;if(this.map&&this.options.bounds===true){this.autocomplete.bindTo("bounds",this.map)}google.maps.event.addListener(this.autocomplete,"place_changed",$.proxy(this.placeChanged,this));this.$input.on("keypress."+this._name,function(event){if(event.keyCode===13){return false}});if(this.options.geocodeAfterResult===true){this.$input.bind("keypress."+this._name,$.proxy(function(){if(event.keyCode!=9&&this.selected===true){this.selected=false}},this))}this.$input.bind("geocode."+this._name,$.proxy(function(){this.find()},this));this.$input.bind("geocode:result."+this._name,$.proxy(function(){this.lastInputVal=this.$input.val()},this));if(this.options.blur===true){this.$input.on("blur."+this._name,$.proxy(function(){if(this.options.geocodeAfterResult===true&&this.selected===true){return}if(this.options.restoreValueAfterBlur===true&&this.selected===true){setTimeout($.proxy(this.restoreLastValue,this),0)}else{this.find()}},this))}},initDetails:function(){if(!this.options.details){return}if(this.options.detailsScope){var $details=$(this.input).parents(this.options.detailsScope).find(this.options.details)}else{var $details=$(this.options.details)}var attribute=this.options.detailsAttribute,details={};function setDetail(value){details[value]=$details.find("["+attribute+"="+value+"]")}$.each(componentTypes,function(index,key){setDetail(key);setDetail(key+"_short")});$.each(placesDetails,function(index,key){setDetail(key)});this.$details=$details;this.details=details},initLocation:function(){var location=this.options.location,latLng;if(!location){return}if(typeof location=="string"){this.find(location);return}if(location instanceof Array){latLng=new google.maps.LatLng(location[0],location[1])}if(location instanceof google.maps.LatLng){latLng=location}if(latLng){if(this.map){this.map.setCenter(latLng)}if(this.marker){this.marker.setPosition(latLng)}}},destroy:function(){if(this.map){google.maps.event.clearInstanceListeners(this.map);google.maps.event.clearInstanceListeners(this.marker)}this.autocomplete.unbindAll();google.maps.event.clearInstanceListeners(this.autocomplete);google.maps.event.clearInstanceListeners(this.input);this.$input.removeData();this.$input.off(this._name);this.$input.unbind("."+this._name)},find:function(address){this.geocode({address:address||this.$input.val()})},geocode:function(request){if(!request.address){return}if(this.options.bounds&&!request.bounds){if(this.options.bounds===true){request.bounds=this.map&&this.map.getBounds()}else{request.bounds=this.options.bounds}}if(this.options.country){request.region=this.options.country}this.geocoder.geocode(request,$.proxy(this.handleGeocode,this))},selectFirstResult:function(){var selected="";if($(".pac-item-selected")[0]){selected="-selected"}var $span1=$(".pac-container:visible .pac-item"+selected+":first span:nth-child(2)").text();var $span2=$(".pac-container:visible .pac-item"+selected+":first span:nth-child(3)").text();var firstResult=$span1;if($span2){firstResult+=" - "+$span2}this.$input.val(firstResult);return firstResult},restoreLastValue:function(){if(this.lastInputVal){this.$input.val(this.lastInputVal)}},handleGeocode:function(results,status){if(status===google.maps.GeocoderStatus.OK){var result=results[0];this.$input.val(result.formatted_address);this.update(result);if(results.length>1){this.trigger("geocode:multiple",results)}}else{this.trigger("geocode:error",status)}},trigger:function(event,argument){this.$input.trigger(event,[argument])},center:function(geometry){if(geometry.viewport){this.map.fitBounds(geometry.viewport);if(this.map.getZoom()>this.options.maxZoom){this.map.setZoom(this.options.maxZoom)}}else{this.map.setZoom(this.options.maxZoom);this.map.setCenter(geometry.location)}if(this.marker){this.marker.setPosition(geometry.location);this.marker.setAnimation(this.options.markerOptions.animation)}},update:function(result){if(this.map){this.center(result.geometry)}if(this.$details){this.fillDetails(result)}this.trigger("geocode:result",result)},fillDetails:function(result){var data={},geometry=result.geometry,viewport=geometry.viewport,bounds=geometry.bounds;$.each(result.address_components,function(index,object){var name=object.types[0];$.each(object.types,function(index,name){data[name]=object.long_name;data[name+"_short"]=object.short_name})});$.each(placesDetails,function(index,key){data[key]=result[key]});$.extend(data,{formatted_address:result.formatted_address,location_type:geometry.location_type||"PLACES",viewport:viewport,bounds:bounds,location:geometry.location,lat:geometry.location.lat(),lng:geometry.location.lng()});$.each(this.details,$.proxy(function(key,$detail){var value=data[key];this.setDetail($detail,value)},this));this.data=data},setDetail:function($element,value){if(value===undefined){value=""}else if(typeof value.toUrlValue=="function"){value=value.toUrlValue()}if($element.is(":input")){$element.val(value)}else{$element.text(value)}},markerDragged:function(event){this.trigger("geocode:dragged",event.latLng)},mapClicked:function(event){this.trigger("geocode:click",event.latLng)},mapDragged:function(event){this.trigger("geocode:mapdragged",this.map.getCenter())},mapIdle:function(event){this.trigger("geocode:idle",this.map.getCenter())},mapZoomed:function(event){this.trigger("geocode:zoom",this.map.getZoom())},resetMarker:function(){this.marker.setPosition(this.data.location);this.setDetail(this.details.lat,this.data.location.lat());this.setDetail(this.details.lng,this.data.location.lng())},placeChanged:function(){var place=this.autocomplete.getPlace();this.selected=true;if(!place.geometry){if(this.options.autoselect){var autoSelection=this.selectFirstResult();this.find(autoSelection)}}else{this.update(place)}}});$.fn.geocomplete=function(options){var attribute="plugin_geocomplete";if(typeof options=="string"){var instance=$(this).data(attribute)||$(this).geocomplete().data(attribute),prop=instance[options];if(typeof prop=="function"){prop.apply(instance,Array.prototype.slice.call(arguments,1));return $(this)}else{if(arguments.length==2){prop=arguments[1]}return prop}}else{return this.each(function(){var instance=$.data(this,attribute);if(!instance){instance=new GeoComplete(this,options);$.data(this,attribute,instance)}})}}})(jQuery,window,document);

} )( window, document, wp, jQuery );
