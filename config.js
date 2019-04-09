let $files = {};

$files[ 'src/scss/wponion-base.scss' ]                       = {
	dist: 'assets/css',
	combine_files: true,
	scss: true,
	autoprefixer: true,
	minify: true,
	watch: [ 'src/scss/includes/*', 'src/scss/includes/fields/*', 'src/scss/includes/fields/*/*', 'src/scss/includes/modules/*', 'src/scss/includes/modules/*/*' ],
};
$files[ 'src/scss/wponion-plugins.scss' ]                    = {
	dist: 'assets/css',
	combine_files: true,
	scss: true,
	minify: true,
};
$files[ 'src/scss/themes/fresh/wponion-fresh-theme.scss' ]   = {
	scss: true,
	autoprefixer: true,
	minify: true,
	dist: 'templates/fresh/assets/',
};
$files[ 'src/scss/themes/modern/wponion-modern-theme.scss' ] = {
	scss: true,
	autoprefixer: true,
	minify: true,
	dist: 'templates/modern/assets/',
};
$files[ 'src/vendors/flatpickr/style.scss' ]                 = {
	dist: 'assets/plugins/flatpickr/',
	combine_files: true,
	scss: true,
	autoprefixer: true,
	minify: true,
	rename: 'style.css',
};
$files[ 'src/vendors/colorpicker/cs-colorpicker.css' ]       = {
	dist: 'assets/plugins/colorpicker/',
	watch: [ 'src/js/wponion-plugins.js' ],
	autoprefixer: true,
	minify: true,
	rename: 'cs-colorpicker.css',
};

$files[ 'src/js/wponion-plugins.js' ]     = {
	dist: 'assets/js',
	watch: [ './src/vendors/*/*.js' ],
	combine_files: true,
	uglify: true,
};
$files[ 'src/js/wponion-core.js' ]        = {
	dist: 'assets/js',
	watch: [ 'src/js/core/*', 'src/js/fields/*', 'src/js/helpers/*', 'src/js/modules/*', 'src/js/modules/*/*', 'src/vendors/backbone-modal.js' ],
	webpack: 'webpack_dev',
	//uglify: true,
	rename: 'wponion-core.js',
};
$files[ 'src/js/themes/wp-theme.js' ]     = {
	dist: 'templates/wp/assets/',
	webpack: true,
	uglify: true,
	concat: 'wponion-wp-theme.js'
};
$files[ 'src/js/themes/modern-theme.js' ] = {
	dist: 'templates/modern/assets/',
	webpack: true,
	uglify: true,
	concat: 'wponion-modern-theme.js'
};
$files[ 'src/js/themes/fresh-theme.js' ]  = {
	dist: 'templates/fresh/assets/',
	webpack: true,
	uglify: true,
	concat: 'wponion-fresh-theme.js'
};
$files[ 'src/js/themes/wp-modern.js' ]    = {
	dist: 'templates/wp-modern/assets/',
	webpack: true,
	uglify: true,
	concat: 'script.js'
};
$files[ 'src/js/wponion-cloner.js' ]      = {
	dist: 'assets/js',
	babel: true,
	uglify: true,
	concat: 'wponion-cloner.js',
};

module.exports = {
	files: $files,
	config: {
		combine_files: {
			append: 'wponion-append',
			prepend: 'wponion-prepend',
			inline: 'wponion-inline',
		},
	}
};
