<?php
/**
 *
 * @author Varun Sridharan <varunsridharan23@gmail.com>
 * @version 1.0
 * @since 1.0
 * @link
 * @copyright 2019 Varun Sridharan
 * @license GPLV3 Or Greater (https://www.gnu.org/licenses/gpl-3.0.txt)
 */

namespace WPO\Fields;

if ( ! class_exists( 'WPO\Fields\Checkbox' ) ) {
	/**
	 * Class Checkbox
	 *
	 * @package WPO\Fields
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Checkbox extends Checkbox_Radio {
		/**
		 * @var string
		 * @access
		 */
		protected $type = 'checkbox';
	}
}
