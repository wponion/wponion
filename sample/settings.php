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

function wponion_field_options_group( $prefix = '', $group_count = 2 ) {
	$return = array();
	$i      = 1;
	while ( $i <= $group_count ) {
		$return[ $prefix . ' ' . $i ] = wponion_field_options( $prefix );
		$i++;
	}
	return $return;
}

function wponion_field_options( $prefix = '' ) {
	return array(
		sanitize_title( $prefix ) . '_option1' => $prefix . ' Option 1',
		sanitize_title( $prefix ) . '_option2' => array(
			'label'    => $prefix . ' Option Disabled',
			'disabled' => true,
		),
		sanitize_title( $prefix ) . '_option3' => array(
			'label'      => $prefix . ' Option Custom Style & Attribute',
			'attributes' => array(
				'data-custom-attr' => 'hello',
				'onclick'          => 'alert("Hello")',
				'style'            => 'box-shadow: 2px 2px 4px red;',
			),
		),
		sanitize_title( $prefix ) . '_option4' => array(
			'label'   => $prefix . ' Option With Tooltip',
			'tooltip' => 'Some more details about this option',
		),
		sanitize_title( $prefix ) . '_option5' => array(
			'label'   => $prefix . ' Option With Tooltip and its config.',
			'tooltip' => array(
				'placement' => 'right',
				'content'   => 'I have configured to show in right.',
			),
		),
		sanitize_title( $prefix ) . '_option6' => array(
			'label'   => $prefix . ' Option With image in tooltip.',
			'tooltip' => array(
				'placement' => 'right',
				'content'   => 'I have configured to show in right.',
				'image'     => 'https://wpsf.github.io/s3/placeholder/150x125-4.gif',
			),
		),
	);
}

