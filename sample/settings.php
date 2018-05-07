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
$options = array(
	array(
		'name'   => 'page1',
		'title'  => __( 'Page1' ),
		'icon'   => 'fa fa-o',
		'fields' => array(),
	),

	array(
		'name'     => 'page2',
		'title'    => __( 'Page2' ),
		'sections' => array(
			array(
				'name'   => 'page2-1',
				'title'  => __( 'Page2-1' ),
				'fields' => array(),
			),
			array(
				'name'   => 'page2-2',
				'title'  => __( 'Page2-2' ),
				'fields' => array(),
			),
			array(
				'name'   => 'page2-3',
				'title'  => __( 'Page2-3' ),
				'fields' => array(),
			),
		),
	),

	array(
		'name'     => 'page3',
		'title'    => __( 'Page3' ),
		'callback' => 'customcallback',
	),
);


new WPOnion_Settings( $options, array(
	'menu'      => array(
		'type'  => 'management',
		'title' => 'wponion',
		'slug'  => 'bwpt',
	),
	'plugin_id' => 'boilerplate',
) );

new WPOnion_Settings( $options, array(
	'menu'          => array(
		'type'  => 'management',
		'title' => 'wponion',
		'slug'  => 'bwpt2',
	),
	'plugin_id'     => 'boilerplate2',
	'theme'         => 'modern2',
	'template_path' => __DIR__ . '/templates',
) );
