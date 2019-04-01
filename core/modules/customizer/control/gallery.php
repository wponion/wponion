<?php
/**
 *
 * Initial version created 15-06-2018 / 12:53 PM
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @package
 * @link
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */


namespace WPOnion\Modules\Customizer\Control;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Modules\Customizer\Control\Gallery' ) ) {
	/**
	 * Class image_select
	 *
	 * @package WPOnion\Modules\Customize_Control
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Gallery extends \WPOnion\Modules\Customizer\Control\Cloneable {
		/**
		 * type
		 *
		 * @var string
		 */
		public $type = 'wponion_field_gallery';
	}
}
