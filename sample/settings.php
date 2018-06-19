<?php
/**
 *
 * Initial version created 22-05-2018 / 10:37 AM
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
	die;
}

require_once 'field_arr.php';

$ins = wponion_settings( array(
	'extra_css'       => array( 'plugin-css-1' ),
	'extra_js'        => array( 'plugin-js-1' ),
	'option_name'     => '_wpboilerplate_settings',
	'template_path'   => false,
	'is_single_page'  => 'submenu',
	'menu'            => array(
		'type'       => 'parent',
		'title'      => 'WP Onion',
		'capability' => 'manage_options',
		'slug'       => 'wponion',
		'submenus'   => true,
	),
	'theme'           => 'wp',
	'plugin_id'       => 'boilerplate',
	'framework_title' => ' <span class="dashicons dashicons-admin-generic"></span > The Loading Bar',
	'framework_desc'  => 'These are the settings for your website loading screen . Note that the loading screen will only show up if your page has images( because if you dont have any images then your page will load fast)',
) );

$ins->page( 'Core Fields', 'core_fields' )
	->section( 'Text Field', 'text' )
	->merge_fields( $wponion_text_options );

$ins->section( 'Textarea', 'textarea' )
	->merge_fields( $wponion_textarea );

$ins->section( 'Checkbox', 'checkbox' )
	->merge_fields( $wponion_checkbox );


$ins->section( 'Radio', 'radio' )
	->merge_fields( $wponion_radio );

$ins->section( 'Color Palette', 'color-palette' )
	->merge_fields( $wponion_color_palette );

$ins->section( 'Color Picker', 'color_picker' )
	->merge_fields( $wponion_color_picker );

$ins->section( 'Font Picker', 'font_picker' )
	->merge_fields( $wponion_font_picker );

$ins->init();

require_once 'customizer.php';
require_once 'metabox.php';