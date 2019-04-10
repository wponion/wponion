let $files = {};

// wponion-base.scss
$files[ 'src/scss/wponion-base.scss' ]    = {
	dist: 'assets/css/',
	combine_files: true,
	scss: true,
	autoprefixer: true,
	watch: [ 'src/scss/wponion-base.scss', 'src/scss/includes/*', 'src/scss/includes/fields/*', 'src/scss/includes/fields/*/*', 'src/scss/includes/modules/*', 'src/scss/includes/modules/*/*' ],
};
$files[ 'assets/css/wponion-base.css' ]   = {
	dist: 'assets/css/',
	minify: true,
	rename: 'wponion-base.min.css',
	watch: true,
};
// wponion-plugins.scss
$files[ 'src/scss/wponion-plugins.scss' ] = {
	dist: 'assets/css/',
	combine_files: true,
	scss: true,
	minify: true,
	watch: [ 'src/scss/wponion-plugins.scss', 'src/vendors/json-view/json-view.scss' ]
};
/*$files[ 'assets/css/wponion-plugins.css' ]                   = {
	dist: 'assets/css/',
	minify: true,
	rename: 'wponion-plugins.min.css',
	watch: true,
};*/
// Fresh Theme
$files[ 'src/scss/themes/fresh/wponion-fresh-theme.scss' ] = {
	scss: true,
	autoprefixer: true,
	minify: true,
	watch: true,
	dist: 'templates/fresh/assets/',
};
/*$files[ 'templates/fresh/assets/wponion-fresh-theme.css' ]   = {
	rename: 'wponion-fresh-theme.min.css',
	minify: true,
	watch: true,
	dist: 'templates/fresh/assets/',
};*/
// Modern Theme
$files[ 'src/scss/themes/modern/wponion-modern-theme.scss' ] = {
	scss: true,
	autoprefixer: true,
	minify: true,
	watch: true,
	dist: 'templates/modern/assets/',
};
/*$files[ 'templates/modern/assets/wponion-modern-theme.css' ] = {
	minify: true,
	rename: 'wponion-modern-theme.min.css',
	watch: true,
	dist: 'templates/modern/assets/',
};*/
// Plugins.
$files[ 'src/vendors/flatpickr/style.scss' ]           = {
	dist: 'assets/plugins/flatpickr/',
	combine_files: true,
	scss: true,
	autoprefixer: true,
	minify: true,
	rename: 'style.css',
};
$files[ 'src/vendors/colorpicker/cs-colorpicker.css' ] = {
	dist: 'assets/plugins/colorpicker/',
	watch: [ 'src/js/wponion-plugins.js' ],
	autoprefixer: true,
	minify: true,
	rename: 'cs-colorpicker.css',
};
// Javascripts
$files[ 'src/js/wponion-plugins.js' ]                  = {
	dist: 'assets/js',
	watch: [ './src/vendors/*/*.js', 'src/js/wponion-plugins.js' ],
	combine_files: true,
	uglify: true,
};
/*$files[ 'assets/js/wponion-plugins.js' ]               = {
	dist: 'assets/js',
	rename: 'wponion-plugins.min.js',
	watch: true,
	uglify: true,
};*/
$files[ 'src/js/wponion-core.js' ]        = [
	{
		dist: 'assets/js',
		watch: [ 'src/js/wponion-core.js', 'src/js/core/*', 'src/js/fields/*', 'src/js/helpers/*', 'src/js/modules/*', 'src/js/modules/*/*', 'src/vendors/backbone-modal.js' ],
		webpack: 'webpack_dev_eval',
		rename: 'wponion-core.js',
	},
	{
		dist: 'assets/js',
		watch: [ 'src/js/wponion-core.js', 'src/js/core/*', 'src/js/fields/*', 'src/js/helpers/*', 'src/js/modules/*', 'src/js/modules/*/*', 'src/vendors/backbone-modal.js' ],
		webpack: 'webpack',
		rename: 'wponion-core.min.js',
	}
];
$files[ 'src/js/themes/wp-theme.js' ]     = {
	dist: 'templates/wp/assets/',
	webpack: 'webpack_dev',
	uglify: true,
	watch: true,
	rename: 'wponion-wp-theme.js',
};
$files[ 'src/js/themes/modern-theme.js' ] = {
	dist: 'templates/modern/assets/',
	webpack: 'webpack_dev',
	uglify: true,
	watch: true,
	rename: 'wponion-modern-theme.js'
};
$files[ 'src/js/themes/fresh-theme.js' ]  = {
	dist: 'templates/fresh/assets/',
	webpack: 'webpack_dev',
	uglify: true,
	watch: true,
	rename: 'wponion-fresh-theme.js'
};
$files[ 'src/js/wponion-cloner.js' ]      = {
	dist: 'assets/js',
	babel: true,
	uglify: true,
	watch: true,
	rename: 'wponion-cloner.js',
};

module.exports = {
	files: $files,
	config: {
		combine_files: {
			append: 'wponion-append',
			prepend: 'wponion-prepend',
			inline: 'wponion-inline',
		},
		webpack_dev_eval: {
			devtool: 'eval',
			mode: 'development',
			target: 'node',
			externals: {
				jquery: 'jQuery'
			},
			output: {
				filename: '[name].js',
			},
			module: {
				rules: [
					{
						test: /\.js$/,
						loader: 'babel-loader',
						options: {
							presets: [ '@babel/env' ]
						}
					}
				]
			},
		},
	}
};
