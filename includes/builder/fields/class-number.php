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
			$this->_set( 'type', 'number' );
		}

		/**
		 * @param $min
		 *
		 * @return $this
		 */
		public function min( $min ) {
			return $this->_set( 'min', $min );
		}

		/**
		 * @param $min
		 *
		 * @return $this
		 */
		public function max( $max ) {
			return $this->_set( 'max', $max );
		}

		/**
		 * @param $min
		 *
		 * @return $this
		 */
		public function step( $step ) {
			return $this->_set( 'step', $step );
		}
	}
}