function wponino_field_notice_types( $notice_type ) {
	return array(
		'type'        => 'notice',
		'notice_type' => $notice_type,
		'content'     => 'This is a <strong>' . $notice_type . '</strong> Bootstrap Notice',
	);
}
/*
$fields_types = array(
	array(
		'title'  => __( 'Text Field' ),
		'name'   => 'textfields',
		'fields' => array(
			array(
				'id'    => 'textbox',
				'type'  => 'text',
				'title' => __( 'Textbox' ),
			),
			array(
				'id'    => 'textbox_desc',
				'desc'  => __( 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' ),
				'type'  => 'text',
				'title' => __( 'Textbox' ),
			),
			array(
				'id'         => 'textbox_desc_field',
				'desc_field' => __( 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' ),
				'type'       => 'text',
				'title'      => __( 'Textbox' ),
			),
			array(
				'id'          => 'textbox_placeholder',
				'desc_field'  => __( 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' ),
				'type'        => 'text',
				'placeholder' => __( 'I am placeholder here' ),
				'title'       => __( 'Textbox With Placeholder' ),
			),
			array(
				'id'          => 'textbox_style',
				'desc_field'  => __( 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' ),
				'type'        => 'text',
				'placeholder' => __( 'I am placeholder here' ),
				'style'       => 'border:1px dashed red;',
				'title'       => __( 'Textbox With Custom Style' ),
			),
			array(
				'type'    => 'subheading',
				'content' => __( 'Field With Inputmask Plugin' ),
			),
			array(
				'id'        => 'textbox_inputmask_phone',
				'inputmask' => array( 'mask' => '(999) 999-9999' ),
				'type'      => 'text',
				'title'     => __( 'Inputmask With Phone' ),
			),
			array(
				'id'        => 'textbox_inputmask_date',
				'inputmask' => array( 'mask' => '99/99/9999', 'placeholder' => 'dd/mm/yyyy' ),
				'type'      => 'text',
				'title'     => __( 'Inputmask With Date' ),
			),
			array(
				'id'        => 'textbox_inputmask_withevent',
				'inputmask' => array(
					'mask'         => '99/99/9999',
					'placeholder'  => 'dd/mm/yyyy',
					'onincomplete' => "function(){ swal({type:'error',title:'Invalid Value Entered Please Enter A Valid Value'}) }",
				),
				'type'      => 'text',
				'title'     => __( 'Triggers an alert on complete' ),
			),
		),
	),
	array(
		'title'  => __( 'Textarea' ),
		'name'   => 'textarea',
		'fields' => array(
			array(
				'type'  => 'textarea',
				'title' => __( 'Textarea' ),
				'id'    => 'textarea',
			),
			array(
				'type'  => 'textarea',
				'title' => __( 'Textarea' ),
				'desc'  => __( 'Textarea with custom COL & ROWS' ),
				'col'   => 5,
				'rows'  => 10,
				'id'    => 'textarea_custom_cols',
			),
			array(
				'type'        => 'textarea',
				'title'       => __( 'Textarea' ),
				'desc'        => __( 'Textarea with Placeholder' ),
				'placeholder' => __( 'Custom Placeholder ' ),
				'id'          => 'textarea_placeholder',
			),
		),
	),
	array(
		'name'   => 'checkbox',
		'title'  => __( 'Checkbox' ),
		'fields' => array(
			array(
				'id'    => 'checkbox_single',
				'title' => 'Simple Checkbox',
				'label' => 'Are you sure ?',
				'type'  => 'checkbox',
			),
			array(
				'id'    => 'checkbox_switch',
				'title' => 'Checkbox Switch',
				'label' => 'Are you sure ?',
				'type'  => 'switch',
			),
			array(
				'id'      => 'checkbox_options',
				'title'   => 'Simple Checkbox Options',
				'options' => wponion_field_options( 'Single' ),
				'type'    => 'checkbox',
			),
			array(
				'id'      => 'checkbox_grouped_options',
				'title'   => 'Checkbox Grouped Options',
				'options' => wponion_field_options_group( 'Single' ),
				'type'    => 'checkbox',
			),
			array(
				'id'      => 'checkbox_large_grouped_options',
				'title'   => 'Checkbox Large Grouped Options',
				'options' => wponion_field_options_group( 'Single', 8 ),
				'type'    => 'checkbox',
			),
		),
	),
	array(
		'name'   => 'radio',
		'title'  => __( 'Radio' ),
		'fields' => array(
			array(
				'id'      => 'radio_options',
				'title'   => 'Simple Radio Options',
				'options' => wponion_field_options( 'Single' ),
				'type'    => 'radio',
			),
			array(
				'id'      => 'radio_grouped_options',
				'title'   => 'Radio Grouped Options',
				'options' => wponion_field_options_group( 'Single' ),
				'type'    => 'radio',
			),
			array(
				'id'      => 'radio_large_grouped_options',
				'title'   => 'Radio Large Grouped Options',
				'options' => wponion_field_options_group( 'Single', 8 ),
				'type'    => 'radio',
			),
		),
	),
	array(
		'name'   => 'select',
		'title'  => 'Select',
		'fields' => array(

			array(
				'title'   => 'Select',
				'type'    => 'select',
				'options' => wponion_field_options( 'select' ),
				'id'      => 'select',
			),
			array(
				'title'   => 'Select Group',
				'type'    => 'select',
				'options' => wponion_field_options_group( 'select' ),
				'id'      => 'select_group',
			),
			array(
				'title'    => 'Select multiple',
				'type'     => 'select',
				'multiple' => true,
				'style'    => 'width:50%;',
				'options'  => wponion_field_options( 'select' ),
				'id'       => 'select_multiple',
			),
			array(
				'title'    => 'Select Group multiple',
				'type'     => 'select',
				'multiple' => true,
				'style'    => 'width:50%;',
				'options'  => wponion_field_options_group( 'select' ),
				'id'       => 'select_group_multiple',
			),

			array(
				'type'    => 'subheading',
				'content' => 'Select2 Framework',
			),
			array(
				'select2' => true,
				'title'   => 'Select',
				'type'    => 'select',
				'options' => wponion_field_options( 'select' ),
				'id'      => 'select2_select',
			),
			array(
				'select2' => true,
				'title'   => 'Select Group',
				'type'    => 'select',
				'options' => wponion_field_options_group( 'select' ),
				'id'      => 'select2_select_group',
			),
			array(
				'select2'  => true,
				'title'    => 'Select multiple',
				'type'     => 'select',
				'multiple' => true,
				'style'    => 'width:50%;',
				'options'  => wponion_field_options( 'select' ),
				'id'       => 'select2_select_multiple',
			),
			array(
				'select2'  => true,
				'title'    => 'Select Group multiple',
				'type'     => 'select',
				'multiple' => true,
				'style'    => 'width:50%;',
				'options'  => wponion_field_options_group( 'select' ),
				'id'       => 'select2_select_group_multiple',
			),
			array(
				'select2' => array( 'theme' => 'classic' ),
				'title'   => 'Select2 With classic theme',
				'type'    => 'select',
				'options' => wponion_field_options( 'select' ),
				'id'      => 'select2_select_arg',
			),
			array(
				'select2'  => array( 'theme' => 'classic' ),
				'title'    => 'Select2 Group Multiple With classic theme',
				'type'     => 'select',
				'multiple' => true,
				'style'    => 'width:50%;',
				'options'  => wponion_field_options_group( 'select' ),
				'id'       => 'select2_select_group_multiple_arg',
			),

			array(
				'type'    => 'subheading',
				'content' => 'Chosen Framework',
			),
			array(
				'chosen'  => true,
				'title'   => 'Select',
				'type'    => 'select',
				'options' => wponion_field_options( 'select' ),
				'id'      => 'chosen_select',
			),
			array(
				'chosen'  => true,
				'title'   => 'Select Group',
				'type'    => 'select',
				'options' => wponion_field_options_group( 'select' ),
				'id'      => 'chosen_select_group',
			),
			array(
				'chosen'   => true,
				'title'    => 'Select multiple',
				'type'     => 'select',
				'multiple' => true,
				'style'    => 'width:50%;',
				'options'  => wponion_field_options( 'select' ),
				'id'       => 'chosen_select_multiple',
			),
			array(
				'chosen'   => true,
				'title'    => 'Select Group multiple',
				'type'     => 'select',
				'multiple' => true,
				'style'    => 'width:50%;',
				'options'  => wponion_field_options_group( 'select' ),
				'id'       => 'chosen_select_group_multiple',
			),


			array(
				'type'    => 'subheading',
				'content' => 'Selectize Framework',
			),
			array(
				'selectize' => true,
				'title'     => 'Select',
				'type'      => 'select',
				'options'   => wponion_field_options( 'select' ),
				'id'        => 'selectize_select',
			),
			array(
				'selectize' => true,
				'title'     => 'Select Group',
				'type'      => 'select',
				'options'   => wponion_field_options_group( 'select' ),
				'id'        => 'selectize_select_group',
			),
			array(
				'selectize' => true,
				'title'     => 'Select multiple',
				'type'      => 'select',
				'multiple'  => true,
				'style'     => 'width:50%;',
				'options'   => wponion_field_options( 'select' ),
				'id'        => 'selectize_select_multiple',
			),
			array(
				'selectize' => true,
				'title'     => 'Select Group multiple',
				'type'      => 'select',
				'multiple'  => true,
				'style'     => 'width:50%;',
				'options'   => wponion_field_options_group( 'select' ),
				'id'        => 'selectize_select_group_multiple',
			),

		),
	),
	array(
		'name'   => 'uifields',
		'title'  => 'UI Fields',
		'fields' => array(
			array(
				'type'    => 'heading',
				'content' => 'This is a big heading',
			),
			wponino_field_notice_types( 'primary' ),
			array(
				'type'    => 'jambo_content',
				'content' => '<h1 class="display-4">Hello, world!</h1>
  <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr class="my-4">
  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>',
			),
			wponino_field_notice_types( 'secondary' ),
			array(
				'type'    => 'subheading',
				'content' => 'This is a big subheading',
			),
			wponino_field_notice_types( 'info' ),
			array(
				'type'    => 'card',
				'title'   => 'Bootstrap Cards',
				'options' => array(
					array(
						'image' => 'http://wpsf.github.io/s3/placeholder/150x125-1.gif',
						'body'  => '<h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>',
					),
					array(
						'image' => 'http://wpsf.github.io/s3/placeholder/150x125-2.gif',
						'body'  => '<h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>',
					),
					array(
						'image' => 'http://wpsf.github.io/s3/placeholder/150x125-3.gif',
						'body'  => '<h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>',
					),
					array(
						'image' => 'http://wpsf.github.io/s3/placeholder/150x125-4.gif',
						'body'  => '<h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>',
					),
					array(
						'image' => 'http://wpsf.github.io/s3/placeholder/150x125-5.gif',
						'body'  => '<h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>',
					),
					array(
						'image' => 'http://wpsf.github.io/s3/placeholder/150x125-1.gif',
						'body'  => '<h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>',
					),
				),
			),
			wponino_field_notice_types( 'success' ),
			array(
				'type'     => 'card',
				'title'    => 'Bootstrap Cards With Custom Columns',
				'card_col' => 'col-3',
				'options'  => array(
					array(
						'image' => 'http://wpsf.github.io/s3/placeholder/150x125-1.gif',
						'body'  => '<h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>',
					),
					array(
						'image' => 'http://wpsf.github.io/s3/placeholder/150x125-2.gif',
						'body'  => '<h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>',
					),
					array(
						'image' => 'http://wpsf.github.io/s3/placeholder/150x125-3.gif',
						'body'  => '<h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>',
					),
					array(
						'image' => 'http://wpsf.github.io/s3/placeholder/150x125-4.gif',
						'body'  => '<h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>',
					),
				),
			),
			wponino_field_notice_types( 'warning' ),
			array(
				'type'    => 'card',
				'options' => array(
					array(
						'image' => 'http://wpsf.github.io/s3/placeholder/150x125-1.gif',
						'body'  => '<h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>',
					),
					array(
						'image' => 'http://wpsf.github.io/s3/placeholder/150x125-2.gif',
						'body'  => '<h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>',
					),
					array(
						'image' => 'http://wpsf.github.io/s3/placeholder/150x125-3.gif',
						'body'  => '<h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>',
					),
					array(
						'image' => 'http://wpsf.github.io/s3/placeholder/150x125-4.gif',
						'body'  => '<h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>',
					),
					array(
						'image' => 'http://wpsf.github.io/s3/placeholder/150x125-5.gif',
						'body'  => '<h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>',
					),
					array(
						'image' => 'http://wpsf.github.io/s3/placeholder/150x125-1.gif',
						'body'  => '<h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>',
					),
				),
			),
			wponino_field_notice_types( 'danger' ),
			wponino_field_notice_types( 'light' ),
			wponino_field_notice_types( 'dark' ),

		),
	),
);


$options = array(
	array(
		'name'   => 'basic',
		'title'  => __( 'Basic Features' ),
		'fields' => array(
			array(
				'id'    => 'simplefield',
				'type'  => 'text',
				'title' => __( 'Simple Field' ),
			),
			array(
				'id'    => 'field_desc',
				'desc'  => __( 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' ),
				'type'  => 'text',
				'title' => __( 'Simple Field With Description' ),
			),
			array(
				'id'         => 'field_desc_field',
				'desc_field' => __( 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' ),
				'type'       => 'text',
				'title'      => __( 'Simple Field With Description 2' ),
			),
			array(
				'id'    => 'field_help_icon',
				'help'  => __( 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' ),
				'type'  => 'text',
				'title' => __( 'Field With Help Icon' ),
			),

			array(
				'id'     => 'field_before',
				'before' => '<p>' . __( 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' ) . '</p>',
				'type'   => 'text',
				'title'  => __( 'Field With Before Value' ),
			),
			array(
				'id'    => 'field_after',
				'after' => '<p>' . __( 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' ) . '</p>',
				'type'  => 'text',
				'title' => __( 'Field With After Value' ),
			),
			array(
				'id'     => 'field_after_before',
				'after'  => '<p>' . __( 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' ) . '</p>',
				'before' => '<p>' . __( 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' ) . '</p>',
				'type'   => 'text',
				'title'  => __( 'Field With Before & After Value' ),
			),
		),
	),
	array(
		'name'     => 'fields',
		'title'    => __( 'Field Types' ),
		'sections' => $fields_types,
	),
);
*/
/*$_instance = new WPOnion_Settings( array(
	'menu'        => array(
		'type'       => 'parent', # submenu | management | dashboard | options | plugins | theme
		'parent'     => '',
		'title'      => __( 'WPOnion Demo' ),
		'slug'       => 'wponion-demo',
		'capability' => 'manage_options',
		'icon'       => null,
		'position'   => null,
	),
	'extra_css'   => array(),
	'extra_js'    => array(),
	'option_name' => '_wponion_demo',
	'plugin_id'   => 'wponion-demo',
	'theme'       => 'wp',
	'buttons'     => array(
		'save'    => __( 'Save Settings' ),
		'restore' => __( 'Restore' ),
		'reset'   => __( 'Reset All Options' ),
	),
), $options );*/

require_once 'settings-dev.php';