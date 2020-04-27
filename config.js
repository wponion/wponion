let $files = {};

$files[ 'src/scss/wponion-base.scss' ]                  = {
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
		'src/scss/wponion-utility.scss',
		'src/scss/wponion-icon-fonts.scss',
		'src/scss/includes/*',
		'src/scss/includes/fields/*',
		'src/scss/includes/bootstrap/*',
		'src/scss/includes/fields/*/*',
		'src/scss/includes/modules/*',
		'src/scss/includes/modules/*/*',
		'src/vendors/css-checkbox-library/*.css',
		'src/vendors/tippy.scss'
	],
};
$files[ 'src/vendors/css-checkbox-library/style.scss' ] = {
	dist: 'src/vendors/css-checkbox-library/',
	combine_files: true,
	scss: true,
	minify: true,
	watch: true,
};

/*$files[ 'src/scss/wponion-plugins.scss' ] = {
	dist: 'assets/css/',
	combine_files: true,
	scss: true,
	minify: true,
	watch: [ 'src/scss/wponion-plugins.scss', 'src/vendors/json-view/json-view.scss' ]
};*/

$files[ 'src/js/wponion-plugins.js' ] = {
	dist: 'assets/js',
	watch: [ './src/vendors/*/*.js', 'src/js/wponion-plugins.js' ],
	combine_files: true,
	uglify: true,
	rename: 'wponion-plugins.js',
};
/*$files[ 'src/js/wponion-core.js' ]    = [
	{
		dist: 'assets/js',
		watch: [ 'src/js/wponion-core.js', 'src/js/core/!*', 'src/js/core/!*!/!*', 'src/js/core/!*!/!*!/!*', 'src/js/core/!*!/!*!/!*!/!*', 'src/vendors/backbone-modal.js', 'src/js/wpmodel.js' ],
		webpack: 'webpack_development',
		//webpack: true,
		sourcemaps: false,
		rename: 'wponion-core.js',
	},
	{
		dist: 'assets/js',
		watch: [ 'assets/js/wponion-core.js' ],
		//webpack: 'webpack_development',
		webpack: true,
		sourcemaps: false,
		rename: 'wponion-core.min.js',
	}
];*/

$files[ 'src/js/wponion-core.js' ] = {
	dist: 'assets/js',
	watch: [ 'src/js/wponion-core.js', 'src/js/core/*', 'src/js/core/*/*', 'src/js/core/*/*/*', 'src/js/core/*/*/*/*', 'src/vendors/backbone-modal.js', 'src/js/wpmodel.js' ],
	webpack: 'webpack_prod',
	//webpack: true,
	sourcemaps: false,
	rename: 'wponion-core.js',
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
		webpack_prod: {
			mode: 'production',
			target: 'node',
			externals: { jquery: 'jQuery' },
			output: { filename: '[name].js', pathinfo: false },
			module: {
				rules: [
					{
						test: /\.js$/,
						loader: 'babel-loader',
						options: { presets: [ '@babel/env' ] }
					}
				]
			},
			devtool: 'none',
			optimization: {
				removeAvailableModules: false,
				removeEmptyChunks: false,
				splitChunks: false,
				runtimeChunk: false
			}
		},
		webpack_dev_eval: {
			mode: 'development',
			target: 'node',
			externals: { jquery: 'jQuery' },
			output: { filename: '[name].js' },
			module: {
				rules: [
					{
						test: /\.js$/,
						loader: 'babel-loader',
						options: { presets: [ '@babel/env' ] }
					}
				]
			},
		},
	}
};
