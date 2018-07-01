let $gulp        = require( 'gulp' );
//let rename       = require( 'gulp-rename' );
let $node_path   = "./node_modules/";
let $assets_path = "./assets/";

/**
 * {ActualPATH:DISTPATH}
 * @type {}
 */
let $filesToCopy = {
	'./node_modules/select2/dist/js/*.full.min.js': 'plugins/select2/',
	'./node_modules/select2/dist/css/*.min.*': 'plugins/select2/',
	'./node_modules/selectize.js/dist/js/standalone/*.min.js': 'plugins/selectize/',
	'./node_modules/selectize.js/dist/css/*.min.css': 'plugins/selectize/',
	'./node_modules/chosen-js/*.jquery.min.js': 'plugins/chosen/',
	'./node_modules/chosen-js/*.min.css': 'plugins/chosen/',
	'./node_modules/chosen-js/*.png': 'plugins/chosen/',
	//'./node_modules/inputmask/dist/*.js': 'plugins/inputmask',
	'./node_modules/inputmask/dist/min/*.js': 'plugins/inputmask',
	//'./node_modules/flag-icon-css/css/*.min.*': 'plugins/flag-icon-css/css/',
	//'./node_modules/flag-icon-css/flags/*/*/': 'plugins/flag-icon-css/flags/',
	//'./node_modules/animate.css/*.min.css': 'plugins/animate.css/',
	'./node_modules/typicons.font/src/font/*': 'plugins/typicons/',
	'./node_modules/boxicons/css/*.min.css': 'plugins/boxicons/css/',
	'./node_modules/boxicons/fonts/*': 'plugins/boxicons/fonts/',
	'./src/vendors/fontawesome/css/all.css' : 'plugins/fontawesome/css/',
	'./src/vendors/fontawesome/webfonts/*' : 'plugins/fontawesome/webfonts/',
};

$gulp.task( 'copy', () => {
	let $x;
	for ( $x in $filesToCopy ) {
		let $dist_path = $filesToCopy[ $x ];
		$gulp.src( $x )
			 .pipe( $gulp.dest( $assets_path + $dist_path ) );
	}

} )