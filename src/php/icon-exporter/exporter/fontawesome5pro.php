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
				self::$result = self::extract_icons( $icons );

				foreach ( self::$result as $group => $icons ) {
					foreach ( $icons as $icon => $ico ) {
						if ( isset( $fa5[ $group ][ $icon ] ) ) {
							unset( self::$result[ $group ][ $icon ] );
						}
					}
					if ( empty( array_filter( self::$result[ $group ] ) ) ) {
						unset( self::$result[ $group ] );
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
				foreach ( self::$groups as $group ) {
					if ( isset( $fa5[ $group ] ) ) {
						$free[] = '--- ' . $group . ' : ' . count( $fa5[ $group ] );
					}

					if ( isset( self::$result [ $group ] ) ) {
						$pro[] = '--- ' . $group . ' : ' . count( self::$result[ $group ] );
					}
				}
				wpo_log( '-- Fontawesome Free Stats : ' );
				wpo_log( implode( PHP_EOL, $free ) );

				wpo_log( '-- Fontawesome Pro Stats : ' );
				wpo_log( implode( PHP_EOL, $pro ) );
			}

			$slug = self::slug( $framework, $data );
			self::save_json( $slug, self::$result );
			self::icon_register_function( $slug, $data, $framework );
			self::icon_callback_function( $slug, $data );
		} else {
			wpo_log( 'Failed - Exporting : ' . $framework );
		}
	}
}

FontAwesome5pro::init();
