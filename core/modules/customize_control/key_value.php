<?php
/**
 *
 * Initial version created 12-06-2018 / 04:25 PM
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @package
 * @link
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

namespace WPOnion\Modules\Customize_Control;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Modules\Customize_Control\key_value' ) ) {
	/**
	 * Class key_value
	 *
	 * @package WPOnion\Modules\Customize_Control
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0.
	 */
	class key_value extends \WPOnion\Modules\Customize_Control\cloneable {
		/**
		 * type
		 *
		 * @var string
		 */
		public $type = 'wponion_field_key_value';
	}
}
