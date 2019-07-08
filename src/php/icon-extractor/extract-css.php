<?php

$icon_regs      = '';
$icon_functions = '';

foreach ( $libs['css'] as $framework => $data ) {
	log_msg( 'Extracting - CSS : ' . $framework );
	$file = file_get_contents( $data['src'] );

	if ( ! empty( $file ) ) {
		$result  = array();
		$matches = array();
		preg_match_all( '/(?ims)([a-z0-9\s\,\.\:#_\-@]+)\{([^\}]*)\}/', $file, $matches );

		foreach ( $data['prefix'] as $prefix ) {
			foreach ( $matches[0] as $i => $x ) {
				$selector = trim( $matches[1][ $i ] );
				if ( substr( $selector, 0, strlen( '.' . $prefix ) ) === '.' . $prefix && is_numeric( strpos( $selector, ':' ) ) && is_numeric( strpos( trim( $matches[2][ $i ] ), 'content' ) ) ) {
					$icon = explode( ':', ltrim( $selector, '.' ) );
					if ( ! in_array( $framework, $exclude_prefix, true ) ) {
						$result[] = $prefix . ' ' . $icon[0];
					} else {
						$result[] = $icon[0];
					}
				}
			}
		}

		$slug = ( isset( $data['slug'] ) ) ? $data['slug'] : $framework;
		$slug = str_replace( array( '-', '.', ';', ':', ' ' ), '_', $slug );

		/**
		 * Saves JSON File.
		 */
		save_icon_json( $result, $slug );

		//Single Icon File Save Handler.
		$search               = array( '[last_updated]', '[file]', '[name]', '[slug]' );
		$replace              = array( $current_time, $slug . '.json', $data['name'], $slug );
		$icons_functions_code .= str_replace( $search, $replace, $icon_function );

		/**
		 * Single Icon reg Functions.
		 */
		$assets              = ( isset( $data['assets'] ) ) ? $data['assets'] : $framework;
		$assets              = ( is_array( $assets ) ) ? var_export_strip_array_keys( $assets ) : "'$assets'";
		$prefix              = ( isset( $data['prefix'] ) ) ? $data['prefix'] : '';
		$prefix              = ( is_array( $prefix ) ) ? var_export_strip_array_keys( $prefix ) : "'$prefix'";
		$search              = array( '[name]', '[slug]', '[assets]', '[css_prefix]' );
		$replace             = array( $data['name'], $slug, $assets, $prefix );
		$icons_register_code .= str_replace( $search, $replace, $icon_register );
		//log_msg( 'Extracting Finished - CSS : ' . $framework );
	} else {
		log_msg( 'Extracting  Failed - CSS : ' . $framework );
	}
}
