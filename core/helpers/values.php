<?php
/**
 *
 * Project : wponion
 * Date : 19-11-2018
 * Time : 06:30 AM
 * File : values.php
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @package wponion
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */


if ( ! function_exists( 'wponion_settings_option' ) ) {
	/**
	 * @param string $option_slug
	 *
	 * @return bool|\WPOnion\Value_API
	 */
	function wponion_settings_option( $option_slug = '' ) {
		$instance = wponion_settings( $option_slug );
		if ( $instance ) {
			return $instance->values();
		}
		return false;
	}
}
