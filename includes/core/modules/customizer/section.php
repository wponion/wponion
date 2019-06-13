<?php
/**
 *
 * Initial version created 28-05-2018 / 02:11 PM
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @package
 * @link
 * @copyright 2018 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

namespace WPOnion\Modules\Customizer;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Modules\Customizer\Section' ) ) {
	/**
	 * Class Section
	 *
	 * @package WPOnion\Modules\Customizer
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Section extends \WP_Customize_Section {
		/**
		 * @var string
		 * @access
		 */
		public $type = 'wponion';

	}
}
