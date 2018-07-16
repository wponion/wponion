<?php
/**
 *
 * Initial version created 18-06-2018 / 10:54 AM
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @package
 * @link
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

$ins = new \WPOnion\Modules\Metabox( array(
	'option_name'   => '_wcrbp_metabox',
	'metabox_title' => 'WPOnion All In 1 Metabox',
	'screens'       => 'page',
	'metabox_id'    => false,
	'context'       => 'normal',
	'priority'      => null,
) );

function wponion_required_value() {
	return 'Value Is Required';
}

$ins->page( 'Core Fields', 'core_fields' );
foreach ( $wpof as $key => $fields ) {
	$ins->section( $key, $key )
		->merge_fields( $fields );

	$instance_mbf = new \WPOnion\Modules\metabox( array(
		'option_name'   => '_wponion_metabox_side_' . $key,
		'metabox_title' => 'WPOnion : ' . $key,
		'screens'       => 'page',
		'metabox_id'    => false,
		'context'       => 'side',
	) );
	$instance_mbf->merge_fields( $fields )
	->init();

	$instance_mbf = new \WPOnion\Modules\metabox( array(
		'option_name'   => '_wponion_metabox_' . $key,
		'metabox_title' => 'WPOnion : ' . $key,
		'screens'       => 'page',
		'metabox_id'    => false,
		'context'       => 'normal',
	) );
	$instance_mbf->merge_fields( $fields )
	->init();
}
$ins->init();
