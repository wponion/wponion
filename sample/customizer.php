<?php
/**
 *
 * Initial version created 28-05-2018 / 02:05 PM
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @package
 * @link
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

$customizer_fields = array();

foreach ( $wpof as $name => $field ) {
	$customizer_fields[] = array(
		'name'   => 'wponion_' . $name,
		'title'  => $name . ' Field',
		'fields' => $field->get(),
	);
}

$ins = new \WPOnion\Modules\customizer( array(
	'option_name' => '_wponion_customizer_demo',
	'plugin_id'   => 'wponion_customizer',
), array(
	array(
		'name'     => 'wponion',
		'title'    => 'WPOnion Fields',
		'sections' => $customizer_fields,
	),
) );

if ( ! is_admin() && ! defined( 'DOING_AJAX' ) && ! defined( 'IFRAME_REQUEST' ) ) {
	//echo '<pre>' . print_r( $ins->values()
	//		->get( 'cpik' ), true ) . ' </pre > ';
	#exit;
}
