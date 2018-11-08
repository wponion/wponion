<?php
/**
 *
 * Initial version created 31-05-2018 / 07:07 AM
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @package
 * @link
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

namespace WPOnion\Value;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Value\key_value' ) ) {
	/**
	 * Class key_value
	 *
	 * @package WPOnion\Value
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class key_value extends \WPOnion\Bridge\value_loop {
	}
}
