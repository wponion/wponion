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

namespace WPOnion\Modules\Customize\Control;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Modules\Customize\Control\key_value' ) ) {
	/**
	 * Class key_value
	 *
	 * @package WPOnion\Modules\Customize_Control
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0.
	 */
	class key_value extends \WPOnion\Modules\Customize\control {
		/**
		 * type
		 *
		 * @var string
		 */
		public $type = 'wponion_field_key_value';


		/**
		 * Returns Field Args.
		 *
		 * @return array
		 */
		protected function field() {
			$this->options['id']                                        = $this->id;
			$this->options['default']                                   = $this->setting->default;
			$this->options['attributes']['data-customize-setting-link'] = $this->settings['default']->id;
			return $this->options;
		}
	}
}
