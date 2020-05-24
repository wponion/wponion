<?php

use WPOnion\Localize_API;

defined( 'ABSPATH' ) || exit;

if ( ! function_exists( 'wponion_load_core_assets' ) ) {
	/**
	 * Loads More assets and also with core.
	 *
	 * @param array $extra
	 */
	function wponion_load_core_assets( $extra = array() ) {
		wponion_load_asset( 'wponion-core' );
		wponion_load_asset( $extra );
	}
}

if ( ! function_exists( 'wponion_load_asset' ) ) {
	/**
	 * load Framework Assets.
	 *
	 * @param string|array|callable $key
	 * @param mixed                 $callback_arguments
	 *
	 * @return bool
	 */
	function wponion_load_asset( $key = '', ...$callback_arguments ) {
		if ( empty( $key ) ) {
			return false;
		}
		if ( is_string( $key ) ) {
			$has_style  = ( wp_style_is( $key, 'registered' ) && false === wp_style_is( $key ) );
			$has_script = ( wp_script_is( $key, 'registered' ) && false === wp_script_is( $key ) );
			if ( $has_style && $has_script ) {
				wp_enqueue_style( $key );
				wp_enqueue_script( $key );
				return true;
			} elseif ( $has_script ) {
				wp_enqueue_script( $key );
				return true;
			} elseif ( $has_style ) {
				wp_enqueue_style( $key );
				return true;
			}
			if ( wponion_is_callable( $key ) && ( ! wp_style_is( $key, 'registered' ) || ! wp_script_is( $key, 'registered' ) ) ) {
				return wponion_callback( $key, $callback_arguments );
			}
		} elseif ( wponion_is_array( $key ) && wponion_is_callable( $key ) ) {
			return wponion_callback( $key, $callback_arguments );
		} elseif ( wponion_is_array( $key ) ) {
			foreach ( $key as $call ) {
				wponion_load_asset( $call );
			}
			return true;
		}
		return false;
	}
}

if ( ! function_exists( 'wponion_localize' ) ) {
	/**
	 * Returns an active instance of WPOnion_Localize_API.
	 *
	 * @return \WPOnion\Localize_API
	 */
	function wponion_localize() {
		$instance = wponion_core_registry( 'localizer-api' );
		return ( ! wponion_is_instance( $instance, 'localizer' ) ) ? wponion_core_registry( new Localize_API(), 'localizer-api' ) : $instance;
	}
}

if ( ! function_exists( 'wponion_layouts' ) ) {
	/**
	 * @param        $type
	 * @param string $size
	 * @param array  $exclude
	 *
	 * @return array|bool
	 */
	function wponion_layouts( $type, $size = '125', $exclude = array() ) {
		$options = wponion_layouts_field_option( $type, $size, $exclude );
		if ( ! empty( $options ) ) {
			foreach ( $options as $id => $info ) {
				$options[ $id ] = $info['image'];
			}
		}
		return $options;
	}
}

