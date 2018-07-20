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

global $wpof;

$wpof = array();

function wponion_card_img() {
	return 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1644519df77%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1644519df77%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22107.18333435058594%22%20y%3D%2296.3%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E';
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

function wponion__image_select_options( $prefix = '', $image_size = '75', $type = 'jpg' ) {
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

$a = array(
	'type'          => 'icon_picker',
	'id'            => '',
	'title'         => '',
	'allowed_icons' => array( '', 'dashicons', 'typicons' ),
);

$wpof['all_field'] = wponion_builder()
	->text( 'all_textfield', 'Text Field' )
	->text( 'all_textfield_prefix', 'Text Field Prefix', array( 'prefix' => ' USD', 'surfix' => '$' ) )
	->textarea( 'all_textarea', 'Textarea' )
	->checkbox( 'all_checkbox_simple', 'Checkbox Simple', 'Are you sure ?' )
	->checkbox( 'all_checkbox_list', 'Checkbox list', wponion__options( false, 3 ) )
	->radio( 'all_radio_list', 'Radio list', wponion__options( false, 3 ) )
	->select( 'all_select_list', 'Select List', wponion__options( false, 5 ) )
	->select( 'all_select_list_multiple', 'Select List Multiple', wponion__options( false, 5 ) )
	->multipe()
	->color_palette( 'all_checkbox_palette_1', 'Checkbox Palette', \WPOnion\Helper::get_material_design_colors() )
	->color_palette( 'all_radio_palette_1', 'Radio Palette', \WPOnion\Helper::get_material_design_colors(), '30', 'radio' )
	->color_picker( 'all_color_picker', 'Color Picker', false )
	->font_picker( 'all_font_picker', 'Font Picker' )
	->key_value( 'all_key_value', 'Key Value' )
	->icon_picker( 'all_icon_picker', 'Icon Picker', true )
	->image( 'all_image_picker', 'Image Picker' )
	->gallery( 'all_image_gallery', 'Gallery' )
	->wp_link( 'all_wp_link', 'WP Links' );


$wpof['text'] = wponion_builder()
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
		'validate'  => 'wponion_required_value',
	) )
	->text( 'textfield_description', 'Text Field With Desc', array(
		'dependency' => array( 'textfield1', '!=', 'Hello' ),
	) )
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

$wpof['textarea'] = wponion_builder()
	->textarea( 'textarea', 'Textarea' )
	->textarea( 'textarea_1', 'Textarea With Desc' )
	->desc( 'Description In Title' )
	->desc( 'Description in Field', true )
	->textarea( 'textarea_2', 'Textarea With Style' )
	->style( 'border:1px solid red;' );

$wpof['checkbox'] = wponion_builder()
	->checkbox( 'checkbox_simple', 'Checkbox Simple', 'Are you sure ?', array( 'hide' => 'downloadable' ) )
	->checkbox( 'checkbox_list', 'Checkbox list', wponion__options( false, 3 ) )
	->desc( 'Simple Description in Title' )
	->checkbox( 'checkbox_with_pages', 'Checkbox With Pages', 'pages', array(
		'query_args' => array(
			'sort_order'  => 'desc',
			'sort_column' => 'post_title',
		),
	) )
	->checkbox( 'checkbox_long_list', 'Checkbox Long list', wponion__options( false, 15 ) )
	->desc( ' A Very long description about this field and its options in the fields side.', true )
	->checkbox( 'checkbox_more_features', 'Checkbox More Features', wponion__options( false, 2, true ) )
	->checkbox( 'checkbox_groups', 'Checkbox With Groups', array(
		'Group 1' => wponion__options( 'group1', 3 ),
		'Group 2' => wponion__options_extra( 'group2' ),
		'Group 3' => wponion__options( 'group3', 3 ),
	) );

$wpof['radio'] = wponion_builder()
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

$wpof['select'] = wponion_builder()
	->select( 'select_list', 'Select List', wponion__options( false, 5 ) )
	->select( 'select_list_multiple', 'Select List Multiple', wponion__options( false, 5 ) )
	->select( 'select_with_pages', 'select With Pages', 'pages', array(
		'query_args' => array(
			'sort_order'  => 'desc',
			'sort_column' => 'post_title',
		),
	) )
	->multipe()
	->select( 'select_list_group', 'Select List Group', array(
		'Group 1' => wponion__options( 'group1', 5 ),
		'Group 2' => wponion__options( 'group2', 5 ),
		'Group 4' => wponion__options( 'group3', 5 ),
	) )
	->select( 'select_list_multiple_group', 'Select List Multi Group', array(
		'Group 1' => wponion__options( 'group1', 5 ),
		'Group 2' => wponion__options( 'group2', 5 ),
		'Group 4' => wponion__options( 'group3', 5 ),
	) )
	->multipe();

$wpof['select_advanced'] = wponion_builder()
	->subheading( 'Select2 Framework' )
	->select( 'select_select2', 'Select List (Select2)', wponion__options( false, 5 ), array(
		'select2' => true,
		'style'   => 'width:400px',
	) )
	->select( 'select_select2_multiple', 'Select List Multiple (Select2)', wponion__options( false, 5 ), array(
		'select2'  => true,
		'multiple' => true,
		'style'    => 'width:400px',
	) )
	->select( 'select_select2_theme', 'Select List (Select2) Theme', wponion__options( false, 5 ), array(
		'select2' => array( 'theme' => 'classic' ),
		'style'   => 'width:400px',
	) )
	->subheading( 'Chosen Framework' )
	->select( 'select_chosen', 'Select List (Chosen)', wponion__options( false, 5 ), array(
		'chosen' => true,
		'style'  => 'width:400px',
	) )
	->select( 'select_chosen_multiple', 'Select List Multiple (Chosen)', wponion__options( false, 5 ), array(
		'chosen'   => true,
		'multiple' => true,
		'style'    => 'width:400px',
	) )
	->subheading( 'Selectize' )
	->select( 'select_selectize', 'Select List (Selectize)', wponion__options( false, 5 ), array(
		'selectize' => true,
		'style'     => 'width:400px',
	) )
	->select( 'select_selectize_multiple', 'Select List Multiple (Selectize)', wponion__options( false, 5 ), array(
		'selectize' => true,
		'multiple'  => true,
		'style'     => 'width:400px',
	) );

