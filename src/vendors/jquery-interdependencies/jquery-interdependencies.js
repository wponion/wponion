( function ( $ ) {
	function Rule ( controller, condition, value ) {
		this.init( controller, condition, value );
	}

	function Ruleset () {
		this.rules = [];
	}

	$.extend( Rule.prototype, {
		init: function ( controller, condition, value ) {
			this.controller = controller;
			this.condition  = condition;
			this.value      = value;
			this.rules      = [];
			this.controls   = [];
		},

		evalCondition: function ( context, control, condition, val1, val2 ) {
			if ( "==" === condition || "OR" === condition ) {
				return this.checkBoolean( val1 ) === this.checkBoolean( val2 );
			} else if ( "!=" === condition ) {
				return this.checkBoolean( val1 ) !== this.checkBoolean( val2 );
			} else if ( ">=" === condition ) {
				return Number( val2 ) >= Number( val1 );
			} else if ( "<=" === condition ) {
				return Number( val2 ) <= Number( val1 );
			} else if ( ">" === condition ) {
				return Number( val2 ) > Number( val1 );
			} else if ( "<" === condition ) {
				return Number( val2 ) < Number( val1 );
			} else if ( "()" === condition ) {
				return window[ val1 ]( context, control, val2 ); // FIXED: function method
			} else if ( "any" === condition ) {
				return $.inArray( val2, val1.split( ',' ) ) > -1;
			} else if ( "not-any" === condition ) {
				return -1 === $.inArray( val2, val1.split( ',' ) );
			} else {
				throw new Error( "Unknown condition:" + condition );
			}
		},

		checkBoolean: function ( value ) {
			switch ( value ) {
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

		checkCondition: function ( context ) {
			if ( !this.condition ) {
				return true;
			}

			var control = context.find( this.controller );
			var val     = this.getControlValue( context, control );

			if ( val === undefined ) {
				return false;
			}

			val = this.normalizeValue( control, this.value, val );
			return this.evalCondition( context, control, this.condition, this.value, val );
		},

		normalizeValue: function ( control, baseValue, val ) {
			if ( typeof baseValue === "number" ) {
				return parseFloat( val );
			}
			return val;
		},

		getControlValue: function ( context, control ) {
			if ( ( "radio" === control.attr( "type" ) || "checkbox" === control.attr( "type" ) ) && control.size() > 1 ) {
				return control.filter( ":checked" ).val();
			}

			if ( "checkbox" === control.attr( "type" ) || "radio" === control.attr( "type" ) ) {
				return control.is( ":checked" );
			}
			return control.val();
		},

		createRule: function ( controller, condition, value ) {
			var rule = new Rule( controller, condition, value );
			this.rules.push( rule );
			return rule;
		},

		include: function ( input ) {
			if ( !input ) {
				throw new Error( "Must give an input selector" );
			}

			this.controls.push( input );
		},

		applyRule: function ( context, cfg, enforced ) {
			var result;

			if ( enforced === undefined ) {
				result = this.checkCondition( context );
			} else {
				result = enforced;
			}

			var show = cfg.show || function ( control ) {
				control.show();
			};

			var hide = cfg.hide || function ( control ) {
				control.hide();
			};


			var controls = $.map( this.controls, function ( elem ) {
				return context.find( elem );
			} );

			if ( result ) {
				$( controls ).each( function () {
					show( this );
				} );

				$( this.rules ).each( function () {
					if ( this.condition !== "OR" ) {
						this.applyRule( context, cfg );
					}
				} );
			} else {
				$( controls ).each( function () {
					hide( this );
				} );

				$( this.rules ).each( function () {
					if ( this.condition !== "OR" ) {
						this.applyRule( context, cfg, false );
					} else {
						this.applyRule( context, cfg );
					}
				} );
			}
		}
	} );

	$.extend( Ruleset.prototype, {
		createRule: function ( controller, condition, value ) {
			var rule = new Rule( controller, condition, value );
			this.rules.push( rule );
			return rule;
		},

		applyRules: function ( context, cfg ) {
			var i;
			cfg = cfg || {};
			for ( i = 0; i < this.rules.length; i++ ) {
				this.rules[ i ].applyRule( context, cfg );
			}
		},

		walk: function () {
			var rules = [];

			function descent ( rule ) {
				rules.push( rule );
				$( rule.children ).each( function () {
					descent( this );
				} );
			}

			$( this.rules ).each( function () {
				descent( this );
			} );
			return rules;
		},

		checkTargets: function ( context ) {
			var controls = 0;
			var rules    = this.walk();

			$( rules ).each( function () {
				if ( context.find( this.controller ).size() === 0 ) {
					throw new Error( "Rule's controller does not exist:" + this.controller );
				}

				if ( this.controls.length === 0 ) {
					throw new Error( "Rule has no controls:" + this );
				}

				$( this.controls ).each( function () {
					if ( context.find( this ) === 0 ) {
						throw new Error( "Rule's target control " + this + " does not exist in context " + context.get( 0 ) );
					}
					controls++;
				} );
			} );
		},

		install: function ( cfg ) {
			$.deps.enable( $( document.body ), this, cfg );
		}
	} );

	$.deps = {
		createRuleset: function () {
			return new Ruleset();
		},

		enable: function ( selection, ruleset, cfg ) {
			cfg = cfg || {};

			if ( cfg.checkTargets || cfg.checkTargets === undefined ) {
				ruleset.checkTargets( selection );
			}

			var handler = function () {
				ruleset.applyRules( selection, cfg );
			};
			var val     = selection.on( "change.deps", null, null, handler ) ;

			ruleset.applyRules( selection, cfg );
			return val;
		}
	};

} )( jQuery );