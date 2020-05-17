<?php

namespace WPO\Fields;

defined( 'ABSPATH' ) || exit;

if ( ! class_exists( 'WPO\Fields\Number' ) ) {
	/**
	 * Class Number
	 *
	 * @package WPO\Fields
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Number extends Text {
		/**
		 * Text constructor.
		 *
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 */
		public function __construct( $id = false, $title = false, $args = array() ) {
			parent::__construct( $id, $title, $args );
			$this['type'] = 'number';
		}

		/**
		 * @param $min
		 *
		 * @return $this
		 */
		public function min( $min ) {
			$this['min'] = $min;
			return $this;
		}

		/**
		 * @param $min
		 *
		 * @return $this
		 */
		public function max( $max ) {
			$this['max'] = $max;
			return $this;
		}

		/**
		 * @param $min
		 *
		 * @return $this
		 */
		public function step( $step ) {
			$this['step'] = $step;
			return $this;
		}
	}
}
