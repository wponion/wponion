<?php

namespace WPO\Fields;

defined( 'ABSPATH' ) || exit;

if ( ! class_exists( 'WPO\Fields\Textarea' ) ) {
	/**
	 * Class Textarea
	 *
	 * @package WPO\Fields
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Textarea extends Text {
		/**
		 * Text constructor.
		 *
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 */
		public function __construct( $id = false, $title = false, $args = array() ) {
			parent::__construct( $id, $title, $args );
			$this->_set( 'type', 'textarea' );
		}

		/**
		 * @param int $rows
		 *
		 * @return \WPO\Fields\Textarea
		 */
		public function rows( $rows = 5 ) {
			return $this->_set( 'rows', $rows );
		}

		/**
		 * @param int $cols
		 *
		 * @return \WPO\Fields\Textarea
		 */
		public function cols( $cols = 5 ) {
			return $this->_set( 'cols', $cols );
		}
	}
}
