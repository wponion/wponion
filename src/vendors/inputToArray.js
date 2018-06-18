;( function ( $ ) {
	'use strict';

	function vsAttrToArray () {

		this.set_defaults = function () {
			this.key      = [];
			this.array    = null;
			this.element  = null;
			this.val_req  = false;
			this.elem_key = null;
		};

		this.set_key = function ( $key ) {
			var $this = this;
			if ( $key !== '' && typeof $key === 'object' ) {
				$.each( $key, function ( $k, $v ) {
					$this.key.push( $v );
				} )
			}
		};

		this.render_array = function () {
			var $this = this;
			$.each( $this.key, function ( $key, $value ) {
				$this.array = $this.hook_array( $key, $value, $this.array );
			} );
			return $this.array;
		};

		this.element_array = function () {
			var $elem = this.element.attr( this.elem_key );
			if ( $elem !== undefined || $elem !== '' || $elem !== false ) {
				var $regex = /\[]/g;
				var $m     = null;
				if ( ( $m = $regex.exec( $elem ) ) !== null ) {
					if ( $m.length === 1 ) {
						if ( $m[ 0 ] === '[]' ) {
							return true;
						}
					}
				}
			}
			return false;

		};

		this.get_value = function () {
			var $this  = this;
			var $value = null;

			if ( $this.element.is( 'input[type=checkbox]' ) || $this.element.is( 'input[type=radio]' ) ) {
				$value = ( $this.element.is( ":checked" ) ) ? $this.element.val() : false;
			} else if ( $this.element.is( 'textarea' ) ) {
				$value = $this.element.val();
				if ( $value === '' ) {
					$value = $this.element.html();
				}
			} else {
				$value = $this.element.val();
			}

			return ( this.element_array() === true && $value !== false ) ? [ $value ] : $value;
		};

		this.set_value = function ( $arr, $key, $_value, $c_count ) {
			var $value = this.get_value();
			if ( $arr[ $key ] === null ) {
				$arr[ $key ] = {};
			}
			if ( $value !== false ) {

				$arr[ $key ][ $_value ] = ( ( this.key.length - 1 ) === $c_count && this.val_req === true ) ? $value : null;
			}
			return $arr;
		};

		this.hook_array = function ( $CK, $value, $arr ) {
			if ( $arr === undefined ) {
				$arr = this.array;
			}


			var $this = this;

			if ( $arr === null ) {
				$arr           = {};
				$arr[ $value ] = null;
			} else if ( typeof $arr === 'object' || typeof $arr === 'array' ) {
				$.each( $arr, function ( $key, $val ) {
					if ( $val === null ) {
						$arr = $this.set_value( $arr, $key, $value, $CK );

					} else if ( typeof $val === 'object' || typeof $val === 'array' ) {
						$arr[ $key ] = $this.hook_array( $CK, $value, $arr[ $key ] );
					}

				} )
			}


			return $arr;
		};

		this.run_regex = function ( $name ) {
			//var $regex = /\w+(?!\[)[\w&.\-]+\w+/g;
			var $regex = /\w+(?:[&.\-]\w+)*/g;
			var $m     = null;
			var $this  = this;

			while ( ( $m = $regex.exec( $name ) ) !== null ) {
				if ( $m.index === $regex.lastIndex ) {
					$regex.lastIndex++;
				}
				$this.set_key( $m );
			}

			return true;
		};

		this.get = function ( $name, $element, $val, $elem_key ) {
			var $this      = this;
			$this.element  = $element;
			$this.val_req  = $val;
			$this.elem_key = $elem_key;
			this.run_regex( $name );
			var $data = this.render_array();
			this.set_defaults();
			return $data;
		};

		this.get_key = function ( $name ) {
			this.run_regex( $name );
			return ( this.key[ 0 ] !== undefined ) ? this.key[ 0 ] : null;
		};

		this.array_merge = function () {
			var args   = Array.prototype.slice.call( arguments )
			var argl   = args.length
			var arg
			var retObj = {}
			var k      = ''
			var argil  = 0
			var j      = 0
			var i      = 0
			var ct     = 0
			var toStr  = Object.prototype.toString
			var retArr = true

			for ( i = 0; i < argl; i++ ) {
				if ( toStr.call( args[ i ] ) !== '[object Array]' ) {
					retArr = false
					break
				}
			}

			if ( retArr ) {
				retArr = []
				for ( i = 0; i < argl; i++ ) {
					retArr = retArr.concat( args[ i ] )
				}
				return retArr
			}

			for ( i = 0, ct = 0; i < argl; i++ ) {
				arg = args[ i ]
				if ( toStr.call( arg ) === '[object Array]' ) {
					for ( j = 0, argil = arg.length; j < argil; j++ ) {
						retObj[ ct++ ] = arg[ j ]
					}
				} else {
					for ( k in arg ) {
						if ( arg.hasOwnProperty( k ) ) {
							if ( parseInt( k, 10 ) + '' === k ) {
								retObj[ ct++ ] = arg[ k ]
							} else {
								retObj[ k ] = arg[ k ]
							}
						}
					}
				}
			}

			return retObj
		};

		this.array_merge_recursive = function ( arr1, arr2 ) {
			var idx = '';
			if ( arr1 && Object.prototype.toString.call( arr1 ) === '[object Array]' &&
				arr2 && Object.prototype.toString.call( arr2 ) === '[object Array]' ) {
				for ( idx in arr2 ) {
					arr1.push( arr2[ idx ] )
				}
			} else if ( ( arr1 && ( arr1 instanceof Object ) ) && ( arr2 && ( arr2 instanceof Object ) ) ) {
				for ( idx in arr2 ) {
					if ( idx in arr1 ) {
						if ( typeof arr1[ idx ] === 'object' && typeof arr2 === 'object' ) {
							arr1[ idx ] = this.array_merge_recursive( arr1[ idx ], arr2[ idx ] );
						} else if ( typeof arr1[ idx ] === 'array' && typeof arr2 === 'array' ) {
							arr1[ idx ] = this.array_merge( arr1[ idx ], arr2[ idx ] );
						} else {
							arr1[ idx ] = arr2[ idx ]
						}
					} else {
						arr1[ idx ] = arr2[ idx ]
					}
				}
			}
			return arr1
		}

		this.set_defaults();
	}

	$.fn.inputToArray = function ( $options ) {
		var $ary      = {};
		var $settings = $.extend( {
			key: 'name',
			value: true,
		}, $options );

		var $arr = new vsAttrToArray();
		this.each( function () {
			var $name = $( this ).attr( $settings.key );
			if ( $name !== undefined ) {
				var $r = $arr.get( $name, $( this ), $settings.value, $settings.key );
				$ary   = $arr.array_merge_recursive( $r, $ary );
			}
		} );
		return $ary;

	};

	$.fn.inputArrayKey = function ( $name ) {
		if ( $name === undefined ) {
			$name = 'name';
		}
		var $name = $( this ).attr( $name );
		if ( $name === undefined ) {
			return false;
		}
		var $arr = new vsAttrToArray();
		return $arr.get_key( $name );
	}

}( jQuery ) );
