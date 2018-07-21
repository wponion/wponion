<?php
/**
 *
 * Initial version created 25-05-2018 / 03:21 PM
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @package
 * @link
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

if ( ! function_exists( 'wponion_settings' ) ) {
	/**
	 * Returns a new instance for settings page.
	 *
	 * @param array $settings_args
	 * @param array $fields
	 *
	 * @return \WPOnion\Modules\Settings
	 */
	function wponion_settings( $settings_args = array(), $fields = array() ) {
		return new \WPOnion\Modules\Settings( $settings_args, $fields );
	}
}
