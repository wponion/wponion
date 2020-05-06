<?php

namespace WPO\Fields;

defined( 'ABSPATH' ) || exit;

if ( ! class_exists( 'WPO\Fields\Switcher' ) ) {
	/**
	 * Class Switcher
	 *
	 * @package WPO\Fields
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Switcher extends Checkbox_Radio {
		/**
		 * @var string
		 * @access
		 */
		protected $type = 'switcher';

		/**
		 * @param null $label
		 *
		 * @return $this
		 */
		public function on( $label = null ) {
			$this['on'] = $label;
			return $this;
		}

		/**
		 * @param null $label
		 *
		 * @return $this
		 */
		public function off( $label = null ) {
			$this['off'] = $label;
			return $this;
		}

		/**
		 * For Style List Please Refer
		 * https://hunzaboy.github.io/CSS-Checkbox-Library/
		 *
		 * @see https://hunzaboy.github.io/CSS-Checkbox-Library/
		 *
		 * @param string $style
		 *
		 * @return $this
		 */
		public function switch_style( $style = 'style-8' ) {
			$this['switch_style'] = $style;
			return $this;
		}

		/**
		 * @param $size
		 *
		 * @return $this
		 */
		public function switch_size( $size ) {
			$this['switch_size'] = $size;
			return $this;
		}

		/**
		 * @param $size
		 *
		 * @return $this
		 */
		public function switch_width( $size ) {
			$this['switch_width'] = $size;
			return $this;
		}
	}
}
