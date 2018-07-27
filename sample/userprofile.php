<?php
/**
 *
 * Initial version created 13-07-2018 / 11:17 AM
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @package
 * @link
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */
$instance = new \WPOnion\Modules\User_Profile( array(
	'option_name' => '_wponion_user_profile',
) );


foreach ( $wpof as $key => $fields ) {
	$instance->merge_fields( $fields );
}
$instance->init();