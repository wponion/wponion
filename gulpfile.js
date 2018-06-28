let $gulp        = require( 'gulp' );
//let rename       = require( 'gulp-rename' );
let $node_path   = "./node_modules/";
let $assets_path = "./assets/";

/**
 * {ActualPATH:DISTPATH}
 * @type {}
 */
let $filesToCopy = {
	'select2/dist/js/*.full.min.js': 'plugins/select2/',
	'select2/dist/css/*.min.*': 'plugins/select2/',
	'selectize.js/dist/js/standalone/*.min.js': 'plugins/selectize/',
	'selectize.js/dist/css/*.min.css': 'plugins/selectize/',
	'chosen-js/*.jquery.min.js': 'plugins/chosen/',
	'chosen-js/*.min.css': 'plugins/chosen/',
	'chosen-js/*.png': 'plugins/chosen/',
	//'inputmask/dist/*.js': 'plugins/inputmask',
	'inputmask/dist/min/*.js': 'plugins/inputmask',
	'flag-icon-css/css/*.min.*': 'plugins/flag-icon-css/css/',
	'flag-icon-css/flags/*/*/': 'plugins/flag-icon-css/flags/',
	'animate.css/*.min.css': 'plugins/animate.css/',
	'typicons.font/src/font/*': 'plugins/typicons/',
	'boxicons/css/*': 'plugins/boxicons/css/',
	'boxicons/fonts/*': 'plugins/boxicons/fonts/',
};

$gulp.task( 'copy', () => {
	let $x;
	for ( $x in $filesToCopy ) {
		let $main_js   = $node_path + $x,
			$dist_path = $filesToCopy[ $x ];

		$gulp.src( $main_js )
			 .pipe( $gulp.dest( $assets_path + $dist_path ) );
	}

} );