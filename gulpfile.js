require( 'easy-gulp-tasker' );
let $gulp        = require( 'gulp' ),
	$assets_path = './assets/',
	$filesToCopy = {
		'./node_modules/@wponion/icons/fonts/*.*': 'font/',
	};

$gulp.task( 'copy', ( callback ) => {
	let $x;
	for( $x in $filesToCopy ) {
		if( $filesToCopy.hasOwnProperty( $x ) ) {
			let $dist_path = $filesToCopy[ $x ];
			$gulp.src( $x ).pipe( $gulp.dest( $assets_path + $dist_path ) );
		}
	}
	callback();
} );
