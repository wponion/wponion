<?php
/* Last Updated : 08/07/2019 - 11:34:58:am */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

require_once WPONION_PATH . '/data/icons/dashicons.php';
wponion_add_icon_library( array(
	'name'       => __( 'Dashicons' ),
	'slug'       => 'dashicons',
	'assets'     => 'dashicons',
	'css_prefix' => array( 'dashicons' ),
	'icons'      => 'wponion_icons_dashicons_list',
) )->register();

require_once WPONION_PATH . '/data/icons/icofont.php';
wponion_add_icon_library( array(
	'name'       => __( 'Icofont' ),
	'slug'       => 'icofont',
	'assets'     => 'icofont',
	'css_prefix' => array( 'icofont' ),
	'icons'      => 'wponion_icons_icofont_list',
) )->register();

require_once WPONION_PATH . '/data/icons/fontawesome4.php';
wponion_add_icon_library( array(
	'name'       => __( 'FontAwesome 4' ),
	'slug'       => 'fontawesome4',
	'assets'     => 'fontawesome4',
	'css_prefix' => array( 'fa' ),
	'icons'      => 'wponion_icons_fontawesome4_list',
) )->register();

require_once WPONION_PATH . '/data/icons/foundation.php';
wponion_add_icon_library( array(
	'name'       => __( 'Foundation' ),
	'slug'       => 'foundation',
	'assets'     => 'foundation',
	'css_prefix' => array( 'fi' ),
	'icons'      => 'wponion_icons_foundation_list',
) )->register();

require_once WPONION_PATH . '/data/icons/boxicons.php';
wponion_add_icon_library( array(
	'name'       => __( 'Box Icons' ),
	'slug'       => 'boxicons',
	'assets'     => 'boxicons',
	'css_prefix' => array( 'bx' ),
	'icons'      => 'wponion_icons_boxicons_list',
) )->register();
