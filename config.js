let $files = {};

// wponion-base.scss
$files[ 'src/scss/wponion-base.scss' ]    = {
	dist: 'assets/css/',
	combine_files: true,
	scss: true,
	autoprefixer: true,
	minify: true,
	rename: 'wponion-base.css',
	watch: [
		'src/scss/themes/*',
		'src/scss/themes/*/*',
		'src/scss/wponion-base.scss',
		'src/scss/includes/*',
		'src/scss/includes/fields/*',
		'src/scss/includes/fields/*/*',
		'src/scss/includes/modules/*',
		'src/scss/includes/modules/*/*'
	],
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
	watch: [ 'src/js/wponion-core.js', 'src/js/core/*', 'src/js/core/*/*', 'src/js/core/*/*/*', 'src/js/core/*/*/*/*', 'src/vendors/backbone-modal.js', 'src/js/wpmodel.js' ],
	webpack: 'webpack_development',
	//webpack: true,
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
$files[ 'src/vendors/colorpicker/cs-colorpicker.css' ] = {
	dist: 'assets/plugins/colorpicker/',
	watch: [ 'src/vendors/colorpicker/cs-colorpicker.css' ],
	autoprefixer: true,
	minify: true,
	rename: 'cs-colorpicker.css',
};

module.exports = {
	files: $files,
	config: {
		combine_files: {
			append: 'wponion-append',
			prepend: 'wponion-prepend',
			inline: 'wponion-inline',
		},
		webpack_development: {
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
			devtool: 'none',
			optimization: {
				runtimeChunk: false
			}
		},
		webpack_dev_eval: {
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
