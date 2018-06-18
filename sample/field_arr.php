<?php
/**
 *
 * Initial version created 14-06-2018 / 03:54 PM
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @package
 * @link
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

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

function wponion__options_extra( $prefix = '' ) {
	return array(
		$prefix . '_tooltipGIF'     => array(
			'label'   => 'Tooltip With GIF Image',
			'tooltip' => array( 'image' => wponion_gif_image() ),
		),
		$prefix . '_tooltipJPG'     => array(
			'label'   => 'Tooltip With JPG Image',
			'tooltip' => array( 'image' => wponion_jpg_image() ),
		),
		$prefix . '_tooltipContent' => array(
			'label'   => 'Option4',
			'tooltip' => 'if this is <strong>' . rand( 1, 99999 ) . '</strong> then all data will be deleted',
		),
	);
}

function wponion__options( $prefix = '', $max_list = 5, $extra = false ) {
	$i      = 1;
	$return = array();
	while ( $i <= $max_list ) {
		$return[ $prefix . 'option' . $i ] = 'Option ' . $i;
		$i++;
	}
	if ( $extra ) {
		return array_merge( $return, wponion__options_extra( $prefix ) );
	}

	return $return;
}


$wponion_text_options = wponion_builder()
	->text( 'textfield1', 'Text Field', array(
		'transport' => 'postMessage',
		'output'    => array(
			array(
				'element'  => 'body',
				'property' => 'color',
			),
			array(
				'element'  => '.my-super-cool-css-class',
				'property' => 'background-color',
			),
		),
	) )
	->text( 'textfield_description', 'Text Field With Desc' )
	->desc( 'Description With Title Side' )
	->text( 'textfield_description_field', 'Text Field With Desc 2' )
	->desc( 'Description With Field Side', true )
	->text( 'textfield_prefix', 'Text Field Prefix', array( 'prefix' => ' USD', 'surfix' => '$' ) )
	->subheading( 'Input Mask Plugin' )
	->text( 'textfield_phone_mask', 'Phone Field Mask', array(
		'inputmask' => array( 'mask' => '(999) 999-9999' ),
	) )
	->text( 'textfield_phone_mask_js', 'InputMask With JS', array(
		'inputmask' => array(
			'mask'       => 'AAA-999',
			'oncomplete' => "function(){ alert('inputmask complete'); }",
		),
	) );

$wponion_textarea = wponion_builder()
	->textarea( 'textarea', 'Textarea' )
	->textarea( 'textarea_1', 'Textarea With Desc' )
	->desc( 'Description In Title' )
	->desc( 'Description in Field', true )
	->textarea( 'textarea_2', 'Textarea With Style' )
	->style( 'border:1px solid red;' );

$wponion_checkbox = wponion_builder()
	->checkbox( 'checkbox_simple', 'Checkbox Simple', 'Are you sure ?' )
	->checkbox( 'checkbox_list', 'Checkbox list', wponion__options( false, 3 ) )
	->desc( 'Simple Description in Title' )
	->checkbox( 'checkbox_long_list', 'Checkbox Long list', wponion__options( false, 15 ) )
	->desc( ' A Very long description about this field and its options in the fields side.', true )
	->checkbox( 'checkbox_more_features', 'Checkbox More Features', wponion__options( false, 2, true ) )
	->checkbox( 'checkbox_groups', 'Checkbox With Groups', array(
		'Group 1' => wponion__options( 'group1', 3 ),
		'Group 2' => wponion__options_extra( 'group2' ),
		'Group 3' => wponion__options( 'group3', 3 ),
	) );

$wponion_radio = wponion_builder()
	->radio( 'radio_list', 'Checkbox list', wponion__options( false, 3 ) )
	->desc( 'Simple Description in Title' )
	->radio( 'radio_long_list', 'Checkbox Long list', wponion__options( false, 2 ) )
	->desc( ' A Very long description about this field and its options in the fields side.', true )
	->radio( 'radio_more_features', 'Checkbox More Features', wponion__options( false, 2, true ) )
	->radio( 'radio_groups', 'Checkbox With Groups', array(
		'Group 1' => wponion__options( 'group1', 3 ),
		'Group 2' => wponion__options_extra( 'group2' ),
		'Group 3' => wponion__options( 'group3', 3 ),
	) );

$wponion_color_palette = wponion_builder()
	->color_palette( 'checkbox_palette_1', 'Checkbox Palette', \WPOnion\Helper::get_material_design_colors() )
	->color_palette( 'radio_palette_1', 'Radio Palette', \WPOnion\Helper::get_material_design_colors(), '30', 'radio' )
	->color_palette( 'checkbox_palette_2', 'Checkbox Palette Square', \WPOnion\Helper::get_material_design_colors( 'red' ), 25, 'checkbox', 'sqare' )
	->color_palette( 'radio_palette_2', 'Radio Palette Square', \WPOnion\Helper::get_material_design_colors( 'pink' ), 25, 'radio', 'sqare' );

$wponion_color_picker = wponion_builder()
	->color_picker( 'color_picker', 'Color Picker', false )
	->color_picker( 'color_picker2', 'Color Picker 2', true );

$wponion_font_picker = wponion_builder()
	->font_picker( 'font_picker', 'Font Picker' )
	->font_picker( 'font_picker_select2', 'Font Picker Select2', array(
		'select2'    => true,
		'attributes' => array( 'style' => 'width:200px;' ),
	) )
	->font_picker( 'font_picker_chosen', 'Font Picker Chosen', array(
		'chosen'     => true,
		'attributes' => array( 'style' => 'width:200px;' ),
	) );

$wponion_images = wponion_builder()
	->image( 'image_picker', 'Image Picker' )
	->gallery( 'image_gallery', 'Gallery' );

$wponion_keyval = wponion_builder()->key_value( 'key_value', 'Key Value' );