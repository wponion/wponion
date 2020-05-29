<?php

namespace WPO\Fields;

defined( 'ABSPATH' ) || exit;

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
			$this->_set( 'type', 'range_slider' );
		}

		/**
		 * @param string|int $min
		 *
		 * @return $this
		 */
		public function min( $min = 0 ) {
			return $this->_set( 'min', $min );
		}

		/**
		 * @param string|int $slider_width
		 *
		 * @return $this
		 */
		public function slider_width( $slider_width = '90%' ) {
			return $this->_set( 'slider_width', $slider_width );
		}

		/**
		 * @param int $max
		 *
		 * @return $this
		 */
		public function max( $max = 100 ) {
			return $this->_set( 'max', $max );

		}

		/**
		 * @param int $step
		 *
		 * @return $this
		 */
		public function step( $step = 1 ) {
			return $this->_set( 'step', $step );
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
			return $this->_set( 'slider', $args );
		}


	}
}
