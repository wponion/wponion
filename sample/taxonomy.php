<?php
/**
 *
 * Initial version created 29-06-2018 / 11:11 AM
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @package
 * @link
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

$instance = new \WPOnion\Modules\Taxonomy( array(
	'taxonomy'    => array( 'post_tag' ),
	'option_name' => '_wponion_taxonomy_data',
	'plugin_id'   => 'wonion_taxonomy',
) );

foreach ( $wpof as $field ) {
	$instance->merge_fields( $field );
}
$instance->init();