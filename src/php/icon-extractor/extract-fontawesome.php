<?php
$fa_groups = array(
	'brands'  => 'Brands',
	'solid'   => 'Solid',
	'regular' => 'Regular',
	'light'   => 'Light',
);
$fa_styles = array(
	'brands'  => 'fab',
	'solid'   => 'fas',
	'regular' => 'far',
	'light'   => 'fal',
);

require_once __DIR__ . '/../../../vendor/mustangostang/spyc/Spyc.php';

foreach ( $libs['yml-fa'] as $framework => $lib ) {
	log_msg( 'Extracting - YML-FA : ' . $framework );
	$file = file_get_contents( $lib['src'] );

	if ( ! empty( $file ) ) {
		$result = array();
		$data   = spyc_load( $file );

		if ( is_array( $data ) ) {
			foreach ( $data as $css => $icon ) {
				$icon_arg          = array_merge( array(
					'title' => false,
					'css'   => false,
					'terms' => array(),
				), array( 'css' => $css ) );
				$icon_arg['title'] = ( ! empty( $icon['label'] ) ) ? $icon['label'] : $css;
				$icon_arg['terms'] = ( ! empty( $icon['search']['terms'] ) ) ? $icon['search']['terms'] : array();
				$icon_arg['terms'] = ( is_array( $icon_arg['terms'] ) ) ? implode( ' ', $icon_arg['terms'] ) : $icon_arg['terms'];
				if ( is_array( $icon['styles'] ) && ! empty( $icon['styles'] ) ) {
					foreach ( $icon['styles'] as $style ) {
						if ( isset( $fa_styles[ $style ] ) ) {
							$_ico = $icon_arg;
							$key  = $fa_styles[ $style ] . ' fa-' . $_ico['css'];
							unset( $_ico['css'] );
							if ( ! isset( $result[ $fa_groups[ $style ] ] ) ) {
								$result[ $fa_groups[ $style ] ] = array();
							}
							$c = array_filter( $_ico );

							if ( count( $c ) === 1 ) {
								$result[ $fa_groups[ $style ] ][ $key ] = ( isset( $c['title'] ) ) ? $c['title'] : $key;
							} else {
								$result[ $fa_groups[ $style ] ][ $key ] = $c;
							}
						}
					}
				}
			}
		}

		$slug = ( isset( $lib['slug'] ) ) ? $lib['slug'] : $framework;
		$slug = str_replace( array( '-', '.', ';', ':', ' ' ), '_', $slug );

		/**
		 * Saves JSON File.
		 */
		save_icon_json( $result, $slug );

		//Single Icon File Save Handler.
		$search               = array( '[last_updated]', '[file]', '[name]', '[slug]' );
		$replace              = array( $current_time, $slug . '.json', $lib['name'], $slug );
		$icons_functions_code .= str_replace( $search, $replace, $icon_function );

		/**
		 * Single Icon reg Functions.
		 */
		$assets              = ( isset( $lib['assets'] ) ) ? $lib['assets'] : $framework;
		$assets              = ( is_array( $assets ) ) ? var_export_strip_array_keys( $assets ) : "'$assets'";
		$prefix              = ( isset( $lib['prefix'] ) ) ? $lib['prefix'] : '';
		$prefix              = ( is_array( $prefix ) ) ? var_export_strip_array_keys( $prefix ) : "'$prefix'";
		$search              = array( '[name]', '[slug]', '[assets]', '[css_prefix]' );
		$replace             = array( $lib['name'], $slug, $assets, $prefix );
		$icons_register_code .= str_replace( $search, $replace, $icon_register );
	} else {
		log_msg( 'Extracting Failed - YML-FA : ' . $framework );
	}
}
