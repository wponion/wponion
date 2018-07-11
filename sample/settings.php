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

$ins->page( 'Simple Fields', 'core_fields' )
	->section( 'Text Field', 'text' )
	->merge_fields( $wpof['text'] )
	->section( 'Textarea', 'textarea' )
	->merge_fields( $wpof['textarea'] )
	->section( 'Checkbox', 'checkbox' )
	->merge_fields( $wpof['checkbox'] )
	->section( 'Radio', 'radio' )
	->merge_fields( $wpof['radio'] )
	->section( 'Select', 'select' )
	->merge_fields( $wpof['select'] )
	->heading( 'Advanced Select Configs' )
	->merge_fields( $wpof['select_advanced'] )
	->section( 'DatePicker', 'date_picker' )
	->merge_fields( $wpof['date_picker'] );

$ins->page( 'Advanced Fields', 'advanced_fields' )
	->section( 'Color Palette', 'color-palette' )
	->merge_fields( $wpof['color_palette'] )
	->section( 'Color Picker', 'color_picker' )
	->merge_fields( $wpof['color_picker'] )
	->section( 'Font Picker', 'font_picker' )
	->merge_fields( $wpof['font_picker'] )
	->section( 'key Value', 'key_value' )
	->merge_fields( $wpof['key_value'] )
	->section( 'Icon Picker', 'icon_picker' )
	->merge_fields( $wpof['icon_picker'] )
	->section( 'Image Select', 'image_select' )
	->merge_fields( $wpof['image_select'] )
	->section( 'Fieldset', 'fieldset' )
	->merge_fields( $wpof['fieldset'] )
	->section( 'Accordion', 'accordion' )
	->merge_fields( $wpof['accordion'] )
	->section( 'Group', 'group' )
	->merge_fields( $wpof['group'] )
	->section( 'Cloneable', 'clone' )
	->merge_fields( $wpof['cloneable'] )
	->section( 'Tabs', 'tab' )
	->merge_fields( array(
		array(
			'type'     => 'tab',
			'title'    => 'Tabs',
			'sections' => array(
				array(
					'name'   => 'section1',
					'title'  => 'Section 1',
					'fields' => $wpof['text']->get(),
				),
				array(
					'name'   => 'section2',
					'title'  => 'Section 2',
					'fields' => $wpof['select']->get(),
				),
			),
		),
	) );

$ins->page( 'WP Fields', 'wp_fields' )
	->section( 'WP Images', 'wp_image_picker' )
	->merge_fields( $wpof['images'] )
	->section( 'WP Links', 'wp_links_picker' )
	->merge_fields( $wpof['wp_links'] )
	->section( 'WP Editor', 'wp_editor' )
	->merge_fields( $wpof['wp_editor'] );

$ins->page( 'UI Fields', 'ui_fields' )
	->merge_fields( $wpof['userinterface'] );


$ins->init();

require_once 'customizer.php';
require_once 'metabox.php';
require_once 'taxonomy.php';
require_once 'woocommerce.php';