if ( ! function_exists( 'wponion_layouts_field_option' ) ) {
	/**
	 * Returns All Images Realted To The Given Layouts.
	 *
	 * @param        $type . Layout Type
	 * @param string $size . Image Size
	 * @param array  $exclude . Excluded Images
	 *
	 * @return bool|mixed
	 */
	function wponion_layouts_field_option( $type, $size = '125', $exclude = array() ) {
		if ( ! in_array( $size, array( '75', '100', '125' ), true ) ) {
			return false;
		}
		$url   = wponion()->assets( 'img/layouts/' . $size . '/' . strtolower( $type ) . '/' );
		$types = array(
			'body'    => array(
				'boxed'      => array(
					'tooltip' => __( 'Boxed', 'wponion' ),
					'label'   => __( 'Boxed', 'wponion' ),
					'image'   => $url . 'boxed.png',
				),
				'full-width' => array(
					'tooltip' => __( 'Full Width', 'wponion' ),
					'label'   => __( 'Full Width', 'wponion' ),
					'image'   => $url . 'full-width.png',
				),
			),
			'header'  => array(
				'fullscreen-header'     => array(
					'label'   => __( 'Fullscreen Header', 'wponion' ),
					'tooltip' => __( 'Fullscreen Header', 'wponion' ),
					'image'   => $url . 'fullscreen-header.png',
				),
				'logo-center-header'    => array(
					'label'   => __( 'Logo Center Header', 'wponion' ),
					'tooltip' => __( 'Logo Center Header', 'wponion' ),
					'image'   => $url . 'logo-center-header.png',
				),
				'logo-left-header'      => array(
					'label'   => __( 'Logo Left Header', 'wponion' ),
					'tooltip' => __( 'Logo Left Header', 'wponion' ),
					'image'   => $url . 'logo-left-header.png',
				),
				'logo-right-header'     => array(
					'label'   => __( 'Logo Right Header', 'wponion' ),
					'tooltip' => __( 'Logo Right Header', 'wponion' ),
					'image'   => $url . 'logo-right-header.png',
				),
				'overlay-header'        => array(
					'label'   => __( 'Overlay Header', 'wponion' ),
					'tooltip' => __( 'Overlay Header', 'wponion' ),
					'image'   => $url . 'overlay-header.png',
				),
				'side-header-left'      => array(
					'label'   => __( 'Side Header Left', 'wponion' ),
					'tooltip' => __( 'Side Header Left', 'wponion' ),
					'image'   => $url . 'side-header-left.png',
				),
				'side-header-right'     => array(
					'label'   => __( 'Side Header Right', 'wponion' ),
					'tooltip' => __( 'Side Header Right', 'wponion' ),
					'image'   => $url . 'side-header-right.png',
				),
				'slideout-left-header'  => array(
					'label'   => __( 'Slideout Left Header', 'wponion' ),
					'tooltip' => __( 'Slideout Left Header', 'wponion' ),
					'image'   => $url . 'slideout-left-header.png',
				),
				'slideout-right-header' => array(
					'label'   => __( 'Slideout Right Header', 'wponion' ),
					'tooltip' => __( 'Slideout Right Header', 'wponion' ),
					'image'   => $url . 'slideout-right-header.png',
				),
			),
			'sidebar' => array(
				'dual-sidebar'       => array(
					'label'   => __( 'Dual Sidebar', 'wponion' ),
					'tooltip' => __( 'Dual Sidebar', 'wponion' ),
					'image'   => $url . 'dual-sidebar.png',
				),
				'dual-sidebar-left'  => array(
					'label'   => __( 'Dual Sidebar Left', 'wponion' ),
					'tooltip' => __( 'Dual Sidebar Left', 'wponion' ),
					'image'   => $url . 'dual-sidebar-left.png',
				),
				'dual-sidebar-right' => array(
					'label'   => __( 'Dual Sidebar Right', 'wponion' ),
					'tooltip' => __( 'Dual Sidebar Right', 'wponion' ),
					'image'   => $url . 'dual-sidebar-right.png',
				),
				'left-sidebar'       => array(
					'label'   => __( 'Left Sidebar', 'wponion' ),
					'tooltip' => __( 'Left Sidebar', 'wponion' ),
					'image'   => $url . 'left-sidebar.png',
				),
				'right-sidebar'      => array(
					'label'   => __( 'Right Sidebar', 'wponion' ),
					'tooltip' => __( 'Right Sidebar', 'wponion' ),
					'image'   => $url . 'right-sidebar.png',
				),
			),
		);

		if ( isset( $types[ $type ] ) ) {
			if ( ! empty( $exclude ) ) {
				foreach ( $exclude as $id ) {
					unset( $types[ $type ][ $id ] );
				}
			}
			return $types[ $type ];
		}
		return false;
	}
}

if ( ! function_exists( 'wponion_js_obj_name' ) ) {
	/**
	 * Returns a quniue js key.
	 *
	 * @param string $prefix
	 * @param string $surfix
	 * @param string $inner_content
	 *
	 * @return string
	 */
	function wponion_js_obj_name( $prefix = '', $surfix = '', $inner_content = '' ) {
		return $prefix . wponion_hash_string( $inner_content ) . $surfix;
	}
}

if ( ! function_exists( 'wponion_js_vars' ) ) {
	/**
	 * Converts PHP Array into JS JSON String with script tag and returns it.
	 *
	 * @param      $object_name
	 * @param      $l10n
	 * @param bool $with_script_tag
	 *
	 * @return string
	 */
	function wponion_js_vars( $object_name, $l10n, $with_script_tag = true ) {
		foreach ( (array) $l10n as $key => $value ) {
			if ( ! is_scalar( $value ) ) {
				continue;
			}
			$l10n[ $key ] = html_entity_decode( (string) $value, ENT_QUOTES, 'UTF-8' );
		}
		$l10n   = wp_json_encode( $l10n );
		$script = ( ! empty( $object_name ) ) ? "var ${object_name} = ${l10n};" : $l10n;

		if ( ! empty( $after ) ) {
			$script .= "\n$after;";
		}
		if ( $with_script_tag ) {
			$h = "<script type='text/javascript'>\n /* <![CDATA[ */\n";
			$h = $h . " $script\n";
			$h = $h . " /* ]]> */\n </script>\n";
			return $h;
		}
		return $script;
	}
}

