<?php

namespace WPO\Fields;

defined( 'ABSPATH' ) || exit;

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
			$this->_set( 'type', 'spinner' );
		}

		/**
		 * @param int $min
		 *
		 * @return $this
		 */
		public function min( $min = 0 ) {
			return $this->_set( 'min', $min );
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
		public function spinner( $args = array() ) {
			return $this->_set( 'spinner', $args );
		}


	}
}
