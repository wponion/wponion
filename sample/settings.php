<?php
/**
 *
 * Initial version created 05-05-2018 / 04:37 PM
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
$options = array(
	array(
		'name'   => 'page1',
		'title'  => __( 'Simple Tab' ),
		'fields' => array( array() ),
	),
	array(
		'name'   => 'page2',
		'title'  => __( 'Tab With Icon' ),
		'icon'   => 'dashicons dashicons-menu',
		'fields' => array( array() ),
	),
	array(
		'name'       => 'page3',
		'title'      => __( 'Custom Query Args' ),
		'query_args' => array( 'custom-query' => 'hello' ),
		'fields'     => array( array() ),
	),
	array(
		'name'  => 'page4',
		'title' => __( 'Custom Page Link' ),
		'href'  => 'http://google.com',
	),
	array(
		'name'       => 'page5',
		'title'      => __( 'Custom Attributes' ),
		'attributes' => array( 'class' => 'bg-success' ),
		'fields'     => array( array() ),
	),
	array(
		'name'     => 'page6',
		'title'    => __( 'Custom Callback' ),
		'callback' => 'yourcallbackhere',
	),

);


new WPOnion_Settings( $options, array(
	'menu'      => array(
		'type'     => 'parent',
		'title'    => 'WP Onion',
		'slug'     => 'wponion',
		'submenus' => true,
	),
	'theme'     => 'wp',
	'plugin_id' => 'boilerplate',
) );

add_action( 'wponion_settings_boilerplate_register_submenu', function ( $slug ) {
	add_submenu_page( $slug, 'Custom Page 1', 'Custom Page1', 'manage_options', 'custompage1', function () {
		echo 'This is from custom page';
	} );
} );