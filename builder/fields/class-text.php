<?php

namespace WPO\Fields;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( 'WPO\Fields\Text' ) ) {
	/**
	 * Class Text
	 *
	 * @package WPO\Fields
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Text extends \WPO\Field {
		/**
		 * Text constructor.
		 *
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 */
		public function __construct( $id = false, $title = false, $args = array() ) {
			parent::__construct( 'text', $id, $title, $args );
		}

		/**
		 * @param $prefix
		 *
		 * @return $this
		 */
		public function prefix( $prefix ) {
			$this['prefix'] = $prefix;
			return $this;
		}

		/**
		 * @param $surfix
		 *
		 * @return $this
		 */
		public function surfix( $surfix ) {
			$this['surfix'] = $surfix;
			return $this;
		}

		/**
		 * @param $inputmask
		 *
		 * @return $this
		 */
		public function inputmask( $inputmask ) {
			$this['inputmask'] = $inputmask;
			return $this;
		}

		/**
		 * @param $options
		 *
		 * @return mixed
		 */
		public function datalist( $options ) {
			return $this->options( $options );
		}
	}
}
