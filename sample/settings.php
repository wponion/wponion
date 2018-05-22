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
$fields_types = array(
	array(
		'title'  => __( 'Basic Features' ),
		'name'   => 'basicfeatures',
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

	/**
	 * Text Fields
	 */
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
					'onincomplete' => "function(){ alert('inputmask incomplete'); }",
				),
				'type'      => 'text',
				'title'     => __( 'Triggers an alert on complete' ),
			),

		),
	),

);


$options = array(
	array(
		'name'     => 'fields',
		'title'    => __( 'Field Types' ),
		'sections' => $fields_types,
	),
);

$_instance = new WPOnion_Settings( array(
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
), $options );

require_once 'settings-dev.php';