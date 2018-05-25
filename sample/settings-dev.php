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

function wponion_gif_image( $size = null ) {
	$size = ( null === $size ) ? wponion_s3_size() : $size;
	return wponion_s3( $size . '/' . rand( 1, 3 ) . '.gif' );
}

function wponion_jpg_image( $size = null ) {
	$size = ( null === $size ) ? wponion_s3_size() : $size;
	return wponion_s3( $size . '/' . rand( 1, 20 ) . '.jpg' );
}

function wponion_s3_size() {
	$image = array( '75', '100', '250', '500' );
	$rand  = rand( 0, 3 );
	return ( isset( $image[ $rand ] ) ) ? $image[ $rand ] : $image[0];
}

function wponion_s3( $ex ) {
	return 'http://s3.wponion.com/placeholder/' . $ex;
}

function wponion_image_select_options( $prefix = '', $image_size = '75', $hover_size = '100', $type = 'jpg' ) {
	$callback = ( 'jpg' === $type ) ? 'wponion_jpg_image' : 'wponion_gif_image';
	return array(
		$prefix . '_image1' => $callback( $image_size ),
		$prefix . '_image2' => array(
			'label'   => $callback( $image_size ),
			'tooltip' => array( 'image' => $callback( $image_size ) ),
		),
		$prefix . '_image3' => $callback( $image_size ),
		$prefix . '_image4' => array(
			'label'   => $callback( $image_size ),
			'tooltip' => array( 'image' => $callback( $image_size ) ),
		),
	);
}

function wpongpo( $prefix = '' ) {
	return array(
		$prefix . '_op1'  => 'Option1',
		$prefix . '_op2'  => array(
			'label'   => 'Tooltip With GIF Image',
			'tooltip' => array( 'image' => wponion_gif_image() ),
		),
		$prefix . '_op21' => array(
			'label'   => 'Tooltip With JPG Image',
			'tooltip' => array( 'image' => wponion_jpg_image() ),
		),
		$prefix . '_op3'  => 'Option3',
		$prefix . '_op4'  => array(
			'attributes' => array( 'o' => 'a' ),
			'label'      => 'Option4',
			'tooltip'    => 'if this is <strong>' . rand( 1, 99999 ) . '</strong> then all data will be deleted',
		),
	);
}

$ops  = wpongpo();
$opgs = array(
	'Group1' => wpongpo( 'group1' ),
	'Group2' => wpongpo( 'group2' ),
	'Group3' => wpongpo( 'group3' ),
	'Group4' => wpongpo( 'group4' ),
);

/*
$ins = new WPOnion_Settings( array(
	'extra_css'       => array( 'plugin - css - 1' ),
	'extra_js'        => array( 'plugin - js - 1' ),
	'option_name'     => '_wpboilerplate_settings',
	'template_path'   => false,
	'is_single_page'  => true,
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

$ins->page( 'Page1' )
	->section( 'Section1' )
	->text( 'text_field', 'Textfield' )
	->notice( 'Sample Error Notice', 'danger' )
	->textarea( 'textarea', 'Textarea' )
	->switch( 'simple_switch', 'Switcher' )
	->notice( 'Sample Error Notice', 'success' )
	->checkbox( 'checbox', 'Simple Checkbox', 'Are you Sure ?' )
	->checkbox( 'checkbox_options', 'Checkbox Options', $ops )
	->heading( 'Sample Heading' )
	->checkbox( 'checkbox_group', 'Checkbox Groups', $opgs )
	->radio( 'radio_options', 'radio Options', $ops )
	->radio( 'radio_group', 'radio Groups', $opgs )
	->subheading( 'Sample Subheading' )
	->select( 'selectbox', 'Selectbox', $ops )
	->select( 'selectbox_group', 'Selectbox Group', $opgs )
	->multi_select( 'select_multi', 'Selectbox Multiple', $ops )
	->multi_select( 'select_multi_group', 'Selectbox Multiple Group', $opgs )
	->wp_link( 'wp_link', 'Simple WP Links' )
	->key_value( 'key_value', 'Key Value' )
	->image_select( 'image_select', 'Image Select', wponion_image_select_options( 'simple', '100', '200', 'jpg' ) )
	->image_select( 'image_select_group', 'Image Select Group', array(
		__( 'Header Layout' ) => wponion_image_select_options( 'header', '100', '200', 'jpg' ),
		__( 'Footer Layout' ) => wponion_image_select_options( 'footer', '100', '200', 'jpg' ),
	) )
	->image( 'image_field', 'WP Image Select' )
	->gallery( 'image_gallery', 'WP Image Gallery' )
	->icon_picker( 'icon_picker', 'Icon Picker' )
	->font( 'font_picker', 'Font Picker' )
	->add_field( 'accordion', 'simple_accordion', 'Accordion baby', array(
		'fields' => array(
			'text'      => array(
				'id'    => 'acc_text',
				'title' => 'Accordion Text',
				'type'  => 'text',
			),
			'accordion' => array(
				'id'     => 'cep',
				'title'  => 'subacc',
				'type'   => 'accordion',
				'fields' => array(
					'text' => array(
						'id'    => 'acc_atext',
						'title' => 'Accordion Text',
						'type'  => 'text',
					),
				),
			),
		),
	) );

$ins->init();
/*if ( ! is_admin() && ! defined( 'DOING_AJAX' ) ) {
	LoadTime::start();
	var_dump($ins->values());
	var_dump( LoadTime::end() );
	exit;
}*/