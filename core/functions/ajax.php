<?php
defined( 'ABSPATH' ) || exit;

if ( ! function_exists( 'wponion_ajax_action' ) ) {
	/**
	 * @param bool $action
	 *
	 * @return bool|mixed
	 */
	function wponion_ajax_action( $action = false ) {
		if ( false === $action ) {
			return ( isset( $_REQUEST['wponion-ajax'] ) ) ? $_REQUEST['wponion-ajax'] : false;
		}
		return ( isset( $_REQUEST['wponion-ajax'] ) && $action === $_REQUEST['wponion-ajax'] );
	}
}

if ( ! function_exists( 'wponion_get_var' ) ) {
	/**
	 * Getting POST Var
	 *
	 * @param        $var
	 * @param string $default
	 *
	 * @return string
	 */
	function wponion_get_var( $var, $default = '' ) {
		if ( isset( $_POST[ $var ] ) ) {
			return ( wponion_is_array( $_POST[ $var ] ) ) ? $_POST[ $var ] : sanitize_text_field( $_POST[ $var ] );
		}
		if ( isset( $_GET[ $var ] ) ) {
			return ( wponion_is_array( $_GET[ $var ] ) ) ? $_GET[ $var ] : sanitize_text_field( $_GET[ $var ] );
		}
		return $default;
	}
}

if ( ! function_exists( 'wponion_ajax_args' ) ) {
	/**
	 * Generates Default WPOnion Ajax Args.
	 *
	 * @param bool $with_scripts
	 *
	 * @return array
	 */
	function wponion_ajax_args( $with_scripts = false ) {
		$return = array();

		if ( false !== $with_scripts ) {
			do_action( 'wponion/ajax/enqueue_assets' );

			if ( is_array( $with_scripts ) ) {
				foreach ( $with_scripts as $asset ) {
					wponion_load_asset( $asset );
				}
			} elseif ( true !== $with_scripts ) {
				wponion_load_asset( $with_scripts );
			}

			$styles_data  = array();
			$scripts_data = array();

			if ( ! empty( wp_styles()->queue ) && is_array( wp_styles()->queue ) ) {
				foreach ( wp_styles()->queue as $handle ) {
					wponion_catch_output( true );
					wp_styles()->do_item( $handle );
					$styles_data[ $handle ] = wponion_catch_output( false );
				}
			}

			if ( ! empty( wp_scripts()->queue ) && is_array( wp_scripts()->queue ) ) {
				foreach ( wp_scripts()->queue as $handle ) {
					wponion_catch_output( true );
					wp_scripts()->do_item( $handle );
					$scripts_data[ $handle ] = wponion_catch_output( false );
				}
			}

			$return['scripts']      = $scripts_data;
			$return['styles']       = $styles_data;
			$return['scripts_html'] = implode( ' ', $scripts_data );
			$return['styles_html']  = implode( ' ', $styles_data );
		}
		$return['localizer'] = wponion_localize()->as_array();
		return array( 'wpo_core' => $return );
	}
}
