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

if ( ! class_exists( '\WPOnion\Modules\Customizer\Control' ) ) {
	/**
	 * Class customize_control
	 *
	 * @package WPOnion\Modules
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Control extends \WP_Customize_Control {
		/**
		 * unique
		 *
		 * @var array
		 */
		protected $unique = '';

		/**
		 * @var bool
		 * @access
		 */
		protected $link_attr = true;

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
		 * after_field
		 *
		 * @var null
		 */
		protected $after_field = null;

		/**
		 * before_field
		 *
		 * @var null
		 */
		protected $before_field = null;

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

			if ( wponion_is_cloneable( $args['options'] ) ) {
				$this->type = 'wponion_field_clone';
			} else {
				$this->type = ( isset( $args['type'] ) && ! empty( $args['type'] ) ) ? 'wponion_field_' . $args['type'] : 'wponion_field';
			}

			$this->wrap_class = $wrap_class;
		}

		/**
		 * Returns Element Value.
		 *
		 * @return mixed
		 */
		protected function el_value() {
			return $this->value();
		}

		/**
		 * Returns Element Unique
		 *
		 * @return string|array
		 */
		protected function unique() {
			return $this->unique;
		}

		/**
		 * Returns Field Args.
		 *
		 * @return array
		 */
		protected function field() {
			$this->options['id']            = $this->id;
			$this->options['default']       = $this->setting->default;
			$this->options['__no_instance'] = true;
			if ( true === $this->link_attr ) {
				$this->options['attributes']['data-customize-setting-link'] = $this->settings['default']->id;
			}
			return $this->options;
		}

		/**
		 * Renders HTML Output.
		 */
		public function render_content() {
			if ( ! empty( $this->wrap_class ) ) {
				echo '<div class="' . $this->wrap_class . '">';
			}

			echo $this->before_field;
			$field               = $this->field();
			$field['horizontal'] = true;

			echo wponion_add_element( $this->field(), $this->el_value(), $this->unique() );
			echo $this->after_field;

			if ( ! empty( $this->wrap_class ) ) {
				echo '</div>';
			}
		}
	}
}
