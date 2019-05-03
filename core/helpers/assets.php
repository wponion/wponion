<?php
/**
 *
 * Initial version created 12-05-2018 / 10:25 AM
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @package
 * @link
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! function_exists( 'wponion_load_core_assets' ) ) {
	/**
	 * Loads More assets and also with core.
	 *
	 * @param array $extra
	 */
	function wponion_load_core_assets( $extra = array() ) {
		wponion_load_asset( 'wponion-core' );

		if ( wponion_is_array( $extra ) ) {
			foreach ( $extra as $slug ) {
				wponion_load_asset( $slug );
			}
		} elseif ( is_string( $extra ) ) {
			wponion_load_asset( $extra );
		}
	}
}

if ( ! function_exists( 'wponion_load_asset' ) ) {
	/**
	 * load Framework Assets.
	 *
	 * @param string $key
	 */
	function wponion_load_asset( $key = '' ) {
		if ( is_string( $key ) ) {
			if ( wp_style_is( $key, 'registered' ) && false === wp_style_is( $key ) ) {
				wp_enqueue_style( $key );
			}

			if ( wp_script_is( $key, 'registered' ) && false === wp_script_is( $key ) ) {
				wp_enqueue_script( $key );
			}
		}
	}
}

if ( ! function_exists( 'wponion_localize' ) ) {
	/**
	 * Returns an active instance of WPOnion_Localize_API.
	 *
	 * @return mixed|\WPOnion\Localize_API
	 */
	function wponion_localize() {
		return wponion_registry( 'wponion-global-localize-api', '\WPOnion\Localize_API' );
	}
}

if ( ! function_exists( 'wponion_layouts' ) ) {
	/**
	 * @param        $type
	 * @param string $size
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
		if ( ! in_array( $size, array( '75', '100', '125', '150', '200' ) ) ) {
			return false;
		}
		$url   = WPONION_URL . 'assets/img/layouts/' . $size . '/' . strtolower( $type ) . '/';
		$types = array(
			'body'    => array(
				'boxed'      => array(
					'tooltip' => __( 'Boxed' ),
					'label'   => __( 'Boxed' ),
					'image'   => $url . 'boxed.png',
				),
				'full-width' => array(
					'tooltip' => __( 'Full Width' ),
					'label'   => __( 'Full Width' ),
					'image'   => $url . 'full-width.png',
				),
			),
			'header'  => array(
				'fullscreen-header'     => array(
					'label'   => __( 'Fullscreen Header' ),
					'tooltip' => __( 'Fullscreen Header' ),
					'image'   => $url . 'fullscreen-header.png',
				),
				'logo-center-header'    => array(
					'label'   => __( 'Logo Center Header' ),
					'tooltip' => __( 'Logo Center Header' ),
					'image'   => $url . 'logo-center-header.png',
				),
				'logo-left-header'      => array(
					'label'   => __( 'Logo Left Header' ),
					'tooltip' => __( 'Logo Left Header' ),
					'image'   => $url . 'logo-left-header.png',
				),
				'logo-right-header'     => array(
					'label'   => __( 'Logo Right Header' ),
					'tooltip' => __( 'Logo Right Header' ),
					'image'   => $url . 'logo-right-header.png',
				),
				'overlay-header'        => array(
					'label'   => __( 'Overlay Header' ),
					'tooltip' => __( 'Overlay Header' ),
					'image'   => $url . 'overlay-header.png',
				),
				'side-header-left'      => array(
					'label'   => __( 'Side Header Left' ),
					'tooltip' => __( 'Side Header Left' ),
					'image'   => $url . 'side-header-left.png',
				),
				'side-header-right'     => array(
					'label'   => __( 'Side Header Right' ),
					'tooltip' => __( 'Side Header Right' ),
					'image'   => $url . 'side-header-right.png',
				),
				'slideout-left-header'  => array(
					'label'   => __( 'Slideout Left Header' ),
					'tooltip' => __( 'Slideout Left Header' ),
					'image'   => $url . 'slideout-left-header.png',
				),
				'slideout-right-header' => array(
					'label'   => __( 'Slideout Right Header' ),
					'tooltip' => __( 'Slideout Right Header' ),
					'image'   => $url . 'slideout-right-header.png',
				),
			),
			'sidebar' => array(
				'dual-sidebar'       => array(
					'label'   => __( 'Dual Sidebar' ),
					'tooltip' => __( 'Dual Sidebar' ),
					'image'   => $url . 'dual-sidebar.png',
				),
				'dual-sidebar-left'  => array(
					'label'   => __( 'Dual Sidebar Left' ),
					'tooltip' => __( 'Dual Sidebar Left' ),
					'image'   => $url . 'dual-sidebar-left.png',
				),
				'dual-sidebar-right' => array(
					'label'   => __( 'Dual Sidebar Right' ),
					'tooltip' => __( 'Dual Sidebar Right' ),
					'image'   => $url . 'dual-sidebar-right.png',
				),
				'left-sidebar'       => array(
					'label'   => __( 'Left Sidebar' ),
					'tooltip' => __( 'Left Sidebar' ),
					'image'   => $url . 'left-sidebar.png',
				),
				'right-sidebar'      => array(
					'label'   => __( 'Right Sidebar' ),
					'tooltip' => __( 'Right Sidebar' ),
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
