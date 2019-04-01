<?php
/**
 *
 * Project : wponion
 * Date : 26-11-2018
 * Time : 12:28 PM
 * File : wp-error-notice.php
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @package wponion
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

namespace WPOnion\Field;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}


if ( ! class_exists( '\WPOnion\Field\WP_Notice_Error' ) ) {
	/**
	 * Class WP_Notice_Error
	 *
	 * @package WPOnion\Field
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class WP_Notice_Error extends WP_Notice {
		protected $notice_type = 'error';
	}
}
