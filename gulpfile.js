const $vs_boilerplate_v = "1.2.0";

const $gulp            = require( 'gulp' ),
	  $util            = require( 'gulp-util' ),
	  $scss            = require( 'gulp-sass' ),
	  $notify          = require( 'gulp-notify' ),
	  $runSequence     = require( 'run-sequence' ),
	  $minify_css      = require( 'gulp-clean-css' ),
	  $babel           = require( 'gulp-babel' ),
	  $concat          = require( 'gulp-concat' ),
	  $uglify          = require( 'gulp-uglify' ),
	  $autoprefixer    = require( 'gulp-autoprefixer' ),
	  $sourcemaps      = require( 'gulp-sourcemaps' ),
	  $webpack         = require( 'webpack-stream' ),
	  $parcel          = require( 'gulp-parcel' ),
	  $combine_files   = require( 'gulp-combine-files' ),
	  $path            = require( 'path' ),
	  $revert_path     = require( 'gulp-revert-path' ),
	  spawn            = require( 'child_process' ).spawn;
let $config            = require( './config.js' );
let $is_config_watched = false;
let $current_task      = false;
let $gulpfile_reload;
let $watch_lists       = {};

try {
	const $custom_gulp = require( './gulp-custom.js' );
} catch( e ) {

}

const watch_config = () => {
	if( false === $is_config_watched && false !== $current_task ) {
		$gulp.watch( './config.js', () => {
			let $_config = false;
			try {
				delete require.cache[ require.resolve( './config.js' ) ];
				$_config = require( './config.js' );
			} catch( e ) {
				console.log( e );
			}

			if( false !== $_config ) {
				$config = $_config;
				$runSequence( $current_task );
				console.log( 'Config Updated !' );
			}
		} );
		$is_config_watched = true;
	}
};

