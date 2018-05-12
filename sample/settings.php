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
/*$options = array(
	array(
		'name'   => 'page1',
		'title'  => __( 'Simple Tab' ),
		'fields' => array(
			array(
				'type'  => 'text',
				'id'    => 'somevalue',
				'title' => 'Simple Text Field.',
				'desc'  => 'The spacer to the section menu as seen to the left (after this section block) is the divide "section". Also the divider below is the divide "field".',
			),

			array(
				'type'       => 'text',
				'id'         => 'somevalue',
				'title'      => 'Simple Text Field.',
				'desc_field' => 'The spacer to the section menu as seen to the left (after this section block) is the divide "section". Also the divider below is the divide "field".',
			),
		),
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
	array(
		'name'     => 'page7',
		'title'    => 'With Sub Menus',
		'sections' => array(
			array(
				'name'   => 'page7-1',
				'title'  => __( 'Submenu 1' ),
				'fields' => array( array() ),
			),

			array(
				'name'   => 'page7-2',
				'title'  => __( 'Submenu 2' ),
				'fields' => array( array() ),
			),

			array(
				'name'   => 'page7-3',
				'title'  => __( 'Submenu 3' ),
				'fields' => array( array() ),
			),

			array(
				'name'   => 'page7-4',
				'title'  => __( 'Submenu 4' ),
				'fields' => array( array() ),
			),
		),
	),

);*/


$settings_instance = new WPOnion_Settings( array(
	'extra_css'     => array( 'plugin-css-1' ),
	'extra_js'      => array( 'plugin-js-1' ),
	'option_name'   => '_wpboilerplate_settings',
	'template_path' => false,
	'menu'          => array(
		'type'       => 'parent',
		'title'      => 'WP Onion',
		'capability' => 'manage_options',
		'icon'       => false, # Or Provide A Actual URL of the icon
		'position'   => false, #set to false to auto set via wp
		'slug'       => 'wponion',
		'submenus'   => true,
	),
	'theme'         => 'wp',
	'plugin_id'     => 'boilerplate',
) );

$settings_instance->add_page( 'page1', 'Page 1' );
$settings_instance->add_field( 'page1', false, array(
	'id'         => 'field1',
	'type'       => 'text',
	'title'      => 'Simple text',
	'help'       => 'SomeHelpText',
	'inputmask'  => '9-a{1,3}9{1,3}',

) );

$settings_instance->add_page( 'page2', 'Page 2' )
	->add_section( 'page2', 'section1', 'Section1' )
	->add_field( 'page2', 'section1', array(
		'title' => 'Some Title',
		'type'  => 'text',
	) );

add_action( 'wponion_settings_boilerplate_register_submenu', function ( $slug ) {
	add_submenu_page( $slug, 'Custom Page 1', 'Custom Page1', 'manage_options', 'custompage1', function () {
		echo 'This is from custom page';
	} );
} );