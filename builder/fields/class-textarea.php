<?php

namespace WPO\Fields;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

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
			$this['type'] = 'textarea';
		}

		/**
		 * @param int $rows
		 *
		 * @return \WPO\Fields\Textarea
		 */
		public function rows( $rows = 5 ) {
			$this['rows'] = $rows;
			return $this;
		}

		/**
		 * @param int $cols
		 *
		 * @return \WPO\Fields\Textarea
		 */
		public function cols( $cols = 5 ) {
			$this['cols'] = $cols;
			return $this;
		}
	}
}
