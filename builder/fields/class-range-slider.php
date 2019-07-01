<?php

namespace WPO\Fields;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPO\Fields\Range_Slider' ) ) {
	/**
	 * Class Range_Slider
	 *
	 * @package WPO\Fields
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Range_Slider extends Text {
		/**
		 * Range_Slider constructor.
		 *
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 */
		public function __construct( $id = false, $title = false, $args = array() ) {
			parent::__construct( $id, $title, $args );
			$this['type'] = 'range_slider';
		}

		/**
		 * @param string|int $min
		 *
		 * @return $this
		 */
		public function min( $min = 0 ) {
			$this['min'] = $min;
			return $this;
		}

		/**
		 * @param string|int $slider_width
		 *
		 * @return $this
		 */
		public function slider_width( $slider_width = '90%' ) {
			$this['slider_width'] = $slider_width;
			return $this;
		}

		/**
		 * @param int $max
		 *
		 * @return $this
		 */
		public function max( $max = 100 ) {
			$this['max'] = $max;
			return $this;

		}

		/**
		 * @param int $step
		 *
		 * @return $this
		 */
		public function step( $step = 1 ) {
			$this['step'] = $step;
			return $this;
		}

		/**
		 * @param array $args
		 *
		 * @return $this
		 */
		protected function spinner( $args = array() ) {
			return $this->slider( $args );
		}

		/**
		 * @param array $args
		 *
		 * @return $this
		 */
		public function slider( $args = array() ) {
			$this['slider'] = $args;
			return $this;
		}


	}
}
