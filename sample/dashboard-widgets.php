<?php
/**
 *
 * Initial version created 22-05-2018 / 04:08 PM
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @package
 * @link
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

new WPOnion_Dashboard_Widgets( array(
	'plugin_id' => 'wponion',
), array(
	array(
		'name'        => 'widget_id_1',
		'title'       => 'WPOnion Widget 1',
		'option_name' => '_widget_data',
		'fields'      => array(
			array(
				'type'        => 'notice',
				'notice_type' => 'success',
				'content'     => 'Sample Notice',
			),
		),
		'form_fields' => array(
			array(
				'type'    => 'text',
				'title'   => __( 'Your Name' ),
				'options' => array(
					'select1' => 'Select1',
					'select2' => 'select2',
				),
				'id'      => 'whatsname',
			),

			array(
				'type'    => 'select',
				'select2' => true,
				'title'   => __( 'Your Name' ),
				'options' => array(
					'select1' => 'Select1',
					'select2' => 'select2',
				),
				'id'      => 'whatsname',
			),
		),
	),
) );