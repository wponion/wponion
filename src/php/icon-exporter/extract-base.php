<?php

abstract class Icon_Export_Base {
	public static function slug( $framework, $icon_data ) {
		$slug = ( isset( $icon_data['slug'] ) ) ? $icon_data['slug'] : $framework;
		return str_replace( array( '-', '.', ';', ':', ' ' ), '_', $slug );
	}

	public static function save_json( $file_name, $content ) {
		$content = ( is_array( $content ) || is_object( $content ) ) ? json_encode( $content ) : $content;
		file_put_contents( WPONION_PATH . '/data/json/icons/' . $file_name . '.json', $content );
	}


	public static function icon_register_function( $slug, $lib, $framework ) {
		$assets = ( isset( $lib['assets'] ) ) ? $lib['assets'] : $framework;
		$assets = ( is_array( $assets ) ) ? var_export_strip_array_keys( $assets ) : "'$assets'";

		$prefix = ( isset( $lib['prefix'] ) ) ? $lib['prefix'] : '';
		$prefix = ( is_array( $prefix ) ) ? var_export_strip_array_keys( $prefix ) : "'$prefix'";

		$search  = array( '[name]', '[slug]', '[assets]', '[css_prefix]' );
		$replace = array( $lib['name'], $slug, $assets, $prefix );

		Icon_Exporter::$icons_register_functions .= str_replace( $search, $replace, self::register_code() );
	}

	public static function icon_callback_function( $slug, $lib ) {
		$search                         = array( '[file]', '[name]', '[slug]' );
		$replace                        = array( $slug . '.json', $lib['name'], $slug );
		Icon_Exporter::$icons_callbacks .= str_replace( $search, $replace, self::icon_callback_code() );
	}

	public static function register_code() {
		return <<<PHP

wponion_add_icon_library( array(
	'name'       => __( '[name]' ),
	'slug'       => '[slug]',
	'assets'     => [assets],
	'css_prefix' => [css_prefix],
	'icons'      => 'wponion_icon_[slug]',
) )->register();

PHP;

	}


	public static function icon_callback_code() {
		return <<<PHP

if ( ! function_exists( 'wponion_icon_[slug]' ) ) {
	/**
	 * Returns Icons List For [name] Library
	 *
	 * @return array
	 */
	function wponion_icon_[slug]() {
		return Helper::read_json_file( WPONION_PATH . 'data/json/icons/[file]', true );
	}
}

PHP;

	}
}
