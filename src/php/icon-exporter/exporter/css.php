<?php

class CSS_Exporter extends Icon_Export_Base {
	public static function match_css( $contents ) {
		$matches = array();
		preg_match_all( '/(?ims)([a-z0-9\s\,\.\:#_\-@]+)\{([^\}]*)\}/', $contents, $matches );
		return $matches;
	}

	public static function init() {
		foreach ( Icon_Exporter::$libs['css'] as $framework => $data ) {
			$css = Icon_Exporter::contents( $data['src'] );
			if ( ! empty( $css ) ) {
				wpo_log( 'Exporting : ' . $framework );
				$result  = array();
				$matches = self::match_css( $css );

				foreach ( $data['prefix'] as $prefix ) {
					foreach ( $matches[0] as $i => $x ) {
						$selector     = trim( $matches[1][ $i ] );
						$is_num_sel   = is_numeric( strpos( $selector, ':' ) );
						$is_num_match = is_numeric( strpos( trim( $matches[2][ $i ] ), 'content' ) );

						if ( substr( $selector, 0, strlen( '.' . $prefix ) ) === '.' . $prefix && $is_num_sel && $is_num_match ) {
							$icon     = explode( ':', ltrim( $selector, '.' ) );
							$result[] = ( ! in_array( $framework, Icon_Exporter::$exclude_css_prefix, true ) ) ? $prefix . ' ' . $icon[0] : $icon[0];
						}
					}
				}

				$slug = self::slug( $framework, $data );
				self::save_json( $slug, $result );
				self::icon_register_function( $slug, $data, $framework );
				self::icon_callback_function( $slug, $data );
			} else {
				wpo_log( 'Failed - Exporting : ' . $framework );
			}
		}
	}
}

CSS_Exporter::init();