const vs_watch_js         = ( $is_js_dev = false ) => {
		  for( let $src in $config.js ) {
			  if( true === isUndefined( $watch_lists[ $src ] ) ) {
				  $gulp.watch( $src, ( a, b ) => vs_compile_js( $cwd( a[ 'path' ] ), true, $is_js_dev ) );
				  $watch_lists[ $src ] = true;
				  if( false === isUndefined( $config.js[ $src ][ 'watch' ] ) ) {
					  $gulp.watch( $config.js[ $src ][ 'watch' ], () => vs_compile_js( $src, true, $is_js_dev ) );
				  }

			  }
		  }
	  },
	  vs_watch_scss       = ( $is_scss_dev = false ) => {
		  for( let $src in $config.scss ) {
			  if( true === isUndefined( $watch_lists[ $src ] ) ) {
				  $gulp.watch( $src, ( a, b ) => vs_compile_scss( $cwd( a[ 'path' ] ), true, $is_scss_dev ) );
				  $watch_lists[ $src ] = true;
				  if( true !== isUndefined( $config.scss[ $src ][ 'watch' ] ) ) {
					  $gulp.watch( $config.scss[ $src ][ 'watch' ], () => vs_compile_scss( $src, true, $is_scss_dev ) );
				  }
			  }
		  }
	  },
	  $defaults_config    = $config.default_config,
	  isObject            = obj => obj === Object( obj ),
	  $cwd                = ( $full_path ) => $path.relative( process.cwd(), $full_path ),
	  isUndefined         = val => val === undefined,
	  vs_config_value     = function( $array, $src, $dest ) {
		  if( typeof $dest === "undefined" || $dest === '' ) {
			  for( let $_src in $array ) {
				  if( $path.normalize( $path.format( $path.parse( $_src ) ) ) === $src || $src === $_src ) {
					  $dest = $array[ $_src ];
					  break;
				  }
			  }
		  }
		  return $dest;
	  },
	  $notice             = ( $notice ) => $gulp.src( '' ).pipe( $notify( $notice ) ),
	  vs_file_option      = ( $src, $data, $key, $default_key, $is_dev ) => {
		  let $defaults = $defaults_config[ $default_key ];
		  if( true === $is_dev ) {
			  if( false === isUndefined( $defaults_config[ $default_key + '_dev' ] ) ) {
				  $defaults = $defaults_config[ $default_key + '_dev' ];
			  }
		  }


		  let $_defaults = ( false === $config.status[ $key ] ) ? false : $defaults;
		  let $return    = { src: $src, options: $_defaults, dist: $data };

		  if( false === isUndefined( $data ) && true === isObject( $data ) ) {
			  $return.dist = $data.dist;
		  } else if( false === isUndefined( $data ) && false === isObject( $data ) && false !== $data ) {
			  $return.dist = $data;
		  }

		  if( false === isUndefined( $data ) ) {
			  if( isObject( $data ) ) {
				  let $_data = null;

				  if( true === $is_dev && ( false === $data[ $key + '_dev' ] || false === isUndefined( $data[ $key + '_dev' ] ) ) ) {
					  $_data = $data[ $key + '_dev' ];
				  } else if( false === isUndefined( $data[ $key ] ) ) {
					  $_data = $data[ $key ];
				  }

				  if( false !== $_data && null !== $_data ) {
					  let $_d = $_data;
					  if( false === $_d ) {
						  $return.options = false;
					  } else {
						  if( true === $_d ) {
							  $_d = {};
						  } else if( false === $_d ) {
							  $_d = false;
						  }

						  let $dist = $return.dist;
						  if( false === isUndefined( $_d.dist ) ) {
							  $dist = $_d.dist;
							  delete $_d[ 'dist' ];
						  }

						  if( false === isUndefined( $_d.src ) ) {
							  $return.src = $_d.src;
							  delete $_d[ 'src' ];
						  }
						  for( let $k in $defaults ) {
							  if( isUndefined( $_d[ $k ] ) ) {
								  $_d[ $k ] = $defaults[ $k ];
							  }
						  }

						  $return.options = $_d;
						  $return.dist    = $dist;
					  }
				  } else if( false === $_data ) {
					  $return.options = false;
				  }
			  }
		  }

		  return $return;
	  },
	  vs_compile_scss     = function( $_path, $show_alert, $is_dev ) {
		  try {
			  let $instance = new VS_Gulp( $config.scss, $_path, vs_config_value( $config.scss, $_path ), $show_alert, $is_dev );
			  $instance.sourcemap();
			  $instance.combine_files();
			  $instance.scss();
			  $instance.autoprefixer();
			  $instance.concat();
			  $instance.minify();
			  $instance.sourcemap( true );
			  $instance.save();
			  return $instance;
		  } catch( e ) {
			  return e;
		  }
	  },
	  vs_compile_js       = function( $_path, $show_alert, $is_dev ) {
		  try {
			  let $instance = new VS_Gulp( $config.js, $_path, vs_config_value( $config.js, $_path ), $show_alert, $is_dev );
			  $instance.combine_files();
			  $instance.parcel();
			  $instance.webpack();
			  $instance.babel();
			  $instance.uglify();
			  $instance.concat();
			  $instance.save();
			  return $instance;
		  } catch( e ) {
			  return e;
		  }
	  },
	  vs_compile_all_scss = function( $current_loop, $is_dev ) {
		  const $scss_files_keys = Object.keys( $config.scss );
		  if( false === isUndefined( $scss_files_keys[ $current_loop ] ) ) {
			  vs_compile_scss( $scss_files_keys[ $current_loop ], true, $is_dev )
			  vs_compile_all_scss( $current_loop + 1, $is_dev );
		  }
	  },
	  vs_compile_all_js   = function( $current_loop, $is_dev ) {
		  const $js_files_keys = Object.keys( $config.js );
		  if( false === isUndefined( $js_files_keys[ $current_loop ] ) ) {
			  vs_compile_js( $js_files_keys[ $current_loop ], true, $is_dev );
			  vs_compile_all_js( $current_loop + 1, $is_dev );
		  }
	  },
	  VS_Gulp             = function( $vars, $src, $dist, $show_alert, $is_dev ) {
		  this.src      = $src;
		  this.dist     = $dist;
		  this.notices  = '';
		  this.vars     = $vars;
		  this.instance = $gulp.src( this.src );
		  this.alert    = $show_alert;
		  this.is_dev   = $is_dev;
	  };