$wpof['color_palette'] = wponion_builder()
	->color_palette( 'checkbox_palette_1', 'Checkbox Palette', \WPOnion\Helper::get_material_design_colors() )
	->color_palette( 'radio_palette_1', 'Radio Palette', \WPOnion\Helper::get_material_design_colors(), '30', 'radio' )
	->color_palette( 'checkbox_palette_2', 'Checkbox Palette Square', \WPOnion\Helper::get_material_design_colors( 'red' ), 25, 'checkbox', 'sqare' )
	->color_palette( 'radio_palette_2', 'Radio Palette Square', \WPOnion\Helper::get_material_design_colors( 'pink' ), 25, 'radio', 'sqare' );

$wpof['color_picker'] = wponion_builder()
	->color_picker( 'color_picker', 'Color Picker', false )
	->color_picker( 'color_picker2', 'Color Picker 2', true );

$wpof['font_picker'] = wponion_builder()
	->font_picker( 'font_picker', 'Font Picker' )
	->font_picker( 'font_picker_select2', 'Font Picker Select2', array(
		'select2' => true,
		'style'   => 'width:200px;',
	) )
	->font_picker( 'font_picker_chosen', 'Font Picker Chosen', array(
		'chosen' => true,
		'style'  => 'width:200px;',
	) );

$wpof['images'] = wponion_builder()
	->image( 'image_picker', 'Image Picker' )
	->gallery( 'image_gallery', 'Gallery' );

$wpof['image_select'] = wponion_builder()
	->image_select( 'image_select_checkbox', 'Image Select (Checkbox)', wponion__image_select_options() )
	->image_select( 'image_select_radio', 'Image Select (Radio)', wponion__image_select_options(), 'radio' );

$wpof['key_value'] = wponion_builder()
	->key_value( 'key_value', 'Key Value' )
	->key_value( 'key_value_custom_config', 'Key Value Customized', array(
		'key_input'     => 'USER ID',
		'value_input'   => 'PASSWORD',
		'add_button'    => '+',
		'remove_button' => '(-)',
	) );

$wpof['icon_picker'] = wponion_builder()
	->icon_picker( 'icon_picker', 'Icon Picker', true )
	->icon_picker( 'icon_picker_2', 'Icon Picker2', false );

$wpof['userinterface'] = wponion_builder()
	->heading( 'This is a simple Big Heading' )
	->notice_success( 'Here is a success notice' )
	->subheading( 'This is a sub heading' )
	->notice_danger( 'Danger Notice' )
	->notice_dark( 'Dark Notice' )
	->notice_info( 'Info Notice' )
	->notice_light( 'Light Notice' )
	->notice_secondary( 'Secondary Notice' )
	->notice_warning( 'Warning Notice' )
	->notice_primary( 'Primary Notice' );

$wpof['wp_links'] = wponion_builder()->wp_link( 'wp_link', 'WP Links' );

$wpof['fieldset'] = wponion_builder()
	->fieldset( 'fieldset_1', 'FieldSet', wponion_builder()
		->merge_fields( $wpof['textarea'] )
		->merge_fields( $wpof['text'] ) )
	->fieldset( 'all_fields_set', 'All Fields', $wpof['all_field']->get() );

$wpof['accordion'] = wponion_builder()
	->accordion( 'simple_accordion', 'Simple Accordion', wponion_builder()
		->merge_fields( $wpof['textarea'] )
		->merge_fields( $wpof['text'] ) )
	->accordion_title( 'Simple Accordion' )
	->accordion( 'accordion_all_fields', 'Accordion With ALL Fields', $wpof['all_field'] );

$wpof['group'] = wponion_builder()
	->group( 'simple_group', 'Simple Group', wponion_builder()
		->text( 'text_field', 'Text Field' )
		->textarea( 'textarea', 'Textarea' ) )
	->group( 'advanced_group', 'All Fields', $wpof['all_field']->get() );


$wpof['cloneable'] = wponion_builder()->text( 'simple_clone_text', 'Simple Clone Text', array(
	'clone' => true,
) );

$wpof['wp_editor'] = wponion_builder()
	->wp_editor( 'editor1', 'Editor 1' )
	->wp_editor( 'editor2', 'Editor 2', array(
		'media_buttons' => false,
	) )
	->merge_fields( array(
		array(
			'type'  => 'upload',
			'id'    => 'field_upload',
			'title' => 'Upload',
		),
	) );

$wpof['date_picker'] = wponion_builder()
	->date_picker( 'date_picker1', 'Date Picker1' )
	->date_picker( 'date_picker2', 'Date Picker 2', array(), array(
		'range' => true,
	) )
	->date_picker( 'date_picker3', 'Date Picker 3', array(), array(
		'range' => true,
	) );

//$wpof['background'] = array();
$wpof['background'] = wponion_builder()->background( 'background1', 'Background HELP' );

