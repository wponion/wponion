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

$ins = wponion_settings( array(
	'extra_css'       => array( 'plugin - css - 1' ),
	'extra_js'        => array( 'plugin - js - 1' ),
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

global $major_fields;
$major_fields = $fields = wponion_builder()
	->text( 'text', 'Text Field' )
	->textarea( 'textarea', 'Textarea' )
	->select( 'select', 'Select', $ops, array( 'select2' => true ) )
	->checkbox( 'checkbox', 'Checkbox', $ops )
	->checkbox( 'checkbox_group', 'Checkbox Group', $opgs )
	->radio( 'radio', 'Radio', $ops )
	->radio( 'radio_group', 'Radio Group', $opgs )
	->wp_link( 'wplinks', 'WP Links' )
	->image( 'simple_image', 'Image Select' )
	->gallery( 'image_gallery', 'Image Gallery' )
	->switcher( 'switcher', 'Simple Switcher' )
	->image_select( 'imageSelect', 'Image Select', wponion_image_select_options() )
	->icon_picker( 'iconPicker', 'Icon Picker' )
	->color_picker( 'colorpicker', 'Color Picker' )
	->color_palette( 'pallet', 'Color Palette', \WPOnion\Helper::get_material_design_colors( 'primary' ) )
	->key_value( 'keyvalue', 'Key Value' )
	->font_picker( 'fontpicker', 'FontPicker' );

$ins->page( 'Page1', 'page1', false, array( 'fields' => $fields->get() ) );


$ins->page( 'Advanced Fields', 'page2' )
	->section( 'Fieldset' )
	->card( 'Cards', array(
		array(
			'image'   => 'http://via.placeholder.com/200x200',
			'content' => '<h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>',
		),
		array(
			'image'   => 'http://via.placeholder.com/200x200',
			'content' => '<h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>',
		),
		array(
			'image'   => 'http://via.placeholder.com/200x200',
			'content' => '<h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>',
		),
		array(
			'image'   => 'http://via.placeholder.com/200x200',
			'content' => '<h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>',
		),
		array(
			'image'   => 'http://via.placeholder.com/200x200',
			'content' => '<h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>',
		),
	) )
	->fieldset( 'simplefildset', 'Fieldset', $fields->get() );


$ins->section( 'Accordion', 'section2' )
	->accordion( 'accordion_simple', 'Accordion Simple', wponion_builder()
		->text( 'simple_txt', 'Simple Txt' )
		->textarea( 'textarea', 'Simple TextArea' ) )
	->accordion( 'accordion_nested', 'Accordion Nested', wponion_builder()
		->textarea( 'txt_level0', 'Textarea Level 0' )
		->accordion( 'accordion_nested_1', 'Accordion Nested 1', wponion_builder()
			->textarea( 'txt_level1', 'Textarea Level 1' )
			->accordion( 'accordion_nested_2', 'Accordion Nested 2', wponion_builder()
				->textarea( 'txt_level2', 'Textarea Level 2' )
				->accordion( 'accordion_nested_3', 'Accordion Nested 3', wponion_builder()->textarea( 'txt_level2', 'Textarea Level 2' ) ) ) ) )
	->accordion( 'accordion', 'Accordion With All Fields', $fields->get() );


$ins->init();

if ( ! is_admin() && ! defined( 'DOING_AJAX' ) ) {
	$vals = $ins->values();
	$data = $vals->get( 'gallery' );
	#exit;
}