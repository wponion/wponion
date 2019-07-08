<?php

namespace WPO\Fields;

use WPO\Field;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! class_exists( 'WPO\Fields\Key_Value' ) ) {
	/**
	 * Class Color_Picker
	 *
	 * @package WPO\Fields
	 * @author Varun Sridharan <varunsridharan23@gmail.com>
	 * @since 1.0
	 */
	class Key_Value extends Field {
		/**
		 * Color_Group constructor.
		 *
		 * @param bool  $id
		 * @param bool  $title
		 * @param array $args
		 */
		public function __construct( $id = false, $title = false, $args = array() ) {
			parent::__construct( 'key_value', $id, $title, $args );
		}

		/**
		 * @param $button
		 *
		 * @return $this
		 */
		public function add_button( $button ) {
			$this['add_button'] = $button;
			return $this;
		}

		/**
		 * @param $button
		 *
		 * @return $this
		 */
		public function remove_button( $button ) {
			$this['remove_button'] = $button;
			return $this;
		}

		/**
		 * @param bool $limit
		 *
		 * @return $this
		 */
		public function limit( $limit = false ) {
			$this['limit'] = $limit;
			return $this;
		}

		/**
		 * @param $error_msg
		 *
		 * @return $this
		 */
		public function error_msg( $error_msg ) {
			$this['error_msg'] = $error_msg;
			return $this;
		}

		/**
		 * @param $input
		 *
		 * @return $this
		 */
		public function key_input( $input ) {
			$this['key_input'] = $input;
			return $this;
		}

		/**
		 * @param $input
		 *
		 * @return $this
		 */
		public function value_input( $input ) {
			$this['value_input'] = $input;
			return $this;
		}
	}
}
