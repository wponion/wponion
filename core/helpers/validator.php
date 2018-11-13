<?php
/**
 *
 * Project : bullet-wp
 * Date : 30-07-2018
 * Time : 12:36 PM
 * File : validator.php
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @package bullet-wp
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

if ( ! function_exists( 'wponion_is_url' ) ) {
	/**
	 * Checks if given data is url.
	 *
	 * @param $content
	 *
	 * @return mixed
	 */
	function wponion_is_url( $content ) {
		return ( filter_var( $content, FILTER_VALIDATE_URL ) === false ) ? __( 'Enter A Valid URL' ) : true;
	}
}
