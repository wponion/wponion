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

namespace WPOnion\Modules;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPOnion\Modules\customize_control' ) ) {
	class customize_control extends \WP_Customize_Control {

		/**
		 * unique
		 *
		 * @var string
		 */
		public $unique = '';

		/**
		 * type
		 *
		 * @var string
		 */
		public $type = 'wponion_field';

		/**
		 * options
		 *
		 * @var array
		 */
		public $options = array();

		public function render_content() {
			$this->options['id']                                        = $this->id;
			$this->options['default']                                   = $this->setting->default;
			$this->options['attributes']['data-customize-setting-link'] = $this->settings['default']->id;
			echo wponion_add_element( $this->options, $this->value(), $this->unique );
		}
	}
}