<?php

class FontAwesome5pro extends FontAwesome5 {

	public static function init() {
		$framework = 'fontawesome5pro';
		$data      = Icon_Exporter::$libs['fontawesome5pro'];
		$css       = Icon_Exporter::contents( $data['src'] );
		if ( ! empty( $css ) ) {
			wpo_log( 'Exporting : ' . $framework );
			$icons = spyc_load( $css );
			$fa5   = FontAwesome5::$result;
			if ( is_array( $icons ) ) {
				static::$result = static::extract_icons( $icons );

				foreach ( static::$result as $group => $icons ) {
					foreach ( $icons as $icon => $ico ) {
						if ( isset( $fa5[ $group ][ $icon ] ) ) {
							unset( static::$result[ $group ][ $icon ] );
						}
					}
					if ( empty( array_filter( static::$result[ $group ] ) ) ) {
						unset( static::$result[ $group ] );
					}
				}

				/**
				 * Provides Stats
				 */
				$free = array();
				$pro  = array();
				/**
				 * @example Output :
				 *    -- Fontawesome Free Stats :
				 *         --- Brands : 428
				 *         --- Solid : 957
				 *         --- Regular : 152
				 *    -- Fontawesome Pro Stats :
				 *         --- Solid : 690
				 *         --- Regular : 1495
				 *         --- Light : 1647
				 */
				foreach ( static::$groups as $group ) {
					if ( isset( $fa5[ $group ] ) ) {
						$free[] = '--- ' . $group . ' : ' . count( $fa5[ $group ] );
					}

					if ( isset( static::$result [ $group ] ) ) {
						$pro[] = '--- ' . $group . ' : ' . count( static::$result[ $group ] );
					}
				}
				wpo_log( '-- Fontawesome Free Stats : ' );
				wpo_log( implode( PHP_EOL, $free ) );

				wpo_log( '-- Fontawesome Pro Stats : ' );
				wpo_log( implode( PHP_EOL, $pro ) );
			}

			$slug = static::slug( $framework, $data );
			static::save_json( $slug, static::$result );
			static::icon_register_function( $slug, $data, $framework );
			static::icon_callback_function( $slug, $data );
		} else {
			wpo_log( 'Failed - Exporting : ' . $framework );
		}
	}

	public static function icon_callback_code() {
		return <<<PHP

if ( ! function_exists( 'wponion_icon_fontawesome5pro' ) ) {
	/**
	 * Returns Icons List For FontAwesome 5 Pro Library
	 *
	 * @return array
	 */
	function wponion_icon_fontawesome5pro() {
		\$free_fonts = ( function_exists( 'wponion_icon_fontawesome5' ) ) ? wponion_icon_fontawesome5() : array();
		\$paid_fonts = Helper::read_json_file( WPONION_PATH . 'data/json/icons/fontawesome5pro.json', true );

		if ( ! empty( \$free_fonts ) ) {
			foreach ( \$free_fonts as \$group => \$icons ) {
				if ( isset( \$paid_fonts[ \$group ] ) ) {
					\$paid_fonts[ \$group ] = wp_parse_args( \$paid_fonts[ \$group ], \$icons );
				} else {
					\$paid_fonts[ \$group ] = \$icons;
				}
			}
		}
		return \$paid_fonts;
	}
}

PHP;

	}
}

FontAwesome5pro::init();
