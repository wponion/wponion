let $files = {};

// wponion-base.scss
$files[ 'src/scss/wponion-base.scss' ]    = {
	dist: 'assets/css/',
	combine_files: true,
	scss: true,
	autoprefixer: true,
	minify: true,
	rename: 'wponion-base.css',
	watch: [ 'src/scss/wponion-base.scss', 'src/scss/includes/*', 'src/scss/includes/fields/*', 'src/scss/includes/fields/*/*', 'src/scss/includes/modules/*', 'src/scss/includes/modules/*/*' ],
};
$files[ 'src/scss/wponion-plugins.scss' ] = {
	dist: 'assets/css/',
	combine_files: true,
	scss: true,
	minify: true,
	watch: [ 'src/scss/wponion-plugins.scss', 'src/vendors/json-view/json-view.scss' ]
};

// Javascripts
$files[ 'src/js/wponion-plugins.js' ]    = {
	dist: 'assets/js',
	watch: [ './src/vendors/*/*.js', 'src/js/wponion-plugins.js' ],
	combine_files: true,
	uglify: true,
	rename: 'wponion-plugins.js',
};
$files[ 'src/js/wponion-core.js' ]       = {
	dist: 'assets/js',
	watch: [
		'src/js/wponion-core.js',
		'src/js/core/*',
		'src/js/fields/*',
		'src/js/helpers/*',
		'src/js/modules/*',
		'src/js/modules/*/*',
		'src/vendors/backbone-modal.js' ],
	//webpack: 'webpack_dev_eval',
	webpack: true,
	sourcemaps: false,
	rename: 'wponion-core.js',
};
$files[ 'src/js/wponion-customizer.js' ] = {
	dist: 'assets/js',
	watch: true,
	webpack: true,
	rename: 'wponion-customizer.js',
};
$files[ 'src/js/wponion-cloner.js' ]     = {
	dist: 'assets/js',
	babel: true,
	uglify: true,
	watch: true,
	rename: 'wponion-cloner.js',
};

// Plugins.
$files[ 'src/vendors/flatpickr/style.scss' ]           = {
	dist: 'assets/plugins/flatpickr/',
	combine_files: true,
	scss: true,
	minify: true,
	watch: true,
	rename: 'style.css',
};
$files[ 'src/vendors/flatpickr/script.js' ]            = {
	dist: 'assets/plugins/flatpickr/',
	combine_files: true,
	uglify: true,
	watch: true,
	rename: 'script.js',
};
$files[ 'src/vendors/colorpicker/cs-colorpicker.css' ] = {
	dist: 'assets/plugins/colorpicker/',
	watch: [ 'src/vendors/colorpicker/cs-colorpicker.css' ],
	autoprefixer: true,
	minify: true,
	rename: 'cs-colorpicker.css',
};

// Themes
// WP & WP Lite Theme
$files[ 'src/js/themes/wp-lite-wp.js' ]           = {
	watch: true,
	babel: true,
	uglify: true,
	rename: 'script.js',
	dist: 'templates/global/assets/',
};
$files[ 'src/scss/themes/wp-lite-wp/style.scss' ] = {
	watch: true,
	scss: true,
	autoprefixer: true,
	minify: true,
	rename: 'style.css',
	dist: 'templates/global/assets/',
};

// WP Modern
$files[ 'src/js/themes/wp-modern.js' ]           = {
	watch: true,
	babel: true,
	uglify: true,
	rename: 'script.js',
	dist: 'templates/wp-modern/assets/',
};
$files[ 'src/scss/themes/wp-modern/style.scss' ] = {
	watch: true,
	scss: true,
	autoprefixer: true,
	minify: true,
	rename: 'style.css',
	dist: 'templates/wp-modern/assets/',
};

// WP Modern
$files[ 'src/js/themes/wc.js' ]           = {
	watch: true,
	babel: true,
	uglify: true,
	rename: 'script.js',
	dist: 'templates/wc/assets/',
};
$files[ 'src/scss/themes/wc/style.scss' ] = {
	watch: true,
	scss: true,
	autoprefixer: true,
	minify: true,
	rename: 'style.css',
	dist: 'templates/wc/assets/',
};

/**
 * Other Plugins
 */
$files[ '' ] = {};


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
