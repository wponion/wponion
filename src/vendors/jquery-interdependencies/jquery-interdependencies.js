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