VS_Gulp.prototype.is_active     = function( global, single ) {
	if( false === global && false === single ) {
		return false;
	} else if( true === global && false === single ) {
		return false;
	}

	return true;
};
VS_Gulp.prototype.gulp_instance = function() {
	return this.instance;
};
VS_Gulp.prototype.notice        = function( $notice ) {
	this.notices += '✓ ' + $notice + '\n';
};
VS_Gulp.prototype.option        = function( $key, $config_key ) {
	return vs_file_option( this.src, this.dist, $key, $config_key, this.is_dev );
};
VS_Gulp.prototype.sourcemap     = function( $save ) {
	let $is_save = ( false === isUndefined( $save ) );
	let $options = this.option( 'sourcemap', 'sourcemap' );

	if( this.is_active( $config.status.sourcemap, $options.options ) ) {
		if( false === $is_save ) {
			this.instance = this.instance.pipe( $sourcemaps.init() );
		} else {
			this.instance = this.instance.pipe( $sourcemaps.write() );
			this.notice( 'Sourcemap' );
		}
	}
	return this;
};
VS_Gulp.prototype.combine_files = function() {
	let $options = this.option( 'combine_files', 'combine_files' );
	if( this.is_active( $config.status.combine_files, $options.options ) ) {
		this.instance = this.instance.pipe( $combine_files( $options.options ) );
		this.notice( 'Combine Files' );
	}
	return this;
};
VS_Gulp.prototype.scss          = function() {
	let $options = this.option( 'scss', 'scss' );
	if( this.is_active( $config.status.scss, $options.options ) ) {
		this.instance = this.instance.pipe( $scss( $options.options ) )
							.on( 'error', function( err ) {
								$notice( err );
							} );
		this.notice( 'SCSS' );
	}
	return this;
};
VS_Gulp.prototype.autoprefixer  = function() {
	let $options = this.option( 'autoprefixer', 'autoprefixer' );
	if( this.is_active( $config.status.autoprefixer, $options.options ) ) {
		this.instance = this.instance.pipe( $autoprefixer( $options.options ) )
							.on( 'error', $util.log );

		this.notice( 'Autoprefixer' );
	}
	return this;

};
VS_Gulp.prototype.concat        = function() {
	let $options = this.option( 'concat', 'concat' );
	if( this.is_active( $config.status.concat, $options.options ) ) {
		if( isObject( $options.options ) && true !== isUndefined( $options.options.filename ) ) {
			if( $options.src ) {
				this.instance = this.instance.pipe( $gulp.src( $options.src ) )
									.pipe( $concat( $options.options.filename, $options.options ) )
									.on( 'error', $util.log );
			} else {
				this.instance = this.instance.pipe( $concat( $options.options.filename, $options.options ) )
									.on( 'error', $util.log );
			}

		} else if( false === isObject( $options.options ) && $options.options !== {} ) {
			this.instance = this.instance.pipe( $concat( $options.options ) )
								.on( 'error', $util.log );
		}
		this.notice( 'Concat' );
	}
	return this;
};
VS_Gulp.prototype.minify        = function() {
	let $options = this.option( 'minify', 'minify' );
	if( this.is_active( $config.status.minify, $options.options ) ) {
		this.instance = this.instance.pipe( $minify_css( $options.options.args, $options.options.callback ) )
							.on( 'error', $util.log );
		this.notice( 'Minify' );
	}
	return this;
};
VS_Gulp.prototype.webpack       = function() {
	let $options = this.option( 'webpack', 'webpack' );
	if( this.is_active( $config.status.webpack, $options.options ) ) {
		this.instance = this.instance.pipe( $revert_path() );
		this.instance = this.instance.pipe( $webpack( $options.options ) );
		this.instance = this.instance.pipe( $revert_path() );
		this.notice( 'Webpack' );
	}
	return this;
};
VS_Gulp.prototype.babel         = function() {
	let $options = this.option( 'babel', 'babel' );
	if( this.is_active( $config.status.babel, $options.options ) ) {
		this.instance = this.instance.pipe( $babel( $options.options ) )
							.on( 'error', $util.log );
		this.notice( 'Babel' );
	}
	return this;
};
VS_Gulp.prototype.parcel        = function() {
	let $options = this.option( 'parcel', 'parcel' );
	if( this.is_active( $config.status.parcel, $options.options ) ) {
		this.instance = this.instance.pipe( $gulp.src( this.src, { read: false } ) );
		this.instance = this.instance.pipe( $parcel( $options.options ) );
		this.notice( 'Parcel' );
	}
	return this;
};
VS_Gulp.prototype.uglify        = function() {
	let $options = this.option( 'uglify', 'uglify' );
	if( this.is_active( $config.status.uglify, $options.options ) ) {
		this.instance = this.instance.pipe( $uglify( $options.options ) )
							.on( 'error', $util.log );
		this.notice( 'Uglify' );
	}
	return this;
};
VS_Gulp.prototype.save          = function() {
	let $dest   = ( isObject( this.dist ) ) ? this.dist.dist : this.dist;
	let $return = false;
	if( typeof $dest !== "undefined" ) {
		this.instance = this.instance.pipe( $gulp.dest( $dest ) );
		$return       = this.instance;
		this.notice( 'Saved' );
		if( true === this.alert ) {
			$notice( { title: $config.project_name + ' - ' + this.src, message: this.notices } );
		}
	} else {
		$util.log( this.dist );
		$util.log( this.src );
		$util.log( this.vars );
	}
	return $return;
};

