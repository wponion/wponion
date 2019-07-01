<?php

namespace WPO\Fields;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( '\WPO\Fields\Spinner' ) ) {
	/**
	 * Class Spinner
	 *
	 * @package WPO\Fields
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Spinner extends Text {
		/**
		 * Spinner constructor.
		 *
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 */
		public function __construct( $id = false, $title = false, $args = array() ) {
			parent::__construct( $id, $title, $args );
			$this['type'] = 'spinner';
		}

		/**
		 * @param int $min
		 *
		 * @return $this
		 */
		public function min( $min = 0 ) {
			$this['min'] = $min;
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
		public function spinner( $args = array() ) {
			$this['spinner'] = $args;
			return $this;
		}


	}
}
