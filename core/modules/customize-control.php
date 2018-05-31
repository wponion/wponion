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
	/**
	 * Class customize_control
	 *
	 * @package WPOnion\Modules
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
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

		/**
		 * wrap_class
		 *
		 * @var null|string
		 */
		protected $wrap_class = null;

		/**
		 * customize_control constructor.
		 *
		 * @param \WP_Customize_Manager $manager
		 * @param string                $id
		 * @param array                 $args
		 * @param string                $wrap_class
		 */
		public function __construct( \WP_Customize_Manager $manager, string $id, array $args = array(), $wrap_class = '' ) {
			parent::__construct( $manager, $id, $args );
			$this->wrap_class = $wrap_class;
		}

		/**
		 * Renders HTML Output.
		 */
		public function render_content() {
			$this->options['id']                                        = $this->id;
			$this->options['default']                                   = $this->setting->default;
			$this->options['attributes']['data-customize-setting-link'] = $this->settings['default']->id;

			if ( ! empty( $this->wrap_class ) ) {
				echo '<div class="' . $this->wrap_class . '">';
			}
			echo wponion_add_element( $this->options, $this->value(), $this->unique );
			if ( ! empty( $this->wrap_class ) ) {
				echo '</div>';
			}
		}
	}
}