// Run Scss Compiler.
$gulp.task( 'scss', ( cb ) => vs_compile_all_scss( 0 ) );
$gulp.task( 'js', ( cb ) => vs_compile_all_js( 0 ) );
$gulp.task( 'scss:dev', ( cb ) => vs_compile_all_scss( 0, true ) );
$gulp.task( 'js:dev', ( cb ) => vs_compile_all_js( 0, true ) );

// Watch SCSS Files
$gulp.task( 'watch:scss', function( callback ) {
	if( false === $current_task ) {
		$current_task = 'watch:scss';
	}
	watch_config();
	vs_watch_scss( false );
	callback();
} );
$gulp.task( 'watch:js', function( callback ) {
	if( false === $current_task ) {
		$current_task = 'watch:js';
	}
	watch_config();
	vs_watch_js( false );
	callback();
} );
$gulp.task( 'watch', function( callback ) {
	if( false === $current_task ) {
		$current_task = 'watch';
	}
	watch_config();
	$runSequence( 'watch:scss' );
	$runSequence( 'watch:js' );
	callback();
} );

$gulp.task( 'watch:scss:dev', function( callback ) {
	if( false === $current_task ) {
		$current_task = 'watch:scss:dev';
	}
	watch_config();
	vs_watch_scss( true );
	callback();
} );
$gulp.task( 'watch:js:dev', function( callback ) {
	if( false === $current_task ) {
		$current_task = 'watch:js:dev';
	}
	watch_config();
	vs_watch_js( true );
	callback();
} );
$gulp.task( 'watch:dev', function( callback ) {
	if( false === $current_task ) {
		$current_task = 'watch:dev';
	}
	watch_config();
	$runSequence( 'watch:scss:dev' );
	$runSequence( 'watch:js:dev' );
	callback();
} );

